import { mount, shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ERadio from "./Radio.vue";

describe("ERadio suite", () => {
  let wrapper = shallowMount(ERadio);

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default disabled", () => {
    expect(wrapper.attributes("disabled")).toBeUndefined();
  });

  it("render name", () => {
    const options = {
      props: {
        name: "test",
      },
    };
    wrapper = mount(ERadio, options);

    expect(wrapper.props("name")).toEqual("test");
  });
});
