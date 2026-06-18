import type { Metadata } from "next";
import { CasePlaceholder } from "@/components/CasePlaceholder";

export const metadata: Metadata = {
  title: "FAT SPORT",
};

export default function FatSportPage() {
  return (
    <CasePlaceholder
      title="FAT SPORT"
      meta="Sports / Product Campaign / Content Direction"
    />
  );
}
