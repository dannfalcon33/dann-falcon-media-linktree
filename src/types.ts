export interface SocialLink {
  id: string;
  url: string;
  label: string;
  iconClass: string;
  className: string; // To apply specific styles like 'tiktok-btn', 'youtube-btn'
  target?: string;
  rel?: string;
}

export interface BrandInfo {
  name: string;
  handle: string;
  footerText: string;
}
