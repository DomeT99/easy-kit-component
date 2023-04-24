import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import EInput from "./EText.vue";

describe("EInput suite", () => {
  let wrapper = shallowMount(EInput);

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default length", () => {
    expect(wrapper.attributes("minlength")).toBeUndefined();
    expect(wrapper.attributes("maxlength")).toBeUndefined();
  });

  it("render default readonly", () => {
    expect(wrapper.attributes("readonly")).toBeUndefined();
  });

  it("render default placeholder", () => {
    expect(wrapper.attributes("placeholder")).toBeUndefined();
  });

  it("render default disabled", () => {
    expect(wrapper.attributes("disabled")).toBeUndefined();
  });
});
