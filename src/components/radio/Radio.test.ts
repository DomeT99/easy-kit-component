import { mount, shallowMount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
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

  it.only("trigger click event", () => {
    const change = vi.fn(() => true);
    const options = {
      listeners: {
        change: change(),
      },
    };

    wrapper = mount(ERadio, options);
    wrapper.find("input").trigger("change");

    expect(change).toHaveReturnedWith(true);
  });
});
