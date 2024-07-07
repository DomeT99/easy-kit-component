import { mount, shallowMount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import EDatePicker from "./EDatePicker.vue";

describe("EDatePicker suite", () => {
  let wrapper = shallowMount(EDatePicker);

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default disabled", () => {
    expect(wrapper.attributes("disabled")).toBeUndefined();
  });

  it("render default readonly", () => {
    expect(wrapper.attributes("readonly")).toBeUndefined();
  });
});
