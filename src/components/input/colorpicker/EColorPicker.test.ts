import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import EColorPicker from "./EColorPicker.vue";

describe("EColorPicker suite", () => {
  let wrapper = shallowMount(EColorPicker);

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default disabled", () => {
    expect(wrapper.attributes("disabled")).toBeUndefined();
  });
});
