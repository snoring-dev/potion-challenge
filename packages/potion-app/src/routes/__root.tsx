import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/ingredients" className="[&.active]:font-bold">
          Ingredients
        </Link>
        <Link
          params={{ potionId: "123" }}
          to="/potion/$potionId"
          className="[&.active]:font-bold"
        >
          Potion Details
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
