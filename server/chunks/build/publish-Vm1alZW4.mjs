import { E as ElText } from './el-text-sKQKCsgX.mjs';
import { E as ElSelect, a as ElOption } from './el-select-CiHHeXbQ.mjs';
import { E as ElInput } from './el-input-BJwADpFQ.mjs';
import { h as __nuxt_component_8 } from './server.mjs';
import { E as ElButton } from './el-button-B_uZxiJN.mjs';
import { E as ElMessage } from './el-message-BN3M17qx.mjs';
import { defineComponent, ref, withCtx, createTextVNode, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import './use-form-item-Csc9I1IS.mjs';
import './el-popper-BgZ3UHtF.mjs';
import './index-BNZmkjas.mjs';
import './index-yaG29TSu.mjs';
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
import 'vue-router';
import './index-CUqN8X7N.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "publish",
  __ssrInlineRender: true,
  setup(__props) {
    const selectCategory = ref("");
    const inputTitle = ref("");
    const data = ref("");
    const options = [
      {
        value: "\u62DB\u8058",
        label: "\u62DB\u8058"
      },
      {
        value: "\u6C42\u804C",
        label: "\u6C42\u804C"
      },
      {
        value: "\u51FA\u79DF",
        label: "\u51FA\u79DF"
      },
      {
        value: "\u65B0\u95FB",
        label: "\u65B0\u95FB"
      },
      {
        value: "\u6D3B\u52A8",
        label: "\u6D3B\u52A8"
      },
      {
        value: "\u751F\u6D3B",
        label: "\u751F\u6D3B"
      },
      {
        value: "\u79D1\u6280",
        label: "\u79D1\u6280"
      },
      {
        value: "\u5A31\u4E50",
        label: "\u5A31\u4E50"
      },
      {
        value: "\u6559\u80B2",
        label: "\u6559\u80B2"
      },
      {
        value: "\u793E\u4F1A",
        label: "\u793E\u4F1A"
      },
      {
        value: "\u7F16\u7A0B",
        label: "\u7F16\u7A0B"
      },
      {
        value: "\u5176\u4ED6",
        label: "\u5176\u4ED6"
      }
    ];
    const uploadPost = async () => {
      try {
        const res = await $fetch("https://nyknow.com/api/post/create", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            type: selectCategory.value,
            title: inputTitle.value,
            content: data.value
          })
        });
        if (res.code === 0) {
          ElMessage.success(res.message);
          selectCategory.value = "";
          inputTitle.value = "";
          data.value = "";
          const quill = (void 0).querySelector(".ql-editor");
          if (quill) {
            quill.innerHTML = "";
          }
        } else {
          ElMessage.error(res.message);
        }
      } catch (error) {
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_text = ElText;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_input = ElInput;
      const _component_ClientOnly = __nuxt_component_8;
      const _component_el_button = ElButton;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_el_text, {
        class: "mx-1",
        type: "info"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u53D1\u5E03\u5E16\u5B50`);
          } else {
            return [
              createTextVNode("\u53D1\u5E03\u5E16\u5B50")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h5>\u9009\u62E9\u5206\u7C7B\uFF1A</h5>`);
      _push(ssrRenderComponent(_component_el_select, {
        modelValue: selectCategory.value,
        "onUpdate:modelValue": ($event) => selectCategory.value = $event,
        placeholder: "\u9009\u62E9",
        style: { "width": "100%" },
        size: "large"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(options, (item) => {
              _push2(ssrRenderComponent(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(options, (item) => {
                return createVNode(_component_el_option, {
                  key: item.value,
                  label: item.label,
                  value: item.value
                }, null, 8, ["label", "value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h5>\u6807\u9898\uFF1A</h5>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: inputTitle.value,
        "onUpdate:modelValue": ($event) => inputTitle.value = $event,
        style: { "width": "100%", "height": "40px", "margin-bottom": "20px" },
        placeholder: "\u6807\u9898\u63A8\u8350\u572830\u5B57\u4EE5\u5185"
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_text, {
        class: "mx-1",
        type: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6CE8\u610F: \u5355\u5F20\u56FE\u7247\u4E0D\u80FD\u9AD8\u4E8E2MB!`);
          } else {
            return [
              createTextVNode("\u6CE8\u610F: \u5355\u5F20\u56FE\u7247\u4E0D\u80FD\u9AD8\u4E8E2MB!")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br>`);
      _push(ssrRenderComponent(_component_el_text, {
        class: "mx-1",
        type: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4E0A\u4F20\u56FE\u7247\u6210\u529F\u540E\u8BF7\u7A0D\u4F5C\u7B49\u5F85\uFF0C\u56FE\u7247\u4F1A\u52A0\u8F7D\u5728\u8F93\u5165\u6846\u4E2D`);
          } else {
            return [
              createTextVNode("\u4E0A\u4F20\u56FE\u7247\u6210\u529F\u540E\u8BF7\u7A0D\u4F5C\u7B49\u5F85\uFF0C\u56FE\u7247\u4F1A\u52A0\u8F7D\u5728\u8F93\u5165\u6846\u4E2D")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        size: "large",
        style: { "margin-top": "20px", "width": "100%" },
        onClick: uploadPost
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u53D1\u5E03`);
          } else {
            return [
              createTextVNode("\u53D1\u5E03")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index/publish.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=publish-Vm1alZW4.mjs.map
