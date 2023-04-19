import ECheckbox from "./Checkbox.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";

let wrapper;

describe("ECheckbox suite", () => {
  it("render correctly", () => {
    wrapper = mount(ECheckbox);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default class", () => {
    wrapper = mount(ECheckbox);

    expect(wrapper.classes()).toEqual(["e-input-checkbox"]);
  });

  it("render default disabled", () => {
    wrapper = mount(ECheckbox);

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
