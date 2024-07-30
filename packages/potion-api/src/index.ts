import "dotenv/config";
import { serve } from "@hono/node-server";
import { handle } from "@hono/node-server/vercel";
import routes from "./routes.js";
import prisma from "./lib/prisma.js";
import { Hono } from "hono";

const app = new Hono();

app.route("", routes);

app.get("/", (c) => {
  return c.html("<h1>Welcome to PotionLab api!</h1>");
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.text("Internal Server Error", 500);
});

export default handle(app);

if (process.env.NODE_ENV !== "production") {
  const port = Number(process.env.PORT ?? 80) || undefined;
  console.log(`Server is running on port ${port}`);

  serve({
    fetch: app.fetch,
    port,
  });

  process.on("SIGINT", async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}
