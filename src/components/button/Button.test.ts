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
    wrapper = mount(EButton);

    expect(wrapper.classes()).toEqual(["e-button"]);
  });

  it("render default type", () => {
    wrapper = mount(EButton);

    expect(wrapper.attributes("type")).toBe("button");
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
