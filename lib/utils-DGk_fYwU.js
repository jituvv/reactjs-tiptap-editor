var sn = Object.defineProperty;
var ln = (e, t, n) => t in e ? sn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $ = (e, t, n) => ln(e, typeof t != "symbol" ? t + "" : t, n);
import { jsxs as u, jsx as r, Fragment as ne } from "react/jsx-runtime";
import "@radix-ui/react-toast";
import { Plus as It, Bold as dn, LoaderCircle as hn, Italic as un, Underline as mn, Quote as fn, Strikethrough as gn, Minus as xn, Eraser as _n, PaintRoller as bn, Redo2 as wn, Undo2 as pn, ChevronDown as Bt, Subscript as vn, Superscript as yn, Code as kn, CodeXml as Cn, Type as Nn, IndentIncrease as Tn, IndentDecrease as An, List as Ln, ListOrdered as Sn, ListTodo as Mn, Link as zn, ImageUp as Rn, Video as Hn, Maximize as En, Minimize as In, Table as Bn, Sparkles as On, Pencil as Pn, Unlink as Dn, BetweenHorizonalEnd as $n, BetweenHorizonalStart as jn, BetweenVerticalStart as Fn, BetweenVerticalEnd as Un, TableCellsMerge as Vn, TableCellsSplit as qn, Trash2 as Kn, Trash as Wn, Replace as _t, ChevronsUpDown as Gn, Heading1 as Zn, Heading2 as Jn, Heading3 as Xn, Heading4 as Qn, Heading5 as Yn, Heading6 as ei, Columns2 as bt, Columns3 as ti, Columns4 as ni, GripVertical as ii, Copy as ri, Clipboard as ai, PanelLeft as oi, PanelRight as ci, Frame as si, SmilePlus as li, SmilePlusIcon as di, Sigma as hi, BookMarked as ui, ZoomIn as mi, ZoomOut as fi, Settings as gi, Eye as xi, Paperclip as _i, ChevronUp as bi, CropIcon as wi, ChevronRight as pi, Check as vi, Circle as yi, Clock3 as ki, Laugh as Ci } from "lucide-react";
import * as M from "react";
import at, { useMemo as B, useState as y, useEffect as A, forwardRef as je, useImperativeHandle as Fe, useCallback as P, useRef as re, Fragment as ot } from "react";
import "@radix-ui/react-select";
import "@radix-ui/react-checkbox";
import { u as Ni, E as Ti, B as Ue, i as Ai, a as Li, b as Si, I as Mi, U as zi, S as Ri, F as Hi, H as Ei, T as Ii, c as H, C as Bi, d as Oi, e as Pi, N as Le, O as Di, f as $i, g as ji, h as Fi, L as Ui, m as Se, j as Vi, k as qi, l as Ki, D as Wi, n as De, P as Gi, o as Zi, p as Ji, G as Xi, q as Qi, r as Yi, s as er, t as tr, v as nr, w as ir, x as Ot, y as Pt, z as Dt, R as ct, A as rr, J as ar, K as or, M as cr, Q as sr, V as lr, W as dr } from "./tiptap-D00jl5ze.js";
import { u as E, C as hr, E as ur, B as mr, D as fr, a as gr, b as wt, l as O, c as $t, d as xr, T as He, e as Ee, f as Ie } from "./locales-DVl2wQyb.js";
import { Slot as Ve } from "@radix-ui/react-slot";
import { ah as _r, ai as fe, aj as br, ak as wr, al as pr, d as ae, am as jt, an as vr, ao as yr, ap as Ft, aq as st, P as Me, ar as kr, a as _e, Z as Pe, _ as $e, ae as Cr, as as Nr } from "./vendor-Bx2MEro4.js";
import lt, { sticky as Tr } from "tippy.js";
import dt from "scroll-into-view-if-needed";
import * as oe from "@radix-ui/react-tabs";
import { Packer as Ar } from "docx";
import { defaultNodes as Y, DocxSerializer as Lr, defaultMarks as Sr } from "prosemirror-docx";
import { HexColorPicker as Mr } from "react-colorful";
import * as Te from "@radix-ui/react-popover";
import * as Ut from "@radix-ui/react-separator";
import { TextAlignCenterIcon as zr, TextAlignJustifyIcon as Rr, TextAlignLeftIcon as Hr, TextAlignRightIcon as Er } from "@radix-ui/react-icons";
import * as Vt from "@radix-ui/react-label";
import * as Qe from "@radix-ui/react-switch";
import * as L from "@radix-ui/react-dropdown-menu";
import * as ze from "@radix-ui/react-tooltip";
import { proxy as Ir } from "valtio";
import * as qt from "@radix-ui/react-toggle";
let Ge;
function Ze() {
  return Ge === void 0 && (Ge = navigator.platform.includes("Mac")), Ge;
}
function qe(e) {
  return `${e}`.toLowerCase() === "mod" ? Ze() ? "⌘" : "Ctrl" : `${e}`.toLowerCase() === "alt" ? Ze() ? "⌥" : "Alt" : `${e}`.toLowerCase() === "shift" ? Ze() ? "⇧" : "Shift" : e;
}
function Ke(e) {
  return e.map(qe).join(" ");
}
function T(...e) {
  return _r(fe(e));
}
const _ = at.forwardRef(
  (e, t) => {
    const {
      icon: n = void 0,
      // title = undefined,
      tooltip: i = void 0,
      disabled: a = !1,
      customClass: o = "",
      // color = undefined,
      // loading = false,
      shortcutKeys: c = void 0,
      tooltipOptions: s = {},
      action: d = void 0,
      isActive: l = void 0,
      children: h,
      asChild: m = !1,
      upload: f = !1,
      ...g
    } = e, x = be[n];
    return /* @__PURE__ */ u(pe, { children: [
      /* @__PURE__ */ r(ve, { asChild: !0, children: /* @__PURE__ */ u(
        m ? Ve : we,
        {
          ref: t,
          size: "sm",
          className: T("richtext-w-[32px] richtext-h-[32px]", o),
          disabled: a,
          onClick: d,
          "data-state": l != null && l() ? "on" : "off",
          ...g,
          children: [
            x && /* @__PURE__ */ r(x, { className: "richtext-w-4 richtext-h-4" }),
            h
          ]
        }
      ) }),
      i && /* @__PURE__ */ r(de, { ...s, children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
        /* @__PURE__ */ r("div", { children: i }),
        !!(c != null && c.length) && /* @__PURE__ */ r("span", { children: Ke(c) })
      ] }) })
    ] });
  }
), ht = at.forwardRef(
  ({ asChild: e, ...t }, n) => {
    var o;
    const i = be[t.icon];
    return /* @__PURE__ */ u(pe, { children: [
      /* @__PURE__ */ r(ve, { asChild: !0, children: /* @__PURE__ */ r(
        e ? Ve : D,
        {
          ref: n,
          className: "richtext-h-[32px] richtext-px-[5px] richtext-py-0 richtext-min-w-24  richtext-overflow-hidden",
          variant: "ghost",
          disabled: t == null ? void 0 : t.disabled,
          ...t,
          children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-h-full richtext-font-normal", children: [
            (t == null ? void 0 : t.title) && /* @__PURE__ */ r("div", { className: "richtext-flex-grow richtext-text-sm richtext-text-left richtext-truncate", children: t == null ? void 0 : t.title }),
            i && /* @__PURE__ */ r(i, { className: "richtext-flex-shrink-0 richtext-w-3 richtext-h-3 richtext-ml-1 richtext-text-zinc-500" })
          ] })
        }
      ) }),
      /* @__PURE__ */ r(de, { children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
        (t == null ? void 0 : t.tooltip) && /* @__PURE__ */ r("div", { children: t == null ? void 0 : t.tooltip }),
        /* @__PURE__ */ r("div", { className: "richtext-flex", children: !!((o = t == null ? void 0 : t.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: Ke(t == null ? void 0 : t.shortcutKeys) }) })
      ] }) })
    ] });
  }
);
function Br({
  editor: e,
  disabled: t,
  bubbleMenu: n
}) {
  const i = e.extensionManager.extensions.map(
    (o) => o.name
  ), a = () => {
    var o, c, s, d, l;
    return [
      i.includes("columns") && !((o = n == null ? void 0 : n.columnConfig) != null && o.hidden) ? /* @__PURE__ */ r(Sa, { editor: e }, "columns") : null,
      i.includes("table") && !((c = n == null ? void 0 : n.tableConfig) != null && c.hidden) ? /* @__PURE__ */ r(Aa, { editor: e }, "table") : null,
      i.includes("link") && !((s = n == null ? void 0 : n.linkConfig) != null && s.hidden) ? /* @__PURE__ */ r(wa, { editor: e, disabled: t }, "link") : null,
      // extensionsNames.includes('image') && !bubbleMenu?.imageConfig?.hidden ? <BubbleMenuImage key="image" editor={editor} disabled={disabled} /> : null,
      // extensionsNames.includes(ImageGif.name) && !bubbleMenu?.imageGifConfig?.hidden ? <BubbleMenuImageGif key="imageGif" editor={editor} disabled={disabled} /> : null,
      // extensionsNames.includes('video') && !bubbleMenu?.videoConfig?.hidden ? <BubbleMenuVideo key="video" editor={editor} disabled={disabled} /> : null,
      // extensionsNames.includes('katex') && !bubbleMenu?.katexConfig?.hidden ? <BubbleMenuKatex key="katex" editor={editor} disabled={disabled} /> : null,
      // extensionsNames.includes("excalidraw") &&
      // !bubbleMenu?.excalidrawConfig?.hidden ? (
      // 	<BubbleMenuExcalidraw
      // 		key="excalidraw"
      // 		editor={editor}
      // 		disabled={disabled}
      // 	/>
      // ) : null,
      // extensionsNames.includes('mermaid') && !bubbleMenu?.mermaidConfig?.hidden ? <BubbleMenuMermaid key="mermaid" editor={editor} disabled={disabled} /> : null,
      // extensionsNames.includes("iframe") && !bubbleMenu?.iframeConfig?.hidden ? (
      // 	<BubbleMenuIframe key="iframe" editor={editor} disabled={disabled} />
      // ) : null,
      (d = n == null ? void 0 : n.floatingMenuConfig) != null && d.hidden ? null : /* @__PURE__ */ r(Na, { editor: e, disabled: t }, "content"),
      (l = n == null ? void 0 : n.textConfig) != null && l.hidden ? null : /* @__PURE__ */ r(ya, { editor: e, disabled: t }, "text")
    ];
  };
  return n != null && n.render ? n.render(
    { editor: e, disabled: t || !1, bubbleMenu: n },
    a()
  ) : a().filter(Boolean);
}
function Vc(e) {
  return e = e || /* @__PURE__ */ new Map(), {
    /**
     * A Map of event names to registered handler functions.
     */
    all: e,
    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on(t, n) {
      const i = e.get(t);
      i ? i.push(n) : e.set(t, [n]);
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off(t, n) {
      const i = e.get(t);
      i && (n ? i.splice(i.indexOf(n) >>> 0, 1) : e.set(t, []));
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit(t, n) {
      let i = e.get(t);
      i && [...i].map((a) => {
        a(n);
      }), i = e.get("*"), i && [...i].map((a) => {
        a(t, n);
      });
    }
  };
}
function pt() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31m-.88 3.12L12.5 12.5L5.27 5.27L4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.96-1.5l2.63 2.63l1.27-1.27z" }) });
}
function Kt(e) {
  const { t } = E(), {
    highlight: n = !1,
    disabled: i = !1,
    selectedColor: a,
    setSelectedColor: o,
    onChange: c,
    colors: s = hr
  } = e, d = B(() => {
    const g = s, x = [];
    for (let b = 0; b < g.length; b += 10)
      x.push(g.slice(b, b + 10));
    return x;
  }, [s]), [l, h] = y([]), m = (g) => {
    const x = [...l], b = x.indexOf(g);
    b !== -1 && x.splice(b, 1), x.unshift(g), x.length > 10 && x.pop(), h(x);
  };
  function f(g) {
    if (g === void 0) {
      o == null || o(g), c == null || c(g);
      return;
    }
    /^#([\da-f]{3}){1,2}$/i.test(g) && (o == null || o(g), c == null || c(g), m(g));
  }
  return /* @__PURE__ */ u(G, { modal: !0, children: [
    /* @__PURE__ */ r(Z, { className: "!richtext-p-0", disabled: i, asChild: !0, children: e == null ? void 0 : e.children }),
    /* @__PURE__ */ r(V, { hideWhenDetached: !0, className: "richtext-w-full richtext-h-full richtext-p-2", align: "start", side: "bottom", children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-flex-col", children: [
      n ? /* @__PURE__ */ u(
        "div",
        {
          className: "richtext-flex richtext-items-center richtext-p-1 richtext-cursor-pointer rd-1 richtext-gap-[4px] hover:richtext-bg-accent",
          onClick: () => f(void 0),
          children: [
            /* @__PURE__ */ r(pt, {}),
            /* @__PURE__ */ r("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.nofill") })
          ]
        }
      ) : /* @__PURE__ */ u(
        "div",
        {
          className: "richtext-flex richtext-items-center richtext-p-1 richtext-cursor-pointer rd-1 richtext-gap-[4px] hover:richtext-bg-accent",
          onClick: () => {
            f(void 0);
          },
          children: [
            /* @__PURE__ */ r(pt, {}),
            /* @__PURE__ */ r("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.default") })
          ]
        }
      ),
      d.map((g, x) => /* @__PURE__ */ r("span", { className: "richtext-relative richtext-flex richtext-w-full richtext-h-auto richtext-p-0 last:richtext-pb-2", children: g.map((b, S) => /* @__PURE__ */ r(
        "span",
        {
          className: "richtext-w-6 richtext-h-6 richtext-p-0.5 richtext-inline-block richtext-rounded-sm !richtext-border richtext-border-transparent richtext-flex-[0_0_auto] richtext-cursor-pointer hover:richtext-border-border hover:richtext-shadow-sm",
          onClick: () => f(b),
          children: /* @__PURE__ */ r(
            "span",
            {
              style: {
                backgroundColor: b
              },
              className: "richtext-relative richtext-w-[18px] richtext-h-[18px] richtext-block richtext-rounded-[2px] richtext-border-transparent",
              children: b === a ? /* @__PURE__ */ r(
                "svg",
                {
                  className: "richtext-absolute richtext-block richtext-top-[-1px] richtext-left-[1px] richtext-w-3 richtext-h-3",
                  viewBox: "0 0 18 18",
                  style: {
                    fill: "rgb(255, 255, 255)"
                  },
                  children: /* @__PURE__ */ r("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                }
              ) : /* @__PURE__ */ r(
                "svg",
                {
                  viewBox: "0 0 18 18",
                  style: {
                    fill: "rgb(255, 255, 255)",
                    display: "none"
                  },
                  children: /* @__PURE__ */ r("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                }
              )
            }
          )
        },
        `sub-color-${S}`
      )) }, x)),
      /* @__PURE__ */ u("div", { children: [
        /* @__PURE__ */ r("div", { className: "richtext-my-1 richtext-text-sm", children: t("editor.recent") }),
        /* @__PURE__ */ r("span", { className: "richtext-relative richtext-flex richtext-w-full richtext-h-auto richtext-p-0 last:richtext-pb-2", children: l == null ? void 0 : l.map((g, x) => /* @__PURE__ */ r(
          "span",
          {
            className: "richtext-w-6 richtext-h-6 richtext-p-0.5 richtext-inline-block richtext-rounded-sm !richtext-border richtext-border-transparent richtext-flex-[0_0_auto] richtext-cursor-pointer hover:richtext-border-border hover:richtext-shadow-sm",
            onClick: () => f(g),
            children: /* @__PURE__ */ r(
              "span",
              {
                className: "richtext-relative richtext-w-[18px] richtext-h-[18px] richtext-block richtext-rounded-[2px] richtext-border-transparent",
                style: {
                  backgroundColor: g
                },
                children: /* @__PURE__ */ r(
                  "svg",
                  {
                    viewBox: "0 0 18 18",
                    style: {
                      fill: "rgb(255, 255, 255)",
                      display: "none"
                    },
                    children: /* @__PURE__ */ r("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
                  }
                )
              }
            )
          },
          `sub-color-recent-${x}`
        )) })
      ] }),
      /* @__PURE__ */ r(Or, { setColor: f })
    ] }) })
  ] });
}
function Or({ setColor: e }) {
  const [t, n] = y("#000000"), [i, a] = y(!1), { t: o } = E();
  return A(() => () => {
    a(!1);
  }, []), /* @__PURE__ */ u(G, { open: i, children: [
    /* @__PURE__ */ r(Z, { asChild: !0, children: /* @__PURE__ */ u(
      "div",
      {
        onClick: (c) => {
          c.preventDefault(), a(!0);
        },
        className: "richtext-text-sm hover:richtext-cursor-pointer hover:richtext-bg-accent richtext-py-1.5 richtext-px-1.5",
        children: [
          o("editor.color.more"),
          "..."
        ]
      }
    ) }),
    /* @__PURE__ */ u(V, { children: [
      /* @__PURE__ */ u("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-justify-center", children: [
        /* @__PURE__ */ r(Mr, { color: t, onChange: n }),
        /* @__PURE__ */ r(
          ge,
          {
            className: "richtext-mt-[8px] richtext-w-full",
            type: "text",
            onChange: (c) => {
              c.preventDefault(), n(`#${c.target.value}`);
            },
            value: t.slice(1)
          }
        )
      ] }),
      /* @__PURE__ */ r(U, { className: "richtext-my-[10px]" }),
      /* @__PURE__ */ r(
        D,
        {
          onClick: (c) => {
            c.preventDefault(), e(t), a(!1);
          },
          className: "richtext-w-full",
          children: /* @__PURE__ */ r(It, { size: 16 })
        }
      )
    ] })
  ] });
}
const Pr = `
.reactjs-tiptap-editor, .richtext-dialog-content {
  button,
  input:where([type=button]),
  input:where([type=reset]),
  input:where([type=submit]) {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none
  }

  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
  }

  button {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
  }
}

.reactjs-tiptap-editor,
.richtext-dialog-content,
div[data-radix-popper-content-wrapper],
div[data-tippy-root] {
*,
:before,
:after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: hsl(var(--richtext-border));
}

background-color: hsl(var(--richtext-background));
color: hsl(var(--richtext-foreground));


html,
:host {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px
}

a {
  color: inherit;
  text-decoration: inherit
}

b,
strong {
  font-weight: bolder
}

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse
}

input, textarea {
  border-width: 1px;
}

textarea {
  resize: vertical
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af
}

button, input, textarea {
  cursor: pointer;
  color: inherit;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle
}

img,
video {
  max-width: 100%;
  height: auto
}
}
`, Dr = Ir({
  theme: "light"
}), $r = {
  setTheme: (e) => {
    Dr.theme = e;
  }
}, vt = "data-rc-order", yt = "data-rc-priority", jr = "rc-util-key", Ye = /* @__PURE__ */ new Map();
function Fr(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  let n = t;
  for (; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
function Wt({ mark: e } = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : jr;
}
function ut(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Ur(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Gt(e) {
  return [...(Ye.get(e) || e).children].filter(
    (t) => t.tagName === "STYLE"
  );
}
function Zt(e, t = {}) {
  const { csp: n, prepend: i, priority: a = 0 } = t, o = Ur(i), c = o === "prependQueue", s = document.createElement("style");
  s.setAttribute(vt, o), c && a && s.setAttribute(yt, `${a}`), n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce), s.innerHTML = e;
  const d = ut(t), { firstChild: l } = d;
  if (i) {
    if (c) {
      const h = Gt(d).filter((m) => {
        if (!["prepend", "prependQueue"].includes(m.getAttribute(vt)))
          return !1;
        const f = Number(m.getAttribute(yt) || 0);
        return a >= f;
      });
      if (h.length > 0)
        return d.insertBefore(s, h.at(-1).nextSibling), s;
    }
    l.before(s);
  } else
    d.append(s);
  return s;
}
function Jt(e, t = {}) {
  const n = ut(t);
  return Gt(n).find((i) => i.getAttribute(Wt(t)) === e);
}
function Vr(e, t = {}) {
  const n = Jt(e, t);
  n && n.remove();
}
function qr(e, t) {
  const n = Ye.get(e);
  if (!n || !Fr(document, n)) {
    const i = Zt("", t), { parentNode: a } = i;
    Ye.set(e, a), i.remove();
  }
}
function Kr(e, t, n = {}) {
  var c, s, d;
  const i = ut(n);
  qr(i, n);
  const a = Jt(t, n);
  if (a)
    return (c = n.csp) != null && c.nonce && a.nonce !== ((s = n.csp) == null ? void 0 : s.nonce) && (a.nonce = (d = n.csp) == null ? void 0 : d.nonce), a.innerHTML !== e && (a.innerHTML = e), a;
  const o = Zt(e, n);
  return o.setAttribute(Wt(n), t), o;
}
const Wr = (e) => typeof e == "string", Gr = (e) => typeof e == "function";
function Xt(e, t) {
  if (!e)
    return !1;
  const { extensions: n = [] } = (e == null ? void 0 : e.extensionManager) ?? {};
  return !!n.find((a) => a.name === t);
}
function et(e) {
  return e.map((t) => Wr(t) ? { value: t, name: t } : t);
}
function Zr(e, t) {
  const { content: n, extensions: i, useEditorOptions: a = {} } = e, o = B(() => {
    const l = br(i, i, "name");
    return [...i.map((m) => {
      const f = i.find((g) => g.name === m.name);
      return f ? m.configure(f.options) : m;
    }), ...l].map((m, f) => m.configure({ sort: f }));
  }, [i]), c = wr((l) => {
    var m;
    const h = d(l, e.output);
    (m = e == null ? void 0 : e.onChangeContent) == null || m.call(e, h);
  }, ur), s = Ni({
    extensions: o,
    content: n,
    onUpdate: ({ editor: l }) => {
      c && c(l);
    },
    ...a
  });
  Fe(t, () => ({
    editor: s
  })), A(() => {
    document.documentElement.classList.toggle("dark", e.dark), $r.setTheme(e.dark ? "dark" : "light");
  }, [e.dark]), A(() => {
    s == null || s.setEditable(!(e != null && e.disabled));
  }, [s, e == null ? void 0 : e.disabled]), A(() => ((e == null ? void 0 : e.resetCSS) !== !1 && Kr(Pr, "react-tiptap-reset"), () => {
    Vr("react-tiptap-reset");
  }), [e == null ? void 0 : e.resetCSS]);
  function d(l, h) {
    return e != null && e.removeDefaultWrapper ? h === "html" ? l.isEmpty ? "" : l.getHTML() : h === "json" ? l.isEmpty ? {} : l.getJSON() : h === "text" ? l.isEmpty ? "" : l.getText() : "" : h === "html" ? l.getHTML() : h === "json" ? l.getJSON() : h === "text" ? l.getText() : "";
  }
  return A(() => () => {
    var l;
    (l = s == null ? void 0 : s.destroy) == null || l.call(s);
  }, []), Xt(s, "characterCount"), s ? /* @__PURE__ */ r("div", { className: "reactjs-tiptap-editor richtext-flex !richtext-bg-transparent richtext-w-full", children: /* @__PURE__ */ r(Ba, { delayDuration: 0, disableHoverableContent: !0, children: /* @__PURE__ */ r("div", { className: "rounded-lg richtext-bg-background richtext-shadow-lg richtext-overflow-hidden richtext-w-full", children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-flex-col richtext-w-full richtext-max-h-full", children: [
    !(e != null && e.hideToolbar) && /* @__PURE__ */ r(Jr, { editor: s, disabled: !!(e != null && e.disabled) }),
    /* @__PURE__ */ r(
      Ti,
      {
        className: `richtext-relative ${(e == null ? void 0 : e.contentClass) || ""}`,
        editor: s
      }
    ),
    !(e != null && e.hideBubble) && /* @__PURE__ */ r(
      Br,
      {
        bubbleMenu: e == null ? void 0 : e.bubbleMenu,
        editor: s,
        disabled: e == null ? void 0 : e.disabled
      }
    )
  ] }) }) }) }) : /* @__PURE__ */ r(ne, {});
}
const qc = je(Zr);
function Jr({ editor: e, disabled: t }) {
  const { t: n, lang: i } = E(), a = B(() => {
    const c = [...e.extensionManager.extensions].sort((d, l) => {
      const h = d.options.sort ?? -1, m = l.options.sort ?? -1;
      return h - m;
    });
    let s = [];
    for (const d of c) {
      const { button: l, divider: h = !1, spacer: m = !1, toolbar: f = !0 } = d.options;
      if (!l || !Gr(l) || !f)
        continue;
      const g = l({
        editor: e,
        extension: d,
        t: n
      });
      if (Array.isArray(g)) {
        const x = g.map((b, S) => ({
          button: b,
          divider: S === g.length - 1 ? h : !1,
          spacer: S === 0 ? m : !1
        }));
        s = [...s, ...x];
        continue;
      }
      s.push({ button: g, divider: h, spacer: m });
    }
    return s;
  }, [e, n, i]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: "richtext-px-1 richtext-py-2 !richtext-border-b",
      style: {
        pointerEvents: t ? "none" : "auto",
        opacity: t ? 0.5 : 1
      },
      children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-flex richtext-flex-wrap richtext-h-auto richtext-gap-y-1 richtext-gap-x-1", children: a.map((o, c) => {
        var d, l;
        const s = o.button.component;
        return /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center", children: [
          (o == null ? void 0 : o.spacer) && /* @__PURE__ */ r(U, { orientation: "vertical", className: "!richtext-h-[16px] !richtext-mx-[10px]" }),
          /* @__PURE__ */ r(
            s,
            {
              ...o.button.componentProps,
              disabled: t || ((l = (d = o == null ? void 0 : o.button) == null ? void 0 : d.componentProps) == null ? void 0 : l.disabled)
            }
          ),
          (o == null ? void 0 : o.divider) && /* @__PURE__ */ r(U, { orientation: "vertical", className: "!richtext-h-auto !richtext-mx-2" })
        ] }, `toolbar-item-${c}`);
      }) })
    }
  );
}
function Xr(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"
    }
  ) });
}
function Qr(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6 15h15m0 4H6m9-8h6m0-4h-6M9 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2M3 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2"
    }
  ) });
}
function Yr() {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      className: "richtext-w-4 richtext-h-4",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ r(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M5.5 3c1.404 0 2.107 0 2.611.38c.219.164.406.375.552.62C9 4.568 9 5.358 9 6.938v10.125c0 1.58 0 2.37-.337 2.937a2.1 2.1 0 0 1-.552.621c-.504.38-1.207.38-2.611.38s-2.107 0-2.611-.38a2.1 2.1 0 0 1-.552-.62C2 19.432 2 18.642 2 17.062V6.938c0-1.58 0-2.37.337-2.938a2.1 2.1 0 0 1 .552-.62C3.393 3 4.096 3 5.5 3M20 11.938v5.124c0 1.58 0 2.37-.337 2.938a2.1 2.1 0 0 1-.552.62c-.504.38-1.207.38-2.611.38s-2.107 0-2.611-.38a2.1 2.1 0 0 1-.552-.62C13 19.433 13 18.642 13 17.063V6.938c0-1.58 0-2.37.337-2.938M22 9l-6-6m6 0l-6 6",
          color: "currentColor"
        }
      )
    }
  );
}
function ea() {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      className: "richtext-w-4 richtext-h-4",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ r(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M21 18.5c0 1.404 0 2.107-.38 2.611a2.1 2.1 0 0 1-.62.552c-.567.337-1.358.337-2.937.337H6.938c-1.58 0-2.37 0-2.938-.337a2.1 2.1 0 0 1-.62-.552C3 20.607 3 19.904 3 18.5s0-2.107.38-2.611c.163-.218.374-.406.62-.552C4.567 15 5.357 15 6.938 15h10.125c1.58 0 2.37 0 2.937.337c.246.146.457.334.62.552c.38.504.38 1.207.38 2.611M12.063 4H6.937C5.358 4 4.568 4 4 4.337a2.1 2.1 0 0 0-.62.552C3 5.393 3 6.096 3 7.5s0 2.107.38 2.611c.163.218.374.406.62.552C4.567 11 5.357 11 6.938 11h10.125c1.58 0 2.37 0 2.937-.337M21 8l-6-6m6 0l-6 6",
          color: "currentColor"
        }
      )
    }
  );
}
function ta(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
    }
  ) });
}
function N(e) {
  const t = be[e.name];
  return t ? /* @__PURE__ */ r(t, { onClick: e == null ? void 0 : e.onClick, className: `richtext-w-4 richtext-h-4 ${(e == null ? void 0 : e.className) || ""}` }) : null;
}
function na(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"
    }
  ) });
}
function Qt(e) {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      ...e,
      children: /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M36 19L24 31L12 19z"
        }
      )
    }
  );
}
function ia(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M9 7v10h6v-2h-4V7z" }) });
}
function ra(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
    }
  ) });
}
function aa(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
    }
  ) });
}
function oa() {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
        }
      )
    }
  );
}
function ca() {
  return /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z" }),
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z" })
  ] });
}
function sa() {
  return /* @__PURE__ */ u(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      className: "icon",
      viewBox: "0 0 1024 1024",
      children: [
        /* @__PURE__ */ r(
          "path",
          {
            fill: "currentColor",
            d: "M679.253 402.364 618.77 561.015l-60.348-158.651a30.04 30.04 0 0 0-30.447-18.637 29.76 29.76 0 0 0-30.447 18.637l-60.416 158.651-60.416-158.651a30.515 30.515 0 0 0-38.843-17.272 28.945 28.945 0 0 0-17.954 37.547l88.815 233.267c4.369 11.469 15.7 19.115 28.398 19.115a30.31 30.31 0 0 0 28.468-19.115l62.395-163.908 62.396 163.84c4.437 11.605 15.701 19.183 28.4 19.183a30.31 30.31 0 0 0 28.466-19.115l88.747-233.267a28.945 28.945 0 0 0-17.886-37.547 30.447 30.447 0 0 0-38.912 17.272zm219.478 395.605-51.883-29.218c-28.672-16.18-52.224-3.072-52.224 29.082v.273H643.209a29.833 29.833 0 0 0-30.31 29.354c0 16.18 13.584 29.218 30.31 29.218h151.825c1.092 30.516 24.03 43.077 52.224 27.648l51.063-27.989c29.013-15.906 29.15-42.189.41-58.368"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            fill: "currentColor",
            d: "m810.667 913.135-.478.068H201.796c-19.865 0-36.727-11.673-36.727-25.6v-618.36h154.965c51.268 0 92.911-39.39 92.911-87.858v-87.86H810.19c19.797 0 36.522 11.742 36.522 25.669V739.26h61.987V119.262c0-46.421-44.169-84.241-98.51-84.241H328.364l-225.28 194.56v658.09c0 46.285 44.236 84.105 98.713 84.105H810.19c43.759 0 80.554-24.713 93.32-58.573h-92.842zM350.89 94.89v86.562c0 16.11-13.858 29.286-30.925 29.286H216.815L350.959 94.891z"
          }
        )
      ]
    }
  );
}
function la() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m-9 8h4m-2-2v4" }) });
}
function da() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 8h4m-2-2v4" }) });
}
function ha() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M23.943 19.806a.2.2 0 0 0-.168-.034c-1.26-1.855-2.873-3.61-4.419-5.315l-.252-.284c-.001-.073-.067-.12-.134-.15l-.084-.084c-.05-.1-.169-.167-.286-.1c-.47.234-.907.585-1.327.919c-.554.434-1.109.87-1.63 1.354a5 5 0 0 0-.588.618c-.084.117-.017.217.084.267c-.37.368-.74.736-1.109 1.12a.2.2 0 0 0-.05.134c0 .05.033.1.067.117l.655.502v.016c.924.92 2.554 2.173 4.285 3.527c.251.201.52.402.773.602c.117.134.234.285.335.418c.05.066.169.084.236.033c.033.034.084.067.118.1a.24.24 0 0 0 .1.034a.15.15 0 0 0 .135-.066a.24.24 0 0 0 .033-.1c.017 0 .017.016.034.016a.2.2 0 0 0 .134-.05l3.058-3.327c.12-.116.014-.267 0-.267m-7.628-.134l-1.546-1.17l-.15-.1c-.035-.017-.068-.05-.102-.067l-.117-.1c.66-.66 1.33-1.308 2-1.956c-.488.484-1.463 1.906-1.261 2.373c.002 0 .018.042.067.084zm4.1 3.126l-1.277-.97a27 27 0 0 0-1.58-1.504c.69.518 1.277.97 1.361 1.053c.673.585.638.485 1.093.87l.554.4c-.074.103-.151.148-.151.151m.336.25l-.034-.016a1 1 0 0 0 .152-.117zM.588 3.476c.033.217.084.435.117.636c.201 1.103.403 2.106.772 2.858l.152.568c.05.217.134.485.219.552a67 67 0 0 0 3.578 2.942a.18.18 0 0 0 .219 0s0 .016.016.016a.15.15 0 0 0 .118.05a.2.2 0 0 0 .134-.05c1.798-1.989 3.142-3.627 4.1-4.998c.068-.066.084-.167.084-.25c.067-.067.118-.151.185-.201c.067-.067.067-.184 0-.235l-.017-.016c0-.033-.017-.084-.05-.1c-.42-.401-.722-.685-1.042-.986a94 94 0 0 1-2.352-2.273c-.017-.017-.034-.034-.067-.034c-.336-.117-1.025-.234-1.882-.385c-1.277-.216-3.008-.517-4.57-.986c0 0-.101 0-.118.017l-.05.05C.05.714.022.707 0 .718c.017.1.017.167.05.284c0 .033.068.301.068.334zm7.19 4.78l-.033.034a.036.036 0 0 1 .033-.034M6.553 2.238c.101.1.521.502.622.585c-.437-.2-1.529-.702-2.034-.869c.505.1 1.194.201 1.412.284M.79 1.403c.252.434.454 1.939.655 3.41c-.118-.469-.201-.936-.302-1.372C.992 2.673.84 1.988.638 1.386c.124 0 .152.021.152.017m-.286-.369c0-.016 0-.033-.017-.033c.085 0 .135.017.202.05c0 .006-.145-.017-.185-.017m23.17-.217c.017-.066-.336-.367-.219-.384c.253-.017.253-.401 0-.401c-.335.017-.688.1-1.008.15c-.587.117-1.192.234-1.78.367a80 80 0 0 0-3.949.937c-.403.117-.857.2-1.243.401c-.135.067-.118.2-.05.284c-.034.017-.051.017-.085.034c-.117.017-.218.034-.335.05c-.102.017-.152.1-.135.2c0 .017.017.05.017.067c-.706.936-1.496 1.923-2.353 2.976c-.84.969-1.73 1.989-2.62 3.042c-2.84 3.31-6.05 7.07-9.594 10.38a.16.16 0 0 0 0 .234c.016.016.033.033.05.033c-.05.05-.101.085-.152.134q-.05.05-.05.1a.4.4 0 0 0-.067.084c-.067.067-.067.184.017.234c.067.066.185.066.235-.017c.017-.017.017-.033.033-.033a.265.265 0 0 1 .37 0c.202.217.404.435.588.618l-.42-.35c-.067-.067-.184-.05-.234.016c-.068.066-.051.184.016.234l4.469 3.727c.034.034.067.034.118.034a.15.15 0 0 0 .117-.05l.101-.1c.017.016.05.016.067.016c.05 0 .084-.016.118-.05c6.049-6.05 10.922-10.614 16.5-14.693c.05-.033.067-.1.067-.15c.067 0 .118-.05.15-.117c1.026-3.125 1.228-5.9 1.295-7.27c0-.059.016-.038.016-.068c.017-.033.017-.05.017-.05a.98.98 0 0 0-.067-.619m-10.82 4.915c.268-.301.537-.619.806-.903c-1.73 2.273-4.603 5.767-8.67 9.929c2.773-3.059 5.562-6.218 7.864-9.026M5.14 23.466c-.016-.017-.016-.017 0-.017zm2.504-2.156c.135-.15.27-.284.42-.434c0 0 0 .016.017.016c-.224.198-.433.418-.437.418m.69-.668c.099-.1.14-.173.284-.318c.992-1.02 2.017-2.04 3.059-3.076l.016-.016c.252-.2.555-.418.824-.619a228 228 0 0 0-4.184 4.029M14.852 3.91c-.554.719-1.176 1.671-1.697 2.423c-1.646 2.374-6.94 8.174-7.057 8.274a1190 1190 0 0 1-4.839 4.597l-.1.1c-.085-.1-.085-.25.016-.334C8.652 11.966 13.19 6.133 15.021 3.576c-.05.116-.084.216-.168.334zm2.906 3.427c-.671-.386-.99-.987-.806-1.572l.05-.2a.8.8 0 0 1 .085-.167a1.9 1.9 0 0 1 .756-.703c.016 0 .033 0 .05-.016c-.017-.034-.017-.084-.017-.134c.017-.1.085-.167.202-.167c.202 0 .824.184 1.059.384c.067.05.134.117.202.184c.084.1.218.268.285.401c.034.017.067.184.118.268c.033.134.067.284.05.418c-.017.016 0 .116-.017.116a1.6 1.6 0 0 1-.218.619c-.03.03.006.012-.05.067a1.2 1.2 0 0 1-.32.334a1.49 1.49 0 0 1-1.26.234a2 2 0 0 0-.169-.066m4.37 1.403c0 .017-.017.05 0 .067c-.034 0-.05.017-.085.034a110 110 0 0 0-3.915 3.025c1.11-.986 2.218-1.989 3.378-2.975c.336-.301.571-.686.638-1.12l.168-1.003v-.033c.085-.201.404-.118.353.1c-.004-.001-.173.795-.537 1.905" }) });
}
function ua() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 21v-4m0-4V9m0-4V3m-2 18h4M8 5v4h11l2-2l-2-2zm6 8v4H6l-2-2l2-2z" }) });
}
function ma() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M6.5 3a.75.75 0 0 1 .697.471l3 7.5a.75.75 0 0 1-1.393.557L7.992 9.5H5.008l-.811 2.028a.75.75 0 0 1-1.393-.556l3-7.5A.75.75 0 0 1 6.5 3m0 2.77L5.608 8h1.784zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z" }) });
}
function fa() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M13.5 3a.75.75 0 0 0-.697.471l-3 7.5a.75.75 0 0 0 1.393.557l.812-2.028h2.984l.811 2.028a.75.75 0 0 0 1.393-.556l-3-7.5A.75.75 0 0 0 13.5 3m0 2.77L14.392 8h-1.784zM5.22 4.22a.75.75 0 0 1 1.06 1.06L5.56 6h3.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h10.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" }) });
}
function ga() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ u("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", color: "currentColor", children: [
    /* @__PURE__ */ r("path", { d: "M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.2 4.2 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628c.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252c1.166.406 2.085 1.263 2.52 2.35c.27.676.27 1.523.27 3.216V10" }),
    /* @__PURE__ */ r("path", { d: "M2.75 12c0-1.84 1.506-3.333 3.364-3.333c.672 0 1.464.116 2.117-.057a1.67 1.67 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2m.002 16h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523" })
  ] }) });
}
function xa() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 48 48", children: /* @__PURE__ */ u("g", { fill: "none", stroke: "currentColor", strokeWidth: "4", children: [
    /* @__PURE__ */ r("circle", { cx: "10", cy: "24", r: "4" }),
    /* @__PURE__ */ r("circle", { cx: "38", cy: "10", r: "4" }),
    /* @__PURE__ */ r("circle", { cx: "38", cy: "24", r: "4" }),
    /* @__PURE__ */ r("circle", { cx: "38", cy: "38", r: "4" }),
    /* @__PURE__ */ r("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M34 38H22V10h12M14 24h20" })
  ] }) });
}
const be = {
  Bold: dn,
  LoaderCircle: hn,
  Italic: un,
  Underline: mn,
  Quote: fn,
  TextQuote: Qr,
  Strikethrough: gn,
  Minus: xn,
  Eraser: _n,
  PaintRoller: bn,
  Redo2: wn,
  Undo2: pn,
  AlignCenter: zr,
  AlignJustify: Rr,
  AlignLeft: Hr,
  AlignRight: Er,
  ChevronDown: Bt,
  Subscript: vn,
  Superscript: yn,
  Code: kn,
  Code2: Cn,
  Type: Nn,
  IndentIncrease: Tn,
  IndentDecrease: An,
  List: Ln,
  ListOrdered: Sn,
  ListTodo: Mn,
  Link: zn,
  ImageUp: Rn,
  Video: Hn,
  Maximize: En,
  Minimize: In,
  Table: Bn,
  Sparkles: On,
  Pencil: Pn,
  Unlink: Dn,
  BetweenHorizonalEnd: $n,
  BetweenHorizonalStart: jn,
  BetweenVerticalStart: Fn,
  BetweenVerticalEnd: Un,
  TableCellsMerge: Vn,
  TableCellsSplit: qn,
  Trash2: Kn,
  Trash: Wn,
  Replace: _t,
  ChevronsUpDown: Gn,
  LineHeight: na,
  Word: ta,
  Heading1: Zn,
  Heading2: Jn,
  Heading3: Xn,
  Heading4: Qn,
  Heading5: Yn,
  Heading6: ei,
  Columns2: bt,
  Columns3: ti,
  Columns4: ni,
  Plus: It,
  Grip: ii,
  Copy: ri,
  Clipboard: ai,
  PanelLeft: oi,
  PanelRight: ci,
  Columns: bt,
  Iframe: si,
  MenuDown: Qt,
  SizeS: aa,
  SizeM: ra,
  SizeL: ia,
  AspectRatio: Xr,
  Emoji: li,
  DeleteColumn: Yr,
  DeleteRow: ea,
  SearchAndReplace: _t,
  EmojiIcon: di,
  KatexIcon: hi,
  ExportPdf: ca,
  ExportWord: sa,
  ImportWord: oa,
  ColumnAddLeft: la,
  ColumnAddRight: da,
  BookMarked: ui,
  Excalidraw: ha,
  ZoomIn: mi,
  ZoomOut: fi,
  Settings: gi,
  Eye: xi,
  TextDirection: ua,
  LeftToRight: ma,
  RightToLeft: fa,
  Attachment: _i,
  GifIcon: ga,
  ChevronUp: bi,
  Crop: wi,
  Mermaid: xa
};
function _a(e, t) {
  return mr.reduce((n, i) => {
    if (i === "divider" && n.length > 0)
      return [
        ...n,
        {
          type: "divider",
          component: void 0,
          componentProps: {}
        }
      ];
    const a = e.extensionManager.extensions.find(
      (o) => o.name === i
    );
    return a ? [
      ...n,
      a.configure().options.button({ editor: e, t, extension: a })
    ] : n;
  }, []);
}
function Yt(e) {
  const { t } = E(), [n, i] = y({
    text: "",
    link: ""
  }), [a, o] = y(!1);
  A(() => {
    var s;
    if (e != null && e.editor) {
      const { href: d, target: l } = (s = e.editor) == null ? void 0 : s.getAttributes("link"), { from: h, to: m } = e.editor.state.selection, f = e.editor.state.doc.textBetween(h, m, " ");
      i({
        link: d,
        text: f
      }), o(l === "_blank");
    }
  }, [e == null ? void 0 : e.editor]);
  function c(s) {
    s.preventDefault(), e == null || e.onSetLink(n.link, n.text, a);
  }
  return /* @__PURE__ */ r("div", { className: "richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black border-neutral-200 dark:richtext-border-neutral-800", children: /* @__PURE__ */ u("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: c, children: [
    /* @__PURE__ */ r(ie, { className: "mb-[6px]", children: t("editor.link.dialog.text") }),
    /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5 richtext-mb-[10px]", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
      ge,
      {
        type: "text",
        value: n.text,
        required: !0,
        className: "richtext-w-80",
        placeholder: "Text",
        onChange: (s) => i({ ...n, text: s.target.value })
      }
    ) }) }),
    /* @__PURE__ */ r(ie, { className: "mb-[6px]", children: t("editor.link.dialog.link") }),
    /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ u("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: [
      /* @__PURE__ */ r(
        ge,
        {
          type: "url",
          value: n.link,
          required: !0,
          className: "richtext-pl-10",
          onChange: (s) => i({ ...n, link: s.target.value })
        }
      ),
      /* @__PURE__ */ r("span", { className: "richtext-absolute richtext-inset-y-0 richtext-flex richtext-items-center richtext-justify-center richtext-px-2 richtext-start-0", children: /* @__PURE__ */ r(N, { className: "richtext-size-5 richtext-text-muted-foreground", name: "Link" }) })
    ] }) }),
    /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-space-x-2", children: [
      /* @__PURE__ */ r(ie, { children: t("editor.link.dialog.openInNewTab") }),
      /* @__PURE__ */ r(
        mt,
        {
          checked: a,
          onCheckedChange: (s) => {
            o(s);
          }
        }
      )
    ] }),
    /* @__PURE__ */ r(D, { type: "submit", className: "richtext-self-end richtext-mt-2", children: t("editor.link.dialog.button.apply") })
  ] }) });
}
function ba(e) {
  const { t } = E();
  return /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: [
    /* @__PURE__ */ r(
      "a",
      {
        href: e == null ? void 0 : e.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "richtext-text-sm richtext-underline richtext-break-all",
        children: pr(e == null ? void 0 : e.link, {
          length: 50,
          omission: "…"
        })
      }
    ),
    (e == null ? void 0 : e.link) && /* @__PURE__ */ r(U, { orientation: "vertical", className: "!richtext-h-4" }),
    /* @__PURE__ */ u("div", { className: "richtext-flex richtext-flex-nowrap", children: [
      /* @__PURE__ */ r(
        _,
        {
          icon: "Pencil",
          tooltip: t("editor.link.edit.tooltip"),
          action: () => {
            e == null || e.onEdit();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      ),
      /* @__PURE__ */ r(
        _,
        {
          icon: "Unlink",
          tooltip: t("editor.link.unlink.tooltip"),
          action: () => {
            e == null || e.onClear();
          },
          tooltipOptions: { sideOffset: 15 }
        }
      )
    ] })
  ] });
}
function wa({ editor: e, disabled: t }) {
  const [n, i] = y(!1), a = B(() => {
    const { href: d } = e.getAttributes("link");
    return d;
  }, [e]), o = P(({ editor: d }) => d.isActive("link"), []), c = (d, l, h) => {
    e.chain().extendMarkRange("link").insertContent({
      type: "text",
      text: l,
      marks: [
        {
          type: "link",
          attrs: {
            href: d,
            target: h ? "_blank" : ""
          }
        }
      ]
    }).setLink({ href: d }).focus().run(), i(!1);
  }, s = P(() => {
    e.chain().extendMarkRange("link").unsetLink().focus().run(), i(!1);
  }, [e]);
  return /* @__PURE__ */ r(ne, { children: /* @__PURE__ */ r(
    Ue,
    {
      editor: e,
      shouldShow: o,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999,
        onHidden: () => {
          i(!1);
        }
      },
      children: t ? /* @__PURE__ */ r(ne, {}) : /* @__PURE__ */ r(ne, { children: n ? /* @__PURE__ */ r(Yt, { onSetLink: c, editor: e }) : /* @__PURE__ */ r(
        ba,
        {
          editor: e,
          onClear: s,
          onEdit: () => {
            i(!0);
          },
          link: a
        }
      ) })
    }
  ) });
}
const pa = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function va({ item: e, disabled: t, editor: n }) {
  var a;
  const i = e.component;
  return i ? /* @__PURE__ */ r(
    i,
    {
      ...e.componentProps,
      editor: n,
      disabled: t || ((a = e == null ? void 0 : e.componentProps) == null ? void 0 : a.disabled)
    }
  ) : /* @__PURE__ */ r(ne, {});
}
function ya(e) {
  const { t, lang: n } = E(), i = ({ editor: o }) => {
    const { selection: c } = o.view.state, { $from: s, to: d } = c;
    return s.pos === d ? !1 : c instanceof ae;
  }, a = B(() => e.disabled || !(e != null && e.editor) ? [] : _a(e.editor, t), [e.disabled, e.editor, n, t]);
  return /* @__PURE__ */ r(Ue, { shouldShow: i, editor: e == null ? void 0 : e.editor, tippyOptions: pa, children: a != null && a.length ? /* @__PURE__ */ r("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-gap-[4px] richtext-flex-nowrap richtext-whitespace-nowrap richtext-h-[26px] richtext-justify-start richtext-relative", children: a == null ? void 0 : a.map((o, c) => (o == null ? void 0 : o.type) === "divider" ? /* @__PURE__ */ r(
    U,
    {
      orientation: "vertical",
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]"
    },
    `bubbleMenu-divider-${c}`
  ) : /* @__PURE__ */ r(
    va,
    {
      item: o,
      disabled: e.disabled,
      editor: e.editor
    },
    `bubbleMenu-text-${c}`
  )) }) }) : /* @__PURE__ */ r(ne, {}) });
}
var te = /* @__PURE__ */ ((e) => (e[e.max = 7] = "max", e[e.min = 0] = "min", e[e.more = 1] = "more", e[e.less = -1] = "less", e))(te || {});
function ka(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function Ca(e, t, n, i) {
  const { doc: a, selection: o } = e;
  if (!a || !o || !(o instanceof ae || o instanceof jt))
    return e;
  const { from: c, to: s } = o;
  return a.nodesBetween(c, s, (d, l) => {
    const h = d.type;
    return n.includes(h.name) ? (e = tt(e, l, t), !1) : !Ai(d.type.name, i.extensionManager.extensions);
  }), e;
}
function tt(e, t, n) {
  if (!e.doc)
    return e;
  const i = e.doc.nodeAt(t);
  if (!i)
    return e;
  const c = ka((i.attrs.indent || 0) + n, 0, 7);
  if (c === i.attrs.indent)
    return e;
  const s = {
    ...i.attrs,
    indent: c
  };
  return e.setNodeMarkup(t, i.type, s, i.marks);
}
function kt({ delta: e, types: t }) {
  return ({ state: n, dispatch: i, editor: a }) => {
    const { selection: o } = n;
    let { tr: c } = n;
    return c = c.setSelection(o), c = Ca(c, e, t, a), c.docChanged ? (i && i(c), !0) : !1;
  };
}
function Na(e) {
  var J, ye, X;
  const { pluginKey: t = yr } = e, { t: n } = E(), [i, a] = y(null), [o, c] = y(-1), s = re(null), d = re(null), [l, h] = y(!1), m = e.editor.extensionManager.extensions.some((v) => v.name === "textAlign"), f = e.editor.extensionManager.extensions.some((v) => v.name === "indent"), g = e.editor.extensionManager.extensions.some((v) => v.name === "clear");
  A(() => {
    s.current && !e.editor.isDestroyed && (d.current = vr({
      editor: e.editor,
      element: s.current,
      pluginKey: "ContentItemMenu",
      tippyOptions: {
        offset: [-2, 16],
        zIndex: 99,
        moveTransition: "transform 0.15s ease-out"
      },
      onNodeChange: I
    }), e.editor.registerPlugin(d.current));
  }, [e.editor, s]);
  function x() {
    const v = e.editor.chain();
    v.setNodeSelection(o).unsetAllMarks(), (i == null ? void 0 : i.type.name) !== "paragraph" && v.setParagraph(), v.run();
  }
  function b() {
    e.editor.chain().focus().setNodeSelection(o).run(), document.execCommand("copy");
  }
  function S() {
    e.editor.commands.setNodeSelection(o);
    const { $anchor: v } = e.editor.state.selection, q = v.node(1) || e.editor.state.selection.node;
    e.editor.chain().setMeta("hideDragHandle", !0).insertContentAt(o + ((i == null ? void 0 : i.nodeSize) || 0), q.toJSON()).run();
  }
  function z(v) {
    e.editor.commands.setTextAlign(v);
  }
  function p() {
    const v = tt(e.editor.state.tr, o, 1);
    v.setMeta("hideDragHandle", !0), e.editor.view.dispatch && e.editor.view.dispatch(v);
  }
  function w() {
    const v = tt(e.editor.state.tr, o, -1);
    e.editor.view.dispatch && e.editor.view.dispatch(v);
  }
  function k() {
    e.editor.chain().setMeta("hideDragHandle", !0).setNodeSelection(o).deleteSelection().run();
  }
  function I(v) {
    v.node && a(v.node), c(v.pos);
  }
  function R() {
    var v;
    if (o !== -1) {
      const q = (i == null ? void 0 : i.nodeSize) || 0, ke = o + q, Q = (i == null ? void 0 : i.type.name) === "paragraph" && ((v = i == null ? void 0 : i.content) == null ? void 0 : v.size) === 0, Re = Q ? o + 2 : ke + 2;
      e.editor.chain().command(({ dispatch: K, tr: Ce, state: F }) => K ? (Q ? Ce.insertText("/", o, o + 1) : Ce.insert(
        ke,
        F.schema.nodes.paragraph.create(null, [F.schema.text("/")])
      ), K(Ce)) : !0).focus(Re).run();
    }
  }
  A(() => (l ? e.editor.commands.setMeta("lockDragHandle", !0) : e.editor.commands.setMeta("lockDragHandle", !1), () => {
    e.editor.commands.setMeta("lockDragHandle", !1);
  }), [l]), A(() => () => {
    d.current && (e.editor.unregisterPlugin(t), d.current = null);
  }, []), A(() => {
    var v;
    (v = e.editor) != null && v.isDestroyed && d.current && (e.editor.unregisterPlugin(t), d.current = null);
  }, [(J = e.editor) == null ? void 0 : J.isDestroyed]);
  const he = (v) => {
    e != null && e.disabled || h(v);
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: `drag-handle [transition-property:top,_left] richtext-ease-in-out richtext-duration-200 ${e == null ? void 0 : e.className}`,
      style: {
        opacity: e != null && e.disabled ? 0 : 1
      },
      ref: s,
      children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-gap-0.5 [transition-property:top,_left] richtext-ease-in-out richtext-duration-200", children: [
        /* @__PURE__ */ r(
          D,
          {
            variant: "ghost",
            size: "icon",
            className: "richtext-w-7 richtext-h-7 richtext-cursor-grab",
            disabled: e == null ? void 0 : e.disabled,
            onClick: R,
            type: "button",
            children: /* @__PURE__ */ r(N, { name: "Plus", className: "richtext-text-lg richtext-text-neutral-600 dark:richtext-text-neutral-200" })
          }
        ),
        /* @__PURE__ */ u(ce, { open: l, onOpenChange: he, children: [
          /* @__PURE__ */ u("div", { className: "richtext-relative richtext-flex richtext-flex-col", children: [
            /* @__PURE__ */ u(pe, { children: [
              /* @__PURE__ */ r(ve, { asChild: !0, disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ r(
                D,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "richtext-w-7 richtext-h-7 richtext-cursor-grab richtext-relative richtext-z-[1]",
                  disabled: e == null ? void 0 : e.disabled,
                  onMouseUp: (v) => {
                    v.preventDefault(), !(e != null && e.disabled) && h(!0);
                  },
                  type: "button",
                  children: /* @__PURE__ */ r(N, { name: "Grip", className: "richtext-text-sm dark:richtext-text-neutral-200 richtext-text-neutral-600" })
                }
              ) }),
              /* @__PURE__ */ r(de, { children: n("editor.draghandle.tooltip") })
            ] }),
            /* @__PURE__ */ r(se, { className: "richtext-absolute richtext-top-0 richtext-left-0 richtext-w-[28px] richtext-h-[28px] richtext-z-0" })
          ] }),
          /* @__PURE__ */ u(W, { className: "richtext-w-48", align: "start", side: "bottom", sideOffset: 0, children: [
            /* @__PURE__ */ u(
              j,
              {
                onClick: k,
                className: "richtext-flex richtext-gap-3 focus:richtext-text-red-500 focus:richtext-bg-red-400 hover:richtext-bg-red-400 dark:hover:richtext-text-red-500 richtext-bg-opacity-10 hover:richtext-bg-opacity-20 focus:richtext-bg-opacity-30 dark:hover:richtext-bg-opacity-20",
                children: [
                  /* @__PURE__ */ r(N, { name: "Trash2" }),
                  /* @__PURE__ */ r("span", { children: n("editor.remove") })
                ]
              }
            ),
            g ? /* @__PURE__ */ u(j, { className: "richtext-flex richtext-gap-3", onClick: x, children: [
              /* @__PURE__ */ r(N, { name: "PaintRoller" }),
              /* @__PURE__ */ r("span", { children: n("editor.clear.tooltip") })
            ] }) : null,
            /* @__PURE__ */ u(j, { className: "richtext-flex richtext-gap-3", onClick: b, children: [
              /* @__PURE__ */ r(N, { name: "Clipboard" }),
              /* @__PURE__ */ r("span", { children: n("editor.copyToClipboard") })
            ] }),
            /* @__PURE__ */ u(j, { className: "richtext-flex richtext-gap-3", onClick: S, children: [
              /* @__PURE__ */ r(N, { name: "Copy" }),
              /* @__PURE__ */ r("span", { children: n("editor.copy") })
            ] }),
            m || f ? /* @__PURE__ */ r(We, {}) : null,
            m ? /* @__PURE__ */ u(Nt, { children: [
              /* @__PURE__ */ u(nt, { className: "richtext-flex richtext-gap-3", children: [
                /* @__PURE__ */ r(N, { name: "AlignCenter" }),
                /* @__PURE__ */ r("span", { children: n("editor.textalign.tooltip") })
              ] }),
              /* @__PURE__ */ r(Ct, { children: /* @__PURE__ */ u(it, { children: [
                /* @__PURE__ */ u(j, { className: "richtext-flex richtext-gap-3", onClick: () => z("left"), children: [
                  /* @__PURE__ */ r(N, { name: "AlignLeft" }),
                  /* @__PURE__ */ r("span", { children: n("editor.textalign.left.tooltip") })
                ] }),
                /* @__PURE__ */ u(j, { className: "richtext-flex richtext-gap-3", onClick: () => z("center"), children: [
                  /* @__PURE__ */ r(N, { name: "AlignCenter" }),
                  /* @__PURE__ */ r("span", { children: n("editor.textalign.center.tooltip") })
                ] }),
                /* @__PURE__ */ u(j, { className: "richtext-flex richtext-gap-3", onClick: () => z("right"), children: [
                  /* @__PURE__ */ r(N, { name: "AlignRight" }),
                  /* @__PURE__ */ r("span", { children: n("editor.textalign.right.tooltip") })
                ] })
              ] }) })
            ] }) : null,
            f ? /* @__PURE__ */ u(Nt, { children: [
              /* @__PURE__ */ u(nt, { className: "richtext-flex richtext-gap-3", children: [
                /* @__PURE__ */ r(N, { name: "IndentIncrease" }),
                /* @__PURE__ */ r("span", { children: n("editor.indent") })
              ] }),
              /* @__PURE__ */ r(Ct, { children: /* @__PURE__ */ u(it, { children: [
                /* @__PURE__ */ u(
                  j,
                  {
                    className: "richtext-flex richtext-gap-3",
                    onClick: p,
                    disabled: ((ye = i == null ? void 0 : i.attrs) == null ? void 0 : ye.indent) >= te.max,
                    children: [
                      /* @__PURE__ */ r(N, { name: "IndentIncrease" }),
                      /* @__PURE__ */ r("span", { children: n("editor.indent.tooltip") })
                    ]
                  }
                ),
                /* @__PURE__ */ u(
                  j,
                  {
                    className: "richtext-flex richtext-gap-3",
                    onClick: w,
                    disabled: ((X = i == null ? void 0 : i.attrs) == null ? void 0 : X.indent) <= te.min,
                    children: [
                      /* @__PURE__ */ r(N, { name: "IndentDecrease" }),
                      /* @__PURE__ */ r("span", { children: n("editor.outdent.tooltip") })
                    ]
                  }
                )
              ] }) })
            ] }) : null
          ] })
        ] })
      ] })
    }
  );
}
function Ta({ fill: e }) {
  return /* @__PURE__ */ r(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 256 256",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ r("g", { id: "icon/填充色", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ u("g", { id: "icon/背景颜色", children: [
        /* @__PURE__ */ r("g", { id: "编组", fill: "currentColor", children: /* @__PURE__ */ u(
          "g",
          {
            transform: "translate(119.502295, 137.878331) rotate(-135.000000) translate(-119.502295, -137.878331) translate(48.002295, 31.757731)",
            id: "矩形",
            children: [
              /* @__PURE__ */ r(
                "path",
                {
                  d: "M100.946943,60.8084699 L43.7469427,60.8084699 C37.2852111,60.8084699 32.0469427,66.0467383 32.0469427,72.5084699 L32.0469427,118.70847 C32.0469427,125.170201 37.2852111,130.40847 43.7469427,130.40847 L100.946943,130.40847 C107.408674,130.40847 112.646943,125.170201 112.646943,118.70847 L112.646943,72.5084699 C112.646943,66.0467383 107.408674,60.8084699 100.946943,60.8084699 Z M93.646,79.808 L93.646,111.408 L51.046,111.408 L51.046,79.808 L93.646,79.808 Z",
                  fillRule: "nonzero"
                }
              ),
              /* @__PURE__ */ r(
                "path",
                {
                  d: "M87.9366521,16.90916 L87.9194966,68.2000001 C87.9183543,69.4147389 86.9334998,70.399264 85.7187607,70.4 L56.9423078,70.4 C55.7272813,70.4 54.7423078,69.4150264 54.7423078,68.2 L54.7423078,39.4621057 C54.7423078,37.2523513 55.5736632,35.1234748 57.0711706,33.4985176 L76.4832996,12.4342613 C78.9534987,9.75382857 83.1289108,9.5834005 85.8093436,12.0535996 C87.1658473,13.303709 87.9372691,15.0644715 87.9366521,16.90916 Z",
                  fillRule: "evenodd"
                }
              ),
              /* @__PURE__ */ r(
                "path",
                {
                  d: "M131.3,111.241199 L11.7,111.241199 C5.23826843,111.241199 0,116.479467 0,122.941199 L0,200.541199 C0,207.002931 5.23826843,212.241199 11.7,212.241199 L131.3,212.241199 C137.761732,212.241199 143,207.002931 143,200.541199 L143,122.941199 C143,116.479467 137.761732,111.241199 131.3,111.241199 Z M124,130.241 L124,193.241 L19,193.241 L19,130.241 L124,130.241 Z",
                  fillRule: "nonzero"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M51,218 L205,218 C211.075132,218 216,222.924868 216,229 C216,235.075132 211.075132,240 205,240 L51,240 C44.9248678,240 40,235.075132 40,229 C40,222.924868 44.9248678,218 51,218 Z",
            id: "矩形",
            fill: e || "#FBDE28"
          }
        )
      ] }) })
    }
  );
}
function en(e) {
  const [t, n] = y(void 0);
  function i(c) {
    var s;
    (s = e.action) == null || s.call(e, c);
  }
  function a() {
    var c;
    (c = e.action) == null || c.call(e, t);
  }
  const o = P(
    Ft((c) => {
      n(c);
    }, 350),
    []
  );
  return /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ r(
      _,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        action: a,
        tooltipOptions: e == null ? void 0 : e.tooltipOptions,
        shortcutKeys: e == null ? void 0 : e.shortcutKeys,
        children: /* @__PURE__ */ r("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ r(Ta, { fill: t }) })
      }
    ),
    /* @__PURE__ */ r(
      Kt,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: i,
        highlight: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(D, { variant: "ghost", size: "icon", className: "!richtext-w-3 !richtext-h-[32px]", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ r(N, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
function Aa({ editor: e }) {
  var x, b, S, z, p, w, k, I, R, he, J, ye, X, v, q, ke, Q, Re;
  const t = ({ editor: K }) => Li(K.view.state, "table"), { t: n } = E();
  function i() {
    e.chain().focus().addColumnBefore().run();
  }
  function a() {
    e.chain().focus().addColumnAfter().run();
  }
  function o() {
    e.chain().focus().deleteColumn().run();
  }
  function c() {
    e.chain().focus().addRowBefore().run();
  }
  function s() {
    e.chain().focus().addRowAfter().run();
  }
  function d() {
    e.chain().focus().deleteRow().run();
  }
  function l() {
    e.chain().focus().mergeCells().run();
  }
  function h() {
    e == null || e.chain().focus().splitCell().run();
  }
  function m() {
    e.chain().focus().deleteTable().run();
  }
  function f(K) {
    e.chain().focus().setTableCellBackground(K).run();
  }
  return /* @__PURE__ */ r(
    Ue,
    {
      editor: e,
      pluginKey: "table",
      shouldShow: t,
      updateDelay: 0,
      tippyOptions: {
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        maxWidth: "auto",
        getReferenceClientRect: () => {
          var xt;
          const {
            view: K,
            state: {
              selection: { from: Ce }
            }
          } = e, F = K.domAtPos(Ce).node;
          if (!F)
            return new DOMRect(-1e3, -1e3, 0, 0);
          const gt = (xt = F == null ? void 0 : F.closest) == null ? void 0 : xt.call(F, ".tableWrapper");
          return gt ? gt.getBoundingClientRect() : new DOMRect(-1e3, -1e3, 0, 0);
        },
        plugins: [Tr],
        sticky: "popper"
      },
      children: /* @__PURE__ */ u("div", { className: "richtext-min-w-32 richtext-flex richtext-flex-row richtext-h-full richtext-items-center richtext-leading-none richtext-gap-0.5 richtext-p-2 richtext-w-full richtext-bg-background richtext-rounded-lg richtext-shadow-sm !richtext-border richtext-border-border", children: [
        /* @__PURE__ */ r(
          _,
          {
            icon: "BetweenHorizonalEnd",
            tooltip: n("editor.table.menu.insertColumnBefore"),
            action: i,
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((b = (x = e == null ? void 0 : e.can()) == null ? void 0 : x.addColumnBefore) != null && b.call(x))
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            icon: "BetweenHorizonalStart",
            tooltip: n("editor.table.menu.insertColumnAfter"),
            action: a,
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((z = (S = e == null ? void 0 : e.can()) == null ? void 0 : S.addColumnAfter) != null && z.call(S))
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            icon: "DeleteColumn",
            action: o,
            tooltip: n("editor.table.menu.deleteColumn"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((w = e == null ? void 0 : (p = e.can()).deleteColumn) != null && w.call(p))
          }
        ),
        /* @__PURE__ */ r(U, { orientation: "vertical", className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]" }),
        /* @__PURE__ */ r(
          _,
          {
            icon: "BetweenVerticalEnd",
            action: c,
            tooltip: n("editor.table.menu.insertRowAbove"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((I = e == null ? void 0 : (k = e.can()).addRowBefore) != null && I.call(k))
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            icon: "BetweenVerticalStart",
            action: s,
            tooltip: n("editor.table.menu.insertRowBelow"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((he = (R = e == null ? void 0 : e.can()) == null ? void 0 : R.addRowAfter) != null && he.call(R))
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            icon: "DeleteRow",
            action: d,
            tooltip: n("editor.table.menu.deleteRow"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((ye = (J = e == null ? void 0 : e.can()) == null ? void 0 : J.deleteRow) != null && ye.call(J))
          }
        ),
        /* @__PURE__ */ r(U, { orientation: "vertical", className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]" }),
        /* @__PURE__ */ r(
          _,
          {
            icon: "TableCellsMerge",
            action: l,
            tooltip: n("editor.table.menu.mergeCells"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((v = (X = e == null ? void 0 : e.can()) == null ? void 0 : X.mergeCells) != null && v.call(X))
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            icon: "TableCellsSplit",
            action: h,
            tooltip: n("editor.table.menu.splitCells"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((ke = (q = e == null ? void 0 : e.can()) == null ? void 0 : q.splitCell) != null && ke.call(q))
          }
        ),
        /* @__PURE__ */ r(U, { orientation: "vertical", className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]" }),
        /* @__PURE__ */ r(
          en,
          {
            editor: e,
            tooltip: n("editor.table.menu.setCellsBgColor"),
            action: f,
            tooltipOptions: {
              sideOffset: 15
            }
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            icon: "Trash2",
            tooltip: n("editor.table.menu.deleteTable"),
            action: m,
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((Re = (Q = e == null ? void 0 : e.can()) == null ? void 0 : Q.deleteTable) != null && Re.call(Q))
          }
        )
      ] })
    }
  );
}
function La(e, t) {
  const { state: n } = t, i = n.selection.$anchor;
  let a = !1;
  if (i.depth)
    for (let o = i.depth; o > 0; o--)
      i.node(o).type.name === e && (t.dispatchTransaction && t.dispatchTransaction(n.tr.delete(i.before(o), i.after(o)).scrollIntoView()), a = !0);
  else {
    const o = n.selection.node;
    o && o.type.name === e && (t.chain().deleteSelection().run(), a = !0);
  }
  if (!a) {
    const o = i.pos;
    if (o) {
      const c = n.tr.doc.nodeAt(o);
      c && c.type.name === e && (t.dispatchTransaction && t.dispatchTransaction(n.tr.delete(o, o + c.nodeSize)), a = !0);
    }
  }
  return a;
}
function Sa({ editor: e }) {
  const { t } = E(), n = P(() => e.isActive(Ae.name), [e]), i = P(() => La(Ae.name, e), [e]), a = P(() => e.chain().focus().addColBefore().run(), [e]), o = P(() => e.chain().focus().addColAfter().run(), [e]), c = P(() => e.chain().focus().deleteCol().run(), [e]);
  return /* @__PURE__ */ r(
    Ue,
    {
      pluginKey: "columns-bubble-menu",
      editor: e,
      shouldShow: n,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999
        // onHidden: () => {
        //   toggleVisible(false)
        // },
      },
      children: /* @__PURE__ */ u("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: [
        /* @__PURE__ */ r(
          _,
          {
            action: a,
            icon: "ColumnAddLeft",
            tooltip: t("editor.table.menu.insertColumnBefore")
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            action: o,
            icon: "ColumnAddRight",
            tooltip: t("editor.table.menu.insertColumnAfter")
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            action: c,
            icon: "DeleteColumn",
            tooltip: t("editor.table.menu.deleteColumn")
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            action: i,
            icon: "Trash2",
            tooltip: t("editor.table.menu.delete_column")
          }
        )
      ] })
    }
  );
}
const Ma = st(
  "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-md richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50",
  {
    variants: {
      variant: {
        default: "!richtext-bg-primary !richtext-text-primary-foreground hover:!richtext-bg-primary/90",
        destructive: "richtext-bg-destructive richtext-text-destructive-foreground hover:richtext-bg-destructive/90",
        outline: "richtext-border richtext-border-input richtext-bg-background hover:richtext-bg-accent hover:richtext-text-accent-foreground",
        secondary: "richtext-bg-secondary richtext-text-secondary-foreground hover:richtext-bg-secondary/80",
        ghost: "hover:richtext-bg-accent hover:richtext-text-accent-foreground",
        link: "richtext-text-primary richtext-underline-offset-4 hover:richtext-underline"
      },
      size: {
        default: "richtext-h-10 richtext-px-4 richtext-py-2",
        sm: "richtext-h-9 richtext-rounded-md richtext-px-3",
        lg: "richtext-h-11 richtext-rounded-md richtext-px-8",
        icon: "richtext-h-10 richtext-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), D = M.forwardRef(
  ({ className: e, variant: t, size: n, asChild: i = !1, ...a }, o) => /* @__PURE__ */ r(
    i ? Ve : "button",
    {
      className: T(Ma({ variant: t, size: n, className: e })),
      ref: o,
      ...a
    }
  )
);
D.displayName = "Button";
const ce = L.Root, se = L.Trigger, Ct = L.Portal, Nt = L.Sub, nt = M.forwardRef(({ className: e, inset: t, children: n, ...i }, a) => /* @__PURE__ */ u(
  L.SubTrigger,
  {
    ref: a,
    className: T(
      "richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none focus:richtext-bg-accent data-[state=open]:richtext-bg-accent",
      t && "richtext-pl-8",
      e
    ),
    ...i,
    children: [
      n,
      /* @__PURE__ */ r(pi, { className: "richtext-ml-auto richtext-h-4 richtext-w-4" })
    ]
  }
));
nt.displayName = L.SubTrigger.displayName;
const it = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  L.SubContent,
  {
    ref: n,
    className: T(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-lg data-[state=open]:richtext-animate-in-rt data-[state=closed]:richtext-animate-out-rt data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
it.displayName = L.SubContent.displayName;
const W = M.forwardRef(({ className: e, sideOffset: t = 4, ...n }, i) => /* @__PURE__ */ r(L.Portal, { children: /* @__PURE__ */ r(
  L.Content,
  {
    ref: i,
    sideOffset: t,
    className: T(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in-rt data-[state=closed]:richtext-animate-out-rt data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
W.displayName = L.Content.displayName;
const j = M.forwardRef(({ className: e, inset: t, ...n }, i) => /* @__PURE__ */ r(
  L.Item,
  {
    ref: i,
    className: T(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t && "richtext-pl-8",
      e
    ),
    ...n
  }
));
j.displayName = L.Item.displayName;
const le = M.forwardRef(({ className: e, children: t, checked: n, ...i }, a) => /* @__PURE__ */ u(
  L.CheckboxItem,
  {
    ref: a,
    className: T(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    checked: n,
    ...i,
    children: [
      /* @__PURE__ */ r("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ r(L.ItemIndicator, { children: /* @__PURE__ */ r(vi, { className: "richtext-h-4 richtext-w-4" }) }) }),
      t
    ]
  }
));
le.displayName = L.CheckboxItem.displayName;
const za = M.forwardRef(({ className: e, children: t, ...n }, i) => /* @__PURE__ */ u(
  L.RadioItem,
  {
    ref: i,
    className: T(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ r("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ r(L.ItemIndicator, { children: /* @__PURE__ */ r(yi, { className: "richtext-h-2 richtext-w-2 richtext-fill-current" }) }) }),
      t
    ]
  }
));
za.displayName = L.RadioItem.displayName;
const Ra = M.forwardRef(({ className: e, inset: t, ...n }, i) => /* @__PURE__ */ r(
  L.Label,
  {
    ref: i,
    className: T(
      "richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-font-semibold",
      t && "richtext-pl-8",
      e
    ),
    ...n
  }
));
Ra.displayName = L.Label.displayName;
const We = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  L.Separator,
  {
    ref: n,
    className: T(
      "richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted",
      e
    ),
    ...t
  }
));
We.displayName = L.Separator.displayName;
function tn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "span",
    {
      className: T(
        "richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60",
        e
      ),
      ...t
    }
  );
}
tn.displayName = "DropdownMenuShortcut";
const ge = M.forwardRef(
  ({ className: e, type: t, ...n }, i) => /* @__PURE__ */ r(
    "input",
    {
      type: t,
      className: T(
        "richtext-flex richtext-h-10 richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background file:richtext-border-0 file:richtext-bg-transparent file:richtext-text-sm file:richtext-font-medium placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none  disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        e
      ),
      ref: i,
      ...n
    }
  )
);
ge.displayName = "Input";
const Ha = st(
  "richtext-text-sm richtext-font-medium richtext-leading-none peer-disabled:richtext-cursor-not-allowed peer-disabled:richtext-opacity-70"
), ie = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Vt.Root,
  {
    ref: n,
    className: T(Ha(), e),
    ...t
  }
));
ie.displayName = Vt.Root.displayName;
const G = Te.Root, Z = Te.Trigger, V = M.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...i }, a) => /* @__PURE__ */ r(Te.Portal, { children: /* @__PURE__ */ r(
  Te.Content,
  {
    ref: a,
    align: t,
    sideOffset: n,
    className: T(
      "richtext-z-50 richtext-w-72 richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-4 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none data-[state=open]:richtext-animate-in-rt data-[state=closed]:richtext-animate-out-rt data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...i
  }
) }));
V.displayName = Te.Content.displayName;
const U = M.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...i }, a) => /* @__PURE__ */ r(
    Ut.Root,
    {
      ref: a,
      decorative: n,
      orientation: t,
      className: T(
        "richtext-shrink-0 richtext-bg-border",
        t === "horizontal" ? "richtext-h-[1px] richtext-w-full" : "richtext-h-full richtext-w-[1px]",
        e
      ),
      ...i
    }
  )
);
U.displayName = Ut.Root.displayName;
const mt = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Qe.Root,
  {
    className: T(
      "richtext-peer richtext-inline-flex richtext-h-6 richtext-w-11 richtext-shrink-0 richtext-cursor-pointer richtext-items-center richtext-rounded-full richtext-border-2 richtext-border-transparent richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 focus-visible:richtext-ring-offset-background disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 data-[state=checked]:richtext-bg-primary data-[state=unchecked]:richtext-bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ r(
      Qe.Thumb,
      {
        className: T(
          "richtext-pointer-events-none richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-bg-background richtext-shadow-lg richtext-ring-0 richtext-transition-transform data-[state=checked]:richtext-translate-x-5 data-[state=unchecked]:richtext-translate-x-0"
        )
      }
    )
  }
));
mt.displayName = Qe.Root.displayName;
const Ea = oe.Root, nn = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  oe.List,
  {
    ref: n,
    className: T(
      "richtext-inline-flex richtext-h-10 richtext-items-center richtext-justify-center richtext-rounded-md richtext-bg-muted richtext-p-1 richtext-text-muted-foreground",
      e
    ),
    ...t
  }
));
nn.displayName = oe.List.displayName;
const rn = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  oe.Trigger,
  {
    ref: n,
    className: T(
      "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-sm richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-all focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=active]:richtext-bg-background data-[state=active]:richtext-text-foreground data-[state=active]:richtext-shadow-sm",
      e
    ),
    ...t
  }
));
rn.displayName = oe.Trigger.displayName;
const an = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  oe.Content,
  {
    ref: n,
    className: T(
      "richtext-mt-2 richtext-ring-offset-background focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2",
      e
    ),
    ...t
  }
));
an.displayName = oe.Content.displayName;
const Ia = st(
  "richtext-inline-flex richtext-items-center richtext-justify-center richtext-rounded-md richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-muted hover:richtext-text-muted-foreground focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=on]:richtext-bg-accent data-[state=on]:richtext-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "richtext-bg-transparent",
        outline: "richtext-border richtext-border-input richtext-bg-transparent hover:richtext-bg-accent hover:richtext-text-accent-foreground"
      },
      size: {
        default: "richtext-h-10 richtext-px-3",
        sm: "richtext-h-9 richtext-px-2",
        lg: "richtext-h-11 richtext-px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), we = M.forwardRef(({ className: e, variant: t, size: n, ...i }, a) => /* @__PURE__ */ r(
  qt.Root,
  {
    ref: a,
    className: T(Ia({ variant: t, size: n, className: e })),
    ...i
  }
));
we.displayName = qt.Root.displayName;
const Ba = ze.Provider, pe = ze.Root, ve = ze.Trigger, de = M.forwardRef(({ className: e, sideOffset: t = 4, ...n }, i) => /* @__PURE__ */ r(
  ze.Content,
  {
    ref: i,
    sideOffset: t,
    className: T(
      "richtext-z-50 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-text-popover-foreground richtext-shadow-md richtext-animate-in-rt richtext-fade-in-0 richtext-zoom-in-95 data-[state=closed]:richtext-animate-out-rt data-[state=closed]:richtext-fade-out-0 data-[state=closed]:richtext-zoom-out-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
de.displayName = ze.Content.displayName;
const Kc = Si.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleBold(),
          isActive: () => t.isActive("bold") || !1,
          disabled: !t.can().toggleBold(),
          icon: "Bold",
          shortcutKeys: ["mod", "B"],
          tooltip: n("editor.bold.tooltip")
        }
      })
    };
  }
}), Wc = Mi.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: n }) {
        return {
          component: _,
          componentProps: {
            action: () => t.commands.toggleItalic(),
            isActive: () => t.isActive("italic") || !1,
            disabled: !t.can().toggleItalic(),
            shortcutKeys: ["mod", "I"],
            icon: "Italic",
            tooltip: n("editor.italic.tooltip")
          }
        };
      }
    };
  }
}), Gc = zi.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: n }) {
        return {
          component: _,
          componentProps: {
            action: () => t.commands.toggleUnderline(),
            isActive: () => t.isActive("underline") || !1,
            disabled: !t.can().toggleUnderline(),
            icon: "Underline",
            shortcutKeys: ["mod", "U"],
            tooltip: n("editor.underline.tooltip")
          }
        };
      }
    };
  }
}), Zc = Ri.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleStrike(),
          isActive: () => t.isActive("strike") || !1,
          disabled: !t.can().toggleStrike(),
          icon: "Strikethrough",
          shortcutKeys: ["shift", "mod", "X"],
          tooltip: n("editor.strike.tooltip")
        }
      })
    };
  }
});
function Oa(e) {
  var a, o, c;
  const { t, lang: n } = E(), i = B(() => {
    var l;
    const s = (l = e == null ? void 0 : e.items) == null ? void 0 : l.find((h) => h.isActive());
    return s && !s.default ? {
      ...s
    } : {
      title: e.tooltip,
      font: t("editor.fontFamily.default.tooltip"),
      isActive: () => !1,
      disabled: !1,
      action: () => e.editor.chain().focus().unsetFontFamily().run()
    };
  }, [t, n, e]);
  return /* @__PURE__ */ u(ce, { children: [
    /* @__PURE__ */ r(se, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      ht,
      {
        title: ((a = i == null ? void 0 : i.font) == null ? void 0 : a.length) > 7 ? `${(o = i == null ? void 0 : i.font) == null ? void 0 : o.slice(0, 6)}...` : i == null ? void 0 : i.font,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        icon: "MenuDown"
      }
    ) }),
    /* @__PURE__ */ r(W, { className: "richtext-w-full", children: (c = e == null ? void 0 : e.items) == null ? void 0 : c.map((s, d) => {
      const l = s.font === t("editor.fontFamily.default.tooltip") ? {} : { fontFamily: s.font };
      return /* @__PURE__ */ u(ot, { children: [
        /* @__PURE__ */ r(le, { checked: (i == null ? void 0 : i.font) === s.font, onClick: s.action, children: /* @__PURE__ */ r("div", { className: "richtext-h-full richtext-ml-1", style: l, children: s.font }) }),
        s.font === t("editor.fontFamily.default.tooltip") && /* @__PURE__ */ r(We, {})
      ] }, `font-family-${d}`);
    }) })
  ] });
}
const Jc = Hi.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      fontFamilyList: fr,
      button({ editor: t, extension: n, t: i }) {
        var l;
        const { extensions: a = [] } = t.extensionManager ?? [], o = et(((l = n == null ? void 0 : n.options) == null ? void 0 : l.fontFamilyList) || []), c = a.find(
          (h) => h.name === "base-kit"
        ), s = o.map((h) => ({
          action: () => {
            t.chain().focus().setFontFamily(h.value).run();
          },
          isActive: () => t.isActive("textStyle", { fontFamily: h.value }) || !1,
          disabled: !t.can().setFontFamily(h.value),
          title: h.name,
          font: h.value
        }));
        c && c.options.textStyle !== !1 && s.unshift({
          action: () => t.chain().focus().unsetFontFamily().run(),
          isActive: () => !1,
          disabled: !1,
          font: i("editor.fontFamily.default.tooltip"),
          title: i("editor.fontFamily.tooltip")
        });
        const d = s.filter((h) => h.disabled).length === s.length;
        return {
          component: Oa,
          componentProps: {
            tooltip: i("editor.fontFamily.tooltip"),
            disabled: d,
            items: s,
            editor: t
          }
        };
      }
    };
  }
});
function Pa(e) {
  var n;
  const t = B(() => {
    var o;
    const i = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((c) => c.isActive());
    return i && !i.default ? {
      ...i
    } : {
      title: e.tooltip,
      level: 0,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ u(ce, { children: [
    /* @__PURE__ */ r(se, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      ht,
      {
        title: t == null ? void 0 : t.title,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        icon: "MenuDown"
      }
    ) }),
    /* @__PURE__ */ r(W, { className: "richtext-w-full", children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((i, a) => {
      var o, c;
      return /* @__PURE__ */ u(ot, { children: [
        /* @__PURE__ */ u(
          le,
          {
            checked: (t == null ? void 0 : t.title) === i.title,
            onClick: i.action,
            children: [
              /* @__PURE__ */ r("div", { className: `richtext-ml-1 richtext-h-full heading-${i.level}`, children: i.title }),
              !!((o = i == null ? void 0 : i.shortcutKeys) != null && o.length) && /* @__PURE__ */ r(tn, { className: "richtext-pl-4", children: (c = i == null ? void 0 : i.shortcutKeys) == null ? void 0 : c.map((s) => qe(s)).join(" ") })
            ]
          }
        ),
        i.level === 0 && /* @__PURE__ */ r(We, {})
      ] }, `heading-k-${a}`);
    }) })
  ] });
}
const Xc = Ei.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      levels: [1, 2, 3, 4, 5, 6],
      button({ editor: t, extension: n, t: i }) {
        var l;
        const { extensions: a = [] } = t.extensionManager ?? [], o = ((l = n.options) == null ? void 0 : l.levels) || [], c = a.find(
          (h) => h.name === "base-kit"
        ), s = o.map((h) => ({
          action: () => t.commands.toggleHeading({ level: h }),
          isActive: () => t.isActive("heading", { level: h }) || !1,
          disabled: !t.can().toggleHeading({ level: h }),
          title: i(`editor.heading.h${h}.tooltip`),
          level: h,
          shortcutKeys: ["alt", "mod", `${h}`]
        }));
        c && c.options.paragraph !== !1 && s.unshift({
          action: () => t.commands.setParagraph(),
          isActive: () => t.isActive("paragraph") || !1,
          disabled: !t.can().setParagraph(),
          level: 0,
          title: i("editor.paragraph.tooltip"),
          shortcutKeys: ["alt", "mod", "0"]
        });
        const d = s.filter((h) => h.disabled).length === s.length;
        return {
          component: Pa,
          componentProps: {
            tooltip: i("editor.heading.tooltip"),
            disabled: d,
            items: s,
            editor: t
          }
        };
      }
    };
  }
});
function Da(e) {
  var n;
  const t = B(() => {
    var o;
    const i = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((c) => c.isActive());
    return i && !i.default ? {
      ...i,
      icon: i.icon ? i.icon : e.icon
    } : {
      title: e == null ? void 0 : e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ u(G, { modal: !0, children: [
    /* @__PURE__ */ r(Z, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        customClass: "!richtext-w-12 richtext-h-12",
        icon: e == null ? void 0 : e.icon,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(N, { className: "richtext-w-3 richtext-h-3 richtext-ml-1 richtext-text-zinc-500", name: "MenuDown" })
      }
    ) }),
    /* @__PURE__ */ r(
      V,
      {
        className: "richtext-min-w-4 richtext-w-full !richtext-p-[4px] richtext-flex richtext-flex-row richtext-gap-1",
        align: "start",
        side: "bottom",
        children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((i, a) => {
          var o, c;
          return /* @__PURE__ */ u(pe, { children: [
            /* @__PURE__ */ r(ve, { asChild: !0, children: /* @__PURE__ */ r(
              we,
              {
                size: "sm",
                onClick: i == null ? void 0 : i.action,
                className: "richtext-p-1 richtext-w-7 richtext-h-7",
                pressed: t.title === i.title,
                "data-state": t.title === i.title ? "on" : "off",
                children: (i == null ? void 0 : i.icon) && /* @__PURE__ */ r(N, { name: i.icon })
              }
            ) }),
            /* @__PURE__ */ u(de, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ r("span", { children: i.title }),
              !!((o = i.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: (c = i.shortcutKeys) == null ? void 0 : c.map((s) => qe(s)).join(" ") })
            ] })
          ] }, `text-align-${a}`);
        })
      }
    )
  ] });
}
const Qc = Ii.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["heading", "paragraph", "list_item", "title"],
      button({
        editor: t,
        extension: n,
        t: i
      }) {
        var l;
        const a = ((l = n.options) == null ? void 0 : l.alignments) || [], o = {
          left: ["mod", "Shift", "L"],
          center: ["mod", "Shift", "E"],
          right: ["mod", "Shift", "R"],
          justify: ["mod", "Shift", "J"]
        }, c = {
          left: "AlignLeft",
          center: "AlignCenter",
          right: "AlignRight",
          justify: "AlignJustify"
        }, s = a.map((h) => {
          var m, f, g;
          return {
            title: i(`editor.textalign.${h}.tooltip`),
            icon: c[h],
            shortcutKeys: o[h],
            isActive: () => t.isActive({ textAlign: h }) || !1,
            action: () => {
              var x, b;
              return (b = (x = t.commands) == null ? void 0 : x.setTextAlign) == null ? void 0 : b.call(x, h);
            },
            disabled: !((g = (f = (m = t == null ? void 0 : t.can) == null ? void 0 : m.call(t)) == null ? void 0 : f.setTextAlign) != null && g.call(f, h))
          };
        }), d = s.filter((h) => h.disabled).length === s.length;
        return {
          component: Da,
          componentProps: {
            icon: "AlignJustify",
            tooltip: i("editor.textalign.tooltip"),
            disabled: d,
            items: s
          }
        };
      }
    };
  }
});
function $a(e) {
  var i;
  const { t } = E(), n = B(() => {
    const a = (e.items || []).find((c) => c.isActive());
    return a || {
      title: t("editor.fontSize.default.tooltip"),
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ u(ce, { children: [
    /* @__PURE__ */ r(se, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      ht,
      {
        title: n == null ? void 0 : n.title,
        tooltip: `${e == null ? void 0 : e.tooltip}`,
        disabled: e == null ? void 0 : e.disabled,
        icon: "MenuDown"
      }
    ) }),
    /* @__PURE__ */ r(W, { className: "richtext-w-32 richtext-overflow-y-auto richtext-max-h-96", children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((a, o) => /* @__PURE__ */ r(
      le,
      {
        checked: n.title === a.title,
        onClick: a.action,
        children: /* @__PURE__ */ r("div", { className: "richtext-h-full richtext-ml-1", children: a.title })
      },
      `font-size-${o}`
    )) })
  ] });
}
const Yc = H.create({
  name: "fontSize",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["textStyle"],
      fontSizes: [...gr],
      button({ editor: t, extension: n, t: i }) {
        var d;
        const a = et(((d = n.options) == null ? void 0 : d.fontSizes) || wt), o = et([wt])[0], c = a.map((l) => ({
          title: l.value === o.value ? i("editor.fontSize.default.tooltip") : String(l.name),
          isActive: () => {
            const { fontSize: h } = t.getAttributes("textStyle");
            return l.value === o.value && h === void 0 ? !0 : t.isActive({ fontSize: String(l.value) }) || !1;
          },
          action: () => {
            if (l.value === o.value) {
              t.commands.unsetFontSize();
              return;
            }
            t.commands.setFontSize(String(l.value));
          },
          disabled: !t.can().setFontSize(String(l.value)),
          divider: l.value === o.value || !1,
          default: l.value === o.value || !1
        })), s = c.filter((l) => l.disabled).length === c.length;
        return {
          component: $a,
          componentProps: {
            editor: t,
            tooltip: i("editor.fontSize.tooltip"),
            disabled: s,
            items: c,
            maxHeight: 280
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (e) => e.style.fontSize.replaceAll(/["']+/g, ""),
            renderHTML: (e) => e.fontSize ? {
              style: `font-size: ${e.fontSize}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (e) => ({ chain: t }) => t().setMark("textStyle", { fontSize: e }).run(),
      unsetFontSize: () => ({ chain: e }) => e().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
});
function ja({ fill: e }) {
  return /* @__PURE__ */ r(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 240 240",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ r("g", { stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ r("g", { transform: "translate(0.000000, 0.500000)", children: /* @__PURE__ */ u("g", { transform: "translate(39.000000, 17.353553)", children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: "M11,201.146447 L167,201.146447 C173.075132,201.146447 178,206.071314 178,212.146447 C178,218.221579 173.075132,223.146447 167,223.146447 L11,223.146447 C4.92486775,223.146447 7.43989126e-16,218.221579 0,212.146447 C-7.43989126e-16,206.071314 4.92486775,201.146447 11,201.146447 Z",
            id: "矩形",
            fill: e || "#DF2A3F",
            fillRule: "evenodd"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M72.3425855,16.8295583 C75.799482,7.50883712 86.1577877,2.75526801 95.4785089,6.21216449 C100.284516,7.99463061 104.096358,11.7387855 105.968745,16.4968188 L106.112518,16.8745422 L159.385152,161.694068 C161.291848,166.877345 158.635655,172.624903 153.452378,174.531599 C148.358469,176.405421 142.719567,173.872338 140.716873,168.864661 L140.614848,168.598825 L89.211,28.86 L37.3759214,168.623816 C35.4885354,173.712715 29.8981043,176.351047 24.7909589,174.617647 L24.5226307,174.522368 C19.4337312,172.634982 16.7953993,167.044551 18.5287999,161.937406 L18.6240786,161.669077 L72.3425855,16.8295583 Z",
            id: "路径-21",
            fill: "currentColor",
            fillRule: "nonzero"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M121,103.146447 C126.522847,103.146447 131,107.623599 131,113.146447 C131,118.575687 126.673329,122.994378 121.279905,123.142605 L121,123.146447 L55,123.146447 C49.4771525,123.146447 45,118.669294 45,113.146447 C45,107.717207 49.3266708,103.298515 54.7200952,103.150288 L55,103.146447 L121,103.146447 Z",
            id: "路径-22",
            fill: "currentColor",
            fillRule: "nonzero"
          }
        )
      ] }) }) })
    }
  );
}
function Fa(e) {
  const [t, n] = y(void 0);
  function i(c) {
    var s;
    (s = e.action) == null || s.call(e, c);
  }
  function a() {
    var c;
    (c = e.action) == null || c.call(e, t);
  }
  const o = P(
    Ft((c) => {
      n(c);
    }, 350),
    []
  );
  return /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ r(_, { tooltip: e == null ? void 0 : e.tooltip, disabled: e == null ? void 0 : e.disabled, action: a, children: /* @__PURE__ */ r("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ r(ja, { fill: t }) }) }),
    /* @__PURE__ */ r(
      Kt,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: i,
        disabled: e == null ? void 0 : e.disabled,
        colors: e == null ? void 0 : e.colors,
        defaultColor: e == null ? void 0 : e.defaultColor,
        children: /* @__PURE__ */ r(D, { variant: "ghost", size: "icon", className: "r!ichtext-h-[32px] !richtext-w-3", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ r(N, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
const es = Bi.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: n, extension: i }) {
        return {
          component: Fa,
          componentProps: {
            colors: i.options.colors,
            defaultColor: i.options.defaultColor,
            action: (a) => {
              a === void 0 && t.chain().focus().unsetColor().run(), typeof a == "string" && t.chain().focus().setColor(a).run();
            },
            isActive: () => {
              const { color: a } = t.getAttributes("textStyle");
              return a && t.isActive({ color: a }) || !1;
            },
            editor: t,
            disabled: !t.can().setColor(""),
            tooltip: n("editor.color.tooltip")
          }
        };
      }
    };
  }
}), ts = Oi.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      multicolor: !0,
      button: ({ editor: t, t: n }) => ({
        component: en,
        componentProps: {
          action: (i) => {
            typeof i == "string" && t.chain().focus().setHighlight({ color: i }).run(), i === void 0 && t.chain().focus().unsetHighlight().run();
          },
          editor: t,
          isActive: () => t.isActive("highlight") || !1,
          disabled: !t.can().setHighlight(),
          shortcutKeys: ["⇧", "mod", "H"],
          tooltip: n("editor.highlight.tooltip")
        }
      })
    };
  }
}), ns = Pi.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleBulletList(),
          isActive: () => t.isActive("bulletList") || !1,
          disabled: !1,
          shortcutKeys: ["shift", "mod", "8"],
          icon: "List",
          tooltip: n("editor.bulletlist.tooltip")
        }
      })
    };
  }
}), is = Le.create({
  name: "clear",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: _,
        componentProps: {
          action: () => t.chain().focus().clearNodes().unsetAllMarks().run(),
          disabled: !t.can().chain().focus().clearNodes().unsetAllMarks().run(),
          icon: "Eraser",
          tooltip: n("editor.clear.tooltip")
        }
      })
    };
  }
}), rs = Di.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleOrderedList(),
          isActive: () => t.isActive("orderedList") || !1,
          disabled: !1,
          icon: "ListOrdered",
          shortcutKeys: ["mod", "shift", "7"],
          tooltip: n("editor.orderedlist.tooltip")
        }
      })
    };
  }
}), as = $i.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "task-list"
      },
      taskItem: {
        HTMLAttributes: {
          class: "task-list-item"
        }
      },
      button: ({ editor: t, t: n }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleTaskList(),
          isActive: () => t.isActive("taskList") || !1,
          disabled: !1,
          icon: "ListTodo",
          shortcutKeys: ["shift", "mod", "9"],
          tooltip: n("editor.tasklist.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [ji.configure(this.options.taskItem)];
  }
}), os = Fi.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: t, t: n }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleBlockquote(),
          isActive: () => t.isActive("blockquote") || !1,
          disabled: !t.can().toggleBlockquote(),
          icon: "TextQuote",
          shortcutKeys: ["shift", "mod", "B"],
          tooltip: n("editor.blockquote.tooltip")
        }
      })
    };
  }
});
function Ua(e) {
  function t(n, i, a) {
    e.action && e.action({ link: n, text: i, openInNewTab: a });
  }
  return /* @__PURE__ */ u(G, { modal: !0, children: [
    /* @__PURE__ */ r(Z, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(N, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ r(V, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ r(Yt, { editor: e.editor, onSetLink: t }) })
  ] });
}
const cs = Ui.extend({
  inclusive: !1,
  parseHTML() {
    return [
      {
        tag: 'a[href]:not([data-type="button"]):not([href *= "javascript:" i])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return [
      "a",
      Se(this.options.HTMLAttributes, e, {
        class: "link"
      }),
      0
    ];
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      openOnClick: !0,
      button: ({ editor: t, t: n }) => ({
        component: Ua,
        componentProps: {
          editor: t,
          action: (i) => {
            const { link: a, text: o, openInNewTab: c } = i;
            t.chain().extendMarkRange("link").insertContent({
              type: "text",
              text: o,
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: a,
                    target: c ? "_blank" : ""
                  }
                }
              ]
            }).setLink({ href: a }).focus().run();
          },
          id: "linkk",
          isActive: () => t.isActive("link") || !1,
          disabled: !t.can().setLink({ href: "" }),
          icon: "Link",
          tooltip: n("editor.link.tooltip")
        }
      })
    };
  },
  addProseMirrorPlugins() {
    return [
      new Me({
        props: {
          handleClick: (e, t) => {
            const { schema: n, doc: i, tr: a } = e.state, o = Vi(i.resolve(t), n.marks.link);
            if (!o)
              return !1;
            const c = i.resolve(o.from), s = i.resolve(o.to), d = a.setSelection(new ae(c, s));
            e.dispatch(d);
          }
        }
      })
    ];
  }
}), ss = qi.extend({
  renderHTML() {
    return [
      "div",
      Se(this.options.HTMLAttributes, {
        "data-type": this.name
      }),
      ["hr"]
    ];
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.setHorizontalRule(),
          disabled: !t.can().setHorizontalRule(),
          icon: "Minus",
          shortcutKeys: ["mod", "alt", "S"],
          tooltip: n("editor.horizontalrule.tooltip")
        }
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-s": () => this.editor.commands.setHorizontalRule()
    };
  }
});
function Va(e) {
  var l;
  const {
    icon: t = void 0,
    // title = undefined,
    tooltip: n = void 0,
    // disabled = false,
    customClass: i = "",
    // color = undefined,
    // loading = false,
    // shortcutKeys = undefined,
    tooltipOptions: a = {},
    action: o = void 0,
    isActive: c = void 0,
    children: s
  } = e, d = be[t];
  return /* @__PURE__ */ u(pe, { children: [
    /* @__PURE__ */ r(ve, { asChild: !0, children: /* @__PURE__ */ u(
      we,
      {
        size: "sm",
        className: `richtext-w-[32px] richtext-h-[32px] ${i}`,
        disabled: c == null ? void 0 : c(),
        onClick: o,
        children: [
          d && /* @__PURE__ */ r(d, { className: "richtext-w-4 richtext-h-4" }),
          s && /* @__PURE__ */ r(ne, { children: s })
        ]
      }
    ) }),
    n && /* @__PURE__ */ r(de, { ...a, children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
      /* @__PURE__ */ r("div", { children: n }),
      !!((l = e == null ? void 0 : e.shortcutKeys) != null && l.length) && /* @__PURE__ */ r("span", { children: Ke(e == null ? void 0 : e.shortcutKeys) })
    ] }) })
  ] });
}
const qa = ["undo", "redo"], ls = Ki.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      depth: 100,
      newGroupDelay: 500,
      button: ({ editor: t, t: n }) => qa.map((i) => ({
        component: Va,
        componentProps: {
          action: () => {
            i === "undo" && t.chain().focus().undo().run(), i === "redo" && t.chain().focus().redo().run();
          },
          shortcutKeys: i === "undo" ? ["mod", "Z"] : ["shift", "mod", "Z"],
          disabled: i === "undo" ? !t.can().undo() : !t.can().redo(),
          isActive: () => i === "undo" ? !t.can().undo() : !t.can().redo(),
          icon: i === "undo" ? "Undo2" : "Redo2",
          tooltip: n(`editor.${i}.tooltip`)
        }
      }))
    };
  }
}), Ka = Wi.extend({
  content: "(block|columns)+"
  // echo editor is a block editor
});
function Wa(e, t, n = null) {
  return n ? e.createChecked({ index: t }, n) : e.createAndFill({ index: t });
}
function Ga(e) {
  if (e.cached.columnsNodeTypes)
    return e.cached.columnsNodeTypes;
  const t = {
    columns: e.nodes.columns,
    column: e.nodes.column
  };
  return e.cached.columnsNodeTypes = t, t;
}
function Za(e, t, n = null) {
  const i = Ga(e), a = [];
  for (let o = 0; o < t; o += 1) {
    const c = Wa(i.column, o, n);
    c && a.push(c);
  }
  return i.columns.createChecked({ cols: t }, a);
}
function Je({
  state: e,
  dispatch: t,
  type: n
}) {
  const i = De((o) => o.type.name === Ae.name)(e.selection), a = De((o) => o.type.name === ft.name)(e.selection);
  if (t && i && a) {
    const o = i.node, c = a.node.attrs.index, s = o.toJSON();
    let d = c;
    n === "delete" ? (d = c - 1, s.content.splice(c, 1)) : (d = n === "addBefore" ? c : c + 1, s.content.splice(d, 0, {
      type: "column",
      attrs: {
        index: c
      },
      content: [
        {
          type: "paragraph"
        }
      ]
    })), s.attrs.cols = s.content.length, s.content.forEach((f, g) => {
      f.attrs.index = g;
    });
    const l = kr.fromJSON(e.schema, s);
    let h = i.pos;
    l.content.forEach((f, g, x) => {
      x < d && (h += f.nodeSize);
    });
    const m = e.tr.setTime(Date.now());
    m.replaceWith(i.pos, i.pos + i.node.nodeSize, l).setSelection(
      ae.near(m.doc.resolve(h))
    ), t(m);
  }
  return !0;
}
function Tt({ state: e, dispatch: t, type: n }) {
  const i = De((o) => o.type.name === Ae.name)(e.selection), a = De((o) => o.type.name === ft.name)(e.selection);
  if (t && i && a) {
    const o = i.node, c = a.node.attrs.index;
    let s = 0;
    n === "before" ? s = (c - 1 + o.attrs.cols) % o.attrs.cols : s = (c + 1) % o.attrs.cols;
    let d = i.pos;
    o.content.forEach((h, m, f) => {
      f < s && (d += h.nodeSize);
    });
    const l = e.tr.setTime(Date.now());
    return l.setSelection(ae.near(l.doc.resolve(d))), t(l), !0;
  }
  return !1;
}
const Ja = 200, Ae = Le.create({
  name: "columns",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  content: "column{1,}",
  priority: Ja,
  addOptions() {
    return {
      HTMLAttributes: {
        class: "columns"
      }
    };
  },
  addAttributes() {
    return {
      cols: {
        default: 2,
        parseHTML: (e) => e.getAttribute("cols")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=grid]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["div", Se(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      insertColumns: (e) => ({ tr: t, dispatch: n, editor: i }) => {
        const a = Za(i.schema, e && e.cols || 3);
        if (n) {
          const o = t.selection.anchor + 1;
          t.replaceSelectionWith(a).scrollIntoView().setSelection(ae.near(t.doc.resolve(o)));
        }
        return !0;
      },
      addColBefore: () => ({ dispatch: e, state: t }) => Je({ dispatch: e, state: t, type: "addBefore" }),
      addColAfter: () => ({ dispatch: e, state: t }) => Je({ dispatch: e, state: t, type: "addAfter" }),
      deleteCol: () => ({ dispatch: e, state: t }) => Je({ dispatch: e, state: t, type: "delete" })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-G": () => this.editor.commands.insertColumns(),
      Tab: () => Tt({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "after"
      }),
      "Shift-Tab": () => Tt({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "before"
      })
    };
  }
}), ft = Le.create({
  name: "column",
  content: "block+",
  isolating: !0,
  addOptions() {
    return {
      HTMLAttributes: {
        class: "column"
      }
    };
  },
  addAttributes() {
    return {
      index: {
        default: 0,
        parseHTML: (e) => e.getAttribute("index")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=column]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["div", Se(this.options.HTMLAttributes, e), 0];
  }
}), ds = H.create({
  name: "columnActionButton",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: _,
        componentProps: {
          action: () => {
            t.chain().focus().insertColumns({ cols: 2 }).run();
          },
          icon: "Columns",
          tooltip: n("editor.columns.tooltip")
        }
      })
    };
  }
}), Xa = H.create({
  name: "selection",
  addProseMirrorPlugins() {
    const { editor: e } = this;
    return [
      new Me({
        key: new _e("selection"),
        props: {
          decorations(t) {
            return t.selection.empty || e.isFocused === !0 ? null : Pe.create(t.doc, [
              $e.inline(t.selection.from, t.selection.to, {
                class: "selection"
              })
            ]);
          }
        }
      })
    ];
  }
});
function Qa(e) {
  const { t } = E(), n = B(() => [
    {
      name: "paragraph",
      label: t("editor.paragraph.tooltip"),
      iconName: "Heading1",
      isActive: () => e.editor.isActive("paragraph") && !e.editor.isActive("orderedList") && !e.editor.isActive("bulletList") && !e.editor.isActive("taskList"),
      action: () => e.editor.chain().focus().clearNodes().run()
    },
    {
      name: "heading1",
      label: t("editor.heading.h1.tooltip"),
      isActive: () => e.editor.isActive("heading", { level: 1 }),
      iconName: "Heading1",
      action: () => e.editor.chain().focus().clearNodes().toggleHeading({ level: 1 }).run()
    },
    {
      name: "heading2",
      label: t("editor.heading.h2.tooltip"),
      isActive: () => e.editor.isActive("heading", { level: 2 }),
      iconName: "Heading2",
      action: () => e.editor.chain().focus().clearNodes().toggleHeading({ level: 2 }).run()
    },
    {
      name: "heading3",
      label: t("editor.heading.h3.tooltip"),
      isActive: () => e.editor.isActive("heading", { level: 3 }),
      iconName: "Heading3",
      action: () => e.editor.chain().focus().clearNodes().toggleHeading({ level: 3 }).run()
    },
    {
      name: "bulletList",
      label: t("editor.bulletlist.tooltip"),
      isActive: () => e.editor.isActive("bulletList"),
      iconName: "List",
      action: () => e.editor.chain().focus().clearNodes().toggleBulletList().run()
    },
    {
      name: "numberedList",
      label: t("editor.orderedlist.tooltip"),
      isActive: () => e.editor.isActive("orderedList"),
      iconName: "ListOrdered",
      action: () => e.editor.chain().focus().clearNodes().toggleOrderedList().run()
    },
    {
      name: "taskList",
      label: t("editor.tasklist.tooltip"),
      isActive: () => e.editor.isActive("taskList"),
      iconName: "ListTodo",
      action: () => e.editor.chain().focus().clearNodes().toggleTaskList().run()
    },
    {
      name: "blockquote",
      label: t("editor.blockquote.tooltip"),
      isActive: () => e.editor.isActive("blockquote"),
      iconName: "TextQuote",
      action: () => e.editor.chain().focus().clearNodes().toggleBlockquote().run()
    },
    {
      name: "codeBlock",
      label: t("editor.codeblock.tooltip"),
      isActive: () => e.editor.isActive("codeBlock"),
      iconName: "Code2",
      action: () => e.editor.chain().focus().clearNodes().toggleCodeBlock().run()
    }
  ], [e.editor, t]), i = B(() => n.filter((a) => a.isActive()).pop() ?? {
    label: "Empty"
  }, [n]);
  return /* @__PURE__ */ u(ce, { children: [
    /* @__PURE__ */ r(se, { asChild: !0, children: /* @__PURE__ */ u(D, { variant: "ghost", className: "richtext-h-[32px] richtext-flex richtext-gap-1 richtext-px-1.5", children: [
      /* @__PURE__ */ u("span", { className: "richtext-text-sm richtext-font-normal richtext-whitespace-nowrap", children: [
        " ",
        i == null ? void 0 : i.label
      ] }),
      /* @__PURE__ */ r(Bt, { className: "richtext-w-4 richtext-h-4" })
    ] }) }),
    /* @__PURE__ */ r(W, { hideWhenDetached: !0, className: "richtext-w-full richtext-p-1", align: "start", sideOffset: 5, children: n.map((a, o) => {
      var s;
      const c = be[a.iconName];
      return /* @__PURE__ */ r(
        le,
        {
          checked: ((s = a.isActive) == null ? void 0 : s.call(a)) || !1,
          onClick: () => a.action(),
          className: "richtext-cursor-pointer",
          children: /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-px-2", children: [
            /* @__PURE__ */ r(c, { className: "richtext-w-3 richtext-h3" }),
            /* @__PURE__ */ u("span", { children: [
              " ",
              a.label
            ] })
          ] })
        },
        `text-bubble-${o}`
      );
    }) })
  ] });
}
const Ya = H.create({
  name: "text-bubble",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      toolbar: !1,
      button: () => ({
        component: Qa,
        componentProps: {}
      })
    };
  }
});
function At({ types: e, node: t }) {
  return Array.isArray(e) && e.includes(t.type) || t.type === e;
}
const eo = H.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: ["paragraph"]
    };
  },
  addProseMirrorPlugins() {
    const e = new _e(this.name), t = Object.entries(this.editor.schema.nodes).map(([, n]) => n).filter((n) => this.options.notAfter.includes(n.name));
    return [
      new Me({
        key: e,
        appendTransaction: (n, i, a) => {
          const { doc: o, tr: c, schema: s } = a, d = e.getState(a), l = o.content.size, h = s.nodes[this.options.node];
          if (d)
            return c.insert(l, h.create());
        },
        state: {
          init: (n, i) => {
            const a = i.tr.doc.lastChild;
            return !At({ node: a, types: t });
          },
          apply: (n, i) => {
            if (!n.docChanged)
              return i;
            const a = n.doc.lastChild;
            return !At({ node: a, types: t });
          }
        }
      })
    ];
  }
}), hs = H.create({
  name: "base-kit",
  addExtensions() {
    const e = [];
    return this.options.document !== !1 && e.push(Ka.configure()), this.options.placeholder !== !1 && e.push(
      Gi.configure({
        placeholder: ({ node: t, pos: n, editor: i }) => {
          var a, o, c, s, d;
          return ((a = t == null ? void 0 : t.type) == null ? void 0 : a.name) === "columns" || ((o = t == null ? void 0 : t.content) == null ? void 0 : o.size) !== 0 ? "" : ((c = t == null ? void 0 : t.type) == null ? void 0 : c.name) === "heading" ? `${O.t(`editor.heading.h${t.attrs.level}.tooltip`)}` : ((s = t == null ? void 0 : t.type) == null ? void 0 : s.name) === "codeBlock" || ((d = t == null ? void 0 : t.type) == null ? void 0 : d.name) === "table" ? "" : i.extensionManager.extensions.some((l) => l.name === "slashCommand") ? O.t("editor.slash") : n === 0 ? O.t("editor.content") : O.t("editor.content");
        },
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && e.push(
      Zi.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.text !== !1 && e.push(Ji.configure()), this.options.textBubble !== !1 && e.push(Ya.configure()), this.options.gapcursor !== !1 && e.push(Xi.configure()), this.options.dropcursor !== !1 && e.push(
      Qi.configure({
        ...this.options.dropcursor,
        width: 2,
        class: "ProseMirror-dropcursor border-black"
      })
    ), this.options.characterCount !== !1 && e.push(Yi.configure(this.options.characterCount)), this.options.paragraph !== !1 && e.push(er.configure(this.options.paragraph)), this.options.hardBreak !== !1 && e.push(tr.configure(this.options.hardBreak)), this.options.listItem !== !1 && e.push(nr.configure(this.options.listItem)), this.options.textStyle !== !1 && e.push(ir.configure(this.options.textStyle)), this.options.trailingNode !== !1 && e.push(eo.configure(this.options.trailingNode)), this.options.selection !== !1 && e.push(Xa), this.options.multiColumn !== !1 && (e.push(ft), e.push(Ae)), e;
  }
}), us = H.create({
  name: "subAndSuperScript",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, extension: n, t: i }) => {
        const a = n.options.subscript, o = n.options.superscript, c = {
          component: _,
          componentProps: {
            action: () => t.commands.toggleSubscript(),
            isActive: () => t.isActive("subscript") || !1,
            disabled: !t.can().toggleSubscript(),
            icon: "Subscript",
            tooltip: i("editor.subscript.tooltip")
          }
        }, s = {
          component: _,
          componentProps: {
            action: () => t.commands.toggleSuperscript(),
            isActive: () => t.isActive("superscript") || !1,
            disabled: !t.can().toggleSuperscript(),
            icon: "Superscript",
            tooltip: i("editor.superscript.tooltip")
          }
        }, d = [];
        return a !== !1 && d.push(c), o !== !1 && d.push(s), d;
      }
    };
  },
  addExtensions() {
    const e = [];
    return this.options.subscript !== !1 && e.push(Ot.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(Pt.configure(this.options.superscript)), e;
  }
});
function to(e) {
  var n;
  const t = B(() => {
    var o;
    const i = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((c) => c.isActive());
    return i && !i.default ? {
      ...i,
      icon: i != null && i.icon ? i == null ? void 0 : i.icon : e == null ? void 0 : e.icon
    } : {
      title: e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ u(ce, { children: [
    /* @__PURE__ */ r(se, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        customClass: "!richtext-w-12 richtext-h-12",
        icon: e == null ? void 0 : e.icon,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(Qt, { className: "richtext-w-3 richtext-h-3 richtext-text-gray-500" })
      }
    ) }),
    /* @__PURE__ */ r(W, { className: "w-full", children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((i, a) => /* @__PURE__ */ u(
      le,
      {
        checked: t.title === i.title,
        onClick: i.action,
        className: "richtext-flex richtext-items-center richtext-gap-3",
        children: [
          /* @__PURE__ */ r(N, { name: i == null ? void 0 : i.icon }),
          /* @__PURE__ */ r("span", { className: "richtext-ml-1", children: i.title }),
          !!(i != null && i.shortcutKeys) && /* @__PURE__ */ r("span", { className: "richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", children: Ke(i.shortcutKeys) })
        ]
      },
      `more-mark-${a}`
    )) })
  ] });
}
const ms = H.create({
  name: "moreMark",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, extension: n, t: i }) {
        const a = n.options.subscript, o = n.options.superscript, c = {
          action: () => t.commands.toggleSubscript(),
          isActive: () => t.isActive("subscript") || !1,
          disabled: !t.can().toggleSubscript(),
          icon: "Subscript",
          title: i("editor.subscript.tooltip"),
          shortcutKeys: ["mod", "."]
        }, s = {
          action: () => t.commands.toggleSuperscript(),
          isActive: () => t.isActive("superscript") || !1,
          disabled: !t.can().toggleSuperscript(),
          icon: "Superscript",
          title: i("editor.superscript.tooltip"),
          shortcutKeys: ["mod", ","]
        }, d = [];
        return a !== !1 && d.push(c), o !== !1 && d.push(s), {
          component: to,
          componentProps: {
            icon: "Type",
            tooltip: i("editor.moremark"),
            disabled: !t.isEditable,
            items: d
          }
        };
      }
    };
  },
  addExtensions() {
    const e = [];
    return this.options.subscript !== !1 && e.push(Ot.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(Pt.configure(this.options.superscript)), e;
  }
}), fs = H.create({
  name: "indent",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "blockquote"],
      minIndent: te.min,
      maxIndent: te.max,
      button({ editor: t, t: n }) {
        return [
          {
            component: _,
            componentProps: {
              action: () => {
                t.commands.indent();
              },
              shortcutKeys: ["Tab"],
              icon: "IndentIncrease",
              tooltip: n("editor.indent.tooltip")
            }
          },
          {
            component: _,
            componentProps: {
              action: () => {
                t.commands.outdent();
              },
              shortcutKeys: ["Shift", "Tab"],
              icon: "IndentDecrease",
              tooltip: n("editor.outdent.tooltip")
            }
          }
        ];
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            parseHTML: (e) => {
              const t = e.dataset.indent;
              return (t ? Number.parseInt(t, 10) : 0) || 0;
            },
            renderHTML: (e) => e.indent ? { "data-indent": e.indent } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      indent: () => kt({
        delta: te.more,
        types: this.options.types
      }),
      outdent: () => kt({
        delta: te.less,
        types: this.options.types
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.indent(),
      "Shift-Tab": () => this.editor.commands.outdent()
    };
  }
});
function no(e) {
  return Number.parseFloat(e.replace("%", "")) / 100;
}
function io(e) {
  const { t } = E(), [n, i] = y("default");
  function a(c) {
    c === "default" ? e.editor.commands.unsetLineHeight() : e.editor.commands.setLineHeight(c), i(c);
  }
  const o = B(() => {
    const d = e.editor.extensionManager.extensions.find(
      (l) => l.name === "lineHeight"
    ).options.lineHeights.map((l) => ({
      label: no(l),
      value: l
    }));
    return d.unshift({
      label: t("editor.default"),
      value: "default"
    }), d;
  }, [e]);
  return /* @__PURE__ */ u(ce, { children: [
    /* @__PURE__ */ r(se, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        customClass: "!richtext-w-12 richtext-h-12",
        icon: "LineHeight",
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(N, { className: "richtext-w-3 richtext-h-3 richtext-ml-1 richtext-text-zinc-500", name: "MenuDown" })
      }
    ) }),
    /* @__PURE__ */ r(W, { className: "richtext-min-w-24", children: o == null ? void 0 : o.map((c, s) => /* @__PURE__ */ r(
      le,
      {
        checked: c.value === n,
        onClick: () => a(c.value),
        children: c.label
      },
      `lineHeight-${s}`
    )) })
  ] });
}
const ro = ["paragraph", "heading", "list_item", "todo_item"];
function ao(e, t) {
  const { selection: n, doc: i } = e;
  if (!n || !i || !(n instanceof ae || n instanceof jt))
    return e;
  const { from: a, to: o } = n, c = [], s = t && t !== $t ? t : null;
  if (i.nodesBetween(a, o, (d, l) => {
    const h = d.type;
    return ro.includes(h.name) ? ((d.attrs.lineHeight || null) !== s && c.push({
      node: d,
      pos: l,
      nodeType: h
    }), h.name !== "list_item" && h.name !== "todo_item") : !0;
  }), c.length === 0)
    return e;
  for (const d of c) {
    const { node: l, pos: h, nodeType: m } = d;
    let { attrs: f } = l;
    f = {
      ...f,
      lineHeight: s
    }, e = e.setNodeMarkup(h, m, f, l.marks);
  }
  return e;
}
function oo(e) {
  return ({ state: t, dispatch: n }) => {
    const { selection: i } = t;
    let { tr: a } = t;
    return a = a.setSelection(i), a = ao(a, e), a.docChanged ? (n && n(a), !0) : !1;
  };
}
const gs = H.create({
  name: "lineHeight",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "list_item", "todo_item"],
      lineHeights: xr,
      defaultHeight: $t,
      button({ editor: t, t: n }) {
        return {
          component: io,
          componentProps: {
            editor: t,
            tooltip: n("editor.lineheight.tooltip")
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (e) => e.style.lineHeight || this.options.defaultHeight,
            renderHTML: (e) => e.lineHeight === this.options.defaultHeight || !e.lineHeight ? {} : { style: `line-height: ${e.lineHeight}` }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setLineHeight: (e) => oo(e),
      unsetLineHeight: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "lineHeight"))
    };
  }
});
function co(e) {
  const t = [
    {
      name: "format",
      title: O.t("editor.slash.format"),
      commands: []
    },
    {
      name: "insert",
      title: O.t("editor.slash.insert"),
      commands: []
    }
  ];
  return e.forEach((n) => {
    n.name.toLowerCase() === "heading" && n.options.levels.forEach(
      (i) => {
        t[0].commands.push({
          name: `heading${i}`,
          label: O.t(`editor.heading.h${i}.tooltip`),
          aliases: [`h${i}`, "bt", `bt${i}`],
          iconName: `Heading${i}`,
          action: ({ editor: a, range: o }) => {
            a.chain().focus().deleteRange(o).setHeading({ level: i }).run();
          }
        });
      }
    ), n.name.toLowerCase() === "bulletlist" && t[0].commands.push({
      name: "bulletList",
      label: O.t("editor.bulletlist.tooltip"),
      aliases: ["ul", "yxlb"],
      iconName: "List",
      action: ({ editor: i, range: a }) => {
        i.chain().focus().deleteRange(a).toggleBulletList().run();
      }
    }), n.name.toLowerCase() === "orderedlist" && t[0].commands.push({
      name: "numberedList",
      label: O.t("editor.orderedlist.tooltip"),
      aliases: ["ol", "yxlb"],
      iconName: "ListOrdered",
      action: ({ editor: i, range: a }) => {
        i.chain().focus().deleteRange(a).toggleOrderedList().run();
      }
    }), n.name.toLowerCase() === "tasklist" && t[0].commands.push({
      name: "taskList",
      label: O.t("editor.tasklist.tooltip"),
      iconName: "ListTodo",
      description: "Task list with todo items",
      aliases: ["todo"],
      action: ({ editor: i, range: a }) => {
        i.chain().focus().deleteRange(a).toggleTaskList().run();
      }
    }), n.name.toLowerCase() === "blockquote" && t[0].commands.push({
      name: "blockquote",
      label: O.t("editor.blockquote.tooltip"),
      description: "插入引入格式",
      aliases: ["yr"],
      iconName: "TextQuote",
      action: ({ editor: i, range: a }) => {
        i.chain().focus().deleteRange(a).setBlockquote().run();
      }
    }), n.name.toLowerCase() === "table" && t[1].commands.push({
      name: "table",
      label: O.t("editor.table.tooltip"),
      iconName: "Table",
      description: "Insert a table",
      aliases: ["table", "bg", "biaoge", "biao"],
      shouldBeHidden: (i) => i.isActive("columns"),
      action: ({ editor: i, range: a }) => {
        i.chain().focus().deleteRange(a).insertTable({ rows: 3, cols: 3, withHeaderRow: !1 }).run();
      }
    }), n.name.toLowerCase() === "horizontalrule" && t[1].commands.push({
      name: "horizontalRule",
      label: O.t("editor.horizontalrule.tooltip"),
      iconName: "Minus",
      description: "Insert a horizontal divider",
      aliases: ["hr", "fgx", "fg"],
      action: ({ editor: i, range: a }) => {
        i.chain().focus().deleteRange(a).setHorizontalRule().run();
      }
    }), n.name.toLowerCase() === "columns" && t[1].commands.push({
      name: "columns",
      label: O.t("editor.columns.tooltip"),
      iconName: "Columns2",
      description: "Add two column content",
      action: ({ editor: i }) => {
        i.chain().focus().insertColumns({ cols: 2 }).run();
      }
    });
  }), t;
}
function so(e, t) {
  var S, z;
  const [n, i] = y(0), [a, o] = y(0), c = re(null), { t: s } = E(), d = re([]);
  Fe(t, () => ({
    onKeyDown: l
  })), A(() => {
    if (!c.current)
      return;
    const p = a * 1e3 + n, w = d.current[p];
    w && w.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [n, a]);
  function l({ event: p }) {
    return p.key === "ArrowUp" ? (h(), !0) : p.key === "ArrowDown" ? (m(), !0) : p.key === "Enter" ? (f(), !0) : !1;
  }
  function h() {
    var k;
    if (e.items.length === 0)
      return !1;
    let p = n - 1, w = a;
    p < 0 && (w = a - 1, p = ((k = e.items[w]) == null ? void 0 : k.commands.length) - 1 || 0), w < 0 && (w = e.items.length - 1, p = e.items[w].commands.length - 1), i(p), o(w);
  }
  function m() {
    if (e.items.length === 0)
      return !1;
    const p = e.items[a].commands;
    let w = n + 1, k = a;
    p.length - 1 < w && (w = 0, k = a + 1), e.items.length - 1 < k && (k = 0), i(w), o(k);
  }
  function f() {
    if (e.items.length === 0 || a === -1 || n === -1)
      return !1;
    g(a, n);
  }
  function g(p, w) {
    const k = e.items[p].commands[w];
    e.command(k);
  }
  function x(p, w) {
    g(p, w);
  }
  function b(p, w, k) {
    d.current[p * 1e3 + w] = k;
  }
  return /* @__PURE__ */ r(
    "div",
    {
      className: "!richtext-bg-white richtext-rounded-lg dark:!richtext-bg-black richtext-shadow-sm !richtext-border !richtext-border-neutral-200 dark:!richtext-border-neutral-800 !richtext-text-black richtext-max-h-[min(80vh,24rem)] richtext-overflow-auto richtext-flex-wrap richtext-mb-8 richtext-p-1",
      ref: c,
      children: (S = e == null ? void 0 : e.items) != null && S.length ? /* @__PURE__ */ r("div", { className: "richtext-grid richtext-grid-cols-1 richtext-gap-0.5 richtext-min-w-48", children: (z = e == null ? void 0 : e.items) == null ? void 0 : z.map((p, w) => /* @__PURE__ */ u(ot, { children: [
        /* @__PURE__ */ r("div", { className: "!richtext-text-neutral-500 richtext-text-[0.65rem] richtext-col-[1/-1] richtext-mx-2 richtext-mt-2 richtext-font-semibold richtext-tracking-wider richtext-select-none richtext-uppercase first:richtext-mt-0.5", children: p.title }),
        p.commands.map((k, I) => /* @__PURE__ */ u(
          "button",
          {
            className: T("richtext-flex richtext-items-center richtext-gap-3 richtext-px-2 richtext-py-1.5 richtext-text-sm !richtext-text-neutral-800 dark:!richtext-text-neutral-200 richtext-text-left richtext-w-full richtext-rounded-sm richtext-outline-none richtext-transition-colors !richtext-bg-transparent hover:!richtext-bg-accent ", {
              "slash-command-active": a === w && n === I
            }),
            ref: (R) => b(w, I, R),
            onClick: () => x(w, I),
            children: [
              k.iconUrl && /* @__PURE__ */ r("img", { className: "richtext-w-6 richtext-h-6", src: k.iconUrl, alt: "" }),
              k.iconName && /* @__PURE__ */ r(N, { name: k.iconName, className: "!richtext-mr-1 !richtext-text-lg" }),
              k.label
            ]
          },
          `command-${I}`
        ))
      ] }, `slash-${p.title}`)) }) : /* @__PURE__ */ r("div", { className: "richtext-p-3", children: /* @__PURE__ */ r("span", { className: "richtext-text-xs richtext-text-gray-800 dark:richtext-text-gray-100", children: s("editor.slash.empty") }) })
    }
  );
}
const lo = je(so), ee = "slashCommand";
let C;
const xs = H.create({
  name: ee,
  priority: 200,
  onCreate() {
    C = lt("body", {
      interactive: !0,
      trigger: "manual",
      placement: "bottom-start",
      theme: "slash-command",
      maxWidth: "16rem",
      offset: [16, 8],
      popperOptions: {
        strategy: "fixed",
        modifiers: [
          {
            name: "flip",
            enabled: !1
          }
        ]
      }
    });
  },
  addProseMirrorPlugins() {
    return [
      Dt({
        editor: this.editor,
        char: "/",
        allowSpaces: !0,
        startOfLine: !0,
        pluginKey: new _e(ee),
        allow: ({ state: e, range: t }) => {
          var l, h, m;
          const n = e.doc.resolve(t.from), i = n.depth === 1, a = n.parent.type.name === "paragraph", o = ((l = n.parent.textContent) == null ? void 0 : l.charAt(0)) === "/", c = this.editor.isActive("column"), s = (m = n.parent.textContent) == null ? void 0 : m.slice(
            Math.max(0, (h = n.parent.textContent) == null ? void 0 : h.indexOf("/"))
          ), d = !(s != null && s.endsWith("  "));
          return (i && a && o || c && a && o) && d;
        },
        command: ({ editor: e, range: t, props: n }) => {
          const { view: i } = e;
          n.action({ editor: e, range: t }), i.focus();
        },
        items: ({ query: e, editor: t }) => co(t.extensionManager.extensions).map((c) => ({
          ...c,
          commands: c.commands.filter((s) => {
            const d = s.label.toLowerCase().trim(), l = e.toLowerCase().trim();
            if (s.aliases) {
              const h = s.aliases.map((g) => g.toLowerCase().trim()), m = d.match(l), f = h.some((g) => g.match(l));
              return m || f;
            }
            return d.match(l);
          }).filter(
            (s) => s.shouldBeHidden ? !s.shouldBeHidden(this.editor) : !0
          )
        })).filter((c) => c.commands.length > 0).map((c) => ({
          ...c,
          commands: c.commands.map((s) => ({
            ...s,
            isEnabled: !0
          }))
        })),
        render: () => {
          let e, t = null;
          return {
            onStart: (n) => {
              var o;
              e = new ct(lo, {
                props: n,
                editor: n.editor
              });
              const { view: i } = n.editor, a = () => {
                if (!n.clientRect)
                  return n.editor.storage[ee].rect;
                const c = n.clientRect();
                if (!c)
                  return n.editor.storage[ee].rect;
                let s = c.y;
                if (c.top + e.element.offsetHeight + 40 > window.innerHeight) {
                  const d = c.top + e.element.offsetHeight - window.innerHeight + 40;
                  s = c.y - d;
                }
                return new DOMRect(c.x, s, c.width, c.height);
              };
              t = () => {
                C == null || C[0].setProps({
                  getReferenceClientRect: a
                });
              }, (o = i.dom.parentElement) == null || o.addEventListener("scroll", t), C == null || C[0].setProps({
                getReferenceClientRect: a,
                appendTo: () => document.body,
                content: e.element
              }), C == null || C[0].show();
            },
            onUpdate(n) {
              var c;
              e.updateProps(n);
              const { view: i } = n.editor, a = () => {
                if (!n.clientRect)
                  return n.editor.storage[ee].rect;
                const s = n.clientRect();
                return s ? new DOMRect(s.x, s.y, s.width, s.height) : n.editor.storage[ee].rect;
              }, o = () => {
                C == null || C[0].setProps({
                  getReferenceClientRect: a
                });
              };
              (c = i.dom.parentElement) == null || c.addEventListener("scroll", o), n.editor.storage[ee].rect = n.clientRect ? a() : {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              }, C == null || C[0].setProps({
                getReferenceClientRect: a
              });
            },
            onKeyDown(n) {
              var i;
              return n.event.key === "Escape" ? (C == null || C[0].hide(), !0) : (C != null && C[0].state.isShown || C == null || C[0].show(), (i = e.ref) == null ? void 0 : i.onKeyDown(n));
            },
            onExit(n) {
              var i;
              if (C == null || C[0].hide(), t) {
                const { view: a } = n.editor;
                (i = a.dom.parentElement) == null || i.removeEventListener("scroll", t);
              }
              e.destroy();
            }
          };
        }
      })
    ];
  },
  addStorage() {
    return {
      rect: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    };
  }
});
function ho(e, t, n) {
  if (!e.doc)
    return e;
  const i = e.doc.nodeAt(t);
  if (!i || n === i.attrs.backgroundColor)
    return e;
  const a = {
    ...i.attrs,
    backgroundColor: n
  };
  return e.setNodeMarkup(t, i.type, a, i.marks);
}
function uo(e, t, n) {
  const { doc: i, selection: a } = e;
  return !i || !a || !(a instanceof Cr) || a.forEachCell((o, c) => {
    e = ho(e, c, n);
  }), e;
}
function Lt(e, t) {
  return ({ tr: n, state: i, dispatch: a }) => {
    const { selection: o } = i;
    return n = n.setSelection(o), n = uo(n, t, e), n.docChanged ? (a == null || a(n), !0) : !1;
  };
}
const mo = H.create({
  name: "tableCellBackground",
  addOptions() {
    return {
      types: ["tableCell"],
      HTMLAttributes: {}
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          backgroundColor: {
            parseHTML: (e) => e.style.backgroundColor || "",
            renderHTML: (e) => !e.backgroundColor || e.backgroundColor === "" ? {} : {
              style: `background-color: ${e.backgroundColor}`
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTableCellBackground: (e) => Lt(e, this.options),
      unsetTableCellBackground: () => Lt("", this.options)
    };
  }
}), fo = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, go = /CrOS/, xo = /android|ipad|playbook|silk/i;
function St(e = {}) {
  let t = e.ua || typeof navigator < "u" && navigator.userAgent;
  return t && typeof t == "object" && t.headers && typeof t.headers["user-agent"] == "string" && (t = t.headers["user-agent"]), typeof t != "string" ? !1 : !!(fo.test(t) && !go.test(t) || e.tablet && xo.test(t) || e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && t.includes("Macintosh") && t.includes("Safari"));
}
const Mt = (e) => Array.from({ length: e }).map((t, n) => n + 1);
function _o(e) {
  var h;
  const [t, n] = y(!0), [i, a] = y({
    rows: St() ? He : Ee,
    cols: St() ? He : Ee
  }), [o, c] = y({
    rows: Ie,
    cols: Ie
  });
  function s(m, f) {
    m === i.rows && a((g) => ({
      ...g,
      rows: Math.min(m + 1, He)
    })), f === i.cols && a((g) => ({
      ...g,
      cols: Math.min(f + 1, He)
    })), c({
      rows: m,
      cols: f
    });
  }
  function d(m, f) {
    e == null || e.createTable({ rows: m, cols: f, withHeaderRow: t }), l();
  }
  function l() {
    n(!1), a({
      rows: Ee,
      cols: Ee
    }), c({
      rows: Ie,
      cols: Ie
    });
  }
  return /* @__PURE__ */ u(G, { modal: !0, children: [
    /* @__PURE__ */ r(Z, { asChild: !0, children: e == null ? void 0 : e.children }),
    /* @__PURE__ */ r(V, { className: "richtext-w-full !richtext-p-2", align: "start", side: "bottom", children: /* @__PURE__ */ u("div", { className: "richtext-p-0 table-grid-size-editor", children: [
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-flex-col richtext-flex-wrap richtext-justify-between richtext-gap-1", children: (h = Mt(i == null ? void 0 : i.rows)) == null ? void 0 : h.map((m) => {
        var f;
        return /* @__PURE__ */ r("div", { className: "richtext-flex richtext-gap-1", children: (f = Mt(i == null ? void 0 : i.cols)) == null ? void 0 : f.map((g) => /* @__PURE__ */ r(
          "div",
          {
            className: `richtext-cursor-pointer richtext-border-border ${g <= o.cols && m <= o.rows && "!richtext-bg-foreground tableCellActive"}`,
            onMouseOver: () => s(m, g),
            onMouseDown: () => d(m, g),
            children: /* @__PURE__ */ r("div", { className: "richtext-w-4 richtext-h-4 richtext-p-1 !richtext-border richtext-rounded-[2px] richtext-box-border richtext-border-solid !richtext-border-border" })
          },
          `c-${g}`
        )) }, `r-${m}`);
      }) }),
      /* @__PURE__ */ u("div", { className: "richtext-mt-2 richtext-text-sm richtext-text-center richtext-text-zinc-600", children: [
        o.rows,
        " ",
        "x",
        o.cols
      ] })
    ] }) })
  ] });
}
function bo(e) {
  function t(n) {
    e.disabled || e.editor.chain().focus().insertTable({ ...n, withHeaderRow: !1 }).run();
  }
  return /* @__PURE__ */ r(_o, { createTable: t, children: /* @__PURE__ */ r(
    _,
    {
      icon: e == null ? void 0 : e.icon,
      tooltip: e == null ? void 0 : e.tooltip,
      disabled: e == null ? void 0 : e.disabled,
      color: e == null ? void 0 : e.color,
      action: e == null ? void 0 : e.action,
      isActive: e == null ? void 0 : e.isActive
    }
  ) });
}
const _s = rr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: t, t: n }) => ({
        component: bo,
        componentProps: {
          disabled: t.isActive("table") || !1,
          icon: "Table",
          tooltip: n("editor.table.tooltip"),
          editor: t
        }
      })
    };
  },
  addExtensions() {
    return [
      ar.configure(this.options.tableRow),
      or.configure(this.options.tableHeader),
      cr.configure(this.options.tableCell),
      mo.configure(this.options.tableCellBackground)
    ];
  }
}), bs = H.create({
  name: "painter",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: _,
        componentProps: {
          action: () => {
            t.commands.setPainter(t == null ? void 0 : t.state.selection.$head.marks());
          },
          icon: "PaintRoller",
          tooltip: n("editor.format")
        }
      })
    };
  },
  addCommands() {
    return {
      setPainter: (e) => ({
        view: {
          dispatch: t,
          state: { tr: n },
          dom: i
        }
      }) => {
        const c = `url("data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M9 22v-6H4V7q0-1.65 1.175-2.825T8 3h12v13h-5v6zM6 10h12V5h-1v4h-2V5h-1v2h-2V5H8q-.825 0-1.412.588T6 7zm0 4h12v-2H6zm0 0v-2z"/></svg>')}"), auto`;
        return i.style.cursor = c, t(n.setMeta("painterAction", { type: "start", marks: e })), !0;
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      new Me({
        key: new _e("format-painter"),
        state: {
          init: () => [],
          apply: (e, t) => {
            const n = e.getMeta("painterAction");
            return n && n.type === "start" ? t = n.marks : n && n.type === "end" && (t = []), t;
          }
        },
        props: {
          handleDOMEvents: {
            mousedown(e, t) {
              const n = this.getState(e.state);
              if (!n || n.length === 0)
                return e.dom.style.cursor = "", !1;
              const i = () => {
                document.removeEventListener("mouseup", i);
                let {
                  dispatch: a,
                  state: { tr: o, selection: c },
                  dom: s
                } = e;
                s.style.cursor = "", o = o.removeMark(c.from, c.to);
                for (const d of n)
                  d.type.name !== "link" && (o = o.addMark(c.from, c.to, d));
                a(o.setMeta("painterAction", { type: "end" }));
              };
              return document.addEventListener("mouseup", i), !0;
            }
          }
        }
      })
    ];
  }
});
function wo({ editor: e, ...t }) {
  const { t: n } = E(), [i, a] = y(-1), [o, c] = y([]), [s, d] = y(""), [l, h] = y(""), [m, f] = y(!1), [g, x] = y(!1);
  return A(() => {
    m || (d(""), h(""), a(-1), c([]), e.commands.setSearchTerm(""), e.commands.setReplaceTerm(""));
  }, [e, m]), A(() => {
    m && e && e.commands && e.commands.setSearchTerm && e.commands.setSearchTerm(s);
  }, [m, s, e]), A(() => {
    m && e && e.commands && e.commands.setReplaceTerm && e.commands.setReplaceTerm(l);
  }, [m, l, e]), A(() => {
    if (!e)
      return;
    const b = e.extensionManager.extensions.find((z) => z.name === Co.name);
    if (!b)
      return;
    const S = () => {
      if (!m)
        return;
      const z = b ? b.storage.currentIndex : -1, p = b ? b.storage.results : [];
      a((w) => w !== z ? z : w), c((w) => Nr(w, p) ? w : p);
    };
    return window.addEventListener(rt, S), () => {
      b && window.removeEventListener(rt, S);
    };
  }, [m, e]), /* @__PURE__ */ u(
    G,
    {
      open: m,
      onOpenChange: f,
      children: [
        /* @__PURE__ */ r(
          Z,
          {
            disabled: t == null ? void 0 : t.disabled,
            asChild: !0,
            children: /* @__PURE__ */ r(
              _,
              {
                tooltip: t == null ? void 0 : t.tooltip,
                isActive: t == null ? void 0 : t.isActive,
                disabled: t == null ? void 0 : t.disabled,
                children: /* @__PURE__ */ r(N, { name: t == null ? void 0 : t.icon })
              }
            )
          }
        ),
        /* @__PURE__ */ u(
          V,
          {
            hideWhenDetached: !0,
            className: "richtext-w-full",
            align: "start",
            side: "bottom",
            children: [
              /* @__PURE__ */ u("div", { className: "richtext-mb-[6px] richtext-flex richtext-items-center richtext-justify-between", children: [
                /* @__PURE__ */ r(ie, { children: n("editor.search.dialog.text") }),
                /* @__PURE__ */ r("span", { className: "richtext-font-semibold", children: o.length ? `${i + 1}/${o.length}` : "0/0" })
              ] }),
              /* @__PURE__ */ u("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5 richtext-mb-[10px]", children: [
                /* @__PURE__ */ r(
                  ge,
                  {
                    type: "text",
                    required: !0,
                    className: "richtext-w-full",
                    placeholder: "Text",
                    autoFocus: !0,
                    value: s,
                    onChange: (b) => d(b.target.value)
                  }
                ),
                /* @__PURE__ */ r(D, { disabled: !o.length, className: "richtext-flex-1", onClick: e.commands.goToPrevSearchResult, children: /* @__PURE__ */ r(N, { name: "ChevronUp" }) }),
                /* @__PURE__ */ r(D, { disabled: !o.length, className: "richtext-flex-1", onClick: e.commands.goToNextSearchResult, children: /* @__PURE__ */ r(N, { name: "ChevronDown" }) })
              ] }),
              /* @__PURE__ */ r(ie, { className: "richtext-mb-[6px]", children: n("editor.replace.dialog.text") }),
              /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5 richtext-mb-[5px]", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
                ge,
                {
                  type: "text",
                  required: !0,
                  className: "richtext-w-80",
                  placeholder: "Text",
                  value: l,
                  onChange: (b) => h(b.target.value)
                }
              ) }) }),
              /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-space-x-2 richtext-mb-[10px]", children: [
                /* @__PURE__ */ r(
                  mt,
                  {
                    checked: g,
                    onCheckedChange: (b) => {
                      x(b), e.commands.setCaseSensitive(b);
                    }
                  }
                ),
                /* @__PURE__ */ r(ie, { children: n("editor.replace.caseSensitive") })
              ] }),
              /* @__PURE__ */ u("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                /* @__PURE__ */ r(D, { disabled: !o.length, className: "richtext-flex-1", onClick: e.commands.replace, children: n("editor.replace.dialog.text") }),
                /* @__PURE__ */ r(D, { disabled: !o.length, className: "richtext-flex-1", onClick: e.commands.replaceAll, children: n("editor.replaceAll.dialog.text") })
              ] })
            ]
          }
        )
      ]
    }
  );
}
const Ne = (e, t) => t(e.tr);
function po(e, t, n) {
  return RegExp(t ? e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") : e, n ? "gu" : "gui");
}
function vo(e, t, n) {
  const i = [];
  let a = [];
  const o = [];
  let c = 0;
  if (!t)
    return { decorationsToReturn: [], results: [] };
  e == null || e.descendants((s, d) => {
    s.isText ? a[c] ? a[c] = {
      text: a[c].text + s.text,
      pos: a[c].pos
    } : a[c] = {
      text: `${s.text}`,
      pos: d
    } : c += 1;
  }), a = a.filter(Boolean);
  for (let s = 0; s < a.length; s += 1) {
    const { text: d, pos: l } = a[s], h = [...d.matchAll(t)];
    for (let m = 0; m < h.length; m += 1) {
      const f = h[m];
      if (f[0] === "")
        break;
      f.index !== void 0 && o.push({
        from: l + f.index,
        to: l + f.index + f[0].length
      });
    }
  }
  for (let s = 0; s < o.length; s += 1) {
    const d = o[s];
    i.push($e.inline(d.from, d.to, { class: n }));
  }
  return {
    decorationsToReturn: i,
    results: o
  };
}
function zt(e, t, { state: n, dispatch: i }) {
  if (!t[0])
    return;
  const { from: o, to: c } = t[0];
  i && i(n.tr.insertText(e, o, c));
}
function yo(e, t, n, i) {
  const a = t + 1;
  if (!i[a])
    return null;
  const { from: o, to: c } = i[t], s = c - o - e.length + n, { from: d, to: l } = i[a];
  return i[a] = {
    to: l - s,
    from: d - s
  }, [s, i];
}
function ko(e, t, { tr: n, dispatch: i }) {
  let a = 0, o = t.slice();
  if (!o.length)
    return !1;
  for (let c = 0; c < o.length; c += 1) {
    const { from: s, to: d } = o[c];
    n.insertText(e, s, d);
    const l = yo(e, c, a, o);
    l && (a = l[0], o = l[1]);
  }
  return i(n), !0;
}
function Rt({ view: e, tr: t, searchResults: n, searchResultCurrentClass: i, gotoIndex: a }) {
  const o = n[a];
  if (o) {
    const c = t.setMeta("directDecoration", {
      fromPos: o.from,
      toPos: o.to,
      attrs: { class: i }
    });
    return e == null || e.dispatch(c), setTimeout(() => {
      const s = window.document.querySelector(`.${i}`);
      s && dt(s, { behavior: "smooth", scrollMode: "if-needed" });
    }, 0), !0;
  }
  return !1;
}
const rt = "ON_SEARCH_RESULTS", ue = new CustomEvent(rt), Co = H.create({
  name: "search",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      searchTerm: "",
      replaceTerm: "",
      results: [],
      currentIndex: 0,
      searchResultClass: "search-result",
      searchResultCurrentClass: "search-result-current",
      caseSensitive: !1,
      disableRegex: !1,
      onChange: () => {
      },
      button: ({ editor: t, t: n }) => ({
        component: wo,
        componentProps: {
          action: () => {
          },
          icon: "SearchAndReplace",
          tooltip: n("editor.searchAndReplace.tooltip"),
          isActive: () => !1,
          disabled: !1,
          editor: t
        }
      })
    };
  },
  addStorage() {
    return {
      results: [],
      currentIndex: -1
    };
  },
  addCommands() {
    return {
      setSearchTerm: (e) => ({ state: t, dispatch: n }) => (this.options.searchTerm = e, this.storage.results = [], this.storage.currentIndex = 0, window.dispatchEvent(ue), Ne(t, n), !1),
      setReplaceTerm: (e) => ({ state: t, dispatch: n }) => (this.options.replaceTerm = e, Ne(t, n), !1),
      setCaseSensitive: (e) => ({ state: t, dispatch: n }) => (this.options.caseSensitive = e, Ne(t, n), !1),
      replace: () => ({ state: e, dispatch: t }) => {
        const { replaceTerm: n } = this.options, { currentIndex: i, results: a } = this.storage, o = a[i];
        return o ? (zt(n, [o], { state: e, dispatch: t }), this.storage.results.splice(i, 1)) : (zt(n, a, { state: e, dispatch: t }), this.storage.results.shift()), window.dispatchEvent(ue), Ne(e, t), !1;
      },
      replaceAll: () => ({ state: e, tr: t, dispatch: n }) => {
        const { replaceTerm: i } = this.options, { results: a } = this.storage;
        return ko(i, a, { tr: t, dispatch: n }), this.storage.currentIndex = -1, this.storage.results = [], window.dispatchEvent(ue), Ne(e, n), !1;
      },
      goToPrevSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: n } = this.options, { currentIndex: i, results: a } = this.storage, o = (i + a.length - 1) % a.length;
        return this.storage.currentIndex = o, window.dispatchEvent(ue), Rt({
          view: e,
          tr: t,
          searchResults: a,
          searchResultCurrentClass: n,
          gotoIndex: o
        });
      },
      goToNextSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: n } = this.options, { currentIndex: i, results: a } = this.storage, o = (i + 1) % a.length;
        return this.storage.currentIndex = o, this.options.onChange && this.options.onChange(), window.dispatchEvent(ue), Rt({
          view: e,
          tr: t,
          searchResults: a,
          searchResultCurrentClass: n,
          gotoIndex: o
        });
      }
    };
  },
  addProseMirrorPlugins() {
    const e = this;
    return [
      new Me({
        key: new _e("search"),
        state: {
          init() {
            return Pe.empty;
          },
          apply(t) {
            const { doc: n, docChanged: i } = t, { searchTerm: a, searchResultClass: o, searchResultCurrentClass: c, disableRegex: s, caseSensitive: d } = e.options;
            if (i || a) {
              const { decorationsToReturn: l, results: h } = vo(
                n,
                po(a, s, d),
                o
              );
              if (e.storage.results = h, e.storage.currentIndex > h.length - 1 && (e.storage.currentIndex = 0), window.dispatchEvent(ue), t.getMeta("directDecoration")) {
                const { fromPos: m, toPos: f, attrs: g } = t.getMeta("directDecoration");
                l.push($e.inline(m, f, g));
              } else
                h.length && (l[0] = $e.inline(h[0].from, h[0].to, {
                  class: c
                }));
              return Pe.create(n, l);
            }
            return Pe.empty;
          }
        },
        props: {
          decorations(t) {
            return this.getState(t);
          }
        }
      })
    ];
  }
}), xe = {
  100: "💯",
  1234: "🔢",
  grinning: "😀",
  smiley: "😃",
  smile: "😄",
  grin: "😁",
  laughing: "😆",
  satisfied: "😆",
  sweat_smile: "😅",
  rofl: "🤣",
  joy: "😂",
  slightly_smiling_face: "🙂",
  upside_down_face: "🙃",
  wink: "😉",
  blush: "😊",
  innocent: "😇",
  smiling_face_with_three_hearts: "🥰",
  heart_eyes: "😍",
  star_struck: "🤩",
  kissing_heart: "😘",
  kissing: "😗",
  relaxed: "☺️",
  kissing_closed_eyes: "😚",
  kissing_smiling_eyes: "😙",
  smiling_face_with_tear: "🥲",
  yum: "😋",
  stuck_out_tongue: "😛",
  stuck_out_tongue_winking_eye: "😜",
  zany_face: "🤪",
  stuck_out_tongue_closed_eyes: "😝",
  money_mouth_face: "🤑",
  hugs: "🤗",
  hand_over_mouth: "🤭",
  shushing_face: "🤫",
  thinking: "🤔",
  zipper_mouth_face: "🤐",
  raised_eyebrow: "🤨",
  neutral_face: "😐",
  expressionless: "😑",
  no_mouth: "😶",
  smirk: "😏",
  unamused: "😒",
  roll_eyes: "🙄",
  grimacing: "😬",
  lying_face: "🤥",
  relieved: "😌",
  pensive: "😔",
  sleepy: "😪",
  drooling_face: "🤤",
  sleeping: "😴",
  mask: "😷",
  face_with_thermometer: "🤒",
  face_with_head_bandage: "🤕",
  nauseated_face: "🤢",
  vomiting_face: "🤮",
  sneezing_face: "🤧",
  hot_face: "🥵",
  cold_face: "🥶",
  woozy_face: "🥴",
  dizzy_face: "😵",
  exploding_head: "🤯",
  cowboy_hat_face: "🤠",
  partying_face: "🥳",
  disguised_face: "🥸",
  sunglasses: "😎",
  nerd_face: "🤓",
  monocle_face: "🧐",
  confused: "😕",
  worried: "😟",
  slightly_frowning_face: "🙁",
  frowning_face: "☹️",
  open_mouth: "😮",
  hushed: "😯",
  astonished: "😲",
  flushed: "😳",
  pleading_face: "🥺",
  frowning: "😦",
  anguished: "😧",
  fearful: "😨",
  cold_sweat: "😰",
  disappointed_relieved: "😥",
  cry: "😢",
  sob: "😭",
  scream: "😱",
  confounded: "😖",
  persevere: "😣",
  disappointed: "😞",
  sweat: "😓",
  weary: "😩",
  tired_face: "😫",
  yawning_face: "🥱",
  triumph: "😤",
  rage: "😡",
  pout: "😡",
  angry: "😠",
  cursing_face: "🤬",
  smiling_imp: "😈",
  imp: "👿",
  skull: "💀",
  skull_and_crossbones: "☠️",
  hankey: "💩",
  poop: "💩",
  shit: "💩",
  clown_face: "🤡",
  japanese_ogre: "👹",
  japanese_goblin: "👺",
  ghost: "👻",
  alien: "👽",
  space_invader: "👾",
  robot: "🤖",
  smiley_cat: "😺",
  smile_cat: "😸",
  joy_cat: "😹",
  heart_eyes_cat: "😻",
  smirk_cat: "😼",
  kissing_cat: "😽",
  scream_cat: "🙀",
  crying_cat_face: "😿",
  pouting_cat: "😾",
  see_no_evil: "🙈",
  hear_no_evil: "🙉",
  speak_no_evil: "🙊",
  kiss: "💋",
  love_letter: "💌",
  cupid: "💘",
  gift_heart: "💝",
  sparkling_heart: "💖",
  heartpulse: "💗",
  heartbeat: "💓",
  revolving_hearts: "💞",
  two_hearts: "💕",
  heart_decoration: "💟",
  heavy_heart_exclamation: "❣️",
  broken_heart: "💔",
  heart: "❤️",
  orange_heart: "🧡",
  yellow_heart: "💛",
  green_heart: "💚",
  blue_heart: "💙",
  purple_heart: "💜",
  brown_heart: "🤎",
  black_heart: "🖤",
  white_heart: "🤍",
  anger: "💢",
  boom: "💥",
  collision: "💥",
  dizzy: "💫",
  sweat_drops: "💦",
  dash: "💨",
  hole: "🕳️",
  bomb: "💣",
  speech_balloon: "💬",
  eye_speech_bubble: "👁️‍🗨️",
  left_speech_bubble: "🗨️",
  right_anger_bubble: "🗯️",
  thought_balloon: "💭",
  zzz: "💤",
  wave: "👋",
  raised_back_of_hand: "🤚",
  raised_hand_with_fingers_splayed: "🖐️",
  hand: "✋",
  raised_hand: "✋",
  vulcan_salute: "🖖",
  ok_hand: "👌",
  pinched_fingers: "🤌",
  pinching_hand: "🤏",
  v: "✌️",
  crossed_fingers: "🤞",
  love_you_gesture: "🤟",
  metal: "🤘",
  call_me_hand: "🤙",
  point_left: "👈",
  point_right: "👉",
  point_up_2: "👆",
  middle_finger: "🖕",
  fu: "🖕",
  point_down: "👇",
  point_up: "☝️",
  "+1": "👍",
  thumbsup: "👍",
  "-1": "👎",
  thumbsdown: "👎",
  fist_raised: "✊",
  fist: "✊",
  fist_oncoming: "👊",
  facepunch: "👊",
  punch: "👊",
  fist_left: "🤛",
  fist_right: "🤜",
  clap: "👏",
  raised_hands: "🙌",
  open_hands: "👐",
  palms_up_together: "🤲",
  handshake: "🤝",
  pray: "🙏",
  writing_hand: "✍️",
  nail_care: "💅",
  selfie: "🤳",
  muscle: "💪",
  mechanical_arm: "🦾",
  mechanical_leg: "🦿",
  leg: "🦵",
  foot: "🦶",
  ear: "👂",
  ear_with_hearing_aid: "🦻",
  nose: "👃",
  brain: "🧠",
  anatomical_heart: "🫀",
  lungs: "🫁",
  tooth: "🦷",
  bone: "🦴",
  eyes: "👀",
  eye: "👁️",
  tongue: "👅",
  lips: "👄",
  baby: "👶",
  child: "🧒",
  boy: "👦",
  girl: "👧",
  adult: "🧑",
  blond_haired_person: "👱",
  man: "👨",
  bearded_person: "🧔",
  red_haired_man: "👨‍🦰",
  curly_haired_man: "👨‍🦱",
  white_haired_man: "👨‍🦳",
  bald_man: "👨‍🦲",
  woman: "👩",
  red_haired_woman: "👩‍🦰",
  person_red_hair: "🧑‍🦰",
  curly_haired_woman: "👩‍🦱",
  person_curly_hair: "🧑‍🦱",
  white_haired_woman: "👩‍🦳",
  person_white_hair: "🧑‍🦳",
  bald_woman: "👩‍🦲",
  person_bald: "🧑‍🦲",
  blond_haired_woman: "👱‍♀️",
  blonde_woman: "👱‍♀️",
  blond_haired_man: "👱‍♂️",
  older_adult: "🧓",
  older_man: "👴",
  older_woman: "👵",
  frowning_person: "🙍",
  frowning_man: "🙍‍♂️",
  frowning_woman: "🙍‍♀️",
  pouting_face: "🙎",
  pouting_man: "🙎‍♂️",
  pouting_woman: "🙎‍♀️",
  no_good: "🙅",
  no_good_man: "🙅‍♂️",
  ng_man: "🙅‍♂️",
  no_good_woman: "🙅‍♀️",
  ng_woman: "🙅‍♀️",
  ok_person: "🙆",
  ok_man: "🙆‍♂️",
  ok_woman: "🙆‍♀️",
  tipping_hand_person: "💁",
  information_desk_person: "💁",
  tipping_hand_man: "💁‍♂️",
  sassy_man: "💁‍♂️",
  tipping_hand_woman: "💁‍♀️",
  sassy_woman: "💁‍♀️",
  raising_hand: "🙋",
  raising_hand_man: "🙋‍♂️",
  raising_hand_woman: "🙋‍♀️",
  deaf_person: "🧏",
  deaf_man: "🧏‍♂️",
  deaf_woman: "🧏‍♀️",
  bow: "🙇",
  bowing_man: "🙇‍♂️",
  bowing_woman: "🙇‍♀️",
  facepalm: "🤦",
  man_facepalming: "🤦‍♂️",
  woman_facepalming: "🤦‍♀️",
  shrug: "🤷",
  man_shrugging: "🤷‍♂️",
  woman_shrugging: "🤷‍♀️",
  health_worker: "🧑‍⚕️",
  man_health_worker: "👨‍⚕️",
  woman_health_worker: "👩‍⚕️",
  student: "🧑‍🎓",
  man_student: "👨‍🎓",
  woman_student: "👩‍🎓",
  teacher: "🧑‍🏫",
  man_teacher: "👨‍🏫",
  woman_teacher: "👩‍🏫",
  judge: "🧑‍⚖️",
  man_judge: "👨‍⚖️",
  woman_judge: "👩‍⚖️",
  farmer: "🧑‍🌾",
  man_farmer: "👨‍🌾",
  woman_farmer: "👩‍🌾",
  cook: "🧑‍🍳",
  man_cook: "👨‍🍳",
  woman_cook: "👩‍🍳",
  mechanic: "🧑‍🔧",
  man_mechanic: "👨‍🔧",
  woman_mechanic: "👩‍🔧",
  factory_worker: "🧑‍🏭",
  man_factory_worker: "👨‍🏭",
  woman_factory_worker: "👩‍🏭",
  office_worker: "🧑‍💼",
  man_office_worker: "👨‍💼",
  woman_office_worker: "👩‍💼",
  scientist: "🧑‍🔬",
  man_scientist: "👨‍🔬",
  woman_scientist: "👩‍🔬",
  technologist: "🧑‍💻",
  man_technologist: "👨‍💻",
  woman_technologist: "👩‍💻",
  singer: "🧑‍🎤",
  man_singer: "👨‍🎤",
  woman_singer: "👩‍🎤",
  artist: "🧑‍🎨",
  man_artist: "👨‍🎨",
  woman_artist: "👩‍🎨",
  pilot: "🧑‍✈️",
  man_pilot: "👨‍✈️",
  woman_pilot: "👩‍✈️",
  astronaut: "🧑‍🚀",
  man_astronaut: "👨‍🚀",
  woman_astronaut: "👩‍🚀",
  firefighter: "🧑‍🚒",
  man_firefighter: "👨‍🚒",
  woman_firefighter: "👩‍🚒",
  police_officer: "👮",
  cop: "👮",
  policeman: "👮‍♂️",
  policewoman: "👮‍♀️",
  detective: "🕵️",
  male_detective: "🕵️‍♂️",
  female_detective: "🕵️‍♀️",
  guard: "💂",
  guardsman: "💂‍♂️",
  guardswoman: "💂‍♀️",
  ninja: "🥷",
  construction_worker: "👷",
  construction_worker_man: "👷‍♂️",
  construction_worker_woman: "👷‍♀️",
  prince: "🤴",
  princess: "👸",
  person_with_turban: "👳",
  man_with_turban: "👳‍♂️",
  woman_with_turban: "👳‍♀️",
  man_with_gua_pi_mao: "👲",
  woman_with_headscarf: "🧕",
  person_in_tuxedo: "🤵",
  man_in_tuxedo: "🤵‍♂️",
  woman_in_tuxedo: "🤵‍♀️",
  person_with_veil: "👰",
  man_with_veil: "👰‍♂️",
  woman_with_veil: "👰‍♀️",
  bride_with_veil: "👰‍♀️",
  pregnant_woman: "🤰",
  breast_feeding: "🤱",
  woman_feeding_baby: "👩‍🍼",
  man_feeding_baby: "👨‍🍼",
  person_feeding_baby: "🧑‍🍼",
  angel: "👼",
  santa: "🎅",
  mrs_claus: "🤶",
  mx_claus: "🧑‍🎄",
  superhero: "🦸",
  superhero_man: "🦸‍♂️",
  superhero_woman: "🦸‍♀️",
  supervillain: "🦹",
  supervillain_man: "🦹‍♂️",
  supervillain_woman: "🦹‍♀️",
  mage: "🧙",
  mage_man: "🧙‍♂️",
  mage_woman: "🧙‍♀️",
  fairy: "🧚",
  fairy_man: "🧚‍♂️",
  fairy_woman: "🧚‍♀️",
  vampire: "🧛",
  vampire_man: "🧛‍♂️",
  vampire_woman: "🧛‍♀️",
  merperson: "🧜",
  merman: "🧜‍♂️",
  mermaid: "🧜‍♀️",
  elf: "🧝",
  elf_man: "🧝‍♂️",
  elf_woman: "🧝‍♀️",
  genie: "🧞",
  genie_man: "🧞‍♂️",
  genie_woman: "🧞‍♀️",
  zombie: "🧟",
  zombie_man: "🧟‍♂️",
  zombie_woman: "🧟‍♀️",
  massage: "💆",
  massage_man: "💆‍♂️",
  massage_woman: "💆‍♀️",
  haircut: "💇",
  haircut_man: "💇‍♂️",
  haircut_woman: "💇‍♀️",
  walking: "🚶",
  walking_man: "🚶‍♂️",
  walking_woman: "🚶‍♀️",
  standing_person: "🧍",
  standing_man: "🧍‍♂️",
  standing_woman: "🧍‍♀️",
  kneeling_person: "🧎",
  kneeling_man: "🧎‍♂️",
  kneeling_woman: "🧎‍♀️",
  person_with_probing_cane: "🧑‍🦯",
  man_with_probing_cane: "👨‍🦯",
  woman_with_probing_cane: "👩‍🦯",
  person_in_motorized_wheelchair: "🧑‍🦼",
  man_in_motorized_wheelchair: "👨‍🦼",
  woman_in_motorized_wheelchair: "👩‍🦼",
  person_in_manual_wheelchair: "🧑‍🦽",
  man_in_manual_wheelchair: "👨‍🦽",
  woman_in_manual_wheelchair: "👩‍🦽",
  runner: "🏃",
  running: "🏃",
  running_man: "🏃‍♂️",
  running_woman: "🏃‍♀️",
  woman_dancing: "💃",
  dancer: "💃",
  man_dancing: "🕺",
  business_suit_levitating: "🕴️",
  dancers: "👯",
  dancing_men: "👯‍♂️",
  dancing_women: "👯‍♀️",
  sauna_person: "🧖",
  sauna_man: "🧖‍♂️",
  sauna_woman: "🧖‍♀️",
  climbing: "🧗",
  climbing_man: "🧗‍♂️",
  climbing_woman: "🧗‍♀️",
  person_fencing: "🤺",
  horse_racing: "🏇",
  skier: "⛷️",
  snowboarder: "🏂",
  golfing: "🏌️",
  golfing_man: "🏌️‍♂️",
  golfing_woman: "🏌️‍♀️",
  surfer: "🏄",
  surfing_man: "🏄‍♂️",
  surfing_woman: "🏄‍♀️",
  rowboat: "🚣",
  rowing_man: "🚣‍♂️",
  rowing_woman: "🚣‍♀️",
  swimmer: "🏊",
  swimming_man: "🏊‍♂️",
  swimming_woman: "🏊‍♀️",
  bouncing_ball_person: "⛹️",
  bouncing_ball_man: "⛹️‍♂️",
  basketball_man: "⛹️‍♂️",
  bouncing_ball_woman: "⛹️‍♀️",
  basketball_woman: "⛹️‍♀️",
  weight_lifting: "🏋️",
  weight_lifting_man: "🏋️‍♂️",
  weight_lifting_woman: "🏋️‍♀️",
  bicyclist: "🚴",
  biking_man: "🚴‍♂️",
  biking_woman: "🚴‍♀️",
  mountain_bicyclist: "🚵",
  mountain_biking_man: "🚵‍♂️",
  mountain_biking_woman: "🚵‍♀️",
  cartwheeling: "🤸",
  man_cartwheeling: "🤸‍♂️",
  woman_cartwheeling: "🤸‍♀️",
  wrestling: "🤼",
  men_wrestling: "🤼‍♂️",
  women_wrestling: "🤼‍♀️",
  water_polo: "🤽",
  man_playing_water_polo: "🤽‍♂️",
  woman_playing_water_polo: "🤽‍♀️",
  handball_person: "🤾",
  man_playing_handball: "🤾‍♂️",
  woman_playing_handball: "🤾‍♀️",
  juggling_person: "🤹",
  man_juggling: "🤹‍♂️",
  woman_juggling: "🤹‍♀️",
  lotus_position: "🧘",
  lotus_position_man: "🧘‍♂️",
  lotus_position_woman: "🧘‍♀️",
  bath: "🛀",
  sleeping_bed: "🛌",
  people_holding_hands: "🧑‍🤝‍🧑",
  two_women_holding_hands: "👭",
  couple: "👫",
  two_men_holding_hands: "👬",
  couplekiss: "💏",
  couplekiss_man_woman: "👩‍❤️‍💋‍👨",
  couplekiss_man_man: "👨‍❤️‍💋‍👨",
  couplekiss_woman_woman: "👩‍❤️‍💋‍👩",
  couple_with_heart: "💑",
  couple_with_heart_woman_man: "👩‍❤️‍👨",
  couple_with_heart_man_man: "👨‍❤️‍👨",
  couple_with_heart_woman_woman: "👩‍❤️‍👩",
  family: "👪",
  family_man_woman_boy: "👨‍👩‍👦",
  family_man_woman_girl: "👨‍👩‍👧",
  family_man_woman_girl_boy: "👨‍👩‍👧‍👦",
  family_man_woman_boy_boy: "👨‍👩‍👦‍👦",
  family_man_woman_girl_girl: "👨‍👩‍👧‍👧",
  family_man_man_boy: "👨‍👨‍👦",
  family_man_man_girl: "👨‍👨‍👧",
  family_man_man_girl_boy: "👨‍👨‍👧‍👦",
  family_man_man_boy_boy: "👨‍👨‍👦‍👦",
  family_man_man_girl_girl: "👨‍👨‍👧‍👧",
  family_woman_woman_boy: "👩‍👩‍👦",
  family_woman_woman_girl: "👩‍👩‍👧",
  family_woman_woman_girl_boy: "👩‍👩‍👧‍👦",
  family_woman_woman_boy_boy: "👩‍👩‍👦‍👦",
  family_woman_woman_girl_girl: "👩‍👩‍👧‍👧",
  family_man_boy: "👨‍👦",
  family_man_boy_boy: "👨‍👦‍👦",
  family_man_girl: "👨‍👧",
  family_man_girl_boy: "👨‍👧‍👦",
  family_man_girl_girl: "👨‍👧‍👧",
  family_woman_boy: "👩‍👦",
  family_woman_boy_boy: "👩‍👦‍👦",
  family_woman_girl: "👩‍👧",
  family_woman_girl_boy: "👩‍👧‍👦",
  family_woman_girl_girl: "👩‍👧‍👧",
  speaking_head: "🗣️",
  bust_in_silhouette: "👤",
  busts_in_silhouette: "👥",
  people_hugging: "🫂",
  footprints: "👣",
  monkey_face: "🐵",
  monkey: "🐒",
  gorilla: "🦍",
  orangutan: "🦧",
  dog: "🐶",
  dog2: "🐕",
  guide_dog: "🦮",
  service_dog: "🐕‍🦺",
  poodle: "🐩",
  wolf: "🐺",
  fox_face: "🦊",
  raccoon: "🦝",
  cat: "🐱",
  cat2: "🐈",
  black_cat: "🐈‍⬛",
  lion: "🦁",
  tiger: "🐯",
  tiger2: "🐅",
  leopard: "🐆",
  horse: "🐴",
  racehorse: "🐎",
  unicorn: "🦄",
  zebra: "🦓",
  deer: "🦌",
  bison: "🦬",
  cow: "🐮",
  ox: "🐂",
  water_buffalo: "🐃",
  cow2: "🐄",
  pig: "🐷",
  pig2: "🐖",
  boar: "🐗",
  pig_nose: "🐽",
  ram: "🐏",
  sheep: "🐑",
  goat: "🐐",
  dromedary_camel: "🐪",
  camel: "🐫",
  llama: "🦙",
  giraffe: "🦒",
  elephant: "🐘",
  mammoth: "🦣",
  rhinoceros: "🦏",
  hippopotamus: "🦛",
  mouse: "🐭",
  mouse2: "🐁",
  rat: "🐀",
  hamster: "🐹",
  rabbit: "🐰",
  rabbit2: "🐇",
  chipmunk: "🐿️",
  beaver: "🦫",
  hedgehog: "🦔",
  bat: "🦇",
  bear: "🐻",
  polar_bear: "🐻‍❄️",
  koala: "🐨",
  panda_face: "🐼",
  sloth: "🦥",
  otter: "🦦",
  skunk: "🦨",
  kangaroo: "🦘",
  badger: "🦡",
  feet: "🐾",
  paw_prints: "🐾",
  turkey: "🦃",
  chicken: "🐔",
  rooster: "🐓",
  hatching_chick: "🐣",
  baby_chick: "🐤",
  hatched_chick: "🐥",
  bird: "🐦",
  penguin: "🐧",
  dove: "🕊️",
  eagle: "🦅",
  duck: "🦆",
  swan: "🦢",
  owl: "🦉",
  dodo: "🦤",
  feather: "🪶",
  flamingo: "🦩",
  peacock: "🦚",
  parrot: "🦜",
  frog: "🐸",
  crocodile: "🐊",
  turtle: "🐢",
  lizard: "🦎",
  snake: "🐍",
  dragon_face: "🐲",
  dragon: "🐉",
  sauropod: "🦕",
  "t-rex": "🦖",
  whale: "🐳",
  whale2: "🐋",
  dolphin: "🐬",
  flipper: "🐬",
  seal: "🦭",
  fish: "🐟",
  tropical_fish: "🐠",
  blowfish: "🐡",
  shark: "🦈",
  octopus: "🐙",
  shell: "🐚",
  snail: "🐌",
  butterfly: "🦋",
  bug: "🐛",
  ant: "🐜",
  bee: "🐝",
  honeybee: "🐝",
  beetle: "🪲",
  lady_beetle: "🐞",
  cricket: "🦗",
  cockroach: "🪳",
  spider: "🕷️",
  spider_web: "🕸️",
  scorpion: "🦂",
  mosquito: "🦟",
  fly: "🪰",
  worm: "🪱",
  microbe: "🦠",
  bouquet: "💐",
  cherry_blossom: "🌸",
  white_flower: "💮",
  rosette: "🏵️",
  rose: "🌹",
  wilted_flower: "🥀",
  hibiscus: "🌺",
  sunflower: "🌻",
  blossom: "🌼",
  tulip: "🌷",
  seedling: "🌱",
  potted_plant: "🪴",
  evergreen_tree: "🌲",
  deciduous_tree: "🌳",
  palm_tree: "🌴",
  cactus: "🌵",
  ear_of_rice: "🌾",
  herb: "🌿",
  shamrock: "☘️",
  four_leaf_clover: "🍀",
  maple_leaf: "🍁",
  fallen_leaf: "🍂",
  leaves: "🍃",
  grapes: "🍇",
  melon: "🍈",
  watermelon: "🍉",
  tangerine: "🍊",
  orange: "🍊",
  mandarin: "🍊",
  lemon: "🍋",
  banana: "🍌",
  pineapple: "🍍",
  mango: "🥭",
  apple: "🍎",
  green_apple: "🍏",
  pear: "🍐",
  peach: "🍑",
  cherries: "🍒",
  strawberry: "🍓",
  blueberries: "🫐",
  kiwi_fruit: "🥝",
  tomato: "🍅",
  olive: "🫒",
  coconut: "🥥",
  avocado: "🥑",
  eggplant: "🍆",
  potato: "🥔",
  carrot: "🥕",
  corn: "🌽",
  hot_pepper: "🌶️",
  bell_pepper: "🫑",
  cucumber: "🥒",
  leafy_green: "🥬",
  broccoli: "🥦",
  garlic: "🧄",
  onion: "🧅",
  mushroom: "🍄",
  peanuts: "🥜",
  chestnut: "🌰",
  bread: "🍞",
  croissant: "🥐",
  baguette_bread: "🥖",
  flatbread: "🫓",
  pretzel: "🥨",
  bagel: "🥯",
  pancakes: "🥞",
  waffle: "🧇",
  cheese: "🧀",
  meat_on_bone: "🍖",
  poultry_leg: "🍗",
  cut_of_meat: "🥩",
  bacon: "🥓",
  hamburger: "🍔",
  fries: "🍟",
  pizza: "🍕",
  hotdog: "🌭",
  sandwich: "🥪",
  taco: "🌮",
  burrito: "🌯",
  tamale: "🫔",
  stuffed_flatbread: "🥙",
  falafel: "🧆",
  egg: "🥚",
  fried_egg: "🍳",
  shallow_pan_of_food: "🥘",
  stew: "🍲",
  fondue: "🫕",
  bowl_with_spoon: "🥣",
  green_salad: "🥗",
  popcorn: "🍿",
  butter: "🧈",
  salt: "🧂",
  canned_food: "🥫",
  bento: "🍱",
  rice_cracker: "🍘",
  rice_ball: "🍙",
  rice: "🍚",
  curry: "🍛",
  ramen: "🍜",
  spaghetti: "🍝",
  sweet_potato: "🍠",
  oden: "🍢",
  sushi: "🍣",
  fried_shrimp: "🍤",
  fish_cake: "🍥",
  moon_cake: "🥮",
  dango: "🍡",
  dumpling: "🥟",
  fortune_cookie: "🥠",
  takeout_box: "🥡",
  crab: "🦀",
  lobster: "🦞",
  shrimp: "🦐",
  squid: "🦑",
  oyster: "🦪",
  icecream: "🍦",
  shaved_ice: "🍧",
  ice_cream: "🍨",
  doughnut: "🍩",
  cookie: "🍪",
  birthday: "🎂",
  cake: "🍰",
  cupcake: "🧁",
  pie: "🥧",
  chocolate_bar: "🍫",
  candy: "🍬",
  lollipop: "🍭",
  custard: "🍮",
  honey_pot: "🍯",
  baby_bottle: "🍼",
  milk_glass: "🥛",
  coffee: "☕",
  teapot: "🫖",
  tea: "🍵",
  sake: "🍶",
  champagne: "🍾",
  wine_glass: "🍷",
  cocktail: "🍸",
  tropical_drink: "🍹",
  beer: "🍺",
  beers: "🍻",
  clinking_glasses: "🥂",
  tumbler_glass: "🥃",
  cup_with_straw: "🥤",
  bubble_tea: "🧋",
  beverage_box: "🧃",
  mate: "🧉",
  ice_cube: "🧊",
  chopsticks: "🥢",
  plate_with_cutlery: "🍽️",
  fork_and_knife: "🍴",
  spoon: "🥄",
  hocho: "🔪",
  knife: "🔪",
  amphora: "🏺",
  earth_africa: "🌍",
  earth_americas: "🌎",
  earth_asia: "🌏",
  globe_with_meridians: "🌐",
  world_map: "🗺️",
  japan: "🗾",
  compass: "🧭",
  mountain_snow: "🏔️",
  mountain: "⛰️",
  volcano: "🌋",
  mount_fuji: "🗻",
  camping: "🏕️",
  beach_umbrella: "🏖️",
  desert: "🏜️",
  desert_island: "🏝️",
  national_park: "🏞️",
  stadium: "🏟️",
  classical_building: "🏛️",
  building_construction: "🏗️",
  bricks: "🧱",
  rock: "🪨",
  wood: "🪵",
  hut: "🛖",
  houses: "🏘️",
  derelict_house: "🏚️",
  house: "🏠",
  house_with_garden: "🏡",
  office: "🏢",
  post_office: "🏣",
  european_post_office: "🏤",
  hospital: "🏥",
  bank: "🏦",
  hotel: "🏨",
  love_hotel: "🏩",
  convenience_store: "🏪",
  school: "🏫",
  department_store: "🏬",
  factory: "🏭",
  japanese_castle: "🏯",
  european_castle: "🏰",
  wedding: "💒",
  tokyo_tower: "🗼",
  statue_of_liberty: "🗽",
  church: "⛪",
  mosque: "🕌",
  hindu_temple: "🛕",
  synagogue: "🕍",
  shinto_shrine: "⛩️",
  kaaba: "🕋",
  fountain: "⛲",
  tent: "⛺",
  foggy: "🌁",
  night_with_stars: "🌃",
  cityscape: "🏙️",
  sunrise_over_mountains: "🌄",
  sunrise: "🌅",
  city_sunset: "🌆",
  city_sunrise: "🌇",
  bridge_at_night: "🌉",
  hotsprings: "♨️",
  carousel_horse: "🎠",
  ferris_wheel: "🎡",
  roller_coaster: "🎢",
  barber: "💈",
  circus_tent: "🎪",
  steam_locomotive: "🚂",
  railway_car: "🚃",
  bullettrain_side: "🚄",
  bullettrain_front: "🚅",
  train2: "🚆",
  metro: "🚇",
  light_rail: "🚈",
  station: "🚉",
  tram: "🚊",
  monorail: "🚝",
  mountain_railway: "🚞",
  train: "🚋",
  bus: "🚌",
  oncoming_bus: "🚍",
  trolleybus: "🚎",
  minibus: "🚐",
  ambulance: "🚑",
  fire_engine: "🚒",
  police_car: "🚓",
  oncoming_police_car: "🚔",
  taxi: "🚕",
  oncoming_taxi: "🚖",
  car: "🚗",
  red_car: "🚗",
  oncoming_automobile: "🚘",
  blue_car: "🚙",
  pickup_truck: "🛻",
  truck: "🚚",
  articulated_lorry: "🚛",
  tractor: "🚜",
  racing_car: "🏎️",
  motorcycle: "🏍️",
  motor_scooter: "🛵",
  manual_wheelchair: "🦽",
  motorized_wheelchair: "🦼",
  auto_rickshaw: "🛺",
  bike: "🚲",
  kick_scooter: "🛴",
  skateboard: "🛹",
  roller_skate: "🛼",
  busstop: "🚏",
  motorway: "🛣️",
  railway_track: "🛤️",
  oil_drum: "🛢️",
  fuelpump: "⛽",
  rotating_light: "🚨",
  traffic_light: "🚥",
  vertical_traffic_light: "🚦",
  stop_sign: "🛑",
  construction: "🚧",
  anchor: "⚓",
  boat: "⛵",
  sailboat: "⛵",
  canoe: "🛶",
  speedboat: "🚤",
  passenger_ship: "🛳️",
  ferry: "⛴️",
  motor_boat: "🛥️",
  ship: "🚢",
  airplane: "✈️",
  small_airplane: "🛩️",
  flight_departure: "🛫",
  flight_arrival: "🛬",
  parachute: "🪂",
  seat: "💺",
  helicopter: "🚁",
  suspension_railway: "🚟",
  mountain_cableway: "🚠",
  aerial_tramway: "🚡",
  artificial_satellite: "🛰️",
  rocket: "🚀",
  flying_saucer: "🛸",
  bellhop_bell: "🛎️",
  luggage: "🧳",
  hourglass: "⌛",
  hourglass_flowing_sand: "⏳",
  watch: "⌚",
  alarm_clock: "⏰",
  stopwatch: "⏱️",
  timer_clock: "⏲️",
  mantelpiece_clock: "🕰️",
  clock12: "🕛",
  clock1230: "🕧",
  clock1: "🕐",
  clock130: "🕜",
  clock2: "🕑",
  clock230: "🕝",
  clock3: "🕒",
  clock330: "🕞",
  clock4: "🕓",
  clock430: "🕟",
  clock5: "🕔",
  clock530: "🕠",
  clock6: "🕕",
  clock630: "🕡",
  clock7: "🕖",
  clock730: "🕢",
  clock8: "🕗",
  clock830: "🕣",
  clock9: "🕘",
  clock930: "🕤",
  clock10: "🕙",
  clock1030: "🕥",
  clock11: "🕚",
  clock1130: "🕦",
  new_moon: "🌑",
  waxing_crescent_moon: "🌒",
  first_quarter_moon: "🌓",
  moon: "🌔",
  waxing_gibbous_moon: "🌔",
  full_moon: "🌕",
  waning_gibbous_moon: "🌖",
  last_quarter_moon: "🌗",
  waning_crescent_moon: "🌘",
  crescent_moon: "🌙",
  new_moon_with_face: "🌚",
  first_quarter_moon_with_face: "🌛",
  last_quarter_moon_with_face: "🌜",
  thermometer: "🌡️",
  sunny: "☀️",
  full_moon_with_face: "🌝",
  sun_with_face: "🌞",
  ringed_planet: "🪐",
  star: "⭐",
  star2: "🌟",
  stars: "🌠",
  milky_way: "🌌",
  cloud: "☁️",
  partly_sunny: "⛅",
  cloud_with_lightning_and_rain: "⛈️",
  sun_behind_small_cloud: "🌤️",
  sun_behind_large_cloud: "🌥️",
  sun_behind_rain_cloud: "🌦️",
  cloud_with_rain: "🌧️",
  cloud_with_snow: "🌨️",
  cloud_with_lightning: "🌩️",
  tornado: "🌪️",
  fog: "🌫️",
  wind_face: "🌬️",
  cyclone: "🌀",
  rainbow: "🌈",
  closed_umbrella: "🌂",
  open_umbrella: "☂️",
  umbrella: "☔",
  parasol_on_ground: "⛱️",
  zap: "⚡",
  snowflake: "❄️",
  snowman_with_snow: "☃️",
  snowman: "⛄",
  comet: "☄️",
  fire: "🔥",
  droplet: "💧",
  ocean: "🌊",
  jack_o_lantern: "🎃",
  christmas_tree: "🎄",
  fireworks: "🎆",
  sparkler: "🎇",
  firecracker: "🧨",
  sparkles: "✨",
  balloon: "🎈",
  tada: "🎉",
  confetti_ball: "🎊",
  tanabata_tree: "🎋",
  bamboo: "🎍",
  dolls: "🎎",
  flags: "🎏",
  wind_chime: "🎐",
  rice_scene: "🎑",
  red_envelope: "🧧",
  ribbon: "🎀",
  gift: "🎁",
  reminder_ribbon: "🎗️",
  tickets: "🎟️",
  ticket: "🎫",
  medal_military: "🎖️",
  trophy: "🏆",
  medal_sports: "🏅",
  "1st_place_medal": "🥇",
  "2nd_place_medal": "🥈",
  "3rd_place_medal": "🥉",
  soccer: "⚽",
  baseball: "⚾",
  softball: "🥎",
  basketball: "🏀",
  volleyball: "🏐",
  football: "🏈",
  rugby_football: "🏉",
  tennis: "🎾",
  flying_disc: "🥏",
  bowling: "🎳",
  cricket_game: "🏏",
  field_hockey: "🏑",
  ice_hockey: "🏒",
  lacrosse: "🥍",
  ping_pong: "🏓",
  badminton: "🏸",
  boxing_glove: "🥊",
  martial_arts_uniform: "🥋",
  goal_net: "🥅",
  golf: "⛳",
  ice_skate: "⛸️",
  fishing_pole_and_fish: "🎣",
  diving_mask: "🤿",
  running_shirt_with_sash: "🎽",
  ski: "🎿",
  sled: "🛷",
  curling_stone: "🥌",
  dart: "🎯",
  yo_yo: "🪀",
  kite: "🪁",
  "8ball": "🎱",
  crystal_ball: "🔮",
  magic_wand: "🪄",
  nazar_amulet: "🧿",
  video_game: "🎮",
  joystick: "🕹️",
  slot_machine: "🎰",
  game_die: "🎲",
  jigsaw: "🧩",
  teddy_bear: "🧸",
  pinata: "🪅",
  nesting_dolls: "🪆",
  spades: "♠️",
  hearts: "♥️",
  diamonds: "♦️",
  clubs: "♣️",
  chess_pawn: "♟️",
  black_joker: "🃏",
  mahjong: "🀄",
  flower_playing_cards: "🎴",
  performing_arts: "🎭",
  framed_picture: "🖼️",
  art: "🎨",
  thread: "🧵",
  sewing_needle: "🪡",
  yarn: "🧶",
  knot: "🪢",
  eyeglasses: "👓",
  dark_sunglasses: "🕶️",
  goggles: "🥽",
  lab_coat: "🥼",
  safety_vest: "🦺",
  necktie: "👔",
  shirt: "👕",
  tshirt: "👕",
  jeans: "👖",
  scarf: "🧣",
  gloves: "🧤",
  coat: "🧥",
  socks: "🧦",
  dress: "👗",
  kimono: "👘",
  sari: "🥻",
  one_piece_swimsuit: "🩱",
  swim_brief: "🩲",
  shorts: "🩳",
  bikini: "👙",
  womans_clothes: "👚",
  purse: "👛",
  handbag: "👜",
  pouch: "👝",
  shopping: "🛍️",
  school_satchel: "🎒",
  thong_sandal: "🩴",
  mans_shoe: "👞",
  shoe: "👞",
  athletic_shoe: "👟",
  hiking_boot: "🥾",
  flat_shoe: "🥿",
  high_heel: "👠",
  sandal: "👡",
  ballet_shoes: "🩰",
  boot: "👢",
  crown: "👑",
  womans_hat: "👒",
  tophat: "🎩",
  mortar_board: "🎓",
  billed_cap: "🧢",
  military_helmet: "🪖",
  rescue_worker_helmet: "⛑️",
  prayer_beads: "📿",
  lipstick: "💄",
  ring: "💍",
  gem: "💎",
  mute: "🔇",
  speaker: "🔈",
  sound: "🔉",
  loud_sound: "🔊",
  loudspeaker: "📢",
  mega: "📣",
  postal_horn: "📯",
  bell: "🔔",
  no_bell: "🔕",
  musical_score: "🎼",
  musical_note: "🎵",
  notes: "🎶",
  studio_microphone: "🎙️",
  level_slider: "🎚️",
  control_knobs: "🎛️",
  microphone: "🎤",
  headphones: "🎧",
  radio: "📻",
  saxophone: "🎷",
  accordion: "🪗",
  guitar: "🎸",
  musical_keyboard: "🎹",
  trumpet: "🎺",
  violin: "🎻",
  banjo: "🪕",
  drum: "🥁",
  long_drum: "🪘",
  iphone: "📱",
  calling: "📲",
  phone: "☎️",
  telephone: "☎️",
  telephone_receiver: "📞",
  pager: "📟",
  fax: "📠",
  battery: "🔋",
  electric_plug: "🔌",
  computer: "💻",
  desktop_computer: "🖥️",
  printer: "🖨️",
  keyboard: "⌨️",
  computer_mouse: "🖱️",
  trackball: "🖲️",
  minidisc: "💽",
  floppy_disk: "💾",
  cd: "💿",
  dvd: "📀",
  abacus: "🧮",
  movie_camera: "🎥",
  film_strip: "🎞️",
  film_projector: "📽️",
  clapper: "🎬",
  tv: "📺",
  camera: "📷",
  camera_flash: "📸",
  video_camera: "📹",
  vhs: "📼",
  mag: "🔍",
  mag_right: "🔎",
  candle: "🕯️",
  bulb: "💡",
  flashlight: "🔦",
  izakaya_lantern: "🏮",
  lantern: "🏮",
  diya_lamp: "🪔",
  notebook_with_decorative_cover: "📔",
  closed_book: "📕",
  book: "📖",
  open_book: "📖",
  green_book: "📗",
  blue_book: "📘",
  orange_book: "📙",
  books: "📚",
  notebook: "📓",
  ledger: "📒",
  page_with_curl: "📃",
  scroll: "📜",
  page_facing_up: "📄",
  newspaper: "📰",
  newspaper_roll: "🗞️",
  bookmark_tabs: "📑",
  bookmark: "🔖",
  label: "🏷️",
  moneybag: "💰",
  coin: "🪙",
  yen: "💴",
  dollar: "💵",
  euro: "💶",
  pound: "💷",
  money_with_wings: "💸",
  credit_card: "💳",
  receipt: "🧾",
  chart: "💹",
  envelope: "✉️",
  email: "📧",
  "e-mail": "📧",
  incoming_envelope: "📨",
  envelope_with_arrow: "📩",
  outbox_tray: "📤",
  inbox_tray: "📥",
  package: "📦",
  mailbox: "📫",
  mailbox_closed: "📪",
  mailbox_with_mail: "📬",
  mailbox_with_no_mail: "📭",
  postbox: "📮",
  ballot_box: "🗳️",
  pencil2: "✏️",
  black_nib: "✒️",
  fountain_pen: "🖋️",
  pen: "🖊️",
  paintbrush: "🖌️",
  crayon: "🖍️",
  memo: "📝",
  pencil: "📝",
  briefcase: "💼",
  file_folder: "📁",
  open_file_folder: "📂",
  card_index_dividers: "🗂️",
  date: "📅",
  calendar: "📆",
  spiral_notepad: "🗒️",
  spiral_calendar: "🗓️",
  card_index: "📇",
  chart_with_upwards_trend: "📈",
  chart_with_downwards_trend: "📉",
  bar_chart: "📊",
  clipboard: "📋",
  pushpin: "📌",
  round_pushpin: "📍",
  paperclip: "📎",
  paperclips: "🖇️",
  straight_ruler: "📏",
  triangular_ruler: "📐",
  scissors: "✂️",
  card_file_box: "🗃️",
  file_cabinet: "🗄️",
  wastebasket: "🗑️",
  lock: "🔒",
  unlock: "🔓",
  lock_with_ink_pen: "🔏",
  closed_lock_with_key: "🔐",
  key: "🔑",
  old_key: "🗝️",
  hammer: "🔨",
  axe: "🪓",
  pick: "⛏️",
  hammer_and_pick: "⚒️",
  hammer_and_wrench: "🛠️",
  dagger: "🗡️",
  crossed_swords: "⚔️",
  gun: "🔫",
  boomerang: "🪃",
  bow_and_arrow: "🏹",
  shield: "🛡️",
  carpentry_saw: "🪚",
  wrench: "🔧",
  screwdriver: "🪛",
  nut_and_bolt: "🔩",
  gear: "⚙️",
  clamp: "🗜️",
  balance_scale: "⚖️",
  probing_cane: "🦯",
  link: "🔗",
  chains: "⛓️",
  hook: "🪝",
  toolbox: "🧰",
  magnet: "🧲",
  ladder: "🪜",
  alembic: "⚗️",
  test_tube: "🧪",
  petri_dish: "🧫",
  dna: "🧬",
  microscope: "🔬",
  telescope: "🔭",
  satellite: "📡",
  syringe: "💉",
  drop_of_blood: "🩸",
  pill: "💊",
  adhesive_bandage: "🩹",
  stethoscope: "🩺",
  door: "🚪",
  elevator: "🛗",
  mirror: "🪞",
  window: "🪟",
  bed: "🛏️",
  couch_and_lamp: "🛋️",
  chair: "🪑",
  toilet: "🚽",
  plunger: "🪠",
  shower: "🚿",
  bathtub: "🛁",
  mouse_trap: "🪤",
  razor: "🪒",
  lotion_bottle: "🧴",
  safety_pin: "🧷",
  broom: "🧹",
  basket: "🧺",
  roll_of_paper: "🧻",
  bucket: "🪣",
  soap: "🧼",
  toothbrush: "🪥",
  sponge: "🧽",
  fire_extinguisher: "🧯",
  shopping_cart: "🛒",
  smoking: "🚬",
  coffin: "⚰️",
  headstone: "🪦",
  funeral_urn: "⚱️",
  moyai: "🗿",
  placard: "🪧",
  atm: "🏧",
  put_litter_in_its_place: "🚮",
  potable_water: "🚰",
  wheelchair: "♿",
  mens: "🚹",
  womens: "🚺",
  restroom: "🚻",
  baby_symbol: "🚼",
  wc: "🚾",
  passport_control: "🛂",
  customs: "🛃",
  baggage_claim: "🛄",
  left_luggage: "🛅",
  warning: "⚠️",
  children_crossing: "🚸",
  no_entry: "⛔",
  no_entry_sign: "🚫",
  no_bicycles: "🚳",
  no_smoking: "🚭",
  do_not_litter: "🚯",
  "non-potable_water": "🚱",
  no_pedestrians: "🚷",
  no_mobile_phones: "📵",
  underage: "🔞",
  radioactive: "☢️",
  biohazard: "☣️",
  arrow_up: "⬆️",
  arrow_upper_right: "↗️",
  arrow_right: "➡️",
  arrow_lower_right: "↘️",
  arrow_down: "⬇️",
  arrow_lower_left: "↙️",
  arrow_left: "⬅️",
  arrow_upper_left: "↖️",
  arrow_up_down: "↕️",
  left_right_arrow: "↔️",
  leftwards_arrow_with_hook: "↩️",
  arrow_right_hook: "↪️",
  arrow_heading_up: "⤴️",
  arrow_heading_down: "⤵️",
  arrows_clockwise: "🔃",
  arrows_counterclockwise: "🔄",
  back: "🔙",
  end: "🔚",
  on: "🔛",
  soon: "🔜",
  top: "🔝",
  place_of_worship: "🛐",
  atom_symbol: "⚛️",
  om: "🕉️",
  star_of_david: "✡️",
  wheel_of_dharma: "☸️",
  yin_yang: "☯️",
  latin_cross: "✝️",
  orthodox_cross: "☦️",
  star_and_crescent: "☪️",
  peace_symbol: "☮️",
  menorah: "🕎",
  six_pointed_star: "🔯",
  aries: "♈",
  taurus: "♉",
  gemini: "♊",
  cancer: "♋",
  leo: "♌",
  virgo: "♍",
  libra: "♎",
  scorpius: "♏",
  sagittarius: "♐",
  capricorn: "♑",
  aquarius: "♒",
  pisces: "♓",
  ophiuchus: "⛎",
  twisted_rightwards_arrows: "🔀",
  repeat: "🔁",
  repeat_one: "🔂",
  arrow_forward: "▶️",
  fast_forward: "⏩",
  next_track_button: "⏭️",
  play_or_pause_button: "⏯️",
  arrow_backward: "◀️",
  rewind: "⏪",
  previous_track_button: "⏮️",
  arrow_up_small: "🔼",
  arrow_double_up: "⏫",
  arrow_down_small: "🔽",
  arrow_double_down: "⏬",
  pause_button: "⏸️",
  stop_button: "⏹️",
  record_button: "⏺️",
  eject_button: "⏏️",
  cinema: "🎦",
  low_brightness: "🔅",
  high_brightness: "🔆",
  signal_strength: "📶",
  vibration_mode: "📳",
  mobile_phone_off: "📴",
  female_sign: "♀️",
  male_sign: "♂️",
  transgender_symbol: "⚧️",
  heavy_multiplication_x: "✖️",
  heavy_plus_sign: "➕",
  heavy_minus_sign: "➖",
  heavy_division_sign: "➗",
  infinity: "♾️",
  bangbang: "‼️",
  interrobang: "⁉️",
  question: "❓",
  grey_question: "❔",
  grey_exclamation: "❕",
  exclamation: "❗",
  heavy_exclamation_mark: "❗",
  wavy_dash: "〰️",
  currency_exchange: "💱",
  heavy_dollar_sign: "💲",
  medical_symbol: "⚕️",
  recycle: "♻️",
  fleur_de_lis: "⚜️",
  trident: "🔱",
  name_badge: "📛",
  beginner: "🔰",
  o: "⭕",
  white_check_mark: "✅",
  ballot_box_with_check: "☑️",
  heavy_check_mark: "✔️",
  x: "❌",
  negative_squared_cross_mark: "❎",
  curly_loop: "➰",
  loop: "➿",
  part_alternation_mark: "〽️",
  eight_spoked_asterisk: "✳️",
  eight_pointed_black_star: "✴️",
  sparkle: "❇️",
  copyright: "©️",
  registered: "®️",
  tm: "™️",
  hash: "#️⃣",
  asterisk: "*️⃣",
  zero: "0️⃣",
  one: "1️⃣",
  two: "2️⃣",
  three: "3️⃣",
  four: "4️⃣",
  five: "5️⃣",
  six: "6️⃣",
  seven: "7️⃣",
  eight: "8️⃣",
  nine: "9️⃣",
  keycap_ten: "🔟",
  capital_abcd: "🔠",
  abcd: "🔡",
  symbols: "🔣",
  abc: "🔤",
  a: "🅰️",
  ab: "🆎",
  b: "🅱️",
  cl: "🆑",
  cool: "🆒",
  free: "🆓",
  information_source: "ℹ️",
  id: "🆔",
  m: "Ⓜ️",
  new: "🆕",
  ng: "🆖",
  o2: "🅾️",
  ok: "🆗",
  parking: "🅿️",
  sos: "🆘",
  up: "🆙",
  vs: "🆚",
  koko: "🈁",
  sa: "🈂️",
  ideograph_advantage: "🉐",
  accept: "🉑",
  congratulations: "㊗️",
  secret: "㊙️",
  u6e80: "🈵",
  red_circle: "🔴",
  orange_circle: "🟠",
  yellow_circle: "🟡",
  green_circle: "🟢",
  large_blue_circle: "🔵",
  purple_circle: "🟣",
  brown_circle: "🟤",
  black_circle: "⚫",
  white_circle: "⚪",
  red_square: "🟥",
  orange_square: "🟧",
  yellow_square: "🟨",
  green_square: "🟩",
  blue_square: "🟦",
  purple_square: "🟪",
  brown_square: "🟫",
  black_large_square: "⬛",
  white_large_square: "⬜",
  black_medium_square: "◼️",
  white_medium_square: "◻️",
  black_medium_small_square: "◾",
  white_medium_small_square: "◽",
  black_small_square: "▪️",
  white_small_square: "▫️",
  large_orange_diamond: "🔶",
  large_blue_diamond: "🔷",
  small_orange_diamond: "🔸",
  small_blue_diamond: "🔹",
  small_red_triangle: "🔺",
  small_red_triangle_down: "🔻",
  diamond_shape_with_a_dot_inside: "💠",
  radio_button: "🔘",
  white_square_button: "🔳",
  black_square_button: "🔲",
  checkered_flag: "🏁",
  triangular_flag_on_post: "🚩",
  crossed_flags: "🎌",
  black_flag: "🏴",
  white_flag: "🏳️",
  rainbow_flag: "🏳️‍🌈",
  transgender_flag: "🏳️‍⚧️",
  pirate_flag: "🏴‍☠️",
  ascension_island: "🇦🇨",
  andorra: "🇦🇩",
  united_arab_emirates: "🇦🇪",
  afghanistan: "🇦🇫",
  antigua_barbuda: "🇦🇬",
  anguilla: "🇦🇮",
  albania: "🇦🇱",
  armenia: "🇦🇲",
  angola: "🇦🇴",
  antarctica: "🇦🇶",
  argentina: "🇦🇷",
  american_samoa: "🇦🇸",
  austria: "🇦🇹",
  australia: "🇦🇺",
  aruba: "🇦🇼",
  aland_islands: "🇦🇽",
  azerbaijan: "🇦🇿",
  bosnia_herzegovina: "🇧🇦",
  barbados: "🇧🇧",
  bangladesh: "🇧🇩",
  belgium: "🇧🇪",
  burkina_faso: "🇧🇫",
  bulgaria: "🇧🇬",
  bahrain: "🇧🇭",
  burundi: "🇧🇮",
  benin: "🇧🇯",
  st_barthelemy: "🇧🇱",
  bermuda: "🇧🇲",
  brunei: "🇧🇳",
  bolivia: "🇧🇴",
  caribbean_netherlands: "🇧🇶",
  brazil: "🇧🇷",
  bahamas: "🇧🇸",
  bhutan: "🇧🇹",
  bouvet_island: "🇧🇻",
  botswana: "🇧🇼",
  belarus: "🇧🇾",
  belize: "🇧🇿",
  canada: "🇨🇦",
  cocos_islands: "🇨🇨",
  congo_kinshasa: "🇨🇩",
  central_african_republic: "🇨🇫",
  congo_brazzaville: "🇨🇬",
  switzerland: "🇨🇭",
  cote_divoire: "🇨🇮",
  cook_islands: "🇨🇰",
  chile: "🇨🇱",
  cameroon: "🇨🇲",
  cn: "🇨🇳",
  colombia: "🇨🇴",
  clipperton_island: "🇨🇵",
  costa_rica: "🇨🇷",
  cuba: "🇨🇺",
  cape_verde: "🇨🇻",
  curacao: "🇨🇼",
  christmas_island: "🇨🇽",
  cyprus: "🇨🇾",
  czech_republic: "🇨🇿",
  de: "🇩🇪",
  diego_garcia: "🇩🇬",
  djibouti: "🇩🇯",
  denmark: "🇩🇰",
  dominica: "🇩🇲",
  dominican_republic: "🇩🇴",
  algeria: "🇩🇿",
  ceuta_melilla: "🇪🇦",
  ecuador: "🇪🇨",
  estonia: "🇪🇪",
  egypt: "🇪🇬",
  western_sahara: "🇪🇭",
  eritrea: "🇪🇷",
  es: "🇪🇸",
  ethiopia: "🇪🇹",
  eu: "🇪🇺",
  european_union: "🇪🇺",
  finland: "🇫🇮",
  fiji: "🇫🇯",
  falkland_islands: "🇫🇰",
  micronesia: "🇫🇲",
  faroe_islands: "🇫🇴",
  fr: "🇫🇷",
  gabon: "🇬🇦",
  gb: "🇬🇧",
  uk: "🇬🇧",
  grenada: "🇬🇩",
  georgia: "🇬🇪",
  french_guiana: "🇬🇫",
  guernsey: "🇬🇬",
  ghana: "🇬🇭",
  gibraltar: "🇬🇮",
  greenland: "🇬🇱",
  gambia: "🇬🇲",
  guinea: "🇬🇳",
  guadeloupe: "🇬🇵",
  equatorial_guinea: "🇬🇶",
  greece: "🇬🇷",
  south_georgia_south_sandwich_islands: "🇬🇸",
  guatemala: "🇬🇹",
  guam: "🇬🇺",
  guinea_bissau: "🇬🇼",
  guyana: "🇬🇾",
  hong_kong: "🇭🇰",
  heard_mcdonald_islands: "🇭🇲",
  honduras: "🇭🇳",
  croatia: "🇭🇷",
  haiti: "🇭🇹",
  hungary: "🇭🇺",
  canary_islands: "🇮🇨",
  indonesia: "🇮🇩",
  ireland: "🇮🇪",
  israel: "🇮🇱",
  isle_of_man: "🇮🇲",
  india: "🇮🇳",
  british_indian_ocean_territory: "🇮🇴",
  iraq: "🇮🇶",
  iran: "🇮🇷",
  iceland: "🇮🇸",
  it: "🇮🇹",
  jersey: "🇯🇪",
  jamaica: "🇯🇲",
  jordan: "🇯🇴",
  jp: "🇯🇵",
  kenya: "🇰🇪",
  kyrgyzstan: "🇰🇬",
  cambodia: "🇰🇭",
  kiribati: "🇰🇮",
  comoros: "🇰🇲",
  st_kitts_nevis: "🇰🇳",
  north_korea: "🇰🇵",
  kr: "🇰🇷",
  kuwait: "🇰🇼",
  cayman_islands: "🇰🇾",
  kazakhstan: "🇰🇿",
  laos: "🇱🇦",
  lebanon: "🇱🇧",
  st_lucia: "🇱🇨",
  liechtenstein: "🇱🇮",
  sri_lanka: "🇱🇰",
  liberia: "🇱🇷",
  lesotho: "🇱🇸",
  lithuania: "🇱🇹",
  luxembourg: "🇱🇺",
  latvia: "🇱🇻",
  libya: "🇱🇾",
  morocco: "🇲🇦",
  monaco: "🇲🇨",
  moldova: "🇲🇩",
  montenegro: "🇲🇪",
  st_martin: "🇲🇫",
  madagascar: "🇲🇬",
  marshall_islands: "🇲🇭",
  macedonia: "🇲🇰",
  mali: "🇲🇱",
  myanmar: "🇲🇲",
  mongolia: "🇲🇳",
  macau: "🇲🇴",
  northern_mariana_islands: "🇲🇵",
  martinique: "🇲🇶",
  mauritania: "🇲🇷",
  montserrat: "🇲🇸",
  malta: "🇲🇹",
  mauritius: "🇲🇺",
  maldives: "🇲🇻",
  malawi: "🇲🇼",
  mexico: "🇲🇽",
  malaysia: "🇲🇾",
  mozambique: "🇲🇿",
  namibia: "🇳🇦",
  new_caledonia: "🇳🇨",
  niger: "🇳🇪",
  norfolk_island: "🇳🇫",
  nigeria: "🇳🇬",
  nicaragua: "🇳🇮",
  netherlands: "🇳🇱",
  norway: "🇳🇴",
  nepal: "🇳🇵",
  nauru: "🇳🇷",
  niue: "🇳🇺",
  new_zealand: "🇳🇿",
  oman: "🇴🇲",
  panama: "🇵🇦",
  peru: "🇵🇪",
  french_polynesia: "🇵🇫",
  papua_new_guinea: "🇵🇬",
  philippines: "🇵🇭",
  pakistan: "🇵🇰",
  poland: "🇵🇱",
  st_pierre_miquelon: "🇵🇲",
  pitcairn_islands: "🇵🇳",
  puerto_rico: "🇵🇷",
  palestinian_territories: "🇵🇸",
  portugal: "🇵🇹",
  palau: "🇵🇼",
  paraguay: "🇵🇾",
  qatar: "🇶🇦",
  reunion: "🇷🇪",
  romania: "🇷🇴",
  serbia: "🇷🇸",
  ru: "🇷🇺",
  rwanda: "🇷🇼",
  saudi_arabia: "🇸🇦",
  solomon_islands: "🇸🇧",
  seychelles: "🇸🇨",
  sudan: "🇸🇩",
  sweden: "🇸🇪",
  singapore: "🇸🇬",
  st_helena: "🇸🇭",
  slovenia: "🇸🇮",
  svalbard_jan_mayen: "🇸🇯",
  slovakia: "🇸🇰",
  sierra_leone: "🇸🇱",
  san_marino: "🇸🇲",
  senegal: "🇸🇳",
  somalia: "🇸🇴",
  suriname: "🇸🇷",
  south_sudan: "🇸🇸",
  sao_tome_principe: "🇸🇹",
  el_salvador: "🇸🇻",
  sint_maarten: "🇸🇽",
  syria: "🇸🇾",
  swaziland: "🇸🇿",
  tristan_da_cunha: "🇹🇦",
  turks_caicos_islands: "🇹🇨",
  chad: "🇹🇩",
  french_southern_territories: "🇹🇫",
  togo: "🇹🇬",
  thailand: "🇹🇭",
  tajikistan: "🇹🇯",
  tokelau: "🇹🇰",
  timor_leste: "🇹🇱",
  turkmenistan: "🇹🇲",
  tunisia: "🇹🇳",
  tonga: "🇹🇴",
  tr: "🇹🇷",
  trinidad_tobago: "🇹🇹",
  tuvalu: "🇹🇻",
  taiwan: "🇹🇼",
  tanzania: "🇹🇿",
  ukraine: "🇺🇦",
  uganda: "🇺🇬",
  us_outlying_islands: "🇺🇲",
  united_nations: "🇺🇳",
  us: "🇺🇸",
  uruguay: "🇺🇾",
  uzbekistan: "🇺🇿",
  vatican_city: "🇻🇦",
  st_vincent_grenadines: "🇻🇨",
  venezuela: "🇻🇪",
  british_virgin_islands: "🇻🇬",
  us_virgin_islands: "🇻🇮",
  vietnam: "🇻🇳",
  vanuatu: "🇻🇺",
  wallis_futuna: "🇼🇫",
  samoa: "🇼🇸",
  kosovo: "🇽🇰",
  yemen: "🇾🇪",
  mayotte: "🇾🇹",
  south_africa: "🇿🇦",
  zambia: "🇿🇲",
  zimbabwe: "🇿🇼",
  england: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  wales: "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
};
Object.keys(xe).reduce((e, t) => {
  const n = xe[t];
  return e[n] = t, e;
}, {});
const No = Object.keys(xe).map((e) => e);
Object.keys(xe).map((e) => xe[e]);
function To(e) {
  return No.filter((t) => t.startsWith(e)).map((t) => ({
    name: t,
    emoji: xe[t]
  }));
}
const on = je((e, t) => {
  const n = re(), [i, a] = y(0), { t: o } = E(), c = (h) => {
    const m = e.items[h];
    m && e.command(m);
  }, s = () => {
    a((i + e.items.length - 1) % e.items.length);
  }, d = () => {
    a((i + 1) % e.items.length);
  }, l = () => {
    c(i);
  };
  return A(() => a(0), [e.items]), A(() => {
    if (Number.isNaN(i + 1))
      return;
    const h = n.current.querySelector(`span:nth-of-type(${i + 1})`);
    h && dt(h, { behavior: "smooth", scrollMode: "if-needed" });
  }, [i]), Fe(t, () => ({
    onKeyDown: ({ event: h }) => h.key === "ArrowUp" ? (s(), !0) : h.key === "ArrowDown" ? (d(), !0) : h.key === "Enter" ? (l(), !0) : !1
  })), /* @__PURE__ */ r("div", { className: "richtext-w-[200px] richtext-max-h-[320px] richtext-overflow-x-hidden richtext-overflow-y-auto richtext-rounded-sm !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: /* @__PURE__ */ r("div", { ref: n, children: e.items.length ? e.items.map((h, m) => /* @__PURE__ */ u(
    "span",
    {
      className: fe(" richtext-flex richtext-relative  richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground  hover:richtext-bg-accent", m === i ? "bg-accent" : ""),
      onClick: () => c(m),
      children: [
        h.fallbackImage ? /* @__PURE__ */ r("img", { src: h.fallbackImage, className: "richtext-w-[1em] richtext-h-[1em]" }) : h.emoji,
        ":",
        h.name,
        ":"
      ]
    },
    `emoji-list-code-${m}`
  )) : /* @__PURE__ */ r("div", { className: "richtext-flex richtext-relative  richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors", children: /* @__PURE__ */ r("span", { children: o("no_result_found") }) }) }) });
});
on.displayName = "EmojiList";
const Ao = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "🥲",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😛",
  "😝",
  "😜",
  "🤪",
  "🤨",
  "🧐",
  "🤓",
  "😎",
  "🥸",
  "🤩",
  "🥳",
  "😏",
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "😣",
  "😖",
  "😫",
  "😩",
  "🥺",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "🤬",
  "🤯",
  "😳",
  "🥵",
  "🥶",
  "😱",
  "😨",
  "😰",
  "😥",
  "😓",
  "🤗",
  "🤔",
  "🤭",
  "🤫",
  "🤥",
  "😶",
  "😐",
  "😑",
  "😬",
  "🙄",
  "😯",
  "😦",
  "😧",
  "😮",
  "😲",
  "🥱",
  "😴",
  "🤤",
  "😪",
  "😵",
  "🤐",
  "🥴",
  "🤢",
  "🤮",
  "🤧",
  "😷",
  "🤒",
  "🤕",
  "🤑",
  "🤠",
  "😈",
  "👿",
  "👹",
  "👺",
  "🤡",
  "💩",
  "👻",
  "💀",
  "☠️",
  "👽",
  "👾",
  "🤖",
  "🎃",
  "😺",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾",
  "👋",
  "🤚",
  "🖐",
  "✋",
  "🖖",
  "👌",
  "🤌",
  "🤏",
  "✌️",
  "🤞",
  "🤟",
  "🤘",
  "🤙",
  "👈",
  "👉",
  "👆",
  "🖕",
  "👇",
  "☝️",
  "👍",
  "👎",
  "✊",
  "👊",
  "🤛",
  "🤜",
  "👏",
  "🙌",
  "👐",
  "🤲",
  "🤝",
  "🙏",
  "✍️",
  "💅",
  "🤳",
  "💪",
  "🦾",
  "🦵",
  "🦿",
  "🦶",
  "👣",
  "👂",
  "🦻",
  "👃",
  "🫀",
  "🫁",
  "🧠",
  "🦷",
  "🦴",
  "👀",
  "👁",
  "👅",
  "👄",
  "💋",
  "🩸",
  "💋",
  "💌",
  "💘",
  "💝",
  "💖",
  "💗",
  "💓",
  "💞",
  "💕",
  "💟",
  "❣️",
  "❣",
  "💔",
  "❤️‍🔥",
  "❤‍🔥",
  "❤️‍🩹",
  "❤‍🩹",
  "❤️",
  "❤",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🤎",
  "🖤",
  "🤍",
  "💯",
  "💢",
  "💥",
  "💫",
  "💦",
  "💨",
  "🕳️",
  "🕳",
  "💣",
  "💬",
  "👁️‍🗨️",
  "👁‍🗨️",
  "👁️‍🗨",
  "👁‍🗨",
  "🗨️",
  "🗨",
  "🗯️",
  "🗯",
  "💭",
  "💤"
], Lo = [
  "🏧",
  "🚮",
  "🚰",
  "♿",
  "🚹",
  "🚺",
  "🚻",
  "🚼",
  "🚾",
  "🛂",
  "🛃",
  "🛄",
  "🛅",
  "⚠️",
  "⚠",
  "🚸",
  "⛔",
  "🚫",
  "🚳",
  "🚭",
  "🚯",
  "🚱",
  "🚷",
  "📵",
  "🔞",
  "☢️",
  "☢",
  "☣️",
  "☣",
  "⬆️",
  "⬆",
  "↗️",
  "↗",
  "➡️",
  "➡",
  "↘️",
  "↘",
  "⬇️",
  "⬇",
  "↙️",
  "↙",
  "⬅️",
  "⬅",
  "↖️",
  "↖",
  "↕️",
  "↕",
  "↔️",
  "↔",
  "↩️",
  "↩",
  "↪️",
  "↪",
  "⤴️",
  "⤴",
  "⤵️",
  "⤵",
  "🔃",
  "🔄",
  "🔙",
  "🔚",
  "🔛",
  "🔜",
  "🔝",
  "🛐",
  "⚛️",
  "⚛",
  "🕉️",
  "🕉",
  "✡️",
  "✡",
  "☸️",
  "☸",
  "☯️",
  "☯",
  "✝️",
  "✝",
  "☦️",
  "☦",
  "☪️",
  "☪",
  "☮️",
  "☮",
  "🕎",
  "🔯",
  "♈",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓",
  "⛎",
  "🔀",
  "🔁",
  "🔂",
  "▶️",
  "▶",
  "⏩",
  "⏭️",
  "⏭",
  "⏯️",
  "⏯",
  "◀️",
  "◀",
  "⏪",
  "⏮️",
  "⏮",
  "🔼",
  "⏫",
  "🔽",
  "⏬",
  "⏸️",
  "⏸",
  "⏹️",
  "⏹",
  "⏺️",
  "⏺",
  "⏏️",
  "⏏",
  "🎦",
  "🔅",
  "🔆",
  "📶",
  "📳",
  "📴",
  "♀️",
  "♀",
  "♂️",
  "♂",
  "⚧️",
  "⚧",
  "✖️",
  "✖",
  "➕",
  "➖",
  "➗",
  "♾️",
  "♾",
  "‼️",
  "‼",
  "⁉️",
  "⁉",
  "❓",
  "❔",
  "❕",
  "❗",
  "〰️",
  "〰",
  "💱",
  "💲",
  "⚕️",
  "⚕",
  "♻️",
  "♻",
  "⚜️",
  "⚜",
  "🔱",
  "📛",
  "🔰",
  "⭕",
  "✅",
  "☑️",
  "☑",
  "✔️",
  "✔",
  "❌",
  "❎",
  "➰",
  "➿",
  "〽️",
  "〽",
  "✳️",
  "✳",
  "✴️",
  "✴",
  "❇️",
  "❇",
  "©️",
  "©",
  "®️",
  "®",
  "™️",
  "™",
  "#️⃣",
  "#⃣",
  "*️⃣",
  "*⃣",
  "0️⃣",
  "0⃣",
  "1️⃣",
  "1⃣",
  "2️⃣",
  "2⃣",
  "3️⃣",
  "3⃣",
  "4️⃣",
  "4⃣",
  "5️⃣",
  "5⃣",
  "6️⃣",
  "6⃣",
  "7️⃣",
  "7⃣",
  "8️⃣",
  "8⃣",
  "9️⃣",
  "9⃣",
  "🔟",
  "🔠",
  "🔡",
  "🔢",
  "🔣",
  "🔤",
  "🅰️",
  "🅰",
  "🆎",
  "🅱️",
  "🅱",
  "🆑",
  "🆒",
  "🆓",
  "ℹ️",
  "ℹ",
  "🆔",
  "Ⓜ️",
  "Ⓜ",
  "🆕",
  "🆖",
  "🅾️",
  "🅾",
  "🆗",
  "🅿️",
  "🅿",
  "🆘",
  "🆙",
  "🆚",
  "🈁",
  "🈂️",
  "🈂",
  "🈷️",
  "🈷",
  "🈶",
  "🈯",
  "🉐",
  "🈹",
  "🈚",
  "🈲",
  "🉑",
  "🈸",
  "🈴",
  "🈳",
  "㊗️",
  "㊗",
  "㊙️",
  "㊙",
  "🈺",
  "🈵",
  "🔴",
  "🟠",
  "🟡",
  "🟢",
  "🔵",
  "🟣",
  "🟤",
  "⚫",
  "⚪",
  "🟥",
  "🟧",
  "🟨",
  "🟩",
  "🟦",
  "🟪",
  "🟫",
  "⬛",
  "⬜",
  "◼️",
  "◼",
  "◻️",
  "◻",
  "◾",
  "◽",
  "▪️",
  "▪",
  "▫️",
  "▫",
  "🔶",
  "🔷",
  "🔸",
  "🔹",
  "🔺",
  "🔻",
  "💠",
  "🔘",
  "🔳",
  "🔲"
], So = [
  "👓",
  "🕶️",
  "🕶",
  "🥽",
  "🥼",
  "🦺",
  "👔",
  "👕",
  "👖",
  "🧣",
  "🧤",
  "🧥",
  "🧦",
  "👗",
  "👘",
  "🥻",
  "🩱",
  "🩲",
  "🩳",
  "👙",
  "👚",
  "👛",
  "👜",
  "👝",
  "🛍️",
  "🛍",
  "🎒",
  "🩴",
  "👞",
  "👟",
  "🥾",
  "🥿",
  "👠",
  "👡",
  "🩰",
  "👢",
  "👑",
  "👒",
  "🎩",
  "🎓",
  "🧢",
  "🪖",
  "⛑️",
  "⛑",
  "📿",
  "💄",
  "💍",
  "💎",
  "🔇",
  "🔈",
  "🔉",
  "🔊",
  "📢",
  "📣",
  "📯",
  "🔔",
  "🔕",
  "🎼",
  "🎵",
  "🎶",
  "🎙️",
  "🎙",
  "🎚️",
  "🎚",
  "🎛️",
  "🎛",
  "🎤",
  "🎧",
  "📻",
  "🎷",
  "🪗",
  "🎸",
  "🎹",
  "🎺",
  "🎻",
  "🪕",
  "🥁",
  "🪘",
  "📱",
  "📲",
  "☎️",
  "☎",
  "📞",
  "📟",
  "📠",
  "🔋",
  "🔌",
  "💻",
  "🖥️",
  "🖥",
  "🖨️",
  "🖨",
  "⌨️",
  "⌨",
  "🖱️",
  "🖱",
  "🖲️",
  "🖲",
  "💽",
  "💾",
  "💿",
  "📀",
  "🧮",
  "🎥",
  "🎞️",
  "🎞",
  "📽️",
  "📽",
  "🎬",
  "📺",
  "📷",
  "📸",
  "📹",
  "📼",
  "🔍",
  "🔎",
  "🕯️",
  "🕯",
  "💡",
  "🔦",
  "🏮",
  "🪔",
  "📔",
  "📕",
  "📖",
  "📗",
  "📘",
  "📙",
  "📚",
  "📓",
  "📒",
  "📃",
  "📜",
  "📄",
  "📰",
  "🗞️",
  "🗞",
  "📑",
  "🔖",
  "🏷️",
  "🏷",
  "💰",
  "🪙",
  "💴",
  "💵",
  "💶",
  "💷",
  "💸",
  "💳",
  "🧾",
  "💹",
  "✉️",
  "✉",
  "📧",
  "📨",
  "📩",
  "📤",
  "📥",
  "📦",
  "📫",
  "📪",
  "📬",
  "📭",
  "📮",
  "🗳️",
  "🗳",
  "✏️",
  "✏",
  "✒️",
  "✒",
  "🖋️",
  "🖋",
  "🖊️",
  "🖊",
  "🖌️",
  "🖌",
  "🖍️",
  "🖍",
  "📝",
  "💼",
  "📁",
  "📂",
  "🗂️",
  "🗂",
  "📅",
  "📆",
  "🗒️",
  "🗒",
  "🗓️",
  "🗓",
  "📇",
  "📈",
  "📉",
  "📊",
  "📋",
  "📌",
  "📍",
  "📎",
  "🖇️",
  "🖇",
  "📏",
  "📐",
  "✂️",
  "✂",
  "🗃️",
  "🗃",
  "🗄️",
  "🗄",
  "🗑️",
  "🗑",
  "🔒",
  "🔓",
  "🔏",
  "🔐",
  "🔑",
  "🗝️",
  "🗝",
  "🔨",
  "🪓",
  "⛏️",
  "⛏",
  "⚒️",
  "⚒",
  "🛠️",
  "🛠",
  "🗡️",
  "🗡",
  "⚔️",
  "⚔",
  "🔫",
  "🪃",
  "🏹",
  "🛡️",
  "🛡",
  "🪚",
  "🔧",
  "🪛",
  "🔩",
  "⚙️",
  "⚙",
  "🗜️",
  "🗜",
  "⚖️",
  "⚖",
  "🦯",
  "🔗",
  "⛓️",
  "⛓",
  "🪝",
  "🧰",
  "🧲",
  "🪜",
  "⚗️",
  "⚗",
  "🧪",
  "🧫",
  "🧬",
  "🔬",
  "🔭",
  "📡",
  "💉",
  "🩸",
  "💊",
  "🩹",
  "🩺",
  "🚪",
  "🛗",
  "🪞",
  "🪟",
  "🛏️",
  "🛏",
  "🛋️",
  "🛋",
  "🪑",
  "🚽",
  "🪠",
  "🚿",
  "🛁",
  "🪤",
  "🪒",
  "🧴",
  "🧷",
  "🧹",
  "🧺",
  "🧻",
  "🪣",
  "🧼",
  "🪥",
  "🧽",
  "🧯",
  "🛒",
  "🚬",
  "⚰️",
  "⚰",
  "🪦",
  "⚱️",
  "⚱",
  "🗿",
  "🪧"
], Mo = [
  "🎃",
  "🎄",
  "🎆",
  "🎇",
  "🧨",
  "✨",
  "🎈",
  "🎉",
  "🎊",
  "🎋",
  "🎍",
  "🎎",
  "🎏",
  "🎐",
  "🎑",
  "🧧",
  "🎀",
  "🎁",
  "🎗️",
  "🎗",
  "🎟️",
  "🎟",
  "🎫",
  "🎖️",
  "🎖",
  "🏆",
  "🏅",
  "🥇",
  "🥈",
  "🥉",
  "⚽",
  "⚾",
  "🥎",
  "🏀",
  "🏐",
  "🏈",
  "🏉",
  "🎾",
  "🥏",
  "🎳",
  "🏏",
  "🏑",
  "🏒",
  "🥍",
  "🏓",
  "🏸",
  "🥊",
  "🥋",
  "🥅",
  "⛳",
  "⛸️",
  "⛸",
  "🎣",
  "🤿",
  "🎽",
  "🎿",
  "🛷",
  "🥌",
  "🎯",
  "🪀",
  "🪁",
  "🎱",
  "🔮",
  "🪄",
  "🧿",
  "🎮",
  "🕹️",
  "🕹",
  "🎰",
  "🎲",
  "🧩",
  "🧸",
  "🪅",
  "🪆",
  "♠️",
  "♠",
  "♥️",
  "♥",
  "♦️",
  "♦",
  "♣️",
  "♣",
  "♟️",
  "♟",
  "🃏",
  "🀄",
  "🎴",
  "🎭",
  "🖼️",
  "🖼",
  "🎨",
  "🧵",
  "🪡",
  "🧶",
  "🪢"
], zo = [
  "🌍",
  "🌎",
  "🌏",
  "🌐",
  "🗺️",
  "🗺",
  "🗾",
  "🧭",
  "🏔️",
  "🏔",
  "⛰️",
  "⛰",
  "🌋",
  "🗻",
  "🏕️",
  "🏕",
  "🏖️",
  "🏖",
  "🏜️",
  "🏜",
  "🏝️",
  "🏝",
  "🏞️",
  "🏞",
  "🏟️",
  "🏟",
  "🏛️",
  "🏛",
  "🏗️",
  "🏗",
  "🧱",
  "🪨",
  "🪵",
  "🛖",
  "🏘️",
  "🏘",
  "🏚️",
  "🏚",
  "🏠",
  "🏡",
  "🏢",
  "🏣",
  "🏤",
  "🏥",
  "🏦",
  "🏨",
  "🏩",
  "🏪",
  "🏫",
  "🏬",
  "🏭",
  "🏯",
  "🏰",
  "💒",
  "🗼",
  "🗽",
  "⛪",
  "🕌",
  "🛕",
  "🕍",
  "⛩️",
  "⛩",
  "🕋",
  "⛲",
  "⛺",
  "🌁",
  "🌃",
  "🏙️",
  "🏙",
  "🌄",
  "🌅",
  "🌆",
  "🌇",
  "🌉",
  "♨️",
  "♨",
  "🎠",
  "🎡",
  "🎢",
  "💈",
  "🎪",
  "🚂",
  "🚃",
  "🚄",
  "🚅",
  "🚆",
  "🚇",
  "🚈",
  "🚉",
  "🚊",
  "🚝",
  "🚞",
  "🚋",
  "🚌",
  "🚍",
  "🚎",
  "🚐",
  "🚑",
  "🚒",
  "🚓",
  "🚔",
  "🚕",
  "🚖",
  "🚗",
  "🚘",
  "🚙",
  "🛻",
  "🚚",
  "🚛",
  "🚜",
  "🏎️",
  "🏎",
  "🏍️",
  "🏍",
  "🛵",
  "🦽",
  "🦼",
  "🛺",
  "🚲",
  "🛴",
  "🛹",
  "🛼",
  "🚏",
  "🛣️",
  "🛣",
  "🛤️",
  "🛤",
  "🛢️",
  "🛢",
  "⛽",
  "🚨",
  "🚥",
  "🚦",
  "🛑",
  "🚧",
  "⚓",
  "⛵",
  "🛶",
  "🚤",
  "🛳️",
  "🛳",
  "⛴️",
  "⛴",
  "🛥️",
  "🛥",
  "🚢",
  "✈️",
  "✈",
  "🛩️",
  "🛩",
  "🛫",
  "🛬",
  "🪂",
  "💺",
  "🚁",
  "🚟",
  "🚠",
  "🚡",
  "🛰️",
  "🛰",
  "🚀",
  "🛸",
  "🛎️",
  "🛎",
  "🧳",
  "⌛",
  "⏳",
  "⌚",
  "⏰",
  "⏱️",
  "⏱",
  "⏲️",
  "⏲",
  "🕰️",
  "🕰",
  "🕛",
  "🕧",
  "🕐",
  "🕜",
  "🕑",
  "🕝",
  "🕒",
  "🕞",
  "🕓",
  "🕟",
  "🕔",
  "🕠",
  "🕕",
  "🕡",
  "🕖",
  "🕢",
  "🕗",
  "🕣",
  "🕘",
  "🕤",
  "🕙",
  "🕥",
  "🕚",
  "🕦",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌙",
  "🌚",
  "🌛",
  "🌜",
  "🌡️",
  "🌡",
  "☀️",
  "☀",
  "🌝",
  "🌞",
  "🪐",
  "⭐",
  "🌟",
  "🌠",
  "🌌",
  "☁️",
  "☁",
  "⛅",
  "⛈️",
  "⛈",
  "🌤️",
  "🌤",
  "🌥️",
  "🌥",
  "🌦️",
  "🌦",
  "🌧️",
  "🌧",
  "🌨️",
  "🌨",
  "🌩️",
  "🌩",
  "🌪️",
  "🌪",
  "🌫️",
  "🌫",
  "🌬️",
  "🌬",
  "🌀",
  "🌈",
  "🌂",
  "☂️",
  "☂",
  "☔",
  "⛱️",
  "⛱",
  "⚡",
  "❄️",
  "❄",
  "☃️",
  "☃",
  "⛄",
  "☄️",
  "☄",
  "🔥",
  "💧",
  "🌊"
], Ro = [
  "🏁",
  "🚩",
  "🎌",
  "🏴",
  "🏳️",
  "🏳",
  "🏳️‍🌈",
  "🏳‍🌈",
  "🏳️‍⚧️",
  "🏳‍⚧️",
  "🏳️‍⚧",
  "🏳‍⚧",
  "🏴‍☠️",
  "🏴‍☠",
  "🇦🇨",
  "🇦🇩",
  "🇦🇪",
  "🇦🇫",
  "🇦🇬",
  "🇦🇮",
  "🇦🇱",
  "🇦🇲",
  "🇦🇴",
  "🇦🇶",
  "🇦🇷",
  "🇦🇸",
  "🇦🇹",
  "🇦🇺",
  "🇦🇼",
  "🇦🇽",
  "🇦🇿",
  "🇧🇦",
  "🇧🇧",
  "🇧🇩",
  "🇧🇪",
  "🇧🇫",
  "🇧🇬",
  "🇧🇭",
  "🇧🇮",
  "🇧🇯",
  "🇧🇱",
  "🇧🇲",
  "🇧🇳",
  "🇧🇴",
  "🇧🇶",
  "🇧🇷",
  "🇧🇸",
  "🇧🇹",
  "🇧🇻",
  "🇧🇼",
  "🇧🇾",
  "🇧🇿",
  "🇨🇦",
  "🇨🇨",
  "🇨🇩",
  "🇨🇫",
  "🇨🇬",
  "🇨🇭",
  "🇨🇮",
  "🇨🇰",
  "🇨🇱",
  "🇨🇲",
  "🇨🇳",
  "🇨🇴",
  "🇨🇵",
  "🇨🇷",
  "🇨🇺",
  "🇨🇻",
  "🇨🇼",
  "🇨🇽",
  "🇨🇾",
  "🇨🇿",
  "🇩🇪",
  "🇩🇬",
  "🇩🇯",
  "🇩🇰",
  "🇩🇲",
  "🇩🇴",
  "🇩🇿",
  "🇪🇦",
  "🇪🇨",
  "🇪🇪",
  "🇪🇬",
  "🇪🇭",
  "🇪🇷",
  "🇪🇸",
  "🇪🇹",
  "🇪🇺",
  "🇫🇮",
  "🇫🇯",
  "🇫🇰",
  "🇫🇲",
  "🇫🇴",
  "🇫🇷",
  "🇬🇦",
  "🇬🇧",
  "🇬🇩",
  "🇬🇪",
  "🇬🇫",
  "🇬🇬",
  "🇬🇭",
  "🇬🇮",
  "🇬🇱",
  "🇬🇲",
  "🇬🇳",
  "🇬🇵",
  "🇬🇶",
  "🇬🇷",
  "🇬🇸",
  "🇬🇹",
  "🇬🇺",
  "🇬🇼",
  "🇬🇾",
  "🇭🇰",
  "🇭🇲",
  "🇭🇳",
  "🇭🇷",
  "🇭🇹",
  "🇭🇺",
  "🇮🇨",
  "🇮🇩",
  "🇮🇪",
  "🇮🇱",
  "🇮🇲",
  "🇮🇳",
  "🇮🇴",
  "🇮🇶",
  "🇮🇷",
  "🇮🇸",
  "🇮🇹",
  "🇯🇪",
  "🇯🇲",
  "🇯🇴",
  "🇯🇵",
  "🇰🇪",
  "🇰🇬",
  "🇰🇭",
  "🇰🇮",
  "🇰🇲",
  "🇰🇳",
  "🇰🇵",
  "🇰🇷",
  "🇰🇼",
  "🇰🇾",
  "🇰🇿",
  "🇱🇦",
  "🇱🇧",
  "🇱🇨",
  "🇱🇮",
  "🇱🇰",
  "🇱🇷",
  "🇱🇸",
  "🇱🇹",
  "🇱🇺",
  "🇱🇻",
  "🇱🇾",
  "🇲🇦",
  "🇲🇨",
  "🇲🇩",
  "🇲🇪",
  "🇲🇫",
  "🇲🇬",
  "🇲🇭",
  "🇲🇰",
  "🇲🇱",
  "🇲🇲",
  "🇲🇳",
  "🇲🇴",
  "🇲🇵",
  "🇲🇶",
  "🇲🇷",
  "🇲🇸",
  "🇲🇹",
  "🇲🇺",
  "🇲🇻",
  "🇲🇼",
  "🇲🇽",
  "🇲🇾",
  "🇲🇿",
  "🇳🇦",
  "🇳🇨",
  "🇳🇪",
  "🇳🇫",
  "🇳🇬",
  "🇳🇮",
  "🇳🇱",
  "🇳🇴",
  "🇳🇵",
  "🇳🇷",
  "🇳🇺",
  "🇳🇿",
  "🇴🇲",
  "🇵🇦",
  "🇵🇪",
  "🇵🇫",
  "🇵🇬",
  "🇵🇭",
  "🇵🇰",
  "🇵🇱",
  "🇵🇲",
  "🇵🇳",
  "🇵🇷",
  "🇵🇸",
  "🇵🇹",
  "🇵🇼",
  "🇵🇾",
  "🇶🇦",
  "🇷🇪",
  "🇷🇴",
  "🇷🇸",
  "🇷🇺",
  "🇷🇼",
  "🇸🇦",
  "🇸🇧",
  "🇸🇨",
  "🇸🇩",
  "🇸🇪",
  "🇸🇬",
  "🇸🇭",
  "🇸🇮",
  "🇸🇯",
  "🇸🇰",
  "🇸🇱",
  "🇸🇲",
  "🇸🇳",
  "🇸🇴",
  "🇸🇷",
  "🇸🇸",
  "🇸🇹",
  "🇸🇻",
  "🇸🇽",
  "🇸🇾",
  "🇸🇿",
  "🇹🇦",
  "🇹🇨",
  "🇹🇩",
  "🇹🇫",
  "🇹🇬",
  "🇹🇭",
  "🇹🇯",
  "🇹🇰",
  "🇹🇱",
  "🇹🇲",
  "🇹🇳",
  "🇹🇴",
  "🇹🇷",
  "🇹🇹",
  "🇹🇻",
  "🇹🇼",
  "🇹🇿",
  "🇺🇦",
  "🇺🇬",
  "🇺🇲",
  "🇺🇳",
  "🇺🇸",
  "🇺🇾",
  "🇺🇿",
  "🇻🇦",
  "🇻🇨",
  "🇻🇪",
  "🇻🇬",
  "🇻🇮",
  "🇻🇳",
  "🇻🇺",
  "🇼🇫",
  "🇼🇸",
  "🇽🇰",
  "🇾🇪",
  "🇾🇹",
  "🇿🇦",
  "🇿🇲",
  "🇿🇼",
  "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
], Ho = [
  "🐵",
  "🐒",
  "🦍",
  "🦧",
  "🐶",
  "🐕",
  "🦮",
  "🐕‍🦺",
  "🐩",
  "🐺",
  "🦊",
  "🦝",
  "🐱",
  "🐈",
  "🐈‍⬛",
  "🦁",
  "🐯",
  "🐅",
  "🐆",
  "🐴",
  "🐎",
  "🦄",
  "🦓",
  "🦌",
  "🦬",
  "🐮",
  "🐂",
  "🐃",
  "🐄",
  "🐷",
  "🐖",
  "🐗",
  "🐽",
  "🐏",
  "🐑",
  "🐐",
  "🐪",
  "🐫",
  "🦙",
  "🦒",
  "🐘",
  "🦣",
  "🦏",
  "🦛",
  "🐭",
  "🐁",
  "🐀",
  "🐹",
  "🐰",
  "🐇",
  "🐿️",
  "🐿",
  "🦫",
  "🦔",
  "🦇",
  "🐻",
  "🐻‍❄️",
  "🐻‍❄",
  "🐨",
  "🐼",
  "🦥",
  "🦦",
  "🦨",
  "🦘",
  "🦡",
  "🐾",
  "🦃",
  "🐔",
  "🐓",
  "🐣",
  "🐤",
  "🐥",
  "🐦",
  "🐧",
  "🕊️",
  "🕊",
  "🦅",
  "🦆",
  "🦢",
  "🦉",
  "🦤",
  "🪶",
  "🦩",
  "🦚",
  "🦜",
  "🐸",
  "🐊",
  "🐢",
  "🦎",
  "🐍",
  "🐲",
  "🐉",
  "🦕",
  "🦖",
  "🐳",
  "🐋",
  "🐬",
  "🦭",
  "🐟",
  "🐠",
  "🐡",
  "🦈",
  "🐙",
  "🐚",
  "🐌",
  "🦋",
  "🐛",
  "🐜",
  "🐝",
  "🪲",
  "🐞",
  "🦗",
  "🪳",
  "🕷️",
  "🕷",
  "🕸️",
  "🕸",
  "🦂",
  "🦟",
  "🪰",
  "🪱",
  "🦠",
  "💐",
  "🌸",
  "💮",
  "🏵️",
  "🏵",
  "🌹",
  "🥀",
  "🌺",
  "🌻",
  "🌼",
  "🌷",
  "🌱",
  "🪴",
  "🌲",
  "🌳",
  "🌴",
  "🌵",
  "🌾",
  "🌿",
  "☘️",
  "☘",
  "🍀",
  "🍁",
  "🍂",
  "🍃"
], Eo = [
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍏",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🫐",
  "🥝",
  "🍅",
  "🫒",
  "🥥",
  "🥑",
  "🍆",
  "🥔",
  "🥕",
  "🌽",
  "🌶️",
  "🌶",
  "🫑",
  "🥒",
  "🥬",
  "🥦",
  "🧄",
  "🧅",
  "🍄",
  "🥜",
  "🌰",
  "🍞",
  "🥐",
  "🥖",
  "🫓",
  "🥨",
  "🥯",
  "🥞",
  "🧇",
  "🧀",
  "🍖",
  "🍗",
  "🥩",
  "🥓",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🥪",
  "🌮",
  "🌯",
  "🫔",
  "🥙",
  "🧆",
  "🥚",
  "🍳",
  "🥘",
  "🍲",
  "🫕",
  "🥣",
  "🥗",
  "🍿",
  "🧈",
  "🧂",
  "🥫",
  "🍱",
  "🍘",
  "🍙",
  "🍚",
  "🍛",
  "🍜",
  "🍝",
  "🍠",
  "🍢",
  "🍣",
  "🍤",
  "🍥",
  "🥮",
  "🍡",
  "🥟",
  "🥠",
  "🥡",
  "🦀",
  "🦞",
  "🦐",
  "🦑",
  "🦪",
  "🍦",
  "🍧",
  "🍨",
  "🍩",
  "🍪",
  "🎂",
  "🍰",
  "🧁",
  "🥧",
  "🍫",
  "🍬",
  "🍭",
  "🍮",
  "🍯",
  "🍼",
  "🥛",
  "☕",
  "🫖",
  "🍵",
  "🍶",
  "🍾",
  "🍷",
  "🍸",
  "🍹",
  "🍺",
  "🍻",
  "🥂",
  "🥃",
  "🥤",
  "🧋",
  "🧃",
  "🧉",
  "🧊",
  "🥢",
  "🍽️",
  "🍽",
  "🍴",
  "🥄",
  "🔪",
  "🏺"
];
function Io() {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113",
          fill: "currentColor"
        }
      )
    }
  );
}
function Bo() {
  return /* @__PURE__ */ u(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function Oo() {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Po() {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9",
          fill: "currentColor"
        }
      )
    }
  );
}
function Do() {
  return /* @__PURE__ */ u(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function $o() {
  return /* @__PURE__ */ r(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76",
          fill: "currentColor"
        }
      )
    }
  );
}
function jo() {
  return /* @__PURE__ */ u(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function Fo(e, t = "{}") {
  try {
    return JSON.stringify(e);
  } catch {
    return t;
  }
}
function Uo(e, t = null) {
  if (typeof window > "u")
    throw new Error();
  const n = localStorage.getItem(e);
  if (!n)
    return t;
  try {
    return JSON.parse(n);
  } catch {
    return n;
  }
}
function Vo(e, t) {
  window.localStorage.setItem(e, `${t}`);
}
class Xe {
  constructor(t, n) {
    $(this, "key");
    $(this, "value");
    $(this, "prev");
    $(this, "next");
    this.key = t, this.value = n, this.prev = null, this.next = null;
  }
}
class qo {
  constructor(t) {
    $(this, "capacity");
    $(this, "usedCapacity");
    $(this, "head");
    $(this, "tail");
    $(this, "store");
    this.capacity = t || 20, this.usedCapacity = 0, this.store = {}, this.head = new Xe("fakeHeadNode", "fakeHeadNode"), this.tail = new Xe("fakeTailNode", "fakeTailNode"), this.head.next = this.tail, this.tail.prev = this.head;
  }
  removeNode(t) {
    t.prev.next = t.next, t.next.prev = t.prev;
  }
  addToHead(t) {
    t.prev = this.head, t.next = this.head.next, this.head.next.prev = t, this.head.next = t;
  }
  moveToHead(t) {
    this.removeNode(t), this.addToHead(t);
  }
  removeTail() {
    const t = this.tail.prev;
    return this.removeNode(t), t;
  }
  get(t) {
    if (t in this.store) {
      const n = this.store[t];
      return this.moveToHead(n), n.value;
    }
    return -1;
  }
  put(t, n) {
    if (t in this.store) {
      const i = this.store[t];
      i.value = n, this.moveToHead(i);
    } else {
      const i = new Xe(t, n);
      if (this.addToHead(i), this.store[t] = i, this.usedCapacity += 1, this.usedCapacity > this.capacity) {
        const a = this.removeTail();
        delete this.store[a.key], this.usedCapacity -= 1;
      }
    }
  }
  keys() {
    const t = [];
    let n = this.head;
    for (; n; )
      t.push(n.key), n = n.next;
    return t.slice(1, -1);
  }
  values() {
    const t = [];
    let n = this.head;
    for (; n; )
      t.push(n.value), n = n.next;
    return t.slice(1, -1);
  }
  toJSON() {
    return this.store;
  }
}
function Ko(e, t) {
  const n = new qo(t);
  return {
    syncFromStorage() {
      (Uo(e) || []).slice().reverse().forEach((o) => {
        n.put(o, o);
      });
    },
    syncToStorage() {
      Vo(e, Fo(n.keys()));
    },
    put(a) {
      n.put(a, a), this.syncToStorage();
    },
    get(a) {
      return a ? n.get(a) : n.keys();
    }
  };
}
const me = Ko("EMOJI_PICKER", 20), Ht = [
  {
    title: "Smileys & People",
    data: Ao,
    icon: Ci
  },
  {
    title: "Animals & Nature",
    data: Ho,
    icon: Bo
  },
  {
    title: "Food & Drink",
    data: Eo,
    icon: Po
  },
  {
    title: "Activity",
    data: Mo,
    icon: Io
  },
  {
    title: "Travel & Places",
    data: zo,
    icon: jo
  },
  {
    title: "Object",
    data: So,
    icon: Do
  },
  {
    title: "Symbol",
    data: Lo,
    icon: $o
  },
  {
    title: "Flags",
    data: Ro,
    icon: Oo
  }
], Wo = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣"];
function Go({ onSelectEmoji: e, children: t }) {
  const [n, i] = y([]), { t: a } = E(), o = B(
    () => n.length ? [{ title: "Frequently used", icon: ki, data: n }, ...Ht] : Ht,
    [n]
  ), c = P(
    (s) => {
      me.put(s), i(me.get()), e && e(s);
    },
    [e]
  );
  return A(() => {
    me.syncFromStorage();
    const s = me.get();
    s != null && s.length || Wo.forEach((l) => {
      me.put(l);
    });
    const d = me.get();
    i(d);
  }, []), /* @__PURE__ */ u(G, { modal: !0, children: [
    /* @__PURE__ */ r(Z, { asChild: !0, children: t }),
    /* @__PURE__ */ r(V, { hideWhenDetached: !0, className: "richtext-w-full richtext-h-full richtext-p-2", align: "start", side: "bottom", children: /* @__PURE__ */ u(Ea, { defaultValue: "Frequently used", children: [
      /* @__PURE__ */ r(nn, { className: "richtext-flex richtext-items-center richtext-gap-[4px]", children: o.map((s) => /* @__PURE__ */ r(
        rn,
        {
          value: s.title,
          className: "!richtext-p-[6px] richtext-bg-accent hover:richtext-text-accent-foreground",
          children: s.icon && /* @__PURE__ */ r(s.icon, { size: 16 })
        },
        `emoji-picker-title-${s.title}`
      )) }),
      o.map((s) => /* @__PURE__ */ u(
        an,
        {
          value: s.title,
          children: [
            /* @__PURE__ */ r("p", { className: "richtext-mb-[6px] richtext-font-semibold", children: a(s.title) }),
            /* @__PURE__ */ r("div", { className: "richtext-max-h-[280px] richtext-overflow-y-auto", children: /* @__PURE__ */ r("div", { className: "richtext-grid richtext-grid-cols-8 richtext-gap-1 ", children: (s.data || []).map((d) => /* @__PURE__ */ r(
              "div",
              {
                onClick: () => c(d),
                className: "richtext-text-center richtext-cursor-pointer",
                children: d
              },
              `emoji-picker-${d}`
            )) }) })
          ]
        },
        `emoji-picker-content-${s.title}`
      ))
    ] }) })
  ] });
}
function Zo({ editor: e, icon: t, ...n }) {
  const i = P(
    (a) => {
      const { selection: o } = e.state, { $anchor: c } = o;
      return e.chain().insertContentAt(c.pos, a).run();
    },
    [e]
  );
  return /* @__PURE__ */ r(Go, { onSelectEmoji: i, children: /* @__PURE__ */ r(
    _,
    {
      tooltip: n == null ? void 0 : n.tooltip,
      icon: t
    }
  ) });
}
const Jo = 200, Xo = new _e("emoji"), ws = Le.create({
  name: "emoji",
  content: "text*",
  priority: Jo,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {},
      suggestion: {
        char: ":",
        pluginKey: Xo,
        command: ({ editor: t, range: n, props: i }) => {
          t.chain().focus().insertContentAt(n, `${i.emoji} `).run();
        }
      },
      button: ({ editor: t, t: n }) => ({
        component: Zo,
        componentProps: {
          editor: t,
          action: () => {
          },
          isActive: () => !1,
          disabled: !1,
          icon: "EmojiIcon",
          tooltip: n("editor.emoji.tooltip")
        }
      })
    };
  },
  addCommands() {
    return {
      setEmoji: (e) => ({ commands: t }) => t.insertContent(`${e.emoji} `)
    };
  },
  addProseMirrorPlugins() {
    return [
      Dt({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
}).configure({
  suggestion: {
    items: ({ query: e }) => To(e),
    render: () => {
      let e, t, n;
      return {
        onStart: (i) => {
          n = i.editor.isEditable, n && (e = new ct(on, {
            props: i,
            editor: i.editor
          }), t = lt("body", {
            getReferenceClientRect: i.clientRect,
            appendTo: () => document.body,
            content: e.element,
            showOnCreate: !0,
            interactive: !0,
            trigger: "manual",
            placement: "bottom-start"
          }));
        },
        onUpdate(i) {
          n && (e.updateProps(i), t[0].setProps({
            getReferenceClientRect: i.clientRect
          }));
        },
        onKeyDown(i) {
          var a;
          if (n)
            return i.event.key === "Escape" ? (t[0].hide(), !0) : (a = e.ref) == null ? void 0 : a.onKeyDown(i);
        },
        onExit() {
          n && (t[0].destroy(), e.destroy());
        }
      };
    }
  }
}), cn = at.forwardRef((e, t) => {
  const {
    icon: n = void 0,
    // title = undefined,
    tooltip: i = void 0,
    disabled: a = !1,
    customClass: o = "",
    // color = undefined,
    // loading = false,
    shortcutKeys: c = void 0,
    tooltipOptions: s = {},
    action: d = void 0,
    isActive: l = void 0,
    children: h,
    asChild: m = !1,
    upload: f = !1,
    ...g
  } = e, x = be[n];
  return /* @__PURE__ */ u(
    m ? Ve : we,
    {
      ref: t,
      size: "sm",
      className: T(
        "richtext-w-[32px] richtext-h-[32px]",
        o,
        "richtext-w-fit richtext-gap-2"
      ),
      disabled: a,
      onClick: d,
      "data-state": l != null && l() ? "on" : "off",
      ...g,
      children: [
        i && /* @__PURE__ */ r("span", { className: "richtext-text-sm richtext-flex-none richtext-font-medium", children: i }),
        x && /* @__PURE__ */ r(x, { className: "richtext-w-4 richtext-h-4" }),
        h
      ]
    }
  );
});
function Qo(e) {
  const t = document.createElement("iframe");
  t.setAttribute("style", "position: absolute; width: 0; height: 0; top: 0; left: 0;"), document.body.appendChild(t), t.textContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Echo Editor</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body class="is-print">
      <div class="tiptap ProseMirror" translate="no" aria-expanded="false">
          ${e}
      </div>
    </body>
    </html>
  `;
  const n = t.contentWindow, i = t.contentDocument || t.contentWindow && t.contentWindow.document, a = document.createElement("link");
  a.rel = "stylesheet", a.href = "https://cdn.jsdelivr.net/npm/reactjs-tiptap-editor@latest/lib/style.css", i.head.appendChild(a), i && (i.open(), i.write(e), i.close()), n && (t.onload = function() {
    try {
      setTimeout(() => {
        n.focus();
        try {
          n.document.execCommand("print", !1) || n.print();
        } catch {
          n.print();
        }
        n.close();
      }, 10);
    } catch (o) {
      console.error(o);
    }
    setTimeout(() => {
      document.body.removeChild(t);
    }, 100);
  });
}
function Yo(e) {
  const t = e.getHTML();
  return t ? (Qo(t), !0) : !1;
}
const ps = H.create({
  name: "exportPdf",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: cn,
        componentProps: {
          action: () => {
            Yo(t);
          },
          icon: "ExportPdf",
          tooltip: n("editor.exportPdf.tooltip"),
          isActive: () => !1,
          disabled: !1
        }
      })
    };
  }
});
function ec(e, t) {
  const n = atob(e.split(",")[1]), i = Array.from({ length: n.length });
  for (let o = 0; o < n.length; o++)
    i[o] = n.charCodeAt(o);
  const a = new Uint8Array(i);
  return new Blob([a], { type: t });
}
function tc(e, t) {
  return new File([e], t, { type: e.type });
}
function nc(e) {
  const [t, n] = y(!1), [i, a] = y(), o = re();
  function c() {
    o.current.click();
  }
  function s(m) {
    const f = m.target.files[0];
    a(f), f && l();
  }
  async function d(m) {
    var S;
    const g = new DOMParser().parseFromString(m, "text/html"), x = g.querySelectorAll("img");
    if (!x.length)
      return g.body.innerHTML;
    if (Xt(e.editor, "image")) {
      const z = (S = e.editor.extensionManager.extensions.find(
        (p) => p.name === "importWord"
      )) == null ? void 0 : S.options;
      if (z && typeof z.upload == "function") {
        const p = [];
        for (const k of x) {
          const I = k.getAttribute("src"), R = ec(I, "image/jpeg"), he = tc(R, "image.jpeg");
          p.push(he);
        }
        const w = await z.upload(p);
        for (let k = 0; k < x.length; k++) {
          const I = x[k];
          I.setAttribute("src", w[k].src);
          const R = I.parentElement;
          (R == null ? void 0 : R.tagName) === "P" && (R.insertAdjacentElement("beforebegin", I), !R.hasChildNodes() && R.textContent === "" && R.remove());
        }
        return g.body.innerHTML;
      } else
        return console.warn("Image Upload method found, skip image conversion"), g.body.innerHTML;
    } else
      return console.error("Image extension not found, unable to convert image"), g.body.innerHTML;
  }
  async function l() {
    if (e.convert) {
      const m = await e.convert(i);
      h(m);
    } else {
      const m = new FormData(), f = JSON.stringify({
        collaboration_features: {
          comments: !0,
          user_id: "e3",
          track_changes: !0
        },
        formatting: {
          resets: "none",
          defaults: "inline",
          styles: "inline",
          comments: "basic"
        }
      });
      m.append("config", f), m.append("file", i), n(!0), fetch("https://docx-converter.cke-cs.com/v2/convert/docx-html", {
        method: "POST",
        body: m
      }).then((g) => g.json()).then(async (g) => {
        h(g.html);
      }).catch((g) => {
        console.error("Error:", g), n(!1);
      });
    }
  }
  async function h(m) {
    const f = await d(m);
    e.editor.chain().setContent(f, !0).run(), n(!1);
  }
  return /* @__PURE__ */ u("div", { children: [
    /* @__PURE__ */ r(_, { loading: t, disabled: e == null ? void 0 : e.disabled, icon: e == null ? void 0 : e.icon, tooltip: e == null ? void 0 : e.tooltip, action: c }),
    /* @__PURE__ */ r(
      "input",
      {
        type: "file",
        accept: ".docx",
        ref: o,
        style: {
          display: "none"
        },
        onChange: s
      }
    )
  ] });
}
const vs = H.create({
  name: "importWord",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: void 0,
      convert: void 0,
      button: ({ editor: t, extension: n, t: i }) => {
        const { convert: a } = n.options;
        return {
          component: nc,
          componentProps: {
            convert: a,
            action: () => t.commands.setHorizontalRule(),
            disabled: !t.can().setHorizontalRule(),
            icon: "Word",
            shortcutKeys: ["alt", "mod", "S"],
            tooltip: i("editor.importWrod.tooltip")
          }
        };
      }
    };
  }
}), ic = typeof window < "u";
function rc(e, t) {
  if (ic) {
    const n = window.URL.createObjectURL(e), i = document.createElement("a");
    return i.href = n, i.download = t, i.click(), window.URL.revokeObjectURL(n), Promise.resolve();
  }
  return console.error("Download is not supported in Node.js"), Promise.resolve();
}
const ac = {
  ...Y,
  hardBreak: Y.hard_break,
  codeBlock: Y.code_block,
  orderedList: Y.ordered_list,
  listItem: Y.list_item,
  bulletList: Y.bullet_list,
  horizontalRule: Y.horizontal_rule,
  // Requirement Buffer on browser
  image(e, t) {
    e.renderInline(t), e.closeBlock(t);
  }
}, oc = new Lr(ac, Sr), ys = H.create({
  name: "exportWord",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: n }) => ({
        component: cn,
        componentProps: {
          icon: "ExportWord",
          action: () => {
            t == null || t.commands.exportToWord();
          },
          tooltip: n("editor.exportWord.tooltip"),
          isActive: () => !1,
          disabled: !1
        }
      })
    };
  },
  // @ts-expect-error
  addCommands() {
    return {
      exportToWord: () => async ({ editor: e }) => {
        const t = {
          getImageBuffer: async (i) => {
            const o = await (await fetch(i)).arrayBuffer();
            return new Uint8Array(o);
          }
        }, n = oc.serialize(e.state.doc, t);
        return Ar.toBlob(n).then(
          (i) => rc(new Blob([i]), "export-document.docx")
        ), !0;
      }
    };
  }
}), cc = "_toc_aag8a_1", sc = "_visible_aag8a_7", lc = "_list_aag8a_11", dc = "_item_aag8a_16", Be = {
  toc: cc,
  visible: sc,
  list: lc,
  item: dc,
  "item--3": "_item--3_aag8a_19",
  "item--4": "_item--4_aag8a_22",
  "item--5": "_item--5_aag8a_25",
  "item--6": "_item--6_aag8a_28"
};
function hc(e) {
  const t = [], n = [t];
  return e.forEach((i) => {
    let a = -1, o = n[i.level + a];
    for (; !o; )
      a -= 1, o = n[i.level + a];
    o.push({ ...i, children: n[i.level] = [] });
  }), t;
}
function uc({ editor: e }) {
  const t = e.isEditable, [n, i] = y([]), { t: a } = E(), o = P(() => {
    const c = [], s = e.state.tr;
    e.state.doc.descendants((d, l) => {
      if (d.type.name === "heading") {
        const h = `heading-${c.length + 1}`;
        d.attrs.id !== h && s.setNodeMarkup(l, void 0, {
          ...d.attrs,
          id: h
        }), c.push({
          level: d.attrs.level,
          text: d.textContent,
          id: h
        });
      }
    }), s.setMeta("addToHistory", !1), s.setMeta("preventUpdate", !0), e.view.dispatch(s), i(c), e.eventEmitter && e.eventEmitter.emit("TableOfContents", hc(c));
  }, [e]);
  return A(() => {
    if (e) {
      if (!e.options.editable) {
        o();
        return;
      }
      return e.on("update", o), () => {
        e.off("update", o);
      };
    }
  }, [e, o]), A(() => {
    o();
  }, []), /* @__PURE__ */ r(sr, { className: fe("tableOfContent", Be.toc, t && Be.visible), children: t ? /* @__PURE__ */ u("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ r("p", { className: "richtext-mb-[8px] text-[20px] richtext-font-semibold", children: a("editor.table_of_content") }),
    /* @__PURE__ */ r("ul", { className: Be.list, children: n.map((c, s) => /* @__PURE__ */ r("li", { className: Be.item, style: { paddingLeft: `${c.level - 2}rem` }, children: /* @__PURE__ */ r("a", { href: `#${c.id}`, children: c.text }) }, `table-of-content-${s}`)) })
  ] }) : null });
}
function mc(e) {
  return e && e.type.name === "title";
}
function fc(e, t) {
  const i = [e.getJSON()], a = [];
  for (; i.length; ) {
    const o = i.shift();
    o.type === t && a.push(o), o.content && o.content.length && i.push(...o.content);
  }
  return a;
}
function gc(e, ...t) {
  const [n, i] = y(!1);
  return A(() => {
    const a = () => {
      i(e.isActive.apply(e, t));
    };
    return e.on("selectionUpdate", a), e.on("transaction", a), () => {
      e.off("selectionUpdate", a), e.off("transaction", a);
    };
  }, [e, t, i]), n;
}
function xc({ editor: e, icon: t, tooltip: n }) {
  const i = gc(e, _c.name), a = P(() => {
    if (i) {
      e.chain().focus().removeTableOfContents().run();
      return;
    }
    e.chain().focus().setTableOfContents().run();
  }, [e, i]);
  return /* @__PURE__ */ r(
    _,
    {
      action: a,
      isActive: () => i || !1,
      icon: t,
      tooltip: n
    }
  );
}
const _c = Le.create({
  name: "tableOfContents",
  group: "block",
  atom: !0,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      onHasOneBeforeInsert: () => {
      },
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: t, t: n }) => ({
        component: xc,
        componentProps: {
          disabled: !1,
          icon: "BookMarked",
          tooltip: n("editor.table.tooltip"),
          editor: t
        }
      })
    };
  },
  parseHTML() {
    return [
      {
        tag: "toc"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["toc", Se(e)];
  },
  addNodeView() {
    return lr(uc);
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTableOfContents: () => ({ commands: e, editor: t, view: n }) => {
        if (fc(t, this.name).length) {
          this.options.onHasOneBeforeInsert();
          return;
        }
        const a = n.props.state.doc.content.firstChild;
        if (mc(a)) {
          const o = (a.firstChild && a.firstChild.nodeSize || 0) + 1;
          return e.insertContentAt(o, { type: this.name });
        }
        return e.insertContent({
          type: this.name
        });
      },
      removeTableOfContents: () => ({ state: e, dispatch: t }) => {
        const { tr: n } = e, i = e.schema.nodes.tableOfContents;
        return e.doc.descendants((a, o) => {
          if (a.type === i) {
            const c = o, s = o + a.nodeSize;
            n.delete(c, s);
          }
        }), n.docChanged ? (t(n), !0) : !1;
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: ["heading"],
        attributes: {
          id: {
            default: null
          }
        }
      }
    ];
  }
});
function bc(e) {
  var n;
  const t = B(() => {
    var o;
    const i = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((c) => c.isActive());
    return i && !i.default ? {
      ...i,
      icon: i.icon ? i.icon : e.icon
    } : {
      title: e == null ? void 0 : e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ u(G, { modal: !0, children: [
    /* @__PURE__ */ r(Z, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        customClass: "!richtext-w-12 richtext-h-12",
        icon: e == null ? void 0 : e.icon,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(N, { className: "richtext-w-3 richtext-h-3 richtext-ml-1 richtext-text-zinc-500", name: "MenuDown" })
      }
    ) }),
    /* @__PURE__ */ r(
      V,
      {
        className: "richtext-min-w-4 richtext-w-full !richtext-p-[4px] richtext-flex richtext-flex-row richtext-gap-1",
        align: "start",
        side: "bottom",
        children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((i, a) => {
          var o, c;
          return /* @__PURE__ */ u(pe, { children: [
            /* @__PURE__ */ r(ve, { asChild: !0, children: /* @__PURE__ */ r(
              we,
              {
                size: "sm",
                onClick: i == null ? void 0 : i.action,
                className: "richtext-p-1 richtext-w-7 richtext-h-7",
                pressed: t.title === i.title,
                "data-state": t.title === i.title ? "on" : "off",
                children: (i == null ? void 0 : i.icon) && /* @__PURE__ */ r(N, { name: i.icon })
              }
            ) }),
            /* @__PURE__ */ u(de, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ r("span", { children: i.title }),
              !!((o = i.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: (c = i.shortcutKeys) == null ? void 0 : c.map((s) => qe(s)).join(" ") })
            ] })
          ] }, `text-align-${a}`);
        })
      }
    )
  ] });
}
const ks = H.create({
  name: "text-direction",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["heading", "paragraph"],
      directions: ["auto", "ltr", "rtl"],
      defaultDirection: "auto",
      button({
        editor: t,
        extension: n,
        t: i
      }) {
        var d;
        const a = ((d = n.options) == null ? void 0 : d.directions) || [], o = {
          auto: "TextDirection",
          ltr: "LeftToRight",
          rtl: "RightToLeft"
        }, c = a.map((l) => ({
          title: i(`editor.textDirection.${l}.tooltip`),
          icon: o[l],
          isActive: () => !1,
          action: () => {
            var h, m, f, g;
            if (l === "auto") {
              (m = (h = t.commands) == null ? void 0 : h.unsetTextDirection) == null || m.call(h);
              return;
            }
            (g = (f = t.commands) == null ? void 0 : f.setTextDirection) == null || g.call(f, l);
          },
          disabled: !1
        })), s = c.filter((l) => l.disabled).length === c.length;
        return {
          component: bc,
          componentProps: {
            icon: "TextDirection",
            tooltip: i("editor.textDirection.tooltip"),
            disabled: s,
            items: c
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          dir: {
            default: this.options.defaultDirection,
            parseHTML: (e) => e.attributes.dir && this.options.directions.includes(e.attributes.dir) ? e.attributes.dir.value : this.options.defaultDirection,
            renderHTML: (e) => ({ dir: e.dir })
          }
        }
      }
    ];
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTextDirection: (e) => ({ commands: t }) => this.options.directions.includes(e) ? this.options.types.every((n) => t.updateAttributes(n, { dir: e })) : !1,
      unsetTextDirection: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "dir"))
    };
  }
});
function Et(e, t = !1) {
  return (n) => {
    const i = e.startsWith("data-") ? e : `data-${e}`;
    let a = decodeURIComponent(n.getAttribute(i));
    if (a == null || typeof a == "string" && a === "null")
      try {
        const s = n.outerHTML.match(/([\s\S])+?="([\s\S])+?"/g);
        s && s.length && (a = (s.map((l) => l.trim()).reduce((l, h) => {
          const m = h.indexOf("="), f = [h.slice(0, m), h.slice(m + 1).slice(1, -1)];
          return l[f[0]] = f[1], l;
        }, {})[e.toLowerCase()] || "").replaceAll("&quot;", '"'));
      } catch (c) {
        console.error("Error getDatasetAttribute ", c.message, n);
      }
    if (t)
      try {
        return JSON.parse(a);
      } catch {
        return {};
      }
    if (a.includes("%") || a.includes("auto"))
      return a;
    const o = Number.parseInt(a);
    return o !== o ? a : o;
  };
}
const wc = "_listUsers_en3pm_1", pc = "_itemUser_en3pm_10", vc = "_selectedUser_en3pm_31", Oe = {
  listUsers: wc,
  itemUser: pc,
  selectedUser: vc
}, yc = je((e, t) => {
  const n = re(), [i, a] = y(0), o = (l) => {
    const h = e.items[l];
    h && e.command({ id: h, label: h });
  }, c = () => {
    a((i + e.items.length - 1) % e.items.length);
  }, s = () => {
    a((i + 1) % e.items.length);
  }, d = () => {
    o(i);
  };
  return A(() => a(0), [e.items]), A(() => {
    if (Number.isNaN(i + 1))
      return;
    const l = n.current.querySelector(`span:nth-of-type(${i + 1})`);
    l && dt(l, { behavior: "smooth", scrollMode: "if-needed" });
  }, [i]), Fe(t, () => ({
    onKeyDown: ({ event: l }) => l.key === "ArrowUp" ? (c(), !0) : l.key === "ArrowDown" ? (s(), !0) : l.key === "Enter" ? (d(), !0) : !1
  })), /* @__PURE__ */ r("div", { className: fe("listUsers", Oe.listUsers), children: /* @__PURE__ */ r("div", { ref: n, children: e.items.length ? e.items.map((l, h) => /* @__PURE__ */ r(
    "span",
    {
      className: fe("itemUser", Oe.itemUser, h === i ? Oe.selectedUser : ""),
      onClick: () => o(h),
      children: l
    },
    h
  )) : /* @__PURE__ */ r("div", { className: fe("itemUserEmpty", Oe.itemUser), children: "Empty" }) }) });
}), kc = [
  {
    id: "1",
    name: "John Doe"
  },
  {
    id: "2",
    name: "Jane Doe"
  },
  {
    id: "3",
    name: "Alice"
  },
  {
    id: "4",
    name: "Bob"
  }
], Cc = {
  items: async ({ query: e }) => kc.map((n) => n.name).filter((n) => n.toLowerCase().startsWith(e.toLowerCase())),
  render: () => {
    let e, t;
    return {
      onStart: (n) => {
        e = new ct(yc, {
          props: n,
          editor: n.editor
        }), t = lt("body", {
          getReferenceClientRect: n.clientRect,
          appendTo: () => document.body,
          content: e.element,
          showOnCreate: !0,
          interactive: !0,
          trigger: "manual",
          placement: "bottom-start"
        });
      },
      onUpdate(n) {
        e.updateProps(n), t[0].setProps({
          getReferenceClientRect: n.clientRect
        });
      },
      onKeyDown(n) {
        var i;
        return n.event.key === "Escape" ? (t[0].hide(), !0) : (i = e.ref) == null ? void 0 : i.onKeyDown(n);
      },
      onExit() {
        t[0].destroy(), e.destroy();
      }
    };
  }
}, Cs = dr.extend({
  addAttributes() {
    return {
      id: {
        default: "",
        parseHTML: Et("id")
      },
      label: {
        default: "",
        parseHTML: Et("label")
      }
    };
  }
}).configure({
  HTMLAttributes: {
    class: "mention"
  },
  suggestion: Cc
});
export {
  Kc as B,
  es as C,
  ws as E,
  Jc as F,
  Xc as H,
  Wc as I,
  cs as L,
  ms as M,
  rs as O,
  qc as R,
  Zc as S,
  Qc as T,
  Gc as U,
  Yc as a,
  ts as b,
  ns as c,
  is as d,
  as as e,
  os as f,
  ss as g,
  ls as h,
  hs as i,
  us as j,
  fs as k,
  gs as l,
  Vc as m,
  xs as n,
  _s as o,
  bs as p,
  ft as q,
  ds as r,
  Ae as s,
  Co as t,
  ps as u,
  vs as v,
  ys as w,
  _c as x,
  ks as y,
  Cs as z
};
