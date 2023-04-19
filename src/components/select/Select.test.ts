import { mount } from "@vue/test-utils";
import ESelect from "./Select.vue";
import { describe, expect, it, vi } from "vitest";

let wrapper;

describe("ESelect suite", () => {
  it.only("render correctly", () => {
    wrapper = mount(ESelect);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
