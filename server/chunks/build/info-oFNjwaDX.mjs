import { E as ElText } from './el-text-sKQKCsgX.mjs';
import { E as ElForm, a as ElFormItem } from './el-form-item-OnRTIBuw.mjs';
import { E as ElInput } from './el-input-BJwADpFQ.mjs';
import { E as ElButton } from './el-button-B_uZxiJN.mjs';
import { E as ElMessage } from './el-message-BN3M17qx.mjs';
import { defineComponent, ref, reactive, withCtx, createTextVNode, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useUserStore } from './user-C06b1g6F.mjs';
import './use-form-item-Csc9I1IS.mjs';
import './server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './objects-B0KhirYa.mjs';
import './index-BNZmkjas.mjs';
import './index-CUqN8X7N.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "info",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const userStore = useUserStore();
    const ruleFormRef = ref();
    const ruleForm = reactive({
      oldPassword: "",
      newPassword: ""
    });
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"));
      } else if (value.length < 6) {
        callback(new Error("\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D"));
      } else {
        callback();
      }
    };
    const rules = reactive({
      oldPassword: [
        { required: true, message: "\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801", trigger: "blur" },
        { validator: validatePass, trigger: "blur" }
      ],
      newPassword: [
        { required: true, message: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801", trigger: "blur" },
        { validator: validatePass, trigger: "blur" }
      ]
    });
    const submitForm = (formEl) => {
      if (!formEl)
        return;
      formEl.validate(async (valid) => {
        if (valid) {
          try {
            const res = await $fetch("https://nyknow.com/api/user", {
              method: "PUT",
              credentials: "include",
              body: JSON.stringify({
                oldPassword: ruleForm.oldPassword,
                newPassword: ruleForm.newPassword
              })
            });
            if (res.code === 0) {
              ElMessage.success(res.message);
              router.push("/login");
            } else {
              ElMessage.error(res.message);
            }
          } catch (error) {
            ElMessage.error("\u4FEE\u6539\u5931\u8D25,\u8BF7\u7A0D\u540E\u518D\u8BD5");
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_text = ElText;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_el_text, {
        class: "mx-1",
        type: "info"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6211\u7684\u4FE1\u606F`);
          } else {
            return [
              createTextVNode("\u6211\u7684\u4FE1\u606F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="myinfo" style="${ssrRenderStyle({ "margin-top": "20px" })}">`);
      _push(ssrRenderComponent(_component_el_form, {
        ref_key: "ruleFormRef",
        ref: ruleFormRef,
        model: unref(ruleForm),
        rules: unref(rules),
        style: { "max-width": "600px", "margin": "0 auto" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form_item, { label: "\u7528\u6237\u540D :" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    value: (_a = unref(userStore).userInfo) == null ? void 0 : _a.username,
                    disabled: "",
                    style: { "max-width": "600px", "margin": "0 auto" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      value: (_b = unref(userStore).userInfo) == null ? void 0 : _b.username,
                      disabled: "",
                      style: { "max-width": "600px", "margin": "0 auto" }
                    }, null, 8, ["value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "\u65E7\u5BC6\u7801 :",
              prop: "oldPassword"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(ruleForm).oldPassword,
                    "onUpdate:modelValue": ($event) => unref(ruleForm).oldPassword = $event,
                    modelModifiers: { trim: true },
                    type: "password"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(ruleForm).oldPassword,
                      "onUpdate:modelValue": ($event) => unref(ruleForm).oldPassword = $event,
                      modelModifiers: { trim: true },
                      type: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "\u65B0\u5BC6\u7801 :",
              prop: "newPassword"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(ruleForm).newPassword,
                    "onUpdate:modelValue": ($event) => unref(ruleForm).newPassword = $event,
                    modelModifiers: { trim: true },
                    type: "password"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(ruleForm).newPassword,
                      "onUpdate:modelValue": ($event) => unref(ruleForm).newPassword = $event,
                      modelModifiers: { trim: true },
                      type: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    onClick: ($event) => submitForm(unref(ruleFormRef)),
                    style: { "width": "100%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u91CD\u7F6E\u5BC6\u7801`);
                      } else {
                        return [
                          createTextVNode("\u91CD\u7F6E\u5BC6\u7801")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      type: "primary",
                      onClick: ($event) => submitForm(unref(ruleFormRef)),
                      style: { "width": "100%" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u91CD\u7F6E\u5BC6\u7801")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_form_item, { label: "\u7528\u6237\u540D :" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(_component_el_input, {
                      value: (_a = unref(userStore).userInfo) == null ? void 0 : _a.username,
                      disabled: "",
                      style: { "max-width": "600px", "margin": "0 auto" }
                    }, null, 8, ["value"])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "\u65E7\u5BC6\u7801 :",
                prop: "oldPassword"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(ruleForm).oldPassword,
                    "onUpdate:modelValue": ($event) => unref(ruleForm).oldPassword = $event,
                    modelModifiers: { trim: true },
                    type: "password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "\u65B0\u5BC6\u7801 :",
                prop: "newPassword"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(ruleForm).newPassword,
                    "onUpdate:modelValue": ($event) => unref(ruleForm).newPassword = $event,
                    modelModifiers: { trim: true },
                    type: "password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: ($event) => submitForm(unref(ruleFormRef)),
                    style: { "width": "100%" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u91CD\u7F6E\u5BC6\u7801")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_text, {
        class: "mx-1",
        type: "warning",
        style: { "margin": "0 auto" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4FEE\u6539\u6210\u529F\u540E\u9700\u91CD\u65B0\u767B\u5F55`);
          } else {
            return [
              createTextVNode("\u4FEE\u6539\u6210\u529F\u540E\u9700\u91CD\u65B0\u767B\u5F55")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index/info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=info-oFNjwaDX.mjs.map
