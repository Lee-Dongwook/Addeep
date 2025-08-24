import {
  FooterInstagramIcon,
  FooterFacebookIcon,
  FooterThreadIcon,
  FooterYoutubeIcon,
  FooterTwitterIcon,
  FooterLinkedinIcon,
} from "../../icons";

interface FooterLink {
  id: string;
  text: string;
  href: string;
  subItems?: FooterLink[];
}

interface FooterSocial {
  name: string;
  icon: React.ComponentType | string;
  link?: string;
}

export const footerLinks: FooterLink[] = [
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

export const socialIcons: FooterSocial[] = [
  {
    name: "instagram",
    icon: FooterInstagramIcon,
    link: "https://www.instagram.com/Addeep/",
  },
  {
    name: "facebook",
    icon: FooterFacebookIcon,
    link: "https://www.facebook.com/Addeep.2023",
  },
  { name: "thread", icon: FooterThreadIcon },
  {
    name: "youtube",
    icon: FooterYoutubeIcon,
    link: "https://www.youtube.com/channel/UCsPs7L-j9fKlwdz6sRBywVQ",
  },
  {
    name: "twitter",
    icon: FooterTwitterIcon,
    link: "https://www.twitter.com/Addeep_",
  },
  { name: "linkedin", icon: FooterLinkedinIcon },
];
