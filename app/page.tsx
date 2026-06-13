import { PlaceholderPage } from "@/components/PlaceholderPage";

const homepageSections = [
  "Header",
  "Opening Hero Text",
  "Motion / Video Journey Preview",
  "Core Hero Text",
  "Creative Finder",
  "Featured Work",
  "Capabilities Preview",
  "Creative Library Preview",
  "AI Workspace / Generator Preview",
  "Footer",
] as const;

export default function HomePage() {
  return (
    <PlaceholderPage
      title="Gustiansyah"
      note="Homepage structure will follow the locked PRD order."
      items={homepageSections}
    />
  );
}
