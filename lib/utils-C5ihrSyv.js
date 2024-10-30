var qn = Object.defineProperty;
var Kn = (e, t, i) => t in e ? qn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var ue = (e, t, i) => Kn(e, typeof t != "symbol" ? t + "" : t, i);
import { jsxs as m, jsx as r, Fragment as K } from "react/jsx-runtime";
import * as D from "react";
import je, { useState as p, useRef as X, useEffect as E, useCallback as A, useMemo as B, Fragment as ct, forwardRef as Tt, useImperativeHandle as At } from "react";
import "@radix-ui/react-toast";
import { ChevronRight as Gn, Check as Qt, Circle as Zn, ChevronDown as Lt, ChevronUp as Ji, HelpCircle as Xi, Pencil as Yi, Trash2 as Qi, X as Jn, Plus as en, Bold as Xn, LoaderCircle as Yn, Italic as Qn, Underline as er, Quote as tr, Strikethrough as ir, Minus as nr, Eraser as rr, PaintRoller as ar, Redo2 as or, Undo2 as cr, Subscript as sr, Superscript as lr, Code as dr, CodeXml as hr, Type as ur, IndentIncrease as mr, IndentDecrease as fr, List as gr, ListOrdered as xr, ListTodo as br, Link as pr, ImageUp as wr, Video as _r, Maximize as vr, Minimize as yr, Table as kr, Sparkles as Cr, Unlink as Nr, BetweenHorizonalEnd as Tr, BetweenHorizonalStart as Ar, BetweenVerticalStart as Lr, BetweenVerticalEnd as Sr, TableCellsMerge as Mr, TableCellsSplit as Ir, Trash as zr, Replace as Ci, ChevronsUpDown as Hr, Heading1 as Er, Heading2 as Rr, Heading3 as Or, Heading4 as Pr, Heading5 as Br, Heading6 as $r, Columns2 as Ni, Columns3 as Dr, Columns4 as jr, GripVertical as Fr, Copy as tn, Clipboard as Vr, PanelLeft as Ur, PanelRight as Wr, Frame as qr, SmilePlus as Kr, SmilePlusIcon as Gr, Sigma as Zr, BookMarked as Jr, ZoomIn as Xr, ZoomOut as Yr, Settings as Qr, Eye as ea, Paperclip as ta, CropIcon as ia, CopyCheck as na, Clock3 as ra, Laugh as aa, LucideTableProperties as oa, LucideSheet as ca, LucideImage as sa, LucideFile as la, LucideVideo as da, LucideAudioLines as ha } from "lucide-react";
import { B as le, N as ce, a as fe, m as re, R as xe, n as ei, u as ua, E as ma, i as fa, b as ga, c as xa, I as ba, U as pa, S as wa, C as _a, f as it, d as va, e as ya, F as ka, H as Ca, T as Na, g as J, h as Ta, j as Aa, k as La, O as Sa, l as Ma, o as Ia, p as za, L as Ha, q as Ea, r as Ra, s as Oa, D as Pa, t as yt, P as Ba, v as $a, w as Da, G as ja, x as Fa, y as Va, z as Ua, A as Wa, J as qa, K as Ka, M as nn, Q as rn, V as an, W as ti, X as ii, Y as Ga, Z as Za, _ as Ja, $ as Xa, a0 as Ya, a1 as Ti } from "./tiptap-YQs34NjN.js";
import { ah as Qa, ai as ee, aj as ni, ak as ri, al as eo, am as on, an as to, ao as Ae, e as St, d as Le, ap as cn, aq as io, ar as no, as as ai, at as ro, P as Ge, a as Se, Z as nt, _ as rt, au as ao, av as kt, aw as sn, ae as oo } from "./vendor-B-Qwdobh.js";
import { bundledThemes as ln, bundledLanguages as dn, createHighlighter as co } from "shiki";
import { u as j, C as so, E as lo, l as W, B as ho, I as Ct, V as Ft, M as uo, D as hn, a as mo, b as fo, c as Ai, d as un, e as go, f as Fe, g as Ve, h as oi, T as ft, i as gt, j as xt } from "./locales-BA_xIZcH.js";
import * as Z from "@radix-ui/react-select";
import { Slot as ci } from "@radix-ui/react-slot";
import si, { sticky as xo } from "tippy.js";
import { flushSync as Ue } from "react-dom";
import bo from "react-image-crop";
import { proxy as li, useSnapshot as di } from "valtio";
import * as Vt from "@radix-ui/react-checkbox";
import hi from "scroll-into-view-if-needed";
import * as Me from "@radix-ui/react-tabs";
import { defaultNodes as ye, DocxSerializer as po, defaultMarks as wo } from "prosemirror-docx";
import { Packer as _o } from "docx";
import Nt from "mermaid";
import * as ne from "@radix-ui/react-dialog";
import ui from "katex";
import * as at from "@radix-ui/react-popover";
import * as mn from "@radix-ui/react-label";
import { Resizable as fn } from "re-resizable";
import * as gn from "@radix-ui/react-separator";
import { HexColorPicker as vo } from "react-colorful";
import { TextAlignCenterIcon as yo, TextAlignJustifyIcon as ko, TextAlignLeftIcon as Co, TextAlignRightIcon as No } from "@radix-ui/react-icons";
import * as Ut from "@radix-ui/react-switch";
import * as G from "@radix-ui/react-dropdown-menu";
import * as st from "@radix-ui/react-tooltip";
import * as xn from "@radix-ui/react-toggle";
let Et;
function Rt() {
  return Et === void 0 && (Et = navigator.platform.includes("Mac")), Et;
}
function Mt(e) {
  return `${e}`.toLowerCase() === "mod" ? Rt() ? "⌘" : "Ctrl" : `${e}`.toLowerCase() === "alt" ? Rt() ? "⌥" : "Alt" : `${e}`.toLowerCase() === "shift" ? Rt() ? "⇧" : "Shift" : e;
}
function It(e) {
  return e.map(Mt).join(" ");
}
function P(...e) {
  return Qa(ee(e));
}
const _ = je.forwardRef(
  (e, t) => {
    const {
      icon: i = void 0,
      // title = undefined,
      tooltip: n = void 0,
      disabled: a = !1,
      customClass: o = "",
      // color = undefined,
      // loading = false,
      shortcutKeys: c = void 0,
      tooltipOptions: s = {},
      action: h = void 0,
      isActive: l = void 0,
      children: d,
      asChild: u = !1,
      upload: f = !1,
      ...g
    } = e, x = mt[i];
    return /* @__PURE__ */ m(Ze, { children: [
      /* @__PURE__ */ r(Je, { asChild: !0, children: /* @__PURE__ */ m(
        u ? ci : ut,
        {
          ref: t,
          size: "sm",
          className: P("richtext-w-[32px] richtext-h-[32px]", o),
          disabled: a,
          onClick: h,
          "data-state": l != null && l() ? "on" : "off",
          ...g,
          children: [
            x && /* @__PURE__ */ r(x, { className: "richtext-w-4 richtext-h-4" }),
            d
          ]
        }
      ) }),
      n && /* @__PURE__ */ r(ze, { ...s, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
        /* @__PURE__ */ r("div", { children: n }),
        !!(c != null && c.length) && /* @__PURE__ */ r("span", { children: It(c) })
      ] }) })
    ] });
  }
), mi = je.forwardRef(
  ({ asChild: e, ...t }, i) => {
    var o;
    const n = mt[t.icon];
    return /* @__PURE__ */ m(Ze, { children: [
      /* @__PURE__ */ r(Je, { asChild: !0, children: /* @__PURE__ */ r(
        e ? ci : V,
        {
          ref: i,
          className: "richtext-h-[32px] richtext-px-[5px] richtext-py-0 richtext-min-w-24  richtext-overflow-hidden",
          variant: "ghost",
          disabled: t == null ? void 0 : t.disabled,
          ...t,
          children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-h-full richtext-font-normal", children: [
            (t == null ? void 0 : t.title) && /* @__PURE__ */ r("div", { className: "richtext-flex-grow richtext-text-sm richtext-text-left richtext-truncate", children: t == null ? void 0 : t.title }),
            n && /* @__PURE__ */ r(n, { className: "richtext-flex-shrink-0 richtext-w-3 richtext-h-3 richtext-ml-1 richtext-text-zinc-500" })
          ] })
        }
      ) }),
      /* @__PURE__ */ r(ze, { children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
        (t == null ? void 0 : t.tooltip) && /* @__PURE__ */ r("div", { children: t == null ? void 0 : t.tooltip }),
        /* @__PURE__ */ r("div", { className: "richtext-flex", children: !!((o = t == null ? void 0 : t.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: It(t == null ? void 0 : t.shortcutKeys) }) })
      ] }) })
    ] });
  }
);
function lt(e, t) {
  const { state: i } = t, n = i.selection.$anchor;
  let a = !1;
  if (n.depth)
    for (let o = n.depth; o > 0; o--)
      n.node(o).type.name === e && (t.dispatchTransaction && t.dispatchTransaction(i.tr.delete(n.before(o), n.after(o)).scrollIntoView()), a = !0);
  else {
    const o = i.selection.node;
    o && o.type.name === e && (t.chain().deleteSelection().run(), a = !0);
  }
  if (!a) {
    const o = n.pos;
    if (o) {
      const c = i.tr.doc.nodeAt(o);
      c && c.type.name === e && (t.dispatchTransaction && t.dispatchTransaction(i.tr.delete(o, o + c.nodeSize)), a = !0);
    }
  }
  return a;
}
function To(e) {
  return e;
}
function dt(e, t, i, n) {
  const a = To, [o, c] = p(a(i)), s = X(o);
  return E(() => {
    const h = () => {
      const l = { ...i, ...e.getAttributes(t) };
      Object.keys(l).forEach((u) => {
        (l[u] === null || l[u] === void 0) && (l[u] = i ? i[u] : null);
      });
      const d = a(l);
      ni(s.current, d) || (c(d), s.current = d);
    };
    return e.on("selectionUpdate", h), e.on("transaction", h), () => {
      e.off("selectionUpdate", h), e.off("transaction", h);
    };
  }, [e, i, t, a]), o;
}
const ht = D.forwardRef(
  ({ className: e, ...t }, i) => /* @__PURE__ */ r(
    "textarea",
    {
      className: P(
        "richtext-flex richtext-min-h-[80px] richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        e
      ),
      ref: i,
      ...t
    }
  )
);
ht.displayName = "Textarea";
const Ao = ri(
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
), V = D.forwardRef(
  ({ className: e, variant: t, size: i, asChild: n = !1, ...a }, o) => /* @__PURE__ */ r(
    n ? ci : "button",
    {
      className: P(Ao({ variant: t, size: i, className: e })),
      ref: o,
      ...a
    }
  )
);
V.displayName = "Button";
const pe = G.Root, we = G.Trigger, Li = G.Portal, Si = G.Sub, Wt = D.forwardRef(({ className: e, inset: t, children: i, ...n }, a) => /* @__PURE__ */ m(
  G.SubTrigger,
  {
    ref: a,
    className: P(
      "richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none focus:richtext-bg-accent data-[state=open]:richtext-bg-accent",
      t && "richtext-pl-8",
      e
    ),
    ...n,
    children: [
      i,
      /* @__PURE__ */ r(Gn, { className: "richtext-ml-auto richtext-h-4 richtext-w-4" })
    ]
  }
));
Wt.displayName = G.SubTrigger.displayName;
const qt = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  G.SubContent,
  {
    ref: i,
    className: P(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-lg data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
qt.displayName = G.SubContent.displayName;
const be = D.forwardRef(({ className: e, sideOffset: t = 4, ...i }, n) => /* @__PURE__ */ r(G.Portal, { children: /* @__PURE__ */ r(
  G.Content,
  {
    ref: n,
    sideOffset: t,
    className: P(
      "richtext-z-50 richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...i
  }
) }));
be.displayName = G.Content.displayName;
const oe = D.forwardRef(({ className: e, inset: t, ...i }, n) => /* @__PURE__ */ r(
  G.Item,
  {
    ref: n,
    className: P(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t && "richtext-pl-8",
      e
    ),
    ...i
  }
));
oe.displayName = G.Item.displayName;
const Ie = D.forwardRef(({ className: e, children: t, checked: i, ...n }, a) => /* @__PURE__ */ m(
  G.CheckboxItem,
  {
    ref: a,
    className: P(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    checked: i,
    ...n,
    children: [
      /* @__PURE__ */ r("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ r(G.ItemIndicator, { children: /* @__PURE__ */ r(Qt, { className: "richtext-h-4 richtext-w-4" }) }) }),
      t
    ]
  }
));
Ie.displayName = G.CheckboxItem.displayName;
const Lo = D.forwardRef(({ className: e, children: t, ...i }, n) => /* @__PURE__ */ m(
  G.RadioItem,
  {
    ref: n,
    className: P(
      "richtext-relative richtext-flex richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...i,
    children: [
      /* @__PURE__ */ r("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ r(G.ItemIndicator, { children: /* @__PURE__ */ r(Zn, { className: "richtext-h-2 richtext-w-2 richtext-fill-current" }) }) }),
      t
    ]
  }
));
Lo.displayName = G.RadioItem.displayName;
const So = D.forwardRef(({ className: e, inset: t, ...i }, n) => /* @__PURE__ */ r(
  G.Label,
  {
    ref: n,
    className: P(
      "richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-font-semibold",
      t && "richtext-pl-8",
      e
    ),
    ...i
  }
));
So.displayName = G.Label.displayName;
const zt = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  G.Separator,
  {
    ref: i,
    className: P("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...t
  }
));
zt.displayName = G.Separator.displayName;
function bn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "span",
    {
      className: P("richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", e),
      ...t
    }
  );
}
bn.displayName = "DropdownMenuShortcut";
const te = D.forwardRef(
  ({ className: e, type: t, ...i }, n) => /* @__PURE__ */ r(
    "input",
    {
      type: t,
      className: P(
        "richtext-flex richtext-h-10 richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background file:richtext-border-0 file:richtext-bg-transparent file:richtext-text-sm file:richtext-font-medium placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none  disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        e
      ),
      ref: n,
      ...i
    }
  )
);
te.displayName = "Input";
const Mo = ri(
  "richtext-text-sm richtext-font-medium richtext-leading-none peer-disabled:richtext-cursor-not-allowed peer-disabled:richtext-opacity-70"
), ie = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  mn.Root,
  {
    ref: i,
    className: P(Mo(), e),
    ...t
  }
));
ie.displayName = mn.Root.displayName;
const de = at.Root, he = at.Trigger, ae = D.forwardRef(({ className: e, align: t = "center", sideOffset: i = 4, ...n }, a) => /* @__PURE__ */ r(at.Portal, { children: /* @__PURE__ */ r(
  at.Content,
  {
    ref: a,
    align: t,
    sideOffset: i,
    className: P(
      "richtext-z-50 richtext-w-72 richtext-rounded-md !richtext-border richtext-bg-popover richtext-p-4 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
ae.displayName = at.Content.displayName;
const se = D.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: i = !0, ...n }, a) => /* @__PURE__ */ r(
    gn.Root,
    {
      ref: a,
      decorative: i,
      orientation: t,
      className: P(
        "richtext-shrink-0 richtext-bg-border",
        t === "horizontal" ? "richtext-h-[1px] richtext-w-full" : "richtext-h-full richtext-w-[1px]",
        e
      ),
      ...n
    }
  )
);
se.displayName = gn.Root.displayName;
const fi = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Ut.Root,
  {
    className: P(
      "richtext-peer richtext-inline-flex richtext-h-6 richtext-w-11 richtext-shrink-0 richtext-cursor-pointer richtext-items-center richtext-rounded-full richtext-border-2 richtext-border-transparent richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 focus-visible:richtext-ring-offset-background disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 data-[state=checked]:richtext-bg-primary data-[state=unchecked]:richtext-bg-input",
      e
    ),
    ...t,
    ref: i,
    children: /* @__PURE__ */ r(
      Ut.Thumb,
      {
        className: P(
          "richtext-pointer-events-none richtext-block richtext-h-5 richtext-w-5 richtext-rounded-full richtext-bg-background richtext-shadow-lg richtext-ring-0 richtext-transition-transform data-[state=checked]:richtext-translate-x-5 data-[state=unchecked]:richtext-translate-x-0"
        )
      }
    )
  }
));
fi.displayName = Ut.Root.displayName;
const gi = Me.Root, Ht = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Me.List,
  {
    ref: i,
    className: P(
      "richtext-inline-flex richtext-h-10 richtext-items-center richtext-justify-center richtext-rounded-md richtext-bg-muted richtext-p-1 richtext-text-muted-foreground",
      e
    ),
    ...t
  }
));
Ht.displayName = Me.List.displayName;
const We = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Me.Trigger,
  {
    ref: i,
    className: P(
      "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-sm richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-all focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=active]:richtext-bg-background data-[state=active]:richtext-text-foreground data-[state=active]:richtext-shadow-sm",
      e
    ),
    ...t
  }
));
We.displayName = Me.Trigger.displayName;
const qe = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Me.Content,
  {
    ref: i,
    className: P(
      "richtext-mt-2 richtext-ring-offset-background focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-2",
      e
    ),
    ...t
  }
));
qe.displayName = Me.Content.displayName;
const Io = ri(
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
), ut = D.forwardRef(({ className: e, variant: t, size: i, ...n }, a) => /* @__PURE__ */ r(
  xn.Root,
  {
    ref: a,
    className: P(Io({ variant: t, size: i, className: e })),
    ...n
  }
));
ut.displayName = xn.Root.displayName;
const zo = st.Provider, Ze = st.Root, Je = st.Trigger, ze = D.forwardRef(({ className: e, sideOffset: t = 4, ...i }, n) => /* @__PURE__ */ r(
  st.Content,
  {
    ref: n,
    sideOffset: t,
    className: P(
      "richtext-z-50 richtext-overflow-hidden richtext-rounded-md !richtext-border richtext-bg-popover richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-text-popover-foreground richtext-shadow-md richtext-animate-in richtext-fade-in-0 richtext-zoom-in-95 data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=closed]:richtext-zoom-out-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...i
  }
));
ze.displayName = st.Content.displayName;
const Ho = Z.Root, Eo = Z.Value, pn = D.forwardRef(({ className: e, children: t, ...i }, n) => /* @__PURE__ */ m(
  Z.Trigger,
  {
    ref: n,
    className: P(
      "richtext-flex richtext-h-10 richtext-w-full richtext-items-center richtext-justify-between richtext-rounded-md richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background placeholder:richtext-text-muted-foreground focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 [&>span]:richtext-line-clamp-1",
      e
    ),
    ...i,
    children: [
      t,
      /* @__PURE__ */ r(Z.Icon, { asChild: !0, children: /* @__PURE__ */ r(Lt, { className: "richtext-h-4 richtext-w-4 richtext-opacity-50" }) })
    ]
  }
));
pn.displayName = Z.Trigger.displayName;
const wn = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Z.ScrollUpButton,
  {
    ref: i,
    className: P(
      "richtext-flex richtext-cursor-default richtext-items-center richtext-justify-center richtext-py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(Ji, { className: "richtext-h-4 richtext-w-4" })
  }
));
wn.displayName = Z.ScrollUpButton.displayName;
const _n = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Z.ScrollDownButton,
  {
    ref: i,
    className: P(
      "richtext-flex richtext-cursor-default richtext-items-center richtext-justify-center richtext-py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(Lt, { className: "richtext-h-4 richtext-w-4" })
  }
));
_n.displayName = Z.ScrollDownButton.displayName;
const vn = D.forwardRef(({ className: e, children: t, position: i = "popper", ...n }, a) => /* @__PURE__ */ r(Z.Portal, { children: /* @__PURE__ */ m(
  Z.Content,
  {
    ref: a,
    className: P(
      "richtext-relative richtext-z-50 richtext-max-h-60 richtext-overflow-y-auto richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md richtext-border richtext-bg-popover richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      i === "popper" && "data-[side=bottom]:richtext-translate-y-1 data-[side=left]:richtext--translate-x-1 data-[side=right]:richtext-translate-x-1 data-[side=top]:richtext--translate-y-1",
      e
    ),
    position: i,
    ...n,
    children: [
      /* @__PURE__ */ r(wn, {}),
      /* @__PURE__ */ r(
        Z.Viewport,
        {
          className: P(
            "richtext-p-1",
            i === "popper" && "richtext-h-[var(--radix-select-trigger-height)] richtext-w-full richtext-min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ r(_n, {})
    ]
  }
) }));
vn.displayName = Z.Content.displayName;
const Ro = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Z.Label,
  {
    ref: i,
    className: P("richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-font-semibold", e),
    ...t
  }
));
Ro.displayName = Z.Label.displayName;
const Kt = D.forwardRef(({ className: e, children: t, ...i }, n) => /* @__PURE__ */ m(
  Z.Item,
  {
    ref: n,
    className: P(
      "richtext-relative richtext-flex richtext-w-full richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...i,
    children: [
      /* @__PURE__ */ r("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ r(Z.ItemIndicator, { children: /* @__PURE__ */ r(Qt, { className: "richtext-h-4 richtext-w-4" }) }) }),
      /* @__PURE__ */ r(Z.ItemText, { children: t })
    ]
  }
));
Kt.displayName = Z.Item.displayName;
const Oo = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Z.Separator,
  {
    ref: i,
    className: P("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...t
  }
));
Oo.displayName = Z.Separator.displayName;
const yn = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  Vt.Root,
  {
    ref: i,
    className: P(
      "!richtext-peer !richtext-h-4 !richtext-w-4 !richtext-p-0 !richtext-shrink-0 !richtext-rounded-sm !richtext-border !richtext-border-primary !richtext-ring-offset-background focus-visible:!richtext-outline-none focus-visible:!richtext-ring-2 focus-visible:!richtext-ring-ring focus-visible:!richtext-ring-offset-2 disabled:!richtext-cursor-not-allowed disabled:!richtext-opacity-50 data-[state=checked]:!richtext-bg-primary data-[state=checked]:!richtext-text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(
      Vt.Indicator,
      {
        className: P("!richtext-flex !richtext-p-0 !richtext-items-center !richtext-justify-center !richtext-text-current"),
        children: /* @__PURE__ */ r(Qt, { className: "!richtext-h-4 !richtext-w-4" })
      }
    )
  }
));
yn.displayName = Vt.Root.displayName;
function Po({ editor: e, ...t }) {
  const i = dt(e, De.name, {
    text: "",
    defaultShowPicker: !1
  }), { text: n, defaultShowPicker: a } = i, [o, c] = p(""), [s, h] = p(!1), l = A(() => e.isActive(De.name), [e]), d = A(() => lt(De.name, e), [e]), u = A(() => {
    e.chain().focus().setKatex({ text: o }).run(), h(!1);
  }, [e, o]);
  E(() => {
    a && (h(!0), e.chain().updateAttributes(De.name, { defaultShowPicker: !1 }).focus().run());
  }, [e, a, h]), E(() => {
    s && c(n || "");
  }, [s]);
  const f = B(() => {
    try {
      return ui.renderToString(`${o}`);
    } catch {
      return o;
    }
  }, [o]), g = B(
    () => `${o}`.trim() ? /* @__PURE__ */ r("span", { contentEditable: !1, dangerouslySetInnerHTML: { __html: f || "" } }) : null,
    [o, f]
  );
  return /* @__PURE__ */ r(
    le,
    {
      editor: e,
      pluginKey: "Katex-bubble-menu",
      shouldShow: l,
      tippyOptions: {
        popperOptions: {
          modifiers: [{ name: "flip", enabled: !1 }]
        },
        placement: "bottom-start",
        offset: [-2, 16],
        zIndex: 9999,
        onHidden: () => {
          h(!1);
        }
      },
      children: t != null && t.disabled ? /* @__PURE__ */ r(K, {}) : /* @__PURE__ */ r("div", { className: "richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: s ? /* @__PURE__ */ m(K, { children: [
        /* @__PURE__ */ r(
          ht,
          {
            value: o,
            onChange: (x) => c(x.target.value),
            autoFocus: !0,
            placeholder: "Formula text",
            rows: 3,
            defaultValue: n,
            style: { marginBottom: 8 }
          }
        ),
        g && /* @__PURE__ */ r("div", { className: "richtext-my-[10px] richtext-p-[10px] richtext-rounded-[6px] !richtext-border-[1px] richtext-whitespace-nowrap richtext-overflow-auto", children: g }),
        /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-gap-[6px]", children: [
          /* @__PURE__ */ r(V, { onClick: u, className: "richtext-flex-1", children: "Submit" }),
          /* @__PURE__ */ r("a", { href: "https://katex.org/docs/supported", target: "_blank", rel: "noreferrer noopener", children: /* @__PURE__ */ r(Xi, { size: 16 }) })
        ] })
      ] }) : /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-gap-[6px]", children: [
        /* @__PURE__ */ r(_, { tooltip: "Edit", action: () => h(!s), children: /* @__PURE__ */ r(Yi, { size: 16 }) }),
        /* @__PURE__ */ r(_, { tooltip: "Delete", action: d, children: /* @__PURE__ */ r(Qi, { size: 16 }) })
      ] }) })
    }
  );
}
function Bo(e) {
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
    on(t, i) {
      const n = e.get(t);
      n ? n.push(i) : e.set(t, [i]);
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off(t, i) {
      const n = e.get(t);
      n && (i ? n.splice(n.indexOf(i) >>> 0, 1) : e.set(t, []));
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
    emit(t, i) {
      let n = e.get(t);
      n && [...n].map((a) => {
        a(i);
      }), n = e.get("*"), n && [...n].map((a) => {
        a(t, i);
      });
    }
  };
}
const $o = { padding: "0 12px 12px" }, kn = ({ width: e, maxWidth: t, height: i, onOk: n, children: a }) => {
  const { t: o } = j(), [c, s] = p({
    width: "",
    height: "",
    maxWidth: ""
  });
  E(() => {
    s({
      width: e,
      height: i,
      maxWidth: t
    });
  }, [i, t, e]);
  function h(l) {
    l.preventDefault(), n(c);
  }
  return /* @__PURE__ */ m(de, { modal: !0, children: [
    /* @__PURE__ */ r(he, { asChild: !0, children: a }),
    /* @__PURE__ */ r(ae, { children: /* @__PURE__ */ r("div", { style: $o, children: /* @__PURE__ */ m("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: h, children: [
      /* @__PURE__ */ r(ie, { className: "mb-[6px]", children: "Width" }),
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
        te,
        {
          type: "number",
          value: c.width,
          required: !0,
          onChange: (l) => s({ ...c, width: l.target.value })
        }
      ) }) }),
      /* @__PURE__ */ r(ie, { className: "mb-[6px]", children: "Max Width" }),
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
        te,
        {
          type: "number",
          value: c.maxWidth,
          required: !0,
          onChange: (l) => s({ ...c, maxWidth: l.target.value })
        }
      ) }) }),
      /* @__PURE__ */ r(ie, { className: "mb-[6px]", children: "Height" }),
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
        te,
        {
          type: "number",
          value: c.height,
          required: !0,
          onChange: (l) => s({ ...c, height: l.target.value })
        }
      ) }) }),
      /* @__PURE__ */ r(V, { type: "submit", className: "richtext-self-end richtext-mt-2", children: o("editor.link.dialog.button.apply") })
    ] }) }) })
  ] });
}, Do = "_wrap_15k3c_1", jo = "_renderWrap_15k3c_7", Fo = "_title_15k3c_14", Vo = "_icon_15k3c_20", Uo = "_handlerWrap_15k3c_30", Ye = {
  wrap: Do,
  renderWrap: jo,
  title: Fo,
  icon: Vo,
  handlerWrap: Uo
};
function Cn(e, t, i) {
  return e < t ? t : e > i ? i : e;
}
const Wo = (e) => typeof e == "number", qo = (e) => typeof e == "string", Ko = (e) => typeof e == "function";
function Go(e, t = "px") {
  if (!e)
    return e;
  const i = Wo(e) ? String(e) : e, n = Number.parseFloat(i), a = i.match(/[a-z%]+$/i), o = a ? a[0] : t;
  return Number.isNaN(n) ? e : n + o;
}
function Nn(e, t) {
  if (!e)
    return !1;
  const { extensions: i = [] } = (e == null ? void 0 : e.extensionManager) ?? {};
  return !!i.find((a) => a.name === t);
}
function Gt(e) {
  return e.map((t) => qo(t) ? { value: t, name: t } : t);
}
const Zo = 10, Jo = 200, Mi = 15, Ii = { width: "100%", height: "100%", maxWidth: "100%" };
function Xo({ editor: e, node: t, updateAttributes: i }) {
  const n = X(null), a = e.isActive(Pe.name), { data: o, width: c, height: s } = t.attrs, [h, l] = p(null), [d, u] = p(!0), [f, g] = p(null), [x, b] = p(!1), [C, I] = p(100), v = A(
    (N) => {
      N && b(!0);
    },
    [b]
  ), w = A((N) => () => {
    I(
      (M) => Cn(N === "minus" ? M - Mi : M + Mi, Zo, Jo)
    );
  }, []);
  E(() => {
    let N = !1;
    return import("@excalidraw/excalidraw").then((M) => {
      N || (n.current = M.exportToSvg);
    }).catch((M) => !N && g(M)).finally(() => !N && u(!1)), () => {
      N = !0;
    };
  }, [u, o]), E(() => {
    let N = !1;
    return (async () => {
      if (N || d || f || !x || !o)
        return;
      const O = await n.current(o);
      N || (O.setAttribute("width", "100%"), O.setAttribute("height", "100%"), O.setAttribute("display", "block"), l(O));
    })(), () => {
      N = !0;
    };
  }, [o, d, f, x]);
  const y = (N) => {
    i({ width: N.width, height: N.height });
  };
  return /* @__PURE__ */ r(ce, { className: ee(Ye.wrap, a && Ye.isActive), children: /* @__PURE__ */ r(eo, { onChange: v, children: /* @__PURE__ */ r(
    fn,
    {
      size: { width: Number.parseInt(c), height: Number.parseInt(s) },
      onResizeStop: (N, M, O, S) => {
        y({
          width: Number.parseInt(c) + S.width,
          height: Number.parseInt(s) + S.height
        });
      },
      children: /* @__PURE__ */ m(
        "div",
        {
          className: ee(Ye.renderWrap, "render-wrapper"),
          style: { ...Ii, overflow: "hidden" },
          children: [
            f && /* @__PURE__ */ r("div", { style: Ii, children: /* @__PURE__ */ r("p", { children: f.message || f }) }),
            d && /* @__PURE__ */ r("p", { children: "Loading..." }),
            !d && !f && x && /* @__PURE__ */ r(
              "div",
              {
                style: {
                  height: "100%",
                  maxHeight: "100%",
                  padding: 24,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: `scale(${C / 100})`,
                  transition: "all ease-in-out .3s"
                },
                dangerouslySetInnerHTML: { __html: (h == null ? void 0 : h.outerHTML) ?? "" }
              }
            ),
            /* @__PURE__ */ r("div", { className: Ye.title }),
            /* @__PURE__ */ m("div", { className: Ye.handlerWrap, children: [
              /* @__PURE__ */ r(
                _,
                {
                  icon: "ZoomOut",
                  action: w("minus"),
                  tooltip: "Zoom Out"
                }
              ),
              /* @__PURE__ */ r(
                _,
                {
                  icon: "ZoomIn",
                  action: w("plus"),
                  tooltip: "Zoom In"
                }
              )
            ] })
          ]
        }
      )
    }
  ) }) });
}
const Yo = je.memo(Xo, (e, t) => !!ni(e.node.attrs, t.node.attrs));
function Qo(e, t = "{}") {
  try {
    return JSON.stringify(e);
  } catch {
    return t;
  }
}
function ec(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return JSON.stringify({});
  }
}
function Y(e, t = !1) {
  return (i) => {
    const n = e.startsWith("data-") ? e : `data-${e}`;
    let a = decodeURIComponent(i.getAttribute(n));
    if (a == null || typeof a == "string" && a === "null")
      try {
        const s = i.outerHTML.match(/([\s\S])+?="([\s\S])+?"/g);
        s && s.length && (a = (s.map((l) => l.trim()).reduce((l, d) => {
          const u = d.indexOf("="), f = [d.slice(0, u), d.slice(u + 1).slice(1, -1)];
          return l[f[0]] = f[1], l;
        }, {})[e.toLowerCase()] || "").replaceAll("&quot;", '"'));
      } catch (c) {
        console.error("Error getDatasetAttribute ", c.message, i);
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
function tc(e) {
  const { attrs: t } = e;
  return Object.keys(t).reduce((i, n) => {
    const a = t[n];
    if (a == null)
      return i;
    let o = "";
    return typeof a == "object" ? o = ec(a) : o = a, i[n] = o, i;
  }, /* @__PURE__ */ Object.create(null));
}
const He = ne.Root, Ee = ne.Trigger, ic = ne.Portal, Tn = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  ne.Overlay,
  {
    ref: i,
    className: P(
      "richtext-fixed richtext-inset-0 richtext-z-50 richtext-bg-black/80 richtext- data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0",
      e
    ),
    ...t
  }
));
Tn.displayName = ne.Overlay.displayName;
const _e = D.forwardRef(({ className: e, children: t, ...i }, n) => /* @__PURE__ */ m(ic, { children: [
  /* @__PURE__ */ r(Tn, {}),
  /* @__PURE__ */ m(
    ne.Content,
    {
      ref: n,
      className: P(
        "richtext-dialog-content richtext-fixed richtext-left-[50%] richtext-top-[50%] richtext-z-50 richtext-grid richtext-w-full richtext-max-w-lg richtext-translate-x-[-50%] richtext-translate-y-[-50%] richtext-gap-4 richtext-border richtext-bg-background richtext-p-6 richtext-shadow-lg richtext-duration-200 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[state=closed]:richtext-slide-out-to-left-1/2 data-[state=closed]:richtext-slide-out-to-top-[48%] data-[state=open]:richtext-slide-in-from-left-1/2 data-[state=open]:richtext-slide-in-from-top-[48%] sm:richtext-rounded-lg",
        e
      ),
      ...i,
      children: [
        t,
        /* @__PURE__ */ m(ne.Close, { className: "richtext-absolute richtext-right-4 richtext-top-4 richtext-rounded-sm richtext-opacity-70 richtext-ring-offset-background richtext-transition-opacity hover:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-pointer-events-none data-[state=open]:richtext-bg-accent data-[state=open]:richtext-text-muted-foreground", children: [
          /* @__PURE__ */ r(Jn, { className: "richtext-h-4 richtext-w-4" }),
          /* @__PURE__ */ r("span", { className: "richtext-sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
_e.displayName = ne.Content.displayName;
function An({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: P(
        "richtext-flex richtext-flex-col richtext-space-y-1.5 richtext-text-center sm:richtext-text-left",
        e
      ),
      ...t
    }
  );
}
An.displayName = "DialogHeader";
function Xe({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: P(
        "richtext-flex richtext-flex-col-reverse sm:richtext-flex-row sm:richtext-justify-end sm:richtext-space-x-2",
        e
      ),
      ...t
    }
  );
}
Xe.displayName = "DialogFooter";
const ve = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  ne.Title,
  {
    ref: i,
    className: P(
      "richtext-text-lg richtext-font-semibold richtext-leading-none richtext-tracking-tight",
      e
    ),
    ...t
  }
));
ve.displayName = ne.Title.displayName;
const nc = D.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  ne.Description,
  {
    ref: i,
    className: P("richtext-text-sm richtext-text-muted-foreground", e),
    ...t
  }
));
nc.displayName = ne.Description.displayName;
let Ot;
function xi() {
  try {
    return Ot || (Ot = Bo()), Ot;
  } catch {
    throw new Error("Error EventEmitter");
  }
}
const Zt = "OPEN_EXCALIDRAW_SETTING_MODAL";
function rc(e, t) {
  xi().on(e, t);
}
function ac(e, t) {
  xi().off(e, t);
}
function oc(e) {
  xi().emit(Zt, e);
}
const cc = ({ editor: e }) => {
  const [t, i] = p(null), [n, a] = p({}), [o, c] = p({ elements: [], appState: { isLoading: !1 }, files: null }), [s, h] = p(!1), [l, d] = p(!0), [u, f] = p(null), g = A(
    (I) => {
      I && import("@excalidraw/excalidraw").then((v) => {
        i(v.Excalidraw);
      }).catch(f).finally(() => d(!1));
    },
    [d]
  ), x = A((I) => {
    setTimeout(() => {
      I.refresh();
    });
  }, []), b = A((I, v, w) => {
    a({
      elements: I,
      appState: { isLoading: !1 },
      files: w
    });
  }, []), C = A(() => {
    if (!t) {
      h(!1);
      return;
    }
    e.chain().focus().setExcalidraw({ data: n }).run(), h(!1);
  }, [t, e, n, h]);
  return E(() => {
    const I = (v) => {
      h(!0), v && c(v.data);
    };
    return rc(Zt, I), () => {
      ac(Zt, I);
    };
  }, [e, h]), /* @__PURE__ */ m(
    He,
    {
      open: s,
      onOpenChange: h,
      children: [
        /* @__PURE__ */ r(Ee, { asChild: !0, children: /* @__PURE__ */ r(
          _,
          {
            icon: "Excalidraw",
            tooltip: "Excalidraw",
            action: () => h(!0)
          }
        ) }),
        /* @__PURE__ */ m(_e, { className: "!richtext-max-w-[1300px] richtext-z-[99999]", children: [
          /* @__PURE__ */ r(ve, { children: "Excalidraw" }),
          /* @__PURE__ */ m("div", { style: { height: "100%", borderWidth: 1 }, children: [
            l && /* @__PURE__ */ r("p", { children: "Loading..." }),
            u && /* @__PURE__ */ r("p", { children: u && u.message || "Error" }),
            /* @__PURE__ */ r("div", { style: { width: "100%", height: 600 }, ref: g, children: !l && !u && t ? /* @__PURE__ */ r(t, { ref: x, onChange: b, langCode: "en", initialData: o }) : null })
          ] }),
          /* @__PURE__ */ r(Xe, { children: /* @__PURE__ */ r(
            V,
            {
              type: "button",
              onClick: C,
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
}, zi = { elements: [] }, Pe = fe.create({
  name: "excalidraw",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  inline: !1,
  addAttributes() {
    return {
      defaultShowPicker: {
        default: !1
      },
      createUser: {
        default: null
      },
      width: {
        default: "100%",
        parseHTML: Y("width")
      },
      height: {
        default: 240,
        parseHTML: Y("height")
      },
      data: {
        default: zi,
        parseHTML: Y("data", !0)
      }
    };
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "excalidraw"
      },
      button: ({ editor: t }) => ({
        component: cc,
        componentProps: {
          editor: t
        }
      })
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=excalidraw]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e, node: t }) {
    return ["div", re(this.options.HTMLAttributes, e, tc(t))];
  },
  addCommands() {
    return {
      setExcalidraw: (e) => ({ tr: t, commands: i, chain: n }) => {
        var a, o, c;
        return e = e || {}, e.data = e.data || zi, ((c = (o = (a = t.selection) == null ? void 0 : a.node) == null ? void 0 : o.type) == null ? void 0 : c.name) == this.name ? i.updateAttributes(this.name, e) : n().insertContent({
          type: this.name,
          attrs: e
        }).run();
      }
    };
  },
  addNodeView() {
    return xe(Yo);
  },
  addInputRules() {
    return [
      ei({
        find: /^\$excalidraw\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  }
}), ke = /* @__PURE__ */ new Map();
function sc(e) {
  const t = e.options.element;
  ke.has("width") || ke.set("width", t.clientWidth), ke.has("width") && ke.get("width") <= 0 && ke.set("width", t.clientWidth);
  const i = { attributes: !0, childList: !0, subtree: !0 }, n = function() {
    ke.set("width", t.clientWidth);
  }, a = new MutationObserver(n);
  return a.observe(t, i), e.on("destroy", () => {
    a.disconnect();
  }), { width: ke.get("width") };
}
function lc({ editor: e }) {
  const { t } = j(), { width: i } = sc(e), n = dt(e, Pe.name, {
    defaultShowPicker: !1,
    createUser: "",
    width: 0,
    height: 0
  }), { defaultShowPicker: a, createUser: o, width: c, height: s } = n, h = A(
    (f) => {
      e.chain().updateAttributes(Pe.name, f).setNodeSelection(e.state.selection.from).focus().run();
    },
    [e]
  ), l = A(() => {
    oc(n);
  }, [e, n]), d = A(() => e.isActive(Pe.name), [e]), u = A(() => lt(Pe.name, e), [e]);
  return E(() => {
    a && (l(), e.chain().updateAttributes(Pe.name, { defaultShowPicker: !1 }).focus().run());
  }, [o, a, e, l]), /* @__PURE__ */ r(
    le,
    {
      className: "bubble-menu",
      editor: e,
      pluginKey: "excalidraw-bubble-menu",
      shouldShow: d,
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
      children: /* @__PURE__ */ m("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: [
        /* @__PURE__ */ r(
          _,
          {
            icon: "Pencil",
            action: l,
            tooltip: t("editor.edit")
          }
        ),
        /* @__PURE__ */ r(kn, { width: c, maxWidth: i, height: s, onOk: h, children: /* @__PURE__ */ r(
          _,
          {
            icon: "Settings",
            tooltip: t("editor.settings")
          }
        ) }),
        /* @__PURE__ */ r(
          _,
          {
            icon: "Trash2",
            action: u,
            tooltip: t("editor.delete")
          }
        )
      ] })
    }
  );
}
const dc = "_wrap_5y04w_1", hc = "_handlerWrap_5y04w_11", uc = "_innerWrap_5y04w_15", mc = "_emptyWrap_5y04w_23", Hi = {
  wrap: dc,
  handlerWrap: hc,
  innerWrap: uc,
  emptyWrap: mc
};
function fc({ editor: e, node: t, updateAttributes: i }) {
  const n = e.isEditable, { url: a, width: o, height: c } = t.attrs, [s, h] = p("");
  function l() {
    s && e.chain().updateAttributes(Be.name, {
      url: s
    }).setNodeSelection(e.state.selection.from).focus().run();
  }
  const d = A(
    (u) => {
      i({ width: u.width, height: u.height });
    },
    [i]
  );
  return /* @__PURE__ */ m(ce, { children: [
    !a && /* @__PURE__ */ m("div", { className: "richtext-max-w-[600px] richtext-mx-[auto] richtext-my-[12px] richtext-flex richtext-items-center richtext-justify-center richtext-gap-[10px] richtext-p-[10px] richtext-border-[1px] richtext-border-solid richtext-border-[#ccc] richtext-rounded-[12px]", children: [
      /* @__PURE__ */ r(
        te,
        {
          value: s,
          onInput: (u) => h(u.target.value),
          type: "url",
          className: "richtext-flex-1",
          autoFocus: !0,
          placeholder: "Enter link"
        }
      ),
      /* @__PURE__ */ r(V, { className: "richtext-w-[60px]", onClick: l, children: "OK" })
    ] }),
    a && /* @__PURE__ */ r(
      fn,
      {
        size: { width: Number.parseInt(o), height: Number.parseInt(c) },
        onResizeStop: (u, f, g, x) => {
          d({
            width: Number.parseInt(o) + x.width,
            height: Number.parseInt(c) + x.height
          });
        },
        children: /* @__PURE__ */ r("div", { className: ee(Hi.wrap, "render-wrapper"), children: /* @__PURE__ */ r("div", { className: Hi.innerWrap, style: { pointerEvents: n ? "none" : "auto" }, children: /* @__PURE__ */ r(
          "iframe",
          {
            src: a,
            className: "richtext-my-[12px] "
          }
        ) }) })
      }
    )
  ] });
}
const Be = fe.create({
  name: "iframe",
  content: "",
  marks: "",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "iframe"
      },
      button: ({
        editor: t,
        extension: i,
        t: n
      }) => ({
        component: _,
        componentProps: {
          action: (a) => t.commands.setIframe(a),
          upload: i.options.upload,
          disabled: !t.can().setIframe({}),
          icon: "Iframe",
          tooltip: n("editor.iframe.tooltip")
        }
      })
    };
  },
  addAttributes() {
    return {
      width: {
        default: 600,
        parseHTML: Y("width")
      },
      height: {
        default: 300,
        parseHTML: Y("height")
      },
      url: {
        default: null,
        parseHTML: Y("url")
      },
      defaultShowPicker: {
        default: !1
      },
      frameborder: {
        default: 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["iframe", re(this.options.HTMLAttributes, e)];
  },
  addCommands() {
    return {
      setIframe: (e) => ({ tr: t, commands: i, chain: n }) => {
        var o, c, s;
        if (((s = (c = (o = t.selection) == null ? void 0 : o.node) == null ? void 0 : c.type) == null ? void 0 : s.name) == this.name)
          return i.updateAttributes(this.name, e);
        const a = e || { url: "" };
        return n().insertContent({
          type: this.name,
          attrs: a
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      ei({
        find: /^\$iframe\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  },
  addNodeView() {
    return xe(fc);
  }
});
function gc({ editor: e }) {
  const { t } = j(), { width: i, height: n, url: a } = dt(e, Be.name, {
    width: 0,
    height: 0,
    url: "",
    defaultShowPicker: !1
  }), [o, c] = p(!1), [s, h] = p(""), l = A(() => {
    c(!1);
  }, [c]);
  E(() => {
    o && h(a);
  }, [o, a]);
  const d = A(() => {
    e.chain().updateAttributes(Be.name, {
      url: s
    }).setNodeSelection(e.state.selection.from).focus().run(), c(!1);
  }, [e, s, c]), u = A(() => {
    window.open(a, "_blank");
  }, [a]), f = A(() => {
    c(!0);
  }, [c]), g = A(
    (C) => {
      e.chain().updateAttributes(Be.name, C).setNodeSelection(e.state.selection.from).focus().run();
    },
    [e]
  ), x = A(() => e.isActive(Be.name) && !a, [e, a]), b = A(() => lt(Be.name, e), [e]);
  return /* @__PURE__ */ m(K, { children: [
    /* @__PURE__ */ r(
      le,
      {
        className: "bubble-menu",
        editor: e,
        pluginKey: "iframe-bubble-menu",
        shouldShow: x,
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
        children: /* @__PURE__ */ m("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: [
          /* @__PURE__ */ r(
            _,
            {
              action: u,
              icon: "Eye",
              tooltip: "Visit Link"
            }
          ),
          /* @__PURE__ */ r(
            _,
            {
              action: f,
              icon: "Pencil",
              tooltip: "Open Edit Link"
            }
          ),
          /* @__PURE__ */ r(kn, { width: i, height: n, onOk: g, children: /* @__PURE__ */ r(
            _,
            {
              icon: "Settings",
              tooltip: t("editor.settings")
            }
          ) }),
          /* @__PURE__ */ r(
            _,
            {
              action: b,
              icon: "Trash2",
              tooltip: t("editor.delete")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ m(
      He,
      {
        open: o,
        onOpenChange: c,
        children: [
          /* @__PURE__ */ r(Ee, {}),
          /* @__PURE__ */ m(_e, { children: [
            /* @__PURE__ */ r(An, { children: /* @__PURE__ */ r(ve, { children: "Edit Link Iframe" }) }),
            /* @__PURE__ */ r(
              te,
              {
                value: s,
                onInput: (C) => h(C.target.value),
                type: "url",
                autoFocus: !0,
                placeholder: "Enter link"
              }
            ),
            /* @__PURE__ */ m(Xe, { children: [
              /* @__PURE__ */ r(V, { onClick: l, children: "Cancel" }),
              /* @__PURE__ */ r(V, { onClick: d, children: "OK" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function Ln(e = 8) {
  return Math.random().toString(36).substring(2, e + 2);
}
function xc(e) {
  return e.replace(/^.*\/|\..+$/g, "");
}
function bc(e) {
  return e.split(".").pop();
}
function pc(e) {
  return e < 1024 ? `${e} Byte` : e < 1024 * 1024 ? `${(e / 1024).toFixed(2)} KB` : `${(e / 1024 / 1024).toFixed(2)} MB`;
}
function wc(e) {
  return e ? e === "application/pdf" ? "pdf" : e.startsWith("application/") && [".document", "word"].some((t) => e.includes(t)) ? "word" : e.startsWith("application/") && ["presentation"].some((t) => e.includes(t)) ? "excel" : e.startsWith("application/") && ["sheet"].some((t) => e.includes(t)) ? "ppt" : e.startsWith("image") ? "image" : e.startsWith("audio") ? "audio" : e.startsWith("video") ? "video" : "file" : "file";
}
function _c(e) {
  return new Promise((t) => {
    const i = new FileReader();
    i.addEventListener(
      "load",
      () => {
        t({
          alt: e.name,
          src: i.result
        });
      },
      !1
    ), i.readAsDataURL(e);
  });
}
function bi(e, t) {
  const i = e.split(","), n = i[0].match(/:(.*?);/)[1], a = atob(i[i.length - 1]);
  let o = a.length;
  const c = new Uint8Array(o);
  for (; o--; )
    c[o] = a.charCodeAt(o);
  return new File([c], t, { type: n });
}
const Ei = `graph TB
a-->b`, vc = ({ editor: e, attrs: t, extension: i }) => {
  const { alt: n, align: a } = t, [o, c] = p(decodeURIComponent(n ?? Ei)), [s, h] = p(""), [l, d] = p(!1), u = X(null), f = i == null ? void 0 : i.options.upload, g = async (C) => {
    try {
      const { svg: I } = await Nt.render("mermaid-svg", C);
      h(I);
    } catch {
      h("");
    }
  }, x = () => {
    Nt.initialize({
      darkMode: !1,
      startOnLoad: !1,
      // fontFamily:'',
      fontSize: 12,
      theme: "base"
    }), g(o);
  };
  return E(() => {
    l && x();
  }, [l]), E(() => {
    l && g(o);
  }, [o]), /* @__PURE__ */ m(
    He,
    {
      open: l,
      onOpenChange: d,
      children: [
        /* @__PURE__ */ r(Ee, { asChild: !0, children: /* @__PURE__ */ r(
          _,
          {
            icon: "Pencil",
            tooltip: "Edit Mermaid",
            action: () => d(!0)
          }
        ) }),
        /* @__PURE__ */ m(_e, { className: "!richtext-max-w-[1300px] richtext-z-[99999]", children: [
          /* @__PURE__ */ r(ve, { children: "Edit Mermaid" }),
          /* @__PURE__ */ r("div", { style: { height: "100%", border: "1px solid hsl(var(--border))" }, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-gap-[10px] richtext-rounded-[10px] richtext-p-[10px]", children: [
            /* @__PURE__ */ r(
              ht,
              {
                className: "richtext-flex-1",
                value: o,
                onChange: (C) => c(C.target.value),
                autoFocus: !0,
                required: !0,
                rows: 10,
                defaultValue: Ei,
                placeholder: "Text",
                style: {
                  color: "hsl(var(--richtext-foreground))"
                }
              }
            ),
            /* @__PURE__ */ r(
              "div",
              {
                className: "richtext-flex-1 richtext-flex richtext-items-center richtext-justify-center richtext-rounded-[10px] richtext-p-[10px]",
                style: { height: "100%", border: "1px solid hsl(var(--border))", minHeight: 500, background: "#fff" },
                ref: u,
                dangerouslySetInnerHTML: { __html: s }
              }
            )
          ] }) }),
          /* @__PURE__ */ r(Xe, { children: /* @__PURE__ */ r(
            V,
            {
              type: "button",
              onClick: async () => {
                if (o !== "") {
                  if (o) {
                    const C = u.current.querySelector("svg"), { width: I, height: v } = C.getBoundingClientRect(), w = `mermaid-${Ln()}.svg`;
                    let y = on(C.outerHTML);
                    if (f) {
                      const N = bi(y, w);
                      y = await f(N);
                    }
                    e == null || e.chain().focus().setMermaid(
                      {
                        type: "mermaid",
                        src: y,
                        alt: encodeURIComponent(o),
                        width: I,
                        height: v
                      },
                      !!o
                    ).run(), e == null || e.commands.setAlignImageMermaid(a);
                  }
                  d(!1);
                }
              },
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
};
function yc(e, t) {
  const [i, n] = p(void 0);
  return E(() => {
    const a = () => {
      const o = e.extensionManager.extensions.find((c) => c.name === t);
      o && n(o);
    };
    return e.on("selectionUpdate", a), e.on("transaction", a), () => {
      e.off("selectionUpdate", a), e.off("transaction", a);
    };
  }, [e, t]), i;
}
const kc = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function Cc({ item: e, disabled: t, editor: i }) {
  var a;
  const n = e.component;
  return n ? /* @__PURE__ */ r(ct, { children: e.type === "divider" ? /* @__PURE__ */ r(se, { orientation: "vertical", className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]" }) : /* @__PURE__ */ r(
    n,
    {
      ...e.componentProps,
      editor: i,
      disabled: t || ((a = e == null ? void 0 : e.componentProps) == null ? void 0 : a.disabled)
    }
  ) }) : /* @__PURE__ */ r(K, {});
}
function Nc(e) {
  return e.type.name === "mermaid";
}
function Tc(e) {
  const { lang: t } = j(), i = dt(e.editor, Zi.name), n = yc(e.editor, Zi.name), a = ({ editor: c }) => {
    const { selection: s } = c.view.state, { $from: h, to: l } = s;
    let d = !1;
    return c.view.state.doc.nodesBetween(h.pos, l, (u) => {
      if (Nc(u))
        return d = !0, !1;
    }), d;
  }, o = B(() => e.disabled ? [] : ms(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ r(K, { children: /* @__PURE__ */ r(
    le,
    {
      shouldShow: a,
      editor: e == null ? void 0 : e.editor,
      tippyOptions: kc,
      children: o != null && o.length ? /* @__PURE__ */ r("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-flex-nowrap richtext-whitespace-nowrap richtext-h-[26px] richtext-justify-start richtext-relative", children: o == null ? void 0 : o.map((c, s) => c.type === "edit" && (i != null && i.src) ? /* @__PURE__ */ r(
        vc,
        {
          editor: e.editor,
          attrs: i,
          extension: n
        },
        `bubbleMenu-mermaid-${s}`
      ) : /* @__PURE__ */ r(
        Cc,
        {
          item: c,
          disabled: e.disabled,
          editor: e.editor
        },
        `bubbleMenu-mermaid-${s}`
      )) }) }) : /* @__PURE__ */ r(K, {})
    }
  ) });
}
function Ac({ editor: e, disabled: t, bubbleMenu: i }) {
  const n = e.extensionManager.extensions.map((o) => o.name), a = () => {
    var o, c, s, h, l, d, u, f, g, x, b, C;
    return [
      n.includes("columns") && !((o = i == null ? void 0 : i.columnConfig) != null && o.hidden) ? /* @__PURE__ */ r(zs, { editor: e }, "columns") : null,
      n.includes("table") && !((c = i == null ? void 0 : i.tableConfig) != null && c.hidden) ? /* @__PURE__ */ r(ks, { editor: e }, "table") : null,
      n.includes("link") && !((s = i == null ? void 0 : i.linkConfig) != null && s.hidden) ? /* @__PURE__ */ r(Ns, { editor: e, disabled: t }, "link") : null,
      n.includes("image") && !((h = i == null ? void 0 : i.imageConfig) != null && h.hidden) ? /* @__PURE__ */ r(Ss, { editor: e, disabled: t }, "image") : null,
      n.includes(Wn.name) && !((l = i == null ? void 0 : i.imageGifConfig) != null && l.hidden) ? /* @__PURE__ */ r(Ms, { editor: e, disabled: t }, "imageGif") : null,
      n.includes("video") && !((d = i == null ? void 0 : i.videoConfig) != null && d.hidden) ? /* @__PURE__ */ r(Is, { editor: e, disabled: t }, "video") : null,
      n.includes("katex") && !((u = i == null ? void 0 : i.katexConfig) != null && u.hidden) ? /* @__PURE__ */ r(Po, { editor: e, disabled: t }, "katex") : null,
      n.includes("excalidraw") && !((f = i == null ? void 0 : i.excalidrawConfig) != null && f.hidden) ? /* @__PURE__ */ r(lc, { editor: e, disabled: t }, "excalidraw") : null,
      n.includes("mermaid") && !((g = i == null ? void 0 : i.mermaidConfig) != null && g.hidden) ? /* @__PURE__ */ r(Tc, { editor: e, disabled: t }, "mermaid") : null,
      n.includes("iframe") && !((x = i == null ? void 0 : i.iframeConfig) != null && x.hidden) ? /* @__PURE__ */ r(gc, { editor: e, disabled: t }, "iframe") : null,
      (b = i == null ? void 0 : i.floatingMenuConfig) != null && b.hidden ? null : /* @__PURE__ */ r(ps, { editor: e, disabled: t }, "content"),
      (C = i == null ? void 0 : i.textConfig) != null && C.hidden ? null : /* @__PURE__ */ r(vs, { editor: e, disabled: t }, "text")
    ];
  };
  return i != null && i.render ? i.render({ editor: e, disabled: t || !1, bubbleMenu: i }, a()) : a().filter(Boolean);
}
function Ri() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31m-.88 3.12L12.5 12.5L5.27 5.27L4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.96-1.5l2.63 2.63l1.27-1.27z" }) });
}
function Sn(e) {
  const { t } = j(), {
    highlight: i = !1,
    disabled: n = !1,
    selectedColor: a,
    setSelectedColor: o,
    onChange: c,
    colors: s = so
  } = e, h = B(() => {
    const g = s, x = [];
    for (let b = 0; b < g.length; b += 10)
      x.push(g.slice(b, b + 10));
    return x;
  }, [s]), [l, d] = p([]), u = (g) => {
    const x = [...l], b = x.indexOf(g);
    b !== -1 && x.splice(b, 1), x.unshift(g), x.length > 10 && x.pop(), d(x);
  };
  function f(g) {
    if (g === void 0) {
      o == null || o(g), c == null || c(g);
      return;
    }
    /^#([\da-f]{3}){1,2}$/i.test(g) && (o == null || o(g), c == null || c(g), u(g));
  }
  return /* @__PURE__ */ m(de, { modal: !0, children: [
    /* @__PURE__ */ r(he, { className: "!richtext-p-0", disabled: n, asChild: !0, children: e == null ? void 0 : e.children }),
    /* @__PURE__ */ r(ae, { hideWhenDetached: !0, className: "richtext-w-full richtext-h-full richtext-p-2", align: "start", side: "bottom", children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col", children: [
      i ? /* @__PURE__ */ m(
        "div",
        {
          className: "richtext-flex richtext-items-center richtext-p-1 richtext-cursor-pointer rd-1 richtext-gap-[4px] hover:richtext-bg-accent",
          onClick: () => f(void 0),
          children: [
            /* @__PURE__ */ r(Ri, {}),
            /* @__PURE__ */ r("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.nofill") })
          ]
        }
      ) : /* @__PURE__ */ m(
        "div",
        {
          className: "richtext-flex richtext-items-center richtext-p-1 richtext-cursor-pointer rd-1 richtext-gap-[4px] hover:richtext-bg-accent",
          onClick: () => {
            f(void 0);
          },
          children: [
            /* @__PURE__ */ r(Ri, {}),
            /* @__PURE__ */ r("span", { className: "richtext-ml-1 richtext-text-sm", children: t("editor.default") })
          ]
        }
      ),
      h.map((g, x) => /* @__PURE__ */ r("span", { className: "richtext-relative richtext-flex richtext-w-full richtext-h-auto richtext-p-0 last:richtext-pb-2", children: g.map((b, C) => /* @__PURE__ */ r(
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
        `sub-color-${C}`
      )) }, x)),
      /* @__PURE__ */ m("div", { children: [
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
      /* @__PURE__ */ r(Lc, { setColor: f })
    ] }) })
  ] });
}
function Lc({ setColor: e }) {
  const [t, i] = p("#000000"), [n, a] = p(!1), { t: o } = j();
  return E(() => () => {
    a(!1);
  }, []), /* @__PURE__ */ m(de, { open: n, children: [
    /* @__PURE__ */ r(he, { asChild: !0, children: /* @__PURE__ */ m(
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
    /* @__PURE__ */ m(ae, { children: [
      /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-justify-center", children: [
        /* @__PURE__ */ r(vo, { color: t, onChange: i }),
        /* @__PURE__ */ r(
          te,
          {
            className: "richtext-mt-[8px] richtext-w-full",
            type: "text",
            onChange: (c) => {
              c.preventDefault(), i(`#${c.target.value}`);
            },
            value: t.slice(1)
          }
        )
      ] }),
      /* @__PURE__ */ r(se, { className: "richtext-my-[10px]" }),
      /* @__PURE__ */ r(
        V,
        {
          onClick: (c) => {
            c.preventDefault(), e(t), a(!1);
          },
          className: "richtext-w-full",
          children: /* @__PURE__ */ r(en, { size: 16 })
        }
      )
    ] })
  ] });
}
const Sc = `
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
`, Mn = li({
  theme: "light"
});
function Mc() {
  return di(Mn).theme;
}
const Ic = {
  setTheme: (e) => {
    Mn.theme = e;
  }
}, Oi = "data-rc-order", Pi = "data-rc-priority", zc = "rc-util-key", Jt = /* @__PURE__ */ new Map();
function Hc(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  let i = t;
  for (; i; ) {
    if (i === e)
      return !0;
    i = i.parentNode;
  }
  return !1;
}
function In({ mark: e } = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : zc;
}
function pi(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Ec(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function zn(e) {
  return [...(Jt.get(e) || e).children].filter(
    (t) => t.tagName === "STYLE"
  );
}
function Hn(e, t = {}) {
  const { csp: i, prepend: n, priority: a = 0 } = t, o = Ec(n), c = o === "prependQueue", s = document.createElement("style");
  s.setAttribute(Oi, o), c && a && s.setAttribute(Pi, `${a}`), i != null && i.nonce && (s.nonce = i == null ? void 0 : i.nonce), s.innerHTML = e;
  const h = pi(t), { firstChild: l } = h;
  if (n) {
    if (c) {
      const d = zn(h).filter((u) => {
        if (!["prepend", "prependQueue"].includes(u.getAttribute(Oi)))
          return !1;
        const f = Number(u.getAttribute(Pi) || 0);
        return a >= f;
      });
      if (d.length > 0)
        return h.insertBefore(s, d.at(-1).nextSibling), s;
    }
    l.before(s);
  } else
    h.append(s);
  return s;
}
function En(e, t = {}) {
  const i = pi(t);
  return zn(i).find((n) => n.getAttribute(In(t)) === e);
}
function Rc(e, t = {}) {
  const i = En(e, t);
  i && i.remove();
}
function Oc(e, t) {
  const i = Jt.get(e);
  if (!i || !Hc(document, i)) {
    const n = Hn("", t), { parentNode: a } = n;
    Jt.set(e, a), n.remove();
  }
}
function Pc(e, t, i = {}) {
  var c, s, h;
  const n = pi(i);
  Oc(n, i);
  const a = En(t, i);
  if (a)
    return (c = i.csp) != null && c.nonce && a.nonce !== ((s = i.csp) == null ? void 0 : s.nonce) && (a.nonce = (h = i.csp) == null ? void 0 : h.nonce), a.innerHTML !== e && (a.innerHTML = e), a;
  const o = Hn(e, i);
  return o.setAttribute(In(i), t), o;
}
function Bc({ editor: e, extensions: t }) {
  const { t: i } = j(), n = B(() => {
    var a, o, c;
    return (c = (o = (a = t == null ? void 0 : t.find((s) => s.name === "base-kit")) == null ? void 0 : a.options) == null ? void 0 : o.characterCount) == null ? void 0 : c.limit;
  }, [t]);
  return n ? /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ m("span", { children: [
    e.storage.characterCount.characters(),
    "/",
    n,
    " ",
    i("editor.characters")
  ] }) }) }) }) : /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-p-3 richtext-border-t", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-flex-col", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-justify-end richtext-gap-3 richtext-text-sm", children: /* @__PURE__ */ m("span", { children: [
    e.storage.characterCount.characters(),
    " ",
    i("editor.characters")
  ] }) }) }) });
}
function $c(e, t) {
  const { content: i, extensions: n, useEditorOptions: a = {} } = e, o = B(() => {
    const d = to(n, n, "name");
    return [...n.map((f) => {
      const g = n.find((x) => x.name === f.name);
      return g ? f.configure(g.options) : f;
    }), ...d].map((f, g) => f.configure({ sort: g }));
  }, [n]), c = Ae((d) => {
    var f;
    const u = h(d, e.output);
    (f = e == null ? void 0 : e.onChangeContent) == null || f.call(e, u);
  }, lo), s = ua({
    extensions: o,
    content: i,
    onUpdate: ({ editor: d }) => {
      c && c(d);
    },
    ...a
  });
  At(t, () => ({
    editor: s
  })), E(() => {
    document.documentElement.classList.toggle("dark", e.dark), Ic.setTheme(e.dark ? "dark" : "light");
  }, [e.dark]), E(() => {
    s == null || s.setEditable(!(e != null && e.disabled));
  }, [s, e == null ? void 0 : e.disabled]), E(() => ((e == null ? void 0 : e.resetCSS) !== !1 && Pc(Sc, "react-tiptap-reset"), () => {
    Rc("react-tiptap-reset");
  }), [e == null ? void 0 : e.resetCSS]);
  function h(d, u) {
    return e != null && e.removeDefaultWrapper ? u === "html" ? d.isEmpty ? "" : d.getHTML() : u === "json" ? d.isEmpty ? {} : d.getJSON() : u === "text" ? d.isEmpty ? "" : d.getText() : "" : u === "html" ? d.getHTML() : u === "json" ? d.getJSON() : u === "text" ? d.getText() : "";
  }
  E(() => () => {
    var d;
    (d = s == null ? void 0 : s.destroy) == null || d.call(s);
  }, []);
  const l = Nn(s, "characterCount");
  return s ? /* @__PURE__ */ r("div", { className: "reactjs-tiptap-editor", children: /* @__PURE__ */ r(zo, { delayDuration: 0, disableHoverableContent: !0, children: /* @__PURE__ */ r("div", { className: "richtext-rounded-[0.5rem] richtext-bg-background richtext-shadow richtext-overflow-hidden richtext-outline richtext-outline-1", children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-w-full richtext-max-h-full", children: [
    !(e != null && e.hideToolbar) && /* @__PURE__ */ r(Dc, { editor: s, disabled: !!(e != null && e.disabled) }),
    /* @__PURE__ */ r(ma, { className: `richtext-relative ${(e == null ? void 0 : e.contentClass) || ""}`, editor: s }),
    l && /* @__PURE__ */ r(Bc, { editor: s, extensions: n }),
    !(e != null && e.hideBubble) && /* @__PURE__ */ r(Ac, { bubbleMenu: e == null ? void 0 : e.bubbleMenu, editor: s, disabled: e == null ? void 0 : e.disabled })
  ] }) }) }) }) : /* @__PURE__ */ r(K, {});
}
const yh = Tt($c);
function Dc({ editor: e, disabled: t }) {
  const { t: i, lang: n } = j(), a = B(() => {
    const c = [...e.extensionManager.extensions].sort((h, l) => {
      const d = h.options.sort ?? -1, u = l.options.sort ?? -1;
      return d - u;
    });
    let s = [];
    for (const h of c) {
      const { button: l, divider: d = !1, spacer: u = !1, toolbar: f = !0 } = h.options;
      if (!l || !Ko(l) || !f)
        continue;
      const g = l({
        editor: e,
        extension: h,
        t: i
      });
      if (Array.isArray(g)) {
        const x = g.map((b, C) => ({
          button: b,
          divider: C === g.length - 1 ? d : !1,
          spacer: C === 0 ? u : !1
        }));
        s = [...s, ...x];
        continue;
      }
      s.push({ button: g, divider: d, spacer: u });
    }
    return s;
  }, [e, i, n]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: "richtext-px-1 richtext-py-2 !richtext-border-b",
      style: {
        pointerEvents: t ? "none" : "auto",
        opacity: t ? 0.5 : 1
      },
      children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-flex richtext-flex-wrap richtext-h-auto richtext-gap-y-1 richtext-gap-x-1", children: a.map((o, c) => {
        var h, l;
        const s = o.button.component;
        return /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center", children: [
          (o == null ? void 0 : o.spacer) && /* @__PURE__ */ r(se, { orientation: "vertical", className: "!richtext-h-[16px] !richtext-mx-[10px]" }),
          /* @__PURE__ */ r(
            s,
            {
              ...o.button.componentProps,
              disabled: t || ((l = (h = o == null ? void 0 : o.button) == null ? void 0 : h.componentProps) == null ? void 0 : l.disabled)
            }
          ),
          (o == null ? void 0 : o.divider) && /* @__PURE__ */ r(se, { orientation: "vertical", className: "!richtext-h-auto !richtext-mx-2" })
        ] }, `toolbar-item-${c}`);
      }) })
    }
  );
}
function jc(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"
    }
  ) });
}
function Fc(e) {
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
function Vc() {
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
function Uc() {
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
function Wc(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
    }
  ) });
}
function F(e) {
  const t = mt[e.name];
  return t ? /* @__PURE__ */ r(t, { onClick: e == null ? void 0 : e.onClick, className: `richtext-w-4 richtext-h-4 ${(e == null ? void 0 : e.className) || ""}` }) : null;
}
function qc(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"
    }
  ) });
}
function Rn(e) {
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
function Kc(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M9 7v10h6v-2h-4V7z" }) });
}
function Gc(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
    }
  ) });
}
function Zc(e) {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
    }
  ) });
}
function Jc() {
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
function On() {
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z" }),
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z" })
  ] });
}
function Pn() {
  return /* @__PURE__ */ m(
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
function Xc() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m-9 8h4m-2-2v4" }) });
}
function Yc() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 8h4m-2-2v4" }) });
}
function Qc() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M23.943 19.806a.2.2 0 0 0-.168-.034c-1.26-1.855-2.873-3.61-4.419-5.315l-.252-.284c-.001-.073-.067-.12-.134-.15l-.084-.084c-.05-.1-.169-.167-.286-.1c-.47.234-.907.585-1.327.919c-.554.434-1.109.87-1.63 1.354a5 5 0 0 0-.588.618c-.084.117-.017.217.084.267c-.37.368-.74.736-1.109 1.12a.2.2 0 0 0-.05.134c0 .05.033.1.067.117l.655.502v.016c.924.92 2.554 2.173 4.285 3.527c.251.201.52.402.773.602c.117.134.234.285.335.418c.05.066.169.084.236.033c.033.034.084.067.118.1a.24.24 0 0 0 .1.034a.15.15 0 0 0 .135-.066a.24.24 0 0 0 .033-.1c.017 0 .017.016.034.016a.2.2 0 0 0 .134-.05l3.058-3.327c.12-.116.014-.267 0-.267m-7.628-.134l-1.546-1.17l-.15-.1c-.035-.017-.068-.05-.102-.067l-.117-.1c.66-.66 1.33-1.308 2-1.956c-.488.484-1.463 1.906-1.261 2.373c.002 0 .018.042.067.084zm4.1 3.126l-1.277-.97a27 27 0 0 0-1.58-1.504c.69.518 1.277.97 1.361 1.053c.673.585.638.485 1.093.87l.554.4c-.074.103-.151.148-.151.151m.336.25l-.034-.016a1 1 0 0 0 .152-.117zM.588 3.476c.033.217.084.435.117.636c.201 1.103.403 2.106.772 2.858l.152.568c.05.217.134.485.219.552a67 67 0 0 0 3.578 2.942a.18.18 0 0 0 .219 0s0 .016.016.016a.15.15 0 0 0 .118.05a.2.2 0 0 0 .134-.05c1.798-1.989 3.142-3.627 4.1-4.998c.068-.066.084-.167.084-.25c.067-.067.118-.151.185-.201c.067-.067.067-.184 0-.235l-.017-.016c0-.033-.017-.084-.05-.1c-.42-.401-.722-.685-1.042-.986a94 94 0 0 1-2.352-2.273c-.017-.017-.034-.034-.067-.034c-.336-.117-1.025-.234-1.882-.385c-1.277-.216-3.008-.517-4.57-.986c0 0-.101 0-.118.017l-.05.05C.05.714.022.707 0 .718c.017.1.017.167.05.284c0 .033.068.301.068.334zm7.19 4.78l-.033.034a.036.036 0 0 1 .033-.034M6.553 2.238c.101.1.521.502.622.585c-.437-.2-1.529-.702-2.034-.869c.505.1 1.194.201 1.412.284M.79 1.403c.252.434.454 1.939.655 3.41c-.118-.469-.201-.936-.302-1.372C.992 2.673.84 1.988.638 1.386c.124 0 .152.021.152.017m-.286-.369c0-.016 0-.033-.017-.033c.085 0 .135.017.202.05c0 .006-.145-.017-.185-.017m23.17-.217c.017-.066-.336-.367-.219-.384c.253-.017.253-.401 0-.401c-.335.017-.688.1-1.008.15c-.587.117-1.192.234-1.78.367a80 80 0 0 0-3.949.937c-.403.117-.857.2-1.243.401c-.135.067-.118.2-.05.284c-.034.017-.051.017-.085.034c-.117.017-.218.034-.335.05c-.102.017-.152.1-.135.2c0 .017.017.05.017.067c-.706.936-1.496 1.923-2.353 2.976c-.84.969-1.73 1.989-2.62 3.042c-2.84 3.31-6.05 7.07-9.594 10.38a.16.16 0 0 0 0 .234c.016.016.033.033.05.033c-.05.05-.101.085-.152.134q-.05.05-.05.1a.4.4 0 0 0-.067.084c-.067.067-.067.184.017.234c.067.066.185.066.235-.017c.017-.017.017-.033.033-.033a.265.265 0 0 1 .37 0c.202.217.404.435.588.618l-.42-.35c-.067-.067-.184-.05-.234.016c-.068.066-.051.184.016.234l4.469 3.727c.034.034.067.034.118.034a.15.15 0 0 0 .117-.05l.101-.1c.017.016.05.016.067.016c.05 0 .084-.016.118-.05c6.049-6.05 10.922-10.614 16.5-14.693c.05-.033.067-.1.067-.15c.067 0 .118-.05.15-.117c1.026-3.125 1.228-5.9 1.295-7.27c0-.059.016-.038.016-.068c.017-.033.017-.05.017-.05a.98.98 0 0 0-.067-.619m-10.82 4.915c.268-.301.537-.619.806-.903c-1.73 2.273-4.603 5.767-8.67 9.929c2.773-3.059 5.562-6.218 7.864-9.026M5.14 23.466c-.016-.017-.016-.017 0-.017zm2.504-2.156c.135-.15.27-.284.42-.434c0 0 0 .016.017.016c-.224.198-.433.418-.437.418m.69-.668c.099-.1.14-.173.284-.318c.992-1.02 2.017-2.04 3.059-3.076l.016-.016c.252-.2.555-.418.824-.619a228 228 0 0 0-4.184 4.029M14.852 3.91c-.554.719-1.176 1.671-1.697 2.423c-1.646 2.374-6.94 8.174-7.057 8.274a1190 1190 0 0 1-4.839 4.597l-.1.1c-.085-.1-.085-.25.016-.334C8.652 11.966 13.19 6.133 15.021 3.576c-.05.116-.084.216-.168.334zm2.906 3.427c-.671-.386-.99-.987-.806-1.572l.05-.2a.8.8 0 0 1 .085-.167a1.9 1.9 0 0 1 .756-.703c.016 0 .033 0 .05-.016c-.017-.034-.017-.084-.017-.134c.017-.1.085-.167.202-.167c.202 0 .824.184 1.059.384c.067.05.134.117.202.184c.084.1.218.268.285.401c.034.017.067.184.118.268c.033.134.067.284.05.418c-.017.016 0 .116-.017.116a1.6 1.6 0 0 1-.218.619c-.03.03.006.012-.05.067a1.2 1.2 0 0 1-.32.334a1.49 1.49 0 0 1-1.26.234a2 2 0 0 0-.169-.066m4.37 1.403c0 .017-.017.05 0 .067c-.034 0-.05.017-.085.034a110 110 0 0 0-3.915 3.025c1.11-.986 2.218-1.989 3.378-2.975c.336-.301.571-.686.638-1.12l.168-1.003v-.033c.085-.201.404-.118.353.1c-.004-.001-.173.795-.537 1.905" }) });
}
function es() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ r("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 21v-4m0-4V9m0-4V3m-2 18h4M8 5v4h11l2-2l-2-2zm6 8v4H6l-2-2l2-2z" }) });
}
function ts() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M6.5 3a.75.75 0 0 1 .697.471l3 7.5a.75.75 0 0 1-1.393.557L7.992 9.5H5.008l-.811 2.028a.75.75 0 0 1-1.393-.556l3-7.5A.75.75 0 0 1 6.5 3m0 2.77L5.608 8h1.784zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z" }) });
}
function is() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M13.5 3a.75.75 0 0 0-.697.471l-3 7.5a.75.75 0 0 0 1.393.557l.812-2.028h2.984l.811 2.028a.75.75 0 0 0 1.393-.556l-3-7.5A.75.75 0 0 0 13.5 3m0 2.77L14.392 8h-1.784zM5.22 4.22a.75.75 0 0 1 1.06 1.06L5.56 6h3.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h10.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" }) });
}
function ns() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ m("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", color: "currentColor", children: [
    /* @__PURE__ */ r("path", { d: "M14.86 22h-4.312c-3.291 0-4.937 0-6.08-.798a4.2 4.2 0 0 1-.863-.805c-.855-1.066-.855-2.6-.855-5.67v-2.545c0-2.963 0-4.445.473-5.628c.761-1.903 2.37-3.403 4.41-4.113C8.9 2 10.49 2 13.667 2c1.816 0 2.723 0 3.448.252c1.166.406 2.085 1.263 2.52 2.35c.27.676.27 1.523.27 3.216V10" }),
    /* @__PURE__ */ r("path", { d: "M2.75 12c0-1.84 1.506-3.333 3.364-3.333c.672 0 1.464.116 2.117-.057a1.67 1.67 0 0 0 1.19-1.179c.174-.647.057-1.432.057-2.098C9.478 3.493 10.984 2 12.84 2m.002 16h2.523m-4.949-4.15c-.126-.8-.281-.801-1.61-.85h-1.01c-.557 0-1.009.448-1.009 1v3c0 .552.452 1 1.01 1h1.816c.39 0 .803-.313.803-.7v-1.1c0-.11-.113-.304-.224-.304H9.068M12.842 13h1.261m0 0h1.262m-1.262 0v4.875M21.251 13h-2.523c-.557 0-1.009.448-1.009 1v1.5m0 0V18m0-2.5h2.523" })
  ] }) });
}
function rs() {
  return /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 48 48", children: /* @__PURE__ */ m("g", { fill: "none", stroke: "currentColor", strokeWidth: "4", children: [
    /* @__PURE__ */ r("circle", { cx: "10", cy: "24", r: "4" }),
    /* @__PURE__ */ r("circle", { cx: "38", cy: "10", r: "4" }),
    /* @__PURE__ */ r("circle", { cx: "38", cy: "24", r: "4" }),
    /* @__PURE__ */ r("circle", { cx: "38", cy: "38", r: "4" }),
    /* @__PURE__ */ r("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M34 38H22V10h12M14 24h20" })
  ] }) });
}
const mt = {
  Bold: Xn,
  LoaderCircle: Yn,
  Italic: Qn,
  Underline: er,
  Quote: tr,
  TextQuote: Fc,
  Strikethrough: ir,
  Minus: nr,
  Eraser: rr,
  PaintRoller: ar,
  Redo2: or,
  Undo2: cr,
  AlignCenter: yo,
  AlignJustify: ko,
  AlignLeft: Co,
  AlignRight: No,
  ChevronDown: Lt,
  Subscript: sr,
  Superscript: lr,
  Code: dr,
  Code2: hr,
  Type: ur,
  IndentIncrease: mr,
  IndentDecrease: fr,
  List: gr,
  ListOrdered: xr,
  ListTodo: br,
  Link: pr,
  ImageUp: wr,
  Video: _r,
  Maximize: vr,
  Minimize: yr,
  Table: kr,
  Sparkles: Cr,
  Pencil: Yi,
  Unlink: Nr,
  BetweenHorizonalEnd: Tr,
  BetweenHorizonalStart: Ar,
  BetweenVerticalStart: Lr,
  BetweenVerticalEnd: Sr,
  TableCellsMerge: Mr,
  TableCellsSplit: Ir,
  Trash2: Qi,
  Trash: zr,
  Replace: Ci,
  ChevronsUpDown: Hr,
  LineHeight: qc,
  Word: Wc,
  Heading1: Er,
  Heading2: Rr,
  Heading3: Or,
  Heading4: Pr,
  Heading5: Br,
  Heading6: $r,
  Columns2: Ni,
  Columns3: Dr,
  Columns4: jr,
  Plus: en,
  Grip: Fr,
  Copy: tn,
  Clipboard: Vr,
  PanelLeft: Ur,
  PanelRight: Wr,
  Columns: Ni,
  Iframe: qr,
  MenuDown: Rn,
  SizeS: Zc,
  SizeM: Gc,
  SizeL: Kc,
  AspectRatio: jc,
  Emoji: Kr,
  DeleteColumn: Vc,
  DeleteRow: Uc,
  SearchAndReplace: Ci,
  EmojiIcon: Gr,
  KatexIcon: Zr,
  ExportPdf: On,
  ExportWord: Pn,
  ImportWord: Jc,
  ColumnAddLeft: Xc,
  ColumnAddRight: Yc,
  BookMarked: Jr,
  Excalidraw: Qc,
  ZoomIn: Xr,
  ZoomOut: Yr,
  Settings: Qr,
  Eye: ea,
  TextDirection: es,
  LeftToRight: ts,
  RightToLeft: is,
  Attachment: ta,
  GifIcon: ns,
  ChevronUp: Ji,
  Crop: ia,
  Mermaid: rs
};
function as(e) {
  const t = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, a) => ({
    type: `image-${n}`,
    component: _,
    componentProps: {
      tooltip: W.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: i[a],
      action: () => e.commands.updateImage({ width: Ct[n] }),
      isActive: () => e.isActive("image", { width: Ct[n] })
    }
  }));
}
function os(e) {
  const t = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, a) => ({
    type: `image-${n}`,
    component: _,
    componentProps: {
      tooltip: W.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: i[a],
      // @ts-expect-error
      action: () => e.commands.updateImageGif({ width: Ct[n] }),
      isActive: () => e.isActive("image", { width: Ct[n] })
    }
  }));
}
function cs(e) {
  const t = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: _,
    componentProps: {
      tooltip: W.t(`editor.textalign.${n}.tooltip`),
      icon: i[n],
      action: () => {
        var a, o;
        return (o = (a = e.commands) == null ? void 0 : a.setAlignImage) == null ? void 0 : o.call(a, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function ss(e) {
  const t = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: _,
    componentProps: {
      tooltip: W.t(`editor.textalign.${n}.tooltip`),
      icon: i[n],
      // @ts-expect-error
      action: () => {
        var a, o;
        return (o = (a = e.commands) == null ? void 0 : a.setAlignImageGif) == null ? void 0 : o.call(a, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function ls(e) {
  const t = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return t.map((n) => ({
    type: `image-${n}`,
    component: _,
    componentProps: {
      tooltip: W.t(`editor.textalign.${n}.tooltip`),
      icon: i[n],
      action: () => {
        var a, o;
        return (o = (a = e.commands) == null ? void 0 : a.setAlignImageMermaid) == null ? void 0 : o.call(a, n);
      },
      isActive: () => e.isActive({ align: n }) || !1,
      disabled: !1
    }
  }));
}
function ds(e) {
  const t = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return t.map((n, a) => ({
    type: `video-${n}`,
    component: _,
    componentProps: {
      tooltip: W.t(`editor.${n.replace("-", ".")}.tooltip`),
      icon: i[a],
      action: () => e.commands.updateVideo({ width: Ft[n] }),
      isActive: () => e.isActive("video", { width: Ft[n] })
    }
  }));
}
function hs(e) {
  return [
    ...as(e),
    ...cs(e),
    {
      type: "remove",
      component: _,
      componentProps: {
        editor: e,
        tooltip: W.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: i } = e.view;
          St(t, i);
        }
      }
    }
  ];
}
function us(e) {
  return [
    ...os(e),
    ...ss(e),
    {
      type: "remove",
      component: _,
      componentProps: {
        editor: e,
        tooltip: W.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: i } = e.view;
          St(t, i);
        }
      }
    }
  ];
}
function ms(e) {
  return [
    ...ls(e),
    {
      type: "edit",
      component: _,
      componentProps: {
        editor: e,
        tooltip: W.t("editor.edit"),
        icon: "Pencil",
        action: () => {
        }
      }
    },
    {
      type: "remove",
      component: _,
      componentProps: {
        editor: e,
        tooltip: W.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: i } = e.view;
          St(t, i);
        }
      }
    }
  ];
}
function fs(e) {
  return [
    ...ds(e),
    {
      type: "remove",
      component: _,
      componentProps: {
        editor: e,
        tooltip: W.t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: t, dispatch: i } = e.view;
          St(t, i);
        }
      }
    }
  ];
}
function gs(e, t) {
  return ho.reduce((i, n) => {
    if (n === "divider" && i.length > 0)
      return [...i, {
        type: "divider",
        component: void 0,
        componentProps: {}
      }];
    const a = e.extensionManager.extensions.find((o) => o.name === n);
    return a ? [...i, a.configure().options.button({ editor: e, t, extension: a })] : i;
  }, []);
}
var Te = /* @__PURE__ */ ((e) => (e[e.max = 7] = "max", e[e.min = 0] = "min", e[e.more = 1] = "more", e[e.less = -1] = "less", e))(Te || {});
function xs(e, t, i) {
  return e < t ? t : e > i ? i : e;
}
function bs(e, t, i, n) {
  const { doc: a, selection: o } = e;
  if (!a || !o || !(o instanceof Le || o instanceof cn))
    return e;
  const { from: c, to: s } = o;
  return a.nodesBetween(c, s, (h, l) => {
    const d = h.type;
    return i.includes(d.name) ? (e = Xt(e, l, t), !1) : !fa(h.type.name, n.extensionManager.extensions);
  }), e;
}
function Xt(e, t, i) {
  if (!e.doc)
    return e;
  const n = e.doc.nodeAt(t);
  if (!n)
    return e;
  const c = xs((n.attrs.indent || 0) + i, 0, 7);
  if (c === n.attrs.indent)
    return e;
  const s = {
    ...n.attrs,
    indent: c
  };
  return e.setNodeMarkup(t, n.type, s, n.marks);
}
function Bi({ delta: e, types: t }) {
  return ({ state: i, dispatch: n, editor: a }) => {
    const { selection: o } = i;
    let { tr: c } = i;
    return c = c.setSelection(o), c = bs(c, e, t, a), c.docChanged ? (n && n(c), !0) : !1;
  };
}
function ps(e) {
  var S, L, T;
  const { pluginKey: t = no } = e, { t: i } = j(), [n, a] = p(null), [o, c] = p(-1), s = X(null), h = X(null), [l, d] = p(!1), u = e.editor.extensionManager.extensions.some((k) => k.name === "textAlign"), f = e.editor.extensionManager.extensions.some((k) => k.name === "indent"), g = e.editor.extensionManager.extensions.some((k) => k.name === "clear");
  E(() => {
    s.current && !e.editor.isDestroyed && (h.current = io({
      editor: e.editor,
      element: s.current,
      pluginKey: "ContentItemMenu",
      tippyOptions: {
        offset: [-2, 16],
        zIndex: 99,
        moveTransition: "transform 0.15s ease-out"
      },
      onNodeChange: N
    }), e.editor.registerPlugin(h.current));
  }, [e.editor, s]);
  function x() {
    const k = e.editor.chain();
    k.setNodeSelection(o).unsetAllMarks(), (n == null ? void 0 : n.type.name) !== "paragraph" && k.setParagraph(), k.run();
  }
  function b() {
    e.editor.chain().focus().setNodeSelection(o).run(), document.execCommand("copy");
  }
  function C() {
    e.editor.commands.setNodeSelection(o);
    const { $anchor: k } = e.editor.state.selection, $ = k.node(1) || e.editor.state.selection.node;
    e.editor.chain().setMeta("hideDragHandle", !0).insertContentAt(o + ((n == null ? void 0 : n.nodeSize) || 0), $.toJSON()).run();
  }
  function I(k) {
    e.editor.commands.setTextAlign(k);
  }
  function v() {
    const k = Xt(e.editor.state.tr, o, 1);
    k.setMeta("hideDragHandle", !0), e.editor.view.dispatch && e.editor.view.dispatch(k);
  }
  function w() {
    const k = Xt(e.editor.state.tr, o, -1);
    e.editor.view.dispatch && e.editor.view.dispatch(k);
  }
  function y() {
    e.editor.chain().setMeta("hideDragHandle", !0).setNodeSelection(o).deleteSelection().run();
  }
  function N(k) {
    k.node && a(k.node), c(k.pos);
  }
  function M() {
    var k;
    if (o !== -1) {
      const $ = (n == null ? void 0 : n.nodeSize) || 0, R = o + $, z = (n == null ? void 0 : n.type.name) === "paragraph" && ((k = n == null ? void 0 : n.content) == null ? void 0 : k.size) === 0, H = z ? o + 2 : R + 2;
      e.editor.chain().command(({ dispatch: q, tr: Q, state: ge }) => q ? (z ? Q.insertText("/", o, o + 1) : Q.insert(
        R,
        ge.schema.nodes.paragraph.create(null, [ge.schema.text("/")])
      ), q(Q)) : !0).focus(H).run();
    }
  }
  E(() => (l ? e.editor.commands.setMeta("lockDragHandle", !0) : e.editor.commands.setMeta("lockDragHandle", !1), () => {
    e.editor.commands.setMeta("lockDragHandle", !1);
  }), [l]), E(() => () => {
    h.current && (e.editor.unregisterPlugin(t), h.current = null);
  }, []), E(() => {
    var k;
    (k = e.editor) != null && k.isDestroyed && h.current && (e.editor.unregisterPlugin(t), h.current = null);
  }, [(S = e.editor) == null ? void 0 : S.isDestroyed]);
  const O = (k) => {
    e != null && e.disabled || d(k);
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: `drag-handle [transition-property:top,_left] richtext-ease-in-out richtext-duration-200 ${e == null ? void 0 : e.className}`,
      style: {
        opacity: e != null && e.disabled ? 0 : 1
      },
      ref: s,
      children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-0.5 [transition-property:top,_left] richtext-ease-in-out richtext-duration-200", children: [
        /* @__PURE__ */ r(
          V,
          {
            variant: "ghost",
            size: "icon",
            className: "richtext-w-7 richtext-h-7 richtext-cursor-grab",
            disabled: e == null ? void 0 : e.disabled,
            onClick: M,
            type: "button",
            children: /* @__PURE__ */ r(F, { name: "Plus", className: "richtext-text-lg richtext-text-neutral-600 dark:richtext-text-neutral-200" })
          }
        ),
        /* @__PURE__ */ m(pe, { open: l, onOpenChange: O, children: [
          /* @__PURE__ */ m("div", { className: "richtext-relative richtext-flex richtext-flex-col", children: [
            /* @__PURE__ */ m(Ze, { children: [
              /* @__PURE__ */ r(Je, { asChild: !0, disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ r(
                V,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "richtext-w-7 richtext-h-7 richtext-cursor-grab richtext-relative richtext-z-[1]",
                  disabled: e == null ? void 0 : e.disabled,
                  onMouseUp: (k) => {
                    k.preventDefault(), !(e != null && e.disabled) && d(!0);
                  },
                  type: "button",
                  children: /* @__PURE__ */ r(F, { name: "Grip", className: "richtext-text-sm dark:richtext-text-neutral-200 richtext-text-neutral-600" })
                }
              ) }),
              /* @__PURE__ */ r(ze, { children: i("editor.draghandle.tooltip") })
            ] }),
            /* @__PURE__ */ r(we, { className: "richtext-absolute richtext-top-0 richtext-left-0 richtext-w-[28px] richtext-h-[28px] richtext-z-0" })
          ] }),
          /* @__PURE__ */ m(be, { className: "richtext-w-48", align: "start", side: "bottom", sideOffset: 0, children: [
            /* @__PURE__ */ m(
              oe,
              {
                onClick: y,
                className: "richtext-flex richtext-gap-3 focus:richtext-text-red-500 focus:richtext-bg-red-400 hover:richtext-bg-red-400 dark:hover:richtext-text-red-500 richtext-bg-opacity-10 hover:richtext-bg-opacity-20 focus:richtext-bg-opacity-30 dark:hover:richtext-bg-opacity-20",
                children: [
                  /* @__PURE__ */ r(F, { name: "Trash2" }),
                  /* @__PURE__ */ r("span", { children: i("editor.remove") })
                ]
              }
            ),
            g ? /* @__PURE__ */ m(oe, { className: "richtext-flex richtext-gap-3", onClick: x, children: [
              /* @__PURE__ */ r(F, { name: "PaintRoller" }),
              /* @__PURE__ */ r("span", { children: i("editor.clear.tooltip") })
            ] }) : null,
            /* @__PURE__ */ m(oe, { className: "richtext-flex richtext-gap-3", onClick: b, children: [
              /* @__PURE__ */ r(F, { name: "Clipboard" }),
              /* @__PURE__ */ r("span", { children: i("editor.copyToClipboard") })
            ] }),
            /* @__PURE__ */ m(oe, { className: "richtext-flex richtext-gap-3", onClick: C, children: [
              /* @__PURE__ */ r(F, { name: "Copy" }),
              /* @__PURE__ */ r("span", { children: i("editor.copy") })
            ] }),
            u || f ? /* @__PURE__ */ r(zt, {}) : null,
            u ? /* @__PURE__ */ m(Si, { children: [
              /* @__PURE__ */ m(Wt, { className: "richtext-flex richtext-gap-3", children: [
                /* @__PURE__ */ r(F, { name: "AlignCenter" }),
                /* @__PURE__ */ r("span", { children: i("editor.textalign.tooltip") })
              ] }),
              /* @__PURE__ */ r(Li, { children: /* @__PURE__ */ m(qt, { children: [
                /* @__PURE__ */ m(oe, { className: "richtext-flex richtext-gap-3", onClick: () => I("left"), children: [
                  /* @__PURE__ */ r(F, { name: "AlignLeft" }),
                  /* @__PURE__ */ r("span", { children: i("editor.textalign.left.tooltip") })
                ] }),
                /* @__PURE__ */ m(oe, { className: "richtext-flex richtext-gap-3", onClick: () => I("center"), children: [
                  /* @__PURE__ */ r(F, { name: "AlignCenter" }),
                  /* @__PURE__ */ r("span", { children: i("editor.textalign.center.tooltip") })
                ] }),
                /* @__PURE__ */ m(oe, { className: "richtext-flex richtext-gap-3", onClick: () => I("right"), children: [
                  /* @__PURE__ */ r(F, { name: "AlignRight" }),
                  /* @__PURE__ */ r("span", { children: i("editor.textalign.right.tooltip") })
                ] })
              ] }) })
            ] }) : null,
            f ? /* @__PURE__ */ m(Si, { children: [
              /* @__PURE__ */ m(Wt, { className: "richtext-flex richtext-gap-3", children: [
                /* @__PURE__ */ r(F, { name: "IndentIncrease" }),
                /* @__PURE__ */ r("span", { children: i("editor.indent") })
              ] }),
              /* @__PURE__ */ r(Li, { children: /* @__PURE__ */ m(qt, { children: [
                /* @__PURE__ */ m(
                  oe,
                  {
                    className: "richtext-flex richtext-gap-3",
                    onClick: v,
                    disabled: ((L = n == null ? void 0 : n.attrs) == null ? void 0 : L.indent) >= Te.max,
                    children: [
                      /* @__PURE__ */ r(F, { name: "IndentIncrease" }),
                      /* @__PURE__ */ r("span", { children: i("editor.indent.tooltip") })
                    ]
                  }
                ),
                /* @__PURE__ */ m(
                  oe,
                  {
                    className: "richtext-flex richtext-gap-3",
                    onClick: w,
                    disabled: ((T = n == null ? void 0 : n.attrs) == null ? void 0 : T.indent) <= Te.min,
                    children: [
                      /* @__PURE__ */ r(F, { name: "IndentDecrease" }),
                      /* @__PURE__ */ r("span", { children: i("editor.outdent.tooltip") })
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
const ws = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function _s({ item: e, disabled: t, editor: i }) {
  var a;
  const n = e.component;
  return n ? /* @__PURE__ */ r(
    n,
    {
      ...e.componentProps,
      editor: i,
      disabled: t || ((a = e == null ? void 0 : e.componentProps) == null ? void 0 : a.disabled)
    }
  ) : /* @__PURE__ */ r(K, {});
}
function vs(e) {
  const { t, lang: i } = j(), n = ({ editor: o }) => {
    const { selection: c } = o.view.state, { $from: s, to: h } = c;
    return s.pos === h ? !1 : c instanceof Le;
  }, a = B(() => e.disabled || !(e != null && e.editor) ? [] : gs(e.editor, t), [e.disabled, e.editor, i, t]);
  return /* @__PURE__ */ r(le, { shouldShow: n, editor: e == null ? void 0 : e.editor, tippyOptions: ws, children: a != null && a.length ? /* @__PURE__ */ r("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-gap-[4px] richtext-flex-nowrap richtext-whitespace-nowrap richtext-h-[26px] richtext-justify-start richtext-relative", children: a == null ? void 0 : a.map((o, c) => (o == null ? void 0 : o.type) === "divider" ? /* @__PURE__ */ r(
    se,
    {
      orientation: "vertical",
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]"
    },
    `bubbleMenu-divider-${c}`
  ) : /* @__PURE__ */ r(
    _s,
    {
      item: o,
      disabled: e.disabled,
      editor: e.editor
    },
    `bubbleMenu-text-${c}`
  )) }) }) : /* @__PURE__ */ r(K, {}) });
}
function ys({ fill: e }) {
  return /* @__PURE__ */ r(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 256 256",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ r("g", { id: "icon/填充色", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ m("g", { id: "icon/背景颜色", children: [
        /* @__PURE__ */ r("g", { id: "编组", fill: "currentColor", children: /* @__PURE__ */ m(
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
function Bn(e) {
  const [t, i] = p(void 0);
  function n(c) {
    var s;
    (s = e.action) == null || s.call(e, c);
  }
  function a() {
    var c;
    (c = e.action) == null || c.call(e, t);
  }
  const o = A(
    ai((c) => {
      i(c);
    }, 350),
    []
  );
  return /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ r(
      _,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        action: a,
        tooltipOptions: e == null ? void 0 : e.tooltipOptions,
        shortcutKeys: e == null ? void 0 : e.shortcutKeys,
        children: /* @__PURE__ */ r("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ r(ys, { fill: t }) })
      }
    ),
    /* @__PURE__ */ r(
      Sn,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: n,
        highlight: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(V, { variant: "ghost", size: "icon", className: "!richtext-w-3 !richtext-h-[32px]", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ r(F, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
function ks({ editor: e }) {
  var x, b, C, I, v, w, y, N, M, O, S, L, T, k, $, R, z, H;
  const t = ({ editor: q }) => ga(q.view.state, "table"), { t: i } = j();
  function n() {
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
  function h() {
    e.chain().focus().deleteRow().run();
  }
  function l() {
    e.chain().focus().mergeCells().run();
  }
  function d() {
    e == null || e.chain().focus().splitCell().run();
  }
  function u() {
    e.chain().focus().deleteTable().run();
  }
  function f(q) {
    e.chain().focus().setTableCellBackground(q).run();
  }
  return /* @__PURE__ */ r(
    le,
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
          var ki;
          const {
            view: q,
            state: {
              selection: { from: Q }
            }
          } = e, ge = q.domAtPos(Q).node;
          if (!ge)
            return new DOMRect(-1e3, -1e3, 0, 0);
          const yi = (ki = ge == null ? void 0 : ge.closest) == null ? void 0 : ki.call(ge, ".tableWrapper");
          return yi ? yi.getBoundingClientRect() : new DOMRect(-1e3, -1e3, 0, 0);
        },
        plugins: [xo],
        sticky: "popper"
      },
      children: /* @__PURE__ */ m("div", { className: "richtext-min-w-32 richtext-flex richtext-flex-row richtext-h-full richtext-items-center richtext-leading-none richtext-gap-0.5 richtext-p-2 richtext-w-full richtext-bg-background richtext-rounded-lg richtext-shadow-sm !richtext-border richtext-border-border", children: [
        /* @__PURE__ */ r(
          _,
          {
            icon: "BetweenHorizonalEnd",
            tooltip: i("editor.table.menu.insertColumnBefore"),
            action: n,
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
            tooltip: i("editor.table.menu.insertColumnAfter"),
            action: a,
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((I = (C = e == null ? void 0 : e.can()) == null ? void 0 : C.addColumnAfter) != null && I.call(C))
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            icon: "DeleteColumn",
            action: o,
            tooltip: i("editor.table.menu.deleteColumn"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((w = e == null ? void 0 : (v = e.can()).deleteColumn) != null && w.call(v))
          }
        ),
        /* @__PURE__ */ r(se, { orientation: "vertical", className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]" }),
        /* @__PURE__ */ r(
          _,
          {
            icon: "BetweenVerticalEnd",
            action: c,
            tooltip: i("editor.table.menu.insertRowAbove"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((N = e == null ? void 0 : (y = e.can()).addRowBefore) != null && N.call(y))
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            icon: "BetweenVerticalStart",
            action: s,
            tooltip: i("editor.table.menu.insertRowBelow"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((O = (M = e == null ? void 0 : e.can()) == null ? void 0 : M.addRowAfter) != null && O.call(M))
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            icon: "DeleteRow",
            action: h,
            tooltip: i("editor.table.menu.deleteRow"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((L = (S = e == null ? void 0 : e.can()) == null ? void 0 : S.deleteRow) != null && L.call(S))
          }
        ),
        /* @__PURE__ */ r(se, { orientation: "vertical", className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]" }),
        /* @__PURE__ */ r(
          _,
          {
            icon: "TableCellsMerge",
            action: l,
            tooltip: i("editor.table.menu.mergeCells"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((k = (T = e == null ? void 0 : e.can()) == null ? void 0 : T.mergeCells) != null && k.call(T))
          }
        ),
        /* @__PURE__ */ r(
          _,
          {
            icon: "TableCellsSplit",
            action: d,
            tooltip: i("editor.table.menu.splitCells"),
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((R = ($ = e == null ? void 0 : e.can()) == null ? void 0 : $.splitCell) != null && R.call($))
          }
        ),
        /* @__PURE__ */ r(se, { orientation: "vertical", className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]" }),
        /* @__PURE__ */ r(
          Bn,
          {
            editor: e,
            tooltip: i("editor.table.menu.setCellsBgColor"),
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
            tooltip: i("editor.table.menu.deleteTable"),
            action: u,
            "tooltip-options": {
              sideOffset: 15
            },
            disabled: !((H = (z = e == null ? void 0 : e.can()) == null ? void 0 : z.deleteTable) != null && H.call(z))
          }
        )
      ] })
    }
  );
}
function $n(e) {
  const { t } = j(), [i, n] = p({
    text: "",
    link: ""
  }), [a, o] = p(!1);
  E(() => {
    var s;
    if (e != null && e.editor) {
      const { href: h, target: l } = (s = e.editor) == null ? void 0 : s.getAttributes("link"), { from: d, to: u } = e.editor.state.selection, f = e.editor.state.doc.textBetween(d, u, " ");
      n({
        link: h,
        text: f
      }), o(l === "_blank");
    }
  }, [e == null ? void 0 : e.editor]);
  function c(s) {
    s.preventDefault(), e == null || e.onSetLink(i.link, i.text, a);
  }
  return /* @__PURE__ */ r("div", { className: "richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black border-neutral-200 dark:richtext-border-neutral-800", children: /* @__PURE__ */ m("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: c, children: [
    /* @__PURE__ */ r(ie, { className: "mb-[6px]", children: t("editor.link.dialog.text") }),
    /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5 richtext-mb-[10px]", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
      te,
      {
        type: "text",
        value: i.text,
        required: !0,
        className: "richtext-w-80",
        placeholder: "Text",
        onChange: (s) => n({ ...i, text: s.target.value })
      }
    ) }) }),
    /* @__PURE__ */ r(ie, { className: "mb-[6px]", children: t("editor.link.dialog.link") }),
    /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ m("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: [
      /* @__PURE__ */ r(
        te,
        {
          type: "url",
          value: i.link,
          required: !0,
          className: "richtext-pl-10",
          onChange: (s) => n({ ...i, link: s.target.value })
        }
      ),
      /* @__PURE__ */ r("span", { className: "richtext-absolute richtext-inset-y-0 richtext-flex richtext-items-center richtext-justify-center richtext-px-2 richtext-start-0", children: /* @__PURE__ */ r(F, { className: "richtext-size-5 richtext-text-muted-foreground", name: "Link" }) })
    ] }) }),
    /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-space-x-2", children: [
      /* @__PURE__ */ r(ie, { children: t("editor.link.dialog.openInNewTab") }),
      /* @__PURE__ */ r(
        fi,
        {
          checked: a,
          onCheckedChange: (s) => {
            o(s);
          }
        }
      )
    ] }),
    /* @__PURE__ */ r(V, { type: "submit", className: "richtext-self-end richtext-mt-2", children: t("editor.link.dialog.button.apply") })
  ] }) });
}
function Cs(e) {
  const { t } = j();
  return /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-p-2 richtext-bg-white !richtext-border richtext-rounded-lg richtext-shadow-sm dark:richtext-bg-black richtext-border-neutral-200 dark:richtext-border-neutral-800", children: [
    /* @__PURE__ */ r(
      "a",
      {
        href: e == null ? void 0 : e.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "richtext-text-sm richtext-underline richtext-break-all",
        children: ro(e == null ? void 0 : e.link, {
          length: 50,
          omission: "…"
        })
      }
    ),
    (e == null ? void 0 : e.link) && /* @__PURE__ */ r(se, { orientation: "vertical", className: "!richtext-h-4" }),
    /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-nowrap", children: [
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
function Ns({ editor: e, disabled: t }) {
  const [i, n] = p(!1), a = B(() => {
    const { href: h } = e.getAttributes("link");
    return h;
  }, [e]), o = A(({ editor: h }) => h.isActive("link"), []), c = (h, l, d) => {
    e.chain().extendMarkRange("link").insertContent({
      type: "text",
      text: l,
      marks: [
        {
          type: "link",
          attrs: {
            href: h,
            target: d ? "_blank" : ""
          }
        }
      ]
    }).setLink({ href: h }).focus().run(), n(!1);
  }, s = A(() => {
    e.chain().extendMarkRange("link").unsetLink().focus().run(), n(!1);
  }, [e]);
  return /* @__PURE__ */ r(K, { children: /* @__PURE__ */ r(
    le,
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
          n(!1);
        }
      },
      children: t ? /* @__PURE__ */ r(K, {}) : /* @__PURE__ */ r(K, { children: i ? /* @__PURE__ */ r($n, { onSetLink: c, editor: e }) : /* @__PURE__ */ r(
        Cs,
        {
          editor: e,
          onClear: s,
          onEdit: () => {
            n(!0);
          },
          link: a
        }
      ) })
    }
  ) });
}
const wi = {
  maxWidth: "auto",
  zIndex: 20,
  appendTo: "parent",
  moveTransition: "transform 0.1s ease-out"
};
function _i({ item: e, disabled: t, editor: i }) {
  var a;
  const n = e.component;
  return n ? /* @__PURE__ */ r(ct, { children: e.type === "divider" ? /* @__PURE__ */ r(se, { orientation: "vertical", className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]" }) : /* @__PURE__ */ r(
    n,
    {
      ...e.componentProps,
      editor: i,
      disabled: t || ((a = e == null ? void 0 : e.componentProps) == null ? void 0 : a.disabled)
    }
  ) }) : /* @__PURE__ */ r(K, {});
}
function Ts(e) {
  return e.type.name === "image";
}
function As(e) {
  return e.type.name === Wn.name;
}
function Ls(e) {
  return e.type.name === "video";
}
function Ss(e) {
  const { lang: t } = j(), i = ({ editor: a }) => {
    const { selection: o } = a.view.state, { $from: c, to: s } = o;
    let h = !1;
    return a.view.state.doc.nodesBetween(c.pos, s, (l) => {
      if (Ts(l))
        return h = !0, !1;
    }), h;
  }, n = B(() => e.disabled ? [] : hs(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ r(K, { children: /* @__PURE__ */ r(
    le,
    {
      shouldShow: i,
      editor: e == null ? void 0 : e.editor,
      tippyOptions: wi,
      children: n != null && n.length ? /* @__PURE__ */ r("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-flex-nowrap richtext-whitespace-nowrap richtext-h-[26px] richtext-justify-start richtext-relative", children: n == null ? void 0 : n.map((a, o) => /* @__PURE__ */ r(
        _i,
        {
          item: a,
          disabled: e.disabled,
          editor: e.editor
        },
        `bubbleMenu-image-${o}`
      )) }) }) : /* @__PURE__ */ r(K, {})
    }
  ) });
}
function Ms(e) {
  const { lang: t } = j(), i = ({ editor: a }) => {
    const { selection: o } = a.view.state, { $from: c, to: s } = o;
    let h = !1;
    return a.view.state.doc.nodesBetween(c.pos, s, (l) => {
      if (As(l))
        return h = !0, !1;
    }), h;
  }, n = B(() => e.disabled ? [] : us(e.editor), [e.disabled, e.editor, t]);
  return /* @__PURE__ */ r(K, { children: /* @__PURE__ */ r(
    le,
    {
      shouldShow: i,
      editor: e == null ? void 0 : e.editor,
      tippyOptions: wi,
      children: n != null && n.length ? /* @__PURE__ */ r("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-flex-nowrap richtext-whitespace-nowrap richtext-h-[26px] richtext-justify-start richtext-relative", children: n == null ? void 0 : n.map((a, o) => /* @__PURE__ */ r(
        _i,
        {
          item: a,
          disabled: e.disabled,
          editor: e.editor
        },
        `bubbleMenu-image-gif-${o}`
      )) }) }) : /* @__PURE__ */ r(K, {})
    }
  ) });
}
function Is(e) {
  const { lang: t } = j(), i = ({ editor: a }) => {
    const { selection: o } = a.view.state, { $from: c, to: s } = o;
    let h = !1;
    return a.view.state.doc.nodesBetween(c.pos, s, (l) => {
      if (Ls(l))
        return h = !0, !1;
    }), h;
  }, n = B(() => e.disabled ? [] : fs(e.editor), [e.editor, e.disabled, t]);
  return /* @__PURE__ */ r(K, { children: /* @__PURE__ */ r(
    le,
    {
      shouldShow: i,
      editor: e == null ? void 0 : e.editor,
      tippyOptions: wi,
      children: n != null && n.length ? /* @__PURE__ */ r("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-flex-nowrap richtext-whitespace-nowrap richtext-h-[26px] richtext-justify-start richtext-relative", children: n == null ? void 0 : n.map((a, o) => /* @__PURE__ */ r(
        _i,
        {
          item: a,
          disabled: e.disabled,
          editor: e.editor
        },
        `bubbleMenu-video-${o}`
      )) }) }) : /* @__PURE__ */ r(K, {})
    }
  ) });
}
function zs({ editor: e }) {
  const { t } = j(), i = A(() => e.isActive(ot.name), [e]), n = A(() => lt(ot.name, e), [e]), a = A(() => e.chain().focus().addColBefore().run(), [e]), o = A(() => e.chain().focus().addColAfter().run(), [e]), c = A(() => e.chain().focus().deleteCol().run(), [e]);
  return /* @__PURE__ */ r(
    le,
    {
      pluginKey: "columns-bubble-menu",
      editor: e,
      shouldShow: i,
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
      children: /* @__PURE__ */ m("div", { className: "richtext-w-auto richtext-px-3 richtext-py-2 richtext-transition-all !richtext-border richtext-rounded-sm richtext-shadow-sm richtext-pointer-events-auto richtext-select-none richtext-border-neutral-200 dark:richtext-border-neutral-800 richtext-bg-background", children: [
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
            action: n,
            icon: "Trash2",
            tooltip: t("editor.table.menu.delete_column")
          }
        )
      ] })
    }
  );
}
const kh = xa.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleBold(),
          isActive: () => t.isActive("bold") || !1,
          disabled: !t.can().toggleBold(),
          icon: "Bold",
          shortcutKeys: ["mod", "B"],
          tooltip: i("editor.bold.tooltip")
        }
      })
    };
  }
}), Ch = ba.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: i }) {
        return {
          component: _,
          componentProps: {
            action: () => t.commands.toggleItalic(),
            isActive: () => t.isActive("italic") || !1,
            disabled: !t.can().toggleItalic(),
            shortcutKeys: ["mod", "I"],
            icon: "Italic",
            tooltip: i("editor.italic.tooltip")
          }
        };
      }
    };
  }
}), Nh = pa.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: i }) {
        return {
          component: _,
          componentProps: {
            action: () => t.commands.toggleUnderline(),
            isActive: () => t.isActive("underline") || !1,
            disabled: !t.can().toggleUnderline(),
            icon: "Underline",
            shortcutKeys: ["mod", "U"],
            tooltip: i("editor.underline.tooltip")
          }
        };
      }
    };
  }
}), Th = wa.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleStrike(),
          isActive: () => t.isActive("strike") || !1,
          disabled: !t.can().toggleStrike(),
          icon: "Strikethrough",
          shortcutKeys: ["shift", "mod", "X"],
          tooltip: i("editor.strike.tooltip")
        }
      })
    };
  }
}), Ah = _a.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleCode(),
          isActive: () => t.isActive("code") || !1,
          disabled: !t.can().toggleCode(),
          icon: "Code",
          shortcutKeys: ["mod", "E"],
          tooltip: i("editor.code.tooltip")
        }
      })
    };
  }
});
let me, Qe;
const Pt = /* @__PURE__ */ new Set(), Bt = /* @__PURE__ */ new Set();
function Hs() {
  return me;
}
function Es(e) {
  if (!me && !Qe) {
    const t = e.themes.filter(
      (n) => !!n && n in ln
    ), i = e.languages.filter(
      (n) => !!n && n in dn
    );
    return Qe = co({ themes: t, langs: i }).then((n) => {
      me = n;
    }), Qe;
  }
  if (Qe)
    return Qe;
}
async function Dn(e) {
  return me && !me.getLoadedThemes().includes(e) && !Bt.has(e) && e in ln ? (Bt.add(e), await me.loadTheme(e), Bt.delete(e), !0) : !1;
}
async function jn(e) {
  return me && !me.getLoadedLanguages().includes(e) && !Pt.has(e) && e in dn ? (Pt.add(e), await me.loadLanguage(e), Pt.delete(e), !0) : !1;
}
async function Rs({
  doc: e,
  name: t,
  defaultTheme: i,
  defaultLanguage: n
}) {
  const a = it(e, (s) => s.type.name === t), o = [
    ...a.map((s) => s.node.attrs.theme),
    i
  ], c = [
    ...a.map((s) => s.node.attrs.language),
    n
  ];
  me ? await Promise.all([
    ...o.flatMap((s) => Dn(s)),
    ...c.flatMap((s) => !!s && jn(s))
  ]) : await Es({ languages: c, themes: o });
}
function $i({
  doc: e,
  name: t,
  defaultTheme: i,
  defaultLanguage: n
}) {
  const a = [];
  return it(e, (c) => c.type.name === t).forEach((c) => {
    let s = c.pos + 1, h = c.node.attrs.language || n;
    const l = c.node.attrs.theme || i, d = Hs();
    if (!d)
      return;
    d.getLoadedLanguages().includes(h) || (h = "plaintext");
    const u = d.getLoadedThemes().includes(l) ? l : d.getLoadedThemes()[0], f = d.codeToTokensBase(c.node.textContent, {
      lang: h,
      theme: u
    });
    for (const g of f) {
      for (const x of g) {
        const b = s + x.content.length, C = rt.inline(s, b, {
          style: `color: ${x.color}`
        });
        a.push(C), s = b;
      }
      s += 1;
    }
  }), nt.create(e, a);
}
function Os({
  name: e,
  defaultLanguage: t,
  defaultTheme: i
}) {
  const n = new Ge({
    key: new Se("shiki"),
    view(a) {
      class o {
        constructor() {
          this.initDecorations();
        }
        update() {
          this.checkUndecoratedBlocks();
        }
        destroy() {
        }
        // Initialize shiki async, and then highlight initial document
        async initDecorations() {
          const s = a.state.doc;
          await Rs({ doc: s, name: e, defaultLanguage: t, defaultTheme: i });
          const h = a.state.tr.setMeta("shikiPluginForceDecoration", !0);
          a.dispatch(h);
        }
        // When new codeblocks were added and they have missing themes or
        // languages, load those and then add code decorations once again.
        async checkUndecoratedBlocks() {
          const s = it(
            a.state.doc,
            (d) => d.type.name === e
          );
          if ((await Promise.all(
            s.flatMap((d) => [
              Dn(d.node.attrs.theme),
              jn(d.node.attrs.language)
            ])
          )).includes(!0)) {
            const d = a.state.tr.setMeta("shikiPluginForceDecoration", !0);
            a.dispatch(d);
          }
        }
      }
      return new o();
    },
    state: {
      init: (a, { doc: o }) => $i({
        doc: o,
        name: e,
        defaultLanguage: t,
        defaultTheme: i
      }),
      apply: (a, o, c, s) => {
        const h = c.selection.$head.parent.type.name, l = s.selection.$head.parent.type.name, d = it(
          c.doc,
          (g) => g.type.name === e
        ), u = it(
          s.doc,
          (g) => g.type.name === e
        ), f = a.docChanged && ([h, l].includes(e) || u.length !== d.length || a.steps.some((g) => g.from !== void 0 && g.to !== void 0 && d.some((x) => x.pos >= g.from && x.pos + x.node.nodeSize <= g.to)));
        return a.getMeta("shikiPluginForceDecoration") || f ? $i({
          doc: a.doc,
          name: e,
          defaultLanguage: t,
          defaultTheme: i
        }) : o.map(a.mapping, a.doc);
      }
    },
    props: {
      decorations(a) {
        return n.getState(a);
      }
    }
  });
  return n;
}
function Ps({ action: e, languages: t, ...i }) {
  const n = (o) => {
    e(o);
  }, a = B(() => t == null ? void 0 : t.map((o) => ({
    title: uo[o] || o,
    // icon: language.icon,
    language: o
  })), [t]);
  return /* @__PURE__ */ m(pe, { children: [
    /* @__PURE__ */ r(we, { disabled: i == null ? void 0 : i.disabled, asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        tooltip: i == null ? void 0 : i.tooltip,
        disabled: i == null ? void 0 : i.disabled,
        icon: i == null ? void 0 : i.icon
      }
    ) }),
    /* @__PURE__ */ r(be, { className: "richtext-w-full !richtext-max-h-[180px] !richtext-overflow-y-scroll", children: a == null ? void 0 : a.map((o) => /* @__PURE__ */ r(oe, { onClick: () => n(o.language), children: /* @__PURE__ */ r("div", { className: "richtext-h-full richtext-ml-1", children: o.title }) }, `codeblock-${o.title}`)) })
  ] });
}
const Bs = "_wrap_17npv_1", $s = "_maxHeight_17npv_10", Ds = "_btnCopy_17npv_13", js = "_btnDelete_17npv_14", Fs = "_blockInfo_17npv_18", Vs = "_selectLang_17npv_28", Us = "_copied_17npv_54", Ce = {
  wrap: Bs,
  maxHeight: $s,
  btnCopy: Ds,
  btnDelete: js,
  blockInfo: Fs,
  selectLang: Vs,
  "richtext-SelectContent": "_richtext-SelectContent_17npv_42",
  copied: Us
};
function Ws() {
  const [e, t] = p(!1);
  return { isCopied: e, copyToClipboard: async (n) => {
    try {
      await navigator.clipboard.writeText(n), t(!0), setTimeout(() => t(!1), 2e3);
    } catch (a) {
      console.error("Failed to copy text: ", a), t(!1);
    }
  } };
}
function qs({ editor: e, node: { attrs: t }, updateAttributes: i, extension: n }) {
  var f, g;
  const { isCopied: a, copyToClipboard: o } = Ws(), c = B(() => {
    var x;
    return (x = n.options.languages) != null && x.length ? n.options.languages : hn;
  }, [n.options.languages]), s = e.isEditable, h = (g = (f = e == null ? void 0 : e.options) == null ? void 0 : f.editorProps) == null ? void 0 : g.print, { language: l } = t, d = X(), u = A(() => lt(Ks.name, e), [e]);
  return /* @__PURE__ */ m(ce, { className: ee(Ce.wrap, !h && Ce.maxHeight, "render-wrapper"), children: [
    /* @__PURE__ */ m("div", { className: Ce.blockInfo, children: [
      /* @__PURE__ */ r(
        "span",
        {
          onClick: () => o(d.current.innerText),
          className: ee(Ce.btnCopy, a && Ce.copied),
          children: a ? /* @__PURE__ */ r(na, { size: 16 }) : /* @__PURE__ */ r(tn, { size: 16 })
        }
      ),
      /* @__PURE__ */ r(
        "span",
        {
          onClick: u,
          className: Ce.btnDelete,
          children: /* @__PURE__ */ r(
            F,
            {
              name: "Trash2"
            }
          )
        }
      ),
      /* @__PURE__ */ r("div", { className: Ce.selectLang, children: /* @__PURE__ */ m(
        Ho,
        {
          defaultValue: l || "auto",
          disabled: !s,
          onValueChange: (x) => i({ language: x }),
          children: [
            /* @__PURE__ */ r(pn, { children: /* @__PURE__ */ r(Eo, { placeholder: "Language" }) }),
            /* @__PURE__ */ m(vn, { className: "richtext-max-h-60 richtext-overflow-y-auto", children: [
              /* @__PURE__ */ r(Kt, { value: "auto", children: "Auto" }),
              c.map((x, b) => /* @__PURE__ */ r(Kt, { value: x, children: x.charAt(0).toUpperCase() + x.slice(1) }, `code-lang-${b}`))
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ r("pre", { ref: d, children: /* @__PURE__ */ r(va, { as: "code" }) })
  ] });
}
const Ks = ya.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      languages: [],
      button: ({ editor: t, t: i, extension: n }) => {
        var o, c, s;
        const a = (c = (o = n == null ? void 0 : n.options) == null ? void 0 : o.languages) != null && c.length ? (s = n == null ? void 0 : n.options) == null ? void 0 : s.languages : hn;
        return {
          component: Ps,
          componentProps: {
            action: (h = "js") => t.commands.setCodeBlock({
              language: h
            }),
            isActive: () => t.isActive("codeBlock") || !1,
            disabled: !t.can().toggleCodeBlock(),
            icon: "Code2",
            tooltip: i("editor.codeblock.tooltip"),
            languages: a
          }
        };
      }
    };
  },
  addNodeView() {
    return xe(qs);
  },
  addProseMirrorPlugins() {
    var e;
    return [
      ...((e = this.parent) == null ? void 0 : e.call(this)) || [],
      Os({
        name: this.name,
        defaultLanguage: null,
        defaultTheme: this.options.defaultTheme
      })
    ];
  }
});
function Gs(e) {
  var a, o, c;
  const { t, lang: i } = j(), n = B(() => {
    var l;
    const s = (l = e == null ? void 0 : e.items) == null ? void 0 : l.find((d) => d.isActive());
    return s && !s.default ? {
      ...s
    } : {
      title: e.tooltip,
      font: t("editor.fontFamily.default.tooltip"),
      isActive: () => !1,
      disabled: !1,
      action: () => e.editor.chain().focus().unsetFontFamily().run()
    };
  }, [t, i, e]);
  return /* @__PURE__ */ m(pe, { children: [
    /* @__PURE__ */ r(we, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      mi,
      {
        title: ((a = n == null ? void 0 : n.font) == null ? void 0 : a.length) > 7 ? `${(o = n == null ? void 0 : n.font) == null ? void 0 : o.slice(0, 6)}...` : n == null ? void 0 : n.font,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        icon: "MenuDown"
      }
    ) }),
    /* @__PURE__ */ r(be, { className: "richtext-w-full", children: (c = e == null ? void 0 : e.items) == null ? void 0 : c.map((s, h) => {
      const l = s.font === t("editor.fontFamily.default.tooltip") ? {} : { fontFamily: s.font };
      return /* @__PURE__ */ m(ct, { children: [
        /* @__PURE__ */ r(Ie, { checked: (n == null ? void 0 : n.font) === s.font, onClick: s.action, children: /* @__PURE__ */ r("div", { className: "richtext-h-full richtext-ml-1", style: l, children: s.font }) }),
        s.font === t("editor.fontFamily.default.tooltip") && /* @__PURE__ */ r(zt, {})
      ] }, `font-family-${h}`);
    }) })
  ] });
}
const Lh = ka.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      fontFamilyList: mo,
      button({ editor: t, extension: i, t: n }) {
        var l;
        const { extensions: a = [] } = t.extensionManager ?? [], o = Gt(((l = i == null ? void 0 : i.options) == null ? void 0 : l.fontFamilyList) || []), c = a.find(
          (d) => d.name === "base-kit"
        ), s = o.map((d) => ({
          action: () => {
            t.chain().focus().setFontFamily(d.value).run();
          },
          isActive: () => t.isActive("textStyle", { fontFamily: d.value }) || !1,
          disabled: !t.can().setFontFamily(d.value),
          title: d.name,
          font: d.value
        }));
        c && c.options.textStyle !== !1 && s.unshift({
          action: () => t.chain().focus().unsetFontFamily().run(),
          isActive: () => !1,
          disabled: !1,
          font: n("editor.fontFamily.default.tooltip"),
          title: n("editor.fontFamily.tooltip")
        });
        const h = s.filter((d) => d.disabled).length === s.length;
        return {
          component: Gs,
          componentProps: {
            tooltip: n("editor.fontFamily.tooltip"),
            disabled: h,
            items: s,
            editor: t
          }
        };
      }
    };
  }
});
function Zs(e) {
  var i;
  const t = B(() => {
    var o;
    const n = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((c) => c.isActive());
    return n && !n.default ? {
      ...n
    } : {
      title: e.tooltip,
      level: 0,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(pe, { children: [
    /* @__PURE__ */ r(we, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      mi,
      {
        title: t == null ? void 0 : t.title,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        icon: "MenuDown"
      }
    ) }),
    /* @__PURE__ */ r(be, { className: "richtext-w-full", children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((n, a) => {
      var o, c;
      return /* @__PURE__ */ m(ct, { children: [
        /* @__PURE__ */ m(
          Ie,
          {
            checked: (t == null ? void 0 : t.title) === n.title,
            onClick: n.action,
            children: [
              /* @__PURE__ */ r("div", { className: `richtext-ml-1 richtext-h-full heading-${n.level}`, children: n.title }),
              !!((o = n == null ? void 0 : n.shortcutKeys) != null && o.length) && /* @__PURE__ */ r(bn, { className: "richtext-pl-4", children: (c = n == null ? void 0 : n.shortcutKeys) == null ? void 0 : c.map((s) => Mt(s)).join(" ") })
            ]
          }
        ),
        n.level === 0 && /* @__PURE__ */ r(zt, {})
      ] }, `heading-k-${a}`);
    }) })
  ] });
}
const Sh = Ca.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      levels: [1, 2, 3, 4, 5, 6],
      button({ editor: t, extension: i, t: n }) {
        var l;
        const { extensions: a = [] } = t.extensionManager ?? [], o = ((l = i.options) == null ? void 0 : l.levels) || [], c = a.find(
          (d) => d.name === "base-kit"
        ), s = o.map((d) => ({
          action: () => t.commands.toggleHeading({ level: d }),
          isActive: () => t.isActive("heading", { level: d }) || !1,
          disabled: !t.can().toggleHeading({ level: d }),
          title: n(`editor.heading.h${d}.tooltip`),
          level: d,
          shortcutKeys: ["alt", "mod", `${d}`]
        }));
        c && c.options.paragraph !== !1 && s.unshift({
          action: () => t.commands.setParagraph(),
          isActive: () => t.isActive("paragraph") || !1,
          disabled: !t.can().setParagraph(),
          level: 0,
          title: n("editor.paragraph.tooltip"),
          shortcutKeys: ["alt", "mod", "0"]
        });
        const h = s.filter((d) => d.disabled).length === s.length;
        return {
          component: Zs,
          componentProps: {
            tooltip: n("editor.heading.tooltip"),
            disabled: h,
            items: s,
            editor: t
          }
        };
      }
    };
  }
});
function Js(e) {
  var i;
  const t = B(() => {
    var o;
    const n = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((c) => c.isActive());
    return n && !n.default ? {
      ...n,
      icon: n.icon ? n.icon : e.icon
    } : {
      title: e == null ? void 0 : e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(de, { modal: !0, children: [
    /* @__PURE__ */ r(he, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        customClass: "!richtext-w-12 richtext-h-12",
        icon: e == null ? void 0 : e.icon,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(F, { className: "richtext-w-3 richtext-h-3 richtext-ml-1 richtext-text-zinc-500", name: "MenuDown" })
      }
    ) }),
    /* @__PURE__ */ r(
      ae,
      {
        className: "richtext-min-w-4 richtext-w-full !richtext-p-[4px] richtext-flex richtext-flex-row richtext-gap-1",
        align: "start",
        side: "bottom",
        children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((n, a) => {
          var o, c;
          return /* @__PURE__ */ m(Ze, { children: [
            /* @__PURE__ */ r(Je, { asChild: !0, children: /* @__PURE__ */ r(
              ut,
              {
                size: "sm",
                onClick: n == null ? void 0 : n.action,
                className: "richtext-p-1 richtext-w-7 richtext-h-7",
                pressed: t.title === n.title,
                "data-state": t.title === n.title ? "on" : "off",
                children: (n == null ? void 0 : n.icon) && /* @__PURE__ */ r(F, { name: n.icon })
              }
            ) }),
            /* @__PURE__ */ m(ze, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ r("span", { children: n.title }),
              !!((o = n.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: (c = n.shortcutKeys) == null ? void 0 : c.map((s) => Mt(s)).join(" ") })
            ] })
          ] }, `text-align-${a}`);
        })
      }
    )
  ] });
}
const Mh = Na.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["heading", "paragraph", "list_item", "title"],
      button({
        editor: t,
        extension: i,
        t: n
      }) {
        var l;
        const a = ((l = i.options) == null ? void 0 : l.alignments) || [], o = {
          left: ["mod", "Shift", "L"],
          center: ["mod", "Shift", "E"],
          right: ["mod", "Shift", "R"],
          justify: ["mod", "Shift", "J"]
        }, c = {
          left: "AlignLeft",
          center: "AlignCenter",
          right: "AlignRight",
          justify: "AlignJustify"
        }, s = a.map((d) => {
          var u, f, g;
          return {
            title: n(`editor.textalign.${d}.tooltip`),
            icon: c[d],
            shortcutKeys: o[d],
            isActive: () => t.isActive({ textAlign: d }) || !1,
            action: () => {
              var x, b;
              return (b = (x = t.commands) == null ? void 0 : x.setTextAlign) == null ? void 0 : b.call(x, d);
            },
            disabled: !((g = (f = (u = t == null ? void 0 : t.can) == null ? void 0 : u.call(t)) == null ? void 0 : f.setTextAlign) != null && g.call(f, d))
          };
        }), h = s.filter((d) => d.disabled).length === s.length;
        return {
          component: Js,
          componentProps: {
            icon: "AlignJustify",
            tooltip: n("editor.textalign.tooltip"),
            disabled: h,
            items: s
          }
        };
      }
    };
  }
});
function Xs(e) {
  var n;
  const { t } = j(), i = B(() => {
    const a = (e.items || []).find((c) => c.isActive());
    return a || {
      title: t("editor.fontSize.default.tooltip"),
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(pe, { children: [
    /* @__PURE__ */ r(we, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      mi,
      {
        title: i == null ? void 0 : i.title,
        tooltip: `${e == null ? void 0 : e.tooltip}`,
        disabled: e == null ? void 0 : e.disabled,
        icon: "MenuDown"
      }
    ) }),
    /* @__PURE__ */ r(be, { className: "richtext-w-32 richtext-overflow-y-auto richtext-max-h-96", children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((a, o) => /* @__PURE__ */ r(
      Ie,
      {
        checked: i.title === a.title,
        onClick: a.action,
        children: /* @__PURE__ */ r("div", { className: "richtext-h-full richtext-ml-1", children: a.title })
      },
      `font-size-${o}`
    )) })
  ] });
}
const Ih = J.create({
  name: "fontSize",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["textStyle"],
      fontSizes: [...fo],
      button({ editor: t, extension: i, t: n }) {
        var h;
        const a = Gt(((h = i.options) == null ? void 0 : h.fontSizes) || Ai), o = Gt([Ai])[0], c = a.map((l) => ({
          title: l.value === o.value ? n("editor.fontSize.default.tooltip") : String(l.name),
          isActive: () => {
            const { fontSize: d } = t.getAttributes("textStyle");
            return l.value === o.value && d === void 0 ? !0 : t.isActive({ fontSize: String(l.value) }) || !1;
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
          component: Xs,
          componentProps: {
            editor: t,
            tooltip: n("editor.fontSize.tooltip"),
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
function Ys({ fill: e }) {
  return /* @__PURE__ */ r(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 240 240",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ r("g", { stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ r("g", { transform: "translate(0.000000, 0.500000)", children: /* @__PURE__ */ m("g", { transform: "translate(39.000000, 17.353553)", children: [
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
function Qs(e) {
  const [t, i] = p(void 0);
  function n(c) {
    var s;
    (s = e.action) == null || s.call(e, c);
  }
  function a() {
    var c;
    (c = e.action) == null || c.call(e, t);
  }
  const o = A(
    ai((c) => {
      i(c);
    }, 350),
    []
  );
  return /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ r(_, { tooltip: e == null ? void 0 : e.tooltip, disabled: e == null ? void 0 : e.disabled, action: a, children: /* @__PURE__ */ r("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ r(Ys, { fill: t }) }) }),
    /* @__PURE__ */ r(
      Sn,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: n,
        disabled: e == null ? void 0 : e.disabled,
        colors: e == null ? void 0 : e.colors,
        defaultColor: e == null ? void 0 : e.defaultColor,
        children: /* @__PURE__ */ r(V, { variant: "ghost", size: "icon", className: "r!ichtext-h-[32px] !richtext-w-3", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ r(F, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
const zh = Ta.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: i, extension: n }) {
        return {
          component: Qs,
          componentProps: {
            colors: n.options.colors,
            defaultColor: n.options.defaultColor,
            action: (a) => {
              a === void 0 && t.chain().focus().unsetColor().run(), typeof a == "string" && t.chain().focus().setColor(a).run();
            },
            isActive: () => {
              const { color: a } = t.getAttributes("textStyle");
              return a && t.isActive({ color: a }) || !1;
            },
            editor: t,
            disabled: !t.can().setColor(""),
            tooltip: i("editor.color.tooltip")
          }
        };
      }
    };
  }
}), Hh = Aa.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      multicolor: !0,
      button: ({ editor: t, t: i }) => ({
        component: Bn,
        componentProps: {
          action: (n) => {
            typeof n == "string" && t.chain().focus().setHighlight({ color: n }).run(), n === void 0 && t.chain().focus().unsetHighlight().run();
          },
          editor: t,
          isActive: () => t.isActive("highlight") || !1,
          disabled: !t.can().setHighlight(),
          shortcutKeys: ["⇧", "mod", "H"],
          tooltip: i("editor.highlight.tooltip")
        }
      })
    };
  }
}), Eh = La.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleBulletList(),
          isActive: () => t.isActive("bulletList") || !1,
          disabled: !1,
          shortcutKeys: ["shift", "mod", "8"],
          icon: "List",
          tooltip: i("editor.bulletlist.tooltip")
        }
      })
    };
  }
}), Rh = fe.create({
  name: "clear",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => t.chain().focus().clearNodes().unsetAllMarks().run(),
          disabled: !t.can().chain().focus().clearNodes().unsetAllMarks().run(),
          icon: "Eraser",
          tooltip: i("editor.clear.tooltip")
        }
      })
    };
  }
}), Oh = Sa.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleOrderedList(),
          isActive: () => t.isActive("orderedList") || !1,
          disabled: !1,
          icon: "ListOrdered",
          shortcutKeys: ["mod", "shift", "7"],
          tooltip: i("editor.orderedlist.tooltip")
        }
      })
    };
  }
}), Ph = Ma.extend({
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
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleTaskList(),
          isActive: () => t.isActive("taskList") || !1,
          disabled: !1,
          icon: "ListTodo",
          shortcutKeys: ["shift", "mod", "9"],
          tooltip: i("editor.tasklist.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [Ia.configure(this.options.taskItem)];
  }
}), Bh = za.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.toggleBlockquote(),
          isActive: () => t.isActive("blockquote") || !1,
          disabled: !t.can().toggleBlockquote(),
          icon: "TextQuote",
          shortcutKeys: ["shift", "mod", "B"],
          tooltip: i("editor.blockquote.tooltip")
        }
      })
    };
  }
});
function el(e) {
  function t(i, n, a) {
    e.action && e.action({ link: i, text: n, openInNewTab: a });
  }
  return /* @__PURE__ */ m(de, { modal: !0, children: [
    /* @__PURE__ */ r(he, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(F, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ r(ae, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ r($n, { editor: e.editor, onSetLink: t }) })
  ] });
}
const $h = Ha.extend({
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
      re(this.options.HTMLAttributes, e, {
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
      button: ({ editor: t, t: i }) => ({
        component: el,
        componentProps: {
          editor: t,
          action: (n) => {
            const { link: a, text: o, openInNewTab: c } = n;
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
          tooltip: i("editor.link.tooltip")
        }
      })
    };
  },
  addProseMirrorPlugins() {
    return [
      new Ge({
        props: {
          handleClick: (e, t) => {
            const { schema: i, doc: n, tr: a } = e.state, o = Ea(n.resolve(t), i.marks.link);
            if (!o)
              return !1;
            const c = n.resolve(o.from), s = n.resolve(o.to), h = a.setSelection(new Le(c, s));
            e.dispatch(h);
          }
        }
      })
    ];
  }
}), Dh = Ra.extend({
  renderHTML() {
    return [
      "div",
      re(this.options.HTMLAttributes, {
        "data-type": this.name
      }),
      ["hr"]
    ];
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => t.commands.setHorizontalRule(),
          disabled: !t.can().setHorizontalRule(),
          icon: "Minus",
          shortcutKeys: ["mod", "alt", "S"],
          tooltip: i("editor.horizontalrule.tooltip")
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
function tl(e) {
  var l;
  const {
    icon: t = void 0,
    // title = undefined,
    tooltip: i = void 0,
    // disabled = false,
    customClass: n = "",
    // color = undefined,
    // loading = false,
    // shortcutKeys = undefined,
    tooltipOptions: a = {},
    action: o = void 0,
    isActive: c = void 0,
    children: s
  } = e, h = mt[t];
  return /* @__PURE__ */ m(Ze, { children: [
    /* @__PURE__ */ r(Je, { asChild: !0, children: /* @__PURE__ */ m(
      ut,
      {
        size: "sm",
        className: `richtext-w-[32px] richtext-h-[32px] ${n}`,
        disabled: c == null ? void 0 : c(),
        onClick: o,
        children: [
          h && /* @__PURE__ */ r(h, { className: "richtext-w-4 richtext-h-4" }),
          s && /* @__PURE__ */ r(K, { children: s })
        ]
      }
    ) }),
    i && /* @__PURE__ */ r(ze, { ...a, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
      /* @__PURE__ */ r("div", { children: i }),
      !!((l = e == null ? void 0 : e.shortcutKeys) != null && l.length) && /* @__PURE__ */ r("span", { children: It(e == null ? void 0 : e.shortcutKeys) })
    ] }) })
  ] });
}
const il = ["undo", "redo"], jh = Oa.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      depth: 100,
      newGroupDelay: 500,
      button: ({ editor: t, t: i }) => il.map((n) => ({
        component: tl,
        componentProps: {
          action: () => {
            n === "undo" && t.chain().focus().undo().run(), n === "redo" && t.chain().focus().redo().run();
          },
          shortcutKeys: n === "undo" ? ["mod", "Z"] : ["shift", "mod", "Z"],
          disabled: n === "undo" ? !t.can().undo() : !t.can().redo(),
          isActive: () => n === "undo" ? !t.can().undo() : !t.can().redo(),
          icon: n === "undo" ? "Undo2" : "Redo2",
          tooltip: i(`editor.${n}.tooltip`)
        }
      }))
    };
  }
}), nl = Pa.extend({
  content: "(block|columns)+"
  // echo editor is a block editor
});
function rl(e, t, i = null) {
  return i ? e.createChecked({ index: t }, i) : e.createAndFill({ index: t });
}
function al(e) {
  if (e.cached.columnsNodeTypes)
    return e.cached.columnsNodeTypes;
  const t = {
    columns: e.nodes.columns,
    column: e.nodes.column
  };
  return e.cached.columnsNodeTypes = t, t;
}
function ol(e, t, i = null) {
  const n = al(e), a = [];
  for (let o = 0; o < t; o += 1) {
    const c = rl(n.column, o, i);
    c && a.push(c);
  }
  return n.columns.createChecked({ cols: t }, a);
}
function $t({
  state: e,
  dispatch: t,
  type: i
}) {
  const n = yt((o) => o.type.name === ot.name)(e.selection), a = yt((o) => o.type.name === vi.name)(e.selection);
  if (t && n && a) {
    const o = n.node, c = a.node.attrs.index, s = o.toJSON();
    let h = c;
    i === "delete" ? (h = c - 1, s.content.splice(c, 1)) : (h = i === "addBefore" ? c : c + 1, s.content.splice(h, 0, {
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
    const l = ao.fromJSON(e.schema, s);
    let d = n.pos;
    l.content.forEach((f, g, x) => {
      x < h && (d += f.nodeSize);
    });
    const u = e.tr.setTime(Date.now());
    u.replaceWith(n.pos, n.pos + n.node.nodeSize, l).setSelection(
      Le.near(u.doc.resolve(d))
    ), t(u);
  }
  return !0;
}
function Di({ state: e, dispatch: t, type: i }) {
  const n = yt((o) => o.type.name === ot.name)(e.selection), a = yt((o) => o.type.name === vi.name)(e.selection);
  if (t && n && a) {
    const o = n.node, c = a.node.attrs.index;
    let s = 0;
    i === "before" ? s = (c - 1 + o.attrs.cols) % o.attrs.cols : s = (c + 1) % o.attrs.cols;
    let h = n.pos;
    o.content.forEach((d, u, f) => {
      f < s && (h += d.nodeSize);
    });
    const l = e.tr.setTime(Date.now());
    return l.setSelection(Le.near(l.doc.resolve(h))), t(l), !0;
  }
  return !1;
}
const cl = 200, ot = fe.create({
  name: "columns",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  content: "column{1,}",
  priority: cl,
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
    return ["div", re(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      insertColumns: (e) => ({ tr: t, dispatch: i, editor: n }) => {
        const a = ol(n.schema, e && e.cols || 3);
        if (i) {
          const o = t.selection.anchor + 1;
          t.replaceSelectionWith(a).scrollIntoView().setSelection(Le.near(t.doc.resolve(o)));
        }
        return !0;
      },
      addColBefore: () => ({ dispatch: e, state: t }) => $t({ dispatch: e, state: t, type: "addBefore" }),
      addColAfter: () => ({ dispatch: e, state: t }) => $t({ dispatch: e, state: t, type: "addAfter" }),
      deleteCol: () => ({ dispatch: e, state: t }) => $t({ dispatch: e, state: t, type: "delete" })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-G": () => this.editor.commands.insertColumns(),
      Tab: () => Di({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "after"
      }),
      "Shift-Tab": () => Di({
        state: this.editor.state,
        dispatch: this.editor.view.dispatch,
        type: "before"
      })
    };
  }
}), vi = fe.create({
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
    return ["div", re(this.options.HTMLAttributes, e), 0];
  }
}), Fh = J.create({
  name: "columnActionButton",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => {
            t.chain().focus().insertColumns({ cols: 2 }).run();
          },
          icon: "Columns",
          tooltip: i("editor.columns.tooltip")
        }
      })
    };
  }
}), sl = J.create({
  name: "selection",
  addProseMirrorPlugins() {
    const { editor: e } = this;
    return [
      new Ge({
        key: new Se("selection"),
        props: {
          decorations(t) {
            return t.selection.empty || e.isFocused === !0 ? null : nt.create(t.doc, [
              rt.inline(t.selection.from, t.selection.to, {
                class: "selection"
              })
            ]);
          }
        }
      })
    ];
  }
});
function ll(e) {
  const { t } = j(), i = B(() => [
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
  ], [e.editor, t]), n = B(() => i.filter((a) => a.isActive()).pop() ?? {
    label: "Empty"
  }, [i]);
  return /* @__PURE__ */ m(pe, { children: [
    /* @__PURE__ */ r(we, { asChild: !0, children: /* @__PURE__ */ m(V, { variant: "ghost", className: "richtext-h-[32px] richtext-flex richtext-gap-1 richtext-px-1.5", children: [
      /* @__PURE__ */ m("span", { className: "richtext-text-sm richtext-font-normal richtext-whitespace-nowrap", children: [
        " ",
        n == null ? void 0 : n.label
      ] }),
      /* @__PURE__ */ r(Lt, { className: "richtext-w-4 richtext-h-4" })
    ] }) }),
    /* @__PURE__ */ r(be, { hideWhenDetached: !0, className: "richtext-w-full richtext-p-1", align: "start", sideOffset: 5, children: i.map((a, o) => {
      var s;
      const c = mt[a.iconName];
      return /* @__PURE__ */ r(
        Ie,
        {
          checked: ((s = a.isActive) == null ? void 0 : s.call(a)) || !1,
          onClick: () => a.action(),
          className: "richtext-cursor-pointer",
          children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-px-2", children: [
            /* @__PURE__ */ r(c, { className: "richtext-w-3 richtext-h3" }),
            /* @__PURE__ */ m("span", { children: [
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
const dl = J.create({
  name: "text-bubble",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      toolbar: !1,
      button: () => ({
        component: ll,
        componentProps: {}
      })
    };
  }
});
function ji({ types: e, node: t }) {
  return Array.isArray(e) && e.includes(t.type) || t.type === e;
}
const hl = J.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: ["paragraph"]
    };
  },
  addProseMirrorPlugins() {
    const e = new Se(this.name), t = Object.entries(this.editor.schema.nodes).map(([, i]) => i).filter((i) => this.options.notAfter.includes(i.name));
    return [
      new Ge({
        key: e,
        appendTransaction: (i, n, a) => {
          const { doc: o, tr: c, schema: s } = a, h = e.getState(a), l = o.content.size, d = s.nodes[this.options.node];
          if (h)
            return c.insert(l, d.create());
        },
        state: {
          init: (i, n) => {
            const a = n.tr.doc.lastChild;
            return !ji({ node: a, types: t });
          },
          apply: (i, n) => {
            if (!i.docChanged)
              return n;
            const a = i.doc.lastChild;
            return !ji({ node: a, types: t });
          }
        }
      })
    ];
  }
}), Vh = J.create({
  name: "base-kit",
  addExtensions() {
    const e = [];
    return this.options.document !== !1 && e.push(nl.configure()), this.options.placeholder !== !1 && e.push(
      Ba.configure({
        placeholder: ({ node: t, pos: i, editor: n }) => {
          var a, o, c, s, h;
          return ((a = t == null ? void 0 : t.type) == null ? void 0 : a.name) === "columns" || ((o = t == null ? void 0 : t.content) == null ? void 0 : o.size) !== 0 ? "" : ((c = t == null ? void 0 : t.type) == null ? void 0 : c.name) === "heading" ? `${W.t(`editor.heading.h${t.attrs.level}.tooltip`)}` : ((s = t == null ? void 0 : t.type) == null ? void 0 : s.name) === "codeBlock" || ((h = t == null ? void 0 : t.type) == null ? void 0 : h.name) === "table" ? "" : n.extensionManager.extensions.some((l) => l.name === "slashCommand") ? W.t("editor.slash") : i === 0 ? W.t("editor.content") : W.t("editor.content");
        },
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && e.push(
      $a.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.text !== !1 && e.push(Da.configure()), this.options.textBubble !== !1 && e.push(dl.configure()), this.options.gapcursor !== !1 && e.push(ja.configure()), this.options.dropcursor !== !1 && e.push(
      Fa.configure({
        ...this.options.dropcursor,
        width: 2,
        class: "ProseMirror-dropcursor border-black"
      })
    ), this.options.characterCount !== !1 && e.push(Va.configure(this.options.characterCount)), this.options.paragraph !== !1 && e.push(Ua.configure(this.options.paragraph)), this.options.hardBreak !== !1 && e.push(Wa.configure(this.options.hardBreak)), this.options.listItem !== !1 && e.push(qa.configure(this.options.listItem)), this.options.textStyle !== !1 && e.push(Ka.configure(this.options.textStyle)), this.options.trailingNode !== !1 && e.push(hl.configure(this.options.trailingNode)), this.options.selection !== !1 && e.push(sl), this.options.multiColumn !== !1 && (e.push(vi), e.push(ot)), e;
  }
}), Uh = J.create({
  name: "subAndSuperScript",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, extension: i, t: n }) => {
        const a = i.options.subscript, o = i.options.superscript, c = {
          component: _,
          componentProps: {
            action: () => t.commands.toggleSubscript(),
            isActive: () => t.isActive("subscript") || !1,
            disabled: !t.can().toggleSubscript(),
            icon: "Subscript",
            tooltip: n("editor.subscript.tooltip")
          }
        }, s = {
          component: _,
          componentProps: {
            action: () => t.commands.toggleSuperscript(),
            isActive: () => t.isActive("superscript") || !1,
            disabled: !t.can().toggleSuperscript(),
            icon: "Superscript",
            tooltip: n("editor.superscript.tooltip")
          }
        }, h = [];
        return a !== !1 && h.push(c), o !== !1 && h.push(s), h;
      }
    };
  },
  addExtensions() {
    const e = [];
    return this.options.subscript !== !1 && e.push(nn.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(rn.configure(this.options.superscript)), e;
  }
});
function ul(e) {
  var i;
  const t = B(() => {
    var o;
    const n = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((c) => c.isActive());
    return n && !n.default ? {
      ...n,
      icon: n != null && n.icon ? n == null ? void 0 : n.icon : e == null ? void 0 : e.icon
    } : {
      title: e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(pe, { children: [
    /* @__PURE__ */ r(we, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        customClass: "!richtext-w-12 richtext-h-12",
        icon: e == null ? void 0 : e.icon,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(Rn, { className: "richtext-w-3 richtext-h-3 richtext-text-gray-500" })
      }
    ) }),
    /* @__PURE__ */ r(be, { className: "w-full", children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((n, a) => /* @__PURE__ */ m(
      Ie,
      {
        checked: t.title === n.title,
        onClick: n.action,
        className: "richtext-flex richtext-items-center richtext-gap-3",
        children: [
          /* @__PURE__ */ r(F, { name: n == null ? void 0 : n.icon }),
          /* @__PURE__ */ r("span", { className: "richtext-ml-1", children: n.title }),
          !!(n != null && n.shortcutKeys) && /* @__PURE__ */ r("span", { className: "richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", children: It(n.shortcutKeys) })
        ]
      },
      `more-mark-${a}`
    )) })
  ] });
}
const Wh = J.create({
  name: "moreMark",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, extension: i, t: n }) {
        const a = i.options.subscript, o = i.options.superscript, c = {
          action: () => t.commands.toggleSubscript(),
          isActive: () => t.isActive("subscript") || !1,
          disabled: !t.can().toggleSubscript(),
          icon: "Subscript",
          title: n("editor.subscript.tooltip"),
          shortcutKeys: ["mod", "."]
        }, s = {
          action: () => t.commands.toggleSuperscript(),
          isActive: () => t.isActive("superscript") || !1,
          disabled: !t.can().toggleSuperscript(),
          icon: "Superscript",
          title: n("editor.superscript.tooltip"),
          shortcutKeys: ["mod", ","]
        }, h = [];
        return a !== !1 && h.push(c), o !== !1 && h.push(s), {
          component: ul,
          componentProps: {
            icon: "Type",
            tooltip: n("editor.moremark"),
            disabled: !t.isEditable,
            items: h
          }
        };
      }
    };
  },
  addExtensions() {
    const e = [];
    return this.options.subscript !== !1 && e.push(nn.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(rn.configure(this.options.superscript)), e;
  }
}), qh = J.create({
  name: "indent",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "blockquote"],
      minIndent: Te.min,
      maxIndent: Te.max,
      button({ editor: t, t: i }) {
        return [
          {
            component: _,
            componentProps: {
              action: () => {
                t.commands.indent();
              },
              shortcutKeys: ["Tab"],
              icon: "IndentIncrease",
              tooltip: i("editor.indent.tooltip")
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
              tooltip: i("editor.outdent.tooltip")
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
      indent: () => Bi({
        delta: Te.more,
        types: this.options.types
      }),
      outdent: () => Bi({
        delta: Te.less,
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
function ml(e) {
  return Number.parseFloat(e.replace("%", "")) / 100;
}
function fl(e) {
  const { t } = j(), [i, n] = p("default");
  function a(c) {
    c === "default" ? e.editor.commands.unsetLineHeight() : e.editor.commands.setLineHeight(c), n(c);
  }
  const o = B(() => {
    const h = e.editor.extensionManager.extensions.find(
      (l) => l.name === "lineHeight"
    ).options.lineHeights.map((l) => ({
      label: ml(l),
      value: l
    }));
    return h.unshift({
      label: t("editor.default"),
      value: "default"
    }), h;
  }, [e]);
  return /* @__PURE__ */ m(pe, { children: [
    /* @__PURE__ */ r(we, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        customClass: "!richtext-w-12 richtext-h-12",
        icon: "LineHeight",
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(F, { className: "richtext-w-3 richtext-h-3 richtext-ml-1 richtext-text-zinc-500", name: "MenuDown" })
      }
    ) }),
    /* @__PURE__ */ r(be, { className: "richtext-min-w-24", children: o == null ? void 0 : o.map((c, s) => /* @__PURE__ */ r(
      Ie,
      {
        checked: c.value === i,
        onClick: () => a(c.value),
        children: c.label
      },
      `lineHeight-${s}`
    )) })
  ] });
}
const gl = ["paragraph", "heading", "list_item", "todo_item"];
function xl(e, t) {
  const { selection: i, doc: n } = e;
  if (!i || !n || !(i instanceof Le || i instanceof cn))
    return e;
  const { from: a, to: o } = i, c = [], s = t && t !== un ? t : null;
  if (n.nodesBetween(a, o, (h, l) => {
    const d = h.type;
    return gl.includes(d.name) ? ((h.attrs.lineHeight || null) !== s && c.push({
      node: h,
      pos: l,
      nodeType: d
    }), d.name !== "list_item" && d.name !== "todo_item") : !0;
  }), c.length === 0)
    return e;
  for (const h of c) {
    const { node: l, pos: d, nodeType: u } = h;
    let { attrs: f } = l;
    f = {
      ...f,
      lineHeight: s
    }, e = e.setNodeMarkup(d, u, f, l.marks);
  }
  return e;
}
function bl(e) {
  return ({ state: t, dispatch: i }) => {
    const { selection: n } = t;
    let { tr: a } = t;
    return a = a.setSelection(n), a = xl(a, e), a.docChanged ? (i && i(a), !0) : !1;
  };
}
const Kh = J.create({
  name: "lineHeight",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "list_item", "todo_item"],
      lineHeights: go,
      defaultHeight: un,
      button({ editor: t, t: i }) {
        return {
          component: fl,
          componentProps: {
            editor: t,
            tooltip: i("editor.lineheight.tooltip")
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
      setLineHeight: (e) => bl(e),
      unsetLineHeight: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "lineHeight"))
    };
  }
}), Fn = li({
  isOpen: !1
});
function pl() {
  return di(Fn);
}
const $e = {
  setOpen: (e) => {
    Fn.isOpen = e;
  }
}, Vn = li({
  isOpen: !1
});
function wl() {
  return di(Vn);
}
const tt = {
  setOpen: (e) => {
    Vn.isOpen = e;
  }
};
function _l(e) {
  const t = [
    {
      name: "format",
      title: W.t("editor.slash.format"),
      commands: []
    },
    {
      name: "insert",
      title: W.t("editor.slash.insert"),
      commands: []
    }
  ];
  return e.forEach((i) => {
    i.name.toLowerCase() === "heading" && i.options.levels.forEach((n) => {
      t[0].commands.push({
        name: `heading${n}`,
        label: W.t(`editor.heading.h${n}.tooltip`),
        aliases: [`h${n}`, "bt", `bt${n}`],
        iconName: `Heading${n}`,
        action: ({ editor: a, range: o }) => {
          a.chain().focus().deleteRange(o).setHeading({ level: n }).run();
        }
      });
    }), i.name.toLowerCase() === "bulletlist" && t[0].commands.push({
      name: "bulletList",
      label: W.t("editor.bulletlist.tooltip"),
      aliases: ["ul", "yxlb"],
      iconName: "List",
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).toggleBulletList().run();
      }
    }), i.name.toLowerCase() === "orderedlist" && t[0].commands.push({
      name: "numberedList",
      label: W.t("editor.orderedlist.tooltip"),
      aliases: ["ol", "yxlb"],
      iconName: "ListOrdered",
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).toggleOrderedList().run();
      }
    }), i.name.toLowerCase() === "tasklist" && t[0].commands.push({
      name: "taskList",
      label: W.t("editor.tasklist.tooltip"),
      iconName: "ListTodo",
      description: "Task list with todo items",
      aliases: ["todo"],
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).toggleTaskList().run();
      }
    }), i.name.toLowerCase() === "blockquote" && t[0].commands.push({
      name: "blockquote",
      label: W.t("editor.blockquote.tooltip"),
      description: "插入引入格式",
      aliases: ["yr"],
      iconName: "TextQuote",
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).setBlockquote().run();
      }
    }), i.name.toLowerCase() === "codeblock" && t[0].commands.push({
      name: "codeBlock",
      label: W.t("editor.codeblock.tooltip"),
      iconName: "Code2",
      description: "Code block with syntax highlighting",
      shouldBeHidden: (n) => n.isActive("columns"),
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).setCodeBlock().run();
      }
    }), i.name.toLowerCase() === "image" && t[1].commands.push({
      name: "image",
      label: W.t("editor.image.tooltip"),
      iconName: "ImageUp",
      description: "Insert a image",
      aliases: ["image", "tp", "tupian"],
      shouldBeHidden: (n) => n.isActive("columns"),
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).run(), $e.setOpen(!0);
      }
    }), i.name.toLowerCase() === "video" && t[1].commands.push({
      name: "video",
      label: W.t("editor.video.tooltip"),
      iconName: "Video",
      description: "Insert a video",
      aliases: ["video", "sp", "shipin"],
      shouldBeHidden: (n) => n.isActive("columns"),
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).run(), tt.setOpen(!0);
      }
    }), i.name.toLowerCase() === "table" && t[1].commands.push({
      name: "table",
      label: W.t("editor.table.tooltip"),
      iconName: "Table",
      description: "Insert a table",
      aliases: ["table", "bg", "biaoge", "biao"],
      shouldBeHidden: (n) => n.isActive("columns"),
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).insertTable({ rows: 3, cols: 3, withHeaderRow: !1 }).run();
      }
    }), i.name.toLowerCase() === "horizontalrule" && t[1].commands.push({
      name: "horizontalRule",
      label: W.t("editor.horizontalrule.tooltip"),
      iconName: "Minus",
      description: "Insert a horizontal divider",
      aliases: ["hr", "fgx", "fg"],
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).setHorizontalRule().run();
      }
    }), i.name.toLowerCase() === "columns" && t[1].commands.push({
      name: "columns",
      label: W.t("editor.columns.tooltip"),
      iconName: "Columns2",
      description: "Add two column content",
      action: ({ editor: n }) => {
        n.chain().focus().insertColumns({ cols: 2 }).run();
      }
    });
  }), t;
}
function vl(e, t) {
  var C, I;
  const [i, n] = p(0), [a, o] = p(0), c = X(null), { t: s } = j(), h = X([]);
  At(t, () => ({
    onKeyDown: l
  })), E(() => {
    if (!c.current)
      return;
    const v = a * 1e3 + i, w = h.current[v];
    w && w.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [i, a]);
  function l({ event: v }) {
    return v.key === "ArrowUp" ? (d(), !0) : v.key === "ArrowDown" ? (u(), !0) : v.key === "Enter" ? (f(), !0) : !1;
  }
  function d() {
    var y;
    if (e.items.length === 0)
      return !1;
    let v = i - 1, w = a;
    v < 0 && (w = a - 1, v = ((y = e.items[w]) == null ? void 0 : y.commands.length) - 1 || 0), w < 0 && (w = e.items.length - 1, v = e.items[w].commands.length - 1), n(v), o(w);
  }
  function u() {
    if (e.items.length === 0)
      return !1;
    const v = e.items[a].commands;
    let w = i + 1, y = a;
    v.length - 1 < w && (w = 0, y = a + 1), e.items.length - 1 < y && (y = 0), n(w), o(y);
  }
  function f() {
    if (e.items.length === 0 || a === -1 || i === -1)
      return !1;
    g(a, i);
  }
  function g(v, w) {
    const y = e.items[v].commands[w];
    e.command(y);
  }
  function x(v, w) {
    g(v, w);
  }
  function b(v, w, y) {
    h.current[v * 1e3 + w] = y;
  }
  return /* @__PURE__ */ r(
    "div",
    {
      className: "!richtext-bg-white richtext-rounded-lg dark:!richtext-bg-black richtext-shadow-sm !richtext-border !richtext-border-neutral-200 dark:!richtext-border-neutral-800 !richtext-text-black richtext-max-h-[min(80vh,24rem)] richtext-overflow-auto richtext-flex-wrap richtext-mb-8 richtext-p-1",
      ref: c,
      children: (C = e == null ? void 0 : e.items) != null && C.length ? /* @__PURE__ */ r("div", { className: "richtext-grid richtext-grid-cols-1 richtext-gap-0.5 richtext-min-w-48", children: (I = e == null ? void 0 : e.items) == null ? void 0 : I.map((v, w) => /* @__PURE__ */ m(ct, { children: [
        /* @__PURE__ */ r("div", { className: "!richtext-text-neutral-500 richtext-text-[0.65rem] richtext-col-[1/-1] richtext-mx-2 richtext-mt-2 richtext-font-semibold richtext-tracking-wider richtext-select-none richtext-uppercase first:richtext-mt-0.5", children: v.title }),
        v.commands.map((y, N) => /* @__PURE__ */ m(
          "button",
          {
            className: P("richtext-flex richtext-items-center richtext-gap-3 richtext-px-2 richtext-py-1.5 richtext-text-sm !richtext-text-neutral-800 dark:!richtext-text-neutral-200 richtext-text-left richtext-w-full richtext-rounded-sm richtext-outline-none richtext-transition-colors !richtext-bg-transparent hover:!richtext-bg-accent ", {
              "slash-command-active": a === w && i === N
            }),
            ref: (M) => b(w, N, M),
            onClick: () => x(w, N),
            children: [
              y.iconUrl && /* @__PURE__ */ r("img", { className: "richtext-w-6 richtext-h-6", src: y.iconUrl, alt: "" }),
              y.iconName && /* @__PURE__ */ r(F, { name: y.iconName, className: "!richtext-mr-1 !richtext-text-lg" }),
              y.label
            ]
          },
          `command-${N}`
        ))
      ] }, `slash-${v.title}`)) }) : /* @__PURE__ */ r("div", { className: "richtext-p-3", children: /* @__PURE__ */ r("span", { className: "richtext-text-xs richtext-text-gray-800 dark:richtext-text-gray-100", children: s("editor.slash.empty") }) })
    }
  );
}
const yl = Tt(vl), Ne = "slashCommand";
let U;
const Gh = J.create({
  name: Ne,
  priority: 200,
  onCreate() {
    U = si("body", {
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
      an({
        editor: this.editor,
        char: "/",
        allowSpaces: !0,
        startOfLine: !0,
        pluginKey: new Se(Ne),
        allow: ({ state: e, range: t }) => {
          var l, d, u;
          const i = e.doc.resolve(t.from), n = i.depth === 1, a = i.parent.type.name === "paragraph", o = ((l = i.parent.textContent) == null ? void 0 : l.charAt(0)) === "/", c = this.editor.isActive("column"), s = (u = i.parent.textContent) == null ? void 0 : u.slice(
            Math.max(0, (d = i.parent.textContent) == null ? void 0 : d.indexOf("/"))
          ), h = !(s != null && s.endsWith("  "));
          return (n && a && o || c && a && o) && h;
        },
        command: ({ editor: e, range: t, props: i }) => {
          const { view: n } = e;
          i.action({ editor: e, range: t }), n.focus();
        },
        items: ({ query: e, editor: t }) => _l(t.extensionManager.extensions).map((c) => ({
          ...c,
          commands: c.commands.filter((s) => {
            const h = s.label.toLowerCase().trim(), l = e.toLowerCase().trim();
            if (s.aliases) {
              const d = s.aliases.map((g) => g.toLowerCase().trim()), u = h.match(l), f = d.some((g) => g.match(l));
              return u || f;
            }
            return h.match(l);
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
            onStart: (i) => {
              var o;
              e = new ti(yl, {
                props: i,
                editor: i.editor
              });
              const { view: n } = i.editor, a = () => {
                if (!i.clientRect)
                  return i.editor.storage[Ne].rect;
                const c = i.clientRect();
                if (!c)
                  return i.editor.storage[Ne].rect;
                let s = c.y;
                if (c.top + e.element.offsetHeight + 40 > window.innerHeight) {
                  const h = c.top + e.element.offsetHeight - window.innerHeight + 40;
                  s = c.y - h;
                }
                return new DOMRect(c.x, s, c.width, c.height);
              };
              t = () => {
                U == null || U[0].setProps({
                  getReferenceClientRect: a
                });
              }, (o = n.dom.parentElement) == null || o.addEventListener("scroll", t), U == null || U[0].setProps({
                getReferenceClientRect: a,
                appendTo: () => document.body,
                content: e.element
              }), U == null || U[0].show();
            },
            onUpdate(i) {
              var c;
              e.updateProps(i);
              const { view: n } = i.editor, a = () => {
                if (!i.clientRect)
                  return i.editor.storage[Ne].rect;
                const s = i.clientRect();
                return s ? new DOMRect(s.x, s.y, s.width, s.height) : i.editor.storage[Ne].rect;
              }, o = () => {
                U == null || U[0].setProps({
                  getReferenceClientRect: a
                });
              };
              (c = n.dom.parentElement) == null || c.addEventListener("scroll", o), i.editor.storage[Ne].rect = i.clientRect ? a() : {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              }, U == null || U[0].setProps({
                getReferenceClientRect: a
              });
            },
            onKeyDown(i) {
              var n;
              return i.event.key === "Escape" ? (U == null || U[0].hide(), !0) : (U != null && U[0].state.isShown || U == null || U[0].show(), (n = e.ref) == null ? void 0 : n.onKeyDown(i));
            },
            onExit(i) {
              var n;
              if (U == null || U[0].hide(), t) {
                const { view: a } = i.editor;
                (n = a.dom.parentElement) == null || n.removeEventListener("scroll", t);
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
}), bt = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function kl(e) {
  var O, S;
  const [t, i] = p({
    width: Fe,
    height: Fe
  }), [n, a] = p({
    width: 0,
    height: 0
  }), [o] = p([
    bt.TOP_LEFT,
    bt.TOP_RIGHT,
    bt.BOTTOM_LEFT,
    bt.BOTTOM_RIGHT
  ]), [c, s] = p(!1), [h, l] = p({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: d, inline: u } = (O = e == null ? void 0 : e.node) == null ? void 0 : O.attrs, f = B(() => {
    var H;
    const { src: L, alt: T, width: k, height: $ } = (H = e == null ? void 0 : e.node) == null ? void 0 : H.attrs, R = kt(k) ? `${k}px` : k, z = kt($) ? `${$}px` : $;
    return {
      src: L || void 0,
      alt: T || void 0,
      style: {
        width: R || void 0,
        height: z || void 0
      }
    };
  }, [(S = e == null ? void 0 : e.node) == null ? void 0 : S.attrs]), g = B(() => {
    const {
      style: { width: L }
    } = f;
    return { width: L === "100%" ? L : void 0 };
  }, [f]);
  function x(L) {
    a({
      width: L.target.width,
      height: L.target.height
    });
  }
  function b() {
    const { editor: L, getPos: T } = e;
    L.commands.setNodeSelection(T());
  }
  const C = A(
    Ae(() => {
      const { editor: L } = e, { width: T } = getComputedStyle(L.view.dom);
      i((k) => ({
        ...k,
        width: Number.parseInt(T, 10)
      }));
    }, Ve),
    [e == null ? void 0 : e.editor]
  );
  function I(L, T) {
    L.preventDefault(), L.stopPropagation();
    const k = n.width, $ = n.height, R = k / $;
    let z = Number(e.node.attrs.width), H = Number(e.node.attrs.height);
    const q = t.width;
    z && !H ? (z = z > q ? q : z, H = Math.round(z / R)) : H && !z ? (z = Math.round(H * R), z = z > q ? q : z) : !z && !H ? (z = k > q ? q : k, H = Math.round(z / R)) : z = z > q ? q : z, Ue(() => {
      s(!0), l({
        x: L.clientX,
        y: L.clientY,
        w: z,
        h: H,
        dir: T
      });
    });
  }
  const v = A(
    Ae((L) => {
      if (L.preventDefault(), L.stopPropagation(), !c)
        return;
      const { x: T, w: k, dir: $ } = h, R = (L.clientX - T) * (/l/.test($) ? -1 : 1), z = sn(k + R, oi, t.width);
      e.updateAttributes({
        width: z,
        height: null
      });
    }, Ve),
    [c, h, t, e.updateAttributes]
  ), w = A(
    (L) => {
      L.preventDefault(), L.stopPropagation(), c && (Ue(() => {
        l({
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          dir: ""
        }), s(!1);
      }), b());
    },
    [c, b]
  ), y = A(() => {
    document == null || document.addEventListener("mousemove", v, !0), document == null || document.addEventListener("mouseup", w, !0);
  }, [v, w]), N = A(() => {
    document == null || document.removeEventListener("mousemove", v, !0), document == null || document.removeEventListener("mouseup", w, !0);
  }, [v, w]);
  E(() => (c ? y() : N(), () => {
    N();
  }), [c, y, N]);
  const M = B(() => new ResizeObserver(() => C()), [C]);
  return E(() => (M.observe(e.editor.view.dom), () => {
    M.disconnect();
  }), [e.editor.view.dom, M]), /* @__PURE__ */ r(
    ce,
    {
      className: "image-view",
      style: { ...g, textAlign: d, display: u ? "inline" : "block" },
      as: u ? "span" : "div",
      children: /* @__PURE__ */ m(
        "div",
        {
          draggable: "true",
          "data-drag-handle": !0,
          className: `image-view__body ${e != null && e.selected ? "image-view__body--focused" : ""} ${c ? "image-view__body--resizing" : ""}`,
          style: g,
          children: [
            /* @__PURE__ */ r(
              "img",
              {
                src: f.src,
                alt: f.alt,
                style: f.style,
                height: "auto",
                className: "image-view__body__image block",
                onLoad: x,
                onClick: b
              }
            ),
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || c) && /* @__PURE__ */ r("div", { className: "image-resizer", children: o == null ? void 0 : o.map((L) => /* @__PURE__ */ r(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${L}`,
                onMouseDown: (T) => I(T, L)
              },
              `image-dir-${L}`
            )) })
          ]
        }
      )
    }
  );
}
function Cl({ editor: e, imageInline: t, onClose: i }) {
  const { t: n } = j(), [a, o] = p(!1), c = je.useRef(null), [s, h] = je.useState(), [l, d] = je.useState(""), u = X(null), [f, g] = p({
    src: "",
    file: null
  });
  function x(w) {
    if (c.current && w.width && w.height) {
      const y = b(c.current, w);
      d(y);
    }
  }
  function b(w, y) {
    const N = document.createElement("canvas"), M = w.naturalWidth / w.width, O = w.naturalHeight / w.height;
    N.width = y.width * M, N.height = y.height * O;
    const S = N.getContext("2d");
    return S && (S.imageSmoothingEnabled = !1, S.drawImage(
      w,
      y.x * M,
      y.y * O,
      y.width * M,
      y.height * O,
      0,
      0,
      y.width * M,
      y.height * O
    )), N.toDataURL("image/png", 1);
  }
  async function C() {
    var w, y;
    try {
      const N = await bi(l, ((w = f == null ? void 0 : f.file) == null ? void 0 : w.name) || "image.png"), M = (y = e.extensionManager.extensions.find(
        (S) => S.name === "image"
      )) == null ? void 0 : y.options;
      let O = "";
      M.upload ? O = await M.upload(N) : O = URL.createObjectURL(N), e.chain().focus().setImageInline({ src: O, inline: t }).run(), o(!1), g({
        src: "",
        file: null
      }), i();
    } catch (N) {
      console.log("Error cropping image", N);
    }
  }
  function I(w) {
    var y;
    w.preventDefault(), (y = u.current) == null || y.click();
  }
  const v = async (w) => {
    var O;
    const y = (O = w == null ? void 0 : w.target) == null ? void 0 : O.files;
    if (!e || e.isDestroyed || y.length === 0)
      return;
    const N = y[0], M = await _c(N);
    o(!0), g({
      src: M.src,
      file: N
    });
  };
  return /* @__PURE__ */ m(K, { children: [
    /* @__PURE__ */ r(V, { className: "richtext-w-full richtext-mt-1", size: "sm", onClick: I, children: n("editor.image.dialog.tab.uploadCrop") }),
    /* @__PURE__ */ m(He, { open: a, children: [
      /* @__PURE__ */ r(Ee, {}),
      /* @__PURE__ */ m(_e, { children: [
        /* @__PURE__ */ r(ve, { children: n("editor.image.dialog.tab.uploadCrop") }),
        /* @__PURE__ */ r("div", { children: f.src && /* @__PURE__ */ r(
          bo,
          {
            crop: s,
            onChange: (w) => h(w),
            onComplete: (w) => x(w),
            className: "richtext-w-full",
            children: /* @__PURE__ */ r(
              "img",
              {
                ref: c,
                alt: "Crop me",
                src: f.src
              }
            )
          }
        ) }),
        /* @__PURE__ */ m(Xe, { children: [
          /* @__PURE__ */ m(
            V,
            {
              onClick: () => {
                o(!1), g({
                  src: "",
                  file: null
                });
              },
              children: [
                n("editor.imageUpload.cancel"),
                /* @__PURE__ */ r(F, { name: "Trash2", className: "richtext-ml-[4px]" })
              ]
            }
          ),
          /* @__PURE__ */ m(V, { className: "richtext-w-fit", onClick: C, children: [
            n("editor.imageUpload.crop"),
            /* @__PURE__ */ r(F, { name: "Crop", className: "richtext-ml-[4px]" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r(
      "input",
      {
        type: "file",
        accept: "image/*",
        ref: u,
        multiple: !0,
        style: {
          display: "none"
        },
        onChange: v
      }
    )
  ] });
}
function Nl(e) {
  const { t } = j(), i = pl(), [n, a] = p(""), o = X(null), [c, s] = p(!1);
  async function h(u) {
    var C, I;
    const f = (C = u == null ? void 0 : u.target) == null ? void 0 : C.files;
    if (!e.editor || e.editor.isDestroyed || f.length === 0)
      return;
    const g = f[0], x = (I = e.editor.extensionManager.extensions.find(
      (v) => v.name === "image"
    )) == null ? void 0 : I.options;
    let b = "";
    x.upload ? b = await x.upload(g) : b = URL.createObjectURL(g), e.editor.chain().focus().setImageInline({ src: b, inline: c }).run(), $e.setOpen(!1), s(!1);
  }
  function l(u) {
    u.preventDefault(), e.editor.chain().focus().setImageInline({ src: n, inline: c }).run(), $e.setOpen(!1), s(!1);
  }
  function d(u) {
    var f;
    u.preventDefault(), (f = o.current) == null || f.click();
  }
  return /* @__PURE__ */ m(He, { open: i.isOpen, onOpenChange: $e.setOpen, children: [
    /* @__PURE__ */ r(Ee, { asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        icon: e.icon,
        action: () => $e.setOpen(!0),
        tooltip: e.tooltip
      }
    ) }),
    /* @__PURE__ */ m(_e, { children: [
      /* @__PURE__ */ r(ve, { children: t("editor.image.dialog.title") }),
      /* @__PURE__ */ m(gi, { defaultValue: "upload", activationMode: "manual", children: [
        /* @__PURE__ */ m(Ht, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
          /* @__PURE__ */ m(We, { value: "upload", children: [
            t("editor.image.dialog.tab.upload"),
            " "
          ] }),
          /* @__PURE__ */ m(We, { value: "link", children: [
            " ",
            t("editor.image.dialog.tab.url"),
            " "
          ] })
        ] }),
        /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[4px] richtext-my-[10px]", children: [
          /* @__PURE__ */ r(
            yn,
            {
              checked: c,
              onCheckedChange: (u) => {
                s(u);
              }
            }
          ),
          /* @__PURE__ */ r(ie, { children: t("editor.link.dialog.inline") })
        ] }),
        /* @__PURE__ */ m(qe, { value: "upload", children: [
          /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
            /* @__PURE__ */ r(V, { className: "richtext-w-full richtext-mt-1", size: "sm", onClick: d, children: t("editor.image.dialog.tab.upload") }),
            /* @__PURE__ */ r(
              Cl,
              {
                editor: e.editor,
                imageInline: c,
                onClose: () => $e.setOpen(!1)
              }
            )
          ] }),
          /* @__PURE__ */ r(
            "input",
            {
              type: "file",
              accept: "image/*",
              ref: o,
              multiple: !0,
              style: {
                display: "none"
              },
              onChange: h
            }
          )
        ] }),
        /* @__PURE__ */ r(qe, { value: "link", children: /* @__PURE__ */ r("form", { onSubmit: l, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
          /* @__PURE__ */ r(
            te,
            {
              type: "url",
              autoFocus: !0,
              value: n,
              onChange: (u) => a(u.target.value),
              required: !0,
              placeholder: t("editor.image.dialog.placeholder")
            }
          ),
          /* @__PURE__ */ r(V, { type: "submit", children: t("editor.image.dialog.button.apply") })
        ] }) }) })
      ] })
    ] })
  ] });
}
const Zh = ii.extend({
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: () => Promise.reject("Image Upload Function"),
      button: ({
        editor: t,
        extension: i,
        t: n
      }) => {
        var a, o;
        return {
          component: Nl,
          componentProps: {
            action: () => {
            },
            upload: i.options.upload,
            /* If setImage is not available(when Image Component is not imported), the button is disabled */
            disabled: !((o = (a = t.can()).setImage) != null && o.call(a, {})),
            icon: "ImageUp",
            tooltip: n("editor.image.tooltip"),
            editor: t
          }
        };
      }
    };
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      width: {
        default: null,
        parseHTML: (t) => {
          const i = t.style.width || t.getAttribute("width") || null;
          return i ? Number.parseInt(i, 10) : null;
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      },
      inline: {
        default: !1,
        parseHTML: (t) => !!t.getAttribute("inline"),
        renderHTML: (t) => ({
          inline: t.inline
        })
      }
    };
  },
  addNodeView() {
    return xe(kl);
  },
  addCommands() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      setImageInline: (t) => ({ commands: i }) => i.insertContent({
        type: this.name,
        attrs: t
      }),
      updateImage: (t) => ({ commands: i }) => i.updateAttributes(this.name, t),
      setAlignImage: (t) => ({ commands: i }) => i.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { align: t, inline: i } = e, n = t ? `text-align: ${t};` : "";
    return [
      i ? "span" : "div",
      // Parent element
      {
        style: n,
        class: "image"
      },
      [
        "img",
        re(
          // Always render the `height="auto"`
          {
            height: "auto"
          },
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "span[class=image]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), i = t == null ? void 0 : t.getAttribute("width");
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            caption: t == null ? void 0 : t.getAttribute("caption"),
            width: i ? Number.parseInt(i, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null,
            inline: (t == null ? void 0 : t.getAttribute("inline")) || !1
          };
        }
      },
      {
        tag: "div[class=image]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), i = t == null ? void 0 : t.getAttribute("width");
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            caption: t == null ? void 0 : t.getAttribute("caption"),
            width: i ? Number.parseInt(i, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null,
            inline: (t == null ? void 0 : t.getAttribute("inline")) || !1
          };
        }
      }
    ];
  }
});
function Tl(e) {
  const { t } = j(), [i, n] = p(""), a = X(null), o = wl();
  async function c(l) {
    var x, b;
    const d = (x = l == null ? void 0 : l.target) == null ? void 0 : x.files;
    if (!e.editor || e.editor.isDestroyed || d.length === 0)
      return;
    const u = d[0], f = (b = e.editor.extensionManager.extensions.find(
      (C) => C.name === "video"
    )) == null ? void 0 : b.options;
    let g = "";
    f.upload ? g = await f.upload(u) : g = URL.createObjectURL(u), e.editor.chain().setVideo({
      src: g,
      width: "100%"
    }).focus().run(), tt.setOpen(!1);
  }
  function s(l) {
    l.preventDefault(), e.editor.chain().setVideo({
      src: i,
      width: "100%"
    }).focus().run(), tt.setOpen(!1);
  }
  function h(l) {
    var d;
    l.preventDefault(), (d = a.current) == null || d.click();
  }
  return /* @__PURE__ */ m(He, { open: o.isOpen, onOpenChange: tt.setOpen, children: [
    /* @__PURE__ */ r(Ee, { asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        icon: e.icon,
        action: () => tt.setOpen(!0),
        tooltip: e.tooltip
      }
    ) }),
    /* @__PURE__ */ m(_e, { children: [
      /* @__PURE__ */ r(ve, { children: t("editor.video.dialog.title") }),
      /* @__PURE__ */ m(gi, { defaultValue: "upload", activationMode: "manual", children: [
        /* @__PURE__ */ m(Ht, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
          /* @__PURE__ */ m(We, { value: "upload", children: [
            t("editor.video.dialog.tab.upload"),
            " "
          ] }),
          /* @__PURE__ */ m(We, { value: "link", children: [
            " ",
            t("editor.video.dialog.link"),
            " "
          ] })
        ] }),
        /* @__PURE__ */ m(qe, { value: "upload", children: [
          /* @__PURE__ */ r("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: /* @__PURE__ */ r(V, { className: "richtext-w-full richtext-mt-1", size: "sm", onClick: h, children: t("editor.video.dialog.tab.upload") }) }),
          /* @__PURE__ */ r(
            "input",
            {
              type: "file",
              accept: "video/*",
              ref: a,
              multiple: !0,
              style: {
                display: "none"
              },
              onChange: c
            }
          )
        ] }),
        /* @__PURE__ */ r(qe, { value: "link", children: /* @__PURE__ */ r("form", { onSubmit: s, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
          /* @__PURE__ */ r(
            te,
            {
              type: "url",
              autoFocus: !0,
              value: i,
              onChange: (l) => n(l.target.value),
              required: !0,
              placeholder: t("editor.video.dialog.placeholder")
            }
          ),
          /* @__PURE__ */ r(V, { type: "submit", children: t("editor.video.dialog.button.apply") })
        ] }) }) })
      ] })
    ] })
  ] });
}
function Al(e) {
  return e = e.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/"), e = e.replace("https://vimeo.com/", "https://player.vimeo.com/video/"), /^https?:\/\/www.bilibili.com\/video\/.*/i.test(e) && (e = e.replace(/\?.*$/, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), e.includes("drive.google.com") && (e = e.replace("/view", "/preview")), e;
}
const Jh = fe.create({
  name: "video",
  group: "block",
  atom: !0,
  draggable: !0,
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      allowFullscreen: !0,
      upload: void 0,
      frameborder: !1,
      width: Ft["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper",
        style: "display: flex;justify-content: center;"
      },
      button: ({ editor: e, t }) => {
        var i, n;
        return {
          component: Tl,
          componentProps: {
            action: () => {
            },
            isActive: () => e.isActive("video") || !1,
            /* If setVideo is not available(when Video Component is not imported), the button is disabled */
            disabled: !((n = (i = e.can()).setVideo) != null && n.call(i, {})),
            icon: "Video",
            tooltip: t("editor.video.tooltip"),
            editor: e
          }
        };
      }
    };
  },
  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src: e }) => ({
          src: e ? Al(e) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: e }) => ({
          width: Go(e)
        })
      },
      frameborder: {
        default: this.options.frameborder ? 1 : 0,
        parseHTML: () => this.options.frameborder ? 1 : 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-video] iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    const { width: t = "100%" } = e ?? {}, i = {
      ...e,
      width: "100%",
      height: "100%"
    }, n = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${t};`, a = `flex: 1;padding-bottom: ${9 / 16 * 100}%;`, s = ["div", { style: n }, ["div", { style: a }], ["iframe", i]];
    return ["div", {
      ...this.options.HTMLAttributes,
      "data-video": ""
    }, s];
  },
  addCommands() {
    return {
      setVideo: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      }),
      updateVideo: (e) => ({ commands: t }) => t.updateAttributes(this.name, e)
    };
  }
});
function Ll(e, t, i) {
  if (!e.doc)
    return e;
  const n = e.doc.nodeAt(t);
  if (!n || i === n.attrs.backgroundColor)
    return e;
  const a = {
    ...n.attrs,
    backgroundColor: i
  };
  return e.setNodeMarkup(t, n.type, a, n.marks);
}
function Sl(e, t, i) {
  const { doc: n, selection: a } = e;
  return !n || !a || !(a instanceof oo) || a.forEachCell((o, c) => {
    e = Ll(e, c, i);
  }), e;
}
function Fi(e, t) {
  return ({ tr: i, state: n, dispatch: a }) => {
    const { selection: o } = n;
    return i = i.setSelection(o), i = Sl(i, t, e), i.docChanged ? (a == null || a(i), !0) : !1;
  };
}
const Ml = J.create({
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
      setTableCellBackground: (e) => Fi(e, this.options),
      unsetTableCellBackground: () => Fi("", this.options)
    };
  }
}), Il = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, zl = /CrOS/, Hl = /android|ipad|playbook|silk/i;
function Vi(e = {}) {
  let t = e.ua || typeof navigator < "u" && navigator.userAgent;
  return t && typeof t == "object" && t.headers && typeof t.headers["user-agent"] == "string" && (t = t.headers["user-agent"]), typeof t != "string" ? !1 : !!(Il.test(t) && !zl.test(t) || e.tablet && Hl.test(t) || e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && t.includes("Macintosh") && t.includes("Safari"));
}
const Ui = (e) => Array.from({ length: e }).map((t, i) => i + 1);
function El(e) {
  var d;
  const [t, i] = p(!0), [n, a] = p({
    rows: Vi() ? ft : gt,
    cols: Vi() ? ft : gt
  }), [o, c] = p({
    rows: xt,
    cols: xt
  });
  function s(u, f) {
    u === n.rows && a((g) => ({
      ...g,
      rows: Math.min(u + 1, ft)
    })), f === n.cols && a((g) => ({
      ...g,
      cols: Math.min(f + 1, ft)
    })), c({
      rows: u,
      cols: f
    });
  }
  function h(u, f) {
    e == null || e.createTable({ rows: u, cols: f, withHeaderRow: t }), l();
  }
  function l() {
    i(!1), a({
      rows: gt,
      cols: gt
    }), c({
      rows: xt,
      cols: xt
    });
  }
  return /* @__PURE__ */ m(de, { modal: !0, children: [
    /* @__PURE__ */ r(he, { asChild: !0, children: e == null ? void 0 : e.children }),
    /* @__PURE__ */ r(ae, { className: "richtext-w-full !richtext-p-2", align: "start", side: "bottom", children: /* @__PURE__ */ m("div", { className: "richtext-p-0 table-grid-size-editor", children: [
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-flex-col richtext-flex-wrap richtext-justify-between richtext-gap-1", children: (d = Ui(n == null ? void 0 : n.rows)) == null ? void 0 : d.map((u) => {
        var f;
        return /* @__PURE__ */ r("div", { className: "richtext-flex richtext-gap-1", children: (f = Ui(n == null ? void 0 : n.cols)) == null ? void 0 : f.map((g) => /* @__PURE__ */ r(
          "div",
          {
            className: `richtext-cursor-pointer richtext-border-border ${g <= o.cols && u <= o.rows && "!richtext-bg-foreground tableCellActive"}`,
            onMouseOver: () => s(u, g),
            onMouseDown: () => h(u, g),
            children: /* @__PURE__ */ r("div", { className: "richtext-w-4 richtext-h-4 richtext-p-1 !richtext-border richtext-rounded-[2px] richtext-box-border richtext-border-solid !richtext-border-border" })
          },
          `c-${g}`
        )) }, `r-${u}`);
      }) }),
      /* @__PURE__ */ m("div", { className: "richtext-mt-2 richtext-text-sm richtext-text-center richtext-text-zinc-600", children: [
        o.rows,
        " ",
        "x",
        o.cols
      ] })
    ] }) })
  ] });
}
function Rl(e) {
  function t(i) {
    e.disabled || e.editor.chain().focus().insertTable({ ...i, withHeaderRow: !1 }).run();
  }
  return /* @__PURE__ */ r(El, { createTable: t, children: /* @__PURE__ */ r(
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
const Xh = Ga.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: t, t: i }) => ({
        component: Rl,
        componentProps: {
          disabled: t.isActive("table") || !1,
          icon: "Table",
          tooltip: i("editor.table.tooltip"),
          editor: t
        }
      })
    };
  },
  addExtensions() {
    return [
      Za.configure(this.options.tableRow),
      Ja.configure(this.options.tableHeader),
      Xa.configure(this.options.tableCell),
      Ml.configure(this.options.tableCellBackground)
    ];
  }
}), Yh = J.create({
  name: "painter",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => {
            t.commands.setPainter(t == null ? void 0 : t.state.selection.$head.marks());
          },
          icon: "PaintRoller",
          tooltip: i("editor.format")
        }
      })
    };
  },
  addCommands() {
    return {
      setPainter: (e) => ({
        view: {
          dispatch: t,
          state: { tr: i },
          dom: n
        }
      }) => {
        const c = `url("data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M9 22v-6H4V7q0-1.65 1.175-2.825T8 3h12v13h-5v6zM6 10h12V5h-1v4h-2V5h-1v2h-2V5H8q-.825 0-1.412.588T6 7zm0 4h12v-2H6zm0 0v-2z"/></svg>')}"), auto`;
        return n.style.cursor = c, t(i.setMeta("painterAction", { type: "start", marks: e })), !0;
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      new Ge({
        key: new Se("format-painter"),
        state: {
          init: () => [],
          apply: (e, t) => {
            const i = e.getMeta("painterAction");
            return i && i.type === "start" ? t = i.marks : i && i.type === "end" && (t = []), t;
          }
        },
        props: {
          handleDOMEvents: {
            mousedown(e, t) {
              const i = this.getState(e.state);
              if (!i || i.length === 0)
                return e.dom.style.cursor = "", !1;
              const n = () => {
                document.removeEventListener("mouseup", n);
                let {
                  dispatch: a,
                  state: { tr: o, selection: c },
                  dom: s
                } = e;
                s.style.cursor = "", o = o.removeMark(c.from, c.to);
                for (const h of i)
                  h.type.name !== "link" && (o = o.addMark(c.from, c.to, h));
                a(o.setMeta("painterAction", { type: "end" }));
              };
              return document.addEventListener("mouseup", n), !0;
            }
          }
        }
      })
    ];
  }
});
function Ol({ editor: e, ...t }) {
  const { t: i } = j(), [n, a] = p(-1), [o, c] = p([]), [s, h] = p(""), [l, d] = p(""), [u, f] = p(!1), [g, x] = p(!1);
  return E(() => {
    u || (h(""), d(""), a(-1), c([]), e.commands.setSearchTerm(""), e.commands.setReplaceTerm(""));
  }, [e, u]), E(() => {
    u && e && e.commands && e.commands.setSearchTerm && e.commands.setSearchTerm(s);
  }, [u, s, e]), E(() => {
    u && e && e.commands && e.commands.setReplaceTerm && e.commands.setReplaceTerm(l);
  }, [u, l, e]), E(() => {
    if (!e)
      return;
    const b = e.extensionManager.extensions.find((I) => I.name === jl.name);
    if (!b)
      return;
    const C = () => {
      if (!u)
        return;
      const I = b ? b.storage.currentIndex : -1, v = b ? b.storage.results : [];
      a((w) => w !== I ? I : w), c((w) => ni(w, v) ? w : v);
    };
    return window.addEventListener(Yt, C), () => {
      b && window.removeEventListener(Yt, C);
    };
  }, [u, e]), /* @__PURE__ */ m(
    de,
    {
      open: u,
      onOpenChange: f,
      children: [
        /* @__PURE__ */ r(
          he,
          {
            disabled: t == null ? void 0 : t.disabled,
            asChild: !0,
            children: /* @__PURE__ */ r(
              _,
              {
                tooltip: t == null ? void 0 : t.tooltip,
                isActive: t == null ? void 0 : t.isActive,
                disabled: t == null ? void 0 : t.disabled,
                children: /* @__PURE__ */ r(F, { name: t == null ? void 0 : t.icon })
              }
            )
          }
        ),
        /* @__PURE__ */ m(
          ae,
          {
            hideWhenDetached: !0,
            className: "richtext-w-full",
            align: "start",
            side: "bottom",
            children: [
              /* @__PURE__ */ m("div", { className: "richtext-mb-[6px] richtext-flex richtext-items-center richtext-justify-between", children: [
                /* @__PURE__ */ r(ie, { children: i("editor.search.dialog.text") }),
                /* @__PURE__ */ r("span", { className: "richtext-font-semibold", children: o.length ? `${n + 1}/${o.length}` : "0/0" })
              ] }),
              /* @__PURE__ */ m("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5 richtext-mb-[10px]", children: [
                /* @__PURE__ */ r(
                  te,
                  {
                    type: "text",
                    required: !0,
                    className: "richtext-w-full",
                    placeholder: "Text",
                    autoFocus: !0,
                    value: s,
                    onChange: (b) => h(b.target.value)
                  }
                ),
                /* @__PURE__ */ r(V, { disabled: !o.length, className: "richtext-flex-1", onClick: e.commands.goToPrevSearchResult, children: /* @__PURE__ */ r(F, { name: "ChevronUp" }) }),
                /* @__PURE__ */ r(V, { disabled: !o.length, className: "richtext-flex-1", onClick: e.commands.goToNextSearchResult, children: /* @__PURE__ */ r(F, { name: "ChevronDown" }) })
              ] }),
              /* @__PURE__ */ r(ie, { className: "richtext-mb-[6px]", children: i("editor.replace.dialog.text") }),
              /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5 richtext-mb-[5px]", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-items-center richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
                te,
                {
                  type: "text",
                  required: !0,
                  className: "richtext-w-80",
                  placeholder: "Text",
                  value: l,
                  onChange: (b) => d(b.target.value)
                }
              ) }) }),
              /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-space-x-2 richtext-mb-[10px]", children: [
                /* @__PURE__ */ r(
                  fi,
                  {
                    checked: g,
                    onCheckedChange: (b) => {
                      x(b), e.commands.setCaseSensitive(b);
                    }
                  }
                ),
                /* @__PURE__ */ r(ie, { children: i("editor.replace.caseSensitive") })
              ] }),
              /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                /* @__PURE__ */ r(V, { disabled: !o.length, className: "richtext-flex-1", onClick: e.commands.replace, children: i("editor.replace.dialog.text") }),
                /* @__PURE__ */ r(V, { disabled: !o.length, className: "richtext-flex-1", onClick: e.commands.replaceAll, children: i("editor.replaceAll.dialog.text") })
              ] })
            ]
          }
        )
      ]
    }
  );
}
const et = (e, t) => t(e.tr);
function Pl(e, t, i) {
  return RegExp(t ? e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") : e, i ? "gu" : "gui");
}
function Bl(e, t, i) {
  const n = [];
  let a = [];
  const o = [];
  let c = 0;
  if (!t)
    return { decorationsToReturn: [], results: [] };
  e == null || e.descendants((s, h) => {
    s.isText ? a[c] ? a[c] = {
      text: a[c].text + s.text,
      pos: a[c].pos
    } : a[c] = {
      text: `${s.text}`,
      pos: h
    } : c += 1;
  }), a = a.filter(Boolean);
  for (let s = 0; s < a.length; s += 1) {
    const { text: h, pos: l } = a[s], d = [...h.matchAll(t)];
    for (let u = 0; u < d.length; u += 1) {
      const f = d[u];
      if (f[0] === "")
        break;
      f.index !== void 0 && o.push({
        from: l + f.index,
        to: l + f.index + f[0].length
      });
    }
  }
  for (let s = 0; s < o.length; s += 1) {
    const h = o[s];
    n.push(rt.inline(h.from, h.to, { class: i }));
  }
  return {
    decorationsToReturn: n,
    results: o
  };
}
function Wi(e, t, { state: i, dispatch: n }) {
  if (!t[0])
    return;
  const { from: o, to: c } = t[0];
  n && n(i.tr.insertText(e, o, c));
}
function $l(e, t, i, n) {
  const a = t + 1;
  if (!n[a])
    return null;
  const { from: o, to: c } = n[t], s = c - o - e.length + i, { from: h, to: l } = n[a];
  return n[a] = {
    to: l - s,
    from: h - s
  }, [s, n];
}
function Dl(e, t, { tr: i, dispatch: n }) {
  let a = 0, o = t.slice();
  if (!o.length)
    return !1;
  for (let c = 0; c < o.length; c += 1) {
    const { from: s, to: h } = o[c];
    i.insertText(e, s, h);
    const l = $l(e, c, a, o);
    l && (a = l[0], o = l[1]);
  }
  return n(i), !0;
}
function qi({ view: e, tr: t, searchResults: i, searchResultCurrentClass: n, gotoIndex: a }) {
  const o = i[a];
  if (o) {
    const c = t.setMeta("directDecoration", {
      fromPos: o.from,
      toPos: o.to,
      attrs: { class: n }
    });
    return e == null || e.dispatch(c), setTimeout(() => {
      const s = window.document.querySelector(`.${n}`);
      s && hi(s, { behavior: "smooth", scrollMode: "if-needed" });
    }, 0), !0;
  }
  return !1;
}
const Yt = "ON_SEARCH_RESULTS", Re = new CustomEvent(Yt), jl = J.create({
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
      button: ({ editor: t, t: i }) => ({
        component: Ol,
        componentProps: {
          action: () => {
          },
          icon: "SearchAndReplace",
          tooltip: i("editor.searchAndReplace.tooltip"),
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
      setSearchTerm: (e) => ({ state: t, dispatch: i }) => (this.options.searchTerm = e, this.storage.results = [], this.storage.currentIndex = 0, window.dispatchEvent(Re), et(t, i), !1),
      setReplaceTerm: (e) => ({ state: t, dispatch: i }) => (this.options.replaceTerm = e, et(t, i), !1),
      setCaseSensitive: (e) => ({ state: t, dispatch: i }) => (this.options.caseSensitive = e, et(t, i), !1),
      replace: () => ({ state: e, dispatch: t }) => {
        const { replaceTerm: i } = this.options, { currentIndex: n, results: a } = this.storage, o = a[n];
        return o ? (Wi(i, [o], { state: e, dispatch: t }), this.storage.results.splice(n, 1)) : (Wi(i, a, { state: e, dispatch: t }), this.storage.results.shift()), window.dispatchEvent(Re), et(e, t), !1;
      },
      replaceAll: () => ({ state: e, tr: t, dispatch: i }) => {
        const { replaceTerm: n } = this.options, { results: a } = this.storage;
        return Dl(n, a, { tr: t, dispatch: i }), this.storage.currentIndex = -1, this.storage.results = [], window.dispatchEvent(Re), et(e, i), !1;
      },
      goToPrevSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: i } = this.options, { currentIndex: n, results: a } = this.storage, o = (n + a.length - 1) % a.length;
        return this.storage.currentIndex = o, window.dispatchEvent(Re), qi({
          view: e,
          tr: t,
          searchResults: a,
          searchResultCurrentClass: i,
          gotoIndex: o
        });
      },
      goToNextSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: i } = this.options, { currentIndex: n, results: a } = this.storage, o = (n + 1) % a.length;
        return this.storage.currentIndex = o, this.options.onChange && this.options.onChange(), window.dispatchEvent(Re), qi({
          view: e,
          tr: t,
          searchResults: a,
          searchResultCurrentClass: i,
          gotoIndex: o
        });
      }
    };
  },
  addProseMirrorPlugins() {
    const e = this;
    return [
      new Ge({
        key: new Se("search"),
        state: {
          init() {
            return nt.empty;
          },
          apply(t) {
            const { doc: i, docChanged: n } = t, { searchTerm: a, searchResultClass: o, searchResultCurrentClass: c, disableRegex: s, caseSensitive: h } = e.options;
            if (n || a) {
              const { decorationsToReturn: l, results: d } = Bl(
                i,
                Pl(a, s, h),
                o
              );
              if (e.storage.results = d, e.storage.currentIndex > d.length - 1 && (e.storage.currentIndex = 0), window.dispatchEvent(Re), t.getMeta("directDecoration")) {
                const { fromPos: u, toPos: f, attrs: g } = t.getMeta("directDecoration");
                l.push(rt.inline(u, f, g));
              } else
                d.length && (l[0] = rt.inline(d[0].from, d[0].to, {
                  class: c
                }));
              return nt.create(i, l);
            }
            return nt.empty;
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
}), Ke = {
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
Object.keys(Ke).reduce((e, t) => {
  const i = Ke[t];
  return e[i] = t, e;
}, {});
const Fl = Object.keys(Ke).map((e) => e);
Object.keys(Ke).map((e) => Ke[e]);
function Vl(e) {
  return Fl.filter((t) => t.startsWith(e)).map((t) => ({
    name: t,
    emoji: Ke[t]
  }));
}
const Un = Tt((e, t) => {
  const i = X(), [n, a] = p(0), { t: o } = j(), c = (d) => {
    const u = e.items[d];
    u && e.command(u);
  }, s = () => {
    a((n + e.items.length - 1) % e.items.length);
  }, h = () => {
    a((n + 1) % e.items.length);
  }, l = () => {
    c(n);
  };
  return E(() => a(0), [e.items]), E(() => {
    if (Number.isNaN(n + 1))
      return;
    const d = i.current.querySelector(`span:nth-of-type(${n + 1})`);
    d && hi(d, { behavior: "smooth", scrollMode: "if-needed" });
  }, [n]), At(t, () => ({
    onKeyDown: ({ event: d }) => d.key === "ArrowUp" ? (s(), !0) : d.key === "ArrowDown" ? (h(), !0) : d.key === "Enter" ? (l(), !0) : !1
  })), /* @__PURE__ */ r("div", { className: "richtext-w-[200px] richtext-max-h-[320px] richtext-overflow-x-hidden richtext-overflow-y-auto richtext-rounded-sm !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: /* @__PURE__ */ r("div", { ref: i, children: e.items.length ? e.items.map((d, u) => /* @__PURE__ */ m(
    "span",
    {
      className: ee(" richtext-flex richtext-relative  richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors focus:richtext-bg-accent focus:richtext-text-accent-foreground  hover:richtext-bg-accent", u === n ? "bg-accent" : ""),
      onClick: () => c(u),
      children: [
        d.fallbackImage ? /* @__PURE__ */ r("img", { src: d.fallbackImage, className: "richtext-w-[1em] richtext-h-[1em]" }) : d.emoji,
        ":",
        d.name,
        ":"
      ]
    },
    `emoji-list-code-${u}`
  )) : /* @__PURE__ */ r("div", { className: "richtext-flex richtext-relative  richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors", children: /* @__PURE__ */ r("span", { children: o("no_result_found") }) }) }) });
});
Un.displayName = "EmojiList";
const Ul = [
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
], Wl = [
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
], ql = [
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
], Kl = [
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
], Gl = [
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
], Zl = [
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
], Jl = [
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
], Xl = [
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
function Yl() {
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
function Ql() {
  return /* @__PURE__ */ m(
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
function ed() {
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
function td() {
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
function id() {
  return /* @__PURE__ */ m(
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
function nd() {
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
function rd() {
  return /* @__PURE__ */ m(
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
function ad(e, t = null) {
  if (typeof window > "u")
    throw new Error();
  const i = localStorage.getItem(e);
  if (!i)
    return t;
  try {
    return JSON.parse(i);
  } catch {
    return i;
  }
}
function od(e, t) {
  window.localStorage.setItem(e, `${t}`);
}
class Dt {
  constructor(t, i) {
    ue(this, "key");
    ue(this, "value");
    ue(this, "prev");
    ue(this, "next");
    this.key = t, this.value = i, this.prev = null, this.next = null;
  }
}
class cd {
  constructor(t) {
    ue(this, "capacity");
    ue(this, "usedCapacity");
    ue(this, "head");
    ue(this, "tail");
    ue(this, "store");
    this.capacity = t || 20, this.usedCapacity = 0, this.store = {}, this.head = new Dt("fakeHeadNode", "fakeHeadNode"), this.tail = new Dt("fakeTailNode", "fakeTailNode"), this.head.next = this.tail, this.tail.prev = this.head;
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
      const i = this.store[t];
      return this.moveToHead(i), i.value;
    }
    return -1;
  }
  put(t, i) {
    if (t in this.store) {
      const n = this.store[t];
      n.value = i, this.moveToHead(n);
    } else {
      const n = new Dt(t, i);
      if (this.addToHead(n), this.store[t] = n, this.usedCapacity += 1, this.usedCapacity > this.capacity) {
        const a = this.removeTail();
        delete this.store[a.key], this.usedCapacity -= 1;
      }
    }
  }
  keys() {
    const t = [];
    let i = this.head;
    for (; i; )
      t.push(i.key), i = i.next;
    return t.slice(1, -1);
  }
  values() {
    const t = [];
    let i = this.head;
    for (; i; )
      t.push(i.value), i = i.next;
    return t.slice(1, -1);
  }
  toJSON() {
    return this.store;
  }
}
function sd(e, t) {
  const i = new cd(t);
  return {
    syncFromStorage() {
      (ad(e) || []).slice().reverse().forEach((o) => {
        i.put(o, o);
      });
    },
    syncToStorage() {
      od(e, Qo(i.keys()));
    },
    put(a) {
      i.put(a, a), this.syncToStorage();
    },
    get(a) {
      return a ? i.get(a) : i.keys();
    }
  };
}
const Oe = sd("EMOJI_PICKER", 20), Ki = [
  {
    title: "Smileys & People",
    data: Ul,
    icon: aa
  },
  {
    title: "Animals & Nature",
    data: Jl,
    icon: Ql
  },
  {
    title: "Food & Drink",
    data: Xl,
    icon: td
  },
  {
    title: "Activity",
    data: Kl,
    icon: Yl
  },
  {
    title: "Travel & Places",
    data: Gl,
    icon: rd
  },
  {
    title: "Object",
    data: ql,
    icon: id
  },
  {
    title: "Symbol",
    data: Wl,
    icon: nd
  },
  {
    title: "Flags",
    data: Zl,
    icon: ed
  }
], ld = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣"];
function dd({ onSelectEmoji: e, children: t }) {
  const [i, n] = p([]), { t: a } = j(), o = B(
    () => i.length ? [{ title: "Frequently used", icon: ra, data: i }, ...Ki] : Ki,
    [i]
  ), c = A(
    (s) => {
      Oe.put(s), n(Oe.get()), e && e(s);
    },
    [e]
  );
  return E(() => {
    Oe.syncFromStorage();
    const s = Oe.get();
    s != null && s.length || ld.forEach((l) => {
      Oe.put(l);
    });
    const h = Oe.get();
    n(h);
  }, []), /* @__PURE__ */ m(de, { modal: !0, children: [
    /* @__PURE__ */ r(he, { asChild: !0, children: t }),
    /* @__PURE__ */ r(ae, { hideWhenDetached: !0, className: "richtext-w-full richtext-h-full richtext-p-2", align: "start", side: "bottom", children: /* @__PURE__ */ m(gi, { defaultValue: "Frequently used", children: [
      /* @__PURE__ */ r(Ht, { className: "richtext-flex richtext-items-center richtext-gap-[4px]", children: o.map((s) => /* @__PURE__ */ r(
        We,
        {
          value: s.title,
          className: "!richtext-p-[6px] richtext-bg-accent hover:richtext-text-accent-foreground",
          children: s.icon && /* @__PURE__ */ r(s.icon, { size: 16 })
        },
        `emoji-picker-title-${s.title}`
      )) }),
      o.map((s) => /* @__PURE__ */ m(
        qe,
        {
          value: s.title,
          children: [
            /* @__PURE__ */ r("p", { className: "richtext-mb-[6px] richtext-font-semibold", children: a(s.title) }),
            /* @__PURE__ */ r("div", { className: "richtext-max-h-[280px] richtext-overflow-y-auto", children: /* @__PURE__ */ r("div", { className: "richtext-grid richtext-grid-cols-8 richtext-gap-1 ", children: (s.data || []).map((h) => /* @__PURE__ */ r(
              "div",
              {
                onClick: () => c(h),
                className: "richtext-text-center richtext-cursor-pointer",
                children: h
              },
              `emoji-picker-${h}`
            )) }) })
          ]
        },
        `emoji-picker-content-${s.title}`
      ))
    ] }) })
  ] });
}
function hd({ editor: e, icon: t, ...i }) {
  const n = A(
    (a) => {
      const { selection: o } = e.state, { $anchor: c } = o;
      return e.chain().insertContentAt(c.pos, a).run();
    },
    [e]
  );
  return /* @__PURE__ */ r(dd, { onSelectEmoji: n, children: /* @__PURE__ */ r(
    _,
    {
      tooltip: i == null ? void 0 : i.tooltip,
      icon: t
    }
  ) });
}
const ud = 200, md = new Se("emoji"), Qh = fe.create({
  name: "emoji",
  content: "text*",
  priority: ud,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {},
      suggestion: {
        char: ":",
        pluginKey: md,
        command: ({ editor: t, range: i, props: n }) => {
          t.chain().focus().insertContentAt(i, `${n.emoji} `).run();
        }
      },
      button: ({ editor: t, t: i }) => ({
        component: hd,
        componentProps: {
          editor: t,
          action: () => {
          },
          isActive: () => !1,
          disabled: !1,
          icon: "EmojiIcon",
          tooltip: i("editor.emoji.tooltip")
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
      an({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
}).configure({
  suggestion: {
    items: ({ query: e }) => Vl(e),
    render: () => {
      let e, t, i;
      return {
        onStart: (n) => {
          i = n.editor.isEditable, i && (e = new ti(Un, {
            props: n,
            editor: n.editor
          }), t = si("body", {
            getReferenceClientRect: n.clientRect,
            appendTo: () => document.body,
            content: e.element,
            showOnCreate: !0,
            interactive: !0,
            trigger: "manual",
            placement: "bottom-start"
          }));
        },
        onUpdate(n) {
          i && (e.updateProps(n), t[0].setProps({
            getReferenceClientRect: n.clientRect
          }));
        },
        onKeyDown(n) {
          var a;
          if (i)
            return n.event.key === "Escape" ? (t[0].hide(), !0) : (a = e.ref) == null ? void 0 : a.onKeyDown(n);
        },
        onExit() {
          i && (t[0].destroy(), e.destroy());
        }
      };
    }
  }
});
function fd({ editor: e, ...t }) {
  const { t: i } = j(), n = dt(e, De.name, {
    text: "",
    defaultShowPicker: !1
  }), { text: a, defaultShowPicker: o } = n, [c, s] = p(""), h = A(() => {
    e.chain().focus().setKatex({ text: c }).run(), s("");
  }, [e, c]);
  E(() => {
    o && e.chain().updateAttributes(De.name, { defaultShowPicker: !1 }).focus().run();
  }, [e, o]);
  const l = B(() => {
    try {
      return ui.renderToString(`${c}`);
    } catch {
      return c;
    }
  }, [c]), d = B(
    () => `${c}`.trim() ? /* @__PURE__ */ r("span", { contentEditable: !1, dangerouslySetInnerHTML: { __html: l || "" } }) : null,
    [c, l]
  );
  return /* @__PURE__ */ m(de, { modal: !0, children: [
    /* @__PURE__ */ r(he, { asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        tooltip: t == null ? void 0 : t.tooltip,
        icon: t == null ? void 0 : t.icon
      }
    ) }),
    /* @__PURE__ */ m(ae, { hideWhenDetached: !0, className: "richtext-w-full richtext-h-full richtext-p-2", align: "start", side: "bottom", children: [
      /* @__PURE__ */ r(ie, { className: "richtext-mb-[6px]", children: i("editor.formula.dialog.text") }),
      /* @__PURE__ */ r("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5 richtext-mb-[16px]", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm", children: /* @__PURE__ */ r(
        ht,
        {
          value: c,
          onChange: (u) => s(u.target.value),
          autoFocus: !0,
          required: !0,
          rows: 3,
          defaultValue: a,
          className: "richtext-w-full",
          placeholder: "Text"
        }
      ) }) }),
      d && /* @__PURE__ */ r("div", { className: "richtext-my-[10px] richtext-p-[10px] richtext-rounded-[6px] !richtext-border-[1px] richtext-max-w-[286px] richtext-whitespace-nowrap richtext-overflow-auto", children: d }),
      /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-justify-between richtext-gap-[6px]", children: [
        /* @__PURE__ */ r(V, { onClick: h, className: "richtext-flex-1", children: "Submit" }),
        /* @__PURE__ */ r("a", { href: "https://katex.org/docs/supported", target: "_blank", rel: "noreferrer noopener", children: /* @__PURE__ */ r(Xi, { size: 16 }) })
      ] })
    ] })
  ] });
}
function gd(e, t = 1) {
  let i = 0, n = 0, a = 0;
  if (e.startsWith("rgb")) {
    const o = e.replace(/\s/g, "").match(/rgb\((.*)\)$/)[1].split(",");
    i = +o[0], n = +o[1], a = +o[2];
  } else if (e.startsWith("#")) {
    let o = e.replace("#", "");
    o.length === 3 && (o = `${o[0]}${o[0]}${o[1]}${o[1]}${o[2]}${o[2]}`), i = Number.parseInt(o.substring(0, 2), 16), n = Number.parseInt(o.substring(2, 4), 16), a = Number.parseInt(o.substring(4, 6), 16);
  } else
    return e;
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${i},${n},${a},${t})`;
}
function xd({ node: e }) {
  const t = Mc(), { text: i } = e.attrs, n = B(() => {
    const c = "rgb(254, 242, 237)";
    return t === "dark" ? gd(c, 0.75) : c;
  }, [t]), a = B(() => {
    try {
      return ui.renderToString(`${i}`);
    } catch {
      return i;
    }
  }, [i]), o = B(
    () => i.trim() ? /* @__PURE__ */ r("span", { contentEditable: !1, dangerouslySetInnerHTML: { __html: a } }) : /* @__PURE__ */ r("span", { contentEditable: !1, children: "Not enter a formula" }),
    [i, a]
  );
  return /* @__PURE__ */ r(
    ce,
    {
      style: {
        display: "inline-block",
        backgroundColor: n
      },
      as: "span",
      children: o
    }
  );
}
function bd(e) {
  return (t) => t.getAttribute(e);
}
const De = fe.create({
  name: "katex",
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    return {
      HTMLAttributes: {
        class: "katex"
      },
      button: ({ editor: e, t }) => ({
        component: fd,
        componentProps: {
          editor: e,
          action: () => {
          },
          isActive: () => !1,
          disabled: !1,
          icon: "KatexIcon",
          tooltip: t("editor.katex.tooltip")
        }
      })
    };
  },
  addAttributes() {
    return {
      text: {
        default: "",
        parseHTML: bd("text")
      },
      defaultShowPicker: {
        default: !1
      }
    };
  },
  parseHTML() {
    return [{ tag: "span.katex" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["span", re(this.options && this.options.HTMLAttributes || {}, e)];
  },
  addCommands() {
    return {
      setKatex: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      })
    };
  },
  addInputRules() {
    return [
      ei({
        find: /^\$katex\$$/,
        type: this.type,
        getAttributes: () => ({ defaultShowPicker: !0 })
      })
    ];
  },
  addNodeView() {
    return xe(xd);
  }
});
function pd(e) {
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
  const i = t.contentWindow, n = t.contentDocument || t.contentWindow && t.contentWindow.document, a = document.createElement("link");
  a.rel = "stylesheet", a.href = "https://cdn.jsdelivr.net/npm/reactjs-tiptap-editor@latest/lib/style.css", n.head.appendChild(a), n && (n.open(), n.write(e), n.close()), i && (t.onload = function() {
    try {
      setTimeout(() => {
        i.focus();
        try {
          i.document.execCommand("print", !1) || i.print();
        } catch {
          i.print();
        }
        i.close();
      }, 10);
    } catch (o) {
      console.error(o);
    }
    setTimeout(() => {
      document.body.removeChild(t);
    }, 100);
  });
}
function wd(e) {
  const t = e.getHTML();
  return t ? (pd(t), !0) : !1;
}
const eu = J.create({
  name: "exportPdf",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => {
            wd(t);
          },
          icon: "ExportPdf",
          tooltip: i("editor.exportPdf.tooltip"),
          isActive: () => !1,
          disabled: !1
        }
      })
    };
  }
});
function _d(e, t) {
  const i = atob(e.split(",")[1]), n = Array.from({ length: i.length });
  for (let o = 0; o < i.length; o++)
    n[o] = i.charCodeAt(o);
  const a = new Uint8Array(n);
  return new Blob([a], { type: t });
}
function vd(e, t) {
  return new File([e], t, { type: e.type });
}
function yd(e) {
  const [t, i] = p(!1), [n, a] = p(), o = X();
  function c() {
    o.current.click();
  }
  function s(u) {
    const f = u.target.files[0];
    a(f), f && l();
  }
  async function h(u) {
    var C;
    const g = new DOMParser().parseFromString(u, "text/html"), x = g.querySelectorAll("img");
    if (!x.length)
      return g.body.innerHTML;
    if (Nn(e.editor, "image")) {
      const I = (C = e.editor.extensionManager.extensions.find(
        (v) => v.name === "importWord"
      )) == null ? void 0 : C.options;
      if (I && typeof I.upload == "function") {
        const v = [];
        for (const y of x) {
          const N = y.getAttribute("src"), M = _d(N, "image/jpeg"), O = vd(M, "image.jpeg");
          v.push(O);
        }
        const w = await I.upload(v);
        for (let y = 0; y < x.length; y++) {
          const N = x[y];
          N.setAttribute("src", w[y].src);
          const M = N.parentElement;
          (M == null ? void 0 : M.tagName) === "P" && (M.insertAdjacentElement("beforebegin", N), !M.hasChildNodes() && M.textContent === "" && M.remove());
        }
        return g.body.innerHTML;
      } else
        return console.warn("Image Upload method found, skip image conversion"), g.body.innerHTML;
    } else
      return console.error("Image extension not found, unable to convert image"), g.body.innerHTML;
  }
  async function l() {
    if (e.convert) {
      const u = await e.convert(n);
      d(u);
    } else {
      const u = new FormData(), f = JSON.stringify({
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
      u.append("config", f), u.append("file", n), i(!0), fetch("https://docx-converter.cke-cs.com/v2/convert/docx-html", {
        method: "POST",
        body: u
      }).then((g) => g.json()).then(async (g) => {
        d(g.html);
      }).catch((g) => {
        console.error("Error:", g), i(!1);
      });
    }
  }
  async function d(u) {
    const f = await h(u);
    e.editor.chain().setContent(f, !0).run(), i(!1);
  }
  return /* @__PURE__ */ m("div", { children: [
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
const tu = J.create({
  name: "importWord",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: void 0,
      convert: void 0,
      button: ({ editor: t, extension: i, t: n }) => {
        const { convert: a } = i.options;
        return {
          component: yd,
          componentProps: {
            convert: a,
            action: () => t.commands.setHorizontalRule(),
            disabled: !t.can().setHorizontalRule(),
            icon: "Word",
            shortcutKeys: ["alt", "mod", "S"],
            tooltip: n("editor.importWrod.tooltip")
          }
        };
      }
    };
  }
}), kd = typeof window < "u";
function Cd(e, t) {
  if (kd) {
    const i = window.URL.createObjectURL(e), n = document.createElement("a");
    return n.href = i, n.download = t, n.click(), window.URL.revokeObjectURL(i), Promise.resolve();
  }
  return console.error("Download is not supported in Node.js"), Promise.resolve();
}
const Nd = {
  ...ye,
  hardBreak: ye.hard_break,
  codeBlock: ye.code_block,
  orderedList: ye.ordered_list,
  listItem: ye.list_item,
  bulletList: ye.bullet_list,
  horizontalRule: ye.horizontal_rule,
  // Requirement Buffer on browser
  image(e, t) {
    e.renderInline(t), e.closeBlock(t);
  }
}, Td = new po(Nd, wo), iu = J.create({
  name: "exportWord",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          icon: "ExportWord",
          action: () => {
            t == null || t.commands.exportToWord();
          },
          tooltip: i("editor.exportWord.tooltip"),
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
          getImageBuffer: async (n) => {
            const o = await (await fetch(n)).arrayBuffer();
            return new Uint8Array(o);
          }
        }, i = Td.serialize(e.state.doc, t);
        return _o.toBlob(i).then((n) => Cd(new Blob([n]), "export-document.docx")), !0;
      }
    };
  }
}), Ad = "_toc_aag8a_1", Ld = "_visible_aag8a_7", Sd = "_list_aag8a_11", Md = "_item_aag8a_16", pt = {
  toc: Ad,
  visible: Ld,
  list: Sd,
  item: Md,
  "item--3": "_item--3_aag8a_19",
  "item--4": "_item--4_aag8a_22",
  "item--5": "_item--5_aag8a_25",
  "item--6": "_item--6_aag8a_28"
};
function Id(e) {
  const t = [], i = [t];
  return e.forEach((n) => {
    let a = -1, o = i[n.level + a];
    for (; !o; )
      a -= 1, o = i[n.level + a];
    o.push({ ...n, children: i[n.level] = [] });
  }), t;
}
function zd({ editor: e }) {
  const t = e.isEditable, [i, n] = p([]), { t: a } = j(), o = A(() => {
    const c = [], s = e.state.tr;
    e.state.doc.descendants((h, l) => {
      if (h.type.name === "heading") {
        const d = `heading-${c.length + 1}`;
        h.attrs.id !== d && s.setNodeMarkup(l, void 0, {
          ...h.attrs,
          id: d
        }), c.push({
          level: h.attrs.level,
          text: h.textContent,
          id: d
        });
      }
    }), s.setMeta("addToHistory", !1), s.setMeta("preventUpdate", !0), e.view.dispatch(s), n(c), e.eventEmitter && e.eventEmitter.emit("TableOfContents", Id(c));
  }, [e]);
  return E(() => {
    if (e) {
      if (!e.options.editable) {
        o();
        return;
      }
      return e.on("update", o), () => {
        e.off("update", o);
      };
    }
  }, [e, o]), E(() => {
    o();
  }, []), /* @__PURE__ */ r(ce, { className: ee("tableOfContent", pt.toc, t && pt.visible), children: t ? /* @__PURE__ */ m("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ r("p", { className: "richtext-mb-[8px] text-[20px] richtext-font-semibold", children: a("editor.table_of_content") }),
    /* @__PURE__ */ r("ul", { className: pt.list, children: i.map((c, s) => /* @__PURE__ */ r("li", { className: pt.item, style: { paddingLeft: `${c.level - 2}rem` }, children: /* @__PURE__ */ r("a", { href: `#${c.id}`, children: c.text }) }, `table-of-content-${s}`)) })
  ] }) : null });
}
function Hd(e) {
  return e && e.type.name === "title";
}
function Ed(e, t) {
  const n = [e.getJSON()], a = [];
  for (; n.length; ) {
    const o = n.shift();
    o.type === t && a.push(o), o.content && o.content.length && n.push(...o.content);
  }
  return a;
}
function Rd(e, ...t) {
  const [i, n] = p(!1);
  return E(() => {
    const a = () => {
      n(e.isActive.apply(e, t));
    };
    return e.on("selectionUpdate", a), e.on("transaction", a), () => {
      e.off("selectionUpdate", a), e.off("transaction", a);
    };
  }, [e, t, n]), i;
}
function Od({ editor: e, icon: t, tooltip: i }) {
  const n = Rd(e, Pd.name), a = A(() => {
    if (n) {
      e.chain().focus().removeTableOfContents().run();
      return;
    }
    e.chain().focus().setTableOfContents().run();
  }, [e, n]);
  return /* @__PURE__ */ r(
    _,
    {
      action: a,
      isActive: () => n || !1,
      icon: t,
      tooltip: i
    }
  );
}
const Pd = fe.create({
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
      button: ({ editor: t, t: i }) => ({
        component: Od,
        componentProps: {
          disabled: !1,
          icon: "BookMarked",
          tooltip: i("editor.table.tooltip"),
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
    return ["toc", re(e)];
  },
  addNodeView() {
    return xe(zd);
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTableOfContents: () => ({ commands: e, editor: t, view: i }) => {
        if (Ed(t, this.name).length) {
          this.options.onHasOneBeforeInsert();
          return;
        }
        const a = i.props.state.doc.content.firstChild;
        if (Hd(a)) {
          const o = (a.firstChild && a.firstChild.nodeSize || 0) + 1;
          return e.insertContentAt(o, { type: this.name });
        }
        return e.insertContent({
          type: this.name
        });
      },
      removeTableOfContents: () => ({ state: e, dispatch: t }) => {
        const { tr: i } = e, n = e.schema.nodes.tableOfContents;
        return e.doc.descendants((a, o) => {
          if (a.type === n) {
            const c = o, s = o + a.nodeSize;
            i.delete(c, s);
          }
        }), i.docChanged ? (t(i), !0) : !1;
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
function Bd(e) {
  var i;
  const t = B(() => {
    var o;
    const n = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((c) => c.isActive());
    return n && !n.default ? {
      ...n,
      icon: n.icon ? n.icon : e.icon
    } : {
      title: e == null ? void 0 : e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(de, { modal: !0, children: [
    /* @__PURE__ */ r(he, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      _,
      {
        customClass: "!richtext-w-12 richtext-h-12",
        icon: e == null ? void 0 : e.icon,
        tooltip: e == null ? void 0 : e.tooltip,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(F, { className: "richtext-w-3 richtext-h-3 richtext-ml-1 richtext-text-zinc-500", name: "MenuDown" })
      }
    ) }),
    /* @__PURE__ */ r(
      ae,
      {
        className: "richtext-min-w-4 richtext-w-full !richtext-p-[4px] richtext-flex richtext-flex-row richtext-gap-1",
        align: "start",
        side: "bottom",
        children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((n, a) => {
          var o, c;
          return /* @__PURE__ */ m(Ze, { children: [
            /* @__PURE__ */ r(Je, { asChild: !0, children: /* @__PURE__ */ r(
              ut,
              {
                size: "sm",
                onClick: n == null ? void 0 : n.action,
                className: "richtext-p-1 richtext-w-7 richtext-h-7",
                pressed: t.title === n.title,
                "data-state": t.title === n.title ? "on" : "off",
                children: (n == null ? void 0 : n.icon) && /* @__PURE__ */ r(F, { name: n.icon })
              }
            ) }),
            /* @__PURE__ */ m(ze, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ r("span", { children: n.title }),
              !!((o = n.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: (c = n.shortcutKeys) == null ? void 0 : c.map((s) => Mt(s)).join(" ") })
            ] })
          ] }, `text-align-${a}`);
        })
      }
    )
  ] });
}
const nu = J.create({
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
        extension: i,
        t: n
      }) {
        var h;
        const a = ((h = i.options) == null ? void 0 : h.directions) || [], o = {
          auto: "TextDirection",
          ltr: "LeftToRight",
          rtl: "RightToLeft"
        }, c = a.map((l) => ({
          title: n(`editor.textDirection.${l}.tooltip`),
          icon: o[l],
          isActive: () => !1,
          action: () => {
            var d, u, f, g;
            if (l === "auto") {
              (u = (d = t.commands) == null ? void 0 : d.unsetTextDirection) == null || u.call(d);
              return;
            }
            (g = (f = t.commands) == null ? void 0 : f.setTextDirection) == null || g.call(f, l);
          },
          disabled: !1
        })), s = c.filter((l) => l.disabled).length === c.length;
        return {
          component: Bd,
          componentProps: {
            icon: "TextDirection",
            tooltip: n("editor.textDirection.tooltip"),
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
      setTextDirection: (e) => ({ commands: t }) => this.options.directions.includes(e) ? this.options.types.every((i) => t.updateAttributes(i, { dir: e })) : !1,
      unsetTextDirection: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "dir"))
    };
  }
}), $d = "_listUsers_en3pm_1", Dd = "_itemUser_en3pm_10", jd = "_selectedUser_en3pm_31", wt = {
  listUsers: $d,
  itemUser: Dd,
  selectedUser: jd
}, Fd = Tt((e, t) => {
  const i = X(), [n, a] = p(0), o = (l) => {
    const d = e.items[l];
    d && e.command({ id: d, label: d });
  }, c = () => {
    a((n + e.items.length - 1) % e.items.length);
  }, s = () => {
    a((n + 1) % e.items.length);
  }, h = () => {
    o(n);
  };
  return E(() => a(0), [e.items]), E(() => {
    if (Number.isNaN(n + 1))
      return;
    const l = i.current.querySelector(`span:nth-of-type(${n + 1})`);
    l && hi(l, { behavior: "smooth", scrollMode: "if-needed" });
  }, [n]), At(t, () => ({
    onKeyDown: ({ event: l }) => l.key === "ArrowUp" ? (c(), !0) : l.key === "ArrowDown" ? (s(), !0) : l.key === "Enter" ? (h(), !0) : !1
  })), /* @__PURE__ */ r("div", { className: ee("listUsers", wt.listUsers), children: /* @__PURE__ */ r("div", { ref: i, children: e.items.length ? e.items.map((l, d) => /* @__PURE__ */ r(
    "span",
    {
      className: ee("itemUser", wt.itemUser, d === n ? wt.selectedUser : ""),
      onClick: () => o(d),
      children: l
    },
    d
  )) : /* @__PURE__ */ r("div", { className: ee("itemUserEmpty", wt.itemUser), children: "Empty" }) }) });
}), Vd = [
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
], Ud = {
  items: async ({ query: e }) => Vd.map((i) => i.name).filter((i) => i.toLowerCase().startsWith(e.toLowerCase())),
  render: () => {
    let e, t;
    return {
      onStart: (i) => {
        e = new ti(Fd, {
          props: i,
          editor: i.editor
        }), t = si("body", {
          getReferenceClientRect: i.clientRect,
          appendTo: () => document.body,
          content: e.element,
          showOnCreate: !0,
          interactive: !0,
          trigger: "manual",
          placement: "bottom-start"
        });
      },
      onUpdate(i) {
        e.updateProps(i), t[0].setProps({
          getReferenceClientRect: i.clientRect
        });
      },
      onKeyDown(i) {
        var n;
        return i.event.key === "Escape" ? (t[0].hide(), !0) : (n = e.ref) == null ? void 0 : n.onKeyDown(i);
      },
      onExit() {
        t[0].destroy(), e.destroy();
      }
    };
  }
}, ru = Ya.extend({
  addAttributes() {
    return {
      id: {
        default: "",
        parseHTML: Y("id")
      },
      label: {
        default: "",
        parseHTML: Y("label")
      }
    };
  }
}).configure({
  HTMLAttributes: {
    class: "mention"
  },
  suggestion: Ud
});
function Wd(e) {
  switch (wc(e)) {
    case "audio":
      return /* @__PURE__ */ r(ha, {});
    case "video":
      return /* @__PURE__ */ r(da, {});
    case "file":
      return /* @__PURE__ */ r(la, {});
    case "image":
      return /* @__PURE__ */ r(sa, {});
    case "pdf":
      return /* @__PURE__ */ r(On, {});
    case "word":
      return /* @__PURE__ */ r(Pn, {});
    case "excel":
      return /* @__PURE__ */ r(ca, {});
    case "ppt":
      return /* @__PURE__ */ r(oa, {});
    default:
      return /* @__PURE__ */ r(K, {});
  }
}
const qd = "_wrap_gpqtf_1", jt = {
  wrap: qd
};
function Kd({ editor: e, node: t, updateAttributes: i, deleteNode: n, extension: a }) {
  var N;
  const o = X(), c = e.isEditable, { hasTrigger: s, fileName: h, fileSize: l, fileExt: d, fileType: u, url: f, error: g } = t.attrs, [x, b] = p(!1), { t: C } = j(), I = (N = a == null ? void 0 : a.options) == null ? void 0 : N.upload, v = A(() => {
    !c || f || c && o.current.click();
  }, [c, f]), w = A(
    async (M) => {
      const O = M.target.files && M.target.files[0];
      if (!O)
        return;
      const S = {
        fileName: xc(O.name),
        fileSize: O.size,
        fileType: O.type,
        fileExt: bc(O.name)
      };
      b(!0);
      try {
        const L = await I(O);
        i({ ...S, url: L }), b(!1);
      } catch (L) {
        i({ error: `File upload fail: ${L && L.message}` || "Unknown error" }), b(!1), o.current.value = "";
      }
    },
    [b, i]
  );
  E(() => {
    !f && !s && (v(), i({ hasTrigger: !0 }));
  }, [f, s, v, i]);
  const y = A(() => n(), [e]);
  return c && !f ? /* @__PURE__ */ r(ce, { children: /* @__PURE__ */ m("div", { className: ee(jt.wrap, "render-wrapper"), children: [
    /* @__PURE__ */ r("p", { style: { cursor: "pointer" }, onClick: v, children: x ? /* @__PURE__ */ r("span", { children: C("editor.attachment.uploading") }) : /* @__PURE__ */ r("span", { children: C("editor.attachment.please_upload") }) }),
    /* @__PURE__ */ r("input", { ref: o, type: "file", hidden: !0, onChange: w })
  ] }) }) : f ? /* @__PURE__ */ r(ce, { children: /* @__PURE__ */ m("div", { className: ee(jt.wrap, "render-wrapper"), onClick: v, children: [
    /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[4px]", children: [
      /* @__PURE__ */ r("span", { children: Wd(u) }),
      /* @__PURE__ */ m("span", { children: [
        h,
        ".",
        d
      ] }),
      /* @__PURE__ */ m("span", { children: [
        "(",
        pc(l),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ r(
      _,
      {
        icon: "Trash2",
        action: y,
        tooltip: C("editor.delete")
      }
    )
  ] }) }) : g !== "null" ? /* @__PURE__ */ r(ce, { children: /* @__PURE__ */ r("div", { className: ee(jt.wrap, "render-wrapper"), onClick: v, children: /* @__PURE__ */ r("p", { children: g }) }) }) : /* @__PURE__ */ r(K, {});
}
const au = fe.create({
  name: "attachment",
  content: "",
  marks: "",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "attachment"
      },
      button: ({ editor: t, t: i }) => ({
        component: _,
        componentProps: {
          action: () => t.chain().focus().setAttachment().run(),
          isActive: () => !1,
          disabled: !1,
          icon: "Attachment",
          tooltip: i("editor.attachment.tooltip")
        }
      })
    };
  },
  parseHTML() {
    return [{ tag: "div[class=attachment]" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["div", re(this.options.HTMLAttributes, e)];
  },
  addAttributes() {
    return {
      fileName: {
        default: null,
        parseHTML: Y("filename")
      },
      fileSize: {
        default: null,
        parseHTML: Y("filesize")
      },
      fileType: {
        default: null,
        parseHTML: Y("filetype")
      },
      fileExt: {
        default: null,
        parseHTML: Y("fileext")
      },
      url: {
        default: null,
        parseHTML: Y("url")
      },
      hasTrigger: {
        default: !1,
        parseHTML: (e) => Y("hastrigger")(e) === "true"
      },
      error: {
        default: null,
        parseHTML: Y("error")
      }
    };
  },
  addCommands() {
    return {
      setAttachment: (e = {}) => ({ chain: t }) => t().insertContent({ type: this.name, attrs: e }).run()
    };
  },
  addNodeView() {
    return xe(Kd);
  }
}), _t = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function Gd(e) {
  var M, O;
  const [t, i] = p({
    width: Fe,
    height: Fe
  }), [n, a] = p({
    width: 0,
    height: 0
  }), [o] = p([
    _t.TOP_LEFT,
    _t.TOP_RIGHT,
    _t.BOTTOM_LEFT,
    _t.BOTTOM_RIGHT
  ]), [c, s] = p(!1), [h, l] = p({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: d } = (M = e == null ? void 0 : e.node) == null ? void 0 : M.attrs, u = B(() => {
    var z;
    const { src: S, alt: L, width: T, height: k } = (z = e == null ? void 0 : e.node) == null ? void 0 : z.attrs, $ = kt(T) ? `${T}px` : T, R = kt(k) ? `${k}px` : k;
    return {
      src: S || void 0,
      alt: L || void 0,
      style: {
        width: $ || void 0,
        height: R || void 0
      }
    };
  }, [(O = e == null ? void 0 : e.node) == null ? void 0 : O.attrs]), f = B(() => {
    const {
      style: { width: S }
    } = u;
    return { width: S === "100%" ? S : void 0 };
  }, [u]);
  function g(S) {
    a({
      width: S.target.width,
      height: S.target.height
    });
  }
  function x() {
    const { editor: S, getPos: L } = e;
    S.commands.setNodeSelection(L());
  }
  const b = A(
    Ae(() => {
      const { editor: S } = e, { width: L } = getComputedStyle(S.view.dom);
      i((T) => ({
        ...T,
        width: Number.parseInt(L, 10)
      }));
    }, Ve),
    [e == null ? void 0 : e.editor]
  );
  function C(S, L) {
    S.preventDefault(), S.stopPropagation();
    const T = n.width, k = n.height, $ = T / k;
    let R = Number(e.node.attrs.width), z = Number(e.node.attrs.height);
    const H = t.width;
    R && !z ? (R = R > H ? H : R, z = Math.round(R / $)) : z && !R ? (R = Math.round(z * $), R = R > H ? H : R) : !R && !z ? (R = T > H ? H : T, z = Math.round(R / $)) : R = R > H ? H : R, Ue(() => {
      s(!0), l({
        x: S.clientX,
        y: S.clientY,
        w: R,
        h: z,
        dir: L
      });
    });
  }
  const I = A(
    Ae((S) => {
      if (S.preventDefault(), S.stopPropagation(), !c)
        return;
      const { x: L, w: T, dir: k } = h, $ = (S.clientX - L) * (/l/.test(k) ? -1 : 1), R = sn(T + $, oi, t.width);
      e.updateAttributes({
        width: R,
        height: null
      });
    }, Ve),
    [c, h, t, e.updateAttributes]
  ), v = A(
    (S) => {
      S.preventDefault(), S.stopPropagation(), c && (Ue(() => {
        l({
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          dir: ""
        }), s(!1);
      }), x());
    },
    [c, x]
  ), w = A(() => {
    document == null || document.addEventListener("mousemove", I, !0), document == null || document.addEventListener("mouseup", v, !0);
  }, [I, v]), y = A(() => {
    document == null || document.removeEventListener("mousemove", I, !0), document == null || document.removeEventListener("mouseup", v, !0);
  }, [I, v]);
  E(() => (c ? w() : y(), () => {
    y();
  }), [c, w, y]);
  const N = B(() => new ResizeObserver(() => b()), [b]);
  return E(() => (N.observe(e.editor.view.dom), () => {
    N.disconnect();
  }), [e.editor.view.dom, N]), /* @__PURE__ */ r(ce, { className: "image-view", style: { ...f, width: "100%", textAlign: d }, children: /* @__PURE__ */ m(
    "div",
    {
      draggable: "true",
      "data-drag-handle": !0,
      className: `image-view__body ${e != null && e.selected ? "image-view__body--focused" : ""} ${c ? "image-view__body--resizing" : ""}`,
      style: f,
      children: [
        /* @__PURE__ */ r(
          "img",
          {
            src: u.src,
            alt: u.alt,
            style: u.style,
            height: "auto",
            className: "image-view__body__image block",
            onLoad: g,
            onClick: x
          }
        ),
        (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || c) && /* @__PURE__ */ r("div", { className: "image-resizer", children: o == null ? void 0 : o.map((S) => /* @__PURE__ */ r(
          "span",
          {
            className: `image-resizer__handler image-resizer__handler--${S}`,
            onMouseDown: (L) => C(L, S)
          },
          `image-dir-${S}`
        )) })
      ]
    }
  ) });
}
function Zd({ selectImage: e, giphyApiKey: t, children: i }) {
  const [n, a] = p([]), [o] = p(15), c = X(null), s = (l, d = "search") => {
    if (!t)
      return;
    const f = `${d === "search" ? `https://api.giphy.com/v1/gifs/search?q=${l}` : `https://api.giphy.com/v1/gifs/trending?q=${l}`}&limit=${o}&api_key=${t}`;
    fetch(f).then((g) => g.json()).then((g) => {
      a(g.data);
    }).catch((g) => {
      console.log(g);
    });
  };
  E(() => {
    s("", "trend");
  }, []);
  const h = A(
    ai((l) => {
      if (!l.target.value) {
        s("", "trend");
        return;
      }
      s(l.target.value);
    }, 350),
    // Adjust the debounce delay as needed
    []
  );
  return /* @__PURE__ */ m(de, { modal: !0, children: [
    /* @__PURE__ */ r(he, { asChild: !0, children: i }),
    /* @__PURE__ */ r(ae, { hideWhenDetached: !0, className: "richtext-w-full richtext-h-full richtext-p-2", align: "start", side: "bottom", children: t ? /* @__PURE__ */ m(K, { children: [
      /* @__PURE__ */ r("div", { className: "richtext-w-full richtext-mb-[10px]", children: /* @__PURE__ */ r(
        te,
        {
          ref: c,
          type: "text",
          placeholder: "Search GIF",
          onChange: h
        }
      ) }),
      /* @__PURE__ */ r("div", { className: "richtext-max-h-[280px] richtext-overflow-y-auto", children: /* @__PURE__ */ r("div", { className: "richtext-grid richtext-grid-cols-2 richtext-gap-1 ", children: n != null && n.length ? n == null ? void 0 : n.map((l) => /* @__PURE__ */ r(
        "img",
        {
          alt: "giphy",
          className: "richtext-text-center richtext-cursor-pointer",
          onClick: (d) => e(l),
          height: l.images.fixed_width_downsampled.height,
          width: l.images.fixed_width_downsampled.width,
          src: l.images.fixed_width_downsampled.url
        },
        `giphy-${l.id}`
      )) : /* @__PURE__ */ r("p", { children: "No GIFs found" }) }) })
    ] }) : /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("p", { children: "Missing Giphy API Key" }) }) })
  ] });
}
function Jd({ editor: e, icon: t, giphyApiKey: i, ...n }) {
  return /* @__PURE__ */ r(
    Zd,
    {
      selectImage: (o) => {
        const { url: c } = o.images.original;
        e.chain().focus().setImageGif({ src: c }).run();
      },
      giphyApiKey: i,
      children: /* @__PURE__ */ r(
        _,
        {
          tooltip: n == null ? void 0 : n.tooltip,
          icon: t
        }
      )
    }
  );
}
const Wn = ii.extend({
  name: "imageGif",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      GIPHY_API_KEY: "",
      draggable: !1,
      selectable: !0,
      atom: !0,
      button: ({ editor: t, extension: i, t: n }) => {
        var o;
        const a = ((o = i == null ? void 0 : i.options) == null ? void 0 : o.GIPHY_API_KEY) || "";
        return {
          component: Jd,
          componentProps: {
            editor: t,
            action: () => {
            },
            isActive: () => !1,
            disabled: !1,
            icon: "GifIcon",
            tooltip: n("editor.imageGif.tooltip"),
            giphyApiKey: a
          }
        };
      }
    };
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      width: {
        default: null,
        parseHTML: (t) => {
          const i = t.style.width || t.getAttribute("width") || "10";
          return i === void 0 ? null : Number.parseInt(`${i}`, 10);
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      }
    };
  },
  addNodeView() {
    return xe(Gd);
  },
  addCommands() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      setImageGif: (t) => ({ commands: i }) => i.insertContent({
        type: this.name,
        attrs: t
      }),
      updateImageGif: (t) => ({ commands: i }) => i.updateAttributes(this.name, t),
      setAlignImageGif: (t) => ({ commands: i }) => i.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { align: t } = e;
    return [
      "div",
      // Parent element
      {
        style: t ? `text-align: ${t};` : "",
        class: "imageGIf"
      },
      [
        "img",
        re(
          // Always render the `height="auto"`
          {
            height: "auto"
          },
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageGIf]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), i = t == null ? void 0 : t.getAttribute("width");
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            title: t == null ? void 0 : t.getAttribute("title"),
            width: i ? Number.parseInt(i, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null
          };
        }
      }
    ];
  }
}), Gi = `graph TB
a-->b`, Xd = ({ editor: e, upload: t }) => {
  const [i, n] = p(Gi), [a, o] = p(""), [c, s] = p(!1), h = X(null), l = async (f) => {
    try {
      const { svg: g } = await Nt.render("mermaid-svg", f);
      o(g);
    } catch {
      o("");
    }
  }, d = () => {
    Nt.initialize({
      darkMode: !1,
      startOnLoad: !1,
      // fontFamily:'',
      fontSize: 12,
      theme: "base"
    }), l(i);
  };
  return E(() => {
    c && d();
  }, [c]), E(() => {
    c && l(i);
  }, [i]), /* @__PURE__ */ m(
    He,
    {
      open: c,
      onOpenChange: s,
      children: [
        /* @__PURE__ */ r(Ee, { asChild: !0, children: /* @__PURE__ */ r(
          _,
          {
            icon: "Mermaid",
            tooltip: "Mermaid",
            action: () => s(!0)
          }
        ) }),
        /* @__PURE__ */ m(_e, { className: "!richtext-max-w-[1300px] richtext-z-[99999]", children: [
          /* @__PURE__ */ r(ve, { children: "Mermaid" }),
          /* @__PURE__ */ r("div", { style: { height: "100%", borderWidth: 1 }, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-gap-[10px] richtext-rounded-[10px] richtext-p-[10px]", children: [
            /* @__PURE__ */ r(
              ht,
              {
                className: "richtext-flex-1",
                value: i,
                onChange: (f) => n(f.target.value),
                autoFocus: !0,
                required: !0,
                rows: 10,
                defaultValue: Gi,
                placeholder: "Text",
                style: {
                  color: "hsl(var(--richtext-foreground))"
                }
              }
            ),
            /* @__PURE__ */ r(
              "div",
              {
                className: "richtext-flex-1 richtext-flex richtext-items-center richtext-justify-center richtext-rounded-[10px] richtext-p-[10px]",
                style: { height: "100%", borderWidth: 1, minHeight: 500, background: "#fff" },
                ref: h,
                dangerouslySetInnerHTML: { __html: a }
              }
            )
          ] }) }),
          /* @__PURE__ */ r(Xe, { children: /* @__PURE__ */ r(
            V,
            {
              type: "button",
              onClick: async () => {
                if (i !== "") {
                  if (i) {
                    const f = h.current.querySelector("svg"), { width: g, height: x } = f.getBoundingClientRect(), b = `mermaid-${Ln()}.svg`;
                    let C = on(f.outerHTML);
                    if (t) {
                      const I = bi(C, b);
                      C = await t(I);
                    }
                    e == null || e.chain().focus().setMermaid(
                      {
                        type: "mermaid",
                        src: C,
                        alt: encodeURIComponent(i),
                        width: g,
                        height: x
                      },
                      !!i
                    ).run();
                  }
                  s(!1);
                }
              },
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
}, vt = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function Yd({ editor: e, node: t, updateAttributes: i, getPos: n, selected: a }) {
  const [o, c] = p({
    width: Fe,
    height: Fe
  }), [s, h] = p({
    width: 0,
    height: 0
  }), [l] = p([
    vt.TOP_LEFT,
    vt.TOP_RIGHT,
    vt.BOTTOM_LEFT,
    vt.BOTTOM_RIGHT
  ]), [d, u] = p(!1), [f, g] = p({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: x } = t == null ? void 0 : t.attrs, b = B(() => {
    const { src: T, alt: k, width: $, height: R } = t == null ? void 0 : t.attrs, z = Ti($) ? `${$}px` : $, H = Ti(R) ? `${R}px` : R;
    return {
      src: T || void 0,
      alt: k || void 0,
      style: {
        width: z || void 0,
        height: H || void 0
      }
    };
  }, [t == null ? void 0 : t.attrs]), C = B(() => {
    const {
      style: { width: T }
    } = b;
    return { width: T === "100%" ? T : void 0 };
  }, [b]);
  function I(T) {
    h({
      width: T.target.width,
      height: T.target.height
    });
  }
  function v() {
    e.commands.setNodeSelection(n());
  }
  const w = A(
    Ae(() => {
      const { width: T } = getComputedStyle(e.view.dom);
      c((k) => ({
        ...k,
        width: Number.parseInt(T, 10)
      }));
    }, Ve),
    [e]
  );
  function y(T, k) {
    T.preventDefault(), T.stopPropagation();
    const $ = s.width, R = s.height, z = $ / R;
    let H = Number(t.attrs.width), q = Number(t.attrs.height);
    const Q = o.width;
    H && !q ? (H = H > Q ? Q : H, q = Math.round(H / z)) : q && !H ? (H = Math.round(q * z), H = H > Q ? Q : H) : !H && !q ? (H = $ > Q ? Q : $, q = Math.round(H / z)) : H = H > Q ? Q : H, Ue(() => {
      u(!0), g({
        x: T.clientX,
        y: T.clientY,
        w: H,
        h: q,
        dir: k
      });
    });
  }
  const N = A(
    Ae((T) => {
      if (T.preventDefault(), T.stopPropagation(), !d)
        return;
      const { x: k, w: $, dir: R } = f, z = (T.clientX - k) * (/l/.test(R) ? -1 : 1), H = Cn($ + z, oi, o.width);
      i({
        width: H,
        height: null
      });
    }, Ve),
    [d, f, o, i]
  ), M = A(
    (T) => {
      T.preventDefault(), T.stopPropagation(), d && (Ue(() => {
        g({
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          dir: ""
        }), u(!1);
      }), v());
    },
    [d, v]
  ), O = A(() => {
    document == null || document.addEventListener("mousemove", N, !0), document == null || document.addEventListener("mouseup", M, !0);
  }, [N, M]), S = A(() => {
    document == null || document.removeEventListener("mousemove", N, !0), document == null || document.removeEventListener("mouseup", M, !0);
  }, [N, M]);
  E(() => (d ? O() : S(), () => {
    S();
  }), [d, O, S]);
  const L = B(() => new ResizeObserver(() => w()), [w]);
  return E(() => (L.observe(e.view.dom), () => {
    L.disconnect();
  }), [e.view.dom, L]), /* @__PURE__ */ r(ce, { className: "image-view", style: { ...C, width: "100%", textAlign: x }, children: /* @__PURE__ */ m(
    "div",
    {
      draggable: "true",
      "data-drag-handle": !0,
      className: `image-view__body ${a ? "image-view__body--focused" : ""} ${d ? "image-view__body--resizing" : ""}`,
      style: { ...C, background: "#fff" },
      children: [
        /* @__PURE__ */ r(
          "img",
          {
            src: b.src,
            alt: b.alt,
            style: b.style,
            height: "auto",
            className: "image-view__body__image block",
            onLoad: I,
            onClick: v
          }
        ),
        e.view.editable && (a || d) && /* @__PURE__ */ r("div", { className: "image-resizer", children: l == null ? void 0 : l.map((T) => /* @__PURE__ */ r(
          "span",
          {
            className: `image-resizer__handler image-resizer__handler--${T}`,
            onMouseDown: (k) => y(k, T)
          },
          `image-dir-${T}`
        )) })
      ]
    }
  ) });
}
const Zi = ii.extend({
  name: "mermaid",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      draggable: !1,
      selectable: !0,
      atom: !0,
      HTMLAttributes: {
        class: "mermaid"
      },
      button: ({ editor: t, t: i, extension: n }) => {
        var a;
        return {
          component: Xd,
          componentProps: {
            action: () => {
            },
            isActive: () => !1,
            disabled: !1,
            editor: t,
            icon: "Mermaid",
            tooltip: i("editor.mermaid.tooltip"),
            upload: (a = n == null ? void 0 : n.options) == null ? void 0 : a.upload
          }
        };
      }
    };
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      width: {
        default: null,
        parseHTML: (t) => {
          const i = t.style.width || t.getAttribute("width") || "10";
          return i === void 0 ? null : Number.parseInt(`${i}`, 10);
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      height: {
        default: null,
        parseHTML: (t) => {
          const i = t.style.height || t.getAttribute("height") || "10";
          return i === void 0 ? null : Number.parseInt(`${i}`, 10);
        },
        renderHTML: (t) => ({
          height: t.height
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      }
    };
  },
  addNodeView() {
    return xe(Yd);
  },
  // @ts-ignore
  addCommands() {
    return {
      setMermaid: (e, t) => ({ commands: i, editor: n }) => t ? i.insertContent({
        type: this.name,
        attrs: e
      }) : i.insertContentAt(n.state.selection.anchor, {
        type: this.name,
        attrs: e
      }),
      setAlignImageMermaid: (e) => ({ commands: t }) => t.updateAttributes(this.name, { align: e })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { align: t } = e;
    return [
      "div",
      // Parent element
      {
        style: t ? `text-align: ${t};` : "",
        class: "imageMermaid"
      },
      [
        "img",
        re(
          // @ts-ignore
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageMermaid]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), i = t == null ? void 0 : t.getAttribute("width"), n = t == null ? void 0 : t.getAttribute("height");
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            width: i ? Number.parseInt(i, 10) : null,
            height: n ? Number.parseInt(n, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null
          };
        }
      }
    ];
  }
});
export {
  iu as A,
  kh as B,
  Ah as C,
  Pd as D,
  Qh as E,
  Lh as F,
  Pe as G,
  Sh as H,
  Ch as I,
  nu as J,
  De as K,
  $h as L,
  Wh as M,
  ru as N,
  Oh as O,
  au as P,
  Wn as Q,
  yh as R,
  Th as S,
  Mh as T,
  Nh as U,
  Jh as V,
  Zi as W,
  Ks as a,
  Ih as b,
  zh as c,
  Hh as d,
  Eh as e,
  Rh as f,
  Ph as g,
  Bh as h,
  Dh as i,
  jh as j,
  Vh as k,
  Uh as l,
  Bo as m,
  qh as n,
  Kh as o,
  Gh as p,
  Zh as q,
  Xh as r,
  Yh as s,
  vi as t,
  ot as u,
  Fh as v,
  Be as w,
  jl as x,
  eu as y,
  tu as z
};
