import type { Metadata } from "next";
import { CasePlaceholder } from "@/components/CasePlaceholder";

export const metadata: Metadata = {
  title: "ALFAS FRAGRANCE",
};

export default function AlfasFragrancePage() {
  return (
    <CasePlaceholder
      title="ALFAS FRAGRANCE"
      meta="Product Visuals / Campaign / Ecommerce Content"
    />
  );
}
