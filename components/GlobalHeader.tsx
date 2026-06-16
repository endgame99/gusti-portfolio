"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Language = "en" | "id";
type MenuKey = "work" | "solutions" | "expertise" | "library";
type Theme = "light" | "dark";

type LinkItem = {
  title: string;
  href: string;
  description?: string;
  meta?: string;
  glyph: string;
};

type HeaderCopy = {
  nav: Record<MenuKey, string>;
  menuIntro: Record<MenuKey, { eyebrow: string; description: string }>;
  projects: LinkItem[];
  solutions: LinkItem[];
  expertise: LinkItem[];
  library: LinkItem[];
  featured: {
    label: string;
    title: string;
    meta: string;
    status: string;
    cta: string;
  };
  ctas: {
    work: string;
    download: string;
    downloadStatus: string;
    hire: string;
    themeLight: string;
    themeDark: string;
    language: string;
  };
};

const whatsappHref =
  "https://wa.me/?text=Hello%20Gustiansyah%2C%20I%27d%20like%20to%20discuss%20a%20creative%20project.";

const copy: Record<Language, HeaderCopy> = {
  en: {
    nav: {
      work: "Work",
      solutions: "Solutions",
      expertise: "Expertise",
      library: "Creative Library",
    },
    menuIntro: {
      work: {
        eyebrow: "Selected releases",
        description: "Clickable case directions for product, campaign, and brand work.",
      },
      solutions: {
        eyebrow: "Problem solver POV",
        description: "Start from the business problem, then shape the creative direction.",
      },
      expertise: {
        eyebrow: "Production strengths",
        description: "AI-assisted visual, video, ecommerce, and brand content capabilities.",
      },
      library: {
        eyebrow: "Creative archive",
        description: "References, directions, layouts, hooks, styles, and experiments.",
      },
    },
    projects: [
      {
        title: "STARMAP",
        href: "/work/starmap",
        meta: "Brand / AI Creative Direction / Product Release",
        description: "A representative release direction for AI-assisted brand storytelling.",
        glyph: "S",
      },
      {
        title: "ALFAS FRAGRANCE",
        href: "/work/alfas-fragrance",
        meta: "Product Visuals / Campaign / Ecommerce Content",
        description: "Premium product imagery direction for scent, texture, and mood.",
        glyph: "A",
      },
      {
        title: "FABIL NATURAL",
        href: "/work/fabil-natural",
        meta: "Brand Content / Product Campaign / Visual Direction",
        description: "Natural product storytelling with clean commerce-ready outputs.",
        glyph: "F",
      },
      {
        title: "FAT SPORT",
        href: "/work/fat-sport",
        meta: "Sports / Product Campaign / Content Direction",
        description: "Energetic product campaign framing for fast-moving content.",
        glyph: "FS",
      },
    ],
    solutions: [
      {
        title: "Launch a product faster",
        href: "/work",
        description: "Shape release visuals, content angles, and launch-ready directions.",
        glyph: "LP",
      },
      {
        title: "Upgrade ecommerce visuals",
        href: "/library",
        description: "Improve marketplace, PDP, and campaign presentation quality.",
        glyph: "EV",
      },
      {
        title: "Build AI photoshoot directions",
        href: "/capabilities",
        description: "Turn product context into precise AI-assisted shoot systems.",
        glyph: "AI",
      },
      {
        title: "Create short-form content angles",
        href: "/library",
        description: "Map UGC hooks, quick concepts, and platform-ready messages.",
        glyph: "SF",
      },
      {
        title: "Systemize brand content",
        href: "/workspace",
        description: "Create a repeatable flow from input to visual content packages.",
        glyph: "BC",
      },
    ],
    expertise: [
      { title: "AI Product Visuals", href: "/capabilities", glyph: "AP" },
      { title: "AI Video Production", href: "/capabilities", glyph: "AV" },
      { title: "AI Photoshoot", href: "/capabilities", glyph: "PH" },
      { title: "Ecommerce Campaigns", href: "/capabilities", glyph: "EC" },
      { title: "UGC Content Direction", href: "/capabilities", glyph: "UG" },
      { title: "Motion Design", href: "/capabilities", glyph: "MO" },
      { title: "PDP / Product Display", href: "/capabilities", glyph: "PD" },
      { title: "Branding & Packaging", href: "/capabilities", glyph: "BP" },
    ],
    library: [
      { title: "Visual Directions", href: "/library", glyph: "VD" },
      { title: "AI Photoshoot References", href: "/library", glyph: "AR" },
      { title: "Ecommerce Layout Patterns", href: "/library", glyph: "EL" },
      { title: "PDP / Product Page References", href: "/library", glyph: "PP" },
      { title: "UGC Hooks & Content Angles", href: "/library", glyph: "UH" },
      { title: "Campaign References", href: "/library", glyph: "CR" },
      { title: "Packaging & Branding References", href: "/library", glyph: "PB" },
      { title: "China Ecommerce Styles", href: "/library", glyph: "CN" },
      { title: "Korean Minimalist Styles", href: "/library", glyph: "KR" },
      { title: "Experiments", href: "/library", glyph: "EX" },
    ],
    featured: {
      label: "Featured Case",
      title: "STARMAP",
      meta: "Brand / AI Creative Direction / Product Release",
      status: "Case study coming soon",
      cta: "View STARMAP",
    },
    ctas: {
      work: "Explore all work",
      download: "Download CV",
      downloadStatus: "Coming Soon",
      hire: "Hire Me",
      themeLight: "Switch to dark theme",
      themeDark: "Switch to light theme",
      language: "Language",
    },
  },
  id: {
    nav: {
      work: "Karya",
      solutions: "Solusi",
      expertise: "Keahlian",
      library: "Perpustakaan Kreatif",
    },
    menuIntro: {
      work: {
        eyebrow: "Rilis pilihan",
        description: "Arah studi kasus untuk produk, kampanye, dan brand.",
      },
      solutions: {
        eyebrow: "Sudut pandang solusi",
        description: "Mulai dari masalah bisnis, lalu bentuk arah kreatifnya.",
      },
      expertise: {
        eyebrow: "Kekuatan produksi",
        description: "Kemampuan visual, video, ecommerce, dan konten brand berbasis AI.",
      },
      library: {
        eyebrow: "Arsip kreatif",
        description: "Referensi, arah visual, layout, hook, gaya, dan eksperimen.",
      },
    },
    projects: [
      {
        title: "STARMAP",
        href: "/work/starmap",
        meta: "Brand / AI Creative Direction / Product Release",
        description: "Arah rilis representatif untuk storytelling brand berbasis AI.",
        glyph: "S",
      },
      {
        title: "ALFAS FRAGRANCE",
        href: "/work/alfas-fragrance",
        meta: "Product Visuals / Campaign / Ecommerce Content",
        description: "Arah visual produk premium untuk mood, tekstur, dan aroma.",
        glyph: "A",
      },
      {
        title: "FABIL NATURAL",
        href: "/work/fabil-natural",
        meta: "Brand Content / Product Campaign / Visual Direction",
        description: "Storytelling produk natural dengan output bersih untuk commerce.",
        glyph: "F",
      },
      {
        title: "FAT SPORT",
        href: "/work/fat-sport",
        meta: "Sports / Product Campaign / Content Direction",
        description: "Kerangka kampanye produk energik untuk konten cepat.",
        glyph: "FS",
      },
    ],
    solutions: [
      {
        title: "Luncurkan produk lebih cepat",
        href: "/work",
        description: "Bentuk visual rilis, angle konten, dan arah launch-ready.",
        glyph: "LP",
      },
      {
        title: "Tingkatkan visual ecommerce",
        href: "/library",
        description: "Perbaiki kualitas marketplace, PDP, dan presentasi kampanye.",
        glyph: "EV",
      },
      {
        title: "Bangun arah AI photoshoot",
        href: "/capabilities",
        description: "Ubah konteks produk menjadi arahan shoot berbasis AI.",
        glyph: "AI",
      },
      {
        title: "Buat angle short-form content",
        href: "/library",
        description: "Petakan UGC hook, konsep cepat, dan pesan siap platform.",
        glyph: "SF",
      },
      {
        title: "Sistemkan konten brand",
        href: "/workspace",
        description: "Bangun alur berulang dari input ke paket konten visual.",
        glyph: "BC",
      },
    ],
    expertise: [
      { title: "Visual Produk AI", href: "/capabilities", glyph: "AP" },
      { title: "Produksi Video AI", href: "/capabilities", glyph: "AV" },
      { title: "AI Photoshoot", href: "/capabilities", glyph: "PH" },
      { title: "Kampanye Ecommerce", href: "/capabilities", glyph: "EC" },
      { title: "Arah Konten UGC", href: "/capabilities", glyph: "UG" },
      { title: "Motion Design", href: "/capabilities", glyph: "MO" },
      { title: "PDP / Product Display", href: "/capabilities", glyph: "PD" },
      { title: "Branding & Packaging", href: "/capabilities", glyph: "BP" },
    ],
    library: [
      { title: "Arah Visual", href: "/library", glyph: "VD" },
      { title: "Referensi AI Photoshoot", href: "/library", glyph: "AR" },
      { title: "Pola Layout Ecommerce", href: "/library", glyph: "EL" },
      { title: "Referensi PDP / Product Page", href: "/library", glyph: "PP" },
      { title: "UGC Hook & Angle Konten", href: "/library", glyph: "UH" },
      { title: "Referensi Kampanye", href: "/library", glyph: "CR" },
      { title: "Referensi Packaging & Branding", href: "/library", glyph: "PB" },
      { title: "Gaya China Ecommerce", href: "/library", glyph: "CN" },
      { title: "Gaya Korean Minimalist", href: "/library", glyph: "KR" },
      { title: "Eksperimen", href: "/library", glyph: "EX" },
    ],
    featured: {
      label: "Kasus Pilihan",
      title: "STARMAP",
      meta: "Brand / AI Creative Direction / Product Release",
      status: "Studi kasus segera hadir",
      cta: "Lihat STARMAP",
    },
    ctas: {
      work: "Jelajahi semua karya",
      download: "Download CV",
      downloadStatus: "Coming Soon",
      hire: "Hire Me",
      themeLight: "Aktifkan tema gelap",
      themeDark: "Aktifkan tema terang",
      language: "Bahasa",
    },
  },
};

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12">
      <path d="m2.25 4.25 3.75 3.5 3.75-3.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path d="M2.5 8h10M8.75 3.75 13 8l-4.25 4.25" />
    </svg>
  );
}

function ThemeIcon({ theme }: { theme: Theme }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      {theme === "light" ? (
        <>
          <circle cx="9" cy="9" r="3.1" />
          <path d="M9 1.6v1.7M9 14.7v1.7M3.8 3.8 5 5M13 13l1.2 1.2M1.6 9h1.7M14.7 9h1.7M3.8 14.2 5 13M13 5l1.2-1.2" />
        </>
      ) : (
        <path d="M13.8 11.2A5.9 5.9 0 0 1 6.8 4a6.1 6.1 0 1 0 7 7.2Z" />
      )}
    </svg>
  );
}

function Glyph({ children }: { children: string }) {
  return <span className="nav-glyph" aria-hidden="true">{children}</span>;
}

export default function GlobalHeader() {
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<MenuKey | null>(
    null,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<MenuKey | null>(
    null,
  );
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const headerRef = useRef<HTMLElement>(null);
  const activeCopy = copy[language];

  const menus = useMemo(
    () => [
      { key: "work" as const, items: activeCopy.projects },
      { key: "solutions" as const, items: activeCopy.solutions },
      { key: "expertise" as const, items: activeCopy.expertise },
      { key: "library" as const, items: activeCopy.library },
    ],
    [activeCopy],
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "id";
  }, [language]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveDesktopMenu(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveDesktopMenu(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeNavigation() {
    setActiveDesktopMenu(null);
    setMobileOpen(false);
    setActiveMobileMenu(null);
  }

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  function toggleLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    setActiveDesktopMenu(null);
  }

  function renderGeneralMenu(menu: (typeof menus)[number]) {
    const intro = activeCopy.menuIntro[menu.key];

    return (
      <>
        <div className="rich-dropdown__intro">
          <p className="rich-dropdown__eyebrow">{intro.eyebrow}</p>
          <p className="rich-dropdown__description">{intro.description}</p>
        </div>

        <div className="rich-dropdown__grid">
          {menu.items.map((item) => (
            <Link
              className="rich-dropdown__link"
              href={item.href}
              key={item.title}
              onClick={closeNavigation}
            >
              <Glyph>{item.glyph}</Glyph>
              <span>
                <strong>{item.title}</strong>
                {item.description ? <small>{item.description}</small> : null}
              </span>
            </Link>
          ))}
        </div>
      </>
    );
  }

  function renderWorkMenu() {
    return (
      <>
        <div className="work-mega__projects">
          {activeCopy.projects.map((project) => (
            <Link
              className="project-card"
              href={project.href}
              key={project.title}
              onClick={closeNavigation}
            >
              <Glyph>{project.glyph}</Glyph>
              <span>
                <strong>{project.title}</strong>
                <small>{project.meta}</small>
              </span>
              <ArrowIcon />
            </Link>
          ))}
        </div>

        <Link
          className="featured-case"
          href="/work/starmap"
          onClick={closeNavigation}
        >
          <span className="featured-case__label">{activeCopy.featured.label}</span>
          <strong>{activeCopy.featured.title}</strong>
          <span>{activeCopy.featured.meta}</span>
          <em>{activeCopy.featured.status}</em>
          <span className="featured-case__cta">
            {activeCopy.featured.cta}
            <ArrowIcon />
          </span>
        </Link>

        <Link
          className="rich-dropdown__cta"
          href="/work"
          onClick={closeNavigation}
        >
          {activeCopy.ctas.work}
          <ArrowIcon />
        </Link>
      </>
    );
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__bar">
        <Link
          className="brand-lockup"
          href="/"
          aria-label="Gustiansyah, home"
          onClick={closeNavigation}
        >
          <span className="brand-lockup__mark" aria-hidden="true">
            GS
          </span>
          <span className="brand-lockup__name">Gustiansyah</span>
        </Link>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          {menus.map((menu) => {
            const isOpen = activeDesktopMenu === menu.key;

            return (
              <div
                className="desktop-navigation__item"
                key={menu.key}
                onMouseEnter={() => setActiveDesktopMenu(menu.key)}
                onMouseLeave={() => setActiveDesktopMenu(null)}
                onFocus={() => setActiveDesktopMenu(menu.key)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setActiveDesktopMenu(null);
                  }
                }}
              >
                <button
                  className="desktop-navigation__trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`desktop-menu-${menu.key}`}
                  onClick={() =>
                    setActiveDesktopMenu(isOpen ? null : menu.key)
                  }
                >
                  {activeCopy.nav[menu.key]}
                  <ChevronIcon />
                </button>

                <div
                  className={`rich-dropdown rich-dropdown--${menu.key}`}
                  id={`desktop-menu-${menu.key}`}
                  data-open={isOpen}
                >
                  {menu.key === "work"
                    ? renderWorkMenu()
                    : renderGeneralMenu(menu)}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="desktop-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={
              theme === "light"
                ? activeCopy.ctas.themeLight
                : activeCopy.ctas.themeDark
            }
            onClick={toggleTheme}
          >
            <ThemeIcon theme={theme} />
          </button>
          <span
            className="header-action header-action--secondary"
            role="link"
            aria-disabled="true"
            title="CV download coming soon"
          >
            {activeCopy.ctas.download}
            <span className="header-action__status">
              {activeCopy.ctas.downloadStatus}
            </span>
          </span>
          <a
            className="header-action header-action--primary"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            {activeCopy.ctas.hire}
          </a>
          <div className="language-switch" aria-label={activeCopy.ctas.language}>
            <button
              type="button"
              aria-pressed={language === "id"}
              onClick={() => toggleLanguage("id")}
            >
              🇮🇩 ID
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              aria-pressed={language === "en"}
              onClick={() => toggleLanguage("en")}
            >
              🇬🇧 EN
            </button>
          </div>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMobileOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className="mobile-navigation"
        id="mobile-navigation"
        data-open={mobileOpen}
      >
        <nav
          className="mobile-navigation__inner"
          aria-label="Mobile navigation"
        >
          <div className="mobile-navigation__menus">
            {menus.map((menu) => {
              const isOpen = activeMobileMenu === menu.key;

              return (
                <div className="mobile-accordion" key={menu.key}>
                  <button
                    className="mobile-accordion__trigger"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`mobile-menu-${menu.key}`}
                    onClick={() =>
                      setActiveMobileMenu(isOpen ? null : menu.key)
                    }
                  >
                    <span>{activeCopy.nav[menu.key]}</span>
                    <ChevronIcon />
                  </button>

                  <div
                    className="mobile-accordion__panel"
                    id={`mobile-menu-${menu.key}`}
                    data-open={isOpen}
                    hidden={!isOpen}
                  >
                    <p>{activeCopy.menuIntro[menu.key].description}</p>
                    <div className="mobile-accordion__links">
                      {menu.items.map((item) => (
                        <Link
                          href={item.href}
                          key={item.title}
                          onClick={closeNavigation}
                        >
                          <Glyph>{item.glyph}</Glyph>
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                    {menu.key === "work" ? (
                      <Link href="/work" onClick={closeNavigation}>
                        {activeCopy.ctas.work}
                        <ArrowIcon />
                      </Link>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mobile-navigation__actions">
            <button
              className="mobile-navigation__theme"
              type="button"
              onClick={toggleTheme}
            >
              <span>
                <ThemeIcon theme={theme} />
                {theme === "light"
                  ? activeCopy.ctas.themeLight
                  : activeCopy.ctas.themeDark}
              </span>
            </button>
            <span
              className="mobile-navigation__cv"
              role="link"
              aria-disabled="true"
            >
              <span>{activeCopy.ctas.download}</span>
              <small>{activeCopy.ctas.downloadStatus}</small>
            </span>
            <a
              className="mobile-navigation__hire"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeNavigation}
            >
              {activeCopy.ctas.hire}
              <ArrowIcon />
            </a>
            <div
              className="mobile-navigation__language"
              aria-label={activeCopy.ctas.language}
            >
              <span>{activeCopy.ctas.language}</span>
              <span>
                <button
                  type="button"
                  aria-pressed={language === "id"}
                  onClick={() => toggleLanguage("id")}
                >
                  🇮🇩 ID
                </button>
                /
                <button
                  type="button"
                  aria-pressed={language === "en"}
                  onClick={() => toggleLanguage("en")}
                >
                  🇬🇧 EN
                </button>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
