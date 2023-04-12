import { App, Component, Plugin, createApp } from "vue";

export function use(plugin: Plugin) {
  const app = createApp({});

  if (typeof window !== "undefined") {
    app.use(plugin);
  }
}

export function registerComponent(app: App<Element>, component: Component) {
  app.component(component.name!, component);
}
