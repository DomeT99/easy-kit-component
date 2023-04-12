import Button from "./Button.vue";
import { registerComponent, use } from "../../utils/installComponents";
import { App } from "vue";

const component = {
  install(app: App<Element>) {
    registerComponent(app, Button);
  },
};

use(component);

export default component;

export { Button as EButton };
