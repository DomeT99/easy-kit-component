import { defineComponent as s, openBlock as u, createElementBlock as p, renderSlot as r, unref as d, createElementVNode as i, watch as c, withDirectives as _, isRef as m, toDisplayString as b, vModelSelect as f } from "vue";
const h = ["type", "disabled", "autofocus", "form"], y = {
  name: "EButton"
}, v = /* @__PURE__ */ s({
  ...y,
  props: {
    type: null,
    disabled: { type: Boolean },
    formId: null,
    autoFocus: { type: Boolean }
  },
  setup(t) {
    const l = t;
    return (e, a) => (u(), p("button", {
      type: l.type ?? "button",
      disabled: l.disabled,
      autofocus: l.autoFocus,
      form: l.formId
    }, [
      r(e.$slots, "default")
    ], 8, h));
  }
});
function x(t, l) {
  const e = (t == null ? void 0 : t.target).value;
  l("update:modelValue", e);
}
function $(t, l) {
  const e = (t == null ? void 0 : t.target).checked;
  l("update:modelValue", e);
}
function g(t, l) {
  l("update:modelValue", t);
}
const B = ["disabled"], E = {
  name: "ECheckbox"
}, I = /* @__PURE__ */ s({
  ...E,
  props: {
    disabled: { type: Boolean }
  },
  setup(t, { emit: l }) {
    const e = t;
    return (a, o) => (u(), p("input", {
      type: "checkbox",
      onChange: o[0] || (o[0] = (n) => d($)(n, l)),
      disabled: e.disabled
    }, null, 40, B));
  }
}), k = ["minlength", "maxlength", "readonly", "placeholder", "disabled"], V = {
  name: "EText"
}, T = /* @__PURE__ */ s({
  ...V,
  props: {
    placeHolder: null,
    maxLength: null,
    minLenght: null,
    readOnly: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(t, { emit: l }) {
    const e = t;
    return (a, o) => (u(), p("input", {
      type: "text",
      onInput: o[0] || (o[0] = (n) => d(x)(n, l)),
      minlength: e.minLenght,
      maxlength: e.maxLength,
      readonly: e.readOnly,
      placeholder: e.placeHolder,
      disabled: e.disabled
    }, null, 40, k));
  }
}), C = ["for"], S = ["disabled", "name"], q = {
  name: "ERadio"
}, w = /* @__PURE__ */ s({
  ...q,
  props: {
    value: null,
    name: null,
    disabled: { type: Boolean }
  },
  setup(t, { emit: l }) {
    const e = t;
    let a = e.value;
    return (o, n) => (u(), p("label", {
      for: e.name
    }, [
      i("input", {
        type: "radio",
        onChange: n[0] || (n[0] = (R) => d(g)(d(a), l)),
        disabled: e.disabled,
        name: e.name
      }, null, 40, S),
      r(o.$slots, "default")
    ], 8, C));
  }
}), H = ["multiple", "required", "disabled"], L = {
  disabled: "",
  value: null
}, M = {
  name: "ESelect"
}, D = /* @__PURE__ */ s({
  ...M,
  props: {
    placeHolder: null,
    multiple: { type: Boolean },
    required: { type: Boolean },
    disabled: { type: Boolean },
    value: null
  },
  setup(t) {
    const l = t;
    let e = l.value ?? null;
    return c(e, (a) => {
      e = a;
    }), (a, o) => _((u(), p("select", {
      "onUpdate:modelValue": o[0] || (o[0] = (n) => m(e) ? e.value = n : e = n),
      multiple: l.multiple,
      required: l.required,
      disabled: l.disabled
    }, [
      i("option", L, b(l.placeHolder ?? ""), 1),
      r(a.$slots, "default")
    ], 8, H)), [
      [f, d(e)]
    ]);
  }
});
export {
  v as EButton,
  I as ECheckbox,
  w as ERadio,
  D as ESelect,
  T as EText
};
