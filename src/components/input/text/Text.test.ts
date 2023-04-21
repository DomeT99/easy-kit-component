import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import EInput from "./Text.vue";

describe("EInput suite", () => {
  let wrapper = shallowMount(EInput);

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default class", () => {
    expect(wrapper.classes()).toEqual(["e-input-text"]);
  });

  it("render default length", () => {
    expect(wrapper.attributes("minlength")).toBe(undefined);
    expect(wrapper.attributes("maxlength")).toBe(undefined);
  });

  it("render default readonly", () => {
    expect(wrapper.attributes("readonly")).toBe(undefined);
  });

  it("render default placeholder", () => {
    expect(wrapper.attributes("placeholder")).toBe(undefined);
  });

  it("render default disabled", () => {
    expect(wrapper.attributes("disabled")).toBe(undefined);
  });
});
