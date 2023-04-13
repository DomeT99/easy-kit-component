import EInput from "./Input.vue";
import { mount } from "@vue/test-utils";
import { describe, it,expect } from "vitest";

let wrapper;

describe("EInput suite", () => {
  it("render correctly", () => {
    wrapper = mount(EInput);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
