import { E as ElRow, a as ElCol } from './el-col-nHHSVIx3.mjs';
import { E as ElButton } from './el-button-B_uZxiJN.mjs';
import { h as __nuxt_component_8 } from './server.mjs';
import { E as ElSelect, a as ElOption } from './el-select-CiHHeXbQ.mjs';
import { E as ElInput } from './el-input-BJwADpFQ.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Ds9lYDcz.mjs';
import { E as ElCard } from './el-card-CiIM6-zD.mjs';
import { E as ElMenu, b as ElMenuItem, a as ElSubMenu } from './el-menu-item-B7sSfbV3.mjs';
import { _ as _imports_0, E as ElAvatar } from './avatar-C5zrmqtt.mjs';
import { E as ElPagination } from './el-pagination-DbL4LA0G.mjs';
import { E as ElEmpty } from './el-empty-C7pc6TUQ.mjs';
import { E as ElMessage } from './el-message-BN3M17qx.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, withCtx, createTextVNode, unref, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, Transition } from 'vue';
import { u as useFetch, a as useAsyncData } from './fetch-CAX7pJzX.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useUserStore } from './user-C06b1g6F.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './use-form-item-Csc9I1IS.mjs';
import './index-CUqN8X7N.mjs';
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
import './el-popper-BgZ3UHtF.mjs';
import './index-BNZmkjas.mjs';
import './index-yaG29TSu.mjs';
import './vnode-DpqTYviG.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const router = useRouter();
    const userStore = useUserStore();
    const activeIndex = ref("1");
    const searchInput = ref("");
    const selectCategory = ref("");
    const showSearchBox = ref(false);
    const isLogin = ref(false);
    const currentPage = ref(1);
    const send = ref(false);
    const { data: hotposts } = ([__temp, __restore] = withAsyncContext(() => useFetch("http://nyknow.com/api/post/gethot", {
      method: "GET",
      credentials: "include"
    }, "$OF2VfZTw5z")), __temp = await __temp, __restore(), __temp);
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "posts",
      () => $fetch(`http://nyknow.com/api/post/get?currentPage=${currentPage.value}&keyWord=${searchInput.value}&type=${selectCategory.value}`, {
        method: "GET",
        credentials: "include",
        key: "posts"
      }),
      {
        watch: [send, currentPage]
      }
    )), __temp = await __temp, __restore(), __temp);
    {
      console.log("server2:", posts.value);
    }
    const handleSelect = async (key) => {
      if (key === "1") {
        router.push("/");
      } else if (key === "2") {
        showSearchBox.value = !showSearchBox.value;
      } else if (key === "3") {
        ToLogin();
      } else if (key === "4-1") {
        router.push("/account/publish");
      } else if (key === "4-2") {
        ToLogout();
      }
    };
    const handlePageChange = (page) => {
      currentPage.value = page;
    };
    const getSearch = async () => {
      send.value = !send.value;
    };
    const ToLogin = () => {
      router.push("/login");
    };
    const ToSignup = () => {
      router.push("/signup");
    };
    const ToLogout = async () => {
      try {
        const res = await $fetch("https://nyknow.com/api/auth/logout", {
          method: "POST",
          credentials: "include"
        });
        if (res.code === 0) {
          isLogin.value = false;
          ElMessage.success(res.message);
        } else {
          ElMessage.error("\u9000\u51FA\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
        }
      } catch (error) {
      }
    };
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
      },
      {
        value: "",
        label: "\u4E0D\u9009"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_el_button = ElButton;
      const _component_client_only = __nuxt_component_8;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_input = ElInput;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_el_card = ElCard;
      const _component_el_menu = ElMenu;
      const _component_el_menu_item = ElMenuItem;
      const _component_el_sub_menu = ElSubMenu;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_el_avatar = ElAvatar;
      const _component_el_pagination = ElPagination;
      const _component_el_empty = ElEmpty;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-120630dd>`);
      _push(ssrRenderComponent(_component_el_row, null, {
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
                  _push3(`<aside data-v-120630dd${_scopeId2}><h1 data-v-120630dd${_scopeId2}>NYKnow.com</h1>`);
                  if (!isLogin.value) {
                    _push3(ssrRenderComponent(_component_el_button, {
                      plain: "",
                      style: { "width": "100%", "margin-top": "10px" },
                      size: "large",
                      onClick: ToLogin
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
                    _push3(`<!---->`);
                  }
                  _push3(`<span data-v-120630dd${_scopeId2}></span>`);
                  if (!isLogin.value) {
                    _push3(ssrRenderComponent(_component_el_button, {
                      plain: "",
                      style: { "width": "100%", "margin-top": "10px" },
                      size: "large",
                      onClick: ToSignup
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u6CE8\u518C`);
                        } else {
                          return [
                            createTextVNode("\u6CE8\u518C")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (isLogin.value) {
                    _push3(ssrRenderComponent(_component_el_button, {
                      type: "primary",
                      plain: "",
                      style: { "width": "100%", "margin-top": "10px" },
                      size: "large",
                      onClick: ($event) => unref(router).push("/account/publish")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u4E2A\u4EBA\u4E2D\u5FC3`);
                        } else {
                          return [
                            createTextVNode("\u4E2A\u4EBA\u4E2D\u5FC3")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span data-v-120630dd${_scopeId2}></span>`);
                  if (isLogin.value) {
                    _push3(ssrRenderComponent(_component_el_button, {
                      type: "danger",
                      plain: "",
                      style: { "width": "100%", "margin-top": "10px" },
                      size: "large",
                      onClick: ToLogout
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u9000\u51FA\u767B\u5F55`);
                        } else {
                          return [
                            createTextVNode("\u9000\u51FA\u767B\u5F55")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span data-v-120630dd${_scopeId2}> \u5728\u6B64\u8F93\u5165\u5E16\u5B50\u7684\u6807\u9898\u548C\u5206\u7C7B,\u5206\u7C7B\u53EF\u4EE5\u4E0D\u9009\u6216\u9009\u62E9&#39;\u4E0D\u9009&#39;\u8FD9\u4E2A\u9009\u9879(\u9ED8\u8BA4) </span><div data-v-120630dd${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_client_only, null, {}, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: searchInput.value,
                    "onUpdate:modelValue": ($event) => searchInput.value = $event,
                    placeholder: "\u8F93\u5165\u8981\u641C\u7D22\u7684\u5173\u952E\u8BCD",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    style: { "width": "100%", "margin-top": "10px" },
                    onClick: getSearch
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u641C\u7D22`);
                      } else {
                        return [
                          createTextVNode("\u641C\u7D22")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style="${ssrRenderStyle({ "width": "20px", "vertical-align": "bottom" })}" data-v-120630dd${_scopeId2}><path fill="currentColor" d="M704 192h160v736H160V192h160v64h384zM288 512h448v-64H288zm0 256h448v-64H288zm96-576V96h256v96z" data-v-120630dd${_scopeId2}></path></svg><span data-v-120630dd${_scopeId2}>\u6700\u70ED\u5E16\u5B50</span><div class="latestPost" data-v-120630dd${_scopeId2}><ul data-v-120630dd${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(hotposts).data, (post) => {
                    _push3(`<li data-v-120630dd${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_nuxt_link, {
                      to: `/post/${post._id}`,
                      class: "hotPost"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(post.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(post.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</li>`);
                  });
                  _push3(`<!--]--></ul></div><span data-v-120630dd${_scopeId2}>\u516C\u544A</span><div data-v-120630dd${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_card, { shadow: "always" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p data-v-120630dd${_scopeId3}>\u672C\u7AD9\u65E8\u5728\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u7528\u4E8E\u4EA4\u6D41\u7684\u793E\u533A\uFF0C\u4F60\u53EF\u4EE5\u4EE5\u6E38\u5BA2\u7684\u65B9\u5F0F\u6D4F\u89C8\u5185\u5BB9\u6216\u662F\u521B\u5EFA\u4E00\u4E2A\u8D26\u6237\u6765\u53D1\u8868\u5E16\u5B50\uFF0C\u4F46\u7981\u6B62\u53D1\u5E03\u8FB1\u9A82\u7B49\u654F\u611F\u8BCD\u6C47\uFF0C\u611F\u8C22\u5927\u5BB6\u7684\u914D\u5408</p>`);
                      } else {
                        return [
                          createVNode("p", null, "\u672C\u7AD9\u65E8\u5728\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u7528\u4E8E\u4EA4\u6D41\u7684\u793E\u533A\uFF0C\u4F60\u53EF\u4EE5\u4EE5\u6E38\u5BA2\u7684\u65B9\u5F0F\u6D4F\u89C8\u5185\u5BB9\u6216\u662F\u521B\u5EFA\u4E00\u4E2A\u8D26\u6237\u6765\u53D1\u8868\u5E16\u5B50\uFF0C\u4F46\u7981\u6B62\u53D1\u5E03\u8FB1\u9A82\u7B49\u654F\u611F\u8BCD\u6C47\uFF0C\u611F\u8C22\u5927\u5BB6\u7684\u914D\u5408")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_card, { shadow: "always" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p data-v-120630dd${_scopeId3}>\u672C\u7AD9\u65E8\u5728\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u7528\u4E8E\u4EA4\u6D41\u7684\u793E\u533A\uFF0C\u4F60\u53EF\u4EE5\u4EE5\u6E38\u5BA2\u7684\u65B9\u5F0F\u6D4F\u89C8\u5185\u5BB9\u6216\u662F\u521B\u5EFA\u4E00\u4E2A\u8D26\u6237\u6765\u53D1\u8868\u5E16\u5B50\uFF0C\u4F46\u7981\u6B62\u53D1\u5E03\u8FB1\u9A82\u7B49\u654F\u611F\u8BCD\u6C47\uFF0C\u611F\u8C22\u5927\u5BB6\u7684\u914D\u5408</p>`);
                      } else {
                        return [
                          createVNode("p", null, "\u672C\u7AD9\u65E8\u5728\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u7528\u4E8E\u4EA4\u6D41\u7684\u793E\u533A\uFF0C\u4F60\u53EF\u4EE5\u4EE5\u6E38\u5BA2\u7684\u65B9\u5F0F\u6D4F\u89C8\u5185\u5BB9\u6216\u662F\u521B\u5EFA\u4E00\u4E2A\u8D26\u6237\u6765\u53D1\u8868\u5E16\u5B50\uFF0C\u4F46\u7981\u6B62\u53D1\u5E03\u8FB1\u9A82\u7B49\u654F\u611F\u8BCD\u6C47\uFF0C\u611F\u8C22\u5927\u5BB6\u7684\u914D\u5408")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "height": "1px" })}" data-v-120630dd${_scopeId2}></div></aside><header data-v-120630dd${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_menu, {
                    "default-active": activeIndex.value,
                    class: "el-menu-demo",
                    mode: "horizontal",
                    ellipsis: false,
                    onSelect: handleSelect
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_menu_item, { index: "1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" style="${ssrRenderStyle({ "width": "24px" })}" data-v-120630dd${_scopeId4}><path fill="currentColor" d="M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576" data-v-120630dd${_scopeId4}></path></svg><span style="${ssrRenderStyle({ "padding-left": "5px" })}" data-v-120630dd${_scopeId4}> \u9996\u9875 </span>`);
                            } else {
                              return [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 1024 1024",
                                  "data-v-ea893728": "",
                                  style: { "width": "24px" }
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"
                                  })
                                ])),
                                createVNode("span", { style: { "padding-left": "5px" } }, " \u9996\u9875 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex-grow" data-v-120630dd${_scopeId3}></div>`);
                        _push4(ssrRenderComponent(_component_el_menu_item, { index: "2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" style="${ssrRenderStyle({ "width": "24px" })}" data-v-120630dd${_scopeId4}><path fill="currentColor" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704" data-v-120630dd${_scopeId4}></path></svg><span style="${ssrRenderStyle({ "padding-left": "5px", "padding-right": "15px" })}" data-v-120630dd${_scopeId4}>\u641C\u7D22</span>`);
                            } else {
                              return [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 1024 1024",
                                  "data-v-ea893728": "",
                                  style: { "width": "24px" }
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
                                  })
                                ])),
                                createVNode("span", { style: { "padding-left": "5px", "padding-right": "15px" } }, "\u641C\u7D22")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (!isLogin.value) {
                          _push4(ssrRenderComponent(_component_el_menu_item, { index: "3" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" style="${ssrRenderStyle({ "width": "24px" })}" data-v-120630dd${_scopeId4}><path fill="currentColor" d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0" data-v-120630dd${_scopeId4}></path></svg><span style="${ssrRenderStyle({ "padding-left": "5px" })}" data-v-120630dd${_scopeId4}>\u6CE8\u518C/\u767B\u5F55</span>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 1024 1024",
                                    "data-v-ea893728": "",
                                    style: { "width": "24px" }
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                                    })
                                  ])),
                                  createVNode("span", { style: { "padding-left": "5px" } }, "\u6CE8\u518C/\u767B\u5F55")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_component_el_sub_menu, {
                            index: "4",
                            "close-on-click-outside": "true"
                          }, {
                            title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b;
                              if (_push5) {
                                _push5(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" style="${ssrRenderStyle({ "width": "24px" })}" data-v-120630dd${_scopeId4}><path fill="currentColor" d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0" data-v-120630dd${_scopeId4}></path></svg><span style="${ssrRenderStyle({ "padding-left": "5px" })}" data-v-120630dd${_scopeId4}>${ssrInterpolate((_a = unref(userStore).userInfo) == null ? void 0 : _a.username)}</span>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 1024 1024",
                                    "data-v-ea893728": "",
                                    style: { "width": "24px" }
                                  }, [
                                    createVNode("path", {
                                      fill: "currentColor",
                                      d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                                    })
                                  ])),
                                  createVNode("span", { style: { "padding-left": "5px" } }, toDisplayString((_b = unref(userStore).userInfo) == null ? void 0 : _b.username), 1)
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_el_menu_item, { index: "4-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u4E2A\u4EBA\u4E2D\u5FC3`);
                                    } else {
                                      return [
                                        createTextVNode("\u4E2A\u4EBA\u4E2D\u5FC3")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_el_menu_item, {
                                  index: "4-2",
                                  style: { "color": "#f56c6c" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u9000\u51FA\u767B\u5F55 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u9000\u51FA\u767B\u5F55 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_el_menu_item, { index: "4-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u4E2A\u4EBA\u4E2D\u5FC3")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_menu_item, {
                                    index: "4-2",
                                    style: { "color": "#f56c6c" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u9000\u51FA\u767B\u5F55 ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          createVNode(_component_el_menu_item, { index: "1" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 1024 1024",
                                "data-v-ea893728": "",
                                style: { "width": "24px" }
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  d: "M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"
                                })
                              ])),
                              createVNode("span", { style: { "padding-left": "5px" } }, " \u9996\u9875 ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex-grow" }),
                          createVNode(_component_el_menu_item, { index: "2" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 1024 1024",
                                "data-v-ea893728": "",
                                style: { "width": "24px" }
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
                                })
                              ])),
                              createVNode("span", { style: { "padding-left": "5px", "padding-right": "15px" } }, "\u641C\u7D22")
                            ]),
                            _: 1
                          }),
                          !isLogin.value ? (openBlock(), createBlock(_component_el_menu_item, {
                            key: 0,
                            index: "3"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 1024 1024",
                                "data-v-ea893728": "",
                                style: { "width": "24px" }
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                                })
                              ])),
                              createVNode("span", { style: { "padding-left": "5px" } }, "\u6CE8\u518C/\u767B\u5F55")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(_component_el_sub_menu, {
                            key: 1,
                            index: "4",
                            "close-on-click-outside": "true"
                          }, {
                            title: withCtx(() => {
                              var _a;
                              return [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 1024 1024",
                                  "data-v-ea893728": "",
                                  style: { "width": "24px" }
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                                  })
                                ])),
                                createVNode("span", { style: { "padding-left": "5px" } }, toDisplayString((_a = unref(userStore).userInfo) == null ? void 0 : _a.username), 1)
                              ];
                            }),
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item, { index: "4-1" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u4E2A\u4EBA\u4E2D\u5FC3")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, {
                                index: "4-2",
                                style: { "color": "#f56c6c" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u9000\u51FA\u767B\u5F55 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (showSearchBox.value) {
                    _push3(`<div class="searchBox" data-v-120630dd${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_input, {
                      modelValue: searchInput.value,
                      "onUpdate:modelValue": ($event) => searchInput.value = $event,
                      placeholder: "\u8F93\u5165\u5173\u952E\u8BCD",
                      size: "large"
                    }, {
                      prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_client_only, null, {}, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_client_only, null, {
                              default: withCtx(() => [
                                createVNode(_component_el_select, {
                                  modelValue: selectCategory.value,
                                  "onUpdate:modelValue": ($event) => selectCategory.value = $event,
                                  placeholder: "\u9009\u62E9",
                                  style: { "width": "105px" },
                                  size: "large"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(options, (item) => {
                                      return createVNode(_component_el_option, {
                                        key: item.value,
                                        label: item.label,
                                        value: item.value
                                      }, null, 8, ["label", "value"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_el_button, {
                            type: "primary",
                            style: { "width": "70px" },
                            onClick: getSearch
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u641C\u7D22`);
                              } else {
                                return [
                                  createTextVNode("\u641C\u7D22")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_el_button, {
                              type: "primary",
                              style: { "width": "70px" },
                              onClick: getSearch
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u641C\u7D22")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</header>`);
                } else {
                  return [
                    createVNode("aside", null, [
                      createVNode("h1", null, "NYKnow.com"),
                      !isLogin.value ? (openBlock(), createBlock(_component_el_button, {
                        key: 0,
                        plain: "",
                        style: { "width": "100%", "margin-top": "10px" },
                        size: "large",
                        onClick: ToLogin
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u767B\u5F55")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("span"),
                      !isLogin.value ? (openBlock(), createBlock(_component_el_button, {
                        key: 1,
                        plain: "",
                        style: { "width": "100%", "margin-top": "10px" },
                        size: "large",
                        onClick: ToSignup
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u6CE8\u518C")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      isLogin.value ? (openBlock(), createBlock(_component_el_button, {
                        key: 2,
                        type: "primary",
                        plain: "",
                        style: { "width": "100%", "margin-top": "10px" },
                        size: "large",
                        onClick: ($event) => unref(router).push("/account/publish")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u4E2A\u4EBA\u4E2D\u5FC3")
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : createCommentVNode("", true),
                      createVNode("span"),
                      isLogin.value ? (openBlock(), createBlock(_component_el_button, {
                        key: 3,
                        type: "danger",
                        plain: "",
                        style: { "width": "100%", "margin-top": "10px" },
                        size: "large",
                        onClick: ToLogout
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u9000\u51FA\u767B\u5F55")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("span", null, " \u5728\u6B64\u8F93\u5165\u5E16\u5B50\u7684\u6807\u9898\u548C\u5206\u7C7B,\u5206\u7C7B\u53EF\u4EE5\u4E0D\u9009\u6216\u9009\u62E9'\u4E0D\u9009'\u8FD9\u4E2A\u9009\u9879(\u9ED8\u8BA4) "),
                      createVNode("div", null, [
                        createVNode(_component_client_only, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: selectCategory.value,
                              "onUpdate:modelValue": ($event) => selectCategory.value = $event,
                              placeholder: "\u9009\u62E9\u5206\u7C7B",
                              style: { "width": "100%" }
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(options, (item) => {
                                  return createVNode(_component_el_option, {
                                    key: item.value,
                                    label: item.label,
                                    value: item.value
                                  }, null, 8, ["label", "value"]);
                                }), 64))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_input, {
                          modelValue: searchInput.value,
                          "onUpdate:modelValue": ($event) => searchInput.value = $event,
                          placeholder: "\u8F93\u5165\u8981\u641C\u7D22\u7684\u5173\u952E\u8BCD",
                          type: "text"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_el_button, {
                          type: "primary",
                          style: { "width": "100%", "margin-top": "10px" },
                          onClick: getSearch
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u641C\u7D22")
                          ]),
                          _: 1
                        })
                      ]),
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 1024 1024",
                        style: { "width": "20px", "vertical-align": "bottom" }
                      }, [
                        createVNode("path", {
                          fill: "currentColor",
                          d: "M704 192h160v736H160V192h160v64h384zM288 512h448v-64H288zm0 256h448v-64H288zm96-576V96h256v96z"
                        })
                      ])),
                      createVNode("span", null, "\u6700\u70ED\u5E16\u5B50"),
                      createVNode("div", { class: "latestPost" }, [
                        createVNode("ul", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(hotposts).data, (post) => {
                            return openBlock(), createBlock("li", null, [
                              createVNode(_component_nuxt_link, {
                                to: `/post/${post._id}`,
                                class: "hotPost"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(post.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 256))
                        ])
                      ]),
                      createVNode("span", null, "\u516C\u544A"),
                      createVNode("div", null, [
                        createVNode(_component_el_card, { shadow: "always" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "\u672C\u7AD9\u65E8\u5728\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u7528\u4E8E\u4EA4\u6D41\u7684\u793E\u533A\uFF0C\u4F60\u53EF\u4EE5\u4EE5\u6E38\u5BA2\u7684\u65B9\u5F0F\u6D4F\u89C8\u5185\u5BB9\u6216\u662F\u521B\u5EFA\u4E00\u4E2A\u8D26\u6237\u6765\u53D1\u8868\u5E16\u5B50\uFF0C\u4F46\u7981\u6B62\u53D1\u5E03\u8FB1\u9A82\u7B49\u654F\u611F\u8BCD\u6C47\uFF0C\u611F\u8C22\u5927\u5BB6\u7684\u914D\u5408")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_card, { shadow: "always" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "\u672C\u7AD9\u65E8\u5728\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u7528\u4E8E\u4EA4\u6D41\u7684\u793E\u533A\uFF0C\u4F60\u53EF\u4EE5\u4EE5\u6E38\u5BA2\u7684\u65B9\u5F0F\u6D4F\u89C8\u5185\u5BB9\u6216\u662F\u521B\u5EFA\u4E00\u4E2A\u8D26\u6237\u6765\u53D1\u8868\u5E16\u5B50\uFF0C\u4F46\u7981\u6B62\u53D1\u5E03\u8FB1\u9A82\u7B49\u654F\u611F\u8BCD\u6C47\uFF0C\u611F\u8C22\u5927\u5BB6\u7684\u914D\u5408")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { style: { "height": "1px" } })
                    ]),
                    createVNode("header", null, [
                      createVNode(_component_el_menu, {
                        "default-active": activeIndex.value,
                        class: "el-menu-demo",
                        mode: "horizontal",
                        ellipsis: false,
                        onSelect: handleSelect
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_menu_item, { index: "1" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 1024 1024",
                                "data-v-ea893728": "",
                                style: { "width": "24px" }
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  d: "M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"
                                })
                              ])),
                              createVNode("span", { style: { "padding-left": "5px" } }, " \u9996\u9875 ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex-grow" }),
                          createVNode(_component_el_menu_item, { index: "2" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 1024 1024",
                                "data-v-ea893728": "",
                                style: { "width": "24px" }
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
                                })
                              ])),
                              createVNode("span", { style: { "padding-left": "5px", "padding-right": "15px" } }, "\u641C\u7D22")
                            ]),
                            _: 1
                          }),
                          !isLogin.value ? (openBlock(), createBlock(_component_el_menu_item, {
                            key: 0,
                            index: "3"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 1024 1024",
                                "data-v-ea893728": "",
                                style: { "width": "24px" }
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                                })
                              ])),
                              createVNode("span", { style: { "padding-left": "5px" } }, "\u6CE8\u518C/\u767B\u5F55")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(_component_el_sub_menu, {
                            key: 1,
                            index: "4",
                            "close-on-click-outside": "true"
                          }, {
                            title: withCtx(() => {
                              var _a;
                              return [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 1024 1024",
                                  "data-v-ea893728": "",
                                  style: { "width": "24px" }
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                                  })
                                ])),
                                createVNode("span", { style: { "padding-left": "5px" } }, toDisplayString((_a = unref(userStore).userInfo) == null ? void 0 : _a.username), 1)
                              ];
                            }),
                            default: withCtx(() => [
                              createVNode(_component_el_menu_item, { index: "4-1" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u4E2A\u4EBA\u4E2D\u5FC3")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_menu_item, {
                                index: "4-2",
                                style: { "color": "#f56c6c" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u9000\u51FA\u767B\u5F55 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }))
                        ]),
                        _: 1
                      }, 8, ["default-active"]),
                      createVNode(Transition, { name: "el-zoom-in-top" }, {
                        default: withCtx(() => [
                          showSearchBox.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "searchBox"
                          }, [
                            createVNode(_component_el_input, {
                              modelValue: searchInput.value,
                              "onUpdate:modelValue": ($event) => searchInput.value = $event,
                              placeholder: "\u8F93\u5165\u5173\u952E\u8BCD",
                              size: "large"
                            }, {
                              prepend: withCtx(() => [
                                createVNode(_component_client_only, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_select, {
                                      modelValue: selectCategory.value,
                                      "onUpdate:modelValue": ($event) => selectCategory.value = $event,
                                      placeholder: "\u9009\u62E9",
                                      style: { "width": "105px" },
                                      size: "large"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(options, (item) => {
                                          return createVNode(_component_el_option, {
                                            key: item.value,
                                            label: item.label,
                                            value: item.value
                                          }, null, 8, ["label", "value"]);
                                        }), 64))
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              append: withCtx(() => [
                                createVNode(_component_el_button, {
                                  type: "primary",
                                  style: { "width": "70px" },
                                  onClick: getSearch
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u641C\u7D22")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ])
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
                  _push3(`<main data-v-120630dd${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(posts).data.result, (post) => {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      key: post._id,
                      to: `/post/${post._id}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a;
                        if (_push4) {
                          _push4(`<div data-v-120630dd${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_el_avatar, {
                            size: 50,
                            src: post.avatar,
                            style: { "vertical-align": "middle" }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", _imports_0)} data-v-120630dd${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", { src: _imports_0 })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<span data-v-120630dd${_scopeId3}>${ssrInterpolate(post.username)}</span><h4 data-v-120630dd${_scopeId3}>${ssrInterpolate(post.title)}</h4><p class="content" style="${ssrRenderStyle({ "width": "100%", "margin-bottom": "5px" })}" data-v-120630dd${_scopeId3}>${(_a = post.content) != null ? _a : ""}</p><span data-v-120630dd${_scopeId3}>${ssrInterpolate(post.createdAt.split("T")[0])}</span><span style="${ssrRenderStyle({ "float": "right" })}" data-v-120630dd${_scopeId3}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" style="${ssrRenderStyle({ "width": "20px", "vertical-align": "text-bottom" })}" data-v-120630dd${_scopeId3}><path fill="currentColor" d="m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z" data-v-120630dd${_scopeId3}></path><path fill="currentColor" d="M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4" data-v-120630dd${_scopeId3}></path></svg> ${ssrInterpolate(post.comments)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" style="${ssrRenderStyle({ "width": "20px", "vertical-align": "text-bottom" })}" data-v-120630dd${_scopeId3}><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160" data-v-120630dd${_scopeId3}></path></svg> ${ssrInterpolate(post.visitors)}</span></div>`);
                        } else {
                          return [
                            createVNode("div", null, [
                              createVNode(_component_el_avatar, {
                                size: 50,
                                src: post.avatar,
                                style: { "vertical-align": "middle" }
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", { src: _imports_0 })
                                ]),
                                _: 2
                              }, 1032, ["src"]),
                              createVNode("span", null, toDisplayString(post.username), 1),
                              createVNode("h4", null, toDisplayString(post.title), 1),
                              createVNode("p", {
                                class: "content",
                                innerHTML: post.content,
                                style: { "width": "100%", "margin-bottom": "5px" }
                              }, null, 8, ["innerHTML"]),
                              createVNode("span", null, toDisplayString(post.createdAt.split("T")[0]), 1),
                              createVNode("span", { style: { "float": "right" } }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 1024 1024",
                                  "data-v-ea893728": "",
                                  style: { "width": "20px", "vertical-align": "text-bottom" }
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
                                  }),
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4"
                                  })
                                ])),
                                createTextVNode(" " + toDisplayString(post.comments) + " ", 1),
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 1024 1024",
                                  "data-v-ea893728": "",
                                  style: { "width": "20px", "vertical-align": "text-bottom" }
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
                                  })
                                ])),
                                createTextVNode(" " + toDisplayString(post.visitors), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  if (unref(posts).data.total !== 0) {
                    _push3(ssrRenderComponent(_component_el_pagination, {
                      background: "",
                      layout: "prev, pager, next",
                      total: unref(posts).data.total,
                      "page-size": 10,
                      "pager-count": 5,
                      style: { "justify-content": "center" },
                      "current-page": currentPage.value,
                      onCurrentChange: handlePageChange
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(posts).data.total === 0) {
                    _push3(ssrRenderComponent(_component_el_empty, {
                      description: "\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684\u5E16\u5B50",
                      "image-size": 200
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</main>`);
                } else {
                  return [
                    createVNode("main", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(posts).data.result, (post) => {
                        return openBlock(), createBlock(_component_NuxtLink, {
                          key: post._id,
                          to: `/post/${post._id}`
                        }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(_component_el_avatar, {
                                size: 50,
                                src: post.avatar,
                                style: { "vertical-align": "middle" }
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", { src: _imports_0 })
                                ]),
                                _: 2
                              }, 1032, ["src"]),
                              createVNode("span", null, toDisplayString(post.username), 1),
                              createVNode("h4", null, toDisplayString(post.title), 1),
                              createVNode("p", {
                                class: "content",
                                innerHTML: post.content,
                                style: { "width": "100%", "margin-bottom": "5px" }
                              }, null, 8, ["innerHTML"]),
                              createVNode("span", null, toDisplayString(post.createdAt.split("T")[0]), 1),
                              createVNode("span", { style: { "float": "right" } }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 1024 1024",
                                  "data-v-ea893728": "",
                                  style: { "width": "20px", "vertical-align": "text-bottom" }
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
                                  }),
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4"
                                  })
                                ])),
                                createTextVNode(" " + toDisplayString(post.comments) + " ", 1),
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 1024 1024",
                                  "data-v-ea893728": "",
                                  style: { "width": "20px", "vertical-align": "text-bottom" }
                                }, [
                                  createVNode("path", {
                                    fill: "currentColor",
                                    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
                                  })
                                ])),
                                createTextVNode(" " + toDisplayString(post.visitors), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 128)),
                      unref(posts).data.total !== 0 ? (openBlock(), createBlock(_component_el_pagination, {
                        key: 0,
                        background: "",
                        layout: "prev, pager, next",
                        total: unref(posts).data.total,
                        "page-size": 10,
                        "pager-count": 5,
                        style: { "justify-content": "center" },
                        "current-page": currentPage.value,
                        onCurrentChange: handlePageChange
                      }, null, 8, ["total", "current-page"])) : createCommentVNode("", true),
                      unref(posts).data.total === 0 ? (openBlock(), createBlock(_component_el_empty, {
                        key: 1,
                        description: "\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684\u5E16\u5B50",
                        "image-size": 200
                      })) : createCommentVNode("", true)
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
                  createVNode("aside", null, [
                    createVNode("h1", null, "NYKnow.com"),
                    !isLogin.value ? (openBlock(), createBlock(_component_el_button, {
                      key: 0,
                      plain: "",
                      style: { "width": "100%", "margin-top": "10px" },
                      size: "large",
                      onClick: ToLogin
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u767B\u5F55")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode("span"),
                    !isLogin.value ? (openBlock(), createBlock(_component_el_button, {
                      key: 1,
                      plain: "",
                      style: { "width": "100%", "margin-top": "10px" },
                      size: "large",
                      onClick: ToSignup
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u6CE8\u518C")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    isLogin.value ? (openBlock(), createBlock(_component_el_button, {
                      key: 2,
                      type: "primary",
                      plain: "",
                      style: { "width": "100%", "margin-top": "10px" },
                      size: "large",
                      onClick: ($event) => unref(router).push("/account/publish")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u4E2A\u4EBA\u4E2D\u5FC3")
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true),
                    createVNode("span"),
                    isLogin.value ? (openBlock(), createBlock(_component_el_button, {
                      key: 3,
                      type: "danger",
                      plain: "",
                      style: { "width": "100%", "margin-top": "10px" },
                      size: "large",
                      onClick: ToLogout
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u9000\u51FA\u767B\u5F55")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode("span", null, " \u5728\u6B64\u8F93\u5165\u5E16\u5B50\u7684\u6807\u9898\u548C\u5206\u7C7B,\u5206\u7C7B\u53EF\u4EE5\u4E0D\u9009\u6216\u9009\u62E9'\u4E0D\u9009'\u8FD9\u4E2A\u9009\u9879(\u9ED8\u8BA4) "),
                    createVNode("div", null, [
                      createVNode(_component_client_only, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_select, {
                            modelValue: selectCategory.value,
                            "onUpdate:modelValue": ($event) => selectCategory.value = $event,
                            placeholder: "\u9009\u62E9\u5206\u7C7B",
                            style: { "width": "100%" }
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(options, (item) => {
                                return createVNode(_component_el_option, {
                                  key: item.value,
                                  label: item.label,
                                  value: item.value
                                }, null, 8, ["label", "value"]);
                              }), 64))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_input, {
                        modelValue: searchInput.value,
                        "onUpdate:modelValue": ($event) => searchInput.value = $event,
                        placeholder: "\u8F93\u5165\u8981\u641C\u7D22\u7684\u5173\u952E\u8BCD",
                        type: "text"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_el_button, {
                        type: "primary",
                        style: { "width": "100%", "margin-top": "10px" },
                        onClick: getSearch
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u641C\u7D22")
                        ]),
                        _: 1
                      })
                    ]),
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 1024 1024",
                      style: { "width": "20px", "vertical-align": "bottom" }
                    }, [
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M704 192h160v736H160V192h160v64h384zM288 512h448v-64H288zm0 256h448v-64H288zm96-576V96h256v96z"
                      })
                    ])),
                    createVNode("span", null, "\u6700\u70ED\u5E16\u5B50"),
                    createVNode("div", { class: "latestPost" }, [
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(hotposts).data, (post) => {
                          return openBlock(), createBlock("li", null, [
                            createVNode(_component_nuxt_link, {
                              to: `/post/${post._id}`,
                              class: "hotPost"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(post.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]);
                        }), 256))
                      ])
                    ]),
                    createVNode("span", null, "\u516C\u544A"),
                    createVNode("div", null, [
                      createVNode(_component_el_card, { shadow: "always" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "\u672C\u7AD9\u65E8\u5728\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u7528\u4E8E\u4EA4\u6D41\u7684\u793E\u533A\uFF0C\u4F60\u53EF\u4EE5\u4EE5\u6E38\u5BA2\u7684\u65B9\u5F0F\u6D4F\u89C8\u5185\u5BB9\u6216\u662F\u521B\u5EFA\u4E00\u4E2A\u8D26\u6237\u6765\u53D1\u8868\u5E16\u5B50\uFF0C\u4F46\u7981\u6B62\u53D1\u5E03\u8FB1\u9A82\u7B49\u654F\u611F\u8BCD\u6C47\uFF0C\u611F\u8C22\u5927\u5BB6\u7684\u914D\u5408")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_card, { shadow: "always" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "\u672C\u7AD9\u65E8\u5728\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u7528\u4E8E\u4EA4\u6D41\u7684\u793E\u533A\uFF0C\u4F60\u53EF\u4EE5\u4EE5\u6E38\u5BA2\u7684\u65B9\u5F0F\u6D4F\u89C8\u5185\u5BB9\u6216\u662F\u521B\u5EFA\u4E00\u4E2A\u8D26\u6237\u6765\u53D1\u8868\u5E16\u5B50\uFF0C\u4F46\u7981\u6B62\u53D1\u5E03\u8FB1\u9A82\u7B49\u654F\u611F\u8BCD\u6C47\uFF0C\u611F\u8C22\u5927\u5BB6\u7684\u914D\u5408")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { style: { "height": "1px" } })
                  ]),
                  createVNode("header", null, [
                    createVNode(_component_el_menu, {
                      "default-active": activeIndex.value,
                      class: "el-menu-demo",
                      mode: "horizontal",
                      ellipsis: false,
                      onSelect: handleSelect
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_menu_item, { index: "1" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 1024 1024",
                              "data-v-ea893728": "",
                              style: { "width": "24px" }
                            }, [
                              createVNode("path", {
                                fill: "currentColor",
                                d: "M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"
                              })
                            ])),
                            createVNode("span", { style: { "padding-left": "5px" } }, " \u9996\u9875 ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex-grow" }),
                        createVNode(_component_el_menu_item, { index: "2" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 1024 1024",
                              "data-v-ea893728": "",
                              style: { "width": "24px" }
                            }, [
                              createVNode("path", {
                                fill: "currentColor",
                                d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
                              })
                            ])),
                            createVNode("span", { style: { "padding-left": "5px", "padding-right": "15px" } }, "\u641C\u7D22")
                          ]),
                          _: 1
                        }),
                        !isLogin.value ? (openBlock(), createBlock(_component_el_menu_item, {
                          key: 0,
                          index: "3"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 1024 1024",
                              "data-v-ea893728": "",
                              style: { "width": "24px" }
                            }, [
                              createVNode("path", {
                                fill: "currentColor",
                                d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                              })
                            ])),
                            createVNode("span", { style: { "padding-left": "5px" } }, "\u6CE8\u518C/\u767B\u5F55")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(_component_el_sub_menu, {
                          key: 1,
                          index: "4",
                          "close-on-click-outside": "true"
                        }, {
                          title: withCtx(() => {
                            var _a;
                            return [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 1024 1024",
                                "data-v-ea893728": "",
                                style: { "width": "24px" }
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                                })
                              ])),
                              createVNode("span", { style: { "padding-left": "5px" } }, toDisplayString((_a = unref(userStore).userInfo) == null ? void 0 : _a.username), 1)
                            ];
                          }),
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { index: "4-1" }, {
                              default: withCtx(() => [
                                createTextVNode("\u4E2A\u4EBA\u4E2D\u5FC3")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, {
                              index: "4-2",
                              style: { "color": "#f56c6c" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u9000\u51FA\u767B\u5F55 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }))
                      ]),
                      _: 1
                    }, 8, ["default-active"]),
                    createVNode(Transition, { name: "el-zoom-in-top" }, {
                      default: withCtx(() => [
                        showSearchBox.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "searchBox"
                        }, [
                          createVNode(_component_el_input, {
                            modelValue: searchInput.value,
                            "onUpdate:modelValue": ($event) => searchInput.value = $event,
                            placeholder: "\u8F93\u5165\u5173\u952E\u8BCD",
                            size: "large"
                          }, {
                            prepend: withCtx(() => [
                              createVNode(_component_client_only, null, {
                                default: withCtx(() => [
                                  createVNode(_component_el_select, {
                                    modelValue: selectCategory.value,
                                    "onUpdate:modelValue": ($event) => selectCategory.value = $event,
                                    placeholder: "\u9009\u62E9",
                                    style: { "width": "105px" },
                                    size: "large"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(options, (item) => {
                                        return createVNode(_component_el_option, {
                                          key: item.value,
                                          label: item.label,
                                          value: item.value
                                        }, null, 8, ["label", "value"]);
                                      }), 64))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            append: withCtx(() => [
                              createVNode(_component_el_button, {
                                type: "primary",
                                style: { "width": "70px" },
                                onClick: getSearch
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u641C\u7D22")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ])
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(posts).data.result, (post) => {
                      return openBlock(), createBlock(_component_NuxtLink, {
                        key: post._id,
                        to: `/post/${post._id}`
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(_component_el_avatar, {
                              size: 50,
                              src: post.avatar,
                              style: { "vertical-align": "middle" }
                            }, {
                              default: withCtx(() => [
                                createVNode("img", { src: _imports_0 })
                              ]),
                              _: 2
                            }, 1032, ["src"]),
                            createVNode("span", null, toDisplayString(post.username), 1),
                            createVNode("h4", null, toDisplayString(post.title), 1),
                            createVNode("p", {
                              class: "content",
                              innerHTML: post.content,
                              style: { "width": "100%", "margin-bottom": "5px" }
                            }, null, 8, ["innerHTML"]),
                            createVNode("span", null, toDisplayString(post.createdAt.split("T")[0]), 1),
                            createVNode("span", { style: { "float": "right" } }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 1024 1024",
                                "data-v-ea893728": "",
                                style: { "width": "20px", "vertical-align": "text-bottom" }
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
                                }),
                                createVNode("path", {
                                  fill: "currentColor",
                                  d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4"
                                })
                              ])),
                              createTextVNode(" " + toDisplayString(post.comments) + " ", 1),
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 1024 1024",
                                "data-v-ea893728": "",
                                style: { "width": "20px", "vertical-align": "text-bottom" }
                              }, [
                                createVNode("path", {
                                  fill: "currentColor",
                                  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
                                })
                              ])),
                              createTextVNode(" " + toDisplayString(post.visitors), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128)),
                    unref(posts).data.total !== 0 ? (openBlock(), createBlock(_component_el_pagination, {
                      key: 0,
                      background: "",
                      layout: "prev, pager, next",
                      total: unref(posts).data.total,
                      "page-size": 10,
                      "pager-count": 5,
                      style: { "justify-content": "center" },
                      "current-page": currentPage.value,
                      onCurrentChange: handlePageChange
                    }, null, 8, ["total", "current-page"])) : createCommentVNode("", true),
                    unref(posts).data.total === 0 ? (openBlock(), createBlock(_component_el_empty, {
                      key: 1,
                      description: "\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684\u5E16\u5B50",
                      "image-size": 200
                    })) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-120630dd"]]);

export { index as default };
//# sourceMappingURL=index-DOmUs2VP.mjs.map
