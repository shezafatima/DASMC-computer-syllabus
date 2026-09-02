// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Digital & Future Skills Program',
  tagline: 'Practical • Creative • Computational • AI-Aware — Dar-e-Arqam Metroville Campus',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://digital-future-skills.example.com',
  baseUrl: '/',

  organizationName: 'dar-e-arqam-metroville',
  projectName: 'digital-future-skills-syllabus',

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Digital & Future Skills',
        logo: {
          alt: 'Dar-e-Arqam Metroville Campus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'bookSidebar',
            position: 'left',
            label: 'Syllabus',
          },
          {
            to: '/curriculum-map',
            label: 'Curriculum Map',
            position: 'left',
          },
          {
            to: '/assessment-and-projects/final-assessment',
            label: 'Assessment',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Program',
            items: [
              {label: 'Introduction', to: '/introduction/program-goals'},
              {label: 'Curriculum Map', to: '/curriculum-map'},
              {label: 'Final Assessment', to: '/assessment-and-projects/final-assessment'},
            ],
          },
          {
            title: 'Grades',
            items: [
              {label: 'Grade 2 — Computer Discovery', to: '/grade-2/overview'},
              {label: 'Grade 3 — Digital Explorer', to: '/grade-3/overview'},
              {label: 'Grade 4 — Digital Creator', to: '/grade-4/overview'},
              {label: 'Grade 5 — Digital Problem Solver', to: '/grade-5/overview'},
              {label: 'Grade 6 — Digital Builder', to: '/grade-6/overview'},
              {label: 'Grade 7 — Digital Innovator', to: '/grade-7/overview'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Dar-e-Arqam Metroville Campus — Digital & Future Skills Program.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
