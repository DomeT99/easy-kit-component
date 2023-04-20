import { mount } from "@vue/test-utils";
import ESelect from "./Select.vue";
import { describe, expect, it, vi } from "vitest";

let wrapper;

describe("ESelect suite", () => {
  it("render correctly", () => {
    wrapper = mount(ESelect);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default class", () => {
    wrapper = mount(ESelect);
    expect(wrapper.classes()).toEqual(["e-select"]);
  });

  it("render default multiple", () => {
    wrapper = mount(ESelect);
    expect(wrapper.attributes("multiple")).toBe(undefined);
  });

  it("render default required", () => {
    wrapper = mount(ESelect);
    expect(wrapper.attributes("required")).toBe(undefined);
  });

  it("render default disabled", () => {
    wrapper = mount(ESelect);
    expect(wrapper.attributes("disabled")).toBe(undefined);
  });

  it("render correctly placeholder", () => {
    const options = {
      props: {
        placeHolder: "Test",
      },
    };
    wrapper = mount(ESelect, options);
    expect(wrapper.vm.placeHolder).toBe("Test");
  });
});
