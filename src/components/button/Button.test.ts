import { mount } from "@vue/test-utils";
import EButton from "./Button.vue";
import { describe, expect, it, vi } from "vitest";

let wrapper;

describe("EButton suite", () => {
  it("render correctly", () => {
    wrapper = mount(EButton);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default classes", () => {
    wrapper = mount(EButton, {
      props: {
        customClasses: undefined,
      },
    });

    expect(wrapper.classes()).toEqual(["e-button"]);
  });

  it("trigger click event", () => {
    const click = vi.fn();

    wrapper = mount(EButton, {
      listeners: {
        click: click(),
      },
    });
    wrapper.find("button").trigger("click");

    expect(click).toHaveBeenCalledTimes(1);
  });
});
