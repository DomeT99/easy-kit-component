import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import EButton from "./Button.vue";



describe("EButton suite", () => {
  let wrapper = shallowMount(EButton);

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default class", () => {
    expect(wrapper.classes()).toEqual(["e-button"]);
  });

  it("render default type", () => {
    expect(wrapper.attributes("type")).toBe("button");
  });

  it("render default autofocus", () => {
    expect(wrapper.attributes("autofocus")).toBe("false");
  });

  it("render default form id", () => {
    expect(wrapper.attributes("form")).toBe(undefined);
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
