import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Featured Work",
};

const projects = [
  "STARMAP",
  "ALFAS FRAGRANCE",
  "FABIL NATURAL",
  "FAT SPORT",
] as const;

export default function WorkPage() {
  return <PlaceholderPage title="Featured Work" items={projects} />;
}
