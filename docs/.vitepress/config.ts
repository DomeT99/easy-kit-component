import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Easy Kit Component",
  description: "Simple components kit for Vue 3!",
  titleTemplate: false,
  head: [
    [
      "link",
      {
        rel: "favicon",
        type: "image/png",
        sizes: "16x16",
        href: "/docs/public/favicon.ico",
      },
    ],
  ],
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Docs",
        link: "../guide/getting-started/quick-start.md",
        activeMatch: `/guide/`,
      },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Quick Start", link: "../getting-started/quick-start.md" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "EButton", link: "../components/ebutton.md" },
          { text: "ECheckbox", link: "../components/echeckbox.md" },
          { text: "EText", link: "../components/etext.md" },
          { text: "ETextArea", link: "../components/etextarea.md" },
          { text: "ERadio", link: "../components/eradio.md" },
          { text: "ESelect", link: "../components/eselect.md" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/DomeT99/easy-kit-component" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Domenico Tenace",
    },
  },
});
