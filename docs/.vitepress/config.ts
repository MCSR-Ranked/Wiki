import { defineConfig } from 'vitepress';
import underlinePlugin from './plugins/underline';
import markdownItFootnote from 'markdown-it-footnote';

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
      { 
        text: 'Install',
        link: '/install',
        activeMatch: '/install'
      },
      { 
        text: 'Gameplay', 
        link: '/gameplay',
        activeMatch: '/gameplay'
      },
      { 
        text: 'Playoffs',
        link: '/playoffs',
        activeMatch: '/playoffs'
      },
      { 
        text: 'Contribute', 
        link: '/contribute',
        activeMatch: '/contribute'
      }
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
            { text: 'FAQ', link: '/faq' },
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
              text: 'Tutorials (W.I.P)',
              collapsed: true,
              link: '/',
              base: '/gameplay/tutorial',
              items: [
                { 
                  text: 'How to Play: Overworld', 
                  collapsed: true,
                  link: '/',
                  base: '/gameplay/tutorial/overworld',
                  items: [
                    { text: 'Village', link: '/village' },
                    { text: 'Shipwreck', link: '/shipwreck' },
                    { text: 'Desert Temple', link: '/desert_temple' },
                    { text: 'Ruined Portal', link: '/ruined_portal' },
                    { text: 'Buried Treasure', link: '/buried_treasure' },
                  ]
                },
                { 
                  text: 'How to Play: Nether', 
                  collapsed: true,
                  link: '/',
                  base: '/gameplay/tutorial/nether',
                  items: [
                    { 
                      text: 'Bastion Remnant', 
                      link: '/' ,
                      base: '/gameplay/tutorial/nether/bastion',
                      items: [
                        { text: 'Housing', link: '/housing' },
                        { text: 'Stables', link: '/stables' },
                        { text: 'Bridge', link: '/bridge' },
                        { text: 'Treasure', link: '/treasure' },
                      ]
                    },
                    { text: 'Fortress', link: '/fortress' },
                  ]
                },
                { 
                  text: 'How to Play: End-game', 
                  collapsed: true,
                  link: '/',
                  base: '/gameplay/tutorial/endgame',
                  items: [
                    { text: 'Locate to Stronghold', link: '/locate_stronghold' },
                    { text: 'Stroldhold', link: '/stronghold' },
                    { 
                      text: 'The End', 
                      link: '/' ,
                      base: '/gameplay/tutorial/endgame/end',
                      items: [
                        { text: 'One-Cycle', link: '/one_cycle' },
                        { text: 'Zero-Cycle', link: '/zero_cycle' },
                        { text: 'Ground-Zero', link: '/ground_zero' },
                        { text: 'Oneshot', link: '/oneshot' },
                      ]
                    },
                  ]
                },
                { 
                  text: 'Useful Techniques', 
                  collapsed: true,
                  link: '/',
                  base: '/gameplay/tutorial/technique',
                  items: [
                    { text: 'Fast Looting Chest', link: '/fast_loot' },
                  ]
                },
              ]
            },
            { 
              text: 'MCSR Ranked Seed', 
              items: [
                { text: 'Filtered Seed', link: '/seed' },
                { text: 'RNG Standardization', link: '/rng' },
              ]
            },
            { text: 'Elo & Ranks', link: '/elo_and_ranks' },
            { text: 'Match-Making', link: '/matchmaking' },
            { text: 'Private Rooms', link: '/private_rooms' },
            { text: 'Weekly Race', link: '/weekly_race' },
            { text: 'Achievements', link: '/achievements' },
            { text: 'Replay System', link: '/replay_system' },
          ]
        }
      ],
      'playoffs': [
        { 
          text: 'Introduction',
          link: '/',
          base: '/playoffs',
          items: [
            { text: 'Rules', link: '/rules' },
            { text: 'Phase Point', link: '/phase_point' },
            {
              text: 'MCSR Ranked Playoffs',
              items: [
                { text: 'Main Bracket (Playoffs)', link: '/bracket' },
                { text: 'Last-Chance Qualifiers', link: '/last_chance_qualifiers' },
                { text: 'Midseason Showdown', link: '/midseason_showdown' },
              ]
            }
          ]
        },
      ],
      'contribute': [
        { 
          text: 'Contribute',
          link: '/',
          base: '/contribute',
          items: [
            { text: 'Contribution Guidelines', link: '/guidelines' },
            { text: 'Markdown Format', link: '/markdown' },
            {
              text: 'Contribute on Page',
              items: [
                { text: 'Edit the Page', link: '/pull_request' },
                { text: 'Request Reviews', link: '/review' }
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
  lastUpdated: true,

  markdown: {
    config(md) {
      md.use(underlinePlugin);
      md.use(markdownItFootnote);
    },
    math: true
  }
})
