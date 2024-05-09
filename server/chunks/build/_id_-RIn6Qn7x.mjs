import { _ as _imports_0, E as ElAvatar } from './avatar-C5zrmqtt.mjs';
import { E as ElText } from './el-text-sKQKCsgX.mjs';
import { E as ElDivider } from './el-overlay-NUyLuOGi.mjs';
import { E as ElRow, a as ElCol } from './el-col-nHHSVIx3.mjs';
import { E as ElInput } from './el-input-BJwADpFQ.mjs';
import { E as ElButton } from './el-button-B_uZxiJN.mjs';
import { E as ElPagination } from './el-pagination-DbL4LA0G.mjs';
import { h as __nuxt_component_8 } from './server.mjs';
import { E as ElMessage } from './el-message-BN3M17qx.mjs';
import { u as useFetch, a as useAsyncData } from './fetch-CAX7pJzX.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useUserStore } from './user-C06b1g6F.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './use-form-item-Csc9I1IS.mjs';
import './index-BNZmkjas.mjs';
import './index-CUqN8X7N.mjs';
import './index-yaG29TSu.mjs';
import './el-select-CiHHeXbQ.mjs';
import './el-popper-BgZ3UHtF.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:net';
import 'node:path';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { params } = useRoute();
    const userStore = useUserStore();
    const router = useRouter();
    const currentPage = ref(1);
    const currentChildPage = ref(1);
    ref(0);
    const content = ref("");
    const replycontent = ref("");
    ref("");
    const temp = ref("");
    ref("");
    const child = ref({
      total: 0,
      comments: [],
      parent: {
        _id: "",
        content: "",
        avatar: "",
        createdAt: "",
        updatedAt: "",
        username: ""
      }
    });
    const drawer = ref(false);
    const size = ref("50%");
    const send = ref(false);
    const { data: post } = ([__temp, __restore] = withAsyncContext(() => useFetch(`http://nyknow.com/api/post/${params.id}`, {
      method: "GET",
      credentials: "include"
    }, "$ha8dIhfv4Y")), __temp = await __temp, __restore(), __temp);
    const { data: comments } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "comments",
      () => $fetch(`http://nyknow.com/api/comment/get?postId=${params.id}&currentPage=${currentPage.value}`, {
        method: "GET",
        credentials: "include"
      }),
      {
        watch: [currentPage, send]
      }
    )), __temp = await __temp, __restore(), __temp);
    const showReplyArea = (commentId) => {
      replycontent.value = "";
      temp.value = commentId;
    };
    const showChildComments = async (commentId, isShow) => {
      if ((void 0).innerWidth < 768) {
        size.value = "100%";
      } else {
        size.value = "50%";
      }
      try {
        const res = await $fetch(`https://nyknow.com/api/comment/child?parentId=${commentId}&currentPage=${currentChildPage.value}`, {
          method: "GET",
          credentials: "include"
        });
        if (res.code === 0) {
          child.value = res.data;
          drawer.value = isShow;
        } else {
          ElMessage.error(res.message);
        }
      } catch (error) {
        ElMessage.error("\u7F51\u7EDC\u9519\u8BEF");
      }
    };
    const replyComment = async (commentId) => {
      try {
        const res = await $fetch("https://nyknow.com/api/user", {
          method: "GET",
          credentials: "include"
        });
        if (res.code === 0) {
          userStore.setUserInfo(res.data);
        } else {
          ElMessage.error("\u8BC4\u8BBA\u524D\u8BF7\u5148\u767B\u5F55");
          router.push("/login");
        }
        const res2 = await $fetch("https://nyknow.com/api/comment/reply", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            parentId: commentId,
            postId: params.id,
            content: replycontent.value
          })
        });
        if (res2.code === 0) {
          ElMessage.success(res2.message);
          replycontent.value = "";
          send.value = !send.value;
          drawer.value = false;
        } else {
          ElMessage.error(res2.message);
        }
      } catch (error) {
        ElMessage.error("\u7F51\u7EDC\u9519\u8BEF");
      }
    };
    const handlePageChange = (val) => {
      currentPage.value = val;
    };
    const sendComment = async () => {
      try {
        const res = await $fetch("https://nyknow.com/api/comment/create", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            postId: params.id,
            content: content.value
          })
        });
        if (res.code === 0) {
          content.value = "";
          ElMessage.success(res.message);
          send.value = !send.value;
        } else {
          ElMessage.error(res.message);
        }
      } catch (error) {
        ElMessage.error("\u7F51\u7EDC\u9519\u8BEF");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_el_avatar = ElAvatar;
      const _component_el_text = ElText;
      const _component_el_divider = ElDivider;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _component_el_pagination = ElPagination;
      const _component_client_only = __nuxt_component_8;
      _push(`<!--[--><div class="back" data-v-5c93bce3><div class="backbtn" data-v-5c93bce3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" style="${ssrRenderStyle({ "width": "24px", "vertical-align": "text-top" })}" data-v-5c93bce3><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" data-v-5c93bce3></path><path fill="currentColor" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z" data-v-5c93bce3></path></svg><span style="${ssrRenderStyle({ "margin-left": "5px" })}" data-v-5c93bce3>\u8FD4\u56DE</span></div></div><div class="post" data-v-5c93bce3>`);
      _push(ssrRenderComponent(_component_el_avatar, {
        size: 50,
        src: unref(post).data.avatar,
        style: { "vertical-align": "middle" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-5c93bce3${_scopeId}>`);
          } else {
            return [
              createVNode("img", { src: _imports_0 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="username" data-v-5c93bce3>${ssrInterpolate(unref(post).data.username)}</span><div class="main" data-v-5c93bce3><h3 data-v-5c93bce3>${ssrInterpolate(unref(post).data.title)}</h3><div data-v-5c93bce3>${(_a = unref(post).data.content) != null ? _a : ""}</div></div><div class="footer" data-v-5c93bce3><span data-v-5c93bce3>${ssrInterpolate(unref(post).data.createdAt.split("T")[0])}</span></div></div><div class="comments" data-v-5c93bce3>`);
      _push(ssrRenderComponent(_component_el_text, { class: "mx-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6D4F\u89C8\u91CF: ${ssrInterpolate(unref(post).data.visitors)}`);
          } else {
            return [
              createTextVNode("\u6D4F\u89C8\u91CF: " + toDisplayString(unref(post).data.visitors), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_text, {
        class: "mx-1",
        style: { "margin-left": "8px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u8BC4\u8BBA\u6570: ${ssrInterpolate(unref(post).data.comments)}`);
          } else {
            return [
              createTextVNode("\u8BC4\u8BBA\u6570: " + toDisplayString(unref(post).data.comments), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(comments).data.comments, (comment) => {
        _push(`<div class="comment" data-v-5c93bce3>`);
        _push(ssrRenderComponent(_component_el_avatar, {
          size: 45,
          src: comment.avatar,
          style: { "vertical-align": "middle" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-5c93bce3${_scopeId}>`);
            } else {
              return [
                createVNode("img", { src: _imports_0 })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<span style="${ssrRenderStyle({ "margin-left": "8px" })}" data-v-5c93bce3>${ssrInterpolate(comment.username)}</span><div class="content" data-v-5c93bce3>`);
        _push(ssrRenderComponent(_component_el_text, {
          class: "mx-1",
          size: "large"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(comment.content)}`);
            } else {
              return [
                createTextVNode(toDisplayString(comment.content), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
        if (comment.total !== 0) {
          _push(ssrRenderComponent(_component_el_row, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(comment.childComments, (childComment) => {
                  _push2(ssrRenderComponent(_component_el_col, {
                    style: { "margin-bottom": "8px" },
                    key: childComment._id
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_el_text, { class: "mx-1" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(childComment.username)}: ${ssrInterpolate(childComment.content)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(childComment.username) + ": " + toDisplayString(childComment.content), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_el_text, { class: "mx-1" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(childComment.username) + ": " + toDisplayString(childComment.content), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
                if (comment.total > 2) {
                  _push2(ssrRenderComponent(_component_el_col, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_el_text, {
                          class: "mx-1 checkTotal",
                          onClick: ($event) => showChildComments(comment._id, true)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`\u67E5\u770B\u5168\u90E8${ssrInterpolate(comment.total)}\u6761\u8BC4\u8BBA`);
                            } else {
                              return [
                                createTextVNode("\u67E5\u770B\u5168\u90E8" + toDisplayString(comment.total) + "\u6761\u8BC4\u8BBA", 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_el_text, {
                            class: "mx-1 checkTotal",
                            onClick: ($event) => showChildComments(comment._id, true)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u67E5\u770B\u5168\u90E8" + toDisplayString(comment.total) + "\u6761\u8BC4\u8BBA", 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(comment.childComments, (childComment) => {
                    return openBlock(), createBlock(_component_el_col, {
                      style: { "margin-bottom": "8px" },
                      key: childComment._id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_text, { class: "mx-1" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(childComment.username) + ": " + toDisplayString(childComment.content), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  comment.total > 2 ? (openBlock(), createBlock(_component_el_col, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_text, {
                        class: "mx-1 checkTotal",
                        onClick: ($event) => showChildComments(comment._id, true)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u67E5\u770B\u5168\u90E8" + toDisplayString(comment.total) + "\u6761\u8BC4\u8BBA", 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div style="${ssrRenderStyle({ "margin": "0 auto" })}" class="timeAndReply" data-v-5c93bce3>`);
        _push(ssrRenderComponent(_component_el_text, {
          class: "mx-1",
          size: "small"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(comment.createdAt.split("T")[0])}`);
            } else {
              return [
                createTextVNode(toDisplayString(comment.createdAt.split("T")[0]), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_el_text, {
          class: "mx-1 reply",
          style: { "margin-left": "10px" },
          onClick: ($event) => showReplyArea(comment._id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u56DE\u590D`);
            } else {
              return [
                createTextVNode("\u56DE\u590D")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
        if (temp.value === comment._id) {
          _push(`<div data-v-5c93bce3>`);
          _push(ssrRenderComponent(_component_el_input, {
            modelValue: replycontent.value,
            "onUpdate:modelValue": ($event) => replycontent.value = $event,
            modelModifiers: { trim: true },
            placeholder: "\u8BF7\u8F93\u5165\u8981\u56DE\u590D\u7684\u5185\u5BB9",
            type: "textarea",
            style: { "width": "100%" },
            rows: 2
          }, null, _parent));
          _push(ssrRenderComponent(_component_el_button, {
            type: "primary",
            style: { "width": "100%", "margin-top": "10px" },
            onClick: ($event) => replyComment(comment._id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u56DE\u590D`);
              } else {
                return [
                  createTextVNode("\u56DE\u590D")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (unref(comments).data.total !== 0) {
        _push(ssrRenderComponent(_component_el_pagination, {
          background: "",
          layout: "prev, pager, next",
          total: unref(comments).data.total,
          "page-size": 10,
          "pager-count": 5,
          style: { "justify-content": "center" },
          onCurrentChange: handlePageChange
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sendComment" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-5c93bce3>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: content.value,
        "onUpdate:modelValue": ($event) => content.value = $event,
        modelModifiers: { trim: true },
        placeholder: "\u8BF7\u8F93\u5165\u8BC4\u8BBA\u5185\u5BB9",
        type: "textarea",
        style: { "width": "100%" },
        rows: 6
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        size: "large",
        onClick: sendComment,
        style: { "width": "100%", "margin-top": "10px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u53D1\u9001`);
          } else {
            return [
              createTextVNode("\u53D1\u9001")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c93bce3"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-RIn6Qn7x.mjs.map
