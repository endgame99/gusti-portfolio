import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "AI Workspace Preview",
};

const workflow = [
  "Product Input",
  "Reference & Direction",
  "AI Photoshoot Output",
  "Catalog / Lookbook Output",
  "Campaign Output",
  "UGC Concept Output",
  "AI Video Direction",
  "PDP / Product Page Output",
  "Motion Reveal",
] as const;

export default function WorkspacePage() {
  return <PlaceholderPage title="AI Workspace Preview" items={workflow} />;
}
