import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Capabilities",
};

const capabilities = [
  "AI Product Visuals",
  "AI Video Production",
  "AI Photoshoot",
  "Ecommerce Campaigns",
  "UGC Content Direction",
  "Motion Design",
  "PDP / Product Display Design",
  "Branding & Packaging",
] as const;

export default function CapabilitiesPage() {
  return <PlaceholderPage title="Capabilities" items={capabilities} />;
}
