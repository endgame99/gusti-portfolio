import Link from "next/link";

type CasePlaceholderProps = {
  title: string;
  meta: string;
};

export function CasePlaceholder({ title, meta }: CasePlaceholderProps) {
  return (
    <main className="case-placeholder">
      <div className="case-placeholder__inner">
        <p className="case-placeholder__meta">{meta}</p>
        <h1>{title}</h1>
        <p className="case-placeholder__status">Case study coming soon</p>
        <Link className="case-placeholder__back" href="/work">
          Back to /work
        </Link>
      </div>
    </main>
  );
}
