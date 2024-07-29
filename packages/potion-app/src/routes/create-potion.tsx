import { createFileRoute } from "@tanstack/react-router";
import { AddPotionForm } from "../components/AddPotionForm";

export const Route = createFileRoute("/create-potion")({
  component: CreatePotionPage,
});

function CreatePotionPage() {
  return <AddPotionForm />;
}
