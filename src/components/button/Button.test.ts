import { VueWrapper, mount } from "@vue/test-utils";
import EButton from "./Button.vue";
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
