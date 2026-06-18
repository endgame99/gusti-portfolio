import type { Metadata } from "next";
import { CasePlaceholder } from "@/components/CasePlaceholder";

export const metadata: Metadata = {
  title: "STARMAP",
};

export default function StarmapPage() {
  return (
    <CasePlaceholder
      title="STARMAP"
      meta="Brand / AI Creative Direction / Product Release"
    />
  );
}
