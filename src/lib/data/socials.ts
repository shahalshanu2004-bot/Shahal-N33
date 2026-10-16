export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
}

export const socialLinks = {
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shahal-n/",
    ariaLabel: "Shahal N on LinkedIn",
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/shahal_n33/",
    ariaLabel: "Shahal N on Instagram",
  },
  github: {
    name: "GitHub",
    url: "https://github.com/shahalshanu2004-bot/Shahal-N33",
    ariaLabel: "Shahal N on GitHub",
  },
} as const;
