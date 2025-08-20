"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Item =
  | { label: string; href: string; external?: boolean }
  | { label: string; children: { label: string; href: string }[] };

const NAV: Item[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    children: [
      { label: "We Are", href: "/about-us/we-are" },
      { label: "Teamwork", href: "/about-us/team-work" },
      { label: "Core Value", href: "/about-us/core-value" },
      { label: "Careers", href: "/about-us/careers" },
      { label: "Contact", href: "/features/search-and-explore" },
    ],
  },
  {
    label: "Addeep Is",
    children: [
      {
        label: "Digital Platform Innovation",
        href: "/addeep-is/digital-platform-innovation",
      },
      { label: "Addeep Summary", href: "/addeep-is/summary" },
      { label: "Addeep Platform to Earn", href: "/addeep-is/platform-to-earn" },
      { label: "Addeep Business Keywords", href: "/safety/account-security" },
    ],
  },
  { label: "Blog & Social Media Channels", href: "/blog-social-media-channel" },
  { label: "Help & Customer Service", href: "/help-customer-service" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [exp, setExp] = useState<Record<string, boolean>>({});

  // body scroll lock
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // esc close
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <>
      {/* 상단 얇은 바 + 햄버거(좌) / 로그인+IG(우) */}
      <header className="sticky top-0 left-0 bg-white bg-opacity-70 backdrop-blur-md flex items-center justify-end w-full h-[82px] p-16 text-[12px] leading-[16.08px] font-sans text-[#1c1e21] transition-transform duration-500 [transition-timing-function:cubic-bezier(0,0.61,0.28,0.92)]">
        <div className="mx-auto flex h-14 w-full items-center justify-between px-6 md:px-10">
          <button
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex items-center rounded-lg p-2 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          >
            <svg
              className="h-12 w-14 text-gray-900"
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

          <div aria-hidden className="flex-1" />
        </div>
      </header>

      {/* 오버레이는 Portal로 띄워서 나머지 레이아웃에 영향 X */}
      {open &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[60] overflow-y-auto"
          >
            {/* gradient backdrop */}
            <div className="pointer-events-none absolute inset-0 bg-black" />

            {/* content */}
            <div className="relative mx-auto flex min-h-full w-full max-w-[1440px] flex-col px-6 pt-6 md:px-10">
              {/* top bar inside overlay */}
              <div className="flex items-center justify-between">
                <button
                  aria-label="닫기"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white/90 backdrop-blur-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M5 5l10 10M15 5L5 15"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* big menu */}
              <nav className="mt-10 mb-16 text-white">
                <ul className="space-y-6">
                  {NAV.map((it) => {
                    const isParent = "children" in it;
                    if (!isParent) {
                      const link = it as {
                        label: string;
                        href: string;
                        external?: boolean;
                      };
                      return (
                        <li key={link.label}>
                          <NavLinkBig
                            href={link.href}
                            external={link.external}
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </NavLinkBig>
                        </li>
                      );
                    }
                    const id = it.label;
                    const openNow = !!exp[id];
                    return (
                      <li key={id} className="space-y-2">
                        <button
                          type="button"
                          aria-expanded={openNow}
                          onClick={() =>
                            setExp((m) => ({ ...m, [id]: !m[id] }))
                          }
                          className="flex w-full items-center gap-3 text-left text-white"
                        >
                          <span className="text-[44px] leading-[1.1] sm:text-[56px]">
                            {it.label}
                          </span>
                          <Chevron
                            className={`mt-2 h-6 w-6 transition-transform ${openNow ? "rotate-180" : ""}`}
                          />
                        </button>
                        <ul
                          className={`overflow-hidden pl-1 ${
                            openNow ? "max-h-[1000px]" : "max-h-0"
                          } transition-[max-height] duration-300`}
                        >
                          {(it.children ?? []).map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className="block py-2 text-lg text-white/85 hover:text-white"
                                onClick={() => setOpen(false)}
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function NavLinkBig({
  href,
  external,
  onClick,
  children,
}: {
  href: string;
  external?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const cls =
    "inline-block text-[44px] leading-[1.1] sm:text-[56px] text-white hover:text-white/90 focus:outline-none";
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}

function Chevron({ className = "h-8 w-8" }: { className?: string }) {
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
