"use client";

import Link from "next/link";
import { useState } from "react";

type MenuKey = "work" | "capabilities" | "library";

type MenuItem = {
  title: string;
  href: string;
  description?: string;
};

const whatsappHref =
  "https://wa.me/?text=Hello%20Gustiansyah%2C%20I%27d%20like%20to%20discuss%20a%20creative%20project.";

const menus: Record<MenuKey, { label: string; items: MenuItem[]; cta: MenuItem }> = {
  work: {
    label: "Work",
    items: [
      {
        title: "STARMAP",
        href: "/work/starmap",
        description: "AI creative direction / product release / visual system",
      },
      {
        title: "Alfas Fragrance",
        href: "/work/alfas-fragrance",
        description: "Product visuals / fragrance direction / marketplace content",
      },
      {
        title: "Fabil Natural",
        href: "/work/fabil-natural",
        description: "Product storytelling / ecommerce visuals / campaign direction",
      },
      {
        title: "Fat Sport",
        href: "/work/fat-sport",
        description: "Visual direction / ecommerce assets / campaign system",
      },
    ],
    cta: { title: "Explore all work", href: "/work" },
  },
  capabilities: {
    label: "Capabilities",
    items: [
      { title: "Product Visuals", href: "/capabilities" },
      { title: "AI Video Production", href: "/capabilities" },
      { title: "Ecommerce Campaigns", href: "/capabilities" },
      { title: "UGC Direction", href: "/capabilities" },
      { title: "Creative Systems", href: "/capabilities" },
    ],
    cta: { title: "View capabilities", href: "/capabilities" },
  },
  library: {
    label: "Library",
    items: [
      { title: "Visual Directions", href: "/library" },
      { title: "Ecommerce Layouts", href: "/library" },
      { title: "AI Photoshoot References", href: "/library" },
      { title: "UGC Hooks", href: "/library" },
      { title: "Campaign References", href: "/library" },
    ],
    cta: { title: "Explore library", href: "/library" },
  },
};

const menuKeys = Object.keys(menus) as MenuKey[];

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12">
      <path d="M3 4.5 6 7.5 9 4.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path d="M3 8h9.5M8.75 4.25 12.5 8l-3.75 3.75" />
    </svg>
  );
}

export default function GlobalHeader() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMenus = () => setOpenMenu(null);

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <Link className="brand-lockup" href="/" onClick={closeMenus}>
          <span className="brand-lockup__mark">GS</span>
          <span className="brand-lockup__name">Gustiansyah</span>
        </Link>

        <nav className="desktop-navigation" aria-label="Main navigation">
          {menuKeys.map((key) => {
            const menu = menus[key];
            const isOpen = openMenu === key;

            return (
              <div
                className="desktop-navigation__item"
                key={key}
                onMouseEnter={() => setOpenMenu(key)}
                onMouseLeave={closeMenus}
              >
                <button
                  className="desktop-navigation__trigger"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMenu(isOpen ? null : key)}
                >
                  {menu.label}
                  <ChevronIcon />
                </button>

                <div className="nav-dropdown" data-open={isOpen ? "true" : "false"}>
                  <div className="nav-dropdown__grid">
                    {menu.items.map((item) => (
                      <Link className="nav-dropdown__link" href={item.href} key={item.title} onClick={closeMenus}>
                        <span className="nav-dropdown__dot" aria-hidden="true" />
                        <span>
                          <strong>{item.title}</strong>
                          {item.description ? <small>{item.description}</small> : null}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link className="nav-dropdown__cta" href={menu.cta.href} onClick={closeMenus}>
                    {menu.cta.title}
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="desktop-actions">
          <span className="language-text" aria-label="Language switch">
            ID / EN
          </span>
          <a className="hire-button" href={whatsappHref}>
            Hire Me
          </a>
        </div>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Open navigation"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="mobile-navigation" data-open={isMobileOpen ? "true" : "false"}>
        {menuKeys.map((key) => {
          const menu = menus[key];

          return (
            <details className="mobile-navigation__group" key={key}>
              <summary>
                {menu.label}
                <ChevronIcon />
              </summary>
              <div>
                {menu.items.map((item) => (
                  <Link href={item.href} key={item.title} onClick={() => setIsMobileOpen(false)}>
                    {item.title}
                  </Link>
                ))}
                <Link href={menu.cta.href} onClick={() => setIsMobileOpen(false)}>
                  {menu.cta.title}
                </Link>
              </div>
            </details>
          );
        })}
        <div className="mobile-navigation__footer">
          <span>ID / EN</span>
          <a className="hire-button" href={whatsappHref}>
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
