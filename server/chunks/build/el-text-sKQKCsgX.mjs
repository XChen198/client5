import { defineComponent, computed, openBlock, createBlock, resolveDynamicComponent, normalizeClass, unref, normalizeStyle, withCtx, renderSlot } from 'vue';
import { b as buildProps, w as withInstall, _ as _export_sfc } from './el-message-BN3M17qx.mjs';
import { c as componentSizes, d as useFormSize } from './use-form-item-Csc9I1IS.mjs';
import { a as useNamespace, i as isUndefined } from './server.mjs';

const textProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger", ""],
    default: ""
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  truncated: {
    type: Boolean
  },
  lineClamp: {
    type: [String, Number]
  },
  tag: {
    type: String,
    default: "span"
  }
});
const __default__ = defineComponent({
  name: "ElText"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: textProps,
  setup(__props) {
    const props = __props;
    const textSize = useFormSize();
    const ns = useNamespace("text");
    const textKls = computed(() => [
      ns.b(),
      ns.m(props.type),
      ns.m(textSize.value),
      ns.is("truncated", props.truncated),
      ns.is("line-clamp", !isUndefined(props.lineClamp))
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(unref(textKls)),
        style: normalizeStyle({ "-webkit-line-clamp": _ctx.lineClamp })
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Text = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "text.vue"]]);
const ElText = withInstall(Text);

export { ElText as E };
//# sourceMappingURL=el-text-sKQKCsgX.mjs.map
