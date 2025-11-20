/**
 * Site configuration
 * Contains settings for both landing page and blog
 */
export const SITE = {
  // General site info
  website: "https://farhandigital.id",
  author: "Farhan",
  profile: "https://farhandigital.id/",
  
  // Landing page
  title: "Farhan Digital",
  description: "Professional web development services for small businesses",
  
  // Blog settings
  blogTitle: "Farhan Digital | Blog",
  blogDescription: "Eternal archive of my thoughts, experiences, and learnings on web development, programming, and technology.",
  ogImage: "brand-logo.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  
  // Edit post configuration
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/yourname/your-blog/edit/main/",
  },
  
  // OG image generation
  dynamicOgImage: true,
  
  // Internationalization
  dir: "ltr" as const, // "rtl" | "ltr" | "auto"
  lang: "en", // html lang code
  timezone: "UTC", // Default global timezone (IANA format)
} as const;

/**
 * Social media links
 * Add or remove social links as needed
 */
export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/yourusername",
    linkTitle: `${SITE.author} on Github`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    linkTitle: `${SITE.author} on Twitter`,
    active: false,
  },
];
