import EInput from "./Input.vue";
import { mount } from "@vue/test-utils";
import { describe, it,expect } from "vitest";

let wrapper;

describe("EInput suite", () => {
  it("render correctly", () => {
    wrapper = mount(EInput);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default class", () => {
    const options = {
      props: {
        customClasses: undefined,
      },
    };

    wrapper = mount(EInput, options);

    expect(wrapper.classes()).toEqual(["e-input"]);
  });
});
