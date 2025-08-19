"use client";
import React from "react";
import Link from "next/link";

interface FooterLink {
  id: string;
  text: string;
  href: string;
  subItems?: FooterLink[];
}

const footerLinks: FooterLink[] = [
  {
    id: "1",
    text: "Home",
    href: "/",
  },
  {
    id: "2",
    text: "About Us",
    href: "/about-us/we-are",
    subItems: [
      { id: "2-1", text: "We Are", href: "/about-us/we-are" },
      { id: "2-2", text: "Teamwork", href: "/about-us/team-work" },
      { id: "2-3", text: "Core Values", href: "/about-us/core-value" },
      { id: "2-4", text: "Careers", href: "/about-us/careers" },
      { id: "2-5", text: "Contact", href: "/contact" },
    ],
  },
  {
    id: "3",
    text: "Addeep Is",
    href: "/addeep-is/digital-platform-innovation",
    subItems: [
      {
        id: "3-1",
        text: "Digital Platform Innovation",
        href: "/addeep-is/digital-platform-innovation",
      },
      { id: "3-2", text: "Addeep Summary", href: "/addeep-is/summary" },
      {
        id: "3-3",
        text: "Addeep Platform to Earn",
        href: "/addeep-is/platform-to-earn",
      },
      {
        id: "3-4",
        text: "Addeep Business Keywords",
        href: "/addeep-is/platform-to-earn",
      },
    ],
  },
  {
    id: "4",
    text: "Solution",
    href: "/announcement",
  },
  {
    id: "5",
    text: "Blog & Social Media",
    href: "/blog-social-media-channel",
  },
  {
    id: "6",
    text: "Help & Customer Service",
    href: "/help-customer-service",
  },
];

const socialIcons = [
  { name: "instagram", icon: "📷" },
  { name: "facebook", icon: "f" },
  { name: "email", icon: "@" },
  { name: "youtube", icon: "▶" },
  { name: "blog", icon: "B" },
  { name: "linkedin", icon: "in" },
  { name: "linkedin2", icon: "in" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-12 md:px-10">
        {/* Top navigation columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {footerLinks.map((link) => (
            <div key={link.id} className="flex flex-col">
              <Link
                href={link.href}
                className="block w-full text-left p-2 rounded-lg transition-colors duration-200 group"
              >
                <span className="text-black cursor-pointer font-medium">
                  {link.text}
                </span>
              </Link>
              {link.subItems && (
                <div className="ml-2 mt-2 space-y-1">
                  {link.subItems.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={subItem.href}
                      className="block text-sm text-gray-400 hover:text-black transition-colors duration-200"
                    >
                      {subItem.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="mt-10 flex justify-center space-x-4">
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white hover:opacity-80 transition-opacity duration-200"
            >
              <span className="sr-only">{social.name}</span>
              <span className="text-xs font-medium">{social.icon}</span>
            </a>
          ))}
        </div>

        {/* Bottom links */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
          <span>English (US)</span>
          <span>개인정보처리방침</span>
          <span>서비스이용약관</span>
        </div>
        <div className="mt-2 flex justify-center text-xs text-gray-400">
          <span>© 2025. Addeep Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
