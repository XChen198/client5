import { E as ElRow, a as ElCol } from './el-col-nHHSVIx3.mjs';
import { E as ElMenu, a as ElSubMenu, b as ElMenuItem } from './el-menu-item-B7sSfbV3.mjs';
import { E as ElMessage, a as ElIcon } from './el-message-BN3M17qx.mjs';
import { _ as __nuxt_component_6 } from './server.mjs';
import { useSSRContext, defineComponent, ref, withCtx, openBlock, createBlock, createVNode, unref, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useUserStore } from './user-C06b1g6F.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-popper-BgZ3UHtF.mjs';
import './index-BNZmkjas.mjs';
import './index-CUqN8X7N.mjs';
import './vnode-DpqTYviG.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const userStore = useUserStore();
    const isAdmin = ref(false);
    const handleSelect = (key) => {
      switch (key) {
        case "1-0":
          router.push("/");
          break;
        case "1-1":
          router.push("/account/publish");
          break;
        case "1-2":
          router.push("/account/published");
          break;
        case "1-3":
          router.push("/account/info");
          break;
        case "1-4":
          router.push("/account/avatar");
          break;
        case "1-5":
          router.push("/account/admin");
          break;
        case "1-6":
          ToLogout();
          break;
      }
    };
    const ToLogout = async () => {
      try {
        const res = await $fetch("https://nyknow.com/api/auth/logout", {
          method: "POST",
          credentials: "include"
        });
        if (res.code === 0) {
          ElMessage.success(res.message);
          router.push("/");
        } else {
          ElMessage.error("\u9000\u51FA\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
        }
      } catch (error) {
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_el_menu = ElMenu;
      const _component_el_sub_menu = ElSubMenu;
      const _component_el_icon = ElIcon;
      const _component_el_menu_item = ElMenuItem;
      const _component_NuxtPage = __nuxt_component_6;
      _push(ssrRenderComponent(_component_el_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, {
              xs: 24,
              sm: 24,
              md: 6,
              lg: 6,
              xl: 6
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_menu, {
                    "default-active": "1-1",
                    class: "el-menu-vertical-demo",
                    onSelect: handleSelect,
                    "default-openeds": ["1"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_sub_menu, { index: "1" }, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_icon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" data-v-208a5497${_scopeId5}><path fill="currentColor" d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0" data-v-208a5497${_scopeId5}></path></svg>`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 1024 1024",
                                        "data-v-ea893728": ""
                                      }, [
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                                        })
                                      ]))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<span data-v-208a5497${_scopeId4}>\u7528\u6237\u540D:${ssrInterpolate((_a = unref(userStore).userInfo) == null ? void 0 : _a.username)}</span>`);
                            } else {
                              return [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 1024 1024",
                                      "data-v-ea893728": ""
                                    }, [
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, "\u7528\u6237\u540D:" + toDisplayString((_b = unref(userStore).userInfo) == null ? void 0 : _b.username), 1)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "1-0" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" data-v-208a5497${_scopeId6}><path fill="currentColor" d="M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576" data-v-208a5497${_scopeId6}></path></svg>`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 1024 1024",
                                              "data-v-ea893728": ""
                                            }, [
                                              createVNode("path", {
                                                fill: "currentColor",
                                                d: "M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"
                                              })
                                            ]))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span data-v-208a5497${_scopeId5}> \u8FD4\u56DE\u9996\u9875 </span>`);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 1024 1024",
                                            "data-v-ea893728": ""
                                          }, [
                                            createVNode("path", {
                                              fill: "currentColor",
                                              d: "M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, " \u8FD4\u56DE\u9996\u9875 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "1-1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" data-v-208a5497${_scopeId6}><path fill="currentColor" d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z" data-v-208a5497${_scopeId6}></path><path fill="currentColor" d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z" data-v-208a5497${_scopeId6}></path></svg>`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 1024 1024",
                                              "data-v-ea893728": ""
                                            }, [
                                              createVNode("path", {
                                                fill: "currentColor",
                                                d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
                                              }),
                                              createVNode("path", {
                                                fill: "currentColor",
                                                d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
                                              })
                                            ]))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span data-v-208a5497${_scopeId5}> \u53D1\u5E03\u5E16\u5B50 </span>`);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 1024 1024",
                                            "data-v-ea893728": ""
                                          }, [
                                            createVNode("path", {
                                              fill: "currentColor",
                                              d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
                                            }),
                                            createVNode("path", {
                                              fill: "currentColor",
                                              d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, " \u53D1\u5E03\u5E16\u5B50 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "1-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" data-v-208a5497${_scopeId6}><path fill="currentColor" d="m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z" data-v-208a5497${_scopeId6}></path><path fill="currentColor" d="M480 192h64v704h-64z" data-v-208a5497${_scopeId6}></path></svg>`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 1024 1024",
                                              "data-v-ea893728": ""
                                            }, [
                                              createVNode("path", {
                                                fill: "currentColor",
                                                d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
                                              }),
                                              createVNode("path", {
                                                fill: "currentColor",
                                                d: "M480 192h64v704h-64z"
                                              })
                                            ]))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span data-v-208a5497${_scopeId5}> \u67E5\u770B\u5DF2\u53D1\u5E03\u7684\u5E16\u5B50 </span>`);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 1024 1024",
                                            "data-v-ea893728": ""
                                          }, [
                                            createVNode("path", {
                                              fill: "currentColor",
                                              d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
                                            }),
                                            createVNode("path", {
                                              fill: "currentColor",
                                              d: "M480 192h64v704h-64z"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, " \u67E5\u770B\u5DF2\u53D1\u5E03\u7684\u5E16\u5B50 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "1-3" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" data-v-208a5497${_scopeId6}><path fill="currentColor" d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z" data-v-208a5497${_scopeId6}></path></svg>`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 1024 1024",
                                              "data-v-ea893728": ""
                                            }, [
                                              createVNode("path", {
                                                fill: "currentColor",
                                                d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                                              })
                                            ]))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span data-v-208a5497${_scopeId5}> \u6211\u7684\u4FE1\u606F </span>`);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 1024 1024",
                                            "data-v-ea893728": ""
                                          }, [
                                            createVNode("path", {
                                              fill: "currentColor",
                                              d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, " \u6211\u7684\u4FE1\u606F ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "1-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" data-v-208a5497${_scopeId6}><path fill="currentColor" d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0" data-v-208a5497${_scopeId6}></path></svg>`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 1024 1024",
                                              "data-v-ea893728": ""
                                            }, [
                                              createVNode("path", {
                                                fill: "currentColor",
                                                d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0"
                                              })
                                            ]))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span data-v-208a5497${_scopeId5}> \u6211\u7684\u5934\u50CF </span>`);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 1024 1024",
                                            "data-v-ea893728": ""
                                          }, [
                                            createVNode("path", {
                                              fill: "currentColor",
                                              d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, " \u6211\u7684\u5934\u50CF ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (isAdmin.value) {
                                _push5(ssrRenderComponent(_component_el_menu_item, { index: "1-5" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_el_icon, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" data-v-208a5497${_scopeId6}><path fill="currentColor" d="M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96" data-v-208a5497${_scopeId6}></path><path fill="currentColor" d="M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64" data-v-208a5497${_scopeId6}></path></svg>`);
                                          } else {
                                            return [
                                              (openBlock(), createBlock("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 1024 1024",
                                                "data-v-ea893728": ""
                                              }, [
                                                createVNode("path", {
                                                  fill: "currentColor",
                                                  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
                                                }),
                                                createVNode("path", {
                                                  fill: "currentColor",
                                                  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
                                                })
                                              ]))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`<span data-v-208a5497${_scopeId5}> \u7BA1\u7406\u5458 </span>`);
                                    } else {
                                      return [
                                        createVNode(_component_el_icon, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 1024 1024",
                                              "data-v-ea893728": ""
                                            }, [
                                              createVNode("path", {
                                                fill: "currentColor",
                                                d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
                                              }),
                                              createVNode("path", {
                                                fill: "currentColor",
                                                d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
                                              })
                                            ]))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("span", null, " \u7BA1\u7406\u5458 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_el_menu_item, { index: "1-6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" data-v-208a5497${_scopeId6}><path fill="currentColor" d="M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z" data-v-208a5497${_scopeId6}></path><path fill="currentColor" d="M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32" data-v-208a5497${_scopeId6}></path></svg>`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 1024 1024",
                                              "data-v-ea893728": ""
                                            }, [
                                              createVNode("path", {
                                                fill: "currentColor",
                                                d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
                                              }),
                                              createVNode("path", {
                                                fill: "currentColor",
                                                d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32"
                                              })
                                            ]))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span data-v-208a5497${_scopeId5}> \u9000\u51FA\u767B\u5F55 </span>`);
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 1024 1024",
                                            "data-v-ea893728": ""
                                          }, [
                                            createVNode("path", {
                                              fill: "currentColor",
                                              d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
                                            }),
                                            createVNode("path", {
                                              fill: "currentColor",
                                              d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, " \u9000\u51FA\u767B\u5F55 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_menu_item, { index: "1-0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 1024 1024",
                                          "data-v-ea893728": ""
                                        }, [
                                          createVNode("path", {
                                            fill: "currentColor",
                                            d: "M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"
                                          })
                                        ]))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, " \u8FD4\u56DE\u9996\u9875 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "1-1" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 1024 1024",
                                          "data-v-ea893728": ""
                                        }, [
                                          createVNode("path", {
                                            fill: "currentColor",
                                            d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
                                          }),
                                          createVNode("path", {
                                            fill: "currentColor",
                                            d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
                                          })
                                        ]))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, " \u53D1\u5E03\u5E16\u5B50 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "1-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 1024 1024",
                                          "data-v-ea893728": ""
                                        }, [
                                          createVNode("path", {
                                            fill: "currentColor",
                                            d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
                                          }),
                                          createVNode("path", {
                                            fill: "currentColor",
                                            d: "M480 192h64v704h-64z"
                                          })
                                        ]))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, " \u67E5\u770B\u5DF2\u53D1\u5E03\u7684\u5E16\u5B50 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "1-3" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 1024 1024",
                                          "data-v-ea893728": ""
                                        }, [
                                          createVNode("path", {
                                            fill: "currentColor",
                                            d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                                          })
                                        ]))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, " \u6211\u7684\u4FE1\u606F ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_menu_item, { index: "1-4" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 1024 1024",
                                          "data-v-ea893728": ""
                                        }, [
                                          createVNode("path", {
                                            fill: "currentColor",
                                            d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0"
                                          })
                                        ]))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, " \u6211\u7684\u5934\u50CF ")
                                  ]),
                                  _: 1
                                }),
                                isAdmin.value ? (openBlock(), createBlock(_component_el_menu_item, {
                                  key: 0,
                                  index: "1-5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 1024 1024",
                                          "data-v-ea893728": ""
                                        }, [
                                          createVNode("path", {
                                            fill: "currentColor",
                                            d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
                                          }),
                                          createVNode("path", {
                                            fill: "currentColor",
                                            d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
                                          })
                                        ]))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, " \u7BA1\u7406\u5458 ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_el_menu_item, { index: "1-6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_icon, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 1024 1024",
                                          "data-v-ea893728": ""
                                        }, [
                                          createVNode("path", {
                                            fill: "currentColor",
                                            d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
                                          }),
                                          createVNode("path", {
                                            fill: "currentColor",
                                            d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32"
                                          })
                                        ]))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, " \u9000\u51FA\u767B\u5F55 ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_sub_menu, { index: "1" }, {
                            title: withCtx(() => {
                              var _a;
                              return [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 1024 1024",
                                      "data-v-ea893728": ""
                                    }, [
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, "\u7528\u6237\u540D:" + toDisplayString((_a = unref(userStore).userInfo) == null ? void 0 : _a.username), 1)
                              ];
                            }),
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item, { index: "1-0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 1024 1024",
                                        "data-v-ea893728": ""
                                      }, [
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"
                                        })
                                      ]))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, " \u8FD4\u56DE\u9996\u9875 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "1-1" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 1024 1024",
                                        "data-v-ea893728": ""
                                      }, [
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
                                        }),
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
                                        })
                                      ]))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, " \u53D1\u5E03\u5E16\u5B50 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "1-2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 1024 1024",
                                        "data-v-ea893728": ""
                                      }, [
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
                                        }),
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "M480 192h64v704h-64z"
                                        })
                                      ]))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, " \u67E5\u770B\u5DF2\u53D1\u5E03\u7684\u5E16\u5B50 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "1-3" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 1024 1024",
                                        "data-v-ea893728": ""
                                      }, [
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                                        })
                                      ]))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, " \u6211\u7684\u4FE1\u606F ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, { index: "1-4" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 1024 1024",
                                        "data-v-ea893728": ""
                                      }, [
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0"
                                        })
                                      ]))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, " \u6211\u7684\u5934\u50CF ")
                                ]),
                                _: 1
                              }),
                              isAdmin.value ? (openBlock(), createBlock(_component_el_menu_item, {
                                key: 0,
                                index: "1-5"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 1024 1024",
                                        "data-v-ea893728": ""
                                      }, [
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
                                        }),
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
                                        })
                                      ]))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, " \u7BA1\u7406\u5458 ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(_component_el_menu_item, { index: "1-6" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_icon, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 1024 1024",
                                        "data-v-ea893728": ""
                                      }, [
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
                                        }),
                                        createVNode("path", {
                                          fill: "currentColor",
                                          d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32"
                                        })
                                      ]))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, " \u9000\u51FA\u767B\u5F55 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_menu, {
                      "default-active": "1-1",
                      class: "el-menu-vertical-demo",
                      onSelect: handleSelect,
                      "default-openeds": ["1"]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_sub_menu, { index: "1" }, {
                          title: withCtx(() => {
                            var _a;
                            return [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 1024 1024",
                                    "data-v-ea893728": ""
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, "\u7528\u6237\u540D:" + toDisplayString((_a = unref(userStore).userInfo) == null ? void 0 : _a.username), 1)
                            ];
                          }),
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "1-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 1024 1024",
                                      "data-v-ea893728": ""
                                    }, [
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, " \u8FD4\u56DE\u9996\u9875 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "1-1" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 1024 1024",
                                      "data-v-ea893728": ""
                                    }, [
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
                                      }),
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, " \u53D1\u5E03\u5E16\u5B50 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "1-2" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 1024 1024",
                                      "data-v-ea893728": ""
                                    }, [
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
                                      }),
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "M480 192h64v704h-64z"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, " \u67E5\u770B\u5DF2\u53D1\u5E03\u7684\u5E16\u5B50 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "1-3" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 1024 1024",
                                      "data-v-ea893728": ""
                                    }, [
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, " \u6211\u7684\u4FE1\u606F ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { index: "1-4" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 1024 1024",
                                      "data-v-ea893728": ""
                                    }, [
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, " \u6211\u7684\u5934\u50CF ")
                              ]),
                              _: 1
                            }),
                            isAdmin.value ? (openBlock(), createBlock(_component_el_menu_item, {
                              key: 0,
                              index: "1-5"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 1024 1024",
                                      "data-v-ea893728": ""
                                    }, [
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
                                      }),
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, " \u7BA1\u7406\u5458 ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_el_menu_item, { index: "1-6" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 1024 1024",
                                      "data-v-ea893728": ""
                                    }, [
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
                                      }),
                                      createVNode("path", {
                                        fill: "currentColor",
                                        d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, " \u9000\u51FA\u767B\u5F55 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, {
              xs: 24,
              sm: 24,
              md: 18,
              lg: 18,
              xl: 18
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<main data-v-208a5497${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
                  _push3(`</main>`);
                } else {
                  return [
                    createVNode("main", null, [
                      createVNode(_component_NuxtPage)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_col, {
                xs: 24,
                sm: 24,
                md: 6,
                lg: 6,
                xl: 6
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_menu, {
                    "default-active": "1-1",
                    class: "el-menu-vertical-demo",
                    onSelect: handleSelect,
                    "default-openeds": ["1"]
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_sub_menu, { index: "1" }, {
                        title: withCtx(() => {
                          var _a;
                          return [
                            createVNode(_component_el_icon, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 1024 1024",
                                  "data-v-ea893728": ""
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                                  })
                                ]))
                              ]),
                              _: 1
                            }),
                            createVNode("span", null, "\u7528\u6237\u540D:" + toDisplayString((_a = unref(userStore).userInfo) == null ? void 0 : _a.username), 1)
                          ];
                        }),
                        default: withCtx(() => [
                          createVNode(_component_el_menu_item, { index: "1-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 1024 1024",
                                    "data-v-ea893728": ""
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, " \u8FD4\u56DE\u9996\u9875 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "1-1" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 1024 1024",
                                    "data-v-ea893728": ""
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
                                    }),
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, " \u53D1\u5E03\u5E16\u5B50 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "1-2" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 1024 1024",
                                    "data-v-ea893728": ""
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
                                    }),
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M480 192h64v704h-64z"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, " \u67E5\u770B\u5DF2\u53D1\u5E03\u7684\u5E16\u5B50 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "1-3" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 1024 1024",
                                    "data-v-ea893728": ""
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, " \u6211\u7684\u4FE1\u606F ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_menu_item, { index: "1-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 1024 1024",
                                    "data-v-ea893728": ""
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, " \u6211\u7684\u5934\u50CF ")
                            ]),
                            _: 1
                          }),
                          isAdmin.value ? (openBlock(), createBlock(_component_el_menu_item, {
                            key: 0,
                            index: "1-5"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 1024 1024",
                                    "data-v-ea893728": ""
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
                                    }),
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, " \u7BA1\u7406\u5458 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_el_menu_item, { index: "1-6" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 1024 1024",
                                    "data-v-ea893728": ""
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
                                    }),
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32"
                                    })
                                  ]))
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, " \u9000\u51FA\u767B\u5F55 ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_col, {
                xs: 24,
                sm: 24,
                md: 18,
                lg: 18,
                xl: 18
              }, {
                default: withCtx(() => [
                  createVNode("main", null, [
                    createVNode(_component_NuxtPage)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-208a5497"]]);

export { index as default };
//# sourceMappingURL=index-ITnS9G_H.mjs.map
