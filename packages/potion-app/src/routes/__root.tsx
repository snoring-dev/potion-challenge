import { createRootRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Navbar } from "../components/Navbar";
import { useCallback } from "react";

export const Route = createRootRoute({
  component: Layout,
});

function Layout() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Ingredients", href: "/ingredients" },
    { label: "Potion au hasard", href: "/potion/123" },
  ];

  const redirectToCreatePotion = useCallback(() => {
    navigate({ to: "/create-potion" });
  }, [navigate]);

  return (
    <>
      <Navbar
        logo="https://res.cloudinary.com/mjemmoudi/image/upload/v1722165960/potion_icon_terykh.png"
        brandName="PotionLab"
        navItems={navItems}
        ctaButtonLabel="Nouveau potion"
        onCtaClick={redirectToCreatePotion}
      />
      <div className="my-32">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
