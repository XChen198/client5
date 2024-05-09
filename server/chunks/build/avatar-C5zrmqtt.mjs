import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, ref, computed, watch, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createBlock, withCtx, resolveDynamicComponent, renderSlot } from 'vue';
import { b as buildProps, x as iconPropType, j as definePropType, v as addUnit, a as ElIcon, w as withInstall, _ as _export_sfc } from './el-message-BN3M17qx.mjs';
import { c as componentSizes } from './use-form-item-Csc9I1IS.mjs';
import { c as isNumber, a as useNamespace, b as isString_1 } from './server.mjs';

const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val) => isNumber(val)
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: iconPropType
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: definePropType(String),
    default: "cover"
  }
});
const avatarEmits = {
  error: (evt) => evt instanceof Event
};
const _hoisted_1 = ["src", "alt", "srcset"];
const __default__ = defineComponent({
  name: "ElAvatar"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: avatarProps,
  emits: avatarEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("avatar");
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
      const { size, icon, shape } = props;
      const classList = [ns.b()];
      if (isString_1(size))
        classList.push(ns.m(size));
      if (icon)
        classList.push(ns.m("icon"));
      if (shape)
        classList.push(ns.m(shape));
      return classList;
    });
    const sizeStyle = computed(() => {
      const { size } = props;
      return isNumber(size) ? ns.cssVarBlock({
        size: addUnit(size) || ""
      }) : void 0;
    });
    const fitStyle = computed(() => ({
      objectFit: props.fit
    }));
    watch(() => props.src, () => hasLoadError.value = false);
    function handleError(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(avatarClass)),
        style: normalizeStyle(unref(sizeStyle))
      }, [
        (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          alt: _ctx.alt,
          srcset: _ctx.srcSet,
          style: normalizeStyle(unref(fitStyle)),
          onError: handleError
        }, null, 44, _hoisted_1)) : _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 6);
    };
  }
});
var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "avatar.vue"]]);
const ElAvatar = withInstall(Avatar);
const _imports_0 = "" + buildAssetsURL("avatar.uscRzRXF.png");

export { ElAvatar as E, _imports_0 as _ };
//# sourceMappingURL=avatar-C5zrmqtt.mjs.map
