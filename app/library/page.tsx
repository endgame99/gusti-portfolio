import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Creative Library",
};

const categories = [
  "Product Visuals",
  "AI Photoshoot",
  "AI Video",
  "Catalog",
  "Lookbook",
  "UGC",
  "Motion",
  "PDP / Product Page",
  "Campaign",
  "Packaging",
  "Branding",
  "China Ecommerce",
  "Korean Minimalist / Coming Soon",
  "Experiments",
] as const;

export default function LibraryPage() {
  return <PlaceholderPage title="Creative Library" items={categories} />;
}
