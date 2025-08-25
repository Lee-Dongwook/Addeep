type Item =
  | { label: string; href: string; external?: boolean }
  | { label: string; children: { label: string; href: string }[] };

export type DefaultLinkType = {
  label: string;
  href: string;
  external?: boolean;
};

export const NAV: Item[] = [
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
