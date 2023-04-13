import { mount } from "@vue/test-utils";
import EButton from "./Button.vue";
import { describe, expect, it, vi } from "vitest";

let wrapper;

describe("EButton suite", () => {
  it("render correctly", () => {
    wrapper = mount(EButton);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default class", () => {
    const options = {
      props: {
        customClasses: undefined,
      },
    };

    wrapper = mount(EButton, options);

    expect(wrapper.classes()).toEqual(["e-button"]);
  });

  it("trigger click event", () => {
    const click = vi.fn();
    const options = {
      listeners: {
        click: click(),
      },
    };

    wrapper = mount(EButton, options);
    wrapper.find("button").trigger("click");

    expect(click).toHaveBeenCalledTimes(1);
  });
});
