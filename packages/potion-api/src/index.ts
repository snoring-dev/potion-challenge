import { serve } from "@hono/node-server";
import routes from "./routes";
import prisma from "./lib/prisma";

const port = process.env.PORT as number | undefined;
console.log(`Server is running on port ${port}`);

serve({
  fetch: routes.fetch,
  port,
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
