// app/_components/SiteNav.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem =
  | { label: string; href: string; external?: boolean }
  | {
      label: string;
      href?: string;
      children: Array<{ label: string; href: string; external?: boolean }>;
    };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Features",
    children: [
      { label: "Our Features", href: "/features" },
      { label: "Reels", href: "/features/reels" },
      { label: "Stories", href: "/features/stories" },
      { label: "DMs", href: "/features/direct" },
      { label: "Search & Explore", href: "/features/search-and-explore" },
    ],
  },
  {
    label: "Safety",
    children: [
      { label: "Overview", href: "/safety" },
      { label: "Safety Tools", href: "/safety/account-safety" },
      { label: "Privacy Tools", href: "/safety/privacy" },
      { label: "Account Security", href: "/safety/account-security" },
    ],
  },
  {
    label: "Community",
    children: [
      { label: "Our Community", href: "/community" },
      { label: "School Partnerships", href: "/community/educators" },
      { label: "Teen Accounts", href: "/community/teen-accounts" },
      { label: "Anti-Bullying", href: "/community/anti-bullying" },
      { label: "Parents", href: "/community/parents" },
      { label: "Programs", href: "/community/programs" },
    ],
  },
  { label: "Our Story", href: "/about-us" },
  { label: "News", href: "/blog" },
  { label: "Threads", href: "/threads" },
  { label: "Edits", href: "https://www.edits.com/", external: true },
];

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-6 md:px-10">
        {/* Left: hamburger */}
        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center rounded-lg p-2 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 md:hidden"
        >
          <svg
            className="h-6 w-6 text-gray-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Center: desktop nav */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {NAV_ITEMS.map((item) => {
            const isParent = "children" in item;
            if (!isParent) {
              return (
                <NavLink
                  key={item.label}
                  href={item.href}
                  external={item.external}
                >
                  {item.label}
                </NavLink>
              );
            }
            const id = `menu-${item.label.replace(/\s+/g, "").toLowerCase()}`;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() =>
                  setOpenMenu((v) => (v === item.label ? null : v))
                }
              >
                <button
                  type="button"
                  aria-expanded={openMenu === item.label}
                  aria-controls={id}
                  className="inline-flex items-center gap-1 rounded-md px-1 py-2 text-sm font-medium text-gray-900 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                  onClick={() =>
                    setOpenMenu((v) => (v === item.label ? null : item.label))
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {/* dropdown */}
                <div
                  id={id}
                  role="menu"
                  className={`absolute left-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-lg transition ${
                    openMenu === item.label
                      ? "opacity-100 visible translate-y-0"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  {item.children.map((c) => (
                    <NavDropdownLink
                      key={c.href}
                      href={c.href}
                      external={c.external}
                    >
                      {c.label}
                    </NavDropdownLink>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        {/* Right: 로그인 + IG glyph */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hidden text-sm font-medium text-gray-900 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 md:inline-block"
          >
            로그인
          </button>
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          >
            <div className="relative h-5 w-5 rounded-[6px] border-2 border-white/95">
              <div className="absolute right-[2px] top-[2px] h-1 w-1 rounded-full bg-white/95" />
              <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/95" />
            </div>
          </a>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden ${mobileOpen ? "block" : "hidden"} border-t border-gray-200`}
      >
        <div className="mx-auto max-w-[1280px] px-6 py-6 md:px-10">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => {
              const isParent = "children" in item;
              if (!isParent) {
                return (
                  <li key={item.label}>
                    <NavLink
                      href={item.href}
                      external={item.external}
                      className="text-base"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              }
              return <MobileAccordion key={item.label} item={item} />;
            })}
            <li>
              <button className="w-full rounded-md bg-black px-4 py-2 text-left text-sm font-medium text-white">
                로그인
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  external,
  className = "text-sm font-medium text-gray-900 hover:text-gray-600",
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function NavDropdownLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const base =
    "block w-full rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none";
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        role="menuitem"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={base} role="menuitem">
      {children}
    </Link>
  );
}

function MobileAccordion({
  item,
}: {
  item: Extract<NavItem, { children: any }>;
}) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-md px-1 py-2 text-left text-base font-medium text-gray-900 hover:text-gray-600"
      >
        {item.label}
        <ChevronDown
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden pl-2 ${open ? "mt-2" : ""}`}>
        <ul
          className={`space-y-2 ${open ? "max-h-[1000px]" : "max-h-0"} transition-[max-height] duration-300`}
        >
          {item.children.map((c) => (
            <li key={c.href}>
              <NavLink
                href={c.href}
                external={c.external}
                className="block rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {c.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function ChevronDown({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 8l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
