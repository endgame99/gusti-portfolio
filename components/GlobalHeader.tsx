"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MenuKey = "work" | "capabilities" | "library";

type NavigationMenu = {
  key: MenuKey;
  label: string;
  eyebrow: string;
  description: string;
  items: string[];
  ctaLabel: string;
  href: string;
};

const navigationMenus: NavigationMenu[] = [
  {
    key: "work",
    label: "Work",
    eyebrow: "Featured work",
    description: "Selected product, campaign, and brand directions.",
    items: ["STARMAP", "ALFAS FRAGRANCE", "FABIL NATURAL", "FAT SPORT"],
    ctaLabel: "View Featured Work",
    href: "/work",
  },
  {
    key: "capabilities",
    label: "Capabilities",
    eyebrow: "Creative production",
    description: "Focused outputs for modern brands and product businesses.",
    items: [
      "AI Product Visuals",
      "AI Video Production",
      "AI Photoshoot",
      "Ecommerce Campaigns",
      "UGC Content Direction",
      "Motion Design",
      "PDP / Product Display",
      "Branding & Packaging",
    ],
    ctaLabel: "View Capabilities",
    href: "/capabilities",
  },
  {
    key: "library",
    label: "Library",
    eyebrow: "Creative archive",
    description: "A growing index of visual outputs and directions.",
    items: [
      "Product Visuals",
      "AI Photoshoot",
      "AI Video",
      "Catalog",
      "Lookbook",
      "UGC",
      "Motion",
      "PDP / Product Page",
      "Campaign",
      "Packaging",
      "Branding",
      "China Ecommerce",
      "Korean Minimalist / Coming Soon",
      "Experiments",
    ],
    ctaLabel: "View Creative Library",
    href: "/library",
  },
];

const whatsappHref =
  "https://wa.me/?text=Hello%20Gustiansyah%2C%20I%27d%20like%20to%20discuss%20a%20creative%20project.";

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

export default function GlobalHeader() {
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<MenuKey | null>(
    null,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<MenuKey | null>(
    null,
  );
  const headerRef = useRef<HTMLElement>(null);

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
          {navigationMenus.map((menu) => {
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
                  onClick={() => setActiveDesktopMenu(menu.key)}
                >
                  {menu.label}
                  <ChevronIcon />
                </button>

                <div
                  className={`rich-dropdown rich-dropdown--${menu.key}`}
                  id={`desktop-menu-${menu.key}`}
                  data-open={isOpen}
                >
                  <div className="rich-dropdown__intro">
                    <p className="rich-dropdown__eyebrow">{menu.eyebrow}</p>
                    <p className="rich-dropdown__description">
                      {menu.description}
                    </p>
                  </div>

                  <ul className="rich-dropdown__list">
                    {menu.items.map((item, index) => (
                      <li key={item}>
                        <span>{item}</span>
                        <span className="rich-dropdown__index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    className="rich-dropdown__cta"
                    href={menu.href}
                    onClick={closeNavigation}
                  >
                    {menu.ctaLabel}
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="desktop-actions">
          <span
            className="header-action header-action--secondary"
            role="link"
            aria-disabled="true"
            title="CV download coming soon"
          >
            Download CV
            <span className="header-action__status">Soon</span>
          </span>
          <a
            className="header-action header-action--primary"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Hire Me
          </a>
          <span className="language-switch" aria-label="Language: English">
            <span>ID</span>
            <span aria-hidden="true">/</span>
            <strong>EN</strong>
          </span>
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
            {navigationMenus.map((menu) => {
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
                    <span>{menu.label}</span>
                    <ChevronIcon />
                  </button>

                  <div
                    className="mobile-accordion__panel"
                    id={`mobile-menu-${menu.key}`}
                    data-open={isOpen}
                    hidden={!isOpen}
                  >
                    <p>{menu.description}</p>
                    <ul>
                      {menu.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link href={menu.href} onClick={closeNavigation}>
                      {menu.ctaLabel}
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mobile-navigation__actions">
            <span
              className="mobile-navigation__cv"
              role="link"
              aria-disabled="true"
            >
              <span>Download CV</span>
              <small>Coming soon</small>
            </span>
            <a
              className="mobile-navigation__hire"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeNavigation}
            >
              Hire Me
              <ArrowIcon />
            </a>
            <span
              className="mobile-navigation__language"
              aria-label="Language: English"
            >
              Language
              <span>
                ID / <strong>EN</strong>
              </span>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
