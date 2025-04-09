import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MCSR Ranked Wiki",
  description: "Welcome to MCSR Ranked Wiki Page",
  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: [
      { text: 'Install', link: '/install' },
      { text: 'Gameplay', link: '/gameplay' },
      { text: 'Playoffs', link: '/playoffs' }
    ],

    sidebar: {
      '/install': [
        {
          text: 'Installation',
          link: '/',
          base: '/install',
          items: [
            { text: 'Download', link: '/download' },
            { 
              text: 'Launcher Guide', 
              items: [
                { text: 'Prism Launcher / MultiMC', link: '/install_prism' },
                { text: 'Modrinth App', link: '/install_modrinth' },
                { text: 'Minecraft Launcher', link: '/install_vanilla' },
              ]
            },
            { text: 'Troubleshooting', link: '/troubleshooting' },
          ]
        }
      ],
      '/gameplay': [
        {
          text: 'Gameplay',
          link: '/',
          base: '/gameplay',
          items: [
            { 
              text: 'MCSR Ranked Seed', 
              items: [
                { text: 'Filtered Seed', link: '/seed' },
                { text: 'RNG Standardization', link: '/rng' },
              ]
            },
            { text: 'Match-Making', link: '/matchmaking' },
          ]
        }
      ],
      'playoffs': [
        { 
          text: 'Playoffs',
          link: '/',
          base: '/playoffs',
          items: [
            {
              text: 'Phase Point',
              items: [
                { text: 'Phase Point System', link: '/phase_point' },
                { text: 'Midseason Showdown', link: '/midseason_showdown' }
              ]
            }
          ]
        },
      ]
    },

    socialLinks: [
      { 
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg>' }, 
        link: 'https://mcsrranked.com',
        ariaLabel: 'Back to Homepage'
      },
      { icon: 'github', link: 'https://github.com/MCSR-Ranked/Wiki', ariaLabel: 'Wiki Repository' },
      { icon: 'discord', link: 'https://mcsrranked.com/discord', ariaLabel: 'Discord' },
      { icon: 'x', link: 'https://mcsrranked.com/x', ariaLabel: "X (Twitter)" },
    ],

    editLink: {
      pattern: 'https://github.com/MCSR-Ranked/Wiki/edit/main/docs/:path'
    },

    search: {
      provider: 'local'
    },
  },

  cleanUrls: true,
  lastUpdated: true
})
