import EInput from "./Text.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

let wrapper;

describe("EInput suite", () => {
  it("render correctly", () => {
    wrapper = mount(EInput);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default class", () => {
    wrapper = mount(EInput);

    expect(wrapper.classes()).toEqual(["e-input-text"]);
  });

  it("render default length", () => {
    wrapper = mount(EInput);

    expect(wrapper.attributes("minlength")).toBe(undefined);
    expect(wrapper.attributes("maxlength")).toBe(undefined);
  });
  
  it("render default placeholder", () => {
    wrapper = mount(EInput);

    expect(wrapper.attributes("placeholder")).toBe(undefined);
  });

});
