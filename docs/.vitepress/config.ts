import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "Easy Component Kit ",
  description: "Simple components kit for Vue 3!",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '../getting-started/quick-start.md' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quick Start', link: '../getting-started/quick-start.md' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'EButton', link: '../components/ebutton.md' },
          { text: 'ECheckbox', link: '../components/echeckbox.md' },
          { text: 'EText', link: '../components/etext.md' },
          { text: 'ERadio', link: '../components/eradio.md' },
          { text: 'ESelect', link: '../components/eselect.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DomeT99/easy-kit-component' }
    ]
  }
})
