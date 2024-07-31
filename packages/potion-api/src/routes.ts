import { Hono } from "hono";
import { cors } from "hono/cors";
import { z } from "zod";
import prisma from "./lib/prisma.js";

const app = new Hono().basePath("/api");

app.use(
  "/*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: false,
  })
);

const select = {
  ...Object.fromEntries(
    Object.keys(prisma.potion.fields).map((f) => [f, true])
  ),
  ingredients: {
    select: {
      quantity: true,
      ingredient: true,
    },
  },
  metrics: {
    select: {
      ...Object.fromEntries(
        Object.keys(prisma.metrics.fields).map((f) => [f, true])
      ),
      id: false,
      potionId: false,
      potion: false,
    },
  },
  magicalBrewStats: {
    select: {
      ...Object.fromEntries(
        Object.keys(prisma.magicalBrewStats.fields).map((f) => [f, true])
      ),
      id: false,
      potionId: false,
      potion: false,
    },
  },
}

app.get("/potions", async (c) => {
  const potions = await prisma.potion.findMany({
    include: {
      ingredients: {
        include: {
          ingredient: true,
        },
      },
      metrics: true,
      magicalBrewStats: true,
    },
  });
  return c.json(potions);
});

app.post("/potions", async (c) => {
  const body = await c.req.json();
  const { ingredients, metrics, magicalBrewStats, ...potionData } = body;

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
      metrics: {
        create: metrics,
      },
      magicalBrewStats: {
        create: magicalBrewStats,
      },
    },
    include: {
      ingredients: {
        include: {
          ingredient: true,
        },
      },
      metrics: true,
      magicalBrewStats: true,
    },
  });

  return c.json(newPotion, 201);
});

app.delete("/potions/:id", async (c) => {
  const id = c.req.param("id");

  try {
    await prisma.$transaction(async (tx) => {
      await tx.potionIngredient.deleteMany({
        where: { potionId: id },
      });

      await tx.metrics.delete({
        where: { potionId: id },
      });

      await tx.magicalBrewStats.delete({
        where: { potionId: id },
      });

      await tx.potion.delete({
        where: { id },
      });
    });

    return c.json({ message: "Potion deleted successfully" });
  } catch (error) {
    console.error("Error deleting potion:", error);
    return c.json({ error: "Failed to delete potion" }, 500);
  }
});

app.get("/potions/random", async (c) => {
  try {
    const potionCount = await prisma.potion.count();
    const randomIndex = Math.floor(Math.random() * potionCount);
    const randomPotion = await prisma.potion.findMany({
      take: 1,
      skip: randomIndex,
      select: {
        ...select,
        id: true,
      },
    });

    if (randomPotion.length === 0) {
      return c.json({ message: "No potions available" }, 404);
    }

    const potion = randomPotion[0];

    const suggestedPotions = await prisma.potion.findMany({
      where: {
        id: {
          not: potion.id,
        },
      },
      take: 3,
      include: {
        metrics: true,
        magicalBrewStats: true,
      },
    });

    const response = {
      ...potion,
      suggestedPotions,
    };

    return c.json(response);
  } catch (error) {
    console.error(error);
    return c.json({ message: "Internal Server Error" }, 500);
  }
});

app.get("/potions/:id", async (c) => {
  const id = c.req.param("id");
  const potion = await prisma.potion.findUnique({
    where: { id },
    select,
  });

  if (!potion) {
    return c.json({ message: "Potion not found" }, 404);
  }

  const suggestedPotions = await prisma.potion.findMany({
    where: {
      id: {
        not: id,
      },
    },
    take: 3,
    include: {
      metrics: true,
      magicalBrewStats: true,
    },
  });

  const response = {
    ...potion,
    suggestedPotions,
  };

  return c.json(response);
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

app.post("/ingredients/:id/inventory", async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json();

  const schema = z.object({
    inventory: z.number().int().nonnegative(),
  });

  const result = schema.safeParse(body);

  if (!result.success) {
    return c.json(
      { error: "Invalid input", details: result.error.issues },
      400
    );
  }

  const { inventory } = result.data;

  try {
    const updatedIngredient = await prisma.ingredient.update({
      where: { id },
      data: { inventory },
    });

    return c.json(updatedIngredient);
  } catch (error) {
    console.error("Failed to update ingredient inventory:", error);
    return c.json({ error: "Failed to update ingredient inventory" }, 500);
  }
});

export default app;
