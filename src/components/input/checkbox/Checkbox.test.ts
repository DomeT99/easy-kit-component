import { mount, shallowMount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import ECheckbox from "./Checkbox.vue";

describe("ECheckbox suite", () => {
  let wrapper = shallowMount(ECheckbox);

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default class", () => {
    expect(wrapper.classes()).toEqual(["e-input-checkbox"]);
  });

  it("render default disabled", () => {
    expect(wrapper.attributes("disabled")).toBe(undefined);
  });

  it("trigger click event", () => {
    const change = vi.fn(() => true);
    const options = {
      listeners: {
        change: change(),
      },
    };

    wrapper = mount(ECheckbox, options);
    wrapper.find("input").trigger("change");

    expect(change).toHaveReturnedWith(true);
  });
});
