import { VueWrapper, mount } from "@vue/test-utils";
import EButton from "./EButton.vue";
import { beforeEach, describe, expect, it } from "vitest";

describe("EButton suite", () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = mount(EButton);
  });

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
