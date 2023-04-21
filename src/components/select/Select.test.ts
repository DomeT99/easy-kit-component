import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ESelect from "./Select.vue";

describe("ESelect suite", () => {
  let wrapper = shallowMount(ESelect);

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render default multiple", () => {
    expect(wrapper.attributes("multiple")).toBeUndefined();
  });

  it("render default required", () => {
    expect(wrapper.attributes("required")).toBeUndefined();
  });

  it("render default disabled", () => {
    expect(wrapper.attributes("disabled")).toBeUndefined();
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
