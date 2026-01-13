import type { BrandInfo, SocialLink } from "./types";

export const BRAND_INFO: BrandInfo = {
  name: "Dann Falcon Media",
  handle: "@master.horus33",
  footerText: "2026, Todos los derechos reservados.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "tiktok",
    url: "https://www.tiktok.com/@master.horus33",
    label: "TikTok",
    iconClass: "fab fa-tiktok",
    className: "tiktok-btn",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "youtube",
    url: "https://www.youtube.com/@master.horus033",
    label: "YouTube",
    iconClass: "fab fa-youtube",
    className: "youtube-btn",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "contact",
    url: "mailto:yoshuasoto54@gmail.com",
    label: "Contacto",
    iconClass: "fas fa-envelope",
    className: "contact-btn",
  },
  {
    id: "kofi",
    url: "https://ko-fi.com/dannfalconmedia",
    label: "Apóyanos para seguir creciendo",
    iconClass: "fas fa-mug-hot",
    className: "kofi-btn highlight delay-4",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
