import Link from "next/link";

const visualPreviewCards = [
  {
    title: "Product Visuals",
    label: "01",
    description: "Premium product scenes, catalog angles, and marketplace-ready visuals.",
  },
  {
    title: "AI Videos",
    label: "02",
    description: "Keyframes, motion prompts, and short-form video direction.",
  },
  {
    title: "Ecommerce Campaigns",
    label: "03",
    description: "PDP, launch assets, product storytelling, and conversion-focused layouts.",
  },
  {
    title: "Brand Content",
    label: "04",
    description: "Structured visual systems for campaigns, launches, and daily brand content.",
  },
] as const;

const productionSteps = ["Idea", "Direction", "Production", "Campaign-ready output"] as const;

const finderExamples = [
  "Premium ecommerce visuals",
  "AI campaign concept",
  "UGC angles for TikTok Shop",
  "Brand launch direction",
] as const;

const featuredWork = [
  { title: "STARMAP", meta: "Latest 2026 / AI Creative Direction", href: "/work/starmap" },
  { title: "Alfas Fragrance", meta: "Ecommerce Campaign / Product Visuals", href: "/work/alfas-fragrance" },
  { title: "Fabil Natural", meta: "Brand Content / Product Storytelling", href: "/work/fabil-natural" },
  { title: "Fat Sport", meta: "Performance Product / Visual Direction", href: "/work/fat-sport" },
] as const;

const capabilities = [
  "Product Visuals",
  "AI Video Production",
  "Ecommerce Campaigns",
  "UGC Direction",
  "Creative Systems",
] as const;

const libraryItems = [
  "Visual Directions",
  "Ecommerce Layouts",
  "AI Photoshoot References",
  "UGC Hooks",
  "Campaign References",
] as const;

const workspaceModules = ["Product Brief", "Visual Direction", "Shot List", "AI Prompt", "Campaign Angle"] as const;

export default function HomePage() {
  return (
    <main className="homepage">
      <section className="showcase-stage" aria-labelledby="showcase-title">
        <div className="showcase-stage__copy">
          <p className="section-eyebrow">Selected AI production outputs</p>
          <h1 id="showcase-title">From product idea to campaign-ready visual systems.</h1>
          <p>
            A fast-moving preview of product visuals, AI video directions, ecommerce campaigns,
            and brand content produced through research, creative direction, and AI-assisted workflows.
          </p>
        </div>

        <div className="output-console" aria-label="Visual output preview">
          <div className="output-console__topbar">
            <span>Production preview</span>
            <span>Research to creative direction to AI output</span>
          </div>
          <div className="output-console__grid">
            {visualPreviewCards.map((card) => (
              <article className="output-card" key={card.title}>
                <span>{card.label}</span>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
          <div className="journey-strip" aria-label="Production journey">
            {productionSteps.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="core-hero" aria-labelledby="core-hero-title">
        <p className="section-eyebrow">Independent AI Production Partner</p>
        <h2 id="core-hero-title">Informed by data. Shaped by imagination. Produced with AI.</h2>
        <p>
          Product visuals, AI videos, ecommerce campaigns, and brand content shaped through research,
          creative direction, and production workflows.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="mailto:hello@gustiansyah.com">Hire Me</a>
          <Link className="button button--secondary" href="/work">Explore Work</Link>
        </div>
      </section>

      <section className="creative-finder" aria-labelledby="creative-finder-title">
        <div>
          <p className="section-eyebrow">Creative Finder</p>
          <h2 id="creative-finder-title">Tell me what you need to build.</h2>
          <p>
            Start with a product, campaign, or visual problem. The system is planned to turn that
            input into sharper creative direction.
          </p>
        </div>
        <div className="finder-panel">
          <div className="finder-input">Describe your product, campaign, or visual problem...</div>
          <div className="finder-chips">
            {finderExamples.map((example) => (
              <span key={example}>{example}</span>
            ))}
          </div>
          <button className="button button--primary" type="button">Find creative direction</button>
        </div>
      </section>

      <section className="content-section" aria-labelledby="featured-work-title">
        <div className="section-heading">
          <p className="section-eyebrow">Selected Work</p>
          <h2 id="featured-work-title">Projects, systems, and creative directions in progress.</h2>
          <p>A curated selection of product, ecommerce, and AI-assisted brand projects.</p>
        </div>
        <div className="work-grid">
          {featuredWork.map((project) => (
            <Link className="work-card" href={project.href} key={project.title}>
              <span>{project.meta}</span>
              <h3>{project.title}</h3>
              <p>Case study coming soon</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section split-section" aria-labelledby="capabilities-title">
        <div className="section-heading section-heading--sticky">
          <p className="section-eyebrow">How I can help</p>
          <h2 id="capabilities-title">Creative production for product and campaign problems.</h2>
          <Link className="text-link" href="/capabilities">View capabilities -&gt;</Link>
        </div>
        <div className="stacked-list">
          {capabilities.map((item) => (
            <article key={item}>
              <h3>{item}</h3>
              <p>Structured direction for faster, cleaner, and more repeatable creative output.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section library-preview" aria-labelledby="library-title">
        <div className="section-heading">
          <p className="section-eyebrow">Creative Library</p>
          <h2 id="library-title">A reference vault for sharper visual decisions.</h2>
          <p>Visual directions, ecommerce layouts, AI photoshoot references, UGC hooks, and campaign patterns.</p>
        </div>
        <div className="library-grid">
          {libraryItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="workspace-preview" aria-labelledby="workspace-title">
        <div>
          <p className="section-eyebrow">AI Workspace</p>
          <h2 id="workspace-title">A future workspace for faster creative direction.</h2>
          <p>
            A planned interface for turning product problems, references, and campaign goals into
            structured creative outputs.
          </p>
        </div>
        <div className="workspace-modules">
          {workspaceModules.map((module) => (
            <span key={module}>{module}</span>
          ))}
        </div>
      </section>

      <section className="closing-cta" aria-labelledby="closing-title">
        <p className="section-eyebrow">Start with the problem</p>
        <h2 id="closing-title">Have a product or campaign to build?</h2>
        <p>
          Send the product, problem, or campaign goal. I can help shape the visual direction,
          content system, and AI production workflow.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="mailto:hello@gustiansyah.com">Hire Me</a>
          <Link className="button button--secondary" href="/work">Explore Work</Link>
        </div>
      </section>
    </main>
  );
}
