import autoprefixer from "autoprefixer";
import katex from "rehype-katex";
import math from "remark-math";
import tailwind from "tailwindcss";

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mathieu-bannwarth/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/WhiteRoseLK/",
  },
  docs: {
    label: "Documentation",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
  resume: {
    label: "Resume",
    href: "https://evantay.com/pdf/resume.pdf",
  },
};

module.exports = {
  title: "WhiteRose",
  tagline: 'Cybersecurity IT engineer | 🚩​CTF Player | 🧠​Multipotential | 🧗​Climber | So much more…',
  url: 'https://WhiteRoseLK.github.io',
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "WhiteRose",
  projectName: "WhiteRoseLK.github.io",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "WhiteRose",
      logo: {
        alt: "WhiteRose",
        src: "img/sticker.png",
        target: "_self",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "projects/", label: "Projects", position: "left" },
        {
          href: "https://evantay.com/pdf/resume.pdf",
          label: "Resume",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Réseaux",
          items: [
            internetProfiles.linkedin,
            internetProfiles.github,
          ],
        },
        {
          title: "Décourvrir",
          items: [
            internetProfiles.docs,
            internetProfiles.projects,
            internetProfiles.resume,
          ],
        },
      ],
      copyright: `Dernière mise à jour le ${new Date().toDateString()}`,
    },
    prism: {
      additionalLanguages: ['ruby', 'hcl', 'docker', 'yaml'],
      theme: require('prism-react-renderer').themes.nightOwl
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/WhiteRoseLK/WhiteRoseLK.github.io",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwind);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
  ],
};
