const visualPreviewCards = [
  "Product Visual",
  "AI Video",
  "Ecommerce Campaign",
  "Brand Content",
] as const;

const featuredWork = [
  "STARMAP",
  "Alfas Fragrance",
  "Fabil Natural",
  "Fat Sport",
] as const;

const solutions = [
  "Product Visuals",
  "AI Video",
  "Ecommerce Campaigns",
  "UGC Direction",
  "Creative Systems",
] as const;

const creativeLibrary = [
  "Visual Directions",
  "Ecommerce Layouts",
  "AI Photoshoot References",
  "UGC Hooks",
  "Campaign References",
] as const;

export default function HomePage() {
  return (
    <main className="homepage">
      <section className="home-section home-motion-preview" aria-labelledby="motion-preview-title">
        <div className="home-section__header">
          <p className="home-kicker">Visual Output Preview / Motion Journey Preview</p>
          <h2 id="motion-preview-title">A first look at the output system.</h2>
        </div>
        <div className="visual-output-grid">
          {visualPreviewCards.map((card, index) => (
            <article className="visual-output-card" key={card}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{card}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="home-hero" aria-labelledby="home-hero-title">
        <p className="home-kicker">Main Hero / Core Positioning</p>
        <h1 id="home-hero-title">Informed by data. Shaped by imagination. Produced with AI.</h1>
        <p>
          Product visuals, AI videos, ecommerce campaigns, and brand content shaped through research,
          creative direction, and production workflows.
        </p>
      </section>

      <section className="home-section creative-finder" aria-labelledby="creative-finder-title">
        <div className="home-section__header">
          <p className="home-kicker">Creative Finder / AI Search Placeholder</p>
          <h2 id="creative-finder-title">Find a direction before production begins.</h2>
        </div>
        <div className="creative-finder__field" aria-label="Creative finder placeholder">
          Describe your product, campaign, or visual problem…
        </div>
      </section>

      <section className="home-section" aria-labelledby="featured-work-title">
        <div className="home-section__header">
          <p className="home-kicker">Featured Work Preview</p>
          <h2 id="featured-work-title">Selected work in progress.</h2>
        </div>
        <div className="home-card-grid home-card-grid--work">
          {featuredWork.map((project) => (
            <article className="home-card" key={project}>
              <h3>{project}</h3>
              <p>Case study coming soon</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="solutions-title">
        <div className="home-section__header">
          <p className="home-kicker">Solutions / Expertise Preview</p>
          <h2 id="solutions-title">Production lanes for modern brand work.</h2>
        </div>
        <div className="home-card-grid home-card-grid--compact">
          {solutions.map((solution) => (
            <article className="home-card home-card--compact" key={solution}>
              <h3>{solution}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="creative-library-title">
        <div className="home-section__header">
          <p className="home-kicker">Creative Library Preview</p>
          <h2 id="creative-library-title">Reference systems for faster creative decisions.</h2>
        </div>
        <div className="home-card-grid home-card-grid--compact">
          {creativeLibrary.map((item) => (
            <article className="home-card home-card--compact" key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section ai-workspace" aria-labelledby="ai-workspace-title">
        <div className="home-section__header">
          <p className="home-kicker">AI Workspace Preview</p>
          <h2 id="ai-workspace-title">A production desk for prompts, references, and outputs.</h2>
        </div>
        <div className="ai-workspace__preview">
          <div>
            <span>Input</span>
            <p>Brief, product details, references</p>
          </div>
          <div>
            <span>Direction</span>
            <p>Visual route, scenes, shot logic</p>
          </div>
          <div>
            <span>Output</span>
            <p>Images, motion, campaign assets</p>
          </div>
        </div>
      </section>

      <section className="home-closing" aria-labelledby="home-closing-title">
        <h2 id="home-closing-title">Have a product or campaign to build?</h2>
        <a href="mailto:hello@gustiansyah.com">Hire Me</a>
      </section>
    </main>
  );
}
