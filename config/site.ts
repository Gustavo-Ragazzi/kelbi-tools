export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Kelbi Tools',
  description: 'Website for controlling Kelbi\'s database.',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Gacha Editor',
      href: '/gacha/table',
    },
    {
      label: 'Users',
      href: '/users',
    },
    {
      label: 'Characters',
      href: '/characters',
    },
    {
      label: 'Guilds',
      href: '/guilds',
    }
  ],
  links: {
    github: 'https://github.com/Invasor-de-Fronteiras',
    discord: 'https://discord.gg/DCbSzxUfFv',
    youtube: 'https://www.youtube.com/@arcamhfz'
  },
};
