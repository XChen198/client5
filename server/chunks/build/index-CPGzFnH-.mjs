import { E as ElForm, a as ElFormItem } from './el-form-item-OnRTIBuw.mjs';
import { E as ElInput } from './el-input-BJwADpFQ.mjs';
import { E as ElButton } from './el-button-B_uZxiJN.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Ds9lYDcz.mjs';
import { E as ElMessage } from './el-message-BN3M17qx.mjs';
import { useSSRContext, defineComponent, ref, reactive, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const ruleFormRef = ref();
    const ruleForm = reactive({
      username: "",
      password: ""
    });
    const rules = reactive({
      username: [
        { required: true, message: "\u8BF7\u8F93\u5165\u7528\u6237\u540D", trigger: "blur" }
      ],
      password: [
        { required: true, message: "\u8BF7\u8F93\u5165\u5BC6\u7801", trigger: "blur" }
      ]
    });
    const submitForm = (formEl) => {
      if (!formEl)
        return;
      formEl.validate(async (valid) => {
        if (valid) {
          try {
            const res = await $fetch("https://nyknow.com/api/auth/login", {
              method: "POST",
              credentials: "include",
              body: JSON.stringify({
                username: ruleForm.username,
                password: ruleForm.password
              })
            });
            if (res.code === 0) {
              ElMessage.success(res.message);
              router.push("/");
            } else {
              ElMessage.error(res.message);
            }
          } catch (error) {
            ElMessage.error("\u767B\u5F55\u5931\u8D25,\u8BF7\u7A0D\u540E\u518D\u8BD5");
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<!--[--><h1 data-v-fde4d032>\u767B\u5F55</h1>`);
      _push(ssrRenderComponent(_component_el_form, {
        ref_key: "ruleFormRef",
        ref: ruleFormRef,
        model: ruleForm,
        rules,
        style: { "max-width": "600px", "margin": "0 auto" },
        "label-width": "auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "\u7528\u6237\u540D",
              prop: "username"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: ruleForm.username,
                    "onUpdate:modelValue": ($event) => ruleForm.username = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: ruleForm.username,
                      "onUpdate:modelValue": ($event) => ruleForm.username = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "\u5BC6\u7801",
              prop: "password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    type: "password",
                    modelValue: ruleForm.password,
                    "onUpdate:modelValue": ($event) => ruleForm.password = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      type: "password",
                      modelValue: ruleForm.password,
                      "onUpdate:modelValue": ($event) => ruleForm.password = $event
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
                    onClick: ($event) => submitForm(ruleFormRef.value),
                    style: { "width": "100%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u767B\u5F55`);
                      } else {
                        return [
                          createTextVNode("\u767B\u5F55")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      type: "primary",
                      onClick: ($event) => submitForm(ruleFormRef.value),
                      style: { "width": "100%" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u767B\u5F55")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="goHome" data-v-fde4d032${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u8FD4\u56DE\u9996\u9875`);
                } else {
                  return [
                    createTextVNode("\u8FD4\u56DE\u9996\u9875")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span><span class="goSignup" data-v-fde4d032${_scopeId}>\u6CA1\u6709\u8D26\u53F7? `);
            _push2(ssrRenderComponent(_component_nuxt_link, { to: "/signup" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53BB\u6CE8\u518C`);
                } else {
                  return [
                    createTextVNode("\u53BB\u6CE8\u518C")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode(_component_el_form_item, {
                label: "\u7528\u6237\u540D",
                prop: "username"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: ruleForm.username,
                    "onUpdate:modelValue": ($event) => ruleForm.username = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "\u5BC6\u7801",
                prop: "password"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    type: "password",
                    modelValue: ruleForm.password,
                    "onUpdate:modelValue": ($event) => ruleForm.password = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: ($event) => submitForm(ruleFormRef.value),
                    style: { "width": "100%" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u767B\u5F55")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode("span", { class: "goHome" }, [
                createVNode(_component_nuxt_link, { to: "/" }, {
                  default: withCtx(() => [
                    createTextVNode("\u8FD4\u56DE\u9996\u9875")
                  ]),
                  _: 1
                })
              ]),
              createVNode("span", { class: "goSignup" }, [
                createTextVNode("\u6CA1\u6709\u8D26\u53F7? "),
                createVNode(_component_nuxt_link, { to: "/signup" }, {
                  default: withCtx(() => [
                    createTextVNode("\u53BB\u6CE8\u518C")
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fde4d032"]]);

export { index as default };
//# sourceMappingURL=index-CPGzFnH-.mjs.map
