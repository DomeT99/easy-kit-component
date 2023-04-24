import { mount, shallowMount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import ECheckbox from "./ECheckbox.vue";

describe("ECheckbox suite", () => {
  let wrapper = shallowMount(ECheckbox);

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default disabled", () => {
    expect(wrapper.attributes("disabled")).toBeUndefined();
  });

  it("trigger click event", () => {
    const change = vi.fn(() => {
      return true;
    });

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
