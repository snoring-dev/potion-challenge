import { Hono } from "hono";
import { cors } from "hono/cors";
import prisma from "./lib/prisma";

const app = new Hono().basePath("/api");

app.use(
  "/*",
  cors({
    origin: "http://localhost:5173", // Your React app's URL
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

app.get("/potions", async (c) => {
  const potions = await prisma.potion.findMany({
    include: {
      ingredients: {
        include: {
          ingredient: true,
        },
      },
    },
  });
  return c.json(potions);
});

app.post("/potions", async (c) => {
  const body = await c.req.json();
  const { ingredients, ...potionData } = body;

  const newPotion = await prisma.potion.create({
    data: {
      ...potionData,
      ingredients: {
        create: ingredients.map((ing: { id: string; quantity: number }) => ({
          ingredient: {
            connect: { id: ing.id },
          },
          quantity: ing.quantity,
        })),
      },
    },
    include: {
      ingredients: {
        include: {
          ingredient: true,
        },
      },
    },
  });
  return c.json(newPotion, 201);
});

app.get("/potions/:id", async (c) => {
  const id = c.req.param("id");
  const potion = await prisma.potion.findUnique({
    where: { id },
    include: {
      ingredients: {
        include: {
          ingredient: true,
        },
      },
    },
  });
  if (!potion) {
    return c.json({ message: "Potion not found" }, 404);
  }
  return c.json(potion);
});

app.get("/ingredients", async (c) => {
  const ingredients = await prisma.ingredient.findMany();
  return c.json(ingredients);
});

app.get("/ingredients/:id", async (c) => {
  const id = c.req.param("id");
  const ingredient = await prisma.ingredient.findUnique({
    where: { id },
    include: { potions: { include: { potion: true } } },
  });
  if (!ingredient) {
    return c.json({ message: "Ingredient not found" }, 404);
  }
  return c.json(ingredient);
});

app.post("/ingredients", async (c) => {
  const body = await c.req.json();
  const newIngredient = await prisma.ingredient.create({
    data: {
      name: body.name,
      shortDescription: body.shortDescription,
      inventory: body.inventory,
    },
  });
  return c.json(newIngredient, 201);
});

app.delete("/ingredients/:id", async (c) => {
  const id = c.req.param("id");
  await prisma.ingredient.delete({
    where: { id },
  });
  return c.json({ message: "Ingredient deleted successfully" });
});

app.post("/potions/:potionId/ingredients", async (c) => {
  const potionId = c.req.param("potionId");
  const body = await c.req.json();
  const updatedPotion = await prisma.potion.update({
    where: { id: potionId },
    data: {
      ingredients: {
        create: {
          ingredient: {
            connect: { id: body.ingredientId },
          },
          quantity: body.quantity,
        },
      },
    },
    include: { ingredients: { include: { ingredient: true } } },
  });
  return c.json(updatedPotion);
});

app.delete("/potions/:potionId/ingredients/:ingredientId", async (c) => {
  const potionId = c.req.param("potionId");
  const ingredientId = c.req.param("ingredientId");
  await prisma.potionIngredient.delete({
    where: {
      potionId_ingredientId: {
        potionId,
        ingredientId,
      },
    },
  });
  return c.json({ message: "Ingredient removed from potion successfully" });
});

export default app;
