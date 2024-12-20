var Yy = Object.defineProperty;
var Xy = (n, e, t) => e in n ? Yy(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var fi = (n, e, t) => Xy(n, typeof e != "symbol" ? e + "" : e, t);
import Qy from "tippy.js";
function Z(n) {
  this.content = n;
}
Z.prototype = {
  constructor: Z,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), o = r.content.slice();
    return i == -1 ? o.push(t || n, e) : (o[i + 1] = e, t && (o[i] = t)), new Z(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new Z(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new Z([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new Z(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(n);
    return i.splice(o == -1 ? i.length : o, 0, e, t), new Z(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = Z.from(n), n.size ? new Z(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = Z.from(n), n.size ? new Z(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = Z.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
Z.from = function(n) {
  if (n instanceof Z) return n;
  var e = [];
  if (n) for (var t in n) e.push(t, n[t]);
  return new Z(e);
};
function jd(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), o = e.child(r);
    if (i == o) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return t;
    if (i.isText && i.text != o.text) {
      for (let s = 0; i.text[s] == o.text[s]; s++)
        t++;
      return t;
    }
    if (i.content.size || o.content.size) {
      let s = jd(i.content, o.content, t + 1);
      if (s != null)
        return s;
    }
    t += i.nodeSize;
  }
}
function Vd(n, e, t, r) {
  for (let i = n.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: t, b: r };
    let s = n.child(--i), l = e.child(--o), a = s.nodeSize;
    if (s == l) {
      t -= a, r -= a;
      continue;
    }
    if (!s.sameMarkup(l))
      return { a: t, b: r };
    if (s.isText && s.text != l.text) {
      let c = 0, f = Math.min(s.text.length, l.text.length);
      for (; c < f && s.text[s.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (s.content.size || l.content.size) {
      let c = Vd(s.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class b {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, o) {
    for (let s = 0, l = 0; l < t; s++) {
      let a = this.content[s], c = l + a.nodeSize;
      if (c > e && r(a, i + l, o || null, s) !== !1 && a.content.size) {
        let f = l + 1;
        a.nodesBetween(Math.max(0, e - f), Math.min(a.content.size, t - f), r, i + f);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let o = "", s = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (s ? s = !1 : o += r), o += c;
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new b(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let o = 0, s = 0; s < t; o++) {
        let l = this.content[o], a = s + l.nodeSize;
        a > e && ((s < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - s), Math.min(l.text.length, t - s)) : l = l.cut(Math.max(0, e - s - 1), Math.min(l.content.size, t - s - 1))), r.push(l), i += l.nodeSize), s = a;
      }
    return new b(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? b.empty : e == 0 && t == this.content.length ? this : new b(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), o = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new b(i, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new b([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new b(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return jd(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Vd(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return ui(0, e);
    if (e == this.size)
      return ui(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let o = this.child(r), s = i + o.nodeSize;
      if (s >= e)
        return s == e || t > 0 ? ui(r + 1, s) : ui(r, i);
      i = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return b.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new b(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return b.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (t || (t = e.slice(0, i)), t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)) : t && t.push(o);
    }
    return new b(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return b.empty;
    if (e instanceof b)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new b([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
b.empty = new b([], 0);
const Ms = { index: 0, offset: 0 };
function ui(n, e) {
  return Ms.index = n, Ms.offset = e, Ms;
}
function Yi(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Yi(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Yi(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
class _ {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        t || (t = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(o);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Yi(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = r.create(t.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return _.none;
    if (e instanceof _)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
}
_.none = [];
class Xi extends Error {
}
class S {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = Ud(this.content, e + this.openStart, t);
    return r && new S(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new S(Wd(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return S.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new S(b.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new S(e, r, i);
  }
}
S.empty = new S(b.empty, 0, 0);
function Wd(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), o = n.maybeChild(r), { index: s, offset: l } = n.findIndex(t);
  if (i == e || o.isText) {
    if (l != t && !n.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, o.copy(Wd(o.content, e - i - 1, t - i - 1)));
}
function Ud(n, e, t, r) {
  let { index: i, offset: o } = n.findIndex(e), s = n.maybeChild(i);
  if (o == e || s.isText)
    return n.cut(0, e).append(t).append(n.cut(e));
  let l = Ud(s.content, e - o - 1, t);
  return l && n.replaceChild(i, s.copy(l));
}
function Zy(n, e, t) {
  if (t.openStart > n.depth)
    throw new Xi("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Xi("Inconsistent open depths");
  return Hd(n, e, t, 0);
}
function Hd(n, e, t, r) {
  let i = n.index(r), o = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let s = Hd(n, e, t, r + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let s = n.parent, l = s.content;
      return sn(s, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: s, end: l } = e0(t, n);
      return sn(o, Gd(n, s, l, e, r));
    }
  else return sn(o, Qi(n, e, r));
}
function Jd(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Xi("Cannot join " + e.type.name + " onto " + n.type.name);
}
function Dl(n, e, t) {
  let r = n.node(t);
  return Jd(r, e.node(t)), r;
}
function on(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function vr(n, e, t, r) {
  let i = (e || n).node(t), o = 0, s = e ? e.index(t) : i.childCount;
  n && (o = n.index(t), n.depth > t ? o++ : n.textOffset && (on(n.nodeAfter, r), o++));
  for (let l = o; l < s; l++)
    on(i.child(l), r);
  e && e.depth == t && e.textOffset && on(e.nodeBefore, r);
}
function sn(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function Gd(n, e, t, r, i) {
  let o = n.depth > i && Dl(n, e, i + 1), s = r.depth > i && Dl(t, r, i + 1), l = [];
  return vr(null, n, i, l), o && s && e.index(i) == t.index(i) ? (Jd(o, s), on(sn(o, Gd(n, e, t, r, i + 1)), l)) : (o && on(sn(o, Qi(n, e, i + 1)), l), vr(e, t, i, l), s && on(sn(s, Qi(t, r, i + 1)), l)), vr(r, null, i, l), new b(l);
}
function Qi(n, e, t) {
  let r = [];
  if (vr(null, n, t, r), n.depth > t) {
    let i = Dl(n, e, t + 1);
    on(sn(i, Qi(n, e, t + 1)), r);
  }
  return vr(e, null, t, r), new b(r);
}
function e0(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let o = t - 1; o >= 0; o--)
    i = e.node(o).copy(b.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class $r {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return _.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let o = r.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new Pr(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, o = t;
    for (let s = e; ; ) {
      let { index: l, offset: a } = s.content.findIndex(o), c = o - a;
      if (r.push(s, l, i + a), !c || (s = s.child(l), s.isText))
        break;
      o = c - 1, i += a + 1;
    }
    return new $r(t, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let r = ef.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let s = r.elts[o];
        if (s.pos == t)
          return s;
      }
    else
      ef.set(e, r = new t0());
    let i = r.elts[r.i] = $r.resolve(e, t);
    return r.i = (r.i + 1) % n0, i;
  }
}
class t0 {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const n0 = 12, ef = /* @__PURE__ */ new WeakMap();
class Pr {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const r0 = /* @__PURE__ */ Object.create(null);
class Ge {
  /**
  @internal
  */
  constructor(e, t, r, i = _.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || b.empty;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && Yi(this.attrs, t || e.defaultAttrs || r0) && _.sameSet(this.marks, r || _.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Ge(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Ge(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return S.empty;
    let i = this.resolve(e), o = this.resolve(t), s = r ? 0 : i.sharedDepth(t), l = i.start(s), c = i.node(s).content.cut(i.pos - l, o.pos - l);
    return new S(c, i.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return Zy(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return $r.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return $r.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (o) => (r.isInSet(o.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Kd(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = b.empty, i = 0, o = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, i, o), l = s && s.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < o; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, t);
    return s ? s.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = _.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!_.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = b.fromJSON(e, t.content), o = e.nodeType(t.type).create(t.attrs, i, r);
    return o.type.checkAttrs(o.attrs), o;
  }
}
Ge.prototype.text = void 0;
class Zi extends Ge {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Kd(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Zi(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Zi(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Kd(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class hn {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new i0(e, t);
    if (r.next == null)
      return hn.empty;
    let i = qd(r);
    r.next && r.err("Unexpected trailing text");
    let o = u0(f0(i));
    return h0(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let o = t; i && o < r; o++)
      i = i.matchType(e.child(o).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function o(s, l) {
      let a = s.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return b.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: f, next: u } = s.next[c];
        if (!(f.isText || f.hasRequiredAttrs()) && i.indexOf(u) == -1) {
          i.push(u);
          let h = o(u, l.concat(f));
          if (h)
            return h;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let l = i; l.type; l = l.via)
          s.push(l.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: l, next: a } = o.next[s];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return o;
    }).join(`
`);
  }
}
hn.empty = new hn(!0);
class i0 {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function qd(n) {
  let e = [];
  do
    e.push(o0(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function o0(n) {
  let e = [];
  do
    e.push(s0(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function s0(n) {
  let e = c0(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = l0(n, e);
    else
      break;
  return e;
}
function tf(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function l0(n, e) {
  let t = tf(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = tf(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function a0(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let o in t) {
    let s = t[o];
    s.isInGroup(e) && i.push(s);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function c0(n) {
  if (n.eat("(")) {
    let e = qd(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = a0(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function f0(n) {
  let e = [[]];
  return i(o(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(s, l, a) {
    let c = { term: a, to: l };
    return e[s].push(c), c;
  }
  function i(s, l) {
    s.forEach((a) => a.to = l);
  }
  function o(s, l) {
    if (s.type == "choice")
      return s.exprs.reduce((a, c) => a.concat(o(c, l)), []);
    if (s.type == "seq")
      for (let a = 0; ; a++) {
        let c = o(s.exprs[a], l);
        if (a == s.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (s.type == "star") {
      let a = t();
      return r(l, a), i(o(s.expr, a), a), [r(a)];
    } else if (s.type == "plus") {
      let a = t();
      return i(o(s.expr, l), a), i(o(s.expr, a), a), [r(a)];
    } else {
      if (s.type == "opt")
        return [r(l)].concat(o(s.expr, l));
      if (s.type == "range") {
        let a = l;
        for (let c = 0; c < s.min; c++) {
          let f = t();
          i(o(s.expr, a), f), a = f;
        }
        if (s.max == -1)
          i(o(s.expr, a), a);
        else
          for (let c = s.min; c < s.max; c++) {
            let f = t();
            r(a, f), i(o(s.expr, a), f), a = f;
          }
        return [r(a)];
      } else {
        if (s.type == "name")
          return [r(l, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Yd(n, e) {
  return e - n;
}
function nf(n, e) {
  let t = [];
  return r(e), t.sort(Yd);
  function r(i) {
    let o = n[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    t.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: l, to: a } = o[s];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function u0(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(nf(n, 0));
  function t(r) {
    let i = [];
    r.forEach((s) => {
      n[s].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let f = 0; f < i.length; f++)
          i[f][0] == l && (c = i[f][1]);
        nf(n, a).forEach((f) => {
          c || i.push([l, c = []]), c.indexOf(f) == -1 && c.push(f);
        });
      });
    });
    let o = e[r.join(",")] = new hn(r.indexOf(n.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let l = i[s][1].sort(Yd);
      o.next.push({ type: i[s][0], next: e[l.join(",")] || t(l) });
    }
    return o;
  }
}
function h0(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], o = !i.validEnd, s = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      s.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Xd(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function Qd(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let o = n[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function Zd(n, e, t, r) {
  for (let i in e)
    if (!(i in n))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in n) {
    let o = n[i];
    o.validate && o.validate(e[i]);
  }
}
function ep(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new p0(n, r, e[r]);
  return t;
}
let rf = class tp {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = ep(e, r.attrs), this.defaultAttrs = Xd(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == hn.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Qd(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Ge(this, this.computeAttrs(e), b.from(t), _.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = b.from(t), this.checkContent(t), new Ge(this, this.computeAttrs(e), t, _.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = b.from(t), t.size) {
      let s = this.contentMatch.fillBefore(t);
      if (!s)
        return null;
      t = s.append(t);
    }
    let i = this.contentMatch.matchFragment(t), o = i && i.fillBefore(b.empty, !0);
    return o ? new Ge(this, e, t.append(o), _.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Zd(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : _.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => r[o] = new tp(o, t, s));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function d0(n, e, t) {
  let r = t.split("|");
  return (i) => {
    let o = i === null ? "null" : typeof i;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${o}`);
  };
}
class p0 {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? d0(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class fs {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = ep(e, i.attrs), this.excluded = null;
    let o = Xd(this.attrs);
    this.instance = o ? new _(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new _(this, Qd(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => r[o] = new fs(o, i++, t, s)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Zd(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class iR {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = Z.from(e.nodes), t.marks = Z.from(e.marks || {}), this.nodes = rf.compile(this.spec.nodes, this), this.marks = fs.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[s] || (r[s] = hn.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? of(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : of(this, s.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof rf) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new Zi(r, r.defaultAttrs, e, _.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return Ge.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return _.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function of(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = n.marks[i], s = o;
    if (o)
      t.push(o);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(s = a);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function g0(n) {
  return n.tag != null;
}
function m0(n) {
  return n.style != null;
}
let np = class $l {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((i) => {
      if (g0(i))
        this.tags.push(i);
      else if (m0(i)) {
        let o = /[^=]*/.exec(i.style)[0];
        r.indexOf(o) < 0 && r.push(o), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let o = e.nodes[i.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new lf(this, t, !1);
    return r.addAll(e, _.none, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new lf(this, t, !0);
    return r.addAll(e, _.none, t.from, t.to), S.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (w0(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || t.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === !1)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], l = s.style;
      if (!(l.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (s.getAttrs) {
          let a = s.getAttrs(t);
          if (a === !1)
            continue;
          s.attrs = a || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < t.length; s++) {
        let l = t[s];
        if ((l.priority == null ? 50 : l.priority) < o)
          break;
      }
      t.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = af(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = af(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new $l(e, $l.schemaRules(e)));
  }
};
const rp = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, y0 = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, ip = { ol: !0, ul: !0 }, eo = 1, to = 2, xr = 4;
function sf(n, e, t) {
  return e != null ? (e ? eo : 0) | (e === "full" ? to : 0) : n && n.whitespace == "pre" ? eo | to : t & ~xr;
}
class hi {
  constructor(e, t, r, i, o, s) {
    this.type = e, this.attrs = t, this.marks = r, this.solid = i, this.options = s, this.content = [], this.activeMarks = _.none, this.match = o || (s & xr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(b.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & eo)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let t = b.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(b.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !rp.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class lf {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
    let i = t.topNode, o, s = sf(null, t.preserveWhitespace, 0) | (r ? xr : 0);
    i ? o = new hi(i.type, i.attrs, _.none, !0, t.topMatch || i.type.contentMatch, s) : r ? o = new hi(null, null, _.none, !0, null, s) : o = new hi(e.schema.topNodeType, null, _.none, !0, null, s), this.nodes = [o], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let r = e.nodeValue, i = this.top;
    if (i.options & to || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (i.options & eo)
        i.options & to ? r = r.replace(/\r\n?/g, `
`) : r = r.replace(/\r?\n|\r/g, " ");
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let o = i.content[i.content.length - 1], s = e.previousSibling;
        (!o || s && s.nodeName == "BR" || o.isText && /[ \t\r\n\u000c]$/.test(o.text)) && (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), t), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, r) {
    let i = e.nodeName.toLowerCase(), o;
    ip.hasOwnProperty(i) && this.parser.normalizeLists && b0(e);
    let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (o = this.parser.matchTag(e, this, r));
    if (s ? s.ignore : y0.hasOwnProperty(i))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!s || s.skip || s.closeParent) {
      s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
      let l, a = this.top, c = this.needsBlock;
      if (rp.hasOwnProperty(i))
        a.content.length && a.content[0].isInline && this.open && (this.open--, a = this.top), l = !0, a.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        return;
      }
      let f = s && s.skip ? t : this.readStyles(e, t);
      f && this.addAll(e, f), l && this.sync(a), this.needsBlock = c;
    } else {
      let l = this.readStyles(e, t);
      l && this.addElementByRule(e, s, l, s.consuming === !1 ? o : void 0);
    }
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let o = this.parser.matchedStyles[i], s = r.getPropertyValue(o);
        if (s)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(o, s, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? t = t.filter((c) => !a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r, i) {
    let o, s;
    if (t.node)
      if (s = this.parser.schema.nodes[t.node], s.isLeaf)
        this.insertNode(s.create(t.attrs), r) || this.leafFallback(e, r);
      else {
        let a = this.enter(s, t.attrs || null, r, t.preserveWhitespace);
        a && (o = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[t.mark];
      r = r.concat(a.create(t.attrs));
    }
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    o && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r, i) {
    let o = r || 0;
    for (let s = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; s != l; s = s.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(s, t);
    this.findAtPoint(e, o);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t) {
    let r, i;
    for (let o = this.open; o >= 0; o--) {
      let s = this.nodes[o], l = s.findWrapping(e);
      if (l && (!r || r.length > l.length) && (r = l, i = s, !l.length) || s.solid)
        break;
    }
    if (!r)
      return null;
    this.sync(i);
    for (let o = 0; o < r.length; o++)
      t = this.enterInner(r[o], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let i = this.textblockFromContext();
      i && (t = this.enterInner(i, null, t));
    }
    let r = this.findPlace(e, t);
    if (r) {
      this.closeExtra();
      let i = this.top;
      i.match && (i.match = i.match.matchType(e.type));
      let o = _.none;
      for (let s of r.concat(e.marks))
        (i.type ? i.type.allowsMarkType(s.type) : cf(s.type, e.type)) && (o = s.addToSet(o));
      return i.content.push(e.mark(o)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r, i) {
    let o = this.findPlace(e.create(t), r);
    return o && (o = this.enterInner(e, t, r, !0, i)), o;
  }
  // Open a node of the given type
  enterInner(e, t, r, i = !1, o) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(e);
    let l = sf(e, o, s.options);
    s.options & xr && s.content.length == 0 && (l |= xr);
    let a = _.none;
    return r = r.filter((c) => (s.type ? s.type.allowsMarkType(c.type) : cf(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new hi(e, t, a, i, null, l)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--)
      if (this.nodes[t] == e)
        return this.open = t, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= o; a--)
            if (s(l - 1, a))
              return !0;
          return !1;
        } else {
          let f = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= o ? r.node(a - o).type : null;
          if (!f || f.name != c && !f.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return s(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function b0(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && ip.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function w0(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function af(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function cf(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let o = [], s = (l) => {
      o.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: f } = l.edge(a);
        if (c == e || o.indexOf(f) < 0 && s(f))
          return !0;
      }
    };
    if (s(i.contentMatch))
      return !0;
  }
}
class er {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = Ns(t).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let l = 0, a = 0;
        for (; l < o.length && a < s.marks.length; ) {
          let c = s.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(o[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < o.length; )
          i = o.pop()[1];
        for (; a < s.marks.length; ) {
          let c = s.marks[a++], f = this.serializeMark(c, s.isInline, t);
          f && (o.push([c, i]), i.appendChild(f.dom), i = f.contentDOM || f.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(s, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = Ii(Ns(t), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let o = this.serializeMark(e.marks[i], e.isInline, t);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && Ii(Ns(r), i(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, i) {
    return Ii(e, t, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new er(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = ff(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return ff(e.marks);
  }
}
function ff(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function Ns(n) {
  return n.document || window.document;
}
const uf = /* @__PURE__ */ new WeakMap();
function S0(n) {
  let e = uf.get(n);
  return e === void 0 && uf.set(n, e = v0(n)), e;
}
function v0(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            t(r[i]);
      else
        for (let i in r)
          t(r[i]);
  }
  return t(n), e;
}
function Ii(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], o;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = S0(r)) && o.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = i.indexOf(" ");
  s > 0 && (t = i.slice(0, s), i = i.slice(s + 1));
  let l, a = t ? n.createElementNS(t, i) : n.createElement(i), c = e[1], f = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    f = 2;
    for (let u in c)
      if (c[u] != null) {
        let h = u.indexOf(" ");
        h > 0 ? a.setAttributeNS(u.slice(0, h), u.slice(h + 1), c[u]) : a.setAttribute(u, c[u]);
      }
  }
  for (let u = f; u < e.length; u++) {
    let h = e[u];
    if (h === 0) {
      if (u < e.length - 1 || u > f)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: d, contentDOM: p } = Ii(n, h, t, r);
      if (a.appendChild(d), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const op = 65535, sp = Math.pow(2, 16);
function x0(n, e) {
  return n + e * sp;
}
function hf(n) {
  return n & op;
}
function C0(n) {
  return (n - (n & op)) / sp;
}
const lp = 1, ap = 2, Ri = 4, cp = 8;
class Pl {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & cp) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (lp | Ri)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (ap | Ri)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Ri) > 0;
  }
}
class ve {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && ve.empty)
      return ve.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = hf(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + C0(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], f = this.ranges[l + s], u = a + c;
      if (e <= u) {
        let h = c ? e == a ? -1 : e == u ? 1 : t : t, d = a + i + (h < 0 ? 0 : f);
        if (r)
          return d;
        let p = e == (t < 0 ? a : u) ? null : x0(l / 3, e - a), g = e == a ? ap : e == u ? lp : Ri;
        return (t < 0 ? e != a : e != u) && (g |= cp), new Pl(d, g, p);
      }
      i += f - c;
    }
    return r ? e + i : new Pl(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = hf(t), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], f = a + c;
      if (e <= f && l == i * 3)
        return !0;
      r += this.ranges[l + s] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], l = s - (this.inverted ? o : 0), a = s + (this.inverted ? 0 : o), c = this.ranges[i + t], f = this.ranges[i + r];
      e(l, l + c, a, a + f), o += f - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new ve(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? ve.empty : new ve(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
ve.empty = new ve([]);
class Pn {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], t, r = 0, i = e.length) {
    this.maps = e, this.mirror = t, this.from = r, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new Pn(this.maps, this.mirror, e, t);
  }
  /**
  @internal
  */
  copy() {
    return new Pn(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this.maps.length; t < e.maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this.maps.length + e.maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Pn();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this.maps[o], l = s.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(o);
        if (a != null && a > o && a < this.to) {
          o = a, e = this.maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Pl(e, i, null);
  }
}
const Is = /* @__PURE__ */ Object.create(null);
class fe {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return ve.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Is[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in Is)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Is[e] = t, t.prototype.jsonID = e, t;
  }
}
class K {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new K(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new K(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return K.ok(e.replace(t, r, i));
    } catch (o) {
      if (o instanceof Xi)
        return K.fail(o.message);
      throw o;
    }
  }
}
function Ha(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let o = n.child(i);
    o.content.size && (o = o.copy(Ha(o.content, e, o))), o.isInline && (o = e(o, t, i)), r.push(o);
  }
  return b.fromArray(r);
}
class Lt extends fe {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new S(Ha(t.content, (s, l) => !s.isAtom || !l.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), t.openStart, t.openEnd);
    return K.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new Je(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Lt(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Lt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Lt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Lt(t.from, t.to, e.markFromJSON(t.mark));
  }
}
fe.jsonID("addMark", Lt);
class Je extends fe {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new S(Ha(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return K.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Lt(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Je(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Je && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Je(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Je(t.from, t.to, e.markFromJSON(t.mark));
  }
}
fe.jsonID("removeMark", Je);
class Bt extends fe {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return K.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return K.fromReplace(e, this.pos, this.pos + 1, new S(b.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new Bt(this.pos, t.marks[i]);
        return new Bt(this.pos, this.mark);
      }
    }
    return new jn(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Bt(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Bt(t.pos, e.markFromJSON(t.mark));
  }
}
fe.jsonID("addNodeMark", Bt);
class jn extends fe {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return K.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return K.fromReplace(e, this.pos, this.pos + 1, new S(b.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new Bt(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new jn(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new jn(t.pos, e.markFromJSON(t.mark));
  }
}
fe.jsonID("removeNodeMark", jn);
class ee extends fe {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && _l(e, this.from, this.to) ? K.fail("Structure replace would overwrite content") : K.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new ve([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new ee(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new ee(t.pos, Math.max(t.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof ee) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? S.empty : new S(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new ee(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? S.empty : new S(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new ee(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new ee(t.from, t.to, S.fromJSON(e, t.slice), !!t.structure);
  }
}
fe.jsonID("replace", ee);
class re extends fe {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, o, s, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = l;
  }
  apply(e) {
    if (this.structure && (_l(e, this.from, this.gapFrom) || _l(e, this.gapTo, this.to)))
      return K.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return K.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? K.fromReplace(e, this.from, this.to, r) : K.fail("Content does not fit in gap");
  }
  getMap() {
    return new ve([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new re(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || o > r.pos ? null : new re(t.pos, r.pos, i, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new re(t.from, t.to, t.gapFrom, t.gapTo, S.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
fe.jsonID("replaceAround", re);
function _l(n, e, t) {
  let r = n.resolve(e), i = t - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, i--;
    }
  }
  return !1;
}
function k0(n, e, t, r) {
  let i = [], o = [], s, l;
  n.doc.nodesBetween(e, t, (a, c, f) => {
    if (!a.isInline)
      return;
    let u = a.marks;
    if (!r.isInSet(u) && f.type.allowsMarkType(r.type)) {
      let h = Math.max(c, e), d = Math.min(c + a.nodeSize, t), p = r.addToSet(u);
      for (let g = 0; g < u.length; g++)
        u[g].isInSet(p) || (s && s.to == h && s.mark.eq(u[g]) ? s.to = d : i.push(s = new Je(h, d, u[g])));
      l && l.to == h ? l.to = d : o.push(l = new Lt(h, d, r));
    }
  }), i.forEach((a) => n.step(a)), o.forEach((a) => n.step(a));
}
function E0(n, e, t, r) {
  let i = [], o = 0;
  n.doc.nodesBetween(e, t, (s, l) => {
    if (!s.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof fs) {
      let c = s.marks, f;
      for (; f = r.isInSet(c); )
        (a || (a = [])).push(f), c = f.removeFromSet(c);
    } else r ? r.isInSet(s.marks) && (a = [r]) : a = s.marks;
    if (a && a.length) {
      let c = Math.min(l + s.nodeSize, t);
      for (let f = 0; f < a.length; f++) {
        let u = a[f], h;
        for (let d = 0; d < i.length; d++) {
          let p = i[d];
          p.step == o - 1 && u.eq(i[d].style) && (h = p);
        }
        h ? (h.to = c, h.step = o) : i.push({ style: u, from: Math.max(l, e), to: c, step: o });
      }
    }
  }), i.forEach((s) => n.step(new Je(s.from, s.to, s.style)));
}
function Ja(n, e, t, r = t.contentMatch, i = !0) {
  let o = n.doc.nodeAt(e), s = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), f = l + c.nodeSize, u = r.matchType(c.type);
    if (!u)
      s.push(new ee(l, f, S.empty));
    else {
      r = u;
      for (let h = 0; h < c.marks.length; h++)
        t.allowsMarkType(c.marks[h].type) || n.step(new Je(l, f, c.marks[h]));
      if (i && c.isText && t.whitespace != "pre") {
        let h, d = /\r?\n|\r/g, p;
        for (; h = d.exec(c.text); )
          p || (p = new S(b.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), s.push(new ee(l + h.index, l + h.index + h[0].length, p));
      }
    }
    l = f;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(b.empty, !0);
    n.replace(l, l, new S(a, 0, 0));
  }
  for (let a = s.length - 1; a >= 0; a--)
    n.step(s[a]);
}
function A0(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function ni(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), o = n.$from.index(r), s = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(o, s, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !A0(i, o, s))
      break;
  }
  return null;
}
function O0(n, e, t) {
  let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), l = i.after(o + 1), a = s, c = l, f = b.empty, u = 0;
  for (let p = o, g = !1; p > t; p--)
    g || r.index(p) > 0 ? (g = !0, f = b.from(r.node(p).copy(f)), u++) : a--;
  let h = b.empty, d = 0;
  for (let p = o, g = !1; p > t; p--)
    g || i.after(p + 1) < i.end(p) ? (g = !0, h = b.from(i.node(p).copy(h)), d++) : c++;
  n.step(new re(a, c, s, l, new S(f.append(h), u, d), f.size - u, !0));
}
function fp(n, e, t = null, r = n) {
  let i = T0(n, e), o = i && M0(r, e);
  return o ? i.map(df).concat({ type: e, attrs: t }).concat(o.map(df)) : null;
}
function df(n) {
  return { type: n, attrs: null };
}
function T0(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return t.canReplaceWith(r, i, s) ? o : null;
}
function M0(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.child(r), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let a = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : s;
}
function N0(n, e, t) {
  let r = b.empty;
  for (let s = t.length - 1; s >= 0; s--) {
    if (r.size) {
      let l = t[s].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = b.from(t[s].type.create(t[s].attrs, r));
  }
  let i = e.start, o = e.end;
  n.step(new re(i, o, i, o, new S(r, 0, 0), t.length, !0));
}
function I0(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = n.steps.length;
  n.doc.nodesBetween(e, t, (s, l) => {
    let a = typeof i == "function" ? i(s) : i;
    if (s.isTextblock && !s.hasMarkup(r, a) && R0(n.doc, n.mapping.slice(o).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let d = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        d && !p ? c = !1 : !d && p && (c = !0);
      }
      c === !1 && hp(n, s, l, o), Ja(n, n.mapping.slice(o).map(l, 1), r, void 0, c === null);
      let f = n.mapping.slice(o), u = f.map(l, 1), h = f.map(l + s.nodeSize, 1);
      return n.step(new re(u, h, u + 1, h - 1, new S(b.from(r.create(a, null, s.marks)), 0, 0), 1, !0)), c === !0 && up(n, s, l, o), !1;
    }
  });
}
function up(n, e, t, r) {
  e.forEach((i, o) => {
    if (i.isText) {
      let s, l = /\r?\n|\r/g;
      for (; s = l.exec(i.text); ) {
        let a = n.mapping.slice(r).map(t + 1 + o + s.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function hp(n, e, t, r) {
  e.forEach((i, o) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let s = n.mapping.slice(r).map(t + 1 + o);
      n.replaceWith(s, s + 1, e.type.schema.text(`
`));
    }
  });
}
function R0(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function D0(n, e, t, r, i) {
  let o = n.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  t || (t = o.type);
  let s = t.create(r, null, i || o.marks);
  if (o.isLeaf)
    return n.replaceWith(e, e + o.nodeSize, s);
  if (!t.validContent(o.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new re(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new S(b.from(s), 0, 0), 1, !0));
}
function dp(n, e, t = 1, r) {
  let i = n.resolve(e), o = i.depth - t, s = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, f = t - 2; c > o; c--, f--) {
    let u = i.node(c), h = i.index(c);
    if (u.type.spec.isolating)
      return !1;
    let d = u.content.cutByIndex(h, u.childCount), p = r && r[f + 1];
    p && (d = d.replaceChild(0, p.type.create(p.attrs)));
    let g = r && r[f] || u;
    if (!u.canReplace(h + 1, u.childCount) || !g.type.validContent(d))
      return !1;
  }
  let l = i.indexAfter(o), a = r && r[0];
  return i.node(o).canReplaceWith(l, l, a ? a.type : i.node(o + 1).type);
}
function $0(n, e, t = 1, r) {
  let i = n.doc.resolve(e), o = b.empty, s = b.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    o = b.from(i.node(l).copy(o));
    let f = r && r[c];
    s = b.from(f ? f.type.create(f.attrs, s) : i.node(l).copy(s));
  }
  n.step(new ee(e, e, new S(o.append(s), t, t), !0));
}
function ri(n, e) {
  let t = n.resolve(e), r = t.index();
  return pp(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function P0(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: r } = n.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let o = e.child(i), s = o.type == r ? n.type.schema.nodes.text : o.type;
    if (t = t.matchType(s), !t || !n.type.allowsMarks(o.marks))
      return !1;
  }
  return t.validEnd;
}
function pp(n, e) {
  return !!(n && e && !n.isLeaf && P0(n, e));
}
function gp(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, s, l = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : t > 0 ? (o = r.node(i + 1), l++, s = r.node(i).maybeChild(l)) : (o = r.node(i).maybeChild(l - 1), s = r.node(i + 1)), o && !o.isTextblock && pp(o, s) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function _0(n, e, t) {
  let r = null, { linebreakReplacement: i } = n.doc.type.schema, o = n.doc.resolve(e - t), s = o.node().type;
  if (i && s.inlineContent) {
    let f = s.whitespace == "pre", u = !!s.contentMatch.matchType(i);
    f && !u ? r = !1 : !f && u && (r = !0);
  }
  let l = n.steps.length;
  if (r === !1) {
    let f = n.doc.resolve(e + t);
    hp(n, f.node(), f.before(), l);
  }
  s.inlineContent && Ja(n, e + t - 1, s, o.node().contentMatchAt(o.index()), r == null);
  let a = n.mapping.slice(l), c = a.map(e - t);
  if (n.step(new ee(c, a.map(e + t, -1), S.empty, !0)), r === !0) {
    let f = n.doc.resolve(c);
    up(n, f.node(), f.before(), n.steps.length);
  }
  return n;
}
function L0(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function mp(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let o = 0; o < t.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (t.openStart == 0 && t.size ? 2 : 1); o++)
    for (let s = r.depth; s >= 0; s--) {
      let l = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, a = r.index(s) + (l > 0 ? 1 : 0), c = r.node(s), f = !1;
      if (o == 1)
        f = c.canReplace(a, a, i);
      else {
        let u = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        f = u && c.canReplaceWith(a, a, u[0]);
      }
      if (f)
        return l == 0 ? r.pos : l < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function us(n, e, t = e, r = S.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), o = n.resolve(t);
  return yp(i, o, r) ? new ee(e, t, r) : new B0(i, o, r).fit();
}
function yp(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class B0 {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = b.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = b.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = r.depth, l = i.depth;
    for (; s && l && o.childCount == 1; )
      o = o.firstChild.content, s--, l--;
    let a = new S(o, s, l);
    return e > -1 ? new re(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new ee(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = t.firstChild;
      if (t.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = o.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = Rs(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], f, u = null;
          if (t == 1 && (s ? c.matchType(s.type) || (u = c.fillBefore(b.from(s), !1)) : o && a.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, inject: u };
          if (t == 2 && s && (f = c.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, wrap: f };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = Rs(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new S(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = Rs(e, t);
    if (i.childCount <= 1 && t > 0) {
      let o = e.size - t <= t + i.size;
      this.unplaced = new S(yr(e, t - 1, 1), t - 1, o ? t - 1 : r);
    } else
      this.unplaced = new S(yr(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: o }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (o)
      for (let g = 0; g < o.length; g++)
        this.openFrontierNode(o[g]);
    let s = this.unplaced, l = r ? r.content : s.content, a = s.openStart - e, c = 0, f = [], { match: u, type: h } = this.frontier[t];
    if (i) {
      for (let g = 0; g < i.childCount; g++)
        f.push(i.child(g));
      u = u.matchFragment(i);
    }
    let d = l.size + e - (s.content.size - s.openEnd);
    for (; c < l.childCount; ) {
      let g = l.child(c), m = u.matchType(g.type);
      if (!m)
        break;
      c++, (c > 1 || a == 0 || g.content.size) && (u = m, f.push(bp(g.mark(h.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? d : -1)));
    }
    let p = c == l.childCount;
    p || (d = -1), this.placed = br(this.placed, t, b.from(f)), this.frontier[t].match = u, p && d < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, m = l; g < d; g++) {
      let y = m.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), m = y.content;
    }
    this.unplaced = p ? e == 0 ? S.empty : new S(yr(s.content, e - 1, 1), e - 1, d < 0 ? s.openEnd : e - 1) : new S(yr(s.content, e, c), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !Ds(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: r, type: i } = this.frontier[t], o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), s = Ds(e, t, i, r, o);
      if (s) {
        for (let l = t - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], f = Ds(e, l, c, a, !0);
          if (!f || f.childCount)
            continue e;
        }
        return { depth: t, fit: s, move: o ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = br(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = br(this.placed, this.depth, b.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(b.empty, !0);
    t.childCount && (this.placed = br(this.placed, this.frontier.length, t));
  }
}
function yr(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(yr(n.firstChild.content, e - 1, t)));
}
function br(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(br(n.lastChild.content, e - 1, t)));
}
function Rs(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function bp(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, bp(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(b.empty, !0)))), n.copy(r);
}
function Ds(n, e, t, r, i) {
  let o = n.node(e), s = i ? n.indexAfter(e) : n.index(e);
  if (s == o.childCount && !t.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, s);
  return l && !z0(t, o.content, s) ? l : null;
}
function z0(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function F0(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function j0(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), o = n.doc.resolve(t);
  if (yp(i, o, r))
    return n.step(new ee(e, t, r));
  let s = Sp(i, n.doc.resolve(t));
  s[s.length - 1] == 0 && s.pop();
  let l = -(i.depth + 1);
  s.unshift(l);
  for (let h = i.depth, d = i.pos - 1; h > 0; h--, d--) {
    let p = i.node(h).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    s.indexOf(h) > -1 ? l = h : i.before(h) == d && s.splice(1, 0, -h);
  }
  let a = s.indexOf(l), c = [], f = r.openStart;
  for (let h = r.content, d = 0; ; d++) {
    let p = h.firstChild;
    if (c.push(p), d == r.openStart)
      break;
    h = p.content;
  }
  for (let h = f - 1; h >= 0; h--) {
    let d = c[h], p = F0(d.type);
    if (p && !d.sameMarkup(i.node(Math.abs(l) - 1)))
      f = h;
    else if (p || !d.type.isTextblock)
      break;
  }
  for (let h = r.openStart; h >= 0; h--) {
    let d = (h + f + 1) % (r.openStart + 1), p = c[d];
    if (p)
      for (let g = 0; g < s.length; g++) {
        let m = s[(g + a) % s.length], y = !0;
        m < 0 && (y = !1, m = -m);
        let v = i.node(m - 1), k = i.index(m - 1);
        if (v.canReplaceWith(k, k, p.type, p.marks))
          return n.replace(i.before(m), y ? o.after(m) : t, new S(wp(r.content, 0, r.openStart, d), d, r.openEnd));
      }
  }
  let u = n.steps.length;
  for (let h = s.length - 1; h >= 0 && (n.replace(e, t, r), !(n.steps.length > u)); h--) {
    let d = s[h];
    d < 0 || (e = i.before(d), t = o.after(d));
  }
}
function wp(n, e, t, r, i) {
  if (e < t) {
    let o = n.firstChild;
    n = n.replaceChild(0, o.copy(wp(o.content, e + 1, t, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), s = o.fillBefore(n).append(n);
    n = s.append(o.matchFragment(s).fillBefore(b.empty, !0));
  }
  return n;
}
function V0(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = L0(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new S(b.from(r), 0, 0));
}
function W0(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), o = Sp(r, i);
  for (let s = 0; s < o.length; s++) {
    let l = o[s], a = s == o.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let s = 1; s <= r.depth && s <= i.depth; s++)
    if (e - r.start(s) == r.depth - s && t > r.end(s) && i.end(s) - t != i.depth - s && r.start(s - 1) == i.start(s - 1) && r.node(s - 1).canReplace(r.index(s - 1), i.index(s - 1)))
      return n.delete(r.before(s), t);
  n.delete(e, t);
}
function Sp(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = n.start(i);
    if (o < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && t.push(i);
  }
  return t;
}
class _n extends fe {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return K.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in t.attrs)
      r[o] = t.attrs[o];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return K.fromReplace(e, this.pos, this.pos + 1, new S(b.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return ve.empty;
  }
  invert(e) {
    return new _n(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new _n(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new _n(t.pos, t.attr, t.value);
  }
}
fe.jsonID("attr", _n);
class _r extends fe {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return K.ok(r);
  }
  getMap() {
    return ve.empty;
  }
  invert(e) {
    return new _r(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new _r(t.attr, t.value);
  }
}
fe.jsonID("docAttr", _r);
let Vn = class extends Error {
};
Vn = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
Vn.prototype = Object.create(Error.prototype);
Vn.prototype.constructor = Vn;
Vn.prototype.name = "TransformError";
class vp {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Pn();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new Vn(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = S.empty) {
    let i = us(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new S(b.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, S.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return j0(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return V0(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return W0(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return O0(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return _0(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return N0(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return I0(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return D0(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new _n(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new _r(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new Bt(e, t)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    if (!(t instanceof _)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(r.marks), !t)
        return this;
    }
    return this.step(new jn(e, t)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, t = 1, r) {
    return $0(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return k0(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return E0(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return Ja(this, e, t, r), this;
  }
}
const $s = /* @__PURE__ */ Object.create(null);
class T {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new Ga(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = S.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let l = 0; l < s.length; l++) {
      let { $from: a, $to: c } = s[l], f = e.mapping.slice(o);
      e.replaceRange(f.map(a.pos), f.map(c.pos), l ? S.empty : t), l == 0 && mf(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: l } = i[o], a = e.mapping.slice(r), c = a.map(s.pos), f = a.map(l.pos);
      o ? e.deleteRange(c, f) : (e.replaceRangeWith(c, f, t), mf(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new R(e) : Mn(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = t < 0 ? Mn(e.node(0), e.node(o), e.before(o + 1), e.index(o), t, r) : Mn(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, t, r);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new Pe(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Mn(e, e, 0, 0, 1) || new Pe(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Mn(e, e, e.content.size, e.childCount, -1) || new Pe(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = $s[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in $s)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return $s[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return R.between(this.$anchor, this.$head).getBookmark();
  }
}
T.prototype.visible = !0;
class Ga {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let pf = !1;
function gf(n) {
  !pf && !n.parent.inlineContent && (pf = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class R extends T {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    gf(e), gf(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return T.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new R(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = S.empty) {
    if (super.replace(e, t), t == S.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof R && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new hs(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new R(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let o = T.findFrom(t, r, !0) || T.findFrom(t, -r, !0);
      if (o)
        t = o.$head;
      else
        return T.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (T.findFrom(e, -r, !0) || T.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new R(e, t);
  }
}
T.jsonID("text", R);
class hs {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new hs(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return R.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class E extends T {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), o = e.resolve(i);
    return r ? T.near(o) : new E(o);
  }
  content() {
    return new S(b.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof E && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Ka(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new E(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new E(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
E.prototype.visible = !1;
T.jsonID("node", E);
class Ka {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new hs(r, r) : new Ka(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && E.isSelectable(r) ? new E(t) : T.near(t);
  }
}
class Pe extends T {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = S.empty) {
    if (t == S.empty) {
      e.delete(0, e.doc.content.size);
      let r = T.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new Pe(e);
  }
  map(e) {
    return new Pe(e);
  }
  eq(e) {
    return e instanceof Pe;
  }
  getBookmark() {
    return U0;
  }
}
T.jsonID("all", Pe);
const U0 = {
  map() {
    return this;
  },
  resolve(n) {
    return new Pe(n);
  }
};
function Mn(n, e, t, r, i, o = !1) {
  if (e.inlineContent)
    return R.create(n, t);
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let l = e.child(s);
    if (l.isAtom) {
      if (!o && E.isSelectable(l))
        return E.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = Mn(n, l, t + i, i < 0 ? l.childCount : 0, i, o);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function mf(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof ee || i instanceof re))
    return;
  let o = n.mapping.maps[r], s;
  o.forEach((l, a, c, f) => {
    s == null && (s = f);
  }), n.setSelection(T.near(n.doc.resolve(s), t));
}
const yf = 1, di = 2, bf = 4;
let H0 = class extends vp {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | yf) & ~di, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & yf) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= di, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return _.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & di) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~di, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || _.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(t);
        o = r == t ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, o)), this.selection.empty || this.setSelection(T.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= bf, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & bf) > 0;
  }
};
function wf(n, e) {
  return !e || !n ? n : n.bind(e);
}
class wr {
  constructor(e, t, r) {
    this.name = e, this.init = wf(t.init, r), this.apply = wf(t.apply, r);
  }
}
const J0 = [
  new wr("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new wr("selection", {
    init(n, e) {
      return n.selection || T.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new wr("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new wr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class Ps {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = J0.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new wr(r.key, r.spec.state, r));
    });
  }
}
class Sr {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let o = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let l = this.config.plugins[s];
        if (l.spec.appendTransaction) {
          let a = i ? i[s].n : 0, c = i ? i[s].state : this, f = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (f && r.filterTransaction(f, s)) {
            if (f.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let u = 0; u < this.config.plugins.length; u++)
                i.push(u < s ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(f), r = r.applyInner(f), o = !0;
          }
          i && (i[s] = { state: r, n: t.length });
        }
      }
      if (!o)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new Sr(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      t[o.name] = o.apply(e, this[o.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new H0(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new Ps(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new Sr(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new Ps(this.schema, e.plugins), r = t.fields, i = new Sr(t);
    for (let o = 0; o < r.length; o++) {
      let s = r[o].name;
      i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (t[r] = o.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new Ps(e.schema, e.plugins), o = new Sr(i);
    return i.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = Ge.fromJSON(e.schema, t.doc);
      else if (s.name == "selection")
        o.selection = T.fromJSON(o.doc, t.selection);
      else if (s.name == "storedMarks")
        t.storedMarks && (o.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              o[s.name] = c.fromJSON.call(a, e, t[l], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function xp(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = xp(i, e, {})), t[r] = i;
  }
  return t;
}
class bn {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && xp(e.props, this, this.props), this.key = e.key ? e.key.key : Cp("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const _s = /* @__PURE__ */ Object.create(null);
function Cp(n) {
  return n in _s ? n + "$" + ++_s[n] : (_s[n] = 0, n + "$");
}
class et {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Cp(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const te = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Lr = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Ll = null;
const pt = function(n, e, t) {
  let r = Ll || (Ll = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, G0 = function() {
  Ll = null;
}, dn = function(n, e, t, r) {
  return t && (Sf(n, e, t, r, -1) || Sf(n, e, t, r, 1));
}, K0 = /^(img|br|input|textarea|hr)$/i;
function Sf(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Me(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || ii(n) || K0.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = te(n) + (i < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = i < 0 ? Me(n) : 0;
    } else
      return !1;
  }
}
function Me(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function q0(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = Me(n);
    } else if (n.parentNode && !ii(n))
      e = te(n), n = n.parentNode;
    else
      return null;
  }
}
function Y0(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !ii(n))
      e = te(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function X0(n, e, t) {
  for (let r = e == 0, i = e == Me(n); r || i; ) {
    if (n == t)
      return !0;
    let o = te(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && o == 0, i = i && o == Me(n);
  }
}
function ii(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const ds = function(n) {
  return n.focusNode && dn(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function en(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function Q0(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Z0(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: Math.min(Me(r.offsetNode), r.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: Math.min(Me(r.startContainer), r.startOffset) };
  }
}
const Ye = typeof navigator < "u" ? navigator : null, vf = typeof document < "u" ? document : null, Yt = Ye && Ye.userAgent || "", Bl = /Edge\/(\d+)/.exec(Yt), kp = /MSIE \d/.exec(Yt), zl = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Yt), be = !!(kp || zl || Bl), Vt = kp ? document.documentMode : zl ? +zl[1] : Bl ? +Bl[1] : 0, Le = !be && /gecko\/(\d+)/i.test(Yt);
Le && +(/Firefox\/(\d+)/.exec(Yt) || [0, 0])[1];
const Fl = !be && /Chrome\/(\d+)/.exec(Yt), se = !!Fl, Ep = Fl ? +Fl[1] : 0, he = !be && !!Ye && /Apple Computer/.test(Ye.vendor), Wn = he && (/Mobile\/\w+/.test(Yt) || !!Ye && Ye.maxTouchPoints > 2), Te = Wn || (Ye ? /Mac/.test(Ye.platform) : !1), eb = Ye ? /Win/.test(Ye.platform) : !1, De = /Android \d/.test(Yt), oi = !!vf && "webkitFontSmoothing" in vf.documentElement.style, tb = oi ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function nb(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function at(n, e) {
  return typeof n == "number" ? n : n[e];
}
function rb(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function xf(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, o = n.dom.ownerDocument;
  for (let s = t || n.dom; s; s = Lr(s)) {
    if (s.nodeType != 1)
      continue;
    let l = s, a = l == o.body, c = a ? nb(o) : rb(l), f = 0, u = 0;
    if (e.top < c.top + at(r, "top") ? u = -(c.top - e.top + at(i, "top")) : e.bottom > c.bottom - at(r, "bottom") && (u = e.bottom - e.top > c.bottom - c.top ? e.top + at(i, "top") - c.top : e.bottom - c.bottom + at(i, "bottom")), e.left < c.left + at(r, "left") ? f = -(c.left - e.left + at(i, "left")) : e.right > c.right - at(r, "right") && (f = e.right - c.right + at(i, "right")), f || u)
      if (a)
        o.defaultView.scrollBy(f, u);
      else {
        let h = l.scrollLeft, d = l.scrollTop;
        u && (l.scrollTop += u), f && (l.scrollLeft += f);
        let p = l.scrollLeft - h, g = l.scrollTop - d;
        e = { left: e.left - p, top: e.top - g, right: e.right - p, bottom: e.bottom - g };
      }
    if (a || /^(fixed|sticky)$/.test(getComputedStyle(s).position))
      break;
  }
}
function ib(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, s = t + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let l = n.root.elementFromPoint(o, s);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Ap(n.dom) };
}
function Ap(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Lr(r))
    ;
  return e;
}
function ob({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  Op(t, r == 0 ? 0 : r - e);
}
function Op(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: o } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let kn = null;
function sb(n) {
  if (n.setActive)
    return n.setActive();
  if (kn)
    return n.focus(kn);
  let e = Ap(n);
  n.focus(kn == null ? {
    get preventScroll() {
      return kn = { preventScroll: !0 }, !0;
    }
  } : void 0), kn || (kn = !1, Op(e, 0));
}
function Tp(n, e) {
  let t, r = 2e8, i, o = 0, s = e.top, l = e.top, a, c;
  for (let f = n.firstChild, u = 0; f; f = f.nextSibling, u++) {
    let h;
    if (f.nodeType == 1)
      h = f.getClientRects();
    else if (f.nodeType == 3)
      h = pt(f).getClientRects();
    else
      continue;
    for (let d = 0; d < h.length; d++) {
      let p = h[d];
      if (p.top <= s && p.bottom >= l) {
        s = Math.max(p.bottom, s), l = Math.min(p.top, l);
        let g = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (g < r) {
          t = f, r = g, i = g && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, f.nodeType == 1 && g && (o = u + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = f, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (o = u + 1);
    }
  }
  return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? lb(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: o } : Tp(t, i);
}
function lb(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let o = Ot(r, 1);
    if (o.top != o.bottom && qa(e, o))
      return { node: n, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function qa(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function ab(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function cb(n, e, t) {
  let { node: r, offset: i } = Tp(e, t), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    o = s.left != s.right && t.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, o);
}
function fb(n, e, t, r) {
  let i = -1;
  for (let o = e, s = !1; o != n.dom; ) {
    let l = n.docView.nearestDesc(o, !0);
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM)) {
      let a = l.dom.getBoundingClientRect();
      if (l.node.isBlock && l.parent && (!s && a.left > r.left || a.top > r.top ? i = l.posBefore : (!s && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), s = !0), !l.contentDOM && i < 0 && !l.node.isText)
        return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    }
    o = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function Mp(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), o = i; ; ) {
      let s = n.childNodes[o];
      if (s.nodeType == 1) {
        let l = s.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (qa(e, c))
            return Mp(s, e, c);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return n;
}
function ub(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, o = Z0(t, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let s = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!s || !n.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let c = n.dom.getBoundingClientRect();
    if (!qa(e, c) || (s = Mp(n.dom, e, c), !s))
      return null;
  }
  if (he)
    for (let c = s; r && c; c = Lr(c))
      c.draggable && (r = void 0);
  if (s = ab(s, e), r) {
    if (Le && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let f = r.childNodes[i], u;
      f.nodeName == "IMG" && (u = f.getBoundingClientRect()).right <= e.left && u.bottom > e.top && i++;
    }
    let c;
    oi && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = fb(n, r, i, e));
  }
  l == null && (l = cb(n, s, e));
  let a = n.docView.nearestDesc(s, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function Cf(n) {
  return n.top < n.bottom || n.left < n.right;
}
function Ot(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (Cf(r))
      return r;
  }
  return Array.prototype.find.call(t, Cf) || n.getBoundingClientRect();
}
const hb = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Np(n, e, t) {
  let { node: r, offset: i, atom: o } = n.docView.domFromPos(e, t < 0 ? -1 : 1), s = oi || Le;
  if (r.nodeType == 3)
    if (s && (hb.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = Ot(pt(r, i, i), t);
      if (Le && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = Ot(pt(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let f = Ot(pt(r, i, i + 1), -1);
          if (f.top != a.top)
            return fr(f, f.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, f = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, f = -1) : t >= 0 && i == r.nodeValue.length ? (a--, f = 1) : t < 0 ? a-- : c++, fr(Ot(pt(r, a, c), f), f < 0);
    }
  if (!n.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (t < 0 || i == Me(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return Ls(a.getBoundingClientRect(), !1);
    }
    if (o == null && i < Me(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return Ls(a.getBoundingClientRect(), !0);
    }
    return Ls(r.getBoundingClientRect(), t >= 0);
  }
  if (o == null && i && (t < 0 || i == Me(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? pt(a, Me(a) - (s ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return fr(Ot(c, 1), !1);
  }
  if (o == null && i < Me(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? pt(a, 0, s ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return fr(Ot(c, -1), !0);
  }
  return fr(Ot(r.nodeType == 3 ? pt(r) : r, -t), t >= 0);
}
function fr(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function Ls(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function Ip(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function db(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return Ip(n, e, () => {
    let { node: o } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(o, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        o = l.contentDOM || l.dom;
        break;
      }
      o = l.dom.parentNode;
    }
    let s = Np(n, i.pos, 1);
    for (let l = o.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = pt(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let f = a[c];
        if (f.bottom > f.top + 1 && (t == "up" ? s.top - f.top > (f.bottom - s.top) * 2 : f.bottom - s.bottom > (s.bottom - f.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const pb = /[\u0590-\u08ac]/;
function gb(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, s = i == r.parent.content.size, l = n.domSelection();
  return l ? !pb.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? o : s : Ip(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: f, anchorOffset: u } = n.domSelectionRange(), h = l.caretBidiLevel;
    l.modify("move", t, "character");
    let d = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: g } = n.domSelectionRange(), m = p && !d.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == g;
    try {
      l.collapse(f, u), a && (a != f || c != u) && l.extend && l.extend(a, c);
    } catch {
    }
    return h != null && (l.caretBidiLevel = h), m;
  }) : r.pos == r.start() || r.pos == r.end();
}
let kf = null, Ef = null, Af = !1;
function mb(n, e, t) {
  return kf == e && Ef == t ? Af : (kf = e, Ef = t, Af = t == "up" || t == "down" ? db(n, e, t) : gb(n, e, t));
}
const Ne = 0, Of = 1, tn = 2, Xe = 3;
class si {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = Ne, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > te(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), s;
      if (o && (!t || o.node))
        if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = !1;
        else
          return o;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let s = this.children[r], l = o + s.size;
      if (l > e || s instanceof Dp) {
        i = e - o;
        break;
      }
      o = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof Rp && o.side >= 0; r--)
      ;
    if (t <= 0) {
      let o, s = !0;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = !1)
        ;
      return o && t && s && !o.border && !o.domAtom ? o.domFromPos(o.size, t) : { node: this.contentDOM, offset: o ? te(o.dom) + 1 : 0 };
    } else {
      let o, s = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = !1)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, t) : { node: this.contentDOM, offset: o ? te(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let s = r, l = 0; ; l++) {
      let a = this.children[l], c = s + a.size;
      if (i == -1 && e <= c) {
        let f = s + a.border;
        if (e >= f && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, f);
        e = s;
        for (let u = l; u > 0; u--) {
          let h = this.children[u - 1];
          if (h.size && h.dom.parentNode == this.contentDOM && !h.emptyChildAt(1)) {
            i = te(h.dom) + 1;
            break;
          }
          e -= h.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let f = l + 1; f < this.children.length; f++) {
          let u = this.children[f];
          if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
            o = te(u.dom);
            break;
          }
          t += u.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let o = Math.min(e, t), s = Math.max(e, t);
    for (let h = 0, d = 0; h < this.children.length; h++) {
      let p = this.children[h], g = d + p.size;
      if (o > d && s < g)
        return p.setSelection(e - d - p.border, t - d - p.border, r, i);
      d = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.getSelection(), f = !1;
    if ((Le || he) && e == t) {
      let { node: h, offset: d } = l;
      if (h.nodeType == 3) {
        if (f = !!(d && h.nodeValue[d - 1] == `
`), f && d == h.nodeValue.length)
          for (let p = h, g; p; p = p.parentNode) {
            if (g = p.nextSibling) {
              g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: te(g) + 1 });
              break;
            }
            let m = p.pmViewDesc;
            if (m && m.node && m.node.isBlock)
              break;
          }
      } else {
        let p = h.childNodes[d - 1];
        f = p && (p.nodeName == "BR" || p.contentEditable == "false");
      }
    }
    if (Le && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
      let h = c.focusNode.childNodes[c.focusOffset];
      h && h.contentEditable == "false" && (i = !0);
    }
    if (!(i || f && he) && dn(l.node, l.offset, c.anchorNode, c.anchorOffset) && dn(a.node, a.offset, c.focusNode, c.focusOffset))
      return;
    let u = !1;
    if ((c.extend || e == t) && !f) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), u = !0;
      } catch {
      }
    }
    if (!u) {
      if (e > t) {
        let d = l;
        l = a, a = d;
      }
      let h = document.createRange();
      h.setEnd(a.node, a.offset), h.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(h);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let o = this.children[i], s = r + o.size;
      if (r == s ? e <= s && t >= r : e < s && t > r) {
        let l = r + o.border, a = s - o.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == s ? tn : Of, e == l && t == a && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = Xe : o.markDirty(e - l, t - l);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? tn : Xe;
      }
      r = s;
    }
    this.dirty = tn;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? tn : Of;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class Rp extends si {
  constructor(e, t, r, i) {
    let o, s = t.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !t.type.spec.raw) {
      if (s.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(s), s = l;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = t, this.widget = t, o = this;
  }
  matchesWidget(e) {
    return this.dirty == Ne && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class yb extends si {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class pn extends si {
  constructor(e, t, r, i) {
    super(e, [], r, i), this.mark = t;
  }
  static create(e, t, r, i) {
    let o = i.nodeViews[t.type.name], s = o && o(t, i, r);
    return (!s || !s.dom) && (s = er.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new pn(e, t, s.dom, s.contentDOM || s.dom);
  }
  parseRule() {
    return this.dirty & Xe || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != Xe && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != Ne) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Ne;
    }
  }
  slice(e, t, r) {
    let i = pn.create(this.parent, this.mark, !0, r), o = this.children, s = this.size;
    t < s && (o = Vl(o, t, s, r)), e > 0 && (o = Vl(o, 0, e, r));
    for (let l = 0; l < o.length; l++)
      o[l].parent = i;
    return i.children = o, i;
  }
}
class Wt extends si {
  constructor(e, t, r, i, o, s, l, a, c) {
    super(e, [], o, s), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, o, s) {
    let l = o.nodeViews[t.type.name], a, c = l && l(t, o, () => {
      if (!a)
        return s;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), f = c && c.dom, u = c && c.contentDOM;
    if (t.isText) {
      if (!f)
        f = document.createTextNode(t.text);
      else if (f.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else f || ({ dom: f, contentDOM: u } = er.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !u && !t.isText && f.nodeName != "BR" && (f.hasAttribute("contenteditable") || (f.contentEditable = "false"), t.type.spec.draggable && (f.draggable = !0));
    let h = f;
    return f = _p(f, r, t), c ? a = new bb(e, t, r, i, f, u || null, h, c, o, s + 1) : t.isText ? new ps(e, t, r, i, f, h, o) : new Wt(e, t, r, i, f, u || null, h, o, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => b.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == Ne && e.eq(this.node) && no(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, o = e.composing ? this.localCompositionInfo(e, t) : null, s = o && o.pos > -1 ? o : null, l = o && o.pos < 0, a = new Sb(this, s && s.node, e);
    Cb(this.node, this.innerDeco, (c, f, u) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !u && a.syncToMarks(f == this.node.childCount ? _.none : this.node.child(f).marks, r, e), a.placeWidget(c, e, i);
    }, (c, f, u, h) => {
      a.syncToMarks(c.marks, r, e);
      let d;
      a.findNodeMatch(c, f, u, h) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (d = a.findIndexWithChild(o.node)) > -1 && a.updateNodeAt(c, f, u, d, e) || a.updateNextNode(c, f, u, e, h, i) || a.addNode(c, f, u, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == tn) && (s && this.protectLocalComposition(e, s), $p(this.contentDOM, this.children, e), Wn && kb(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof R) || r < t || i > t + this.node.content.size)
      return null;
    let o = e.input.compositionNode;
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = o.nodeValue, l = Eb(this.node.content, s, r - t, i - t);
      return l < 0 ? null : { node: o, pos: l, text: s };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let o = t;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let s = new yb(this, o, t, i);
    e.input.compositionNodes.push(s), this.children = Vl(this.children, r, r + i.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == Xe || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Ne;
  }
  updateOuterDeco(e) {
    if (no(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = Pp(this.dom, this.nodeDOM, jl(this.outerDeco, this.node, t), jl(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function Tf(n, e, t, r, i) {
  _p(r, e, n);
  let o = new Wt(void 0, n, e, t, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class ps extends Wt {
  constructor(e, t, r, i, o, s, l) {
    super(e, t, r, i, o, null, s, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == Xe || this.dirty != Ne && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Ne || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Ne, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), o = document.createTextNode(i.text);
    return new ps(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = Xe);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class Dp extends si {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Ne && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class bb extends Wt {
  constructor(e, t, r, i, o, s, l, a, c, f) {
    super(e, t, r, i, o, s, l, c, f), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == Xe)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let o = this.spec.update(e, t, r);
      return o && this.updateInner(e, t, r, i), o;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function $p(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], l = s.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = Mf(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (s instanceof pn) {
      let a = r ? r.previousSibling : n.lastChild;
      $p(s.contentDOM, s.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = Mf(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const Cr = function(n) {
  n && (this.nodeName = n);
};
Cr.prototype = /* @__PURE__ */ Object.create(null);
const nn = [new Cr()];
function jl(n, e, t) {
  if (n.length == 0)
    return nn;
  let r = t ? nn[0] : new Cr(), i = [r];
  for (let o = 0; o < n.length; o++) {
    let s = n[o].type.attrs;
    if (s) {
      s.nodeName && i.push(r = new Cr(s.nodeName));
      for (let l in s) {
        let a = s[l];
        a != null && (t && i.length == 1 && i.push(r = new Cr(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function Pp(n, e, t, r) {
  if (t == nn && r == nn)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let s = r[o], l = t[o];
    if (o) {
      let a;
      l && l.nodeName == s.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == s.nodeName || (a = document.createElement(s.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = nn[0]), i = a;
    }
    wb(i, l || nn[0], s);
  }
  return i;
}
function wb(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && n.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && n.classList.add(i[o]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function _p(n, e, t) {
  return Pp(n, n, nn, jl(e, t, n.nodeType != 1));
}
function no(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function Mf(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Sb {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = vb(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let i = 0, o = this.stack.length >> 1, s = Math.min(o, e.length);
    for (; i < s && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = Ne, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[o]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = pn.create(this.top, e[o], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let o = -1, s;
    if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, t, r))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          o = l;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, o) {
    let s = this.top.children[i];
    return s.dirty == Xe && s.dom == s.contentDOM && (s.dirty = tn), s.update(e, t, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, o, s) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof Wt) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != o)
          return !1;
        let f = a.dom, u, h = this.isLocked(f) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != Xe && no(t, a.outerDeco));
        if (!h && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != f && (this.changed = !0), this.index++, !0;
        if (!h && (u = this.recreateWrapper(a, e, t, r, i, s)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = u, u.contentDOM && (u.dirty = tn, u.updateChildren(i, s + 1), u.dirty = Ne), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, o, s) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !no(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let l = Wt.create(this.top, t, r, i, o, s);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, o) {
    let s = Wt.create(this.top, e, t, r, i, o);
    s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new Rp(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof pn; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof ps) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((he || se) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Dp(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function vb(n, e) {
  let t = e, r = t.children.length, i = n.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e: for (; i > 0; ) {
    let l;
    for (; ; )
      if (r) {
        let c = t.children[r - 1];
        if (c instanceof pn)
          t = c, r = c.children.length;
        else {
          l = c, r--;
          break;
        }
      } else {
        if (t == e)
          break e;
        r = t.parent.children.indexOf(t), t = t.parent;
      }
    let a = l.node;
    if (a) {
      if (a != n.child(i - 1))
        break;
      --i, o.set(l, i), s.push(l);
    }
  }
  return { index: i, matched: o, matches: s.reverse() };
}
function xb(n, e) {
  return n.type.side - e.type.side;
}
function Cb(n, e, t, r) {
  let i = e.locals(n), o = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let f = n.child(c);
      r(f, i, e.forChild(o, f), c), o += f.nodeSize;
    }
    return;
  }
  let s = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let f, u;
    for (; s < i.length && i[s].to == o; ) {
      let m = i[s++];
      m.widget && (f ? (u || (u = [f])).push(m) : f = m);
    }
    if (f)
      if (u) {
        u.sort(xb);
        for (let m = 0; m < u.length; m++)
          t(u[m], c, !!a);
      } else
        t(f, c, !!a);
    let h, d;
    if (a)
      d = -1, h = a, a = null;
    else if (c < n.childCount)
      d = c, h = n.child(c++);
    else
      break;
    for (let m = 0; m < l.length; m++)
      l[m].to <= o && l.splice(m--, 1);
    for (; s < i.length && i[s].from <= o && i[s].to > o; )
      l.push(i[s++]);
    let p = o + h.nodeSize;
    if (h.isText) {
      let m = p;
      s < i.length && i[s].from < m && (m = i[s].from);
      for (let y = 0; y < l.length; y++)
        l[y].to < m && (m = l[y].to);
      m < p && (a = h.cut(m - o), h = h.cut(0, m - o), p = m, d = -1);
    } else
      for (; s < i.length && i[s].to < p; )
        s++;
    let g = h.isInline && !h.isLeaf ? l.filter((m) => !m.inline) : l.slice();
    r(h, g, e.forChild(o, h), d), o = p;
  }
}
function kb(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function Eb(n, e, t, r) {
  for (let i = 0, o = 0; i < n.childCount && o <= r; ) {
    let s = n.child(i++), l = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let a = s.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (o += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (o >= t) {
      if (o >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Vl(n, e, t, r, i) {
  let o = [];
  for (let s = 0, l = 0; s < n.length; s++) {
    let a = n[s], c = l, f = l += a.size;
    c >= t || f <= e ? o.push(a) : (c < e && o.push(a.slice(0, e - c, r)), i && (o.push(i), i = void 0), f > t && o.push(a.slice(t - c, a.size, r)));
  }
  return o;
}
function Ya(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), o = i && i.size == 0, s = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (s < 0)
    return null;
  let l = r.resolve(s), a, c;
  if (ds(t)) {
    for (a = s; i && !i.node; )
      i = i.parent;
    let u = i.node;
    if (i && u.isAtom && E.isSelectable(u) && i.parent && !(u.isInline && X0(t.focusNode, t.focusOffset, i.dom))) {
      let h = i.posBefore;
      c = new E(s == h ? l : r.resolve(h));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let u = s, h = s;
      for (let d = 0; d < t.rangeCount; d++) {
        let p = t.getRangeAt(d);
        u = Math.min(u, n.docView.posFromDOM(p.startContainer, p.startOffset, 1)), h = Math.max(h, n.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (u < 0)
        return null;
      [a, s] = h == n.state.selection.anchor ? [h, u] : [u, h], l = r.resolve(s);
    } else
      a = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let f = r.resolve(a);
  if (!c) {
    let u = e == "pointer" || n.state.selection.head < l.pos && !o ? 1 : -1;
    c = Xa(n, f, l, u);
  }
  return c;
}
function Lp(n) {
  return n.editable ? n.hasFocus() : zp(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function mt(n, e = !1) {
  let t = n.state.selection;
  if (Bp(n, t), !!Lp(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && se) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && dn(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      Ob(n);
    else {
      let { anchor: r, head: i } = t, o, s;
      Nf && !(t instanceof R) && (t.$from.parent.inlineContent || (o = If(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (s = If(n, t.to))), n.docView.setSelection(r, i, n.root, e), Nf && (o && Rf(o), s && Rf(s)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Ab(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Nf = he || se && Ep < 63;
function If(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, o = r ? t.childNodes[r - 1] : null;
  if (he && i && i.contentEditable == "false")
    return Bs(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return Bs(i);
    if (o)
      return Bs(o);
  }
}
function Bs(n) {
  return n.contentEditable = "true", he && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Rf(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Ab(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Lp(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Ob(n) {
  let e = n.domSelection(), t = document.createRange();
  if (!e)
    return;
  let r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setStart(r.parentNode, te(r) + 1) : t.setStart(r, 0), t.collapse(!0), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && be && Vt <= 11 && (r.disabled = !0, r.disabled = !1);
}
function Bp(n, e) {
  if (e instanceof E) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (Df(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    Df(n);
}
function Df(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function Xa(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || R.between(e, t, r);
}
function $f(n) {
  return n.editable && !n.hasFocus() ? !1 : zp(n);
}
function zp(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Tb(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return dn(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Wl(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), o = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && T.findFrom(o, e);
}
function Tt(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Pf(n, e, t) {
  let r = n.state.selection;
  if (r instanceof R)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let s = n.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return Tt(n, new R(r.$anchor, s));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Wl(n.state, e);
        return i && i instanceof E ? Tt(n, i) : !1;
      } else if (!(Te && t.indexOf("m") > -1)) {
        let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? i.pos - o.nodeSize : i.pos;
        return o.isAtom || (s = n.docView.descAt(l)) && !s.contentDOM ? E.isSelectable(o) ? Tt(n, new E(e < 0 ? n.state.doc.resolve(i.pos - o.nodeSize) : i)) : oi ? Tt(n, new R(n.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof E && r.node.isInline)
      return Tt(n, new R(e > 0 ? r.$to : r.$from));
    {
      let i = Wl(n.state, e);
      return i ? Tt(n, i) : !1;
    }
  }
}
function ro(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function kr(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function En(n, e) {
  return e < 0 ? Mb(n) : Nb(n);
}
function Mb(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, o, s = !1;
  for (Le && t.nodeType == 1 && r < ro(t) && kr(t.childNodes[r], -1) && (s = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (kr(l, -1))
          i = t, o = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Fp(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && kr(l, -1); )
          i = t.parentNode, o = te(l), l = l.previousSibling;
        if (l)
          t = l, r = ro(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  s ? Ul(n, t, r) : i && Ul(n, i, o);
}
function Nb(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = ro(t), o, s;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (kr(l, 1))
        o = t, s = ++r;
      else
        break;
    } else {
      if (Fp(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && kr(l, 1); )
          o = l.parentNode, s = te(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = ro(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && Ul(n, o, s);
}
function Fp(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Ib(n, e) {
  for (; n && e == n.childNodes.length && !ii(n); )
    e = te(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function Rb(n, e) {
  for (; n && !e && !ii(n); )
    e = te(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function Ul(n, e, t) {
  if (e.nodeType != 3) {
    let o, s;
    (s = Ib(e, t)) ? (e = s, t = 0) : (o = Rb(e, t)) && (e = o, t = o.nodeValue.length);
  }
  let r = n.domSelection();
  if (!r)
    return;
  if (ds(r)) {
    let o = document.createRange();
    o.setEnd(e, t), o.setStart(e, t), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && mt(n);
  }, 50);
}
function _f(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(se || eb) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let o = n.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let o = n.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Lf(n, e, t) {
  let r = n.state.selection;
  if (r instanceof R && !r.empty || t.indexOf("s") > -1 || Te && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = Wl(n.state, e);
    if (s && s instanceof E)
      return Tt(n, s);
  }
  if (!i.parent.inlineContent) {
    let s = e < 0 ? i : o, l = r instanceof Pe ? T.near(s, e) : T.findFrom(s, e);
    return l ? Tt(n, l) : !1;
  }
  return !1;
}
function Bf(n, e) {
  if (!(n.state.selection instanceof R))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (o && !o.isText) {
    let s = n.state.tr;
    return e < 0 ? s.delete(t.pos - o.nodeSize, t.pos) : s.delete(t.pos, t.pos + o.nodeSize), n.dispatch(s), !0;
  }
  return !1;
}
function zf(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function Db(n) {
  if (!he || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    zf(n, r, "true"), setTimeout(() => zf(n, r, "false"), 20);
  }
  return !1;
}
function $b(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function Pb(n, e) {
  let t = e.keyCode, r = $b(e);
  if (t == 8 || Te && t == 72 && r == "c")
    return Bf(n, -1) || En(n, -1);
  if (t == 46 && !e.shiftKey || Te && t == 68 && r == "c")
    return Bf(n, 1) || En(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || Te && t == 66 && r == "c") {
    let i = t == 37 ? _f(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Pf(n, i, r) || En(n, i);
  } else if (t == 39 || Te && t == 70 && r == "c") {
    let i = t == 39 ? _f(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Pf(n, i, r) || En(n, i);
  } else {
    if (t == 38 || Te && t == 80 && r == "c")
      return Lf(n, -1, r) || En(n, -1);
    if (t == 40 || Te && t == 78 && r == "c")
      return Db(n) || Lf(n, 1, r) || En(n, 1);
    if (r == (Te ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function jp(n, e) {
  n.someProp("transformCopied", (d) => {
    e = d(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let d = r.firstChild;
    t.push(d.type.name, d.attrs != d.type.defaultAttrs ? d.attrs : null), r = d.content;
  }
  let s = n.someProp("clipboardSerializer") || er.fromSchema(n.state.schema), l = Gp(), a = l.createElement("div");
  a.appendChild(s.serializeFragment(r, { document: l }));
  let c = a.firstChild, f, u = 0;
  for (; c && c.nodeType == 1 && (f = Jp[c.nodeName.toLowerCase()]); ) {
    for (let d = f.length - 1; d >= 0; d--) {
      let p = l.createElement(f[d]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), u++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${o}${u ? ` -${u}` : ""} ${JSON.stringify(t)}`);
  let h = n.someProp("clipboardTextSerializer", (d) => d(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: h, slice: e };
}
function Vp(n, e, t, r, i) {
  let o = i.parent.type.spec.code, s, l;
  if (!t && !e)
    return null;
  let a = e && (r || o || !t);
  if (a) {
    if (n.someProp("transformPastedText", (h) => {
      e = h(e, o || r, n);
    }), o)
      return e ? new S(b.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : S.empty;
    let u = n.someProp("clipboardTextParser", (h) => h(e, i, r, n));
    if (u)
      l = u;
    else {
      let h = i.marks(), { schema: d } = n.state, p = er.fromSchema(d);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let m = s.appendChild(document.createElement("p"));
        g && m.appendChild(p.serializeNode(d.text(g, h)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (u) => {
      t = u(t, n);
    }), s = zb(t), oi && Fb(s);
  let c = s && s.querySelector("[data-pm-slice]"), f = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (f && f[3])
    for (let u = +f[3]; u > 0; u--) {
      let h = s.firstChild;
      for (; h && h.nodeType != 1; )
        h = h.nextSibling;
      if (!h)
        break;
      s = h;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || np.fromSchema(n.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(a || f),
    context: i,
    ruleFromNode(h) {
      return h.nodeName == "BR" && !h.nextSibling && h.parentNode && !_b.test(h.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), f)
    l = jb(Ff(l, +f[1], +f[2]), f[4]);
  else if (l = S.maxOpen(Lb(l.content, i), !0), l.openStart || l.openEnd) {
    let u = 0, h = 0;
    for (let d = l.content.firstChild; u < l.openStart && !d.type.spec.isolating; u++, d = d.firstChild)
      ;
    for (let d = l.content.lastChild; h < l.openEnd && !d.type.spec.isolating; h++, d = d.lastChild)
      ;
    l = Ff(l, u, h);
  }
  return n.someProp("transformPasted", (u) => {
    l = u(l, n);
  }), l;
}
const _b = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Lb(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), o, s = [];
    if (n.forEach((l) => {
      if (!s)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return s = null;
      if (c = s.length && o.length && Up(a, o, l, s[s.length - 1], 0))
        s[s.length - 1] = c;
      else {
        s.length && (s[s.length - 1] = Hp(s[s.length - 1], o.length));
        let f = Wp(l, a);
        s.push(f), i = i.matchType(f.type), o = a;
      }
    }), s)
      return b.from(s);
  }
  return n;
}
function Wp(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, b.from(n));
  return n;
}
function Up(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let o = Up(n, e, t, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(b.from(Wp(t, n, i + 1))));
  }
}
function Hp(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Hp(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(b.empty, !0);
  return n.copy(t.append(r));
}
function Hl(n, e, t, r, i, o) {
  let s = e < 0 ? n.firstChild : n.lastChild, l = s.content;
  return n.childCount > 1 && (o = 0), i < r - 1 && (l = Hl(l, e, t, r, i + 1, o)), i >= t && (l = e < 0 ? s.contentMatchAt(0).fillBefore(l, o <= i).append(l) : l.append(s.contentMatchAt(s.childCount).fillBefore(b.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, s.copy(l));
}
function Ff(n, e, t) {
  return e < n.openStart && (n = new S(Hl(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new S(Hl(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Jp = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let jf = null;
function Gp() {
  return jf || (jf = document.implementation.createHTMLDocument("title"));
}
function Bb(n) {
  let e = window.trustedTypes;
  return e ? e.createPolicy("detachedDocument", { createHTML: (t) => t }).createHTML(n) : n;
}
function zb(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = Gp().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && Jp[r[1].toLowerCase()]) && (n = i.map((o) => "<" + o + ">").join("") + n + i.map((o) => "</" + o + ">").reverse().join("")), t.innerHTML = Bb(n), i)
    for (let o = 0; o < i.length; o++)
      t = t.querySelector(i[o]) || t;
  return t;
}
function Fb(n) {
  let e = n.querySelectorAll(se ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function jb(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: o, openEnd: s } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = b.from(a.create(r[l + 1], i)), o++, s++;
  }
  return new S(i, o, s);
}
const de = {}, pe = {}, Vb = { touchstart: !0, touchmove: !0 };
class Wb {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function Ub(n) {
  for (let e in de) {
    let t = de[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      Jb(n, r) && !Qa(n, r) && (n.editable || !(r.type in pe)) && t(n, r);
    }, Vb[e] ? { passive: !0 } : void 0);
  }
  he && n.dom.addEventListener("input", () => null), Jl(n);
}
function zt(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function Hb(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function Jl(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => Qa(n, r));
  });
}
function Qa(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function Jb(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function Gb(n, e) {
  !Qa(n, e) && de[e.type] && (n.editable || !(e.type in pe)) && de[e.type](n, e);
}
pe.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !qp(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(De && se && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), Wn && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, en(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else n.someProp("handleKeyDown", (r) => r(n, t)) || Pb(n, t) ? t.preventDefault() : zt(n, "key");
};
pe.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
pe.keypress = (n, e) => {
  let t = e;
  if (qp(n, t) || !t.charCode || t.ctrlKey && !t.altKey || Te && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof R) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function gs(n) {
  return { left: n.clientX, top: n.clientY };
}
function Kb(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function Za(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let o = n.state.doc.resolve(r);
  for (let s = o.depth + 1; s > 0; s--)
    if (n.someProp(e, (l) => s > o.depth ? l(n, t, o.nodeAfter, o.before(s), i, !0) : l(n, t, o.node(s), o.before(s), i, !1)))
      return !0;
  return !1;
}
function Ln(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let r = n.state.tr.setSelection(e);
  r.setMeta("pointer", !0), n.dispatch(r);
}
function qb(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && E.isSelectable(r) ? (Ln(n, new E(t)), !0) : !1;
}
function Yb(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof E && (r = t.node);
  let o = n.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let l = s > o.depth ? o.nodeAfter : o.node(s);
    if (E.isSelectable(l)) {
      r && t.$from.depth > 0 && s >= t.$from.depth && o.before(t.$from.depth + 1) == t.$from.pos ? i = o.before(t.$from.depth) : i = o.before(s);
      break;
    }
  }
  return i != null ? (Ln(n, E.create(n.state.doc, i)), !0) : !1;
}
function Xb(n, e, t, r, i) {
  return Za(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (o) => o(n, e, r)) || (i ? Yb(n, t) : qb(n, t));
}
function Qb(n, e, t, r) {
  return Za(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function Zb(n, e, t, r) {
  return Za(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || e1(n, t, r);
}
function e1(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (Ln(n, R.create(r, 0, r.content.size)), !0) : !1;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let s = o > i.depth ? i.nodeAfter : i.node(o), l = i.before(o);
    if (s.inlineContent)
      Ln(n, R.create(r, l + 1, l + 1 + s.content.size));
    else if (E.isSelectable(s))
      Ln(n, E.create(r, l));
    else
      continue;
    return !0;
  }
}
function ec(n) {
  return io(n);
}
const Kp = Te ? "metaKey" : "ctrlKey";
de.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = ec(n), i = Date.now(), o = "singleClick";
  i - n.input.lastClick.time < 500 && Kb(t, n.input.lastClick) && !t[Kp] && (n.input.lastClick.type == "singleClick" ? o = "doubleClick" : n.input.lastClick.type == "doubleClick" && (o = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: o };
  let s = n.posAtCoords(gs(t));
  s && (o == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new t1(n, s, t, !!r)) : (o == "doubleClick" ? Qb : Zb)(n, s.pos, s.inside, t) ? t.preventDefault() : zt(n, "pointer"));
};
class t1 {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Kp], this.allowDefault = r.shiftKey;
    let o, s;
    if (t.inside > -1)
      o = e.state.doc.nodeAt(t.inside), s = t.inside;
    else {
      let f = e.state.doc.resolve(t.pos);
      o = f.parent, s = f.depth ? f.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.dom.nodeType == 1 ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof E && c.from <= s && c.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Le && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), zt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => mt(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(gs(e))), this.updateAllowDefault(e), this.allowDefault || !t ? zt(this.view, "pointer") : Xb(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    he && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    se && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Ln(this.view, T.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : zt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), zt(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
de.touchstart = (n) => {
  n.input.lastTouch = Date.now(), ec(n), zt(n, "pointer");
};
de.touchmove = (n) => {
  n.input.lastTouch = Date.now(), zt(n, "pointer");
};
de.contextmenu = (n) => ec(n);
function qp(n, e) {
  return n.composing ? !0 : he && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const n1 = De ? 5e3 : -1;
pe.compositionstart = pe.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof R && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), io(n, !0), n.markCursor = null;
    else if (io(n, !e.selection.empty), Le && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          let l = n.domSelection();
          l && l.collapse(s, s.nodeValue.length);
          break;
        } else
          i = s, o = -1;
      }
    }
    n.input.composing = !0;
  }
  Yp(n, n1);
};
pe.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, Yp(n, 20));
};
function Yp(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => io(n), e));
}
function Xp(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = i1()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function r1(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = q0(e.focusNode, e.focusOffset), r = Y0(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let i = r.pmViewDesc, o = n.domObserver.lastChangedTextNode;
    if (t == o || r == o)
      return o;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let s = t.pmViewDesc;
      if (!(!s || !s.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function i1() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function io(n, e = !1) {
  if (!(De && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), Xp(n), e || n.docView && n.docView.dirty) {
      let t = Ya(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !n.state.selection.empty ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function o1(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const Br = be && Vt < 15 || Wn && tb < 604;
de.copy = pe.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let o = Br ? null : t.clipboardData, s = r.content(), { dom: l, text: a } = jp(n, s);
  o ? (t.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : o1(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function s1(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function l1(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? zr(n, r.value, null, i, e) : zr(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function zr(n, e, t, r, i) {
  let o = Vp(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, o || S.empty)))
    return !0;
  if (!o)
    return !1;
  let s = s1(o), l = s ? n.state.tr.replaceSelectionWith(s, r) : n.state.tr.replaceSelection(o);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Qp(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
pe.paste = (n, e) => {
  let t = e;
  if (n.composing && !De)
    return;
  let r = Br ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && zr(n, Qp(r), r.getData("text/html"), i, t) ? t.preventDefault() : l1(n, t);
};
class Zp {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const eg = Te ? "altKey" : "ctrlKey";
de.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, o = i.empty ? null : n.posAtCoords(gs(t)), s;
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof E ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      s = E.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let u = n.docView.nearestDesc(t.target, !0);
      u && u.node.type.spec.draggable && u != n.docView && (s = E.create(n.state.doc, u.posBefore));
    }
  }
  let l = (s || n.state.selection).content(), { dom: a, text: c, slice: f } = jp(n, l);
  (!t.dataTransfer.files.length || !se || Ep > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(Br ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Br || t.dataTransfer.setData("text/plain", c), n.dragging = new Zp(f, !t[eg], s);
};
de.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
pe.dragover = pe.dragenter = (n, e) => e.preventDefault();
pe.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(gs(t));
  if (!i)
    return;
  let o = n.state.doc.resolve(i.pos), s = r && r.slice;
  s ? n.someProp("transformPasted", (p) => {
    s = p(s, n);
  }) : s = Vp(n, Qp(t.dataTransfer), Br ? null : t.dataTransfer.getData("text/html"), !1, o);
  let l = !!(r && !t[eg]);
  if (n.someProp("handleDrop", (p) => p(n, t, s || S.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!s)
    return;
  t.preventDefault();
  let a = s ? mp(n.state.doc, o.pos, s) : o.pos;
  a == null && (a = o.pos);
  let c = n.state.tr;
  if (l) {
    let { node: p } = r;
    p ? p.replace(c) : c.deleteSelection();
  }
  let f = c.mapping.map(a), u = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, h = c.doc;
  if (u ? c.replaceRangeWith(f, f, s.content.firstChild) : c.replaceRange(f, f, s), c.doc.eq(h))
    return;
  let d = c.doc.resolve(f);
  if (u && E.isSelectable(s.content.firstChild) && d.nodeAfter && d.nodeAfter.sameMarkup(s.content.firstChild))
    c.setSelection(new E(d));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((g, m, y, v) => p = v), c.setSelection(Xa(n, d, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
de.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && mt(n);
  }, 20));
};
de.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
de.beforeinput = (n, e) => {
  if (se && De && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (o) => o(n, en(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in pe)
  de[n] = pe[n];
function Fr(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class oo {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || ln, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: o, deleted: s } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return s ? null : new ue(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof oo && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Fr(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Ut {
  constructor(e, t) {
    this.attrs = e, this.spec = t || ln;
  }
  map(e, t, r, i) {
    let o = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= s ? null : new ue(o, s, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof Ut && Fr(this.attrs, e.attrs) && Fr(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Ut;
  }
  destroy() {
  }
}
class tc {
  constructor(e, t) {
    this.attrs = e, this.spec = t || ln;
  }
  map(e, t, r, i) {
    let o = e.mapResult(t.from + i, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(t.to + i, -1);
    return s.deleted || s.pos <= o.pos ? null : new ue(o.pos - r, s.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), o;
    return i == t.from && !(o = e.child(r)).isText && i + o.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof tc && Fr(this.attrs, e.attrs) && Fr(this.spec, e.spec);
  }
  destroy() {
  }
}
class ue {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new ue(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new ue(e, e, new oo(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new ue(e, t, new Ut(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new ue(e, t, new tc(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof Ut;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof oo;
  }
}
const Nn = [], ln = {};
class H {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : Nn, this.children = t.length ? t : Nn;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? so(t, e, 0, ln) : oe;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, o) {
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s];
      l.from <= t && l.to >= e && (!o || o(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < t && this.children[s + 1] > e) {
        let l = this.children[s] + 1;
        this.children[s + 2].findInner(e - l, t - l, r, i + l, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == oe || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || ln);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, o) {
    let s;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (s || (s = [])).push(a) : o.onRemove && o.onRemove(this.local[l].spec);
    }
    return this.children.length ? a1(this.children, s || [], e, t, r, i, o) : s ? new H(s.sort(an), Nn) : oe;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == oe ? H.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, o = 0;
    e.forEach((l, a) => {
      let c = a + r, f;
      if (f = ng(t, l, c)) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < a; )
          o += 3;
        i[o] == a ? i[o + 2] = i[o + 2].addInner(l, f, c + 1) : i.splice(o, 0, a, a + l.nodeSize, so(f, l, c + 1, ln)), o += 3;
      }
    });
    let s = tg(o ? rg(t) : t, -r);
    for (let l = 0; l < s.length; l++)
      s[l].type.valid(e, s[l]) || s.splice(l--, 1);
    return new H(s.length ? this.local.concat(s).sort(an) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == oe ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let s, l = r[o] + t, a = r[o + 1] + t;
      for (let f = 0, u; f < e.length; f++)
        (u = e[f]) && u.from > l && u.to < a && (e[f] = null, (s || (s = [])).push(u));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[o + 2].removeInner(s, l + 1);
      c != oe ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let l = 0; l < i.length; l++)
            i[l].eq(s, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new H(i, r) : oe;
  }
  forChild(e, t) {
    if (this == oe)
      return this;
    if (t.isLeaf)
      return H.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, s = o + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < s && a.to > o && a.type instanceof Ut) {
        let c = Math.max(o, a.from) - o, f = Math.min(s, a.to) - o;
        c < f && (i || (i = [])).push(a.copy(c, f));
      }
    }
    if (i) {
      let l = new H(i.sort(an), Nn);
      return r ? new Dt([l, r]) : l;
    }
    return r || oe;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof H) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return nc(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == oe)
      return Nn;
    if (e.inlineContent || !this.local.some(Ut.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Ut || t.push(this.local[r]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
H.empty = new H([], []);
H.removeOverlap = nc;
const oe = H.empty;
class Dt {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, ln));
    return Dt.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return H.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, t);
      o != oe && (o instanceof Dt ? r = r.concat(o.members) : r.push(o));
    }
    return Dt.from(r);
  }
  eq(e) {
    if (!(e instanceof Dt) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (o.length)
        if (!t)
          t = o;
        else {
          r && (t = t.slice(), r = !1);
          for (let s = 0; s < o.length; s++)
            t.push(o[s]);
        }
    }
    return t ? nc(r ? t : t.sort(an)) : Nn;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return oe;
      case 1:
        return e[0];
      default:
        return new Dt(e.every((t) => t instanceof H) ? e : e.reduce((t, r) => t.concat(r instanceof H ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
}
function a1(n, e, t, r, i, o, s) {
  let l = n.slice();
  for (let c = 0, f = o; c < t.maps.length; c++) {
    let u = 0;
    t.maps[c].forEach((h, d, p, g) => {
      let m = g - p - (d - h);
      for (let y = 0; y < l.length; y += 3) {
        let v = l[y + 1];
        if (v < 0 || h > v + f - u)
          continue;
        let k = l[y] + f - u;
        d >= k ? l[y + 1] = h <= k ? -2 : -1 : h >= f && m && (l[y] += m, l[y + 1] += m);
      }
      u += m;
    }), f = t.maps[c].map(f, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let f = t.map(n[c] + o), u = f - i;
      if (u < 0 || u >= r.content.size) {
        a = !0;
        continue;
      }
      let h = t.map(n[c + 1] + o, -1), d = h - i, { index: p, offset: g } = r.content.findIndex(u), m = r.maybeChild(p);
      if (m && g == u && g + m.nodeSize == d) {
        let y = l[c + 2].mapInner(t, m, f + 1, n[c] + o + 1, s);
        y != oe ? (l[c] = u, l[c + 1] = d, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = c1(l, n, e, t, i, o, s), f = so(c, r, 0, s);
    e = f.local;
    for (let u = 0; u < l.length; u += 3)
      l[u + 1] < 0 && (l.splice(u, 3), u -= 3);
    for (let u = 0, h = 0; u < f.children.length; u += 3) {
      let d = f.children[u];
      for (; h < l.length && l[h] < d; )
        h += 3;
      l.splice(h, 0, f.children[u], f.children[u + 1], f.children[u + 2]);
    }
  }
  return new H(e.sort(an), l);
}
function tg(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new ue(i.from + e, i.to + e, i.type));
  }
  return t;
}
function c1(n, e, t, r, i, o, s) {
  function l(a, c) {
    for (let f = 0; f < a.local.length; f++) {
      let u = a.local[f].map(r, i, c);
      u ? t.push(u) : s.onRemove && s.onRemove(a.local[f].spec);
    }
    for (let f = 0; f < a.children.length; f += 3)
      l(a.children[f + 2], a.children[f] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + o + 1);
  return t;
}
function ng(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let o = 0, s; o < n.length; o++)
    (s = n[o]) && s.from > t && s.to < r && ((i || (i = [])).push(s), n[o] = null);
  return i;
}
function rg(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function so(n, e, t, r) {
  let i = [], o = !1;
  e.forEach((l, a) => {
    let c = ng(n, l, a + t);
    if (c) {
      o = !0;
      let f = so(c, l, t + a + 1, r);
      f != oe && i.push(a, a + l.nodeSize, f);
    }
  });
  let s = tg(o ? rg(n) : n, -t).sort(an);
  for (let l = 0; l < s.length; l++)
    s[l].type.valid(e, s[l]) || (r.onRemove && r.onRemove(s[l].spec), s.splice(l--, 1));
  return s.length || i.length ? new H(s, i) : oe;
}
function an(n, e) {
  return n.from - e.from || n.to - e.to;
}
function nc(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == n && (e = n.slice()), e[i] = o.copy(o.from, r.to), Vf(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, o.from), Vf(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Vf(n, e, t) {
  for (; e < n.length && an(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function zs(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != oe && e.push(r);
  }), n.cursorWrapper && e.push(H.create(n.state.doc, [n.cursorWrapper.deco])), Dt.from(e);
}
const f1 = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, u1 = be && Vt <= 11;
class h1 {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class d1 {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new h1(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      be && Vt <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), u1 && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, f1)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if ($f(this.view)) {
      if (this.suppressingSelectionUpdates)
        return mt(this.view);
      if (be && Vt <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && dn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let o = e.focusNode; o; o = Lr(o))
      t.add(o);
    for (let o = e.anchorNode; o; o = Lr(o))
      if (t.has(o)) {
        r = o;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && $f(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, l = !1, a = [];
    if (e.editable)
      for (let f = 0; f < t.length; f++) {
        let u = this.registerMutation(t[f], a);
        u && (o = o < 0 ? u.from : Math.min(u.from, o), s = s < 0 ? u.to : Math.max(u.to, s), u.typeOver && (l = !0));
      }
    if (Le && a.length) {
      let f = a.filter((u) => u.nodeName == "BR");
      if (f.length == 2) {
        let [u, h] = f;
        u.parentNode && u.parentNode.parentNode == h.parentNode ? h.remove() : u.remove();
      } else {
        let { focusNode: u } = this.currentSelection;
        for (let h of f) {
          let d = h.parentNode;
          d && d.nodeName == "LI" && (!u || m1(e, u) != d) && h.remove();
        }
      }
    }
    let c = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && ds(r) && (c = Ya(e)) && c.eq(T.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, mt(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), p1(e)), this.handleDOMChange(o, s, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || mt(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let f = 0; f < e.addedNodes.length; f++) {
        let u = e.addedNodes[f];
        t.push(u), u.nodeType == 3 && (this.lastChangedTextNode = u);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (be && Vt <= 11 && e.addedNodes.length)
        for (let f = 0; f < e.addedNodes.length; f++) {
          let { previousSibling: u, nextSibling: h } = e.addedNodes[f];
          (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (i = u), (!h || Array.prototype.indexOf.call(e.addedNodes, h) < 0) && (o = h);
        }
      let s = i && i.parentNode == e.target ? te(i) + 1 : 0, l = r.localPosFromDOM(e.target, s, -1), a = o && o.parentNode == e.target ? te(o) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let Wf = /* @__PURE__ */ new WeakMap(), Uf = !1;
function p1(n) {
  if (!Wf.has(n) && (Wf.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = Le, Uf)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Uf = !0;
  }
}
function Hf(n, e) {
  let t = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset, s = n.domAtPos(n.state.selection.anchor);
  return dn(s.node, s.offset, i, o) && ([t, r, i, o] = [i, o, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: o };
}
function g1(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0];
    if (i)
      return Hf(n, i);
  }
  let t;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? Hf(n, t) : null;
}
function m1(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function y1(n, e, t) {
  let { node: r, fromOffset: i, toOffset: o, from: s, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, f = a.anchorNode;
  if (f && n.dom.contains(f.nodeType == 1 ? f : f.parentNode) && (c = [{ node: f, offset: a.anchorOffset }], ds(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), se && n.input.lastKeyCode === 8)
    for (let m = o; m > i; m--) {
      let y = r.childNodes[m - 1], v = y.pmViewDesc;
      if (y.nodeName == "BR" && !v) {
        o = m;
        break;
      }
      if (!v || v.size)
        break;
    }
  let u = n.state.doc, h = n.someProp("domParser") || np.fromSchema(n.state.schema), d = u.resolve(s), p = null, g = h.parse(r, {
    topNode: d.parent,
    topMatch: d.parent.contentMatchAt(d.index()),
    topOpen: !0,
    from: i,
    to: o,
    preserveWhitespace: d.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: b1,
    context: d
  });
  if (c && c[0].pos != null) {
    let m = c[0].pos, y = c[1] && c[1].pos;
    y == null && (y = m), p = { anchor: m + s, head: y + s };
  }
  return { doc: g, sel: p, from: s, to: l };
}
function b1(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (he && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || he && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const w1 = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function S1(n, e, t, r, i) {
  let o = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let C = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, U = Ya(n, C);
    if (U && !n.state.selection.eq(U)) {
      if (se && De && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (P) => P(n, en(13, "Enter"))))
        return;
      let ge = n.state.tr.setSelection(U);
      C == "pointer" ? ge.setMeta("pointer", !0) : C == "key" && ge.scrollIntoView(), o && ge.setMeta("composition", o), n.dispatch(ge);
    }
    return;
  }
  let s = n.state.doc.resolve(e), l = s.sharedDepth(t);
  e = s.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, c = y1(n, e, t), f = n.state.doc, u = f.slice(c.from, c.to), h, d;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (h = n.state.selection.to, d = "end") : (h = n.state.selection.from, d = "start"), n.input.lastKeyCode = null;
  let p = C1(u.content, c.doc.content, c.from, h, d);
  if (p && n.input.domChangeCount++, (Wn && n.input.lastIOSEnter > Date.now() - 225 || De) && i.some((C) => C.nodeType == 1 && !w1.test(C.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", (C) => C(n, en(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && a instanceof R && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let C = Jf(n, n.state.doc, c.sel);
        if (C && !C.eq(n.state.selection)) {
          let U = n.state.tr.setSelection(C);
          o && U.setMeta("composition", o), n.dispatch(U);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof R && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), be && Vt <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let g = c.doc.resolveNoCache(p.start - c.from), m = c.doc.resolveNoCache(p.endB - c.from), y = f.resolve(p.start), v = g.sameParent(m) && g.parent.inlineContent && y.end() >= p.endA, k;
  if ((Wn && n.input.lastIOSEnter > Date.now() - 225 && (!v || i.some((C) => C.nodeName == "DIV" || C.nodeName == "P")) || !v && g.pos < c.doc.content.size && !g.sameParent(m) && (k = T.findFrom(c.doc.resolve(g.pos + 1), 1, !0)) && k.head == m.pos) && n.someProp("handleKeyDown", (C) => C(n, en(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && x1(f, p.start, p.endA, g, m) && n.someProp("handleKeyDown", (C) => C(n, en(8, "Backspace")))) {
    De && se && n.domObserver.suppressSelectionUpdates();
    return;
  }
  se && De && p.endB == p.start && (n.input.lastAndroidDelete = Date.now()), De && !v && g.start() != m.start() && m.parentOffset == 0 && g.depth == m.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, m = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(C) {
      return C(n, en(13, "Enter"));
    });
  }, 20));
  let A = p.start, O = p.endA, x, N, $;
  if (v) {
    if (g.pos == m.pos)
      be && Vt <= 11 && g.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => mt(n), 20)), x = n.state.tr.delete(A, O), N = f.resolve(p.start).marksAcross(f.resolve(p.endA));
    else if (
      // Adding or removing a mark
      p.endA == p.endB && ($ = v1(g.parent.content.cut(g.parentOffset, m.parentOffset), y.parent.content.cut(y.parentOffset, p.endA - y.start())))
    )
      x = n.state.tr, $.type == "add" ? x.addMark(A, O, $.mark) : x.removeMark(A, O, $.mark);
    else if (g.parent.child(g.index()).isText && g.index() == m.index() - (m.textOffset ? 0 : 1)) {
      let C = g.parent.textBetween(g.parentOffset, m.parentOffset);
      if (n.someProp("handleTextInput", (U) => U(n, A, O, C)))
        return;
      x = n.state.tr.insertText(C, A, O);
    }
  }
  if (x || (x = n.state.tr.replace(A, O, c.doc.slice(p.start - c.from, p.endB - c.from))), c.sel) {
    let C = Jf(n, x.doc, c.sel);
    C && !(se && De && n.composing && C.empty && (p.start != p.endB || n.input.lastAndroidDelete < Date.now() - 100) && (C.head == A || C.head == x.mapping.map(O) - 1) || be && C.empty && C.head == A) && x.setSelection(C);
  }
  N && x.ensureMarks(N), o && x.setMeta("composition", o), n.dispatch(x.scrollIntoView());
}
function Jf(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : Xa(n, e.resolve(t.anchor), e.resolve(t.head));
}
function v1(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, o = r, s, l, a;
  for (let f = 0; f < r.length; f++)
    i = r[f].removeFromSet(i);
  for (let f = 0; f < t.length; f++)
    o = t[f].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    l = i[0], s = "add", a = (f) => f.mark(l.addToSet(f.marks));
  else if (i.length == 0 && o.length == 1)
    l = o[0], s = "remove", a = (f) => f.mark(l.removeFromSet(f.marks));
  else
    return null;
  let c = [];
  for (let f = 0; f < e.childCount; f++)
    c.push(a(e.child(f)));
  if (b.from(c).eq(n))
    return { mark: l, type: s };
}
function x1(n, e, t, r, i) {
  if (
    // The content must have shrunk
    t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    Fs(r, !0, !1) < i.pos
  )
    return !1;
  let o = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = o.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let s = n.resolve(Fs(o, !0, !0));
  return !s.parent.isTextblock || s.pos > t || Fs(s, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function Fs(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let o = n.node(r).maybeChild(n.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function C1(n, e, t, r, i) {
  let o = n.findDiffStart(e, t);
  if (o == null)
    return null;
  let { a: s, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, o - Math.min(s, l));
    r -= s + a - o;
  }
  if (s < o && n.size < e.size) {
    let a = r <= o && r >= s ? o - r : 0;
    o -= a, o && o < e.size && Gf(e.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), l = o + (l - s), s = o;
  } else if (l < o) {
    let a = r <= o && r >= l ? o - r : 0;
    o -= a, o && o < n.size && Gf(n.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), s = o + (s - l), l = o;
  }
  return { start: o, endA: s, endB: l };
}
function Gf(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class sR {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Wb(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Qf), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Yf(this), qf(this), this.nodeViews = Xf(this), this.docView = Tf(this.state.doc, Kf(this), zs(this), this.dom, this), this.domObserver = new d1(this, (r, i, o, s) => S1(this, r, i, o, s)), this.domObserver.start(), Ub(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Jl(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Qf), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, o = !1, s = !1;
    e.storedMarks && this.composing && (Xp(this), s = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let d = Xf(this);
      E1(d, this.nodeViews) && (this.nodeViews = d, o = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && Jl(this), this.editable = Yf(this), qf(this);
    let a = zs(this), c = Kf(this), f = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", u = o || !this.docView.matchesNode(e.doc, c, a);
    (u || !e.selection.eq(i.selection)) && (s = !0);
    let h = f == "preserve" && s && this.dom.style.overflowAnchor == null && ib(this);
    if (s) {
      this.domObserver.stop();
      let d = u && (be || se) && !this.composing && !i.selection.empty && !e.selection.empty && k1(i.selection, e.selection);
      if (u) {
        let p = se ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = r1(this)), (o || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = Tf(e.doc, c, a, this.dom, this)), p && !this.trackWrites && (d = !0);
      }
      d || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Tb(this)) ? mt(this, d) : (Bp(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), f == "reset" ? this.dom.scrollTop = 0 : f == "to selection" ? this.scrollToSelection() : h && ob(h);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this))) if (this.state.selection instanceof E) {
      let t = this.docView.domAfterPos(this.state.selection.from);
      t.nodeType == 1 && xf(this, t.getBoundingClientRect(), e);
    } else
      xf(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let o = r.from + (this.state.doc.content.size - t.doc.content.size);
      (o > 0 && this.state.doc.nodeAt(o)) == r.node && (i = o);
    }
    this.dragging = new Zp(e.slice, e.move, i < 0 ? void 0 : E.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let l = this.directPlugins[s].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let l = o[s].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (be) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && sb(this.dom), mt(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return ub(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return Np(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return mb(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return zr(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return zr(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (Hb(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], zs(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, G0());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return Gb(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? he && this.root.nodeType === 11 && Q0(this.dom.ownerDocument) == this.dom && g1(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function Kf(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [ue.node(0, n.state.doc.content.size, e)];
}
function qf(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: ue.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Yf(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function k1(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function Xf(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function E1(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function Qf(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Ht = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, lo = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, A1 = typeof navigator < "u" && /Mac/.test(navigator.platform), O1 = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ne = 0; ne < 10; ne++) Ht[48 + ne] = Ht[96 + ne] = String(ne);
for (var ne = 1; ne <= 24; ne++) Ht[ne + 111] = "F" + ne;
for (var ne = 65; ne <= 90; ne++)
  Ht[ne] = String.fromCharCode(ne + 32), lo[ne] = String.fromCharCode(ne);
for (var js in Ht) lo.hasOwnProperty(js) || (lo[js] = Ht[js]);
function T1(n) {
  var e = A1 && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || O1 && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? lo : Ht)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const M1 = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function N1(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      M1 ? s = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), s && (t = "Meta-" + t), o && (t = "Shift-" + t), t;
}
function I1(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[N1(t)] = n[t];
  return e;
}
function Vs(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function lR(n) {
  return new bn({ props: { handleKeyDown: rc(n) } });
}
function rc(n) {
  let e = I1(n);
  return function(t, r) {
    let i = T1(r), o, s = e[Vs(i, r)];
    if (s && s(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[Vs(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (o = Ht[r.keyCode]) && o != i) {
        let l = e[Vs(o, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const aR = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function ig(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const cR = (n, e, t) => {
  let r = ig(n, t);
  if (!r)
    return !1;
  let i = ic(r);
  if (!i) {
    let s = r.blockRange(), l = s && ni(s);
    return l == null ? !1 : (e && e(n.tr.lift(s, l).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (ag(n, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Un(o, "end") || E.isSelectable(o)))
    for (let s = r.depth; ; s--) {
      let l = us(n.doc, r.before(s), r.after(s), S.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = n.tr.step(l);
          a.setSelection(Un(o, "end") ? T.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : E.create(a.doc, i.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || r.node(s - 1).childCount > 1)
        break;
    }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, fR = (n, e, t) => {
  let r = ig(n, t);
  if (!r)
    return !1;
  let i = ic(r);
  return i ? og(n, i, e) : !1;
}, uR = (n, e, t) => {
  let r = sg(n, t);
  if (!r)
    return !1;
  let i = oc(r);
  return i ? og(n, i, e) : !1;
};
function og(n, e, t) {
  let r = e.nodeBefore, i = r, o = e.pos - 1;
  for (; !i.isTextblock; o--) {
    if (i.type.spec.isolating)
      return !1;
    let f = i.lastChild;
    if (!f)
      return !1;
    i = f;
  }
  let s = e.nodeAfter, l = s, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let f = l.firstChild;
    if (!f)
      return !1;
    l = f;
  }
  let c = us(n.doc, o, a, S.empty);
  if (!c || c.from != o || c instanceof ee && c.slice.size >= a - o)
    return !1;
  if (t) {
    let f = n.tr.step(c);
    f.setSelection(R.create(f.doc, o)), t(f.scrollIntoView());
  }
  return !0;
}
function Un(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const hR = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    o = ic(r);
  }
  let s = o && o.nodeBefore;
  return !s || !E.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(E.create(n.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function ic(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function sg(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const dR = (n, e, t) => {
  let r = sg(n, t);
  if (!r)
    return !1;
  let i = oc(r);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (ag(n, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Un(o, "start") || E.isSelectable(o))) {
    let s = us(n.doc, r.before(), r.after(), S.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let l = n.tr.step(s);
        l.setSelection(Un(o, "start") ? T.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : E.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, pR = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    o = oc(r);
  }
  let s = o && o.nodeAfter;
  return !s || !E.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(E.create(n.doc, o.pos)).scrollIntoView()), !0);
};
function oc(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const gR = (n, e) => {
  let t = n.selection, r = t instanceof E, i;
  if (r) {
    if (t.node.isTextblock || !ri(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = gp(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let o = n.tr.join(i);
    r && o.setSelection(E.create(o.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, mR = (n, e) => {
  let t = n.selection, r;
  if (t instanceof E) {
    if (t.node.isTextblock || !ri(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = gp(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, yR = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), o = i && ni(i);
  return o == null ? !1 : (e && e(n.tr.lift(i, o).scrollIntoView()), !0);
}, bR = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function lg(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const wR = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), o = t.indexAfter(-1), s = lg(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, s.createAndFill());
    a.setSelection(T.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, SR = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof Pe || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = lg(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(s, o.createAndFill());
    l.setSelection(R.create(l.doc, s + 1)), e(l.scrollIntoView());
  }
  return !0;
}, vR = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let o = t.before();
    if (dp(n.doc, o))
      return e && e(n.tr.split(o).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && ni(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, xR = (n, e) => {
  let { $from: t, to: r } = n.selection, i, o = t.sharedDepth(r);
  return o == 0 ? !1 : (i = t.before(o), e && e(n.tr.setSelection(E.create(n.doc, i))), !0);
};
function R1(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || ri(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0);
}
function ag(n, e, t, r) {
  let i = e.nodeBefore, o = e.nodeAfter, s, l, a = i.type.spec.isolating || o.type.spec.isolating;
  if (!a && R1(n, e, t))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (s = (l = i.contentMatchAt(i.childCount)).findWrapping(o.type)) && l.matchType(s[0] || o.type).validEnd) {
    if (t) {
      let d = e.pos + o.nodeSize, p = b.empty;
      for (let y = s.length - 1; y >= 0; y--)
        p = b.from(s[y].create(null, p));
      p = b.from(i.copy(p));
      let g = n.tr.step(new re(e.pos - 1, d, e.pos, d, new S(p, 1, 0), s.length, !0)), m = g.doc.resolve(d + 2 * s.length);
      m.nodeAfter && m.nodeAfter.type == i.type && ri(g.doc, m.pos) && g.join(m.pos), t(g.scrollIntoView());
    }
    return !0;
  }
  let f = o.type.spec.isolating || r > 0 && a ? null : T.findFrom(e, 1), u = f && f.$from.blockRange(f.$to), h = u && ni(u);
  if (h != null && h >= e.depth)
    return t && t(n.tr.lift(u, h).scrollIntoView()), !0;
  if (c && Un(o, "start", !0) && Un(i, "end")) {
    let d = i, p = [];
    for (; p.push(d), !d.isTextblock; )
      d = d.lastChild;
    let g = o, m = 1;
    for (; !g.isTextblock; g = g.firstChild)
      m++;
    if (d.canReplace(d.childCount, d.childCount, g.content)) {
      if (t) {
        let y = b.empty;
        for (let k = p.length - 1; k >= 0; k--)
          y = b.from(p[k].copy(y));
        let v = n.tr.step(new re(e.pos - p.length, e.pos + o.nodeSize, e.pos + m, e.pos + o.nodeSize - m, new S(y, p.length, 0), 0, !0));
        t(v.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function cg(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (t && t(e.tr.setSelection(R.create(e.doc, n < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const CR = cg(-1), kR = cg(1);
function ER(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o), l = s && fp(s, n, e);
    return l ? (r && r(t.tr.wrap(s, l).scrollIntoView()), !0) : !1;
  };
}
function AR(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let o = 0; o < t.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: l } } = t.selection.ranges[o];
      t.doc.nodesBetween(s, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let f = t.doc.resolve(c), u = f.index();
            i = f.parent.canReplaceWith(u, u + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let o = t.tr;
      for (let s = 0; s < t.selection.ranges.length; s++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[s];
        o.setBlockType(l, a, n, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function OR(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o), l = !1, a = s;
    if (!s)
      return !1;
    if (s.depth >= 2 && i.node(s.depth - 1).type.compatibleContent(n) && s.startIndex == 0) {
      if (i.index(s.depth - 1) == 0)
        return !1;
      let f = t.doc.resolve(s.start - 2);
      a = new Pr(f, f, s.depth), s.endIndex < s.parent.childCount && (s = new Pr(i, t.doc.resolve(o.end(s.depth)), s.depth)), l = !0;
    }
    let c = fp(a, n, e, s);
    return c ? (r && r(D1(t.tr, s, c, l, n).scrollIntoView()), !0) : !1;
  };
}
function D1(n, e, t, r, i) {
  let o = b.empty;
  for (let f = t.length - 1; f >= 0; f--)
    o = b.from(t[f].type.create(t[f].attrs, o));
  n.step(new re(e.start - (r ? 2 : 0), e.end, e.start, e.end, new S(o, 0, 0), t.length, !0));
  let s = 0;
  for (let f = 0; f < t.length; f++)
    t[f].type == i && (s = f + 1);
  let l = t.length - s, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let f = e.startIndex, u = e.endIndex, h = !0; f < u; f++, h = !1)
    !h && dp(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(f).nodeSize;
  return n;
}
function TR(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s) => s.childCount > 0 && s.firstChild.type == n);
    return o ? t ? r.node(o.depth - 1).type == n ? $1(e, t, n, o) : P1(e, t, o) : !0 : !1;
  };
}
function $1(n, e, t, r) {
  let i = n.tr, o = r.end, s = r.$to.end(r.depth);
  o < s && (i.step(new re(o - 1, s, o, s, new S(b.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Pr(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
  const l = ni(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.mapping.map(o, -1) - 1;
  return ri(i.doc, a) && i.join(a), e(i.scrollIntoView()), !0;
}
function P1(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let d = t.end, p = t.endIndex - 1, g = t.startIndex; p > g; p--)
    d -= i.child(p).nodeSize, r.delete(d - 1, d + 1);
  let o = r.doc.resolve(t.start), s = o.nodeAfter;
  if (r.mapping.map(t.end) != t.start + o.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = o.node(-1), f = o.index(-1);
  if (!c.canReplace(f + (l ? 0 : 1), f + 1, s.content.append(a ? b.empty : b.from(i))))
    return !1;
  let u = o.pos, h = u + s.nodeSize;
  return r.step(new re(u - (l ? 1 : 0), h + (a ? 1 : 0), u + 1, h - 1, new S((l ? b.empty : b.from(i.copy(b.empty))).append(a ? b.empty : b.from(i.copy(b.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function MR(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let l = o.parent, a = l.child(s - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, f = b.from(c ? n.create() : null), u = new S(b.from(n.create(null, b.from(l.type.create(null, f)))), c ? 3 : 1, 0), h = o.start, d = o.end;
      t(e.tr.step(new re(h - (c ? 3 : 1), d, h, d, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function fg(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = fg(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function NR() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = fg(n)) && (r && (r += " "), r += e);
  return r;
}
const sc = "-", _1 = (n) => {
  const e = B1(n), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = n;
  return {
    getClassGroupId: (s) => {
      const l = s.split(sc);
      return l[0] === "" && l.length !== 1 && l.shift(), ug(l, e) || L1(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const a = t[s] || [];
      return l && r[s] ? [...a, ...r[s]] : a;
    }
  };
}, ug = (n, e) => {
  var s;
  if (n.length === 0)
    return e.classGroupId;
  const t = n[0], r = e.nextPart.get(t), i = r ? ug(n.slice(1), r) : void 0;
  if (i)
    return i;
  if (e.validators.length === 0)
    return;
  const o = n.join(sc);
  return (s = e.validators.find(({
    validator: l
  }) => l(o))) == null ? void 0 : s.classGroupId;
}, Zf = /^\[(.+)\]$/, L1 = (n) => {
  if (Zf.test(n)) {
    const e = Zf.exec(n)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, B1 = (n) => {
  const {
    theme: e,
    prefix: t
  } = n, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return F1(Object.entries(n.classGroups), t).forEach(([o, s]) => {
    Gl(s, r, o, e);
  }), r;
}, Gl = (n, e, t, r) => {
  n.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? e : eu(e, i);
      o.classGroupId = t;
      return;
    }
    if (typeof i == "function") {
      if (z1(i)) {
        Gl(i(r), e, t, r);
        return;
      }
      e.validators.push({
        validator: i,
        classGroupId: t
      });
      return;
    }
    Object.entries(i).forEach(([o, s]) => {
      Gl(s, eu(e, o), t, r);
    });
  });
}, eu = (n, e) => {
  let t = n;
  return e.split(sc).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, z1 = (n) => n.isThemeGetter, F1 = (n, e) => e ? n.map(([t, r]) => {
  const i = r.map((o) => typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([s, l]) => [e + s, l])) : o);
  return [t, i];
}) : n, j1 = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const i = (o, s) => {
    t.set(o, s), e++, e > n && (e = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let s = t.get(o);
      if (s !== void 0)
        return s;
      if ((s = r.get(o)) !== void 0)
        return i(o, s), s;
    },
    set(o, s) {
      t.has(o) ? t.set(o, s) : i(o, s);
    }
  };
}, hg = "!", V1 = (n) => {
  const {
    separator: e,
    experimentalParseClassName: t
  } = n, r = e.length === 1, i = e[0], o = e.length, s = (l) => {
    const a = [];
    let c = 0, f = 0, u;
    for (let m = 0; m < l.length; m++) {
      let y = l[m];
      if (c === 0) {
        if (y === i && (r || l.slice(m, m + o) === e)) {
          a.push(l.slice(f, m)), f = m + o;
          continue;
        }
        if (y === "/") {
          u = m;
          continue;
        }
      }
      y === "[" ? c++ : y === "]" && c--;
    }
    const h = a.length === 0 ? l : l.substring(f), d = h.startsWith(hg), p = d ? h.substring(1) : h, g = u && u > f ? u - f : void 0;
    return {
      modifiers: a,
      hasImportantModifier: d,
      baseClassName: p,
      maybePostfixModifierPosition: g
    };
  };
  return t ? (l) => t({
    className: l,
    parseClassName: s
  }) : s;
}, W1 = (n) => {
  if (n.length <= 1)
    return n;
  const e = [];
  let t = [];
  return n.forEach((r) => {
    r[0] === "[" ? (e.push(...t.sort(), r), t = []) : t.push(r);
  }), e.push(...t.sort()), e;
}, U1 = (n) => ({
  cache: j1(n.cacheSize),
  parseClassName: V1(n),
  ..._1(n)
}), H1 = /\s+/, J1 = (n, e) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: i
  } = e, o = [], s = n.trim().split(H1);
  let l = "";
  for (let a = s.length - 1; a >= 0; a -= 1) {
    const c = s[a], {
      modifiers: f,
      hasImportantModifier: u,
      baseClassName: h,
      maybePostfixModifierPosition: d
    } = t(c);
    let p = !!d, g = r(p ? h.substring(0, d) : h);
    if (!g) {
      if (!p) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (g = r(h), !g) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      p = !1;
    }
    const m = W1(f).join(":"), y = u ? m + hg : m, v = y + g;
    if (o.includes(v))
      continue;
    o.push(v);
    const k = i(g, p);
    for (let A = 0; A < k.length; ++A) {
      const O = k[A];
      o.push(y + O);
    }
    l = c + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function G1() {
  let n = 0, e, t, r = "";
  for (; n < arguments.length; )
    (e = arguments[n++]) && (t = dg(e)) && (r && (r += " "), r += t);
  return r;
}
const dg = (n) => {
  if (typeof n == "string")
    return n;
  let e, t = "";
  for (let r = 0; r < n.length; r++)
    n[r] && (e = dg(n[r])) && (t && (t += " "), t += e);
  return t;
};
function K1(n, ...e) {
  let t, r, i, o = s;
  function s(a) {
    const c = e.reduce((f, u) => u(f), n());
    return t = U1(c), r = t.cache.get, i = t.cache.set, o = l, l(a);
  }
  function l(a) {
    const c = r(a);
    if (c)
      return c;
    const f = J1(a, t);
    return i(a, f), f;
  }
  return function() {
    return o(G1.apply(null, arguments));
  };
}
const B = (n) => {
  const e = (t) => t[n] || [];
  return e.isThemeGetter = !0, e;
}, pg = /^\[(?:([a-z-]+):)?(.+)\]$/i, q1 = /^\d+\/\d+$/, Y1 = /* @__PURE__ */ new Set(["px", "full", "screen"]), X1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Q1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Z1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ew = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, tw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ct = (n) => Bn(n) || Y1.has(n) || q1.test(n), kt = (n) => tr(n, "length", cw), Bn = (n) => !!n && !Number.isNaN(Number(n)), Ws = (n) => tr(n, "number", Bn), ur = (n) => !!n && Number.isInteger(Number(n)), nw = (n) => n.endsWith("%") && Bn(n.slice(0, -1)), M = (n) => pg.test(n), Et = (n) => X1.test(n), rw = /* @__PURE__ */ new Set(["length", "size", "percentage"]), iw = (n) => tr(n, rw, gg), ow = (n) => tr(n, "position", gg), sw = /* @__PURE__ */ new Set(["image", "url"]), lw = (n) => tr(n, sw, uw), aw = (n) => tr(n, "", fw), hr = () => !0, tr = (n, e, t) => {
  const r = pg.exec(n);
  return r ? r[1] ? typeof e == "string" ? r[1] === e : e.has(r[1]) : t(r[2]) : !1;
}, cw = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Q1.test(n) && !Z1.test(n)
), gg = () => !1, fw = (n) => ew.test(n), uw = (n) => tw.test(n), hw = () => {
  const n = B("colors"), e = B("spacing"), t = B("blur"), r = B("brightness"), i = B("borderColor"), o = B("borderRadius"), s = B("borderSpacing"), l = B("borderWidth"), a = B("contrast"), c = B("grayscale"), f = B("hueRotate"), u = B("invert"), h = B("gap"), d = B("gradientColorStops"), p = B("gradientColorStopPositions"), g = B("inset"), m = B("margin"), y = B("opacity"), v = B("padding"), k = B("saturate"), A = B("scale"), O = B("sepia"), x = B("skew"), N = B("space"), $ = B("translate"), C = () => ["auto", "contain", "none"], U = () => ["auto", "hidden", "clip", "visible", "scroll"], ge = () => ["auto", M, e], P = () => [M, e], we = () => ["", ct, kt], ke = () => ["auto", Bn, M], Ct = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Ee = () => ["solid", "dashed", "dotted", "double", "none"], ot = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], st = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], cr = () => ["", "0", M], Zc = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], lt = () => [Bn, M];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [hr],
      spacing: [ct, kt],
      blur: ["none", "", Et, M],
      brightness: lt(),
      borderColor: [n],
      borderRadius: ["none", "", "full", Et, M],
      borderSpacing: P(),
      borderWidth: we(),
      contrast: lt(),
      grayscale: cr(),
      hueRotate: lt(),
      invert: cr(),
      gap: P(),
      gradientColorStops: [n],
      gradientColorStopPositions: [nw, kt],
      inset: ge(),
      margin: ge(),
      opacity: lt(),
      padding: P(),
      saturate: lt(),
      scale: lt(),
      sepia: cr(),
      skew: lt(),
      space: P(),
      translate: P()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", M]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Et]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Zc()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Zc()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Ct(), M]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: U()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": U()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": U()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ur, M]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ge()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", M]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: cr()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: cr()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ur, M]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [hr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ur, M]
        }, M]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ke()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ke()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [hr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ur, M]
        }, M]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ke()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ke()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", M]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", M]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...st()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...st(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...st(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [N]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [N]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", M, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [M, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [M, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [Et]
        }, Et]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [M, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [M, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [M, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [M, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Et, kt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ws]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [hr]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", M]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Bn, Ws]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ct, M]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", M]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", M]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [n]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [n]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ct, kt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ct, M]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [n]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", M]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Ct(), ow]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", iw]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, lw]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [n]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [p]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [d]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [d]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [d]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Ee(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Ee()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...Ee()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ct, M]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ct, kt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [n]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: we()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [n]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ct, kt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [n]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Et, aw]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [hr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ot(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ot()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [a]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Et, M]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [O]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [a]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [O]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", M]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: lt()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", M]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: lt()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", M]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [A]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [A]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [A]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ur, M]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [$]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [$]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [x]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [x]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", M]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", n]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [n]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", M]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [n, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ct, kt, Ws]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [n, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, IR = /* @__PURE__ */ K1(hw);
var mg = typeof global == "object" && global && global.Object === Object && global, dw = typeof self == "object" && self && self.Object === Object && self, tt = mg || dw || Function("return this")(), Qe = tt.Symbol, yg = Object.prototype, pw = yg.hasOwnProperty, gw = yg.toString, dr = Qe ? Qe.toStringTag : void 0;
function mw(n) {
  var e = pw.call(n, dr), t = n[dr];
  try {
    n[dr] = void 0;
    var r = !0;
  } catch {
  }
  var i = gw.call(n);
  return r && (e ? n[dr] = t : delete n[dr]), i;
}
var yw = Object.prototype, bw = yw.toString;
function ww(n) {
  return bw.call(n);
}
var Sw = "[object Null]", vw = "[object Undefined]", tu = Qe ? Qe.toStringTag : void 0;
function wn(n) {
  return n == null ? n === void 0 ? vw : Sw : tu && tu in Object(n) ? mw(n) : ww(n);
}
function Jt(n) {
  return n != null && typeof n == "object";
}
var xw = "[object Symbol]";
function ms(n) {
  return typeof n == "symbol" || Jt(n) && wn(n) == xw;
}
function bg(n, e) {
  for (var t = -1, r = n == null ? 0 : n.length, i = Array(r); ++t < r; )
    i[t] = e(n[t], t, n);
  return i;
}
var Ze = Array.isArray, Cw = 1 / 0, nu = Qe ? Qe.prototype : void 0, ru = nu ? nu.toString : void 0;
function ao(n) {
  if (typeof n == "string")
    return n;
  if (Ze(n))
    return bg(n, ao) + "";
  if (ms(n))
    return ru ? ru.call(n) : "";
  var e = n + "";
  return e == "0" && 1 / n == -Cw ? "-0" : e;
}
var kw = /\s/;
function Ew(n) {
  for (var e = n.length; e-- && kw.test(n.charAt(e)); )
    ;
  return e;
}
var Aw = /^\s+/;
function Ow(n) {
  return n && n.slice(0, Ew(n) + 1).replace(Aw, "");
}
function Gt(n) {
  var e = typeof n;
  return n != null && (e == "object" || e == "function");
}
var iu = NaN, Tw = /^[-+]0x[0-9a-f]+$/i, Mw = /^0b[01]+$/i, Nw = /^0o[0-7]+$/i, Iw = parseInt;
function Kl(n) {
  if (typeof n == "number")
    return n;
  if (ms(n))
    return iu;
  if (Gt(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = Gt(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = Ow(n);
  var t = Mw.test(n);
  return t || Nw.test(n) ? Iw(n.slice(2), t ? 2 : 8) : Tw.test(n) ? iu : +n;
}
var ou = 1 / 0, Rw = 17976931348623157e292;
function Dw(n) {
  if (!n)
    return n === 0 ? n : 0;
  if (n = Kl(n), n === ou || n === -ou) {
    var e = n < 0 ? -1 : 1;
    return e * Rw;
  }
  return n === n ? n : 0;
}
function $w(n) {
  var e = Dw(n), t = e % 1;
  return e === e ? t ? e - t : e : 0;
}
function lc(n) {
  return n;
}
var Pw = "[object AsyncFunction]", _w = "[object Function]", Lw = "[object GeneratorFunction]", Bw = "[object Proxy]";
function wg(n) {
  if (!Gt(n))
    return !1;
  var e = wn(n);
  return e == _w || e == Lw || e == Pw || e == Bw;
}
var Us = tt["__core-js_shared__"], su = function() {
  var n = /[^.]+$/.exec(Us && Us.keys && Us.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function zw(n) {
  return !!su && su in n;
}
var Fw = Function.prototype, jw = Fw.toString;
function Sn(n) {
  if (n != null) {
    try {
      return jw.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var Vw = /[\\^$.*+?()[\]{}|]/g, Ww = /^\[object .+?Constructor\]$/, Uw = Function.prototype, Hw = Object.prototype, Jw = Uw.toString, Gw = Hw.hasOwnProperty, Kw = RegExp(
  "^" + Jw.call(Gw).replace(Vw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qw(n) {
  if (!Gt(n) || zw(n))
    return !1;
  var e = wg(n) ? Kw : Ww;
  return e.test(Sn(n));
}
function Yw(n, e) {
  return n == null ? void 0 : n[e];
}
function vn(n, e) {
  var t = Yw(n, e);
  return qw(t) ? t : void 0;
}
var ql = vn(tt, "WeakMap");
function Xw(n, e, t) {
  switch (t.length) {
    case 0:
      return n.call(e);
    case 1:
      return n.call(e, t[0]);
    case 2:
      return n.call(e, t[0], t[1]);
    case 3:
      return n.call(e, t[0], t[1], t[2]);
  }
  return n.apply(e, t);
}
var Qw = 800, Zw = 16, eS = Date.now;
function tS(n) {
  var e = 0, t = 0;
  return function() {
    var r = eS(), i = Zw - (r - t);
    if (t = r, i > 0) {
      if (++e >= Qw)
        return arguments[0];
    } else
      e = 0;
    return n.apply(void 0, arguments);
  };
}
function nS(n) {
  return function() {
    return n;
  };
}
var lu = function() {
  try {
    var n = vn(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch {
  }
}(), rS = lu ? function(n, e) {
  return lu(n, "toString", {
    configurable: !0,
    enumerable: !1,
    value: nS(e),
    writable: !0
  });
} : lc, iS = tS(rS);
function oS(n, e, t, r) {
  for (var i = n.length, o = t + -1; ++o < i; )
    if (e(n[o], o, n))
      return o;
  return -1;
}
function sS(n) {
  return n !== n;
}
function lS(n, e, t) {
  for (var r = t - 1, i = n.length; ++r < i; )
    if (n[r] === e)
      return r;
  return -1;
}
function aS(n, e, t) {
  return e === e ? lS(n, e, t) : oS(n, sS, t);
}
function cS(n, e) {
  var t = n == null ? 0 : n.length;
  return !!t && aS(n, e, 0) > -1;
}
var fS = 9007199254740991, uS = /^(?:0|[1-9]\d*)$/;
function Sg(n, e) {
  var t = typeof n;
  return e = e ?? fS, !!e && (t == "number" || t != "symbol" && uS.test(n)) && n > -1 && n % 1 == 0 && n < e;
}
function vg(n, e) {
  return n === e || n !== n && e !== e;
}
var au = Math.max;
function hS(n, e, t) {
  return e = au(e === void 0 ? n.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, o = au(r.length - e, 0), s = Array(o); ++i < o; )
      s[i] = r[e + i];
    i = -1;
    for (var l = Array(e + 1); ++i < e; )
      l[i] = r[i];
    return l[e] = t(s), Xw(n, this, l);
  };
}
function dS(n, e) {
  return iS(hS(n, e, lc), n + "");
}
var pS = 9007199254740991;
function ac(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= pS;
}
function xg(n) {
  return n != null && ac(n.length) && !wg(n);
}
var gS = Object.prototype;
function mS(n) {
  var e = n && n.constructor, t = typeof e == "function" && e.prototype || gS;
  return n === t;
}
function yS(n, e) {
  for (var t = -1, r = Array(n); ++t < n; )
    r[t] = e(t);
  return r;
}
var bS = "[object Arguments]";
function cu(n) {
  return Jt(n) && wn(n) == bS;
}
var Cg = Object.prototype, wS = Cg.hasOwnProperty, SS = Cg.propertyIsEnumerable, cc = cu(/* @__PURE__ */ function() {
  return arguments;
}()) ? cu : function(n) {
  return Jt(n) && wS.call(n, "callee") && !SS.call(n, "callee");
};
function vS() {
  return !1;
}
var kg = typeof exports == "object" && exports && !exports.nodeType && exports, fu = kg && typeof module == "object" && module && !module.nodeType && module, xS = fu && fu.exports === kg, uu = xS ? tt.Buffer : void 0, CS = uu ? uu.isBuffer : void 0, Yl = CS || vS, kS = "[object Arguments]", ES = "[object Array]", AS = "[object Boolean]", OS = "[object Date]", TS = "[object Error]", MS = "[object Function]", NS = "[object Map]", IS = "[object Number]", RS = "[object Object]", DS = "[object RegExp]", $S = "[object Set]", PS = "[object String]", _S = "[object WeakMap]", LS = "[object ArrayBuffer]", BS = "[object DataView]", zS = "[object Float32Array]", FS = "[object Float64Array]", jS = "[object Int8Array]", VS = "[object Int16Array]", WS = "[object Int32Array]", US = "[object Uint8Array]", HS = "[object Uint8ClampedArray]", JS = "[object Uint16Array]", GS = "[object Uint32Array]", z = {};
z[zS] = z[FS] = z[jS] = z[VS] = z[WS] = z[US] = z[HS] = z[JS] = z[GS] = !0;
z[kS] = z[ES] = z[LS] = z[AS] = z[BS] = z[OS] = z[TS] = z[MS] = z[NS] = z[IS] = z[RS] = z[DS] = z[$S] = z[PS] = z[_S] = !1;
function KS(n) {
  return Jt(n) && ac(n.length) && !!z[wn(n)];
}
function fc(n) {
  return function(e) {
    return n(e);
  };
}
var Eg = typeof exports == "object" && exports && !exports.nodeType && exports, Er = Eg && typeof module == "object" && module && !module.nodeType && module, qS = Er && Er.exports === Eg, Hs = qS && mg.process, co = function() {
  try {
    var n = Er && Er.require && Er.require("util").types;
    return n || Hs && Hs.binding && Hs.binding("util");
  } catch {
  }
}(), hu = co && co.isTypedArray, Ag = hu ? fc(hu) : KS, YS = Object.prototype, XS = YS.hasOwnProperty;
function QS(n, e) {
  var t = Ze(n), r = !t && cc(n), i = !t && !r && Yl(n), o = !t && !r && !i && Ag(n), s = t || r || i || o, l = s ? yS(n.length, String) : [], a = l.length;
  for (var c in n)
    XS.call(n, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Sg(c, a))) && l.push(c);
  return l;
}
function ZS(n, e) {
  return function(t) {
    return n(e(t));
  };
}
var ev = ZS(Object.keys, Object), tv = Object.prototype, nv = tv.hasOwnProperty;
function rv(n) {
  if (!mS(n))
    return ev(n);
  var e = [];
  for (var t in Object(n))
    nv.call(n, t) && t != "constructor" && e.push(t);
  return e;
}
function Og(n) {
  return xg(n) ? QS(n) : rv(n);
}
var iv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ov = /^\w*$/;
function uc(n, e) {
  if (Ze(n))
    return !1;
  var t = typeof n;
  return t == "number" || t == "symbol" || t == "boolean" || n == null || ms(n) ? !0 : ov.test(n) || !iv.test(n) || e != null && n in Object(e);
}
var jr = vn(Object, "create");
function sv() {
  this.__data__ = jr ? jr(null) : {}, this.size = 0;
}
function lv(n) {
  var e = this.has(n) && delete this.__data__[n];
  return this.size -= e ? 1 : 0, e;
}
var av = "__lodash_hash_undefined__", cv = Object.prototype, fv = cv.hasOwnProperty;
function uv(n) {
  var e = this.__data__;
  if (jr) {
    var t = e[n];
    return t === av ? void 0 : t;
  }
  return fv.call(e, n) ? e[n] : void 0;
}
var hv = Object.prototype, dv = hv.hasOwnProperty;
function pv(n) {
  var e = this.__data__;
  return jr ? e[n] !== void 0 : dv.call(e, n);
}
var gv = "__lodash_hash_undefined__";
function mv(n, e) {
  var t = this.__data__;
  return this.size += this.has(n) ? 0 : 1, t[n] = jr && e === void 0 ? gv : e, this;
}
function gn(n) {
  var e = -1, t = n == null ? 0 : n.length;
  for (this.clear(); ++e < t; ) {
    var r = n[e];
    this.set(r[0], r[1]);
  }
}
gn.prototype.clear = sv;
gn.prototype.delete = lv;
gn.prototype.get = uv;
gn.prototype.has = pv;
gn.prototype.set = mv;
function yv() {
  this.__data__ = [], this.size = 0;
}
function ys(n, e) {
  for (var t = n.length; t--; )
    if (vg(n[t][0], e))
      return t;
  return -1;
}
var bv = Array.prototype, wv = bv.splice;
function Sv(n) {
  var e = this.__data__, t = ys(e, n);
  if (t < 0)
    return !1;
  var r = e.length - 1;
  return t == r ? e.pop() : wv.call(e, t, 1), --this.size, !0;
}
function vv(n) {
  var e = this.__data__, t = ys(e, n);
  return t < 0 ? void 0 : e[t][1];
}
function xv(n) {
  return ys(this.__data__, n) > -1;
}
function Cv(n, e) {
  var t = this.__data__, r = ys(t, n);
  return r < 0 ? (++this.size, t.push([n, e])) : t[r][1] = e, this;
}
function St(n) {
  var e = -1, t = n == null ? 0 : n.length;
  for (this.clear(); ++e < t; ) {
    var r = n[e];
    this.set(r[0], r[1]);
  }
}
St.prototype.clear = yv;
St.prototype.delete = Sv;
St.prototype.get = vv;
St.prototype.has = xv;
St.prototype.set = Cv;
var Vr = vn(tt, "Map");
function kv() {
  this.size = 0, this.__data__ = {
    hash: new gn(),
    map: new (Vr || St)(),
    string: new gn()
  };
}
function Ev(n) {
  var e = typeof n;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
}
function bs(n, e) {
  var t = n.__data__;
  return Ev(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
function Av(n) {
  var e = bs(this, n).delete(n);
  return this.size -= e ? 1 : 0, e;
}
function Ov(n) {
  return bs(this, n).get(n);
}
function Tv(n) {
  return bs(this, n).has(n);
}
function Mv(n, e) {
  var t = bs(this, n), r = t.size;
  return t.set(n, e), this.size += t.size == r ? 0 : 1, this;
}
function vt(n) {
  var e = -1, t = n == null ? 0 : n.length;
  for (this.clear(); ++e < t; ) {
    var r = n[e];
    this.set(r[0], r[1]);
  }
}
vt.prototype.clear = kv;
vt.prototype.delete = Av;
vt.prototype.get = Ov;
vt.prototype.has = Tv;
vt.prototype.set = Mv;
var Nv = "Expected a function";
function hc(n, e) {
  if (typeof n != "function" || e != null && typeof e != "function")
    throw new TypeError(Nv);
  var t = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = t.cache;
    if (o.has(i))
      return o.get(i);
    var s = n.apply(this, r);
    return t.cache = o.set(i, s) || o, s;
  };
  return t.cache = new (hc.Cache || vt)(), t;
}
hc.Cache = vt;
var Iv = 500;
function Rv(n) {
  var e = hc(n, function(r) {
    return t.size === Iv && t.clear(), r;
  }), t = e.cache;
  return e;
}
var Dv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $v = /\\(\\)?/g, Pv = Rv(function(n) {
  var e = [];
  return n.charCodeAt(0) === 46 && e.push(""), n.replace(Dv, function(t, r, i, o) {
    e.push(i ? o.replace($v, "$1") : r || t);
  }), e;
});
function Xl(n) {
  return n == null ? "" : ao(n);
}
function Tg(n, e) {
  return Ze(n) ? n : uc(n, e) ? [n] : Pv(Xl(n));
}
var _v = 1 / 0;
function ws(n) {
  if (typeof n == "string" || ms(n))
    return n;
  var e = n + "";
  return e == "0" && 1 / n == -_v ? "-0" : e;
}
function Mg(n, e) {
  e = Tg(e, n);
  for (var t = 0, r = e.length; n != null && t < r; )
    n = n[ws(e[t++])];
  return t && t == r ? n : void 0;
}
function Lv(n, e, t) {
  var r = n == null ? void 0 : Mg(n, e);
  return r === void 0 ? t : r;
}
function Ng(n, e) {
  for (var t = -1, r = e.length, i = n.length; ++t < r; )
    n[i + t] = e[t];
  return n;
}
var du = Qe ? Qe.isConcatSpreadable : void 0;
function Bv(n) {
  return Ze(n) || cc(n) || !!(du && n && n[du]);
}
function zv(n, e, t, r, i) {
  var o = -1, s = n.length;
  for (t || (t = Bv), i || (i = []); ++o < s; ) {
    var l = n[o];
    t(l) && Ng(i, l);
  }
  return i;
}
function Fv(n, e, t) {
  var r = -1, i = n.length;
  e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = n[r + e];
  return o;
}
function jv(n, e, t) {
  var r = n.length;
  return t = t === void 0 ? r : t, !e && t >= r ? n : Fv(n, e, t);
}
var Vv = "\\ud800-\\udfff", Wv = "\\u0300-\\u036f", Uv = "\\ufe20-\\ufe2f", Hv = "\\u20d0-\\u20ff", Jv = Wv + Uv + Hv, Gv = "\\ufe0e\\ufe0f", Kv = "\\u200d", qv = RegExp("[" + Kv + Vv + Jv + Gv + "]");
function dc(n) {
  return qv.test(n);
}
function Yv(n) {
  return n.split("");
}
var Ig = "\\ud800-\\udfff", Xv = "\\u0300-\\u036f", Qv = "\\ufe20-\\ufe2f", Zv = "\\u20d0-\\u20ff", ex = Xv + Qv + Zv, tx = "\\ufe0e\\ufe0f", nx = "[" + Ig + "]", Ql = "[" + ex + "]", Zl = "\\ud83c[\\udffb-\\udfff]", rx = "(?:" + Ql + "|" + Zl + ")", Rg = "[^" + Ig + "]", Dg = "(?:\\ud83c[\\udde6-\\uddff]){2}", $g = "[\\ud800-\\udbff][\\udc00-\\udfff]", ix = "\\u200d", Pg = rx + "?", _g = "[" + tx + "]?", ox = "(?:" + ix + "(?:" + [Rg, Dg, $g].join("|") + ")" + _g + Pg + ")*", sx = _g + Pg + ox, lx = "(?:" + [Rg + Ql + "?", Ql, Dg, $g, nx].join("|") + ")", ax = RegExp(Zl + "(?=" + Zl + ")|" + lx + sx, "g");
function cx(n) {
  return n.match(ax) || [];
}
function fx(n) {
  return dc(n) ? cx(n) : Yv(n);
}
function ux() {
  this.__data__ = new St(), this.size = 0;
}
function hx(n) {
  var e = this.__data__, t = e.delete(n);
  return this.size = e.size, t;
}
function dx(n) {
  return this.__data__.get(n);
}
function px(n) {
  return this.__data__.has(n);
}
var gx = 200;
function mx(n, e) {
  var t = this.__data__;
  if (t instanceof St) {
    var r = t.__data__;
    if (!Vr || r.length < gx - 1)
      return r.push([n, e]), this.size = ++t.size, this;
    t = this.__data__ = new vt(r);
  }
  return t.set(n, e), this.size = t.size, this;
}
function yt(n) {
  var e = this.__data__ = new St(n);
  this.size = e.size;
}
yt.prototype.clear = ux;
yt.prototype.delete = hx;
yt.prototype.get = dx;
yt.prototype.has = px;
yt.prototype.set = mx;
function yx(n, e) {
  for (var t = -1, r = n == null ? 0 : n.length, i = 0, o = []; ++t < r; ) {
    var s = n[t];
    e(s, t, n) && (o[i++] = s);
  }
  return o;
}
function bx() {
  return [];
}
var wx = Object.prototype, Sx = wx.propertyIsEnumerable, pu = Object.getOwnPropertySymbols, vx = pu ? function(n) {
  return n == null ? [] : (n = Object(n), yx(pu(n), function(e) {
    return Sx.call(n, e);
  }));
} : bx;
function xx(n, e, t) {
  var r = e(n);
  return Ze(n) ? r : Ng(r, t(n));
}
function gu(n) {
  return xx(n, Og, vx);
}
var ea = vn(tt, "DataView"), ta = vn(tt, "Promise"), na = vn(tt, "Set"), mu = "[object Map]", Cx = "[object Object]", yu = "[object Promise]", bu = "[object Set]", wu = "[object WeakMap]", Su = "[object DataView]", kx = Sn(ea), Ex = Sn(Vr), Ax = Sn(ta), Ox = Sn(na), Tx = Sn(ql), Mt = wn;
(ea && Mt(new ea(new ArrayBuffer(1))) != Su || Vr && Mt(new Vr()) != mu || ta && Mt(ta.resolve()) != yu || na && Mt(new na()) != bu || ql && Mt(new ql()) != wu) && (Mt = function(n) {
  var e = wn(n), t = e == Cx ? n.constructor : void 0, r = t ? Sn(t) : "";
  if (r)
    switch (r) {
      case kx:
        return Su;
      case Ex:
        return mu;
      case Ax:
        return yu;
      case Ox:
        return bu;
      case Tx:
        return wu;
    }
  return e;
});
var vu = tt.Uint8Array, Mx = "__lodash_hash_undefined__";
function Nx(n) {
  return this.__data__.set(n, Mx), this;
}
function Ix(n) {
  return this.__data__.has(n);
}
function Wr(n) {
  var e = -1, t = n == null ? 0 : n.length;
  for (this.__data__ = new vt(); ++e < t; )
    this.add(n[e]);
}
Wr.prototype.add = Wr.prototype.push = Nx;
Wr.prototype.has = Ix;
function Rx(n, e) {
  for (var t = -1, r = n == null ? 0 : n.length; ++t < r; )
    if (e(n[t], t, n))
      return !0;
  return !1;
}
function Lg(n, e) {
  return n.has(e);
}
var Dx = 1, $x = 2;
function Bg(n, e, t, r, i, o) {
  var s = t & Dx, l = n.length, a = e.length;
  if (l != a && !(s && a > l))
    return !1;
  var c = o.get(n), f = o.get(e);
  if (c && f)
    return c == e && f == n;
  var u = -1, h = !0, d = t & $x ? new Wr() : void 0;
  for (o.set(n, e), o.set(e, n); ++u < l; ) {
    var p = n[u], g = e[u];
    if (r)
      var m = s ? r(g, p, u, e, n, o) : r(p, g, u, n, e, o);
    if (m !== void 0) {
      if (m)
        continue;
      h = !1;
      break;
    }
    if (d) {
      if (!Rx(e, function(y, v) {
        if (!Lg(d, v) && (p === y || i(p, y, t, r, o)))
          return d.push(v);
      })) {
        h = !1;
        break;
      }
    } else if (!(p === g || i(p, g, t, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(n), o.delete(e), h;
}
function Px(n) {
  var e = -1, t = Array(n.size);
  return n.forEach(function(r, i) {
    t[++e] = [i, r];
  }), t;
}
function _x(n) {
  var e = -1, t = Array(n.size);
  return n.forEach(function(r) {
    t[++e] = r;
  }), t;
}
var Lx = 1, Bx = 2, zx = "[object Boolean]", Fx = "[object Date]", jx = "[object Error]", Vx = "[object Map]", Wx = "[object Number]", Ux = "[object RegExp]", Hx = "[object Set]", Jx = "[object String]", Gx = "[object Symbol]", Kx = "[object ArrayBuffer]", qx = "[object DataView]", xu = Qe ? Qe.prototype : void 0, Js = xu ? xu.valueOf : void 0;
function Yx(n, e, t, r, i, o, s) {
  switch (t) {
    case qx:
      if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
        return !1;
      n = n.buffer, e = e.buffer;
    case Kx:
      return !(n.byteLength != e.byteLength || !o(new vu(n), new vu(e)));
    case zx:
    case Fx:
    case Wx:
      return vg(+n, +e);
    case jx:
      return n.name == e.name && n.message == e.message;
    case Ux:
    case Jx:
      return n == e + "";
    case Vx:
      var l = Px;
    case Hx:
      var a = r & Lx;
      if (l || (l = _x), n.size != e.size && !a)
        return !1;
      var c = s.get(n);
      if (c)
        return c == e;
      r |= Bx, s.set(n, e);
      var f = Bg(l(n), l(e), r, i, o, s);
      return s.delete(n), f;
    case Gx:
      if (Js)
        return Js.call(n) == Js.call(e);
  }
  return !1;
}
var Xx = 1, Qx = Object.prototype, Zx = Qx.hasOwnProperty;
function eC(n, e, t, r, i, o) {
  var s = t & Xx, l = gu(n), a = l.length, c = gu(e), f = c.length;
  if (a != f && !s)
    return !1;
  for (var u = a; u--; ) {
    var h = l[u];
    if (!(s ? h in e : Zx.call(e, h)))
      return !1;
  }
  var d = o.get(n), p = o.get(e);
  if (d && p)
    return d == e && p == n;
  var g = !0;
  o.set(n, e), o.set(e, n);
  for (var m = s; ++u < a; ) {
    h = l[u];
    var y = n[h], v = e[h];
    if (r)
      var k = s ? r(v, y, h, e, n, o) : r(y, v, h, n, e, o);
    if (!(k === void 0 ? y === v || i(y, v, t, r, o) : k)) {
      g = !1;
      break;
    }
    m || (m = h == "constructor");
  }
  if (g && !m) {
    var A = n.constructor, O = e.constructor;
    A != O && "constructor" in n && "constructor" in e && !(typeof A == "function" && A instanceof A && typeof O == "function" && O instanceof O) && (g = !1);
  }
  return o.delete(n), o.delete(e), g;
}
var tC = 1, Cu = "[object Arguments]", ku = "[object Array]", pi = "[object Object]", nC = Object.prototype, Eu = nC.hasOwnProperty;
function rC(n, e, t, r, i, o) {
  var s = Ze(n), l = Ze(e), a = s ? ku : Mt(n), c = l ? ku : Mt(e);
  a = a == Cu ? pi : a, c = c == Cu ? pi : c;
  var f = a == pi, u = c == pi, h = a == c;
  if (h && Yl(n)) {
    if (!Yl(e))
      return !1;
    s = !0, f = !1;
  }
  if (h && !f)
    return o || (o = new yt()), s || Ag(n) ? Bg(n, e, t, r, i, o) : Yx(n, e, a, t, r, i, o);
  if (!(t & tC)) {
    var d = f && Eu.call(n, "__wrapped__"), p = u && Eu.call(e, "__wrapped__");
    if (d || p) {
      var g = d ? n.value() : n, m = p ? e.value() : e;
      return o || (o = new yt()), i(g, m, t, r, o);
    }
  }
  return h ? (o || (o = new yt()), eC(n, e, t, r, i, o)) : !1;
}
function pc(n, e, t, r, i) {
  return n === e ? !0 : n == null || e == null || !Jt(n) && !Jt(e) ? n !== n && e !== e : rC(n, e, t, r, pc, i);
}
var iC = 1, oC = 2;
function sC(n, e, t, r) {
  var i = t.length, o = i;
  if (n == null)
    return !o;
  for (n = Object(n); i--; ) {
    var s = t[i];
    if (s[2] ? s[1] !== n[s[0]] : !(s[0] in n))
      return !1;
  }
  for (; ++i < o; ) {
    s = t[i];
    var l = s[0], a = n[l], c = s[1];
    if (s[2]) {
      if (a === void 0 && !(l in n))
        return !1;
    } else {
      var f = new yt(), u;
      if (!(u === void 0 ? pc(c, a, iC | oC, r, f) : u))
        return !1;
    }
  }
  return !0;
}
function zg(n) {
  return n === n && !Gt(n);
}
function lC(n) {
  for (var e = Og(n), t = e.length; t--; ) {
    var r = e[t], i = n[r];
    e[t] = [r, i, zg(i)];
  }
  return e;
}
function Fg(n, e) {
  return function(t) {
    return t == null ? !1 : t[n] === e && (e !== void 0 || n in Object(t));
  };
}
function aC(n) {
  var e = lC(n);
  return e.length == 1 && e[0][2] ? Fg(e[0][0], e[0][1]) : function(t) {
    return t === n || sC(t, n, e);
  };
}
function cC(n, e) {
  return n != null && e in Object(n);
}
function fC(n, e, t) {
  e = Tg(e, n);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var s = ws(e[r]);
    if (!(o = n != null && t(n, s)))
      break;
    n = n[s];
  }
  return o || ++r != i ? o : (i = n == null ? 0 : n.length, !!i && ac(i) && Sg(s, i) && (Ze(n) || cc(n)));
}
function uC(n, e) {
  return n != null && fC(n, e, cC);
}
var hC = 1, dC = 2;
function pC(n, e) {
  return uc(n) && zg(e) ? Fg(ws(n), e) : function(t) {
    var r = Lv(t, n);
    return r === void 0 && r === e ? uC(t, n) : pc(e, r, hC | dC);
  };
}
function jg(n) {
  return function(e) {
    return e == null ? void 0 : e[n];
  };
}
function gC(n) {
  return function(e) {
    return Mg(e, n);
  };
}
function mC(n) {
  return uc(n) ? jg(ws(n)) : gC(n);
}
function yC(n) {
  return typeof n == "function" ? n : n == null ? lc : typeof n == "object" ? Ze(n) ? pC(n[0], n[1]) : aC(n) : mC(n);
}
var Gs = function() {
  return tt.Date.now();
}, bC = "Expected a function", wC = Math.max, SC = Math.min;
function vC(n, e, t) {
  var r, i, o, s, l, a, c = 0, f = !1, u = !1, h = !0;
  if (typeof n != "function")
    throw new TypeError(bC);
  e = Kl(e) || 0, Gt(t) && (f = !!t.leading, u = "maxWait" in t, o = u ? wC(Kl(t.maxWait) || 0, e) : o, h = "trailing" in t ? !!t.trailing : h);
  function d(x) {
    var N = r, $ = i;
    return r = i = void 0, c = x, s = n.apply($, N), s;
  }
  function p(x) {
    return c = x, l = setTimeout(y, e), f ? d(x) : s;
  }
  function g(x) {
    var N = x - a, $ = x - c, C = e - N;
    return u ? SC(C, o - $) : C;
  }
  function m(x) {
    var N = x - a, $ = x - c;
    return a === void 0 || N >= e || N < 0 || u && $ >= o;
  }
  function y() {
    var x = Gs();
    if (m(x))
      return v(x);
    l = setTimeout(y, g(x));
  }
  function v(x) {
    return l = void 0, h && r ? d(x) : (r = i = void 0, s);
  }
  function k() {
    l !== void 0 && clearTimeout(l), c = 0, r = a = i = l = void 0;
  }
  function A() {
    return l === void 0 ? s : v(Gs());
  }
  function O() {
    var x = Gs(), N = m(x);
    if (r = arguments, i = this, a = x, N) {
      if (l === void 0)
        return p(a);
      if (u)
        return clearTimeout(l), l = setTimeout(y, e), d(a);
    }
    return l === void 0 && (l = setTimeout(y, e)), s;
  }
  return O.cancel = k, O.flush = A, O;
}
function Ks(n) {
  return Jt(n) && xg(n);
}
var xC = 200;
function CC(n, e, t, r) {
  var i = -1, o = cS, s = !0, l = n.length, a = [], c = e.length;
  if (!l)
    return a;
  t && (e = bg(e, fc(t))), e.length >= xC && (o = Lg, s = !1, e = new Wr(e));
  e:
    for (; ++i < l; ) {
      var f = n[i], u = t == null ? f : t(f);
      if (f = f !== 0 ? f : 0, s && u === u) {
        for (var h = c; h--; )
          if (e[h] === u)
            continue e;
        a.push(f);
      } else o(e, u, r) || a.push(f);
    }
  return a;
}
function kC(n) {
  var e = n == null ? 0 : n.length;
  return e ? n[e - 1] : void 0;
}
var RR = dS(function(n, e) {
  var t = kC(e);
  return Ks(t) && (t = void 0), Ks(n) ? CC(n, zv(e, 1, Ks), yC(t)) : [];
}), EC = "[object RegExp]";
function AC(n) {
  return Jt(n) && wn(n) == EC;
}
var Au = co && co.isRegExp, OC = Au ? fc(Au) : AC, TC = jg("length"), Vg = "\\ud800-\\udfff", MC = "\\u0300-\\u036f", NC = "\\ufe20-\\ufe2f", IC = "\\u20d0-\\u20ff", RC = MC + NC + IC, DC = "\\ufe0e\\ufe0f", $C = "[" + Vg + "]", ra = "[" + RC + "]", ia = "\\ud83c[\\udffb-\\udfff]", PC = "(?:" + ra + "|" + ia + ")", Wg = "[^" + Vg + "]", Ug = "(?:\\ud83c[\\udde6-\\uddff]){2}", Hg = "[\\ud800-\\udbff][\\udc00-\\udfff]", _C = "\\u200d", Jg = PC + "?", Gg = "[" + DC + "]?", LC = "(?:" + _C + "(?:" + [Wg, Ug, Hg].join("|") + ")" + Gg + Jg + ")*", BC = Gg + Jg + LC, zC = "(?:" + [Wg + ra + "?", ra, Ug, Hg, $C].join("|") + ")", Ou = RegExp(ia + "(?=" + ia + ")|" + zC + BC, "g");
function FC(n) {
  for (var e = Ou.lastIndex = 0; Ou.test(n); )
    ++e;
  return e;
}
function jC(n) {
  return dc(n) ? FC(n) : TC(n);
}
var VC = "Expected a function";
function DR(n, e, t) {
  var r = !0, i = !0;
  if (typeof n != "function")
    throw new TypeError(VC);
  return Gt(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), vC(n, e, {
    leading: r,
    maxWait: e,
    trailing: i
  });
}
var WC = 30, UC = "...", HC = /\w*$/;
function $R(n, e) {
  var t = WC, r = UC;
  if (Gt(e)) {
    var i = "separator" in e ? e.separator : i;
    t = "length" in e ? $w(e.length) : t, r = "omission" in e ? ao(e.omission) : r;
  }
  n = Xl(n);
  var o = n.length;
  if (dc(n)) {
    var s = fx(n);
    o = s.length;
  }
  if (t >= o)
    return n;
  var l = t - jC(r);
  if (l < 1)
    return r;
  var a = s ? jv(s, 0, l).join("") : n.slice(0, l);
  if (i === void 0)
    return a + r;
  if (s && (l += a.length - l), OC(i)) {
    if (n.slice(l).search(i)) {
      var c, f = a;
      for (i.global || (i = RegExp(i.source, Xl(HC.exec(i)) + "g")), i.lastIndex = 0; c = i.exec(f); )
        var u = c.index;
      a = a.slice(0, u === void 0 ? l : u);
    }
  } else if (n.indexOf(ao(i), l) != l) {
    var h = a.lastIndexOf(i);
    h > -1 && (a = a.slice(0, h));
  }
  return a + r;
}
const Ke = () => /* @__PURE__ */ new Map(), oa = (n) => {
  const e = Ke();
  return n.forEach((t, r) => {
    e.set(r, t);
  }), e;
}, nr = (n, e, t) => {
  let r = n.get(e);
  return r === void 0 && n.set(e, r = t()), r;
}, JC = (n, e) => {
  const t = [];
  for (const [r, i] of n)
    t.push(e(i, r));
  return t;
}, GC = (n, e) => {
  for (const [t, r] of n)
    if (e(r, t))
      return !0;
  return !1;
}, Hn = () => /* @__PURE__ */ new Set(), qs = (n) => n[n.length - 1], Jn = Array.from, KC = Array.isArray;
class qC {
  constructor() {
    this._observers = Ke();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(e, t) {
    return nr(
      this._observers,
      /** @type {string} */
      e,
      Hn
    ).add(t), t;
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  once(e, t) {
    const r = (...i) => {
      this.off(
        e,
        /** @type {any} */
        r
      ), t(...i);
    };
    this.on(
      e,
      /** @type {any} */
      r
    );
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  off(e, t) {
    const r = this._observers.get(e);
    r !== void 0 && (r.delete(t), r.size === 0 && this._observers.delete(e));
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name The event name.
   * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
   */
  emit(e, t) {
    return Jn((this._observers.get(e) || Ke()).values()).forEach((r) => r(...t));
  }
  destroy() {
    this._observers = Ke();
  }
}
const mn = Math.floor, Di = Math.abs, Kg = (n, e) => n < e ? n : e, rr = (n, e) => n > e ? n : e, YC = (n) => n !== 0 ? n < 0 : 1 / n < 0, Tu = 1, Mu = 2, Ys = 4, Xs = 8, XC = 32, qg = 64, fo = 128, QC = 31, Nu = 63, Ar = 127, ZC = 2147483647, ek = Number.isInteger || ((n) => typeof n == "number" && isFinite(n) && mn(n) === n), tk = (n) => n.toLowerCase(), nk = /^\s*/g, rk = (n) => n.replace(nk, ""), ik = /([A-Z])/g, Iu = (n, e) => rk(n.replace(ik, (t) => `${e}${tk(t)}`)), ok = (n) => {
  const e = unescape(encodeURIComponent(n)), t = e.length, r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = /** @type {number} */
    e.codePointAt(i);
  return r;
}, Ur = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), sk = (n) => Ur.encode(n), lk = Ur ? sk : ok;
let Qs = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
Qs && Qs.decode(new Uint8Array()).length === 1 && (Qs = null);
class li {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const gc = () => new li(), ak = (n) => {
  let e = n.cpos;
  for (let t = 0; t < n.bufs.length; t++)
    e += n.bufs[t].length;
  return e;
}, gt = (n) => {
  const e = new Uint8Array(ak(n));
  let t = 0;
  for (let r = 0; r < n.bufs.length; r++) {
    const i = n.bufs[r];
    e.set(i, t), t += i.length;
  }
  return e.set(new Uint8Array(n.cbuf.buffer, 0, n.cpos), t), e;
}, ck = (n, e) => {
  const t = n.cbuf.length;
  t - n.cpos < e && (n.bufs.push(new Uint8Array(n.cbuf.buffer, 0, n.cpos)), n.cbuf = new Uint8Array(rr(t, e) * 2), n.cpos = 0);
}, q = (n, e) => {
  const t = n.cbuf.length;
  n.cpos === t && (n.bufs.push(n.cbuf), n.cbuf = new Uint8Array(t * 2), n.cpos = 0), n.cbuf[n.cpos++] = e;
}, sa = q, L = (n, e) => {
  for (; e > Ar; )
    q(n, fo | Ar & e), e = mn(e / 128);
  q(n, Ar & e);
}, mc = (n, e) => {
  const t = YC(e);
  for (t && (e = -e), q(n, (e > Nu ? fo : 0) | (t ? qg : 0) | Nu & e), e = mn(e / 64); e > 0; )
    q(n, (e > Ar ? fo : 0) | Ar & e), e = mn(e / 128);
}, la = new Uint8Array(3e4), fk = la.length / 3, uk = (n, e) => {
  if (e.length < fk) {
    const t = Ur.encodeInto(e, la).written || 0;
    L(n, t);
    for (let r = 0; r < t; r++)
      q(n, la[r]);
  } else
    Se(n, lk(e));
}, hk = (n, e) => {
  const t = unescape(encodeURIComponent(e)), r = t.length;
  L(n, r);
  for (let i = 0; i < r; i++)
    q(
      n,
      /** @type {number} */
      t.codePointAt(i)
    );
}, zn = Ur && /** @type {any} */
Ur.encodeInto ? uk : hk, yc = (n, e) => {
  const t = n.cbuf.length, r = n.cpos, i = Kg(t - r, e.length), o = e.length - i;
  n.cbuf.set(e.subarray(0, i), r), n.cpos += i, o > 0 && (n.bufs.push(n.cbuf), n.cbuf = new Uint8Array(rr(t * 2, o)), n.cbuf.set(e.subarray(i)), n.cpos = o);
}, Se = (n, e) => {
  L(n, e.byteLength), yc(n, e);
}, bc = (n, e) => {
  ck(n, e);
  const t = new DataView(n.cbuf.buffer, n.cpos, e);
  return n.cpos += e, t;
}, dk = (n, e) => bc(n, 4).setFloat32(0, e, !1), pk = (n, e) => bc(n, 8).setFloat64(0, e, !1), gk = (n, e) => (
  /** @type {any} */
  bc(n, 8).setBigInt64(0, e, !1)
), Ru = new DataView(new ArrayBuffer(4)), mk = (n) => (Ru.setFloat32(0, n), Ru.getFloat32(0) === n), Hr = (n, e) => {
  switch (typeof e) {
    case "string":
      q(n, 119), zn(n, e);
      break;
    case "number":
      ek(e) && Di(e) <= ZC ? (q(n, 125), mc(n, e)) : mk(e) ? (q(n, 124), dk(n, e)) : (q(n, 123), pk(n, e));
      break;
    case "bigint":
      q(n, 122), gk(n, e);
      break;
    case "object":
      if (e === null)
        q(n, 126);
      else if (KC(e)) {
        q(n, 117), L(n, e.length);
        for (let t = 0; t < e.length; t++)
          Hr(n, e[t]);
      } else if (e instanceof Uint8Array)
        q(n, 116), Se(n, e);
      else {
        q(n, 118);
        const t = Object.keys(e);
        L(n, t.length);
        for (let r = 0; r < t.length; r++) {
          const i = t[r];
          zn(n, i), Hr(n, e[i]);
        }
      }
      break;
    case "boolean":
      q(n, e ? 120 : 121);
      break;
    default:
      q(n, 127);
  }
};
class Du extends li {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(e) {
    super(), this.w = e, this.s = null, this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(e) {
    this.s === e ? this.count++ : (this.count > 0 && L(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
  }
}
const $u = (n) => {
  n.count > 0 && (mc(n.encoder, n.count === 1 ? n.s : -n.s), n.count > 1 && L(n.encoder, n.count - 2));
};
class $i {
  constructor() {
    this.encoder = new li(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.s === e ? this.count++ : ($u(this), this.count = 1, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return $u(this), gt(this.encoder);
  }
}
const Pu = (n) => {
  if (n.count > 0) {
    const e = n.diff * 2 + (n.count === 1 ? 0 : 1);
    mc(n.encoder, e), n.count > 1 && L(n.encoder, n.count - 2);
  }
};
class Zs {
  constructor() {
    this.encoder = new li(), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.diff === e - this.s ? (this.s = e, this.count++) : (Pu(this), this.count = 1, this.diff = e - this.s, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Pu(this), gt(this.encoder);
  }
}
class yk {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new $i();
  }
  /**
   * @param {string} string
   */
  write(e) {
    this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
  }
  toUint8Array() {
    const e = new li();
    return this.sarr.push(this.s), this.s = "", zn(e, this.sarr.join("")), yc(e, this.lensE.toUint8Array()), gt(e);
  }
}
const Gn = (n) => new Error(n), qe = () => {
  throw Gn("Method unimplemented");
}, Kt = () => {
  throw Gn("Unexpected case");
}, bk = crypto.getRandomValues.bind(crypto), Yg = () => bk(new Uint32Array(1))[0], wk = "10000000-1000-4000-8000" + -1e11, Sk = () => wk.replace(
  /[018]/g,
  /** @param {number} c */
  (n) => (n ^ Yg() & 15 >> n / 4).toString(16)
), _u = (n) => (
  /** @type {Promise<T>} */
  new Promise(n)
);
Promise.all.bind(Promise);
const Lu = (n) => n === void 0 ? null : n;
class vk {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(e, t) {
    this.map.set(e, t);
  }
  /**
   * @param {string} key
   */
  getItem(e) {
    return this.map.get(e);
  }
}
let Xg = new vk(), xk = !0;
try {
  typeof localStorage < "u" && localStorage && (Xg = localStorage, xk = !1);
} catch {
}
const Ck = Xg, kk = Object.assign, Ek = Object.keys, Ak = (n, e) => {
  for (const t in n)
    e(n[t], t);
}, Bu = (n) => Ek(n).length, Ok = (n) => {
  for (const e in n)
    return !1;
  return !0;
}, Tk = (n, e) => {
  for (const t in n)
    if (!e(n[t], t))
      return !1;
  return !0;
}, Mk = (n, e) => Object.prototype.hasOwnProperty.call(n, e), Nk = (n, e) => n === e || Bu(n) === Bu(e) && Tk(n, (t, r) => (t !== void 0 || Mk(e, r)) && e[r] === t), Ik = Object.freeze, Qg = (n) => {
  for (const e in n) {
    const t = n[e];
    (typeof t == "object" || typeof t == "function") && Qg(n[e]);
  }
  return Ik(n);
}, wc = (n, e, t = 0) => {
  try {
    for (; t < n.length; t++)
      n[t](...e);
  } finally {
    t < n.length && wc(n, e, t + 1);
  }
}, Rk = (n, e) => e.includes(n), Jr = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
let ze;
const Dk = () => {
  if (ze === void 0)
    if (Jr) {
      ze = Ke();
      const n = process.argv;
      let e = null;
      for (let t = 0; t < n.length; t++) {
        const r = n[t];
        r[0] === "-" ? (e !== null && ze.set(e, ""), e = r) : e !== null && (ze.set(e, r), e = null);
      }
      e !== null && ze.set(e, "");
    } else typeof location == "object" ? (ze = Ke(), (location.search || "?").slice(1).split("&").forEach((n) => {
      if (n.length !== 0) {
        const [e, t] = n.split("=");
        ze.set(`--${Iu(e, "-")}`, t), ze.set(`-${Iu(e, "-")}`, t);
      }
    })) : ze = Ke();
  return ze;
}, aa = (n) => Dk().has(n), uo = (n) => Lu(Jr ? process.env[n.toUpperCase().replaceAll("-", "_")] : Ck.getItem(n)), Zg = (n) => aa("--" + n) || uo(n) !== null;
Zg("production");
const $k = Jr && Rk(process.env.FORCE_COLOR, ["true", "1", "2"]), Pk = $k || !aa("--no-colors") && // @todo deprecate --no-colors
!Zg("no-color") && (!Jr || process.stdout.isTTY) && (!Jr || aa("--color") || uo("COLORTERM") !== null || (uo("TERM") || "").includes("color"));
class _k {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(e, t) {
    this.left = e, this.right = t;
  }
}
const ft = (n, e) => new _k(n, e);
typeof DOMParser < "u" && new DOMParser();
const Lk = (n) => JC(n, (e, t) => `${t}:${e};`).join(""), xt = Symbol, em = xt(), tm = xt(), Bk = xt(), zk = xt(), Fk = xt(), nm = xt(), jk = xt(), Sc = xt(), Vk = xt(), Wk = (n) => {
  var i;
  n.length === 1 && ((i = n[0]) == null ? void 0 : i.constructor) === Function && (n = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  n[0]());
  const e = [], t = [];
  let r = 0;
  for (; r < n.length; r++) {
    const o = n[r];
    if (o === void 0)
      break;
    if (o.constructor === String || o.constructor === Number)
      e.push(o);
    else if (o.constructor === Object)
      break;
  }
  for (r > 0 && t.push(e.join("")); r < n.length; r++) {
    const o = n[r];
    o instanceof Symbol || t.push(o);
  }
  return t;
}, Uk = {
  [em]: ft("font-weight", "bold"),
  [tm]: ft("font-weight", "normal"),
  [Bk]: ft("color", "blue"),
  [Fk]: ft("color", "green"),
  [zk]: ft("color", "grey"),
  [nm]: ft("color", "red"),
  [jk]: ft("color", "purple"),
  [Sc]: ft("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [Vk]: ft("color", "black")
}, Hk = (n) => {
  var s;
  n.length === 1 && ((s = n[0]) == null ? void 0 : s.constructor) === Function && (n = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  n[0]());
  const e = [], t = [], r = Ke();
  let i = [], o = 0;
  for (; o < n.length; o++) {
    const l = n[o], a = Uk[l];
    if (a !== void 0)
      r.set(a.left, a.right);
    else {
      if (l === void 0)
        break;
      if (l.constructor === String || l.constructor === Number) {
        const c = Lk(r);
        o > 0 || c.length > 0 ? (e.push("%c" + l), t.push(c)) : e.push(l);
      } else
        break;
    }
  }
  for (o > 0 && (i = t, i.unshift(e.join(""))); o < n.length; o++) {
    const l = n[o];
    l instanceof Symbol || i.push(l);
  }
  return i;
}, rm = Pk ? Hk : Wk, Jk = (...n) => {
  console.log(...rm(n)), im.forEach((e) => e.print(n));
}, Gk = (...n) => {
  console.warn(...rm(n)), n.unshift(Sc), im.forEach((e) => e.print(n));
}, im = Hn(), om = (n) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: n
}), Kk = (n, e) => om(() => {
  let t;
  do
    t = n.next();
  while (!t.done && !e(t.value));
  return t;
}), el = (n, e) => om(() => {
  const { done: t, value: r } = n.next();
  return { done: t, value: t ? void 0 : e(r) };
});
class qk {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(e, t) {
    this.clock = e, this.len = t;
  }
}
class Yk {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const sm = (n, e, t) => e.clients.forEach((r, i) => {
  const o = (
    /** @type {Array<GC|Item>} */
    n.doc.store.clients.get(i)
  );
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    dm(n, o, l.clock, l.len, t);
  }
}), Xk = (n, e) => {
  let t = 0, r = n.length - 1;
  for (; t <= r; ) {
    const i = mn((t + r) / 2), o = n[i], s = o.clock;
    if (s <= e) {
      if (e < s + o.len)
        return i;
      t = i + 1;
    } else
      r = i - 1;
  }
  return null;
}, lm = (n, e) => {
  const t = n.clients.get(e.client);
  return t !== void 0 && Xk(t, e.clock) !== null;
}, am = (n) => {
  n.clients.forEach((e) => {
    e.sort((i, o) => i.clock - o.clock);
    let t, r;
    for (t = 1, r = 1; t < e.length; t++) {
      const i = e[r - 1], o = e[t];
      i.clock + i.len >= o.clock ? i.len = rr(i.len, o.clock + o.len - i.clock) : (r < t && (e[r] = o), r++);
    }
    e.length = r;
  });
}, cm = (n, e, t, r) => {
  nr(n.clients, e, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new qk(t, r));
}, Qk = (n, e) => {
  L(n.restEncoder, e.clients.size), Jn(e.clients.entries()).sort((t, r) => r[0] - t[0]).forEach(([t, r]) => {
    n.resetDsCurVal(), L(n.restEncoder, t);
    const i = r.length;
    L(n.restEncoder, i);
    for (let o = 0; o < i; o++) {
      const s = r[o];
      n.writeDsClock(s.clock), n.writeDsLen(s.len);
    }
  });
}, fm = Yg;
class ai extends qC {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: e = Sk(), collectionid: t = null, gc: r = !0, gcFilter: i = () => !0, meta: o = null, autoLoad: s = !1, shouldLoad: l = !0 } = {}) {
    super(), this.gc = r, this.gcFilter = i, this.clientID = fm(), this.guid = e, this.collectionid = t, this.share = /* @__PURE__ */ new Map(), this.store = new lE(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = l, this.autoLoad = s, this.meta = o, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = _u((c) => {
      this.on("load", () => {
        this.isLoaded = !0, c(this);
      });
    });
    const a = () => _u((c) => {
      const f = (u) => {
        (u === void 0 || u === !0) && (this.off("sync", f), c());
      };
      this.on("sync", f);
    });
    this.on("sync", (c) => {
      c === !1 && this.isSynced && (this.whenSynced = a()), this.isSynced = c === void 0 || c === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
    }), this.whenSynced = a();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const e = this._item;
    e !== null && !this.shouldLoad && F(
      /** @type {any} */
      e.parent.doc,
      (t) => {
        t.subdocsLoaded.add(this);
      },
      null,
      !0
    ), this.shouldLoad = !0;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(Jn(this.subdocs).map((e) => e.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */
  transact(e, t = null) {
    return F(this, e, t);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
   *
   * After this method is called, the type is also available on `ydoc.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Y.Doc instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const ydoc = new Y.Doc(..)
   *   const appState = {
   *     document: ydoc.getText('document')
   *     comments: ydoc.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(e, t = (
    /** @type {any} */
    ie
  )) {
    const r = nr(this.share, e, () => {
      const o = new t();
      return o._integrate(this, null), o;
    }), i = r.constructor;
    if (t !== ie && i !== t)
      if (i === ie) {
        const o = new t();
        o._map = r._map, r._map.forEach(
          /** @param {Item?} n */
          (s) => {
            for (; s !== null; s = s.left)
              s.parent = o;
          }
        ), o._start = r._start;
        for (let s = o._start; s !== null; s = s.right)
          s.parent = o;
        return o._length = r._length, this.share.set(e, o), o._integrate(this, null), /** @type {InstanceType<Type>} */
        o;
      } else
        throw new Error(`Type with the name ${e} has already been defined with a different constructor`);
    return (
      /** @type {InstanceType<Type>} */
      r
    );
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(e = "") {
    return (
      /** @type {YArray<T>} */
      this.get(e, Or)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(e = "") {
    return this.get(e, Yr);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(e = "") {
    return (
      /** @type {YMap<T>} */
      this.get(e, mo)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */
  getXmlElement(e = "") {
    return (
      /** @type {YXmlElement<{[key:string]:string}>} */
      this.get(e, Xr)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(e = "") {
    return this.get(e, Kn);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const e = {};
    return this.share.forEach((t, r) => {
      e[r] = t.toJSON();
    }), e;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    this.isDestroyed = !0, Jn(this.subdocs).forEach((t) => t.destroy());
    const e = this._item;
    if (e !== null) {
      this._item = null;
      const t = (
        /** @type {ContentDoc} */
        e.content
      );
      t.doc = new ai({ guid: this.guid, ...t.opts, shouldLoad: !1 }), t.doc._item = e, F(
        /** @type {any} */
        e.parent.doc,
        (r) => {
          const i = t.doc;
          e.deleted || r.subdocsAdded.add(i), r.subdocsRemoved.add(this);
        },
        null,
        !0
      );
    }
    this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
  }
}
class Zk {
  constructor() {
    this.restEncoder = gc();
  }
  toUint8Array() {
    return gt(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(e) {
    L(this.restEncoder, e);
  }
  /**
   * @param {number} len
   */
  writeDsLen(e) {
    L(this.restEncoder, e);
  }
}
class eE extends Zk {
  /**
   * @param {ID} id
   */
  writeLeftID(e) {
    L(this.restEncoder, e.client), L(this.restEncoder, e.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(e) {
    L(this.restEncoder, e.client), L(this.restEncoder, e.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(e) {
    L(this.restEncoder, e);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(e) {
    sa(this.restEncoder, e);
  }
  /**
   * @param {string} s
   */
  writeString(e) {
    zn(this.restEncoder, e);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(e) {
    L(this.restEncoder, e ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(e) {
    L(this.restEncoder, e);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(e) {
    L(this.restEncoder, e);
  }
  /**
   * @param {any} any
   */
  writeAny(e) {
    Hr(this.restEncoder, e);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(e) {
    Se(this.restEncoder, e);
  }
  /**
   * @param {any} embed
   */
  writeJSON(e) {
    zn(this.restEncoder, JSON.stringify(e));
  }
  /**
   * @param {string} key
   */
  writeKey(e) {
    zn(this.restEncoder, e);
  }
}
class tE {
  constructor() {
    this.restEncoder = gc(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return gt(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(e) {
    const t = e - this.dsCurrVal;
    this.dsCurrVal = e, L(this.restEncoder, t);
  }
  /**
   * @param {number} len
   */
  writeDsLen(e) {
    e === 0 && Kt(), L(this.restEncoder, e - 1), this.dsCurrVal += e;
  }
}
class nE extends tE {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new Zs(), this.clientEncoder = new $i(), this.leftClockEncoder = new Zs(), this.rightClockEncoder = new Zs(), this.infoEncoder = new Du(sa), this.stringEncoder = new yk(), this.parentInfoEncoder = new Du(sa), this.typeRefEncoder = new $i(), this.lenEncoder = new $i();
  }
  toUint8Array() {
    const e = gc();
    return L(e, 0), Se(e, this.keyClockEncoder.toUint8Array()), Se(e, this.clientEncoder.toUint8Array()), Se(e, this.leftClockEncoder.toUint8Array()), Se(e, this.rightClockEncoder.toUint8Array()), Se(e, gt(this.infoEncoder)), Se(e, this.stringEncoder.toUint8Array()), Se(e, gt(this.parentInfoEncoder)), Se(e, this.typeRefEncoder.toUint8Array()), Se(e, this.lenEncoder.toUint8Array()), yc(e, gt(this.restEncoder)), gt(e);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(e) {
    this.clientEncoder.write(e.client), this.leftClockEncoder.write(e.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(e) {
    this.clientEncoder.write(e.client), this.rightClockEncoder.write(e.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(e) {
    this.clientEncoder.write(e);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(e) {
    this.infoEncoder.write(e);
  }
  /**
   * @param {string} s
   */
  writeString(e) {
    this.stringEncoder.write(e);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(e) {
    this.parentInfoEncoder.write(e ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(e) {
    this.typeRefEncoder.write(e);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(e) {
    this.lenEncoder.write(e);
  }
  /**
   * @param {any} any
   */
  writeAny(e) {
    Hr(this.restEncoder, e);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(e) {
    Se(this.restEncoder, e);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(e) {
    Hr(this.restEncoder, e);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(e) {
    const t = this.keyMap.get(e);
    t === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(t);
  }
}
const rE = (n, e, t, r) => {
  r = rr(r, e[0].id.clock);
  const i = bt(e, r);
  L(n.restEncoder, e.length - i), n.writeClient(t), L(n.restEncoder, r);
  const o = e[i];
  o.write(n, r - o.id.clock);
  for (let s = i + 1; s < e.length; s++)
    e[s].write(n, 0);
}, iE = (n, e, t) => {
  const r = /* @__PURE__ */ new Map();
  t.forEach((i, o) => {
    ye(e, o) > i && r.set(o, i);
  }), vc(e).forEach((i, o) => {
    t.has(o) || r.set(o, 0);
  }), L(n.restEncoder, r.size), Jn(r.entries()).sort((i, o) => o[0] - i[0]).forEach(([i, o]) => {
    rE(
      n,
      /** @type {Array<GC|Item>} */
      e.clients.get(i),
      i,
      o
    );
  });
}, oE = (n, e) => iE(n, e.doc.store, e.beforeState);
class sE {
  constructor() {
    this.l = [];
  }
}
const zu = () => new sE(), Fu = (n, e) => n.l.push(e), ju = (n, e) => {
  const t = n.l, r = t.length;
  n.l = t.filter((i) => e !== i), r === n.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, um = (n, e, t) => wc(n.l, [e, t]);
class Pi {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(e, t) {
    this.client = e, this.clock = t;
  }
}
const gi = (n, e) => n === e || n !== null && e !== null && n.client === e.client && n.clock === e.clock, j = (n, e) => new Pi(n, e), Gr = (n) => {
  for (const [e, t] of n.doc.share.entries())
    if (t === n)
      return e;
  throw Kt();
};
class ho {
  /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */
  constructor(e, t, r, i = 0) {
    this.type = e, this.tname = t, this.item = r, this.assoc = i;
  }
}
const mi = (n, e, t) => {
  let r = null, i = null;
  return n._item === null ? i = Gr(n) : r = j(n._item.id.client, n._item.id.clock), new ho(r, i, e, t);
}, tl = (n, e, t = 0) => {
  let r = n._start;
  if (t < 0) {
    if (e === 0)
      return mi(n, null, t);
    e--;
  }
  for (; r !== null; ) {
    if (!r.deleted && r.countable) {
      if (r.length > e)
        return mi(n, j(r.id.client, r.id.clock + e), t);
      e -= r.length;
    }
    if (r.right === null && t < 0)
      return mi(n, r.lastId, t);
    r = r.right;
  }
  return mi(n, null, t);
}, In = (n, e) => e === void 0 ? !n.deleted : e.sv.has(n.id.client) && (e.sv.get(n.id.client) || 0) > n.id.clock && !lm(e.ds, n.id), ca = (n, e) => {
  const t = nr(n.meta, ca, Hn), r = n.doc.store;
  t.has(e) || (e.sv.forEach((i, o) => {
    i < ye(r, o) && qt(n, j(o, i));
  }), sm(n, e.ds, (i) => {
  }), t.add(e));
};
class lE {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const vc = (n) => {
  const e = /* @__PURE__ */ new Map();
  return n.clients.forEach((t, r) => {
    const i = t[t.length - 1];
    e.set(r, i.id.clock + i.length);
  }), e;
}, ye = (n, e) => {
  const t = n.clients.get(e);
  if (t === void 0)
    return 0;
  const r = t[t.length - 1];
  return r.id.clock + r.length;
}, hm = (n, e) => {
  let t = n.clients.get(e.id.client);
  if (t === void 0)
    t = [], n.clients.set(e.id.client, t);
  else {
    const r = t[t.length - 1];
    if (r.id.clock + r.length !== e.id.clock)
      throw Kt();
  }
  t.push(e);
}, bt = (n, e) => {
  let t = 0, r = n.length - 1, i = n[r], o = i.id.clock;
  if (o === e)
    return r;
  let s = mn(e / (o + i.length - 1) * r);
  for (; t <= r; ) {
    if (i = n[s], o = i.id.clock, o <= e) {
      if (e < o + i.length)
        return s;
      t = s + 1;
    } else
      r = s - 1;
    s = mn((t + r) / 2);
  }
  throw Kt();
}, aE = (n, e) => {
  const t = n.clients.get(e.client);
  return t[bt(t, e.clock)];
}, nl = (
  /** @type {function(StructStore,ID):Item} */
  aE
), fa = (n, e, t) => {
  const r = bt(e, t), i = e[r];
  return i.id.clock < t && i instanceof Ce ? (e.splice(r + 1, 0, Im(n, i, t - i.id.clock)), r + 1) : r;
}, qt = (n, e) => {
  const t = (
    /** @type {Array<Item>} */
    n.doc.store.clients.get(e.client)
  );
  return t[fa(n, t, e.clock)];
}, Vu = (n, e, t) => {
  const r = e.clients.get(t.client), i = bt(r, t.clock), o = r[i];
  return t.clock !== o.id.clock + o.length - 1 && o.constructor !== $t && r.splice(i + 1, 0, Im(n, o, t.clock - o.id.clock + 1)), o;
}, cE = (n, e, t) => {
  const r = (
    /** @type {Array<GC|Item>} */
    n.clients.get(e.id.client)
  );
  r[bt(r, e.id.clock)] = t;
}, dm = (n, e, t, r, i) => {
  if (r === 0)
    return;
  const o = t + r;
  let s = fa(n, e, t), l;
  do
    l = e[s++], o < l.id.clock + l.length && fa(n, e, o), i(l);
  while (s < e.length && e[s].id.clock < o);
};
class fE {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(e, t, r) {
    this.doc = e, this.deleteSet = new Yk(), this.beforeState = vc(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = t, this.meta = /* @__PURE__ */ new Map(), this.local = r, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const Wu = (n, e) => e.deleteSet.clients.size === 0 && !GC(e.afterState, (t, r) => e.beforeState.get(r) !== t) ? !1 : (am(e.deleteSet), oE(n, e), Qk(n, e.deleteSet), !0), Uu = (n, e, t) => {
  const r = e._item;
  (r === null || r.id.clock < (n.beforeState.get(r.id.client) || 0) && !r.deleted) && nr(n.changed, e, Hn).add(t);
}, _i = (n, e) => {
  let t = n[e], r = n[e - 1], i = e;
  for (; i > 0; t = r, r = n[--i - 1]) {
    if (r.deleted === t.deleted && r.constructor === t.constructor && r.mergeWith(t)) {
      t instanceof Ce && t.parentSub !== null && /** @type {AbstractType<any>} */
      t.parent._map.get(t.parentSub) === t && t.parent._map.set(
        t.parentSub,
        /** @type {Item} */
        r
      );
      continue;
    }
    break;
  }
  const o = e - i;
  return o && n.splice(e + 1 - o, o), o;
}, uE = (n, e, t) => {
  for (const [r, i] of n.clients.entries()) {
    const o = (
      /** @type {Array<GC|Item>} */
      e.clients.get(r)
    );
    for (let s = i.length - 1; s >= 0; s--) {
      const l = i[s], a = l.clock + l.len;
      for (let c = bt(o, l.clock), f = o[c]; c < o.length && f.id.clock < a; f = o[++c]) {
        const u = o[c];
        if (l.clock + l.len <= u.id.clock)
          break;
        u instanceof Ce && u.deleted && !u.keep && t(u) && u.gc(e, !1);
      }
    }
  }
}, hE = (n, e) => {
  n.clients.forEach((t, r) => {
    const i = (
      /** @type {Array<GC|Item>} */
      e.clients.get(r)
    );
    for (let o = t.length - 1; o >= 0; o--) {
      const s = t[o], l = Kg(i.length - 1, 1 + bt(i, s.clock + s.len - 1));
      for (let a = l, c = i[a]; a > 0 && c.id.clock >= s.clock; c = i[a])
        a -= 1 + _i(i, a);
    }
  });
}, pm = (n, e) => {
  if (e < n.length) {
    const t = n[e], r = t.doc, i = r.store, o = t.deleteSet, s = t._mergeStructs;
    try {
      am(o), t.afterState = vc(t.doc.store), r.emit("beforeObserverCalls", [t, r]);
      const l = [];
      t.changed.forEach(
        (a, c) => l.push(() => {
          (c._item === null || !c._item.deleted) && c._callObserver(t, a);
        })
      ), l.push(() => {
        t.changedParentTypes.forEach((a, c) => {
          c._dEH.l.length > 0 && (c._item === null || !c._item.deleted) && (a = a.filter(
            (f) => f.target._item === null || !f.target._item.deleted
          ), a.forEach((f) => {
            f.currentTarget = c, f._path = null;
          }), a.sort((f, u) => f.path.length - u.path.length), um(c._dEH, a, t));
        });
      }), l.push(() => r.emit("afterTransaction", [t, r])), wc(l, []), t._needFormattingCleanup && kE(t);
    } finally {
      r.gc && uE(o, i, r.gcFilter), hE(o, i), t.afterState.forEach((f, u) => {
        const h = t.beforeState.get(u) || 0;
        if (h !== f) {
          const d = (
            /** @type {Array<GC|Item>} */
            i.clients.get(u)
          ), p = rr(bt(d, h), 1);
          for (let g = d.length - 1; g >= p; )
            g -= 1 + _i(d, g);
        }
      });
      for (let f = s.length - 1; f >= 0; f--) {
        const { client: u, clock: h } = s[f].id, d = (
          /** @type {Array<GC|Item>} */
          i.clients.get(u)
        ), p = bt(d, h);
        p + 1 < d.length && _i(d, p + 1) > 1 || p > 0 && _i(d, p);
      }
      if (!t.local && t.afterState.get(r.clientID) !== t.beforeState.get(r.clientID) && (Jk(Sc, em, "[yjs] ", tm, nm, "Changed the client-id because another client seems to be using it."), r.clientID = fm()), r.emit("afterTransactionCleanup", [t, r]), r._observers.has("update")) {
        const f = new eE();
        Wu(f, t) && r.emit("update", [f.toUint8Array(), t.origin, r, t]);
      }
      if (r._observers.has("updateV2")) {
        const f = new nE();
        Wu(f, t) && r.emit("updateV2", [f.toUint8Array(), t.origin, r, t]);
      }
      const { subdocsAdded: l, subdocsLoaded: a, subdocsRemoved: c } = t;
      (l.size > 0 || c.size > 0 || a.size > 0) && (l.forEach((f) => {
        f.clientID = r.clientID, f.collectionid == null && (f.collectionid = r.collectionid), r.subdocs.add(f);
      }), c.forEach((f) => r.subdocs.delete(f)), r.emit("subdocs", [{ loaded: a, added: l, removed: c }, r, t]), c.forEach((f) => f.destroy())), n.length <= e + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, n])) : pm(n, e + 1);
    }
  }
}, F = (n, e, t = null, r = !0) => {
  const i = n._transactionCleanups;
  let o = !1, s = null;
  n._transaction === null && (o = !0, n._transaction = new fE(n, t, r), i.push(n._transaction), i.length === 1 && n.emit("beforeAllTransactions", [n]), n.emit("beforeTransaction", [n._transaction, n]));
  try {
    s = e(n._transaction);
  } finally {
    if (o) {
      const l = n._transaction === i[0];
      n._transaction = null, l && pm(i, 0);
    }
  }
  return s;
}, Hu = "You must not compute changes after the event-handler fired.";
class Ss {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(e, t) {
    this.target = e, this.currentTarget = e, this.transaction = t, this._changes = null, this._keys = null, this._delta = null, this._path = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return this._path || (this._path = dE(this.currentTarget, this.target));
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(e) {
    return lm(this.transaction.deleteSet, e.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw Gn(Hu);
      const e = /* @__PURE__ */ new Map(), t = this.target;
      /** @type Set<string|null> */
      this.transaction.changed.get(t).forEach((i) => {
        if (i !== null) {
          const o = (
            /** @type {Item} */
            t._map.get(i)
          );
          let s, l;
          if (this.adds(o)) {
            let a = o.left;
            for (; a !== null && this.adds(a); )
              a = a.left;
            if (this.deletes(o))
              if (a !== null && this.deletes(a))
                s = "delete", l = qs(a.content.getContent());
              else
                return;
            else
              a !== null && this.deletes(a) ? (s = "update", l = qs(a.content.getContent())) : (s = "add", l = void 0);
          } else if (this.deletes(o))
            s = "delete", l = qs(
              /** @type {Item} */
              o.content.getContent()
            );
          else
            return;
          e.set(i, { action: s, oldValue: l });
        }
      }), this._keys = e;
    }
    return this._keys;
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(e) {
    return e.id.clock >= (this.transaction.beforeState.get(e.id.client) || 0);
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let e = this._changes;
    if (e === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw Gn(Hu);
      const t = this.target, r = Hn(), i = Hn(), o = [];
      if (e = {
        added: r,
        deleted: i,
        delta: o,
        keys: this.keys
      }, /** @type Set<string|null> */
      this.transaction.changed.get(t).has(null)) {
        let l = null;
        const a = () => {
          l && o.push(l);
        };
        for (let c = t._start; c !== null; c = c.right)
          c.deleted ? this.deletes(c) && !this.adds(c) && ((l === null || l.delete === void 0) && (a(), l = { delete: 0 }), l.delete += c.length, i.add(c)) : this.adds(c) ? ((l === null || l.insert === void 0) && (a(), l = { insert: [] }), l.insert = l.insert.concat(c.content.getContent()), r.add(c)) : ((l === null || l.retain === void 0) && (a(), l = { retain: 0 }), l.retain += c.length);
        l !== null && l.retain === void 0 && a();
      }
      this._changes = e;
    }
    return (
      /** @type {any} */
      e
    );
  }
}
const dE = (n, e) => {
  const t = [];
  for (; e._item !== null && e !== n; ) {
    if (e._item.parentSub !== null)
      t.unshift(e._item.parentSub);
    else {
      let r = 0, i = (
        /** @type {AbstractType<any>} */
        e._item.parent._start
      );
      for (; i !== e._item && i !== null; )
        !i.deleted && i.countable && (r += i.length), i = i.right;
      t.unshift(r);
    }
    e = /** @type {AbstractType<any>} */
    e._item.parent;
  }
  return t;
}, le = () => {
  Gk("Invalid access: Add Yjs type to a document before reading data.");
}, gm = 80;
let xc = 0;
class pE {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(e, t) {
    e.marker = !0, this.p = e, this.index = t, this.timestamp = xc++;
  }
}
const gE = (n) => {
  n.timestamp = xc++;
}, mm = (n, e, t) => {
  n.p.marker = !1, n.p = e, e.marker = !0, n.index = t, n.timestamp = xc++;
}, mE = (n, e, t) => {
  if (n.length >= gm) {
    const r = n.reduce((i, o) => i.timestamp < o.timestamp ? i : o);
    return mm(r, e, t), r;
  } else {
    const r = new pE(e, t);
    return n.push(r), r;
  }
}, vs = (n, e) => {
  if (n._start === null || e === 0 || n._searchMarker === null)
    return null;
  const t = n._searchMarker.length === 0 ? null : n._searchMarker.reduce((o, s) => Di(e - o.index) < Di(e - s.index) ? o : s);
  let r = n._start, i = 0;
  for (t !== null && (r = t.p, i = t.index, gE(t)); r.right !== null && i < e; ) {
    if (!r.deleted && r.countable) {
      if (e < i + r.length)
        break;
      i += r.length;
    }
    r = r.right;
  }
  for (; r.left !== null && i > e; )
    r = r.left, !r.deleted && r.countable && (i -= r.length);
  for (; r.left !== null && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock; )
    r = r.left, !r.deleted && r.countable && (i -= r.length);
  return t !== null && Di(t.index - i) < /** @type {YText|YArray<any>} */
  r.parent.length / gm ? (mm(t, r, i), t) : mE(n._searchMarker, r, i);
}, Kr = (n, e, t) => {
  for (let r = n.length - 1; r >= 0; r--) {
    const i = n[r];
    if (t > 0) {
      let o = i.p;
      for (o.marker = !1; o && (o.deleted || !o.countable); )
        o = o.left, o && !o.deleted && o.countable && (i.index -= o.length);
      if (o === null || o.marker === !0) {
        n.splice(r, 1);
        continue;
      }
      i.p = o, o.marker = !0;
    }
    (e < i.index || t > 0 && e === i.index) && (i.index = rr(e, i.index + t));
  }
}, xs = (n, e, t) => {
  const r = n, i = e.changedParentTypes;
  for (; nr(i, n, () => []).push(t), n._item !== null; )
    n = /** @type {AbstractType<any>} */
    n._item.parent;
  um(r._eH, t, e);
};
class ie {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = zu(), this._dEH = zu(), this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(e, t) {
    this.doc = e, this._item = t;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw qe();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw qe();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(e) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let e = this._start;
    for (; e !== null && e.deleted; )
      e = e.right;
    return e;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, t) {
    !e.local && this._searchMarker && (this._searchMarker.length = 0);
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(e) {
    Fu(this._eH, e);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(e) {
    Fu(this._dEH, e);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(e) {
    ju(this._eH, e);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(e) {
    ju(this._dEH, e);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const ym = (n, e, t) => {
  n.doc ?? le(), e < 0 && (e = n._length + e), t < 0 && (t = n._length + t);
  let r = t - e;
  const i = [];
  let o = n._start;
  for (; o !== null && r > 0; ) {
    if (o.countable && !o.deleted) {
      const s = o.content.getContent();
      if (s.length <= e)
        e -= s.length;
      else {
        for (let l = e; l < s.length && r > 0; l++)
          i.push(s[l]), r--;
        e = 0;
      }
    }
    o = o.right;
  }
  return i;
}, bm = (n) => {
  n.doc ?? le();
  const e = [];
  let t = n._start;
  for (; t !== null; ) {
    if (t.countable && !t.deleted) {
      const r = t.content.getContent();
      for (let i = 0; i < r.length; i++)
        e.push(r[i]);
    }
    t = t.right;
  }
  return e;
}, qr = (n, e) => {
  let t = 0, r = n._start;
  for (n.doc ?? le(); r !== null; ) {
    if (r.countable && !r.deleted) {
      const i = r.content.getContent();
      for (let o = 0; o < i.length; o++)
        e(i[o], t++, n);
    }
    r = r.right;
  }
}, wm = (n, e) => {
  const t = [];
  return qr(n, (r, i) => {
    t.push(e(r, i, n));
  }), t;
}, yE = (n) => {
  let e = n._start, t = null, r = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (t === null) {
        for (; e !== null && e.deleted; )
          e = e.right;
        if (e === null)
          return {
            done: !0,
            value: void 0
          };
        t = e.content.getContent(), r = 0, e = e.right;
      }
      const i = t[r++];
      return t.length <= r && (t = null), {
        done: !1,
        value: i
      };
    }
  };
}, Sm = (n, e) => {
  n.doc ?? le();
  const t = vs(n, e);
  let r = n._start;
  for (t !== null && (r = t.p, e -= t.index); r !== null; r = r.right)
    if (!r.deleted && r.countable) {
      if (e < r.length)
        return r.content.getContent()[e];
      e -= r.length;
    }
}, po = (n, e, t, r) => {
  let i = t;
  const o = n.doc, s = o.clientID, l = o.store, a = t === null ? e._start : t.right;
  let c = [];
  const f = () => {
    c.length > 0 && (i = new Ce(j(s, ye(l, s)), i, i && i.lastId, a, a && a.id, e, null, new qn(c)), i.integrate(n, 0), c = []);
  };
  r.forEach((u) => {
    if (u === null)
      c.push(u);
    else
      switch (u.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          c.push(u);
          break;
        default:
          switch (f(), u.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              i = new Ce(j(s, ye(l, s)), i, i && i.lastId, a, a && a.id, e, null, new Cs(new Uint8Array(
                /** @type {Uint8Array} */
                u
              ))), i.integrate(n, 0);
              break;
            case ai:
              i = new Ce(j(s, ye(l, s)), i, i && i.lastId, a, a && a.id, e, null, new ks(
                /** @type {Doc} */
                u
              )), i.integrate(n, 0);
              break;
            default:
              if (u instanceof ie)
                i = new Ce(j(s, ye(l, s)), i, i && i.lastId, a, a && a.id, e, null, new Xt(u)), i.integrate(n, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), f();
}, vm = () => Gn("Length exceeded!"), xm = (n, e, t, r) => {
  if (t > e._length)
    throw vm();
  if (t === 0)
    return e._searchMarker && Kr(e._searchMarker, t, r.length), po(n, e, null, r);
  const i = t, o = vs(e, t);
  let s = e._start;
  for (o !== null && (s = o.p, t -= o.index, t === 0 && (s = s.prev, t += s && s.countable && !s.deleted ? s.length : 0)); s !== null; s = s.right)
    if (!s.deleted && s.countable) {
      if (t <= s.length) {
        t < s.length && qt(n, j(s.id.client, s.id.clock + t));
        break;
      }
      t -= s.length;
    }
  return e._searchMarker && Kr(e._searchMarker, i, r.length), po(n, e, s, r);
}, bE = (n, e, t) => {
  let i = (e._searchMarker || []).reduce((o, s) => s.index > o.index ? s : o, { index: 0, p: e._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return po(n, e, i, t);
}, Cm = (n, e, t, r) => {
  if (r === 0)
    return;
  const i = t, o = r, s = vs(e, t);
  let l = e._start;
  for (s !== null && (l = s.p, t -= s.index); l !== null && t > 0; l = l.right)
    !l.deleted && l.countable && (t < l.length && qt(n, j(l.id.client, l.id.clock + t)), t -= l.length);
  for (; r > 0 && l !== null; )
    l.deleted || (r < l.length && qt(n, j(l.id.client, l.id.clock + r)), l.delete(n), r -= l.length), l = l.right;
  if (r > 0)
    throw vm();
  e._searchMarker && Kr(
    e._searchMarker,
    i,
    -o + r
    /* in case we remove the above exception */
  );
}, go = (n, e, t) => {
  const r = e._map.get(t);
  r !== void 0 && r.delete(n);
}, Cc = (n, e, t, r) => {
  const i = e._map.get(t) || null, o = n.doc, s = o.clientID;
  let l;
  if (r == null)
    l = new qn([r]);
  else
    switch (r.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
        l = new qn([r]);
        break;
      case Uint8Array:
        l = new Cs(
          /** @type {Uint8Array} */
          r
        );
        break;
      case ai:
        l = new ks(
          /** @type {Doc} */
          r
        );
        break;
      default:
        if (r instanceof ie)
          l = new Xt(r);
        else
          throw new Error("Unexpected content type");
    }
  new Ce(j(s, ye(o.store, s)), i, i && i.lastId, null, null, e, t, l).integrate(n, 0);
}, kc = (n, e) => {
  n.doc ?? le();
  const t = n._map.get(e);
  return t !== void 0 && !t.deleted ? t.content.getContent()[t.length - 1] : void 0;
}, km = (n) => {
  const e = {};
  return n.doc ?? le(), n._map.forEach((t, r) => {
    t.deleted || (e[r] = t.content.getContent()[t.length - 1]);
  }), e;
}, Em = (n, e) => {
  n.doc ?? le();
  const t = n._map.get(e);
  return t !== void 0 && !t.deleted;
}, wE = (n, e) => {
  const t = {};
  return n._map.forEach((r, i) => {
    let o = r;
    for (; o !== null && (!e.sv.has(o.id.client) || o.id.clock >= (e.sv.get(o.id.client) || 0)); )
      o = o.left;
    o !== null && In(o, e) && (t[i] = o.content.getContent()[o.length - 1]);
  }), t;
}, yi = (n) => (n.doc ?? le(), Kk(
  n._map.entries(),
  /** @param {any} entry */
  (e) => !e[1].deleted
));
class SE extends Ss {
}
class Or extends ie {
  constructor() {
    super(), this._prelimContent = [], this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(e) {
    const t = new Or();
    return t.push(e), t;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, t) {
    super._integrate(e, t), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new Or();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const e = new Or();
    return e.insert(0, this.toArray().map(
      (t) => t instanceof ie ? (
        /** @type {typeof el} */
        t.clone()
      ) : t
    )), e;
  }
  get length() {
    return this.doc ?? le(), this._length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, t) {
    super._callObserver(e, t), xs(this, e, new SE(this, e));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(e, t) {
    this.doc !== null ? F(this.doc, (r) => {
      xm(
        r,
        this,
        e,
        /** @type {any} */
        t
      );
    }) : this._prelimContent.splice(e, 0, ...t);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(e) {
    this.doc !== null ? F(this.doc, (t) => {
      bE(
        t,
        this,
        /** @type {any} */
        e
      );
    }) : this._prelimContent.push(...e);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<T>} content Array of content to prepend.
   */
  unshift(e) {
    this.insert(0, e);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(e, t = 1) {
    this.doc !== null ? F(this.doc, (r) => {
      Cm(r, this, e, t);
    }) : this._prelimContent.splice(e, t);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(e) {
    return Sm(this, e);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return bm(this);
  }
  /**
   * Returns a portion of this YArray into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(e = 0, t = this.length) {
    return ym(this, e, t);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((e) => e instanceof ie ? e.toJSON() : e);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(e) {
    return wm(
      this,
      /** @type {any} */
      e
    );
  }
  /**
   * Executes a provided function once on every element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    qr(this, e);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return yE(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(NE);
  }
}
class vE extends Ss {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(e, t, r) {
    super(e, t), this.keysChanged = r;
  }
}
class mo extends ie {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(e) {
    super(), this._prelimContent = null, e === void 0 ? this._prelimContent = /* @__PURE__ */ new Map() : this._prelimContent = new Map(e);
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, t) {
    super._integrate(e, t), this._prelimContent.forEach((r, i) => {
      this.set(i, r);
    }), this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new mo();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const e = new mo();
    return this.forEach((t, r) => {
      e.set(r, t instanceof ie ? (
        /** @type {typeof value} */
        t.clone()
      ) : t);
    }), e;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, t) {
    xs(this, e, new vE(this, e, t));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    this.doc ?? le();
    const e = {};
    return this._map.forEach((t, r) => {
      if (!t.deleted) {
        const i = t.content.getContent()[t.length - 1];
        e[r] = i instanceof ie ? i.toJSON() : i;
      }
    }), e;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...yi(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return el(
      yi(this),
      /** @param {any} v */
      (e) => e[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */
  values() {
    return el(
      yi(this),
      /** @param {any} v */
      (e) => e[1].content.getContent()[e[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  entries() {
    return el(
      yi(this),
      /** @param {any} v */
      (e) => (
        /** @type {any} */
        [e[0], e[1].content.getContent()[e[1].length - 1]]
      )
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    this.doc ?? le(), this._map.forEach((t, r) => {
      t.deleted || e(t.content.getContent()[t.length - 1], r, this);
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(e) {
    this.doc !== null ? F(this.doc, (t) => {
      go(t, this, e);
    }) : this._prelimContent.delete(e);
  }
  /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */
  set(e, t) {
    return this.doc !== null ? F(this.doc, (r) => {
      Cc(
        r,
        this,
        e,
        /** @type {any} */
        t
      );
    }) : this._prelimContent.set(e, t), t;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(e) {
    return (
      /** @type {any} */
      kc(this, e)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(e) {
    return Em(this, e);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? F(this.doc, (e) => {
      this.forEach(function(t, r, i) {
        go(e, i, r);
      });
    }) : this._prelimContent.clear();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(IE);
  }
}
const Ft = (n, e) => n === e || typeof n == "object" && typeof e == "object" && n && e && Nk(n, e);
class ua {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(e, t, r, i) {
    this.left = e, this.right = t, this.index = r, this.currentAttributes = i;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    switch (this.right === null && Kt(), this.right.content.constructor) {
      case Q:
        this.right.deleted || ir(
          this.currentAttributes,
          /** @type {ContentFormat} */
          this.right.content
        );
        break;
      default:
        this.right.deleted || (this.index += this.right.length);
        break;
    }
    this.left = this.right, this.right = this.right.right;
  }
}
const Ju = (n, e, t) => {
  for (; e.right !== null && t > 0; ) {
    switch (e.right.content.constructor) {
      case Q:
        e.right.deleted || ir(
          e.currentAttributes,
          /** @type {ContentFormat} */
          e.right.content
        );
        break;
      default:
        e.right.deleted || (t < e.right.length && qt(n, j(e.right.id.client, e.right.id.clock + t)), e.index += e.right.length, t -= e.right.length);
        break;
    }
    e.left = e.right, e.right = e.right.right;
  }
  return e;
}, bi = (n, e, t, r) => {
  const i = /* @__PURE__ */ new Map(), o = r ? vs(e, t) : null;
  if (o) {
    const s = new ua(o.p.left, o.p, o.index, i);
    return Ju(n, s, t - o.index);
  } else {
    const s = new ua(null, e._start, 0, i);
    return Ju(n, s, t);
  }
}, Am = (n, e, t, r) => {
  for (; t.right !== null && (t.right.deleted === !0 || t.right.content.constructor === Q && Ft(
    r.get(
      /** @type {ContentFormat} */
      t.right.content.key
    ),
    /** @type {ContentFormat} */
    t.right.content.value
  )); )
    t.right.deleted || r.delete(
      /** @type {ContentFormat} */
      t.right.content.key
    ), t.forward();
  const i = n.doc, o = i.clientID;
  r.forEach((s, l) => {
    const a = t.left, c = t.right, f = new Ce(j(o, ye(i.store, o)), a, a && a.lastId, c, c && c.id, e, null, new Q(l, s));
    f.integrate(n, 0), t.right = f, t.forward();
  });
}, ir = (n, e) => {
  const { key: t, value: r } = e;
  r === null ? n.delete(t) : n.set(t, r);
}, Om = (n, e) => {
  for (; n.right !== null; ) {
    if (!(n.right.deleted || n.right.content.constructor === Q && Ft(
      e[
        /** @type {ContentFormat} */
        n.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      n.right.content.value
    ))) break;
    n.forward();
  }
}, Tm = (n, e, t, r) => {
  const i = n.doc, o = i.clientID, s = /* @__PURE__ */ new Map();
  for (const l in r) {
    const a = r[l], c = t.currentAttributes.get(l) ?? null;
    if (!Ft(c, a)) {
      s.set(l, c);
      const { left: f, right: u } = t;
      t.right = new Ce(j(o, ye(i.store, o)), f, f && f.lastId, u, u && u.id, e, null, new Q(l, a)), t.right.integrate(n, 0), t.forward();
    }
  }
  return s;
}, rl = (n, e, t, r, i) => {
  t.currentAttributes.forEach((h, d) => {
    i[d] === void 0 && (i[d] = null);
  });
  const o = n.doc, s = o.clientID;
  Om(t, i);
  const l = Tm(n, e, t, i), a = r.constructor === String ? new wt(
    /** @type {string} */
    r
  ) : r instanceof ie ? new Xt(r) : new or(r);
  let { left: c, right: f, index: u } = t;
  e._searchMarker && Kr(e._searchMarker, t.index, a.getLength()), f = new Ce(j(s, ye(o.store, s)), c, c && c.lastId, f, f && f.id, e, null, a), f.integrate(n, 0), t.right = f, t.index = u, t.forward(), Am(n, e, t, l);
}, Gu = (n, e, t, r, i) => {
  const o = n.doc, s = o.clientID;
  Om(t, i);
  const l = Tm(n, e, t, i);
  e: for (; t.right !== null && (r > 0 || l.size > 0 && (t.right.deleted || t.right.content.constructor === Q)); ) {
    if (!t.right.deleted)
      switch (t.right.content.constructor) {
        case Q: {
          const { key: a, value: c } = (
            /** @type {ContentFormat} */
            t.right.content
          ), f = i[a];
          if (f !== void 0) {
            if (Ft(f, c))
              l.delete(a);
            else {
              if (r === 0)
                break e;
              l.set(a, c);
            }
            t.right.delete(n);
          } else
            t.currentAttributes.set(a, c);
          break;
        }
        default:
          r < t.right.length && qt(n, j(t.right.id.client, t.right.id.clock + r)), r -= t.right.length;
          break;
      }
    t.forward();
  }
  if (r > 0) {
    let a = "";
    for (; r > 0; r--)
      a += `
`;
    t.right = new Ce(j(s, ye(o.store, s)), t.left, t.left && t.left.lastId, t.right, t.right && t.right.id, e, null, new wt(a)), t.right.integrate(n, 0), t.forward();
  }
  Am(n, e, t, l);
}, Mm = (n, e, t, r, i) => {
  let o = e;
  const s = Ke();
  for (; o && (!o.countable || o.deleted); ) {
    if (!o.deleted && o.content.constructor === Q) {
      const c = (
        /** @type {ContentFormat} */
        o.content
      );
      s.set(c.key, c);
    }
    o = o.right;
  }
  let l = 0, a = !1;
  for (; e !== o; ) {
    if (t === e && (a = !0), !e.deleted) {
      const c = e.content;
      switch (c.constructor) {
        case Q: {
          const { key: f, value: u } = (
            /** @type {ContentFormat} */
            c
          ), h = r.get(f) ?? null;
          (s.get(f) !== c || h === u) && (e.delete(n), l++, !a && (i.get(f) ?? null) === u && h !== u && (h === null ? i.delete(f) : i.set(f, h))), !a && !e.deleted && ir(
            i,
            /** @type {ContentFormat} */
            c
          );
          break;
        }
      }
    }
    e = /** @type {Item} */
    e.right;
  }
  return l;
}, xE = (n, e) => {
  for (; e && e.right && (e.right.deleted || !e.right.countable); )
    e = e.right;
  const t = /* @__PURE__ */ new Set();
  for (; e && (e.deleted || !e.countable); ) {
    if (!e.deleted && e.content.constructor === Q) {
      const r = (
        /** @type {ContentFormat} */
        e.content.key
      );
      t.has(r) ? e.delete(n) : t.add(r);
    }
    e = e.left;
  }
}, CE = (n) => {
  let e = 0;
  return F(
    /** @type {Doc} */
    n.doc,
    (t) => {
      let r = (
        /** @type {Item} */
        n._start
      ), i = n._start, o = Ke();
      const s = oa(o);
      for (; i; ) {
        if (i.deleted === !1)
          switch (i.content.constructor) {
            case Q:
              ir(
                s,
                /** @type {ContentFormat} */
                i.content
              );
              break;
            default:
              e += Mm(t, r, i, o, s), o = oa(s), r = i;
              break;
          }
        i = i.right;
      }
    }
  ), e;
}, kE = (n) => {
  const e = /* @__PURE__ */ new Set(), t = n.doc;
  for (const [r, i] of n.afterState.entries()) {
    const o = n.beforeState.get(r) || 0;
    i !== o && dm(
      n,
      /** @type {Array<Item|GC>} */
      t.store.clients.get(r),
      o,
      i,
      (s) => {
        !s.deleted && /** @type {Item} */
        s.content.constructor === Q && s.constructor !== $t && e.add(
          /** @type {any} */
          s.parent
        );
      }
    );
  }
  F(t, (r) => {
    sm(n, n.deleteSet, (i) => {
      if (i instanceof $t || !/** @type {YText} */
      i.parent._hasFormatting || e.has(
        /** @type {YText} */
        i.parent
      ))
        return;
      const o = (
        /** @type {YText} */
        i.parent
      );
      i.content.constructor === Q ? e.add(o) : xE(r, i);
    });
    for (const i of e)
      CE(i);
  });
}, Ku = (n, e, t) => {
  const r = t, i = oa(e.currentAttributes), o = e.right;
  for (; t > 0 && e.right !== null; ) {
    if (e.right.deleted === !1)
      switch (e.right.content.constructor) {
        case Xt:
        case or:
        case wt:
          t < e.right.length && qt(n, j(e.right.id.client, e.right.id.clock + t)), t -= e.right.length, e.right.delete(n);
          break;
      }
    e.forward();
  }
  o && Mm(n, o, e.right, i, e.currentAttributes);
  const s = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (e.left || e.right).parent
  );
  return s._searchMarker && Kr(s._searchMarker, e.index, -r + t), e;
};
class EE extends Ss {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(e, t, r) {
    super(e, t), this.childListChanged = !1, this.keysChanged = /* @__PURE__ */ new Set(), r.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.keysChanged.add(i);
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const e = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = e;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const e = (
        /** @type {Doc} */
        this.target.doc
      ), t = [];
      F(e, (r) => {
        const i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
        let s = this.target._start, l = null;
        const a = {};
        let c = "", f = 0, u = 0;
        const h = () => {
          if (l !== null) {
            let d = null;
            switch (l) {
              case "delete":
                u > 0 && (d = { delete: u }), u = 0;
                break;
              case "insert":
                (typeof c == "object" || c.length > 0) && (d = { insert: c }, i.size > 0 && (d.attributes = {}, i.forEach((p, g) => {
                  p !== null && (d.attributes[g] = p);
                }))), c = "";
                break;
              case "retain":
                f > 0 && (d = { retain: f }, Ok(a) || (d.attributes = kk({}, a))), f = 0;
                break;
            }
            d && t.push(d), l = null;
          }
        };
        for (; s !== null; ) {
          switch (s.content.constructor) {
            case Xt:
            case or:
              this.adds(s) ? this.deletes(s) || (h(), l = "insert", c = s.content.getContent()[0], h()) : this.deletes(s) ? (l !== "delete" && (h(), l = "delete"), u += 1) : s.deleted || (l !== "retain" && (h(), l = "retain"), f += 1);
              break;
            case wt:
              this.adds(s) ? this.deletes(s) || (l !== "insert" && (h(), l = "insert"), c += /** @type {ContentString} */
              s.content.str) : this.deletes(s) ? (l !== "delete" && (h(), l = "delete"), u += s.length) : s.deleted || (l !== "retain" && (h(), l = "retain"), f += s.length);
              break;
            case Q: {
              const { key: d, value: p } = (
                /** @type {ContentFormat} */
                s.content
              );
              if (this.adds(s)) {
                if (!this.deletes(s)) {
                  const g = i.get(d) ?? null;
                  Ft(g, p) ? p !== null && s.delete(r) : (l === "retain" && h(), Ft(p, o.get(d) ?? null) ? delete a[d] : a[d] = p);
                }
              } else if (this.deletes(s)) {
                o.set(d, p);
                const g = i.get(d) ?? null;
                Ft(g, p) || (l === "retain" && h(), a[d] = g);
              } else if (!s.deleted) {
                o.set(d, p);
                const g = a[d];
                g !== void 0 && (Ft(g, p) ? g !== null && s.delete(r) : (l === "retain" && h(), p === null ? delete a[d] : a[d] = p));
              }
              s.deleted || (l === "insert" && h(), ir(
                i,
                /** @type {ContentFormat} */
                s.content
              ));
              break;
            }
          }
          s = s.right;
        }
        for (h(); t.length > 0; ) {
          const d = t[t.length - 1];
          if (d.retain !== void 0 && d.attributes === void 0)
            t.pop();
          else
            break;
        }
      }), this._delta = t;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
}
class Yr extends ie {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(e) {
    super(), this._pending = e !== void 0 ? [() => this.insert(0, e)] : [], this._searchMarker = [], this._hasFormatting = !1;
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    return this.doc ?? le(), this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(e, t) {
    super._integrate(e, t);
    try {
      this._pending.forEach((r) => r());
    } catch (r) {
      console.error(r);
    }
    this._pending = null;
  }
  _copy() {
    return new Yr();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const e = new Yr();
    return e.applyDelta(this.toDelta()), e;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, t) {
    super._callObserver(e, t);
    const r = new EE(this, e, t);
    xs(this, e, r), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    this.doc ?? le();
    let e = "", t = this._start;
    for (; t !== null; )
      !t.deleted && t.countable && t.content.constructor === wt && (e += /** @type {ContentString} */
      t.content.str), t = t.right;
    return e;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {any} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(e, { sanitize: t = !0 } = {}) {
    this.doc !== null ? F(this.doc, (r) => {
      const i = new ua(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let o = 0; o < e.length; o++) {
        const s = e[o];
        if (s.insert !== void 0) {
          const l = !t && typeof s.insert == "string" && o === e.length - 1 && i.right === null && s.insert.slice(-1) === `
` ? s.insert.slice(0, -1) : s.insert;
          (typeof l != "string" || l.length > 0) && rl(r, this, i, l, s.attributes || {});
        } else s.retain !== void 0 ? Gu(r, this, i, s.retain, s.attributes || {}) : s.delete !== void 0 && Ku(r, i, s.delete);
      }
    }) : this._pending.push(() => this.applyDelta(e));
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(e, t, r) {
    this.doc ?? le();
    const i = [], o = /* @__PURE__ */ new Map(), s = (
      /** @type {Doc} */
      this.doc
    );
    let l = "", a = this._start;
    function c() {
      if (l.length > 0) {
        const u = {};
        let h = !1;
        o.forEach((p, g) => {
          h = !0, u[g] = p;
        });
        const d = { insert: l };
        h && (d.attributes = u), i.push(d), l = "";
      }
    }
    const f = () => {
      for (; a !== null; ) {
        if (In(a, e) || t !== void 0 && In(a, t))
          switch (a.content.constructor) {
            case wt: {
              const u = o.get("ychange");
              e !== void 0 && !In(a, e) ? (u === void 0 || u.user !== a.id.client || u.type !== "removed") && (c(), o.set("ychange", r ? r("removed", a.id) : { type: "removed" })) : t !== void 0 && !In(a, t) ? (u === void 0 || u.user !== a.id.client || u.type !== "added") && (c(), o.set("ychange", r ? r("added", a.id) : { type: "added" })) : u !== void 0 && (c(), o.delete("ychange")), l += /** @type {ContentString} */
              a.content.str;
              break;
            }
            case Xt:
            case or: {
              c();
              const u = {
                insert: a.content.getContent()[0]
              };
              if (o.size > 0) {
                const h = (
                  /** @type {Object<string,any>} */
                  {}
                );
                u.attributes = h, o.forEach((d, p) => {
                  h[p] = d;
                });
              }
              i.push(u);
              break;
            }
            case Q:
              In(a, e) && (c(), ir(
                o,
                /** @type {ContentFormat} */
                a.content
              ));
              break;
          }
        a = a.right;
      }
      c();
    };
    return e || t ? F(s, (u) => {
      e && ca(u, e), t && ca(u, t), f();
    }, "cleanup") : f(), i;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(e, t, r) {
    if (t.length <= 0)
      return;
    const i = this.doc;
    i !== null ? F(i, (o) => {
      const s = bi(o, this, e, !r);
      r || (r = {}, s.currentAttributes.forEach((l, a) => {
        r[a] = l;
      })), rl(o, this, s, t, r);
    }) : this._pending.push(() => this.insert(e, t, r));
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(e, t, r) {
    const i = this.doc;
    i !== null ? F(i, (o) => {
      const s = bi(o, this, e, !r);
      rl(o, this, s, t, r || {});
    }) : this._pending.push(() => this.insertEmbed(e, t, r || {}));
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(e, t) {
    if (t === 0)
      return;
    const r = this.doc;
    r !== null ? F(r, (i) => {
      Ku(i, bi(i, this, e, !0), t);
    }) : this._pending.push(() => this.delete(e, t));
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(e, t, r) {
    if (t === 0)
      return;
    const i = this.doc;
    i !== null ? F(i, (o) => {
      const s = bi(o, this, e, !1);
      s.right !== null && Gu(o, this, s, t, r);
    }) : this._pending.push(() => this.format(e, t, r));
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(e) {
    this.doc !== null ? F(this.doc, (t) => {
      go(t, this, e);
    }) : this._pending.push(() => this.removeAttribute(e));
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(e, t) {
    this.doc !== null ? F(this.doc, (r) => {
      Cc(r, this, e, t);
    }) : this._pending.push(() => this.setAttribute(e, t));
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(e) {
    return (
      /** @type {any} */
      kc(this, e)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return km(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(RE);
  }
}
class il {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(e, t = () => !0) {
    this._filter = t, this._root = e, this._currentNode = /** @type {Item} */
    e._start, this._firstCall = !0, e.doc ?? le();
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let e = this._currentNode, t = e && e.content && /** @type {any} */
    e.content.type;
    if (e !== null && (!this._firstCall || e.deleted || !this._filter(t)))
      do
        if (t = /** @type {any} */
        e.content.type, !e.deleted && (t.constructor === Xr || t.constructor === Kn) && t._start !== null)
          e = t._start;
        else
          for (; e !== null; )
            if (e.right !== null) {
              e = e.right;
              break;
            } else e.parent === this._root ? e = null : e = /** @type {AbstractType<any>} */
            e.parent._item;
      while (e !== null && (e.deleted || !this._filter(
        /** @type {ContentType} */
        e.content.type
      )));
    return this._firstCall = !1, e === null ? { value: void 0, done: !0 } : (this._currentNode = e, { value: (
      /** @type {any} */
      e.content.type
    ), done: !1 });
  }
}
class Kn extends ie {
  constructor() {
    super(), this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const e = this._first;
    return e ? e.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, t) {
    super._integrate(e, t), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  _copy() {
    return new Kn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const e = new Kn();
    return e.insert(0, this.toArray().map((t) => t instanceof ie ? t.clone() : t)), e;
  }
  get length() {
    return this.doc ?? le(), this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(e) {
    return new il(this, e);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(e) {
    e = e.toUpperCase();
    const r = new il(this, (i) => i.nodeName && i.nodeName.toUpperCase() === e).next();
    return r.done ? null : r.value;
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(e) {
    return e = e.toUpperCase(), Jn(new il(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, t) {
    xs(this, e, new AE(this, t, e));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return wm(this, (e) => e.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, t = {}, r) {
    const i = e.createDocumentFragment();
    return r !== void 0 && r._createAssociation(i, this), qr(this, (o) => {
      i.insertBefore(o.toDOM(e, t, r), null);
    }), i;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(e, t) {
    this.doc !== null ? F(this.doc, (r) => {
      xm(r, this, e, t);
    }) : this._prelimContent.splice(e, 0, ...t);
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(e, t) {
    if (this.doc !== null)
      F(this.doc, (r) => {
        const i = e && e instanceof ie ? e._item : e;
        po(r, this, i, t);
      });
    else {
      const r = (
        /** @type {Array<any>} */
        this._prelimContent
      ), i = e === null ? 0 : r.findIndex((o) => o === e) + 1;
      if (i === 0 && e !== null)
        throw Gn("Reference item not found");
      r.splice(i, 0, ...t);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(e, t = 1) {
    this.doc !== null ? F(this.doc, (r) => {
      Cm(r, this, e, t);
    }) : this._prelimContent.splice(e, t);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return bm(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(e) {
    this.insert(this.length, e);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
   */
  unshift(e) {
    this.insert(0, e);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(e) {
    return Sm(this, e);
  }
  /**
   * Returns a portion of this YXmlFragment into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(e = 0, t = this.length) {
    return ym(this, e, t);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    qr(this, e);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(e) {
    e.writeTypeRef($E);
  }
}
class Xr extends Kn {
  constructor(e = "UNDEFINED") {
    super(), this.nodeName = e, this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const e = this._item ? this._item.next : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const e = this._item ? this._item.prev : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, t) {
    super._integrate(e, t), /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((r, i) => {
      this.setAttribute(i, r);
    }), this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new Xr(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const e = new Xr(this.nodeName), t = this.getAttributes();
    return Ak(t, (r, i) => {
      typeof r == "string" && e.setAttribute(i, r);
    }), e.insert(0, this.toArray().map((r) => r instanceof ie ? r.clone() : r)), e;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const e = this.getAttributes(), t = [], r = [];
    for (const l in e)
      r.push(l);
    r.sort();
    const i = r.length;
    for (let l = 0; l < i; l++) {
      const a = r[l];
      t.push(a + '="' + e[a] + '"');
    }
    const o = this.nodeName.toLocaleLowerCase(), s = t.length > 0 ? " " + t.join(" ") : "";
    return `<${o}${s}>${super.toString()}</${o}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(e) {
    this.doc !== null ? F(this.doc, (t) => {
      go(t, this, e);
    }) : this._prelimAttrs.delete(e);
  }
  /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(e, t) {
    this.doc !== null ? F(this.doc, (r) => {
      Cc(r, this, e, t);
    }) : this._prelimAttrs.set(e, t);
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */
  getAttribute(e) {
    return (
      /** @type {any} */
      kc(this, e)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(e) {
    return (
      /** @type {any} */
      Em(this, e)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes(e) {
    return (
      /** @type {any} */
      e ? wE(this, e) : km(this)
    );
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, t = {}, r) {
    const i = e.createElement(this.nodeName), o = this.getAttributes();
    for (const s in o) {
      const l = o[s];
      typeof l == "string" && i.setAttribute(s, l);
    }
    return qr(this, (s) => {
      i.appendChild(s.toDOM(e, t, r));
    }), r !== void 0 && r._createAssociation(i, this), i;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(e) {
    e.writeTypeRef(DE), e.writeKey(this.nodeName);
  }
}
class AE extends Ss {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with wich the
   *                                  change was created.
   */
  constructor(e, t, r) {
    super(e, r), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), t.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.attributesChanged.add(i);
    });
  }
}
class Qr extends Yr {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const e = this._item ? this._item.next : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const e = this._item ? this._item.prev : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  _copy() {
    return new Qr();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const e = new Qr();
    return e.applyDelta(this.toDelta()), e;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, t, r) {
    const i = e.createTextNode(this.toString());
    return r !== void 0 && r._createAssociation(i, this), i;
  }
  toString() {
    return this.toDelta().map((e) => {
      const t = [];
      for (const i in e.attributes) {
        const o = [];
        for (const s in e.attributes[i])
          o.push({ key: s, value: e.attributes[i][s] });
        o.sort((s, l) => s.key < l.key ? -1 : 1), t.push({ nodeName: i, attrs: o });
      }
      t.sort((i, o) => i.nodeName < o.nodeName ? -1 : 1);
      let r = "";
      for (let i = 0; i < t.length; i++) {
        const o = t[i];
        r += `<${o.nodeName}`;
        for (let s = 0; s < o.attrs.length; s++) {
          const l = o.attrs[s];
          r += ` ${l.key}="${l.value}"`;
        }
        r += ">";
      }
      r += e.insert;
      for (let i = t.length - 1; i >= 0; i--)
        r += `</${t[i].nodeName}>`;
      return r;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(PE);
  }
}
class Nm {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(e, t) {
    this.id = e, this.length = t;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw qe();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} wether this merged with right
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(e, t, r) {
    throw qe();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, t) {
    throw qe();
  }
}
const OE = 0;
class $t extends Nm {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.constructor !== e.constructor ? !1 : (this.length += e.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, t) {
    t > 0 && (this.id.clock += t, this.length -= t), hm(e.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeInfo(OE), e.writeLen(this.length - t);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(e, t) {
    return null;
  }
}
class Cs {
  /**
   * @param {Uint8Array} content
   */
  constructor(e) {
    this.content = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new Cs(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(e) {
    throw qe();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
}
class yo {
  /**
   * @param {number} len
   */
  constructor(e) {
    this.len = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new yo(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(e) {
    const t = new yo(this.len - e);
    return this.len = e, t;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.len += e.len, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
    cm(e.deleteSet, t.id.client, t.id.clock, this.len), t.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeLen(this.len - t);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
}
const TE = (n, e) => new ai({ guid: n, ...e, shouldLoad: e.shouldLoad || e.autoLoad || !1 });
class ks {
  /**
   * @param {Doc} doc
   */
  constructor(e) {
    e._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = e;
    const t = {};
    this.opts = t, e.gc || (t.gc = !1), e.autoLoad && (t.autoLoad = !0), e.meta !== null && (t.meta = e.meta);
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new ks(TE(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(e) {
    throw qe();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
    this.doc._item = t, e.subdocsAdded.add(this.doc), this.doc.shouldLoad && e.subdocsLoaded.add(this.doc);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
    e.subdocsAdded.has(this.doc) ? e.subdocsAdded.delete(this.doc) : e.subdocsRemoved.add(this.doc);
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeString(this.doc.guid), e.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
}
class or {
  /**
   * @param {Object} embed
   */
  constructor(e) {
    this.embed = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new or(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(e) {
    throw qe();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
}
class Q {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(e, t) {
    this.key = e, this.value = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new Q(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(e) {
    throw qe();
  }
  /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */
  integrate(e, t) {
    const r = (
      /** @type {YText} */
      t.parent
    );
    r._searchMarker = null, r._hasFormatting = !0;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeKey(this.key), e.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
}
const ME = uo("node_env") === "development";
class qn {
  /**
   * @param {Array<any>} arr
   */
  constructor(e) {
    this.arr = e, ME && Qg(e);
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new qn(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(e) {
    const t = new qn(this.arr.slice(e));
    return this.arr = this.arr.slice(0, e), t;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.arr = this.arr.concat(e.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    const r = this.arr.length;
    e.writeLen(r - t);
    for (let i = t; i < r; i++) {
      const o = this.arr[i];
      e.writeAny(o);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
}
class wt {
  /**
   * @param {string} str
   */
  constructor(e) {
    this.str = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new wt(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(e) {
    const t = new wt(this.str.slice(e));
    this.str = this.str.slice(0, e);
    const r = this.str.charCodeAt(e - 1);
    return r >= 55296 && r <= 56319 && (this.str = this.str.slice(0, e - 1) + "�", t.str = "�" + t.str.slice(1)), t;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.str += e.str, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeString(t === 0 ? this.str : this.str.slice(t));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
}
const NE = 0, IE = 1, RE = 2, DE = 3, $E = 4, PE = 6;
class Xt {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(e) {
    this.type = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new Xt(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(e) {
    throw qe();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
    this.type._integrate(e.doc, t);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
    let t = this.type._start;
    for (; t !== null; )
      t.deleted ? t.id.clock < (e.beforeState.get(t.id.client) || 0) && e._mergeStructs.push(t) : t.delete(e), t = t.right;
    this.type._map.forEach((r) => {
      r.deleted ? r.id.clock < (e.beforeState.get(r.id.client) || 0) && e._mergeStructs.push(r) : r.delete(e);
    }), e.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
    let t = this.type._start;
    for (; t !== null; )
      t.gc(e, !0), t = t.right;
    this.type._start = null, this.type._map.forEach(
      /** @param {Item | null} item */
      (r) => {
        for (; r !== null; )
          r.gc(e, !0), r = r.left;
      }
    ), this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    this.type._write(e);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
}
const Im = (n, e, t) => {
  const { client: r, clock: i } = e.id, o = new Ce(
    j(r, i + t),
    e,
    j(r, i + t - 1),
    e.right,
    e.rightOrigin,
    e.parent,
    e.parentSub,
    e.content.splice(t)
  );
  return e.deleted && o.markDeleted(), e.keep && (o.keep = !0), e.redone !== null && (o.redone = j(e.redone.client, e.redone.clock + t)), e.right = o, o.right !== null && (o.right.left = o), n._mergeStructs.push(o), o.parentSub !== null && o.right === null && o.parent._map.set(o.parentSub, o), e.length = t, o;
};
let Ce = class ha extends Nm {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(e, t, r, i, o, s, l, a) {
    super(e, a.getLength()), this.origin = r, this.left = t, this.right = i, this.rightOrigin = o, this.parent = s, this.parentSub = l, this.redone = null, this.content = a, this.info = this.content.isCountable() ? Mu : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(e) {
    (this.info & Xs) > 0 !== e && (this.info ^= Xs);
  }
  get marker() {
    return (this.info & Xs) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & Tu) > 0;
  }
  set keep(e) {
    this.keep !== e && (this.info ^= Tu);
  }
  get countable() {
    return (this.info & Mu) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & Ys) > 0;
  }
  set deleted(e) {
    this.deleted !== e && (this.info ^= Ys);
  }
  markDeleted() {
    this.info |= Ys;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(e, t) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= ye(t, this.origin.client))
      return this.origin.client;
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= ye(t, this.rightOrigin.client))
      return this.rightOrigin.client;
    if (this.parent && this.parent.constructor === Pi && this.id.client !== this.parent.client && this.parent.clock >= ye(t, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = Vu(e, t, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = qt(e, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === $t || this.right && this.right.constructor === $t)
      this.parent = null;
    else if (!this.parent)
      this.left && this.left.constructor === ha && (this.parent = this.left.parent, this.parentSub = this.left.parentSub), this.right && this.right.constructor === ha && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === Pi) {
      const r = nl(t, this.parent);
      r.constructor === $t ? this.parent = null : this.parent = /** @type {ContentType} */
      r.content.type;
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, t) {
    if (t > 0 && (this.id.clock += t, this.left = Vu(e, e.doc.store, j(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(t), this.length -= t), this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let r = this.left, i;
        if (r !== null)
          i = r.right;
        else if (this.parentSub !== null)
          for (i = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; i !== null && i.left !== null; )
            i = i.left;
        else
          i = /** @type {AbstractType<any>} */
          this.parent._start;
        const o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
        for (; i !== null && i !== this.right; ) {
          if (s.add(i), o.add(i), gi(this.origin, i.origin)) {
            if (i.id.client < this.id.client)
              r = i, o.clear();
            else if (gi(this.rightOrigin, i.rightOrigin))
              break;
          } else if (i.origin !== null && s.has(nl(e.doc.store, i.origin)))
            o.has(nl(e.doc.store, i.origin)) || (r = i, o.clear());
          else
            break;
          i = i.right;
        }
        this.left = r;
      }
      if (this.left !== null) {
        const r = this.left.right;
        this.right = r, this.left.right = this;
      } else {
        let r;
        if (this.parentSub !== null)
          for (r = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; r !== null && r.left !== null; )
            r = r.left;
        else
          r = /** @type {AbstractType<any>} */
          this.parent._start, this.parent._start = this;
        this.right = r;
      }
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), hm(e.doc.store, this), this.content.integrate(e, this), Uu(
        e,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      ), /** @type {AbstractType<any>} */
      (this.parent._item !== null && /** @type {AbstractType<any>} */
      this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
    } else
      new $t(this.id, this.length).integrate(e, 0);
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let e = this.right;
    for (; e !== null && e.deleted; )
      e = e.right;
    return e;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let e = this.left;
    for (; e !== null && e.deleted; )
      e = e.left;
    return e;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : j(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(e) {
    if (this.constructor === e.constructor && gi(e.origin, this.lastId) && this.right === e && gi(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
      const t = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      return t && t.forEach((r) => {
        r.p === e && (r.p = this, !this.deleted && this.countable && (r.index -= this.length));
      }), e.keep && (this.keep = !0), this.right = e.right, this.right !== null && (this.right.left = this), this.length += e.length, !0;
    }
    return !1;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(e) {
    if (!this.deleted) {
      const t = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      this.countable && this.parentSub === null && (t._length -= this.length), this.markDeleted(), cm(e.deleteSet, this.id.client, this.id.clock, this.length), Uu(e, t, this.parentSub), this.content.delete(e);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(e, t) {
    if (!this.deleted)
      throw Kt();
    this.content.gc(e), t ? cE(e, this, new $t(this.id, this.length)) : this.content = new yo(this.length);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(e, t) {
    const r = t > 0 ? j(this.id.client, this.id.clock + t - 1) : this.origin, i = this.rightOrigin, o = this.parentSub, s = this.content.getRef() & QC | (r === null ? 0 : fo) | // origin is defined
    (i === null ? 0 : qg) | // right origin is defined
    (o === null ? 0 : XC);
    if (e.writeInfo(s), r !== null && e.writeLeftID(r), i !== null && e.writeRightID(i), r === null && i === null) {
      const l = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (l._item !== void 0) {
        const a = l._item;
        if (a === null) {
          const c = Gr(l);
          e.writeParentInfo(!0), e.writeString(c);
        } else
          e.writeParentInfo(!1), e.writeLeftID(a.id);
      } else l.constructor === String ? (e.writeParentInfo(!0), e.writeString(l)) : l.constructor === Pi ? (e.writeParentInfo(!1), e.writeLeftID(l)) : Kt();
      o !== null && e.writeString(o);
    }
    this.content.write(e, t);
  }
};
const Rm = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), Dm = "__ $YJS$ __";
Rm[Dm] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
Rm[Dm] = !0;
const _E = new et("y-sync");
new et("y-undo");
new et("yjs-cursor");
const LE = (n, e, t) => {
  if (n === 0)
    return tl(e, 0, -1);
  let r = e._first === null ? null : (
    /** @type {Y.ContentType} */
    e._first.content.type
  );
  for (; r !== null && e !== r; ) {
    if (r instanceof Qr) {
      if (r._length >= n)
        return tl(r, n, -1);
      if (n -= r._length, r._item !== null && r._item.next !== null)
        r = /** @type {Y.ContentType} */
        r._item.next.content.type;
      else {
        do
          r = r._item === null ? null : r._item.parent, n--;
        while (r !== e && r !== null && r._item !== null && r._item.next === null);
        r !== null && r !== e && (r = r._item === null ? null : (
          /** @type {Y.ContentType} */
          /** @type Y.Item */
          r._item.next.content.type
        ));
      }
    } else {
      const i = (
        /** @type {any} */
        (t.get(r) || { nodeSize: 0 }).nodeSize
      );
      if (r._first !== null && n < i)
        r = /** @type {Y.ContentType} */
        r._first.content.type, n--;
      else {
        if (n === 1 && r._length === 0 && i > 1)
          return new ho(r._item === null ? null : r._item.id, r._item === null ? Gr(r) : null, null);
        if (n -= i, r._item !== null && r._item.next !== null)
          r = /** @type {Y.ContentType} */
          r._item.next.content.type;
        else {
          if (n === 0)
            return r = r._item === null ? r : r._item.parent, new ho(r._item === null ? null : r._item.id, r._item === null ? Gr(r) : null, null);
          do
            r = /** @type {Y.Item} */
            r._item.parent, n--;
          while (r !== e && /** @type {Y.Item} */
          r._item.next === null);
          r !== e && (r = /** @type {Y.ContentType} */
          /** @type {Y.Item} */
          /** @type {Y.Item} */
          r._item.next.content.type);
        }
      }
    }
    if (r === null)
      throw Kt();
    if (n === 0 && r.constructor !== Qr && r !== e)
      return BE(r._item.parent, r._item);
  }
  return tl(e, e._length, -1);
}, BE = (n, e) => {
  let t = null, r = null;
  return n._item === null ? r = Gr(n) : t = j(n._item.id.client, n._item.id.clock), new ho(t, r, e.id);
};
function Ec(n, e, t) {
  const r = [], i = n.node(0);
  t = typeof t == "number" && t >= 0 ? t : n.sameParent(e) ? Math.max(0, n.sharedDepth(e.pos) - 1) : n.sharedDepth(e.pos);
  const o = new Pr(n, e, t), s = o.depth === 0 ? 0 : i.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((l, a) => {
    const c = s + a, f = c + l.nodeSize;
    if (c < o.start || c >= o.end)
      return;
    const u = new Ga(i.resolve(c), i.resolve(f));
    r.push(u);
  }), r;
}
class Ac {
  constructor(e, t) {
    fi(this, "anchor");
    fi(this, "head");
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Ac(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const t = e.resolve(this.anchor), r = e.resolve(this.head);
    return new Ue(t, r);
  }
}
class Ue extends T {
  constructor(t, r, i, o = 1) {
    const { doc: s } = t, l = t === r, a = t.pos === s.content.size && r.pos === s.content.size, c = l && !a ? s.resolve(r.pos + (o > 0 ? 1 : -1)) : r, f = l && a ? s.resolve(t.pos - (o > 0 ? 1 : -1)) : t, u = Ec(f.min(c), f.max(c), i);
    super(c.pos >= t.pos ? u[0].$from : u[u.length - 1].$to, c.pos >= t.pos ? u[u.length - 1].$to : u[0].$from, u);
    fi(this, "depth");
    this.depth = i;
  }
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(t) {
    return t instanceof Ue && t.$from.pos === this.$from.pos && t.$to.pos === this.$to.pos;
  }
  map(t, r) {
    const i = t.resolve(r.map(this.anchor)), o = t.resolve(r.map(this.head));
    return new Ue(i, o);
  }
  toJSON() {
    return { type: "nodeRange", anchor: this.anchor, head: this.head };
  }
  get isForwards() {
    return this.head >= this.anchor;
  }
  get isBackwards() {
    return !this.isForwards;
  }
  extendBackwards() {
    const { doc: t } = this.$from;
    if (this.isForwards && this.ranges.length > 1) {
      const o = this.ranges.slice(0, -1), s = o[0].$from, l = o[o.length - 1].$to;
      return new Ue(s, l, this.depth);
    }
    const r = this.ranges[0], i = t.resolve(Math.max(0, r.$from.pos - 1));
    return new Ue(this.$anchor, i, this.depth);
  }
  extendForwards() {
    const { doc: t } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const o = this.ranges.slice(1), s = o[0].$from, l = o[o.length - 1].$to;
      return new Ue(l, s, this.depth);
    }
    const r = this.ranges[this.ranges.length - 1], i = t.resolve(Math.min(t.content.size, r.$to.pos + 1));
    return new Ue(this.$anchor, i, this.depth);
  }
  static fromJSON(t, r) {
    return new Ue(t.resolve(r.anchor), t.resolve(r.head));
  }
  static create(t, r, i, o, s = 1) {
    return new this(t.resolve(r), t.resolve(i), o, s);
  }
  getBookmark() {
    return new Ac(this.anchor, this.head);
  }
}
function zE(n) {
  const e = n.cloneNode(!0), t = [n, ...Array.from(n.getElementsByTagName("*"))], r = [e, ...Array.from(e.getElementsByTagName("*"))];
  return t.forEach((i, o) => {
    r[o].style.cssText = function(s) {
      let l = "";
      const a = getComputedStyle(s);
      for (let c = 0; c < a.length; c += 1)
        l += `${a[c]}:${a.getPropertyValue(a[c])};`;
      return l;
    }(i);
  }), e;
}
function wi(n, e) {
  return window.getComputedStyle(n)[e];
}
function FE(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function qu(n) {
  n.parentNode !== null && n.parentNode !== void 0 && n.parentNode.removeChild(n);
}
const $m = (n) => {
  const { x: e, y: t, direction: r, editor: i } = n;
  let o = null, s = null, l = null, a = e;
  for (; s === null && a < window.innerWidth && a > 0; ) {
    const c = document.elementsFromPoint(a, t), f = c.findIndex((h) => h.classList.contains("ProseMirror")), u = c.slice(0, f);
    if (u.length > 0) {
      const h = u[0];
      if (o = h, l = i.view.posAtDOM(h, 0), l >= 0) {
        s = i.state.doc.nodeAt(Math.max(l - 1, 0)), (s === null || s.isText) && (s = i.state.doc.nodeAt(Math.max(l - 1, 0))), s || (s = i.state.doc.nodeAt(Math.max(l, 0)));
        break;
      }
    }
    r === "left" ? a -= 1 : a += 1;
  }
  return { resultElement: o, resultNode: s, pos: l !== null ? l : null };
};
function jE(n, e) {
  const { doc: t } = e.view.state, r = $m({ editor: e, x: n.clientX, y: n.clientY, direction: "right" });
  if (!r.resultNode || r.pos === null)
    return [];
  const i = n.clientX, o = function(f, u, h) {
    const d = parseInt(wi(f.dom, "paddingLeft"), 10), p = parseInt(wi(f.dom, "paddingRight"), 10), g = parseInt(wi(f.dom, "borderLeftWidth"), 10), m = parseInt(wi(f.dom, "borderLeftWidth"), 10), y = f.dom.getBoundingClientRect();
    return { left: FE(u, y.left + d + g, y.right - p - m), top: h };
  }(e.view, i, n.clientY), s = e.view.posAtCoords(o);
  if (!s)
    return [];
  const { pos: l } = s;
  if (!t.resolve(l).parent)
    return [];
  const a = t.resolve(r.pos), c = t.resolve(r.pos + 1);
  return Ec(a, c, 0);
}
const Yu = (n, e) => {
  const t = n.resolve(e), { depth: r } = t;
  return r === 0 ? e : t.pos - t.parentOffset - 1;
}, Xu = (n, e) => {
  const t = n.nodeAt(e), r = n.resolve(e);
  let { depth: i } = r, o = t;
  for (; i > 0; ) {
    const s = r.node(i);
    i -= 1, i === 0 && (o = s);
  }
  return o;
}, ol = (n, e) => {
  const t = _E.getState(n);
  return t ? LE(e, t.type, t.binding.mapping) : null;
}, Qu = (n, e) => {
  let t = e;
  for (; t && t.parentNode && t.parentNode !== n.dom; )
    t = t.parentNode;
  return t;
}, VE = new et("dragHandle"), PR = ({ pluginKey: n = VE, element: e, editor: t, tippyOptions: r, onNodeChange: i }) => {
  const o = document.createElement("div");
  let s = null, l = !1, a = null, c = -1;
  return e.addEventListener("dragstart", (f) => {
    const { view: u } = t;
    if (!f.dataTransfer)
      return;
    const { empty: h, $from: d, $to: p } = u.state.selection, g = jE(f, t), m = Ec(d, p, 0), y = m.some((C) => g.find((U) => U.$from === C.$from && U.$to === C.$to)), v = h || !y ? g : m;
    if (!v.length)
      return;
    const { tr: k } = u.state, A = document.createElement("div"), O = v[0].$from.pos, x = v[v.length - 1].$to.pos, N = Ue.create(u.state.doc, O, x), $ = N.content();
    v.forEach((C) => {
      const U = zE(u.nodeDOM(C.$from.pos));
      A.append(U);
    }), A.style.position = "absolute", A.style.top = "-10000px", document.body.append(A), f.dataTransfer.clearData(), f.dataTransfer.setDragImage(A, 0, 0), u.dragging = { slice: $, move: !0 }, k.setSelection(N), u.dispatch(k), document.addEventListener("drop", () => qu(A), { once: !0 }), setTimeout(() => {
      e && (e.style.pointerEvents = "none");
    }, 0);
  }), e.addEventListener("dragend", () => {
    e && (e.style.pointerEvents = "auto");
  }), new bn({
    key: typeof n == "string" ? new et(n) : n,
    state: {
      init: () => ({ locked: !1 }),
      apply(f, u, h, d) {
        const p = f.getMeta("lockDragHandle"), g = f.getMeta("hideDragHandle");
        if (p !== void 0 && (l = p), g && s)
          return s.hide(), l = !1, a = null, c = -1, i == null || i({ editor: t, node: null, pos: -1 }), u;
        if (f.docChanged && c !== -1 && e && s) {
          const m = f.mapping.map(c);
          m !== c && (c = m, ol(d, c));
        }
        return u;
      }
    },
    view: (f) => {
      var u;
      return e.draggable = !0, e.style.pointerEvents = "auto", (u = t.view.dom.parentElement) === null || u === void 0 || u.appendChild(o), o.appendChild(e), o.style.pointerEvents = "none", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", s = Qy(f.dom, {
        getReferenceClientRect: null,
        interactive: !0,
        trigger: "manual",
        placement: "left-start",
        hideOnClick: !1,
        duration: 100,
        zIndex: 10,
        popperOptions: {
          modifiers: [
            { name: "flip", enabled: !1 },
            { name: "preventOverflow", options: { rootBoundary: "document", mainAxis: !1 } }
          ]
        },
        ...r,
        appendTo: o,
        content: e
      }), {
        update(h, d) {
          if (!e || !s || (e.draggable = !l, f.state.doc.eq(d.doc) || c === -1))
            return;
          let p = f.nodeDOM(c);
          if (p = Qu(f, p), p === f.dom || (p == null ? void 0 : p.nodeType) !== 1)
            return;
          const g = f.posAtDOM(p, 0), m = Xu(t.state.doc, g);
          if (m !== a) {
            const y = Yu(t.state.doc, g);
            a = m, c = y, ol(f.state, c), i == null || i({ editor: t, node: a, pos: c }), s.setProps({ getReferenceClientRect: () => p.getBoundingClientRect() }), s.show();
          }
        },
        destroy() {
          s == null || s.destroy(), e && qu(o);
        }
      };
    },
    props: {
      handleDOMEvents: {
        mouseleave: (f, u) => (l || u.target && !o.contains(u.relatedTarget) && (s == null || s.hide(), a = null, c = -1, i == null || i({ editor: t, node: null, pos: -1 })), !1),
        mousemove(f, u) {
          if (!e || !s || l)
            return !1;
          const h = $m({ x: u.clientX, y: u.clientY, direction: "right", editor: t });
          if (!h.resultElement)
            return !1;
          let d = h.resultElement;
          if (d = Qu(f, d), d === f.dom || (d == null ? void 0 : d.nodeType) !== 1)
            return !1;
          const p = f.posAtDOM(d, 0), g = Xu(t.state.doc, p);
          if (g !== a) {
            const m = Yu(t.state.doc, p);
            a = g, c = m, ol(f.state, c), i == null || i({ editor: t, node: a, pos: c }), s.setProps({ getReferenceClientRect: () => d.getBoundingClientRect() }), s.show();
          }
          return !1;
        }
      }
    }
  });
};
function Pm(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) for (e = 0; e < n.length; e++) n[e] && (t = Pm(n[e])) && (r && (r += " "), r += t);
  else for (e in n) n[e] && (r && (r += " "), r += e);
  return r;
}
function WE() {
  for (var n, e, t = 0, r = ""; t < arguments.length; ) (n = arguments[t++]) && (e = Pm(n)) && (r && (r += " "), r += e);
  return r;
}
const Zu = (n) => typeof n == "boolean" ? "".concat(n) : n === 0 ? "0" : n, eh = WE, _R = (n, e) => (t) => {
  var r;
  if ((e == null ? void 0 : e.variants) == null) return eh(n, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: i, defaultVariants: o } = e, s = Object.keys(i).map((c) => {
    const f = t == null ? void 0 : t[c], u = o == null ? void 0 : o[c];
    if (f === null) return null;
    const h = Zu(f) || Zu(u);
    return i[c][h];
  }), l = t && Object.entries(t).reduce((c, f) => {
    let [u, h] = f;
    return h === void 0 || (c[u] = h), c;
  }, {}), a = e == null || (r = e.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, f) => {
    let { class: u, className: h, ...d } = f;
    return Object.entries(d).every((p) => {
      let [g, m] = p;
      return Array.isArray(m) ? m.includes({
        ...o,
        ...l
      }[g]) : {
        ...o,
        ...l
      }[g] === m;
    }) ? [
      ...c,
      u,
      h
    ] : c;
  }, []);
  return eh(n, s, a, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, UE = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", HE = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Yn = (n, e) => {
  for (const t in e)
    n[t] = e[t];
  return n;
}, da = "numeric", pa = "ascii", ga = "alpha", Li = "asciinumeric", Si = "alphanumeric", ma = "domain", _m = "emoji", JE = "scheme", GE = "slashscheme", th = "whitespace";
function KE(n, e) {
  return n in e || (e[n] = []), e[n];
}
function rn(n, e, t) {
  e[da] && (e[Li] = !0, e[Si] = !0), e[pa] && (e[Li] = !0, e[ga] = !0), e[Li] && (e[Si] = !0), e[ga] && (e[Si] = !0), e[Si] && (e[ma] = !0), e[_m] && (e[ma] = !0);
  for (const r in e) {
    const i = KE(r, t);
    i.indexOf(n) < 0 && i.push(n);
  }
}
function qE(n, e) {
  const t = {};
  for (const r in e)
    e[r].indexOf(n) >= 0 && (t[r] = !0);
  return t;
}
function me(n) {
  n === void 0 && (n = null), this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
me.groups = {};
me.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(n) {
    const e = this, t = e.j[n];
    if (t)
      return t;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], o = e.jr[r][1];
      if (o && i.test(n))
        return o;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(n, e) {
    return e === void 0 && (e = !1), e ? n in this.j : !!this.go(n);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(n, e, t, r) {
    for (let i = 0; i < n.length; i++)
      this.tt(n[i], e, t, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(n, e, t, r) {
    r = r || me.groups;
    let i;
    return e && e.j ? i = e : (i = new me(e), t && r && rn(e, t, r)), this.jr.push([n, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(n, e, t, r) {
    let i = this;
    const o = n.length;
    if (!o)
      return i;
    for (let s = 0; s < o - 1; s++)
      i = i.tt(n[s]);
    return i.tt(n[o - 1], e, t, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(n, e, t, r) {
    r = r || me.groups;
    const i = this;
    if (e && e.j)
      return i.j[n] = e, e;
    const o = e;
    let s, l = i.go(n);
    if (l ? (s = new me(), Yn(s.j, l.j), s.jr.push.apply(s.jr, l.jr), s.jd = l.jd, s.t = l.t) : s = new me(), o) {
      if (r)
        if (s.t && typeof s.t == "string") {
          const a = Yn(qE(s.t, r), t);
          rn(o, a, r);
        } else t && rn(o, t, r);
      s.t = o;
    }
    return i.j[n] = s, s;
  }
};
const I = (n, e, t, r, i) => n.ta(e, t, r, i), Ae = (n, e, t, r, i) => n.tr(e, t, r, i), nh = (n, e, t, r, i) => n.ts(e, t, r, i), w = (n, e, t, r, i) => n.tt(e, t, r, i), ht = "WORD", ya = "UWORD", Zr = "LOCALHOST", ba = "TLD", wa = "UTLD", Bi = "SCHEME", Rn = "SLASH_SCHEME", Oc = "NUM", Lm = "WS", Tc = "NL", Tr = "OPENBRACE", Mr = "CLOSEBRACE", bo = "OPENBRACKET", wo = "CLOSEBRACKET", So = "OPENPAREN", vo = "CLOSEPAREN", xo = "OPENANGLEBRACKET", Co = "CLOSEANGLEBRACKET", ko = "FULLWIDTHLEFTPAREN", Eo = "FULLWIDTHRIGHTPAREN", Ao = "LEFTCORNERBRACKET", Oo = "RIGHTCORNERBRACKET", To = "LEFTWHITECORNERBRACKET", Mo = "RIGHTWHITECORNERBRACKET", No = "FULLWIDTHLESSTHAN", Io = "FULLWIDTHGREATERTHAN", Ro = "AMPERSAND", Do = "APOSTROPHE", $o = "ASTERISK", Nt = "AT", Po = "BACKSLASH", _o = "BACKTICK", Lo = "CARET", Pt = "COLON", Mc = "COMMA", Bo = "DOLLAR", Fe = "DOT", zo = "EQUALS", Nc = "EXCLAMATION", je = "HYPHEN", Fo = "PERCENT", jo = "PIPE", Vo = "PLUS", Wo = "POUND", Uo = "QUERY", Ic = "QUOTE", Rc = "SEMI", Ve = "SLASH", Nr = "TILDE", Ho = "UNDERSCORE", Bm = "EMOJI", Jo = "SYM";
var zm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: ht,
  UWORD: ya,
  LOCALHOST: Zr,
  TLD: ba,
  UTLD: wa,
  SCHEME: Bi,
  SLASH_SCHEME: Rn,
  NUM: Oc,
  WS: Lm,
  NL: Tc,
  OPENBRACE: Tr,
  CLOSEBRACE: Mr,
  OPENBRACKET: bo,
  CLOSEBRACKET: wo,
  OPENPAREN: So,
  CLOSEPAREN: vo,
  OPENANGLEBRACKET: xo,
  CLOSEANGLEBRACKET: Co,
  FULLWIDTHLEFTPAREN: ko,
  FULLWIDTHRIGHTPAREN: Eo,
  LEFTCORNERBRACKET: Ao,
  RIGHTCORNERBRACKET: Oo,
  LEFTWHITECORNERBRACKET: To,
  RIGHTWHITECORNERBRACKET: Mo,
  FULLWIDTHLESSTHAN: No,
  FULLWIDTHGREATERTHAN: Io,
  AMPERSAND: Ro,
  APOSTROPHE: Do,
  ASTERISK: $o,
  AT: Nt,
  BACKSLASH: Po,
  BACKTICK: _o,
  CARET: Lo,
  COLON: Pt,
  COMMA: Mc,
  DOLLAR: Bo,
  DOT: Fe,
  EQUALS: zo,
  EXCLAMATION: Nc,
  HYPHEN: je,
  PERCENT: Fo,
  PIPE: jo,
  PLUS: Vo,
  POUND: Wo,
  QUERY: Uo,
  QUOTE: Ic,
  SEMI: Rc,
  SLASH: Ve,
  TILDE: Nr,
  UNDERSCORE: Ho,
  EMOJI: Bm,
  SYM: Jo
});
const An = /[a-z]/, sl = new RegExp("\\p{L}", "u"), ll = new RegExp("\\p{Emoji}", "u"), al = /\d/, rh = /\s/, ih = `
`, YE = "️", XE = "‍";
let vi = null, xi = null;
function QE(n) {
  n === void 0 && (n = []);
  const e = {};
  me.groups = e;
  const t = new me();
  vi == null && (vi = oh(UE)), xi == null && (xi = oh(HE)), w(t, "'", Do), w(t, "{", Tr), w(t, "}", Mr), w(t, "[", bo), w(t, "]", wo), w(t, "(", So), w(t, ")", vo), w(t, "<", xo), w(t, ">", Co), w(t, "（", ko), w(t, "）", Eo), w(t, "「", Ao), w(t, "」", Oo), w(t, "『", To), w(t, "』", Mo), w(t, "＜", No), w(t, "＞", Io), w(t, "&", Ro), w(t, "*", $o), w(t, "@", Nt), w(t, "`", _o), w(t, "^", Lo), w(t, ":", Pt), w(t, ",", Mc), w(t, "$", Bo), w(t, ".", Fe), w(t, "=", zo), w(t, "!", Nc), w(t, "-", je), w(t, "%", Fo), w(t, "|", jo), w(t, "+", Vo), w(t, "#", Wo), w(t, "?", Uo), w(t, '"', Ic), w(t, "/", Ve), w(t, ";", Rc), w(t, "~", Nr), w(t, "_", Ho), w(t, "\\", Po);
  const r = Ae(t, al, Oc, {
    [da]: !0
  });
  Ae(r, al, r);
  const i = Ae(t, An, ht, {
    [pa]: !0
  });
  Ae(i, An, i);
  const o = Ae(t, sl, ya, {
    [ga]: !0
  });
  Ae(o, An), Ae(o, sl, o);
  const s = Ae(t, rh, Lm, {
    [th]: !0
  });
  w(t, ih, Tc, {
    [th]: !0
  }), w(s, ih), Ae(s, rh, s);
  const l = Ae(t, ll, Bm, {
    [_m]: !0
  });
  Ae(l, ll, l), w(l, YE, l);
  const a = w(l, XE);
  Ae(a, ll, l);
  const c = [[An, i]], f = [[An, null], [sl, o]];
  for (let u = 0; u < vi.length; u++)
    At(t, vi[u], ba, ht, c);
  for (let u = 0; u < xi.length; u++)
    At(t, xi[u], wa, ya, f);
  rn(ba, {
    tld: !0,
    ascii: !0
  }, e), rn(wa, {
    utld: !0,
    alpha: !0
  }, e), At(t, "file", Bi, ht, c), At(t, "mailto", Bi, ht, c), At(t, "http", Rn, ht, c), At(t, "https", Rn, ht, c), At(t, "ftp", Rn, ht, c), At(t, "ftps", Rn, ht, c), rn(Bi, {
    scheme: !0,
    ascii: !0
  }, e), rn(Rn, {
    slashscheme: !0,
    ascii: !0
  }, e), n = n.sort((u, h) => u[0] > h[0] ? 1 : -1);
  for (let u = 0; u < n.length; u++) {
    const h = n[u][0], p = n[u][1] ? {
      [JE]: !0
    } : {
      [GE]: !0
    };
    h.indexOf("-") >= 0 ? p[ma] = !0 : An.test(h) ? al.test(h) ? p[Li] = !0 : p[pa] = !0 : p[da] = !0, nh(t, h, h, p);
  }
  return nh(t, "localhost", Zr, {
    ascii: !0
  }), t.jd = new me(Jo), {
    start: t,
    tokens: Yn({
      groups: e
    }, zm)
  };
}
function ZE(n, e) {
  const t = eA(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = t.length, i = [];
  let o = 0, s = 0;
  for (; s < r; ) {
    let l = n, a = null, c = 0, f = null, u = -1, h = -1;
    for (; s < r && (a = l.go(t[s])); )
      l = a, l.accepts() ? (u = 0, h = 0, f = l) : u >= 0 && (u += t[s].length, h++), c += t[s].length, o += t[s].length, s++;
    o -= u, s -= h, c -= u, i.push({
      t: f.t,
      // token type/name
      v: e.slice(o - c, o),
      // string value
      s: o - c,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return i;
}
function eA(n) {
  const e = [], t = n.length;
  let r = 0;
  for (; r < t; ) {
    let i = n.charCodeAt(r), o, s = i < 55296 || i > 56319 || r + 1 === t || (o = n.charCodeAt(r + 1)) < 56320 || o > 57343 ? n[r] : n.slice(r, r + 2);
    e.push(s), r += s.length;
  }
  return e;
}
function At(n, e, t, r, i) {
  let o;
  const s = e.length;
  for (let l = 0; l < s - 1; l++) {
    const a = e[l];
    n.j[a] ? o = n.j[a] : (o = new me(r), o.jr = i.slice(), n.j[a] = o), n = o;
  }
  return o = new me(t), o.jr = i.slice(), n.j[e[s - 1]] = o, o;
}
function oh(n) {
  const e = [], t = [];
  let r = 0, i = "0123456789";
  for (; r < n.length; ) {
    let o = 0;
    for (; i.indexOf(n[r + o]) >= 0; )
      o++;
    if (o > 0) {
      e.push(t.join(""));
      for (let s = parseInt(n.substring(r, r + o), 10); s > 0; s--)
        t.pop();
      r += o;
    } else
      t.push(n[r]), r++;
  }
  return e;
}
const ei = {
  defaultProtocol: "http",
  events: null,
  format: sh,
  formatHref: sh,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Dc(n, e) {
  e === void 0 && (e = null);
  let t = Yn({}, ei);
  n && (t = Yn(t, n instanceof Dc ? n.o : n));
  const r = t.ignoreTags, i = [];
  for (let o = 0; o < r.length; o++)
    i.push(r[o].toUpperCase());
  this.o = t, e && (this.defaultRender = e), this.ignoreTags = i;
}
Dc.prototype = {
  o: ei,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(n) {
    return n;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(n) {
    return this.get("validate", n.toString(), n);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(n, e, t) {
    const r = e != null;
    let i = this.o[n];
    return i && (typeof i == "object" ? (i = t.t in i ? i[t.t] : ei[n], typeof i == "function" && r && (i = i(e, t))) : typeof i == "function" && r && (i = i(e, t.t, t)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(n, e, t) {
    let r = this.o[n];
    return typeof r == "function" && e != null && (r = r(e, t.t, t)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(n) {
    const e = n.render(this);
    return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
  }
};
function sh(n) {
  return n;
}
function Fm(n, e) {
  this.t = "token", this.v = n, this.tk = e;
}
Fm.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
  */
  toHref(n) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(n) {
    const e = this.toString(), t = n.get("truncate", e, this), r = n.get("format", e, this);
    return t && r.length > t ? r.substring(0, t) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(n) {
    return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(n) {
    return n === void 0 && (n = ei.defaultProtocol), {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(n) {
    return {
      type: this.t,
      value: this.toFormattedString(n),
      isLink: this.isLink,
      href: this.toFormattedHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(n) {
    return n.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(n) {
    const e = this, t = this.toHref(n.get("defaultProtocol")), r = n.get("formatHref", t, this), i = n.get("tagName", t, e), o = this.toFormattedString(n), s = {}, l = n.get("className", t, e), a = n.get("target", t, e), c = n.get("rel", t, e), f = n.getObj("attributes", t, e), u = n.getObj("events", t, e);
    return s.href = r, l && (s.class = l), a && (s.target = a), c && (s.rel = c), f && Yn(s, f), {
      tagName: i,
      attributes: s,
      content: o,
      eventListeners: u
    };
  }
};
function Es(n, e) {
  class t extends Fm {
    constructor(i, o) {
      super(i, o), this.t = n;
    }
  }
  for (const r in e)
    t.prototype[r] = e[r];
  return t.t = n, t;
}
const lh = Es("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), ah = Es("text"), tA = Es("nl"), Ci = Es("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(n) {
    return n === void 0 && (n = ei.defaultProtocol), this.hasProtocol() ? this.v : `${n}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== Zr && n[1].t === Pt;
  }
}), Oe = (n) => new me(n);
function nA(n) {
  let {
    groups: e
  } = n;
  const t = e.domain.concat([Ro, $o, Nt, Po, _o, Lo, Bo, zo, je, Oc, Fo, jo, Vo, Wo, Ve, Jo, Nr, Ho]), r = [Do, Pt, Mc, Fe, Nc, Uo, Ic, Rc, xo, Co, Tr, Mr, wo, bo, So, vo, ko, Eo, Ao, Oo, To, Mo, No, Io], i = [Ro, Do, $o, Po, _o, Lo, Bo, zo, je, Tr, Mr, Fo, jo, Vo, Wo, Uo, Ve, Jo, Nr, Ho], o = Oe(), s = w(o, Nr);
  I(s, i, s), I(s, e.domain, s);
  const l = Oe(), a = Oe(), c = Oe();
  I(o, e.domain, l), I(o, e.scheme, a), I(o, e.slashscheme, c), I(l, i, s), I(l, e.domain, l);
  const f = w(l, Nt);
  w(s, Nt, f), w(a, Nt, f), w(c, Nt, f);
  const u = w(s, Fe);
  I(u, i, s), I(u, e.domain, s);
  const h = Oe();
  I(f, e.domain, h), I(h, e.domain, h);
  const d = w(h, Fe);
  I(d, e.domain, h);
  const p = Oe(lh);
  I(d, e.tld, p), I(d, e.utld, p), w(f, Zr, p);
  const g = w(h, je);
  I(g, e.domain, h), I(p, e.domain, h), w(p, Fe, d), w(p, je, g);
  const m = w(p, Pt);
  I(m, e.numeric, lh);
  const y = w(l, je), v = w(l, Fe);
  I(y, e.domain, l), I(v, i, s), I(v, e.domain, l);
  const k = Oe(Ci);
  I(v, e.tld, k), I(v, e.utld, k), I(k, e.domain, l), I(k, i, s), w(k, Fe, v), w(k, je, y), w(k, Nt, f);
  const A = w(k, Pt), O = Oe(Ci);
  I(A, e.numeric, O);
  const x = Oe(Ci), N = Oe();
  I(x, t, x), I(x, r, N), I(N, t, x), I(N, r, N), w(k, Ve, x), w(O, Ve, x);
  const $ = w(a, Pt), C = w(c, Pt), U = w(C, Ve), ge = w(U, Ve);
  I(a, e.domain, l), w(a, Fe, v), w(a, je, y), I(c, e.domain, l), w(c, Fe, v), w(c, je, y), I($, e.domain, x), w($, Ve, x), I(ge, e.domain, x), I(ge, t, x), w(ge, Ve, x);
  const P = [
    [Tr, Mr],
    // {}
    [bo, wo],
    // []
    [So, vo],
    // ()
    [xo, Co],
    // <>
    [ko, Eo],
    // （）
    [Ao, Oo],
    // 「」
    [To, Mo],
    // 『』
    [No, Io]
    // ＜＞
  ];
  for (let we = 0; we < P.length; we++) {
    const [ke, Ct] = P[we], Ee = w(x, ke);
    w(N, ke, Ee), w(Ee, Ct, x);
    const ot = Oe(Ci);
    I(Ee, t, ot);
    const st = Oe();
    I(Ee, r), I(ot, t, ot), I(ot, r, st), I(st, t, ot), I(st, r, st), w(ot, Ct, x), w(st, Ct, x);
  }
  return w(o, Zr, k), w(o, Tc, tA), {
    start: o,
    tokens: zm
  };
}
function rA(n, e, t) {
  let r = t.length, i = 0, o = [], s = [];
  for (; i < r; ) {
    let l = n, a = null, c = null, f = 0, u = null, h = -1;
    for (; i < r && !(a = l.go(t[i].t)); )
      s.push(t[i++]);
    for (; i < r && (c = a || l.go(t[i].t)); )
      a = null, l = c, l.accepts() ? (h = 0, u = l) : h >= 0 && h++, i++, f++;
    if (h < 0)
      i -= f, i < r && (s.push(t[i]), i++);
    else {
      s.length > 0 && (o.push(cl(ah, e, s)), s = []), i -= h, f -= h;
      const d = u.t, p = t.slice(i - f, i);
      o.push(cl(d, e, p));
    }
  }
  return s.length > 0 && o.push(cl(ah, e, s)), o;
}
function cl(n, e, t) {
  const r = t[0].s, i = t[t.length - 1].e, o = e.slice(r, i);
  return new n(o, t);
}
const iA = typeof console < "u" && console && console.warn || (() => {
}), oA = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", W = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function LR() {
  me.groups = {}, W.scanner = null, W.parser = null, W.tokenQueue = [], W.pluginQueue = [], W.customSchemes = [], W.initialized = !1;
}
function BR(n, e) {
  if (e === void 0 && (e = !1), W.initialized && iA(`linkifyjs: already initialized - will not register custom scheme "${n}" ${oA}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  W.customSchemes.push([n, e]);
}
function sA() {
  W.scanner = QE(W.customSchemes);
  for (let n = 0; n < W.tokenQueue.length; n++)
    W.tokenQueue[n][1]({
      scanner: W.scanner
    });
  W.parser = nA(W.scanner.tokens);
  for (let n = 0; n < W.pluginQueue.length; n++)
    W.pluginQueue[n][1]({
      scanner: W.scanner,
      parser: W.parser
    });
  W.initialized = !0;
}
function lA(n) {
  return W.initialized || sA(), rA(W.parser.start, n, ZE(W.scanner.start, n));
}
function zR(n, e, t) {
  if (e === void 0 && (e = null), t === void 0 && (t = null), e && typeof e == "object") {
    if (t)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const r = new Dc(t), i = lA(n), o = [];
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    l.isLink && (!e || l.t === e) && r.check(l) && o.push(l.toFormattedObject(r));
  }
  return o;
}
var Go = 200, X = function() {
};
X.prototype.append = function(e) {
  return e.length ? (e = X.from(e), !this.length && e || e.length < Go && this.leafAppend(e) || this.length < Go && e.leafPrepend(this) || this.appendInner(e)) : this;
};
X.prototype.prepend = function(e) {
  return e.length ? X.from(e).append(this) : this;
};
X.prototype.appendInner = function(e) {
  return new aA(this, e);
};
X.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? X.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
X.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
X.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
X.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, s) {
    return i.push(e(o, s));
  }, t, r), i;
};
X.from = function(e) {
  return e instanceof X ? e : e && e.length ? new jm(e) : X.empty;
};
var jm = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, s, l) {
    for (var a = o; a < s; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, o, s, l) {
    for (var a = o - 1; a >= s; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= Go)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= Go)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(X);
X.empty = new jm([]);
var aA = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(o, l), s) === !1 || o > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, o) - l, s + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(o, l) - l, s + l) === !1 || o < l && this.left.forEachInvertedInner(r, Math.min(i, l), o, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(X);
const cA = 500;
class $e {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, o;
    t && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let s = e.tr, l, a, c = [], f = [];
    return this.items.forEach((u, h) => {
      if (!u.step) {
        i || (i = this.remapping(r, h + 1), o = i.maps.length), o--, f.push(u);
        return;
      }
      if (i) {
        f.push(new We(u.map));
        let d = u.step.map(i.slice(o)), p;
        d && s.maybeStep(d).doc && (p = s.mapping.maps[s.mapping.maps.length - 1], c.push(new We(p, void 0, void 0, c.length + f.length))), o--, p && i.appendMap(p, o);
      } else
        s.maybeStep(u.step);
      if (u.selection)
        return l = i ? u.selection.map(i.slice(o)) : u.selection, a = new $e(this.items.slice(0, r).append(f.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: s, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let o = [], s = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let f = 0; f < e.steps.length; f++) {
      let u = e.steps[f].invert(e.docs[f]), h = new We(e.mapping.maps[f], u, t), d;
      (d = a && a.merge(h)) && (h = d, f ? o.pop() : l = l.slice(0, l.length - 1)), o.push(h), t && (s++, t = void 0), i || (a = h);
    }
    let c = s - r.depth;
    return c > uA && (l = fA(l, c), s -= c), new $e(l.append(o), s);
  }
  remapping(e, t) {
    let r = new Pn();
    return this.items.forEach((i, o) => {
      let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, s);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new $e(this.items.append(e.map((t) => new We(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), o = e.mapping, s = e.steps.length, l = this.eventCount;
    this.items.forEach((h) => {
      h.selection && l--;
    }, i);
    let a = t;
    this.items.forEach((h) => {
      let d = o.getMirror(--a);
      if (d == null)
        return;
      s = Math.min(s, d);
      let p = o.maps[d];
      if (h.step) {
        let g = e.steps[d].invert(e.docs[d]), m = h.selection && h.selection.map(o.slice(a + 1, d));
        m && l++, r.push(new We(p, g, m));
      } else
        r.push(new We(p));
    }, i);
    let c = [];
    for (let h = t; h < s; h++)
      c.push(new We(o.maps[h]));
    let f = this.items.slice(0, i).append(c).append(r), u = new $e(f, l);
    return u.emptyItemCount() > cA && (u = u.compress(this.items.length - r.length)), u;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], o = 0;
    return this.items.forEach((s, l) => {
      if (l >= e)
        i.push(s), s.selection && o++;
      else if (s.step) {
        let a = s.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let f = s.selection && s.selection.map(t.slice(r));
          f && o++;
          let u = new We(c.invert(), a, f), h, d = i.length - 1;
          (h = i.length && i[d].merge(u)) ? i[d] = h : i.push(u);
        }
      } else s.map && r--;
    }, this.items.length, 0), new $e(X.from(i.reverse()), o);
  }
}
$e.empty = new $e(X.empty, 0);
function fA(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class We {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new We(t.getMap().invert(), t, this.selection);
    }
  }
}
class It {
  constructor(e, t, r, i, o) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const uA = 20;
function hA(n, e, t, r) {
  let i = t.getMeta(cn), o;
  if (i)
    return i.historyState;
  t.getMeta(gA) && (n = new It(n.done, n.undone, null, 0, -1));
  let s = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (s && s.getMeta(cn))
    return s.getMeta(cn).redo ? new It(n.done.addTransform(t, void 0, r, zi(e)), n.undone, ch(t.mapping.maps), n.prevTime, n.prevComposition) : new It(n.done, n.undone.addTransform(t, void 0, r, zi(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !s && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !dA(t, n.prevRanges)), c = s ? fl(n.prevRanges, t.mapping) : ch(t.mapping.maps);
    return new It(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, zi(e)), $e.empty, c, t.time, l ?? n.prevComposition);
  } else return (o = t.getMeta("rebased")) ? new It(n.done.rebased(t, o), n.undone.rebased(t, o), fl(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new It(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), fl(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function dA(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (t = !0);
  }), t;
}
function ch(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((r, i, o, s) => e.push(o, s));
  return e;
}
function fl(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), o = e.map(n[r + 1], -1);
    i <= o && t.push(i, o);
  }
  return t;
}
function pA(n, e, t) {
  let r = zi(e), i = cn.get(e).spec.config, o = (t ? n.undone : n.done).popEvent(e, r);
  if (!o)
    return null;
  let s = o.selection.resolve(o.transform.doc), l = (t ? n.done : n.undone).addTransform(o.transform, e.selection.getBookmark(), i, r), a = new It(t ? l : o.remaining, t ? o.remaining : l, null, 0, -1);
  return o.transform.setSelection(s).setMeta(cn, { redo: t, historyState: a });
}
let ul = !1, fh = null;
function zi(n) {
  let e = n.plugins;
  if (fh != e) {
    ul = !1, fh = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        ul = !0;
        break;
      }
  }
  return ul;
}
const cn = new et("history"), gA = new et("closeHistory");
function FR(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new bn({
    key: cn,
    state: {
      init() {
        return new It($e.empty, $e.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return hA(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? mA : r == "historyRedo" ? yA : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function Vm(n, e) {
  return (t, r) => {
    let i = cn.getState(t);
    if (!i || (n ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let o = pA(i, t, n);
      o && r(e ? o.scrollIntoView() : o);
    }
    return !0;
  };
}
const mA = Vm(!1, !0), yA = Vm(!0, !0);
function jR(n = {}) {
  return new bn({
    view(e) {
      return new bA(e, n);
    }
  });
}
class bA {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let o = (s) => {
        this[i](s);
      };
      return e.dom.addEventListener(i, o), { name: i, handler: o };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r;
    if (t) {
      let l = e.nodeBefore, a = e.nodeAfter;
      if (l || a) {
        let c = this.editorView.nodeDOM(this.cursorPos - (l ? l.nodeSize : 0));
        if (c) {
          let f = c.getBoundingClientRect(), u = l ? f.bottom : f.top;
          l && a && (u = (u + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), r = { left: f.left, right: f.right, top: u - this.width / 2, bottom: u + this.width / 2 };
        }
      }
    }
    if (!r) {
      let l = this.editorView.coordsAtPos(this.cursorPos);
      r = { left: l.left - this.width / 2, right: l.left + this.width / 2, top: l.top, bottom: l.bottom };
    }
    let i = this.editorView.dom.offsetParent;
    this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let o, s;
    if (!i || i == document.body && getComputedStyle(i).position == "static")
      o = -pageXOffset, s = -pageYOffset;
    else {
      let l = i.getBoundingClientRect();
      o = l.left - i.scrollLeft, s = l.top - i.scrollTop;
    }
    this.element.style.left = r.left - o + "px", this.element.style.top = r.top - s + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, t, e) : i;
    if (t && !o) {
      let s = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = mp(this.editorView.state.doc, s, this.editorView.dragging.slice);
        l != null && (s = l);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
class J extends T {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return J.valid(r) ? new J(r) : T.near(r);
  }
  content() {
    return S.empty;
  }
  eq(e) {
    return e instanceof J && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new J(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new $c(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !wA(e) || !SA(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = t.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e: for (; ; ) {
      if (!r && J.valid(e))
        return e;
      let i = e.pos, o = null;
      for (let s = e.depth; ; s--) {
        let l = e.node(s);
        if (t > 0 ? e.indexAfter(s) < l.childCount : e.index(s) > 0) {
          o = l.child(t > 0 ? e.indexAfter(s) : e.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        i += t;
        let a = e.doc.resolve(i);
        if (J.valid(a))
          return a;
      }
      for (; ; ) {
        let s = t > 0 ? o.firstChild : o.lastChild;
        if (!s) {
          if (o.isAtom && !o.isText && !E.isSelectable(o)) {
            e = e.doc.resolve(i + o.nodeSize * t), r = !1;
            continue e;
          }
          break;
        }
        o = s, i += t;
        let l = e.doc.resolve(i);
        if (J.valid(l))
          return l;
      }
      return null;
    }
  }
}
J.prototype.visible = !1;
J.findFrom = J.findGapCursorFrom;
T.jsonID("gapcursor", J);
class $c {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new $c(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return J.valid(t) ? new J(t) : T.near(t);
  }
}
function wA(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function SA(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function VR() {
  return new bn({
    props: {
      decorations: kA,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && J.valid(t) ? new J(t) : null;
      },
      handleClick: xA,
      handleKeyDown: vA,
      handleDOMEvents: { beforeinput: CA }
    }
  });
}
const vA = rc({
  ArrowLeft: ki("horiz", -1),
  ArrowRight: ki("horiz", 1),
  ArrowUp: ki("vert", -1),
  ArrowDown: ki("vert", 1)
});
function ki(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, o) {
    let s = r.selection, l = e > 0 ? s.$to : s.$from, a = s.empty;
    if (s instanceof R) {
      if (!o.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = J.findGapCursorFrom(l, e, a);
    return c ? (i && i(r.tr.setSelection(new J(c))), !0) : !1;
  };
}
function xA(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!J.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && E.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new J(r))), !0);
}
function CA(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof J))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = b.empty;
  for (let s = r.length - 1; s >= 0; s--)
    i = b.from(r[s].createAndFill(null, i));
  let o = n.state.tr.replace(t.pos, t.pos, new S(i, 0, 0));
  return o.setSelection(R.near(o.doc.resolve(t.pos + 1))), n.dispatch(o), !1;
}
function kA(n) {
  if (!(n.selection instanceof J))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", H.create(n.doc, [ue.widget(n.selection.head, e, { key: "gapcursor" })]);
}
var Sa, va;
if (typeof WeakMap < "u") {
  let n = /* @__PURE__ */ new WeakMap();
  Sa = (e) => n.get(e), va = (e, t) => (n.set(e, t), t);
} else {
  const n = [];
  let t = 0;
  Sa = (r) => {
    for (let i = 0; i < n.length; i += 2)
      if (n[i] == r)
        return n[i + 1];
  }, va = (r, i) => (t == 10 && (t = 0), n[t++] = r, n[t++] = i);
}
var G = class {
  constructor(n, e, t, r) {
    this.width = n, this.height = e, this.map = t, this.problems = r;
  }
  // Find the dimensions of the cell at the given position.
  findCell(n) {
    for (let e = 0; e < this.map.length; e++) {
      const t = this.map[e];
      if (t != n)
        continue;
      const r = e % this.width, i = e / this.width | 0;
      let o = r + 1, s = i + 1;
      for (let l = 1; o < this.width && this.map[e + l] == t; l++)
        o++;
      for (let l = 1; s < this.height && this.map[e + this.width * l] == t; l++)
        s++;
      return { left: r, top: i, right: o, bottom: s };
    }
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(n) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == n)
        return e % this.width;
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(n, e, t) {
    const { left: r, right: i, top: o, bottom: s } = this.findCell(n);
    return e == "horiz" ? (t < 0 ? r == 0 : i == this.width) ? null : this.map[o * this.width + (t < 0 ? r - 1 : i)] : (t < 0 ? o == 0 : s == this.height) ? null : this.map[r + this.width * (t < 0 ? o - 1 : s)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(n, e) {
    const {
      left: t,
      right: r,
      top: i,
      bottom: o
    } = this.findCell(n), {
      left: s,
      right: l,
      top: a,
      bottom: c
    } = this.findCell(e);
    return {
      left: Math.min(t, s),
      top: Math.min(i, a),
      right: Math.max(r, l),
      bottom: Math.max(o, c)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(n) {
    const e = [], t = {};
    for (let r = n.top; r < n.bottom; r++)
      for (let i = n.left; i < n.right; i++) {
        const o = r * this.width + i, s = this.map[o];
        t[s] || (t[s] = !0, !(i == n.left && i && this.map[o - 1] == s || r == n.top && r && this.map[o - this.width] == s) && e.push(s));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(n, e, t) {
    for (let r = 0, i = 0; ; r++) {
      const o = i + t.child(r).nodeSize;
      if (r == n) {
        let s = e + n * this.width;
        const l = (n + 1) * this.width;
        for (; s < l && this.map[s] < i; )
          s++;
        return s == l ? o - 1 : this.map[s];
      }
      i = o;
    }
  }
  // Find the table map for the given table node.
  static get(n) {
    return Sa(n) || va(n, EA(n));
  }
};
function EA(n) {
  if (n.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + n.type.name);
  const e = AA(n), t = n.childCount, r = [];
  let i = 0, o = null;
  const s = [];
  for (let c = 0, f = e * t; c < f; c++)
    r[c] = 0;
  for (let c = 0, f = 0; c < t; c++) {
    const u = n.child(c);
    f++;
    for (let p = 0; ; p++) {
      for (; i < r.length && r[i] != 0; )
        i++;
      if (p == u.childCount)
        break;
      const g = u.child(p), { colspan: m, rowspan: y, colwidth: v } = g.attrs;
      for (let k = 0; k < y; k++) {
        if (k + c >= t) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: f,
            n: y - k
          });
          break;
        }
        const A = i + k * e;
        for (let O = 0; O < m; O++) {
          r[A + O] == 0 ? r[A + O] = f : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: f,
            n: m - O
          });
          const x = v && v[O];
          if (x) {
            const N = (A + O) % e * 2, $ = s[N];
            $ == null || $ != x && s[N + 1] == 1 ? (s[N] = x, s[N + 1] = 1) : $ == x && s[N + 1]++;
          }
        }
      }
      i += m, f += g.nodeSize;
    }
    const h = (c + 1) * e;
    let d = 0;
    for (; i < h; )
      r[i++] == 0 && d++;
    d && (o || (o = [])).push({ type: "missing", row: c, n: d }), f++;
  }
  const l = new G(e, t, r, o);
  let a = !1;
  for (let c = 0; !a && c < s.length; c += 2)
    s[c] != null && s[c + 1] < t && (a = !0);
  return a && OA(l, s, n), l;
}
function AA(n) {
  let e = -1, t = !1;
  for (let r = 0; r < n.childCount; r++) {
    const i = n.child(r);
    let o = 0;
    if (t)
      for (let s = 0; s < r; s++) {
        const l = n.child(s);
        for (let a = 0; a < l.childCount; a++) {
          const c = l.child(a);
          s + c.attrs.rowspan > r && (o += c.attrs.colspan);
        }
      }
    for (let s = 0; s < i.childCount; s++) {
      const l = i.child(s);
      o += l.attrs.colspan, l.attrs.rowspan > 1 && (t = !0);
    }
    e == -1 ? e = o : e != o && (e = Math.max(e, o));
  }
  return e;
}
function OA(n, e, t) {
  n.problems || (n.problems = []);
  const r = {};
  for (let i = 0; i < n.map.length; i++) {
    const o = n.map[i];
    if (r[o])
      continue;
    r[o] = !0;
    const s = t.nodeAt(o);
    if (!s)
      throw new RangeError(`No cell with offset ${o} found`);
    let l = null;
    const a = s.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const f = (i + c) % n.width, u = e[f * 2];
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = TA(a)))[c] = u);
    }
    l && n.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function TA(n) {
  if (n.colwidth)
    return n.colwidth.slice();
  const e = [];
  for (let t = 0; t < n.colspan; t++)
    e.push(0);
  return e;
}
function ae(n) {
  let e = n.cached.tableNodeTypes;
  if (!e) {
    e = n.cached.tableNodeTypes = {};
    for (const t in n.nodes) {
      const r = n.nodes[t], i = r.spec.tableRole;
      i && (e[i] = r);
    }
  }
  return e;
}
var _t = new et("selectingCells");
function sr(n) {
  for (let e = n.depth - 1; e > 0; e--)
    if (n.node(e).type.spec.tableRole == "row")
      return n.node(0).resolve(n.before(e + 1));
  return null;
}
function MA(n) {
  for (let e = n.depth; e > 0; e--) {
    const t = n.node(e).type.spec.tableRole;
    if (t === "cell" || t === "header_cell")
      return n.node(e);
  }
  return null;
}
function Be(n) {
  const e = n.selection.$head;
  for (let t = e.depth; t > 0; t--)
    if (e.node(t).type.spec.tableRole == "row")
      return !0;
  return !1;
}
function As(n) {
  const e = n.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const t = sr(e.$head) || NA(e.$head);
  if (t)
    return t;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function NA(n) {
  for (let e = n.nodeAfter, t = n.pos; e; e = e.firstChild, t++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return n.doc.resolve(t);
  }
  for (let e = n.nodeBefore, t = n.pos; e; e = e.lastChild, t--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return n.doc.resolve(t - e.nodeSize);
  }
}
function xa(n) {
  return n.parent.type.spec.tableRole == "row" && !!n.nodeAfter;
}
function IA(n) {
  return n.node(0).resolve(n.pos + n.nodeAfter.nodeSize);
}
function Pc(n, e) {
  return n.depth == e.depth && n.pos >= e.start(-1) && n.pos <= e.end(-1);
}
function Wm(n, e, t) {
  const r = n.node(-1), i = G.get(r), o = n.start(-1), s = i.nextCell(n.pos - o, e, t);
  return s == null ? null : n.node(0).resolve(o + s);
}
function yn(n, e, t = 1) {
  const r = { ...n, colspan: n.colspan - t };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, t), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function Um(n, e, t = 1) {
  const r = { ...n, colspan: n.colspan + t };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < t; i++)
      r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function RA(n, e, t) {
  const r = ae(e.type.schema).header_cell;
  for (let i = 0; i < n.height; i++)
    if (e.nodeAt(n.map[t + i * n.width]).type != r)
      return !1;
  return !0;
}
var V = class dt extends T {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, t = e) {
    const r = e.node(-1), i = G.get(r), o = e.start(-1), s = i.rectBetween(
      e.pos - o,
      t.pos - o
    ), l = e.node(0), a = i.cellsInRect(s).filter((f) => f != t.pos - o);
    a.unshift(t.pos - o);
    const c = a.map((f) => {
      const u = r.nodeAt(f);
      if (!u)
        throw RangeError(`No cell with offset ${f} found`);
      const h = o + f + 1;
      return new Ga(
        l.resolve(h),
        l.resolve(h + u.content.size)
      );
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
  }
  map(e, t) {
    const r = e.resolve(t.map(this.$anchorCell.pos)), i = e.resolve(t.map(this.$headCell.pos));
    if (xa(r) && xa(i) && Pc(r, i)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? dt.rowSelection(r, i) : o && this.isColSelection() ? dt.colSelection(r, i) : new dt(r, i);
    }
    return R.between(r, i);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), t = G.get(e), r = this.$anchorCell.start(-1), i = t.rectBetween(
      this.$anchorCell.pos - r,
      this.$headCell.pos - r
    ), o = {}, s = [];
    for (let a = i.top; a < i.bottom; a++) {
      const c = [];
      for (let f = a * t.width + i.left, u = i.left; u < i.right; u++, f++) {
        const h = t.map[f];
        if (o[h])
          continue;
        o[h] = !0;
        const d = t.findCell(h);
        let p = e.nodeAt(h);
        if (!p)
          throw RangeError(`No cell with offset ${h} found`);
        const g = i.left - d.left, m = d.right - i.right;
        if (g > 0 || m > 0) {
          let y = p.attrs;
          if (g > 0 && (y = yn(y, 0, g)), m > 0 && (y = yn(
            y,
            y.colspan - m,
            m
          )), d.left < i.left) {
            if (p = p.type.createAndFill(y), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(y)}`
              );
          } else
            p = p.type.create(y, p.content);
        }
        if (d.top < i.top || d.bottom > i.bottom) {
          const y = {
            ...p.attrs,
            rowspan: Math.min(d.bottom, i.bottom) - Math.max(d.top, i.top)
          };
          d.top < i.top ? p = p.type.createAndFill(y) : p = p.type.create(y, p.content);
        }
        c.push(p);
      }
      s.push(e.child(a).copy(b.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : s;
    return new S(b.from(l), 1, 1);
  }
  replace(e, t = S.empty) {
    const r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      const { $from: l, $to: a } = i[s], c = e.mapping.slice(r);
      e.replace(
        c.map(l.pos),
        c.map(a.pos),
        s ? S.empty : t
      );
    }
    const o = T.findFrom(
      e.doc.resolve(e.mapping.slice(r).map(this.to)),
      -1
    );
    o && e.setSelection(o);
  }
  replaceWith(e, t) {
    this.replace(e, new S(b.from(t), 0, 0));
  }
  forEachCell(e) {
    const t = this.$anchorCell.node(-1), r = G.get(t), i = this.$anchorCell.start(-1), o = r.cellsInRect(
      r.rectBetween(
        this.$anchorCell.pos - i,
        this.$headCell.pos - i
      )
    );
    for (let s = 0; s < o.length; s++)
      e(t.nodeAt(o[s]), i + o[s]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
    if (Math.min(e, t) > 0)
      return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, i = t + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, i) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(e, t = e) {
    const r = e.node(-1), i = G.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(t.pos - o), a = e.node(0);
    return s.top <= l.top ? (s.top > 0 && (e = a.resolve(o + i.map[s.left])), l.bottom < i.height && (t = a.resolve(
      o + i.map[i.width * (i.height - 1) + l.right - 1]
    ))) : (l.top > 0 && (t = a.resolve(o + i.map[l.left])), s.bottom < i.height && (e = a.resolve(
      o + i.map[i.width * (i.height - 1) + s.right - 1]
    ))), new dt(e, t);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), t = G.get(e), r = this.$anchorCell.start(-1), i = t.colCount(this.$anchorCell.pos - r), o = t.colCount(this.$headCell.pos - r);
    if (Math.min(i, o) > 0)
      return !1;
    const s = i + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, l) == t.width;
  }
  eq(e) {
    return e instanceof dt && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, t = e) {
    const r = e.node(-1), i = G.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(t.pos - o), a = e.node(0);
    return s.left <= l.left ? (s.left > 0 && (e = a.resolve(
      o + i.map[s.top * i.width]
    )), l.right < i.width && (t = a.resolve(
      o + i.map[i.width * (l.top + 1) - 1]
    ))) : (l.left > 0 && (t = a.resolve(o + i.map[l.top * i.width])), s.right < i.width && (e = a.resolve(
      o + i.map[i.width * (s.top + 1) - 1]
    ))), new dt(e, t);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, t) {
    return new dt(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, r = t) {
    return new dt(e.resolve(t), e.resolve(r));
  }
  getBookmark() {
    return new DA(this.$anchorCell.pos, this.$headCell.pos);
  }
};
V.prototype.visible = !1;
T.jsonID("cell", V);
var DA = class Hm {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Hm(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const t = e.resolve(this.anchor), r = e.resolve(this.head);
    return t.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && r.index() < r.parent.childCount && Pc(t, r) ? new V(t, r) : T.near(r, 1);
  }
};
function $A(n) {
  if (!(n.selection instanceof V))
    return null;
  const e = [];
  return n.selection.forEachCell((t, r) => {
    e.push(
      ue.node(r, r + t.nodeSize, { class: "selectedCell" })
    );
  }), H.create(n.doc, e);
}
function PA({ $from: n, $to: e }) {
  if (n.pos == e.pos || n.pos < e.pos - 6)
    return !1;
  let t = n.pos, r = e.pos, i = n.depth;
  for (; i >= 0 && !(n.after(i + 1) < n.end(i)); i--, t++)
    ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--)
    ;
  return t == r && /row|table/.test(n.node(i).type.spec.tableRole);
}
function _A({ $from: n, $to: e }) {
  let t, r;
  for (let i = n.depth; i > 0; i--) {
    const o = n.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      t = o;
      break;
    }
  }
  for (let i = e.depth; i > 0; i--) {
    const o = e.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      r = o;
      break;
    }
  }
  return t !== r && e.parentOffset === 0;
}
function LA(n, e, t) {
  const r = (e || n).selection, i = (e || n).doc;
  let o, s;
  if (r instanceof E && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      o = V.create(i, r.from);
    else if (s == "row") {
      const l = i.resolve(r.from + 1);
      o = V.rowSelection(l, l);
    } else if (!t) {
      const l = G.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = V.create(i, a + 1, c);
    }
  } else r instanceof R && PA(r) ? o = R.create(i, r.from) : r instanceof R && _A(r) && (o = R.create(i, r.$from.start(), r.$from.end()));
  return o && (e || (e = n.tr)).setSelection(o), e;
}
var BA = new et("fix-tables");
function Jm(n, e, t, r) {
  const i = n.childCount, o = e.childCount;
  e:
    for (let s = 0, l = 0; s < o; s++) {
      const a = e.child(s);
      for (let c = l, f = Math.min(i, s + 3); c < f; c++)
        if (n.child(c) == a) {
          l = c + 1, t += a.nodeSize;
          continue e;
        }
      r(a, t), l < i && n.child(l).sameMarkup(a) ? Jm(n.child(l), a, t + 1, r) : a.nodesBetween(0, a.content.size, r, t + 1), t += a.nodeSize;
    }
}
function zA(n, e) {
  let t;
  const r = (i, o) => {
    i.type.spec.tableRole == "table" && (t = FA(n, i, o, t));
  };
  return e ? e.doc != n.doc && Jm(e.doc, n.doc, 0, r) : n.doc.descendants(r), t;
}
function FA(n, e, t, r) {
  const i = G.get(e);
  if (!i.problems)
    return r;
  r || (r = n.tr);
  const o = [];
  for (let a = 0; a < i.height; a++)
    o.push(0);
  for (let a = 0; a < i.problems.length; a++) {
    const c = i.problems[a];
    if (c.type == "collision") {
      const f = e.nodeAt(c.pos);
      if (!f)
        continue;
      const u = f.attrs;
      for (let h = 0; h < u.rowspan; h++)
        o[c.row + h] += c.n;
      r.setNodeMarkup(
        r.mapping.map(t + 1 + c.pos),
        null,
        yn(u, u.colspan - c.n, c.n)
      );
    } else if (c.type == "missing")
      o[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const f = e.nodeAt(c.pos);
      if (!f)
        continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
        ...f.attrs,
        rowspan: f.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const f = e.nodeAt(c.pos);
      if (!f)
        continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
        ...f.attrs,
        colwidth: c.colwidth
      });
    }
  }
  let s, l;
  for (let a = 0; a < o.length; a++)
    o[a] && (s == null && (s = a), l = a);
  for (let a = 0, c = t + 1; a < i.height; a++) {
    const f = e.child(a), u = c + f.nodeSize, h = o[a];
    if (h > 0) {
      let d = "cell";
      f.firstChild && (d = f.firstChild.type.spec.tableRole);
      const p = [];
      for (let m = 0; m < h; m++) {
        const y = ae(n.schema)[d].createAndFill();
        y && p.push(y);
      }
      const g = (a == 0 || s == a - 1) && l == a ? c + 1 : u - 1;
      r.insert(r.mapping.map(g), p);
    }
    c = u;
  }
  return r.setMeta(BA, { fixTables: !0 });
}
function nt(n) {
  const e = n.selection, t = As(n), r = t.node(-1), i = t.start(-1), o = G.get(r);
  return { ...e instanceof V ? o.rectBetween(
    e.$anchorCell.pos - i,
    e.$headCell.pos - i
  ) : o.findCell(t.pos - i), tableStart: i, map: o, table: r };
}
function Gm(n, { map: e, tableStart: t, table: r }, i) {
  let o = i > 0 ? -1 : 0;
  RA(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const l = s * e.width + i;
    if (i > 0 && i < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      n.setNodeMarkup(
        n.mapping.map(t + a),
        null,
        Um(c.attrs, i - e.colCount(a))
      ), s += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? ae(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(s, i, r);
      n.insert(n.mapping.map(t + c), a.createAndFill());
    }
  }
  return n;
}
function WR(n, e) {
  if (!Be(n))
    return !1;
  if (e) {
    const t = nt(n);
    e(Gm(n.tr, t, t.left));
  }
  return !0;
}
function UR(n, e) {
  if (!Be(n))
    return !1;
  if (e) {
    const t = nt(n);
    e(Gm(n.tr, t, t.right));
  }
  return !0;
}
function jA(n, { map: e, table: t, tableStart: r }, i) {
  const o = n.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const l = s * e.width + i, a = e.map[l], c = t.nodeAt(a), f = c.attrs;
    if (i > 0 && e.map[l - 1] == a || i < e.width - 1 && e.map[l + 1] == a)
      n.setNodeMarkup(
        n.mapping.slice(o).map(r + a),
        null,
        yn(f, i - e.colCount(a))
      );
    else {
      const u = n.mapping.slice(o).map(r + a);
      n.delete(u, u + c.nodeSize);
    }
    s += f.rowspan;
  }
}
function HR(n, e) {
  if (!Be(n))
    return !1;
  if (e) {
    const t = nt(n), r = n.tr;
    if (t.left == 0 && t.right == t.map.width)
      return !1;
    for (let i = t.right - 1; jA(r, t, i), i != t.left; i--) {
      const o = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      t.table = o, t.map = G.get(o);
    }
    e(r);
  }
  return !0;
}
function VA(n, e, t) {
  var r;
  const i = ae(e.type.schema).header_cell;
  for (let o = 0; o < n.width; o++)
    if (((r = e.nodeAt(n.map[o + t * n.width])) == null ? void 0 : r.type) != i)
      return !1;
  return !0;
}
function Km(n, { map: e, tableStart: t, table: r }, i) {
  var o;
  let s = t;
  for (let c = 0; c < i; c++)
    s += r.child(c).nodeSize;
  const l = [];
  let a = i > 0 ? -1 : 0;
  VA(e, r, i + a) && (a = i == 0 || i == e.height ? null : 0);
  for (let c = 0, f = e.width * i; c < e.width; c++, f++)
    if (i > 0 && i < e.height && e.map[f] == e.map[f - e.width]) {
      const u = e.map[f], h = r.nodeAt(u).attrs;
      n.setNodeMarkup(t + u, null, {
        ...h,
        rowspan: h.rowspan + 1
      }), c += h.colspan - 1;
    } else {
      const u = a == null ? ae(r.type.schema).cell : (o = r.nodeAt(e.map[f + a * e.width])) == null ? void 0 : o.type, h = u == null ? void 0 : u.createAndFill();
      h && l.push(h);
    }
  return n.insert(s, ae(r.type.schema).row.create(null, l)), n;
}
function JR(n, e) {
  if (!Be(n))
    return !1;
  if (e) {
    const t = nt(n);
    e(Km(n.tr, t, t.top));
  }
  return !0;
}
function GR(n, e) {
  if (!Be(n))
    return !1;
  if (e) {
    const t = nt(n);
    e(Km(n.tr, t, t.bottom));
  }
  return !0;
}
function WA(n, { map: e, table: t, tableStart: r }, i) {
  let o = 0;
  for (let c = 0; c < i; c++)
    o += t.child(c).nodeSize;
  const s = o + t.child(i).nodeSize, l = n.mapping.maps.length;
  n.delete(o + r, s + r);
  const a = /* @__PURE__ */ new Set();
  for (let c = 0, f = i * e.width; c < e.width; c++, f++) {
    const u = e.map[f];
    if (!a.has(u)) {
      if (a.add(u), i > 0 && u == e.map[f - e.width]) {
        const h = t.nodeAt(u).attrs;
        n.setNodeMarkup(n.mapping.slice(l).map(u + r), null, {
          ...h,
          rowspan: h.rowspan - 1
        }), c += h.colspan - 1;
      } else if (i < e.height && u == e.map[f + e.width]) {
        const h = t.nodeAt(u), d = h.attrs, p = h.type.create(
          { ...d, rowspan: h.attrs.rowspan - 1 },
          h.content
        ), g = e.positionAt(i + 1, c, t);
        n.insert(n.mapping.slice(l).map(r + g), p), c += d.colspan - 1;
      }
    }
  }
}
function KR(n, e) {
  if (!Be(n))
    return !1;
  if (e) {
    const t = nt(n), r = n.tr;
    if (t.top == 0 && t.bottom == t.map.height)
      return !1;
    for (let i = t.bottom - 1; WA(r, t, i), i != t.top; i--) {
      const o = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      t.table = o, t.map = G.get(t.table);
    }
    e(r);
  }
  return !0;
}
function uh(n) {
  const e = n.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function UA({ width: n, height: e, map: t }, r) {
  let i = r.top * n + r.left, o = i, s = (r.bottom - 1) * n + r.left, l = i + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && t[o] == t[o - 1] || r.right < n && t[l] == t[l + 1])
      return !0;
    o += n, l += n;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && t[i] == t[i - n] || r.bottom < e && t[s] == t[s + n])
      return !0;
    i++, s++;
  }
  return !1;
}
function qR(n, e) {
  const t = n.selection;
  if (!(t instanceof V) || t.$anchorCell.pos == t.$headCell.pos)
    return !1;
  const r = nt(n), { map: i } = r;
  if (UA(i, r))
    return !1;
  if (e) {
    const o = n.tr, s = {};
    let l = b.empty, a, c;
    for (let f = r.top; f < r.bottom; f++)
      for (let u = r.left; u < r.right; u++) {
        const h = i.map[f * i.width + u], d = r.table.nodeAt(h);
        if (!(s[h] || !d))
          if (s[h] = !0, a == null)
            a = h, c = d;
          else {
            uh(d) || (l = l.append(d.content));
            const p = o.mapping.map(h + r.tableStart);
            o.delete(p, p + d.nodeSize);
          }
      }
    if (a == null || c == null)
      return !0;
    if (o.setNodeMarkup(a + r.tableStart, null, {
      ...Um(
        c.attrs,
        c.attrs.colspan,
        r.right - r.left - c.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), l.size) {
      const f = a + 1 + c.content.size, u = uh(c) ? a + 1 : f;
      o.replaceWith(u + r.tableStart, f + r.tableStart, l);
    }
    o.setSelection(
      new V(o.doc.resolve(a + r.tableStart))
    ), e(o);
  }
  return !0;
}
function YR(n, e) {
  const t = ae(n.schema);
  return HA(({ node: r }) => t[r.type.spec.tableRole])(n, e);
}
function HA(n) {
  return (e, t) => {
    var r;
    const i = e.selection;
    let o, s;
    if (i instanceof V) {
      if (i.$anchorCell.pos != i.$headCell.pos)
        return !1;
      o = i.$anchorCell.nodeAfter, s = i.$anchorCell.pos;
    } else {
      if (o = MA(i.$from), !o)
        return !1;
      s = (r = sr(i.$from)) == null ? void 0 : r.pos;
    }
    if (o == null || s == null || o.attrs.colspan == 1 && o.attrs.rowspan == 1)
      return !1;
    if (t) {
      let l = o.attrs;
      const a = [], c = l.colwidth;
      l.rowspan > 1 && (l = { ...l, rowspan: 1 }), l.colspan > 1 && (l = { ...l, colspan: 1 });
      const f = nt(e), u = e.tr;
      for (let d = 0; d < f.right - f.left; d++)
        a.push(
          c ? {
            ...l,
            colwidth: c && c[d] ? [c[d]] : null
          } : l
        );
      let h;
      for (let d = f.top; d < f.bottom; d++) {
        let p = f.map.positionAt(d, f.left, f.table);
        d == f.top && (p += o.nodeSize);
        for (let g = f.left, m = 0; g < f.right; g++, m++)
          g == f.left && d == f.top || u.insert(
            h = u.mapping.map(p + f.tableStart, 1),
            n({ node: o, row: d, col: g }).createAndFill(a[m])
          );
      }
      u.setNodeMarkup(
        s,
        n({ node: o, row: f.top, col: f.left }),
        a[0]
      ), i instanceof V && u.setSelection(
        new V(
          u.doc.resolve(i.$anchorCell.pos),
          h ? u.doc.resolve(h) : void 0
        )
      ), t(u);
    }
    return !0;
  };
}
function XR(n, e) {
  return function(t, r) {
    if (!Be(t))
      return !1;
    const i = As(t);
    if (i.nodeAfter.attrs[n] === e)
      return !1;
    if (r) {
      const o = t.tr;
      t.selection instanceof V ? t.selection.forEachCell((s, l) => {
        s.attrs[n] !== e && o.setNodeMarkup(l, null, {
          ...s.attrs,
          [n]: e
        });
      }) : o.setNodeMarkup(i.pos, null, {
        ...i.nodeAfter.attrs,
        [n]: e
      }), r(o);
    }
    return !0;
  };
}
function JA(n) {
  return function(e, t) {
    if (!Be(e))
      return !1;
    if (t) {
      const r = ae(e.schema), i = nt(e), o = e.tr, s = i.map.cellsInRect(
        n == "column" ? {
          left: i.left,
          top: 0,
          right: i.right,
          bottom: i.map.height
        } : n == "row" ? {
          left: 0,
          top: i.top,
          right: i.map.width,
          bottom: i.bottom
        } : i
      ), l = s.map((a) => i.table.nodeAt(a));
      for (let a = 0; a < s.length; a++)
        l[a].type == r.header_cell && o.setNodeMarkup(
          i.tableStart + s[a],
          r.cell,
          l[a].attrs
        );
      if (o.steps.length == 0)
        for (let a = 0; a < s.length; a++)
          o.setNodeMarkup(
            i.tableStart + s[a],
            r.header_cell,
            l[a].attrs
          );
      t(o);
    }
    return !0;
  };
}
function hh(n, e, t) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: n == "row" ? e.map.width : 1,
    bottom: n == "column" ? e.map.height : 1
  });
  for (let i = 0; i < r.length; i++) {
    const o = e.table.nodeAt(r[i]);
    if (o && o.type !== t.header_cell)
      return !1;
  }
  return !0;
}
function _c(n, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? JA(n) : function(t, r) {
    if (!Be(t))
      return !1;
    if (r) {
      const i = ae(t.schema), o = nt(t), s = t.tr, l = hh("row", o, i), a = hh(
        "column",
        o,
        i
      ), f = (n === "column" ? l : n === "row" ? a : !1) ? 1 : 0, u = n == "column" ? {
        left: 0,
        top: f,
        right: 1,
        bottom: o.map.height
      } : n == "row" ? {
        left: f,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, h = n == "column" ? a ? i.cell : i.header_cell : n == "row" ? l ? i.cell : i.header_cell : i.cell;
      o.map.cellsInRect(u).forEach((d) => {
        const p = d + o.tableStart, g = s.doc.nodeAt(p);
        g && s.setNodeMarkup(p, h, g.attrs);
      }), r(s);
    }
    return !0;
  };
}
_c("row", {
  useDeprecatedLogic: !0
});
_c("column", {
  useDeprecatedLogic: !0
});
var QR = _c("cell", {
  useDeprecatedLogic: !0
});
function GA(n, e) {
  if (e < 0) {
    const t = n.nodeBefore;
    if (t)
      return n.pos - t.nodeSize;
    for (let r = n.index(-1) - 1, i = n.before(); r >= 0; r--) {
      const o = n.node(-1).child(r), s = o.lastChild;
      if (s)
        return i - 1 - s.nodeSize;
      i -= o.nodeSize;
    }
  } else {
    if (n.index() < n.parent.childCount - 1)
      return n.pos + n.nodeAfter.nodeSize;
    const t = n.node(-1);
    for (let r = n.indexAfter(-1), i = n.after(); r < t.childCount; r++) {
      const o = t.child(r);
      if (o.childCount)
        return i + 1;
      i += o.nodeSize;
    }
  }
  return null;
}
function ZR(n) {
  return function(e, t) {
    if (!Be(e))
      return !1;
    const r = GA(As(e), n);
    if (r == null)
      return !1;
    if (t) {
      const i = e.doc.resolve(r);
      t(
        e.tr.setSelection(R.between(i, IA(i))).scrollIntoView()
      );
    }
    return !0;
  };
}
function eD(n, e) {
  const t = n.selection.$anchor;
  for (let r = t.depth; r > 0; r--)
    if (t.node(r).type.spec.tableRole == "table")
      return e && e(
        n.tr.delete(t.before(r), t.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function Ei(n, e) {
  const t = n.selection;
  if (!(t instanceof V))
    return !1;
  if (e) {
    const r = n.tr, i = ae(n.schema).cell.createAndFill().content;
    t.forEachCell((o, s) => {
      o.content.eq(i) || r.replace(
        r.mapping.map(s + 1),
        r.mapping.map(s + o.nodeSize - 1),
        new S(i, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function KA(n) {
  if (!n.size)
    return null;
  let { content: e, openStart: t, openEnd: r } = n;
  for (; e.childCount == 1 && (t > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    t--, r--, e = e.child(0).content;
  const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, l = [];
  if (o == "row")
    for (let a = 0; a < e.childCount; a++) {
      let c = e.child(a).content;
      const f = a ? 0 : Math.max(0, t - 1), u = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (f || u) && (c = Ca(
        ae(s).row,
        new S(c, f, u)
      ).content), l.push(c);
    }
  else if (o == "cell" || o == "header_cell")
    l.push(
      t || r ? Ca(
        ae(s).row,
        new S(e, t, r)
      ).content : e
    );
  else
    return null;
  return qA(s, l);
}
function qA(n, e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (let s = o.childCount - 1; s >= 0; s--) {
      const { rowspan: l, colspan: a } = o.child(s).attrs;
      for (let c = i; c < i + l; c++)
        t[c] = (t[c] || 0) + a;
    }
  }
  let r = 0;
  for (let i = 0; i < t.length; i++)
    r = Math.max(r, t[i]);
  for (let i = 0; i < t.length; i++)
    if (i >= e.length && e.push(b.empty), t[i] < r) {
      const o = ae(n).cell.createAndFill(), s = [];
      for (let l = t[i]; l < r; l++)
        s.push(o);
      e[i] = e[i].append(b.from(s));
    }
  return { height: e.length, width: r, rows: e };
}
function Ca(n, e) {
  const t = n.createAndFill();
  return new vp(t).replace(0, t.content.size, e).doc;
}
function YA({ width: n, height: e, rows: t }, r, i) {
  if (n != r) {
    const o = [], s = [];
    for (let l = 0; l < t.length; l++) {
      const a = t[l], c = [];
      for (let f = o[l] || 0, u = 0; f < r; u++) {
        let h = a.child(u % a.childCount);
        f + h.attrs.colspan > r && (h = h.type.createChecked(
          yn(
            h.attrs,
            h.attrs.colspan,
            f + h.attrs.colspan - r
          ),
          h.content
        )), c.push(h), f += h.attrs.colspan;
        for (let d = 1; d < h.attrs.rowspan; d++)
          o[l + d] = (o[l + d] || 0) + h.attrs.colspan;
      }
      s.push(b.from(c));
    }
    t = s, n = r;
  }
  if (e != i) {
    const o = [];
    for (let s = 0, l = 0; s < i; s++, l++) {
      const a = [], c = t[l % e];
      for (let f = 0; f < c.childCount; f++) {
        let u = c.child(f);
        s + u.attrs.rowspan > i && (u = u.type.create(
          {
            ...u.attrs,
            rowspan: Math.max(1, i - u.attrs.rowspan)
          },
          u.content
        )), a.push(u);
      }
      o.push(b.from(a));
    }
    t = o, e = i;
  }
  return { width: n, height: e, rows: t };
}
function XA(n, e, t, r, i, o, s) {
  const l = n.doc.type.schema, a = ae(l);
  let c, f;
  if (i > e.width)
    for (let u = 0, h = 0; u < e.height; u++) {
      const d = t.child(u);
      h += d.nodeSize;
      const p = [];
      let g;
      d.lastChild == null || d.lastChild.type == a.cell ? g = c || (c = a.cell.createAndFill()) : g = f || (f = a.header_cell.createAndFill());
      for (let m = e.width; m < i; m++)
        p.push(g);
      n.insert(n.mapping.slice(s).map(h - 1 + r), p);
    }
  if (o > e.height) {
    const u = [];
    for (let p = 0, g = (e.height - 1) * e.width; p < Math.max(e.width, i); p++) {
      const m = p >= e.width ? !1 : t.nodeAt(e.map[g + p]).type == a.header_cell;
      u.push(
        m ? f || (f = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill())
      );
    }
    const h = a.row.create(null, b.from(u)), d = [];
    for (let p = e.height; p < o; p++)
      d.push(h);
    n.insert(n.mapping.slice(s).map(r + t.nodeSize - 2), d);
  }
  return !!(c || f);
}
function dh(n, e, t, r, i, o, s, l) {
  if (s == 0 || s == e.height)
    return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const f = s * e.width + c, u = e.map[f];
    if (e.map[f - e.width] == u) {
      a = !0;
      const h = t.nodeAt(u), { top: d, left: p } = e.findCell(u);
      n.setNodeMarkup(n.mapping.slice(l).map(u + r), null, {
        ...h.attrs,
        rowspan: s - d
      }), n.insert(
        n.mapping.slice(l).map(e.positionAt(s, p, t)),
        h.type.createAndFill({
          ...h.attrs,
          rowspan: d + h.attrs.rowspan - s
        })
      ), c += h.attrs.colspan - 1;
    }
  }
  return a;
}
function ph(n, e, t, r, i, o, s, l) {
  if (s == 0 || s == e.width)
    return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const f = c * e.width + s, u = e.map[f];
    if (e.map[f - 1] == u) {
      a = !0;
      const h = t.nodeAt(u), d = e.colCount(u), p = n.mapping.slice(l).map(u + r);
      n.setNodeMarkup(
        p,
        null,
        yn(
          h.attrs,
          s - d,
          h.attrs.colspan - (s - d)
        )
      ), n.insert(
        p + h.nodeSize,
        h.type.createAndFill(
          yn(h.attrs, 0, s - d)
        )
      ), c += h.attrs.rowspan - 1;
    }
  }
  return a;
}
function gh(n, e, t, r, i) {
  let o = t ? n.doc.nodeAt(t - 1) : n.doc;
  if (!o)
    throw new Error("No table found");
  let s = G.get(o);
  const { top: l, left: a } = r, c = a + i.width, f = l + i.height, u = n.tr;
  let h = 0;
  function d() {
    if (o = t ? u.doc.nodeAt(t - 1) : u.doc, !o)
      throw new Error("No table found");
    s = G.get(o), h = u.mapping.maps.length;
  }
  XA(u, s, o, t, c, f, h) && d(), dh(u, s, o, t, a, c, l, h) && d(), dh(u, s, o, t, a, c, f, h) && d(), ph(u, s, o, t, l, f, a, h) && d(), ph(u, s, o, t, l, f, c, h) && d();
  for (let p = l; p < f; p++) {
    const g = s.positionAt(p, a, o), m = s.positionAt(p, c, o);
    u.replace(
      u.mapping.slice(h).map(g + t),
      u.mapping.slice(h).map(m + t),
      new S(i.rows[p - l], 0, 0)
    );
  }
  d(), u.setSelection(
    new V(
      u.doc.resolve(t + s.positionAt(l, a, o)),
      u.doc.resolve(t + s.positionAt(f - 1, c - 1, o))
    )
  ), e(u);
}
var QA = rc({
  ArrowLeft: Ai("horiz", -1),
  ArrowRight: Ai("horiz", 1),
  ArrowUp: Ai("vert", -1),
  ArrowDown: Ai("vert", 1),
  "Shift-ArrowLeft": Oi("horiz", -1),
  "Shift-ArrowRight": Oi("horiz", 1),
  "Shift-ArrowUp": Oi("vert", -1),
  "Shift-ArrowDown": Oi("vert", 1),
  Backspace: Ei,
  "Mod-Backspace": Ei,
  Delete: Ei,
  "Mod-Delete": Ei
});
function Fi(n, e, t) {
  return t.eq(n.selection) ? !1 : (e && e(n.tr.setSelection(t).scrollIntoView()), !0);
}
function Ai(n, e) {
  return (t, r, i) => {
    if (!i)
      return !1;
    const o = t.selection;
    if (o instanceof V)
      return Fi(
        t,
        r,
        T.near(o.$headCell, e)
      );
    if (n != "horiz" && !o.empty)
      return !1;
    const s = qm(i, n, e);
    if (s == null)
      return !1;
    if (n == "horiz")
      return Fi(
        t,
        r,
        T.near(t.doc.resolve(o.head + e), e)
      );
    {
      const l = t.doc.resolve(s), a = Wm(l, n, e);
      let c;
      return a ? c = T.near(a, 1) : e < 0 ? c = T.near(t.doc.resolve(l.before(-1)), -1) : c = T.near(t.doc.resolve(l.after(-1)), 1), Fi(t, r, c);
    }
  };
}
function Oi(n, e) {
  return (t, r, i) => {
    if (!i)
      return !1;
    const o = t.selection;
    let s;
    if (o instanceof V)
      s = o;
    else {
      const a = qm(i, n, e);
      if (a == null)
        return !1;
      s = new V(t.doc.resolve(a));
    }
    const l = Wm(s.$headCell, n, e);
    return l ? Fi(
      t,
      r,
      new V(s.$anchorCell, l)
    ) : !1;
  };
}
function ZA(n, e) {
  const t = n.state.doc, r = sr(t.resolve(e));
  return r ? (n.dispatch(n.state.tr.setSelection(new V(r))), !0) : !1;
}
function eO(n, e, t) {
  if (!Be(n.state))
    return !1;
  let r = KA(t);
  const i = n.state.selection;
  if (i instanceof V) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        b.from(
          Ca(ae(n.state.schema).cell, t)
        )
      ]
    });
    const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), l = G.get(o).rectBetween(
      i.$anchorCell.pos - s,
      i.$headCell.pos - s
    );
    return r = YA(r, l.right - l.left, l.bottom - l.top), gh(n.state, n.dispatch, s, l, r), !0;
  } else if (r) {
    const o = As(n.state), s = o.start(-1);
    return gh(
      n.state,
      n.dispatch,
      s,
      G.get(o.node(-1)).findCell(o.pos - s),
      r
    ), !0;
  } else
    return !1;
}
function tO(n, e) {
  var t;
  if (e.ctrlKey || e.metaKey)
    return;
  const r = mh(n, e.target);
  let i;
  if (e.shiftKey && n.state.selection instanceof V)
    o(n.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = sr(n.state.selection.$anchor)) != null && ((t = hl(n, e)) == null ? void 0 : t.pos) != i.pos)
    o(i, e), e.preventDefault();
  else if (!r)
    return;
  function o(a, c) {
    let f = hl(n, c);
    const u = _t.getState(n.state) == null;
    if (!f || !Pc(a, f))
      if (u)
        f = a;
      else
        return;
    const h = new V(a, f);
    if (u || !n.state.selection.eq(h)) {
      const d = n.state.tr.setSelection(h);
      u && d.setMeta(_t, a.pos), n.dispatch(d);
    }
  }
  function s() {
    n.root.removeEventListener("mouseup", s), n.root.removeEventListener("dragstart", s), n.root.removeEventListener("mousemove", l), _t.getState(n.state) != null && n.dispatch(n.state.tr.setMeta(_t, -1));
  }
  function l(a) {
    const c = a, f = _t.getState(n.state);
    let u;
    if (f != null)
      u = n.state.doc.resolve(f);
    else if (mh(n, c.target) != r && (u = hl(n, e), !u))
      return s();
    u && o(u, c);
  }
  n.root.addEventListener("mouseup", s), n.root.addEventListener("dragstart", s), n.root.addEventListener("mousemove", l);
}
function qm(n, e, t) {
  if (!(n.state.selection instanceof R))
    return null;
  const { $head: r } = n.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    const o = r.node(i);
    if ((t < 0 ? r.index(i) : r.indexAfter(i)) != (t < 0 ? 0 : o.childCount))
      return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const l = r.before(i), a = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
      return n.endOfTextblock(a) ? l : null;
    }
  }
  return null;
}
function mh(n, e) {
  for (; e && e != n.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function hl(n, e) {
  const t = n.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return t && t ? sr(n.state.doc.resolve(t.pos)) : null;
}
var nO = class {
  constructor(n, e) {
    this.node = n, this.defaultCellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${e}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), ka(n, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(n) {
    return n.type != this.node.type ? !1 : (this.node = n, ka(
      n,
      this.colgroup,
      this.table,
      this.defaultCellMinWidth
    ), !0);
  }
  ignoreMutation(n) {
    return n.type == "attributes" && (n.target == this.table || this.colgroup.contains(n.target));
  }
};
function ka(n, e, t, r, i, o) {
  var s;
  let l = 0, a = !0, c = e.firstChild;
  const f = n.firstChild;
  if (f) {
    for (let u = 0, h = 0; u < f.childCount; u++) {
      const { colspan: d, colwidth: p } = f.child(u).attrs;
      for (let g = 0; g < d; g++, h++) {
        const m = i == h ? o : p && p[g], y = m ? m + "px" : "";
        if (l += m || r, m || (a = !1), c)
          c.style.width != y && (c.style.width = y), c = c.nextSibling;
        else {
          const v = document.createElement("col");
          v.style.width = y, e.appendChild(v);
        }
      }
    }
    for (; c; ) {
      const u = c.nextSibling;
      (s = c.parentNode) == null || s.removeChild(c), c = u;
    }
    a ? (t.style.width = l + "px", t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = l + "px");
  }
}
var xe = new et(
  "tableColumnResizing"
);
function tD({
  handleWidth: n = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: t = 100,
  View: r = nO,
  lastColumnResizable: i = !0
} = {}) {
  const o = new bn({
    key: xe,
    state: {
      init(s, l) {
        var a, c;
        const f = (c = (a = o.spec) == null ? void 0 : a.props) == null ? void 0 : c.nodeViews, u = ae(l.schema).table.name;
        return r && f && (f[u] = (h, d) => new r(h, t, d)), new rO(-1, !1);
      },
      apply(s, l) {
        return l.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const l = xe.getState(s);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, l) => {
          iO(s, l, n, i);
        },
        mouseleave: (s) => {
          oO(s);
        },
        mousedown: (s, l) => {
          sO(s, l, e, t);
        }
      },
      decorations: (s) => {
        const l = xe.getState(s);
        if (l && l.activeHandle > -1)
          return uO(s, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var rO = class ji {
  constructor(e, t) {
    this.activeHandle = e, this.dragging = t;
  }
  apply(e) {
    const t = this, r = e.getMeta(xe);
    if (r && r.setHandle != null)
      return new ji(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new ji(t.activeHandle, r.setDragging);
    if (t.activeHandle > -1 && e.docChanged) {
      let i = e.mapping.map(t.activeHandle, -1);
      return xa(e.doc.resolve(i)) || (i = -1), new ji(i, t.dragging);
    }
    return t;
  }
};
function iO(n, e, t, r) {
  const i = xe.getState(n.state);
  if (i && !i.dragging) {
    const o = aO(e.target);
    let s = -1;
    if (o) {
      const { left: l, right: a } = o.getBoundingClientRect();
      e.clientX - l <= t ? s = yh(n, e, "left", t) : a - e.clientX <= t && (s = yh(n, e, "right", t));
    }
    if (s != i.activeHandle) {
      if (!r && s !== -1) {
        const l = n.state.doc.resolve(s), a = l.node(-1), c = G.get(a), f = l.start(-1);
        if (c.colCount(l.pos - f) + l.nodeAfter.attrs.colspan - 1 == c.width - 1)
          return;
      }
      Ym(n, s);
    }
  }
}
function oO(n) {
  const e = xe.getState(n.state);
  e && e.activeHandle > -1 && !e.dragging && Ym(n, -1);
}
function sO(n, e, t, r) {
  var i;
  const o = (i = n.dom.ownerDocument.defaultView) != null ? i : window, s = xe.getState(n.state);
  if (!s || s.activeHandle == -1 || s.dragging)
    return !1;
  const l = n.state.doc.nodeAt(s.activeHandle), a = lO(n, s.activeHandle, l.attrs);
  n.dispatch(
    n.state.tr.setMeta(xe, {
      setDragging: { startX: e.clientX, startWidth: a }
    })
  );
  function c(u) {
    o.removeEventListener("mouseup", c), o.removeEventListener("mousemove", f);
    const h = xe.getState(n.state);
    h != null && h.dragging && (cO(
      n,
      h.activeHandle,
      bh(h.dragging, u, t)
    ), n.dispatch(
      n.state.tr.setMeta(xe, { setDragging: null })
    ));
  }
  function f(u) {
    if (!u.which)
      return c(u);
    const h = xe.getState(n.state);
    if (h && h.dragging) {
      const d = bh(h.dragging, u, t);
      wh(
        n,
        h.activeHandle,
        d,
        r
      );
    }
  }
  return wh(
    n,
    s.activeHandle,
    a,
    r
  ), o.addEventListener("mouseup", c), o.addEventListener("mousemove", f), e.preventDefault(), !0;
}
function lO(n, e, { colspan: t, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i)
    return i;
  const o = n.domAtPos(e);
  let l = o.node.childNodes[o.offset].offsetWidth, a = t;
  if (r)
    for (let c = 0; c < t; c++)
      r[c] && (l -= r[c], a--);
  return l / a;
}
function aO(n) {
  for (; n && n.nodeName != "TD" && n.nodeName != "TH"; )
    n = n.classList && n.classList.contains("ProseMirror") ? null : n.parentNode;
  return n;
}
function yh(n, e, t, r) {
  const i = t == "right" ? -r : r, o = n.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!o)
    return -1;
  const { pos: s } = o, l = sr(n.state.doc.resolve(s));
  if (!l)
    return -1;
  if (t == "right")
    return l.pos;
  const a = G.get(l.node(-1)), c = l.start(-1), f = a.map.indexOf(l.pos - c);
  return f % a.width == 0 ? -1 : c + a.map[f - 1];
}
function bh(n, e, t) {
  const r = e.clientX - n.startX;
  return Math.max(t, n.startWidth + r);
}
function Ym(n, e) {
  n.dispatch(
    n.state.tr.setMeta(xe, { setHandle: e })
  );
}
function cO(n, e, t) {
  const r = n.state.doc.resolve(e), i = r.node(-1), o = G.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, a = n.state.tr;
  for (let c = 0; c < o.height; c++) {
    const f = c * o.width + l;
    if (c && o.map[f] == o.map[f - o.width])
      continue;
    const u = o.map[f], h = i.nodeAt(u).attrs, d = h.colspan == 1 ? 0 : l - o.colCount(u);
    if (h.colwidth && h.colwidth[d] == t)
      continue;
    const p = h.colwidth ? h.colwidth.slice() : fO(h.colspan);
    p[d] = t, a.setNodeMarkup(s + u, null, { ...h, colwidth: p });
  }
  a.docChanged && n.dispatch(a);
}
function wh(n, e, t, r) {
  const i = n.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), l = G.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  let a = n.domAtPos(i.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; )
    a = a.parentNode;
  a && ka(
    o,
    a.firstChild,
    a,
    r,
    l,
    t
  );
}
function fO(n) {
  return Array(n).fill(0);
}
function uO(n, e) {
  var t;
  const r = [], i = n.doc.resolve(e), o = i.node(-1);
  if (!o)
    return H.empty;
  const s = G.get(o), l = i.start(-1), a = s.colCount(i.pos - l) + i.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < s.height; c++) {
    const f = a + c * s.width;
    if ((a == s.width - 1 || s.map[f] != s.map[f + 1]) && (c == 0 || s.map[f] != s.map[f - s.width])) {
      const u = s.map[f], h = l + u + o.nodeAt(u).nodeSize - 1, d = document.createElement("div");
      d.className = "column-resize-handle", (t = xe.getState(n)) != null && t.dragging && r.push(
        ue.node(
          l + u,
          l + u + o.nodeAt(u).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), r.push(ue.widget(h, d));
    }
  }
  return H.create(n.doc, r);
}
function nD({
  allowTableNodeSelection: n = !1
} = {}) {
  return new bn({
    key: _t,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, t) {
        const r = e.getMeta(_t);
        if (r != null)
          return r == -1 ? null : r;
        if (t == null || !e.docChanged)
          return t;
        const { deleted: i, pos: o } = e.mapping.mapResult(t);
        return i ? null : o;
      }
    },
    props: {
      decorations: $A,
      handleDOMEvents: {
        mousedown: tO
      },
      createSelectionBetween(e) {
        return _t.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: ZA,
      handleKeyDown: QA,
      handlePaste: eO
    },
    appendTransaction(e, t, r) {
      return LA(
        r,
        zA(r, t),
        n
      );
    }
  });
}
var Ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hO(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function dO(n) {
  if (n.__esModule) return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(n, r);
    Object.defineProperty(t, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return n[r];
      }
    });
  }), t;
}
var Sh = Object.prototype.toString, Xm = function(e) {
  var t = Sh.call(e), r = t === "[object Arguments]";
  return r || (r = t !== "[object Array]" && e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && Sh.call(e.callee) === "[object Function]"), r;
}, dl, vh;
function pO() {
  if (vh) return dl;
  vh = 1;
  var n;
  if (!Object.keys) {
    var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, r = Xm, i = Object.prototype.propertyIsEnumerable, o = !i.call({ toString: null }, "toString"), s = i.call(function() {
    }, "prototype"), l = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], a = function(h) {
      var d = h.constructor;
      return d && d.prototype === h;
    }, c = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, f = function() {
      if (typeof window > "u")
        return !1;
      for (var h in window)
        try {
          if (!c["$" + h] && e.call(window, h) && window[h] !== null && typeof window[h] == "object")
            try {
              a(window[h]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), u = function(h) {
      if (typeof window > "u" || !f)
        return a(h);
      try {
        return a(h);
      } catch {
        return !1;
      }
    };
    n = function(d) {
      var p = d !== null && typeof d == "object", g = t.call(d) === "[object Function]", m = r(d), y = p && t.call(d) === "[object String]", v = [];
      if (!p && !g && !m)
        throw new TypeError("Object.keys called on a non-object");
      var k = s && g;
      if (y && d.length > 0 && !e.call(d, 0))
        for (var A = 0; A < d.length; ++A)
          v.push(String(A));
      if (m && d.length > 0)
        for (var O = 0; O < d.length; ++O)
          v.push(String(O));
      else
        for (var x in d)
          !(k && x === "prototype") && e.call(d, x) && v.push(String(x));
      if (o)
        for (var N = u(d), $ = 0; $ < l.length; ++$)
          !(N && l[$] === "constructor") && e.call(d, l[$]) && v.push(l[$]);
      return v;
    };
  }
  return dl = n, dl;
}
var gO = Array.prototype.slice, mO = Xm, xh = Object.keys, Vi = xh ? function(e) {
  return xh(e);
} : pO(), Ch = Object.keys;
Vi.shim = function() {
  if (Object.keys) {
    var e = function() {
      var t = Object.keys(arguments);
      return t && t.length === arguments.length;
    }(1, 2);
    e || (Object.keys = function(r) {
      return mO(r) ? Ch(gO.call(r)) : Ch(r);
    });
  } else
    Object.keys = Vi;
  return Object.keys || Vi;
};
var Lc = Vi, yO = Error, bO = EvalError, wO = RangeError, SO = ReferenceError, Qm = SyntaxError, Qt = TypeError, vO = URIError, Os = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, t = Symbol("test"), r = Object(t);
  if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var i = 42;
  e[t] = i;
  for (t in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var o = Object.getOwnPropertySymbols(e);
  if (o.length !== 1 || o[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var s = Object.getOwnPropertyDescriptor(e, t);
    if (s.value !== i || s.enumerable !== !0)
      return !1;
  }
  return !0;
}, kh = typeof Symbol < "u" && Symbol, xO = Os, Bc = function() {
  return typeof kh != "function" || typeof Symbol != "function" || typeof kh("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : xO();
}, pl = {
  __proto__: null,
  foo: {}
}, CO = Object, kO = function() {
  return { __proto__: pl }.foo === pl.foo && !(pl instanceof CO);
}, EO = "Function.prototype.bind called on incompatible ", AO = Object.prototype.toString, OO = Math.max, TO = "[object Function]", Eh = function(e, t) {
  for (var r = [], i = 0; i < e.length; i += 1)
    r[i] = e[i];
  for (var o = 0; o < t.length; o += 1)
    r[o + e.length] = t[o];
  return r;
}, MO = function(e, t) {
  for (var r = [], i = t, o = 0; i < e.length; i += 1, o += 1)
    r[o] = e[i];
  return r;
}, NO = function(n, e) {
  for (var t = "", r = 0; r < n.length; r += 1)
    t += n[r], r + 1 < n.length && (t += e);
  return t;
}, IO = function(e) {
  var t = this;
  if (typeof t != "function" || AO.apply(t) !== TO)
    throw new TypeError(EO + t);
  for (var r = MO(arguments, 1), i, o = function() {
    if (this instanceof i) {
      var f = t.apply(
        this,
        Eh(r, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return t.apply(
      e,
      Eh(r, arguments)
    );
  }, s = OO(0, t.length - r.length), l = [], a = 0; a < s; a++)
    l[a] = "$" + a;
  if (i = Function("binder", "return function (" + NO(l, ",") + "){ return binder.apply(this,arguments); }")(o), t.prototype) {
    var c = function() {
    };
    c.prototype = t.prototype, i.prototype = new c(), c.prototype = null;
  }
  return i;
}, RO = IO, zc = Function.prototype.bind || RO, DO = Function.prototype.call, $O = Object.prototype.hasOwnProperty, PO = zc, Zm = PO.call(DO, $O), D, _O = yO, LO = bO, BO = wO, zO = SO, Xn = Qm, Fn = Qt, FO = vO, ey = Function, gl = function(n) {
  try {
    return ey('"use strict"; return (' + n + ").constructor;")();
  } catch {
  }
}, fn = Object.getOwnPropertyDescriptor;
if (fn)
  try {
    fn({}, "");
  } catch {
    fn = null;
  }
var ml = function() {
  throw new Fn();
}, jO = fn ? function() {
  try {
    return arguments.callee, ml;
  } catch {
    try {
      return fn(arguments, "callee").get;
    } catch {
      return ml;
    }
  }
}() : ml, On = Bc(), VO = kO(), Y = Object.getPrototypeOf || (VO ? function(n) {
  return n.__proto__;
} : null), Dn = {}, WO = typeof Uint8Array > "u" || !Y ? D : Y(Uint8Array), un = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? D : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? D : ArrayBuffer,
  "%ArrayIteratorPrototype%": On && Y ? Y([][Symbol.iterator]()) : D,
  "%AsyncFromSyncIteratorPrototype%": D,
  "%AsyncFunction%": Dn,
  "%AsyncGenerator%": Dn,
  "%AsyncGeneratorFunction%": Dn,
  "%AsyncIteratorPrototype%": Dn,
  "%Atomics%": typeof Atomics > "u" ? D : Atomics,
  "%BigInt%": typeof BigInt > "u" ? D : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? D : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? D : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? D : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": _O,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": LO,
  "%Float32Array%": typeof Float32Array > "u" ? D : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? D : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? D : FinalizationRegistry,
  "%Function%": ey,
  "%GeneratorFunction%": Dn,
  "%Int8Array%": typeof Int8Array > "u" ? D : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? D : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? D : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": On && Y ? Y(Y([][Symbol.iterator]())) : D,
  "%JSON%": typeof JSON == "object" ? JSON : D,
  "%Map%": typeof Map > "u" ? D : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !On || !Y ? D : Y((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? D : Promise,
  "%Proxy%": typeof Proxy > "u" ? D : Proxy,
  "%RangeError%": BO,
  "%ReferenceError%": zO,
  "%Reflect%": typeof Reflect > "u" ? D : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? D : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !On || !Y ? D : Y((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? D : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": On && Y ? Y(""[Symbol.iterator]()) : D,
  "%Symbol%": On ? Symbol : D,
  "%SyntaxError%": Xn,
  "%ThrowTypeError%": jO,
  "%TypedArray%": WO,
  "%TypeError%": Fn,
  "%Uint8Array%": typeof Uint8Array > "u" ? D : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? D : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? D : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? D : Uint32Array,
  "%URIError%": FO,
  "%WeakMap%": typeof WeakMap > "u" ? D : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? D : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? D : WeakSet
};
if (Y)
  try {
    null.error;
  } catch (n) {
    var UO = Y(Y(n));
    un["%Error.prototype%"] = UO;
  }
var HO = function n(e) {
  var t;
  if (e === "%AsyncFunction%")
    t = gl("async function () {}");
  else if (e === "%GeneratorFunction%")
    t = gl("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    t = gl("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = n("%AsyncGeneratorFunction%");
    r && (t = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = n("%AsyncGenerator%");
    i && Y && (t = Y(i.prototype));
  }
  return un[e] = t, t;
}, Ah = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, ci = zc, qo = Zm, JO = ci.call(Function.call, Array.prototype.concat), GO = ci.call(Function.apply, Array.prototype.splice), Oh = ci.call(Function.call, String.prototype.replace), Yo = ci.call(Function.call, String.prototype.slice), KO = ci.call(Function.call, RegExp.prototype.exec), qO = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, YO = /\\(\\)?/g, XO = function(e) {
  var t = Yo(e, 0, 1), r = Yo(e, -1);
  if (t === "%" && r !== "%")
    throw new Xn("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && t !== "%")
    throw new Xn("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Oh(e, qO, function(o, s, l, a) {
    i[i.length] = l ? Oh(a, YO, "$1") : s || o;
  }), i;
}, QO = function(e, t) {
  var r = e, i;
  if (qo(Ah, r) && (i = Ah[r], r = "%" + i[0] + "%"), qo(un, r)) {
    var o = un[r];
    if (o === Dn && (o = HO(r)), typeof o > "u" && !t)
      throw new Fn("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: r,
      value: o
    };
  }
  throw new Xn("intrinsic " + e + " does not exist!");
}, rt = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new Fn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new Fn('"allowMissing" argument must be a boolean');
  if (KO(/^%?[^%]*%?$/, e) === null)
    throw new Xn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = XO(e), i = r.length > 0 ? r[0] : "", o = QO("%" + i + "%", t), s = o.name, l = o.value, a = !1, c = o.alias;
  c && (i = c[0], GO(r, JO([0, 1], c)));
  for (var f = 1, u = !0; f < r.length; f += 1) {
    var h = r[f], d = Yo(h, 0, 1), p = Yo(h, -1);
    if ((d === '"' || d === "'" || d === "`" || p === '"' || p === "'" || p === "`") && d !== p)
      throw new Xn("property names with quotes must have matching quotes");
    if ((h === "constructor" || !u) && (a = !0), i += "." + h, s = "%" + i + "%", qo(un, s))
      l = un[s];
    else if (l != null) {
      if (!(h in l)) {
        if (!t)
          throw new Fn("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (fn && f + 1 >= r.length) {
        var g = fn(l, h);
        u = !!g, u && "get" in g && !("originalValue" in g.get) ? l = g.get : l = l[h];
      } else
        u = qo(l, h), l = l[h];
      u && !a && (un[s] = l);
    }
  }
  return l;
}, yl, Th;
function Fc() {
  if (Th) return yl;
  Th = 1;
  var n = rt, e = n("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return yl = e, yl;
}
var ZO = rt, Wi = ZO("%Object.getOwnPropertyDescriptor%", !0);
if (Wi)
  try {
    Wi([], "length");
  } catch {
    Wi = null;
  }
var jc = Wi, Mh = Fc(), eT = Qm, Tn = Qt, Nh = jc, Vc = function(e, t, r) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Tn("`obj` must be an object or a function`");
  if (typeof t != "string" && typeof t != "symbol")
    throw new Tn("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Tn("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Tn("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Tn("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Tn("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, s = arguments.length > 5 ? arguments[5] : null, l = arguments.length > 6 ? arguments[6] : !1, a = !!Nh && Nh(e, t);
  if (Mh)
    Mh(e, t, {
      configurable: s === null && a ? a.configurable : !s,
      enumerable: i === null && a ? a.enumerable : !i,
      value: r,
      writable: o === null && a ? a.writable : !o
    });
  else if (l || !i && !o && !s)
    e[t] = r;
  else
    throw new eT("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Ea = Fc(), ty = function() {
  return !!Ea;
};
ty.hasArrayLengthDefineBug = function() {
  if (!Ea)
    return null;
  try {
    return Ea([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Wc = ty, tT = Lc, nT = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", rT = Object.prototype.toString, iT = Array.prototype.concat, Ih = Vc, oT = function(n) {
  return typeof n == "function" && rT.call(n) === "[object Function]";
}, ny = Wc(), sT = function(n, e, t, r) {
  if (e in n) {
    if (r === !0) {
      if (n[e] === t)
        return;
    } else if (!oT(r) || !r())
      return;
  }
  ny ? Ih(n, e, t, !0) : Ih(n, e, t);
}, ry = function(n, e) {
  var t = arguments.length > 2 ? arguments[2] : {}, r = tT(e);
  nT && (r = iT.call(r, Object.getOwnPropertySymbols(e)));
  for (var i = 0; i < r.length; i += 1)
    sT(n, r[i], e[r[i]], t[r[i]]);
};
ry.supportsDescriptors = !!ny;
var xn = ry, iy = { exports: {} }, lT = rt, Rh = Vc, aT = Wc(), Dh = jc, $h = Qt, cT = lT("%Math.floor%"), fT = function(e, t) {
  if (typeof e != "function")
    throw new $h("`fn` is not a function");
  if (typeof t != "number" || t < 0 || t > 4294967295 || cT(t) !== t)
    throw new $h("`length` must be a positive 32-bit integer");
  var r = arguments.length > 2 && !!arguments[2], i = !0, o = !0;
  if ("length" in e && Dh) {
    var s = Dh(e, "length");
    s && !s.configurable && (i = !1), s && !s.writable && (o = !1);
  }
  return (i || o || !r) && (aT ? Rh(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t,
    !0,
    !0
  ) : Rh(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t
  )), e;
};
(function(n) {
  var e = zc, t = rt, r = fT, i = Qt, o = t("%Function.prototype.apply%"), s = t("%Function.prototype.call%"), l = t("%Reflect.apply%", !0) || e.call(s, o), a = Fc(), c = t("%Math.max%");
  n.exports = function(h) {
    if (typeof h != "function")
      throw new i("a function is required");
    var d = l(e, s, arguments);
    return r(
      d,
      1 + c(0, h.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return l(e, o, arguments);
  };
  a ? a(n.exports, "apply", { value: f }) : n.exports.apply = f;
})(iy);
var lr = iy.exports, oy = rt, sy = lr, uT = sy(oy("String.prototype.indexOf")), Ie = function(e, t) {
  var r = oy(e, !!t);
  return typeof r == "function" && uT(e, ".prototype.") > -1 ? sy(r) : r;
}, hT = Lc, ly = Os(), ay = Ie, Ph = Object, dT = ay("Array.prototype.push"), _h = ay("Object.prototype.propertyIsEnumerable"), pT = ly ? Object.getOwnPropertySymbols : null, cy = function(e, t) {
  if (e == null)
    throw new TypeError("target must be an object");
  var r = Ph(e);
  if (arguments.length === 1)
    return r;
  for (var i = 1; i < arguments.length; ++i) {
    var o = Ph(arguments[i]), s = hT(o), l = ly && (Object.getOwnPropertySymbols || pT);
    if (l)
      for (var a = l(o), c = 0; c < a.length; ++c) {
        var f = a[c];
        _h(o, f) && dT(s, f);
      }
    for (var u = 0; u < s.length; ++u) {
      var h = s[u];
      if (_h(o, h)) {
        var d = o[h];
        r[h] = d;
      }
    }
  }
  return r;
}, bl = cy, gT = function() {
  if (!Object.assign)
    return !1;
  for (var n = "abcdefghijklmnopqrst", e = n.split(""), t = {}, r = 0; r < e.length; ++r)
    t[e[r]] = e[r];
  var i = Object.assign({}, t), o = "";
  for (var s in i)
    o += s;
  return n !== o;
}, mT = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var n = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(n, "xy");
  } catch {
    return n[1] === "y";
  }
  return !1;
}, fy = function() {
  return !Object.assign || gT() || mT() ? bl : Object.assign;
}, yT = xn, bT = fy, wT = function() {
  var e = bT();
  return yT(
    Object,
    { assign: e },
    { assign: function() {
      return Object.assign !== e;
    } }
  ), e;
}, ST = xn, vT = lr, xT = cy, uy = fy, CT = wT, kT = vT.apply(uy()), hy = function(e, t) {
  return kT(Object, arguments);
};
ST(hy, {
  getPolyfill: uy,
  implementation: xT,
  shim: CT
});
var ET = hy, ti = function() {
  return typeof (function() {
  }).name == "string";
}, Ir = Object.getOwnPropertyDescriptor;
if (Ir)
  try {
    Ir([], "length");
  } catch {
    Ir = null;
  }
ti.functionsHaveConfigurableNames = function() {
  if (!ti() || !Ir)
    return !1;
  var e = Ir(function() {
  }, "name");
  return !!e && !!e.configurable;
};
var AT = Function.prototype.bind;
ti.boundFunctionsHaveNames = function() {
  return ti() && typeof AT == "function" && (function() {
  }).bind().name !== "";
};
var OT = ti, Lh = Vc, TT = Wc(), MT = OT.functionsHaveConfigurableNames(), NT = Qt, IT = function(e, t) {
  if (typeof e != "function")
    throw new NT("`fn` is not a function");
  var r = arguments.length > 2 && !!arguments[2];
  return (!r || MT) && (TT ? Lh(
    /** @type {Parameters<define>[0]} */
    e,
    "name",
    t,
    !0,
    !0
  ) : Lh(
    /** @type {Parameters<define>[0]} */
    e,
    "name",
    t
  )), e;
}, RT = IT, DT = Qt, $T = Object, dy = RT(function() {
  if (this == null || this !== $T(this))
    throw new DT("RegExp.prototype.flags getter called on non-object");
  var e = "";
  return this.hasIndices && (e += "d"), this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.dotAll && (e += "s"), this.unicode && (e += "u"), this.unicodeSets && (e += "v"), this.sticky && (e += "y"), e;
}, "get flags", !0), PT = dy, _T = xn.supportsDescriptors, LT = Object.getOwnPropertyDescriptor, py = function() {
  if (_T && /a/mig.flags === "gim") {
    var e = LT(RegExp.prototype, "flags");
    if (e && typeof e.get == "function" && "dotAll" in RegExp.prototype && "hasIndices" in RegExp.prototype) {
      var t = "", r = {};
      if (Object.defineProperty(r, "hasIndices", {
        get: function() {
          t += "d";
        }
      }), Object.defineProperty(r, "sticky", {
        get: function() {
          t += "y";
        }
      }), e.get.call(r), t === "dy")
        return e.get;
    }
  }
  return PT;
}, BT = xn.supportsDescriptors, zT = py, FT = Object.getOwnPropertyDescriptor, jT = Object.defineProperty, VT = TypeError, Bh = Object.getPrototypeOf, WT = /a/, UT = function() {
  if (!BT || !Bh)
    throw new VT("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var e = zT(), t = Bh(WT), r = FT(t, "flags");
  return (!r || r.get !== e) && jT(t, "flags", {
    configurable: !0,
    enumerable: !1,
    get: e
  }), e;
}, HT = xn, JT = lr, GT = dy, gy = py, KT = UT, my = JT(gy());
HT(my, {
  getPolyfill: gy,
  implementation: GT,
  shim: KT
});
var qT = my, Ui = { exports: {} }, YT = Os, Cn = function() {
  return YT() && !!Symbol.toStringTag;
}, XT = Cn(), QT = Ie, Aa = QT("Object.prototype.toString"), Ts = function(e) {
  return XT && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : Aa(e) === "[object Arguments]";
}, yy = function(e) {
  return Ts(e) ? !0 : e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && Aa(e) !== "[object Array]" && Aa(e.callee) === "[object Function]";
}, ZT = function() {
  return Ts(arguments);
}();
Ts.isLegacyArguments = yy;
var by = ZT ? Ts : yy;
const eM = {}, tM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eM
}, Symbol.toStringTag, { value: "Module" })), nM = /* @__PURE__ */ dO(tM);
var Uc = typeof Map == "function" && Map.prototype, wl = Object.getOwnPropertyDescriptor && Uc ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Xo = Uc && wl && typeof wl.get == "function" ? wl.get : null, zh = Uc && Map.prototype.forEach, Hc = typeof Set == "function" && Set.prototype, Sl = Object.getOwnPropertyDescriptor && Hc ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Qo = Hc && Sl && typeof Sl.get == "function" ? Sl.get : null, Fh = Hc && Set.prototype.forEach, rM = typeof WeakMap == "function" && WeakMap.prototype, Rr = rM ? WeakMap.prototype.has : null, iM = typeof WeakSet == "function" && WeakSet.prototype, Dr = iM ? WeakSet.prototype.has : null, oM = typeof WeakRef == "function" && WeakRef.prototype, jh = oM ? WeakRef.prototype.deref : null, sM = Boolean.prototype.valueOf, lM = Object.prototype.toString, aM = Function.prototype.toString, cM = String.prototype.match, Jc = String.prototype.slice, jt = String.prototype.replace, fM = String.prototype.toUpperCase, Vh = String.prototype.toLowerCase, wy = RegExp.prototype.test, Wh = Array.prototype.concat, He = Array.prototype.join, uM = Array.prototype.slice, Uh = Math.floor, Oa = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, vl = Object.getOwnPropertySymbols, Ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Qn = typeof Symbol == "function" && typeof Symbol.iterator == "object", ce = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Qn || !0) ? Symbol.toStringTag : null, Sy = Object.prototype.propertyIsEnumerable, Hh = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(n) {
  return n.__proto__;
} : null);
function Jh(n, e) {
  if (n === 1 / 0 || n === -1 / 0 || n !== n || n && n > -1e3 && n < 1e3 || wy.call(/e/, e))
    return e;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof n == "number") {
    var r = n < 0 ? -Uh(-n) : Uh(n);
    if (r !== n) {
      var i = String(r), o = Jc.call(e, i.length + 1);
      return jt.call(i, t, "$&_") + "." + jt.call(jt.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return jt.call(e, t, "$&_");
}
var Ma = nM, Gh = Ma.custom, Kh = xy(Gh) ? Gh : null, hM = function n(e, t, r, i) {
  var o = t || {};
  if (Rt(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Rt(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var s = Rt(o, "customInspect") ? o.customInspect : !0;
  if (typeof s != "boolean" && s !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Rt(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Rt(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var l = o.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return ky(e, o);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var a = String(e);
    return l ? Jh(e, a) : a;
  }
  if (typeof e == "bigint") {
    var c = String(e) + "n";
    return l ? Jh(e, c) : c;
  }
  var f = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof r > "u" && (r = 0), r >= f && f > 0 && typeof e == "object")
    return Na(e) ? "[Array]" : "[Object]";
  var u = NM(o, r);
  if (typeof i > "u")
    i = [];
  else if (Cy(i, e) >= 0)
    return "[Circular]";
  function h(we, ke, Ct) {
    if (ke && (i = uM.call(i), i.push(ke)), Ct) {
      var Ee = {
        depth: o.depth
      };
      return Rt(o, "quoteStyle") && (Ee.quoteStyle = o.quoteStyle), n(we, Ee, r + 1, i);
    }
    return n(we, o, r + 1, i);
  }
  if (typeof e == "function" && !qh(e)) {
    var d = vM(e), p = Ti(e, h);
    return "[Function" + (d ? ": " + d : " (anonymous)") + "]" + (p.length > 0 ? " { " + He.call(p, ", ") + " }" : "");
  }
  if (xy(e)) {
    var g = Qn ? jt.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ta.call(e);
    return typeof e == "object" && !Qn ? pr(g) : g;
  }
  if (OM(e)) {
    for (var m = "<" + Vh.call(String(e.nodeName)), y = e.attributes || [], v = 0; v < y.length; v++)
      m += " " + y[v].name + "=" + vy(dM(y[v].value), "double", o);
    return m += ">", e.childNodes && e.childNodes.length && (m += "..."), m += "</" + Vh.call(String(e.nodeName)) + ">", m;
  }
  if (Na(e)) {
    if (e.length === 0)
      return "[]";
    var k = Ti(e, h);
    return u && !MM(k) ? "[" + Ia(k, u) + "]" : "[ " + He.call(k, ", ") + " ]";
  }
  if (gM(e)) {
    var A = Ti(e, h);
    return !("cause" in Error.prototype) && "cause" in e && !Sy.call(e, "cause") ? "{ [" + String(e) + "] " + He.call(Wh.call("[cause]: " + h(e.cause), A), ", ") + " }" : A.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + He.call(A, ", ") + " }";
  }
  if (typeof e == "object" && s) {
    if (Kh && typeof e[Kh] == "function" && Ma)
      return Ma(e, { depth: f - r });
    if (s !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (xM(e)) {
    var O = [];
    return zh && zh.call(e, function(we, ke) {
      O.push(h(ke, e, !0) + " => " + h(we, e));
    }), Yh("Map", Xo.call(e), O, u);
  }
  if (EM(e)) {
    var x = [];
    return Fh && Fh.call(e, function(we) {
      x.push(h(we, e));
    }), Yh("Set", Qo.call(e), x, u);
  }
  if (CM(e))
    return xl("WeakMap");
  if (AM(e))
    return xl("WeakSet");
  if (kM(e))
    return xl("WeakRef");
  if (yM(e))
    return pr(h(Number(e)));
  if (wM(e))
    return pr(h(Oa.call(e)));
  if (bM(e))
    return pr(sM.call(e));
  if (mM(e))
    return pr(h(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof Ko < "u" && e === Ko)
    return "{ [object globalThis] }";
  if (!pM(e) && !qh(e)) {
    var N = Ti(e, h), $ = Hh ? Hh(e) === Object.prototype : e instanceof Object || e.constructor === Object, C = e instanceof Object ? "" : "null prototype", U = !$ && ce && Object(e) === e && ce in e ? Jc.call(Zt(e), 8, -1) : C ? "Object" : "", ge = $ || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", P = ge + (U || C ? "[" + He.call(Wh.call([], U || [], C || []), ": ") + "] " : "");
    return N.length === 0 ? P + "{}" : u ? P + "{" + Ia(N, u) + "}" : P + "{ " + He.call(N, ", ") + " }";
  }
  return String(e);
};
function vy(n, e, t) {
  var r = (t.quoteStyle || e) === "double" ? '"' : "'";
  return r + n + r;
}
function dM(n) {
  return jt.call(String(n), /"/g, "&quot;");
}
function Na(n) {
  return Zt(n) === "[object Array]" && (!ce || !(typeof n == "object" && ce in n));
}
function pM(n) {
  return Zt(n) === "[object Date]" && (!ce || !(typeof n == "object" && ce in n));
}
function qh(n) {
  return Zt(n) === "[object RegExp]" && (!ce || !(typeof n == "object" && ce in n));
}
function gM(n) {
  return Zt(n) === "[object Error]" && (!ce || !(typeof n == "object" && ce in n));
}
function mM(n) {
  return Zt(n) === "[object String]" && (!ce || !(typeof n == "object" && ce in n));
}
function yM(n) {
  return Zt(n) === "[object Number]" && (!ce || !(typeof n == "object" && ce in n));
}
function bM(n) {
  return Zt(n) === "[object Boolean]" && (!ce || !(typeof n == "object" && ce in n));
}
function xy(n) {
  if (Qn)
    return n && typeof n == "object" && n instanceof Symbol;
  if (typeof n == "symbol")
    return !0;
  if (!n || typeof n != "object" || !Ta)
    return !1;
  try {
    return Ta.call(n), !0;
  } catch {
  }
  return !1;
}
function wM(n) {
  if (!n || typeof n != "object" || !Oa)
    return !1;
  try {
    return Oa.call(n), !0;
  } catch {
  }
  return !1;
}
var SM = Object.prototype.hasOwnProperty || function(n) {
  return n in this;
};
function Rt(n, e) {
  return SM.call(n, e);
}
function Zt(n) {
  return lM.call(n);
}
function vM(n) {
  if (n.name)
    return n.name;
  var e = cM.call(aM.call(n), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Cy(n, e) {
  if (n.indexOf)
    return n.indexOf(e);
  for (var t = 0, r = n.length; t < r; t++)
    if (n[t] === e)
      return t;
  return -1;
}
function xM(n) {
  if (!Xo || !n || typeof n != "object")
    return !1;
  try {
    Xo.call(n);
    try {
      Qo.call(n);
    } catch {
      return !0;
    }
    return n instanceof Map;
  } catch {
  }
  return !1;
}
function CM(n) {
  if (!Rr || !n || typeof n != "object")
    return !1;
  try {
    Rr.call(n, Rr);
    try {
      Dr.call(n, Dr);
    } catch {
      return !0;
    }
    return n instanceof WeakMap;
  } catch {
  }
  return !1;
}
function kM(n) {
  if (!jh || !n || typeof n != "object")
    return !1;
  try {
    return jh.call(n), !0;
  } catch {
  }
  return !1;
}
function EM(n) {
  if (!Qo || !n || typeof n != "object")
    return !1;
  try {
    Qo.call(n);
    try {
      Xo.call(n);
    } catch {
      return !0;
    }
    return n instanceof Set;
  } catch {
  }
  return !1;
}
function AM(n) {
  if (!Dr || !n || typeof n != "object")
    return !1;
  try {
    Dr.call(n, Dr);
    try {
      Rr.call(n, Rr);
    } catch {
      return !0;
    }
    return n instanceof WeakSet;
  } catch {
  }
  return !1;
}
function OM(n) {
  return !n || typeof n != "object" ? !1 : typeof HTMLElement < "u" && n instanceof HTMLElement ? !0 : typeof n.nodeName == "string" && typeof n.getAttribute == "function";
}
function ky(n, e) {
  if (n.length > e.maxStringLength) {
    var t = n.length - e.maxStringLength, r = "... " + t + " more character" + (t > 1 ? "s" : "");
    return ky(Jc.call(n, 0, e.maxStringLength), e) + r;
  }
  var i = jt.call(jt.call(n, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, TM);
  return vy(i, "single", e);
}
function TM(n) {
  var e = n.charCodeAt(0), t = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + fM.call(e.toString(16));
}
function pr(n) {
  return "Object(" + n + ")";
}
function xl(n) {
  return n + " { ? }";
}
function Yh(n, e, t, r) {
  var i = r ? Ia(t, r) : He.call(t, ", ");
  return n + " (" + e + ") {" + i + "}";
}
function MM(n) {
  for (var e = 0; e < n.length; e++)
    if (Cy(n[e], `
`) >= 0)
      return !1;
  return !0;
}
function NM(n, e) {
  var t;
  if (n.indent === "	")
    t = "	";
  else if (typeof n.indent == "number" && n.indent > 0)
    t = He.call(Array(n.indent + 1), " ");
  else
    return null;
  return {
    base: t,
    prev: He.call(Array(e + 1), t)
  };
}
function Ia(n, e) {
  if (n.length === 0)
    return "";
  var t = `
` + e.prev + e.base;
  return t + He.call(n, "," + t) + `
` + e.prev;
}
function Ti(n, e) {
  var t = Na(n), r = [];
  if (t) {
    r.length = n.length;
    for (var i = 0; i < n.length; i++)
      r[i] = Rt(n, i) ? e(n[i], n) : "";
  }
  var o = typeof vl == "function" ? vl(n) : [], s;
  if (Qn) {
    s = {};
    for (var l = 0; l < o.length; l++)
      s["$" + o[l]] = o[l];
  }
  for (var a in n)
    Rt(n, a) && (t && String(Number(a)) === a && a < n.length || Qn && s["$" + a] instanceof Symbol || (wy.call(/[^\w$]/, a) ? r.push(e(a, n) + ": " + e(n[a], n)) : r.push(a + ": " + e(n[a], n))));
  if (typeof vl == "function")
    for (var c = 0; c < o.length; c++)
      Sy.call(n, o[c]) && r.push("[" + e(o[c]) + "]: " + e(n[o[c]], n));
  return r;
}
var Ey = rt, ar = Ie, IM = hM, RM = Qt, Mi = Ey("%WeakMap%", !0), Ni = Ey("%Map%", !0), DM = ar("WeakMap.prototype.get", !0), $M = ar("WeakMap.prototype.set", !0), PM = ar("WeakMap.prototype.has", !0), _M = ar("Map.prototype.get", !0), LM = ar("Map.prototype.set", !0), BM = ar("Map.prototype.has", !0), Gc = function(n, e) {
  for (var t = n, r; (r = t.next) !== null; t = r)
    if (r.key === e)
      return t.next = r.next, r.next = /** @type {NonNullable<typeof list.next>} */
      n.next, n.next = r, r;
}, zM = function(n, e) {
  var t = Gc(n, e);
  return t && t.value;
}, FM = function(n, e, t) {
  var r = Gc(n, e);
  r ? r.value = t : n.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: n.next,
    value: t
  };
}, jM = function(n, e) {
  return !!Gc(n, e);
}, Ay = function() {
  var e, t, r, i = {
    assert: function(o) {
      if (!i.has(o))
        throw new RM("Side channel does not contain " + IM(o));
    },
    get: function(o) {
      if (Mi && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return DM(e, o);
      } else if (Ni) {
        if (t)
          return _M(t, o);
      } else if (r)
        return zM(r, o);
    },
    has: function(o) {
      if (Mi && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return PM(e, o);
      } else if (Ni) {
        if (t)
          return BM(t, o);
      } else if (r)
        return jM(r, o);
      return !1;
    },
    set: function(o, s) {
      Mi && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new Mi()), $M(e, o, s)) : Ni ? (t || (t = new Ni()), LM(t, o, s)) : (r || (r = { key: {}, next: null }), FM(r, o, s));
    }
  };
  return i;
}, VM = Zm, gr = Ay(), ut = Qt, Kc = {
  assert: function(n, e) {
    if (!n || typeof n != "object" && typeof n != "function")
      throw new ut("`O` is not an object");
    if (typeof e != "string")
      throw new ut("`slot` must be a string");
    if (gr.assert(n), !Kc.has(n, e))
      throw new ut("`" + e + "` is not present on `O`");
  },
  get: function(n, e) {
    if (!n || typeof n != "object" && typeof n != "function")
      throw new ut("`O` is not an object");
    if (typeof e != "string")
      throw new ut("`slot` must be a string");
    var t = gr.get(n);
    return t && t["$" + e];
  },
  has: function(n, e) {
    if (!n || typeof n != "object" && typeof n != "function")
      throw new ut("`O` is not an object");
    if (typeof e != "string")
      throw new ut("`slot` must be a string");
    var t = gr.get(n);
    return !!t && VM(t, "$" + e);
  },
  set: function(n, e, t) {
    if (!n || typeof n != "object" && typeof n != "function")
      throw new ut("`O` is not an object");
    if (typeof e != "string")
      throw new ut("`slot` must be a string");
    var r = gr.get(n);
    r || (r = {}, gr.set(n, r)), r["$" + e] = t;
  }
};
Object.freeze && Object.freeze(Kc);
var WM = Kc, mr = WM, UM = SyntaxError, Xh = typeof StopIteration == "object" ? StopIteration : null, HM = function(e) {
  if (!Xh)
    throw new UM("this environment lacks StopIteration");
  mr.set(e, "[[Done]]", !1);
  var t = {
    next: function() {
      var i = mr.get(this, "[[Iterator]]"), o = mr.get(i, "[[Done]]");
      try {
        return {
          done: o,
          value: o ? void 0 : i.next()
        };
      } catch (s) {
        if (mr.set(i, "[[Done]]", !0), s !== Xh)
          throw s;
        return {
          done: !0,
          value: void 0
        };
      }
    }
  };
  return mr.set(t, "[[Iterator]]", e), t;
}, JM = {}.toString, Oy = Array.isArray || function(n) {
  return JM.call(n) == "[object Array]";
}, GM = String.prototype.valueOf, KM = function(e) {
  try {
    return GM.call(e), !0;
  } catch {
    return !1;
  }
}, qM = Object.prototype.toString, YM = "[object String]", XM = Cn(), Ty = function(e) {
  return typeof e == "string" ? !0 : typeof e != "object" ? !1 : XM ? KM(e) : qM.call(e) === YM;
}, qc = typeof Map == "function" && Map.prototype ? Map : null, QM = typeof Set == "function" && Set.prototype ? Set : null, Zo;
qc || (Zo = function(e) {
  return !1;
});
var My = qc ? Map.prototype.has : null, Qh = QM ? Set.prototype.has : null;
!Zo && !My && (Zo = function(e) {
  return !1;
});
var Ny = Zo || function(e) {
  if (!e || typeof e != "object")
    return !1;
  try {
    if (My.call(e), Qh)
      try {
        Qh.call(e);
      } catch {
        return !0;
      }
    return e instanceof qc;
  } catch {
  }
  return !1;
}, ZM = typeof Map == "function" && Map.prototype ? Map : null, Yc = typeof Set == "function" && Set.prototype ? Set : null, es;
Yc || (es = function(e) {
  return !1;
});
var Zh = ZM ? Map.prototype.has : null, Iy = Yc ? Set.prototype.has : null;
!es && !Iy && (es = function(e) {
  return !1;
});
var Ry = es || function(e) {
  if (!e || typeof e != "object")
    return !1;
  try {
    if (Iy.call(e), Zh)
      try {
        Zh.call(e);
      } catch {
        return !0;
      }
    return e instanceof Yc;
  } catch {
  }
  return !1;
}, ed = by, td = HM;
if (Bc() || Os()) {
  var Cl = Symbol.iterator;
  Ui.exports = function(e) {
    if (e != null && typeof e[Cl] < "u")
      return e[Cl]();
    if (ed(e))
      return Array.prototype[Cl].call(e);
  };
} else {
  var eN = Oy, tN = Ty, nd = rt, nN = nd("%Map%", !0), rN = nd("%Set%", !0), Re = Ie, rd = Re("Array.prototype.push"), id = Re("String.prototype.charCodeAt"), iN = Re("String.prototype.slice"), oN = function(e, t) {
    var r = e.length;
    if (t + 1 >= r)
      return t + 1;
    var i = id(e, t);
    if (i < 55296 || i > 56319)
      return t + 1;
    var o = id(e, t + 1);
    return o < 56320 || o > 57343 ? t + 1 : t + 2;
  }, kl = function(e) {
    var t = 0;
    return {
      next: function() {
        var i = t >= e.length, o;
        return i || (o = e[t], t += 1), {
          done: i,
          value: o
        };
      }
    };
  }, od = function(e, t) {
    if (eN(e) || ed(e))
      return kl(e);
    if (tN(e)) {
      var r = 0;
      return {
        next: function() {
          var o = oN(e, r), s = iN(e, r, o);
          return r = o, {
            done: o > e.length,
            value: s
          };
        }
      };
    }
    if (t && typeof e["_es6-shim iterator_"] < "u")
      return e["_es6-shim iterator_"]();
  };
  if (!nN && !rN)
    Ui.exports = function(e) {
      if (e != null)
        return od(e, !0);
    };
  else {
    var sN = Ny, lN = Ry, sd = Re("Map.prototype.forEach", !0), ld = Re("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var ad = Re("Map.prototype.iterator", !0), cd = Re("Set.prototype.iterator", !0);
    var fd = Re("Map.prototype.@@iterator", !0) || Re("Map.prototype._es6-shim iterator_", !0), ud = Re("Set.prototype.@@iterator", !0) || Re("Set.prototype._es6-shim iterator_", !0), aN = function(e) {
      if (sN(e)) {
        if (ad)
          return td(ad(e));
        if (fd)
          return fd(e);
        if (sd) {
          var t = [];
          return sd(e, function(i, o) {
            rd(t, [o, i]);
          }), kl(t);
        }
      }
      if (lN(e)) {
        if (cd)
          return td(cd(e));
        if (ud)
          return ud(e);
        if (ld) {
          var r = [];
          return ld(e, function(i) {
            rd(r, i);
          }), kl(r);
        }
      }
    };
    Ui.exports = function(e) {
      return aN(e) || od(e);
    };
  }
}
var cN = Ui.exports, hd = function(n) {
  return n !== n;
}, Dy = function(e, t) {
  return e === 0 && t === 0 ? 1 / e === 1 / t : !!(e === t || hd(e) && hd(t));
}, fN = Dy, $y = function() {
  return typeof Object.is == "function" ? Object.is : fN;
}, uN = $y, hN = xn, dN = function() {
  var e = uN();
  return hN(Object, { is: e }, {
    is: function() {
      return Object.is !== e;
    }
  }), e;
}, pN = xn, gN = lr, mN = Dy, Py = $y, yN = dN, _y = gN(Py(), Object);
pN(_y, {
  getPolyfill: Py,
  implementation: mN,
  shim: yN
});
var bN = _y, wN = lr, Ly = Ie, SN = rt, Ra = SN("%ArrayBuffer%", !0), Hi = Ly("ArrayBuffer.prototype.byteLength", !0), vN = Ly("Object.prototype.toString"), dd = !!Ra && !Hi && new Ra(0).slice, pd = !!dd && wN(dd), By = Hi || pd ? function(e) {
  if (!e || typeof e != "object")
    return !1;
  try {
    return Hi ? Hi(e) : pd(e, 0), !0;
  } catch {
    return !1;
  }
} : Ra ? function(e) {
  return vN(e) === "[object ArrayBuffer]";
} : function(e) {
  return !1;
}, xN = Date.prototype.getDay, CN = function(e) {
  try {
    return xN.call(e), !0;
  } catch {
    return !1;
  }
}, kN = Object.prototype.toString, EN = "[object Date]", AN = Cn(), ON = function(e) {
  return typeof e != "object" || e === null ? !1 : AN ? CN(e) : kN.call(e) === EN;
}, Da = Ie, zy = Cn(), Fy, jy, $a, Pa;
if (zy) {
  Fy = Da("Object.prototype.hasOwnProperty"), jy = Da("RegExp.prototype.exec"), $a = {};
  var El = function() {
    throw $a;
  };
  Pa = {
    toString: El,
    valueOf: El
  }, typeof Symbol.toPrimitive == "symbol" && (Pa[Symbol.toPrimitive] = El);
}
var TN = Da("Object.prototype.toString"), MN = Object.getOwnPropertyDescriptor, NN = "[object RegExp]", IN = zy ? function(e) {
  if (!e || typeof e != "object")
    return !1;
  var t = MN(e, "lastIndex"), r = t && Fy(t, "value");
  if (!r)
    return !1;
  try {
    jy(e, Pa);
  } catch (i) {
    return i === $a;
  }
} : function(e) {
  return !e || typeof e != "object" && typeof e != "function" ? !1 : TN(e) === NN;
}, RN = Ie, gd = RN("SharedArrayBuffer.prototype.byteLength", !0), DN = gd ? function(e) {
  if (!e || typeof e != "object")
    return !1;
  try {
    return gd(e), !0;
  } catch {
    return !1;
  }
} : function(e) {
  return !1;
}, $N = Number.prototype.toString, PN = function(e) {
  try {
    return $N.call(e), !0;
  } catch {
    return !1;
  }
}, _N = Object.prototype.toString, LN = "[object Number]", BN = Cn(), zN = function(e) {
  return typeof e == "number" ? !0 : typeof e != "object" ? !1 : BN ? PN(e) : _N.call(e) === LN;
}, Vy = Ie, FN = Vy("Boolean.prototype.toString"), jN = Vy("Object.prototype.toString"), VN = function(e) {
  try {
    return FN(e), !0;
  } catch {
    return !1;
  }
}, WN = "[object Boolean]", UN = Cn(), HN = function(e) {
  return typeof e == "boolean" ? !0 : e === null || typeof e != "object" ? !1 : UN && Symbol.toStringTag in e ? VN(e) : jN(e) === WN;
}, _a = { exports: {} }, JN = Object.prototype.toString, GN = Bc();
if (GN) {
  var KN = Symbol.prototype.toString, qN = /^Symbol\(.*\)$/, YN = function(e) {
    return typeof e.valueOf() != "symbol" ? !1 : qN.test(KN.call(e));
  };
  _a.exports = function(e) {
    if (typeof e == "symbol")
      return !0;
    if (JN.call(e) !== "[object Symbol]")
      return !1;
    try {
      return YN(e);
    } catch {
      return !1;
    }
  };
} else
  _a.exports = function(e) {
    return !1;
  };
var XN = _a.exports, La = { exports: {} }, md = typeof BigInt < "u" && BigInt, QN = function() {
  return typeof md == "function" && typeof BigInt == "function" && typeof md(42) == "bigint" && typeof BigInt(42) == "bigint";
}, ZN = QN();
if (ZN) {
  var eI = BigInt.prototype.valueOf, tI = function(e) {
    try {
      return eI.call(e), !0;
    } catch {
    }
    return !1;
  };
  La.exports = function(e) {
    return e === null || typeof e > "u" || typeof e == "boolean" || typeof e == "string" || typeof e == "number" || typeof e == "symbol" || typeof e == "function" ? !1 : typeof e == "bigint" ? !0 : tI(e);
  };
} else
  La.exports = function(e) {
    return !1;
  };
var nI = La.exports, rI = Ty, iI = zN, oI = HN, sI = XN, lI = nI, aI = function(e) {
  if (e == null || typeof e != "object" && typeof e != "function")
    return null;
  if (rI(e))
    return "String";
  if (iI(e))
    return "Number";
  if (oI(e))
    return "Boolean";
  if (sI(e))
    return "Symbol";
  if (lI(e))
    return "BigInt";
}, ts = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, yd = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, ns;
ts || (ns = function(e) {
  return !1;
});
var Ba = ts ? ts.prototype.has : null, Al = yd ? yd.prototype.has : null;
!ns && !Ba && (ns = function(e) {
  return !1;
});
var cI = ns || function(e) {
  if (!e || typeof e != "object")
    return !1;
  try {
    if (Ba.call(e, Ba), Al)
      try {
        Al.call(e, Al);
      } catch {
        return !0;
      }
    return e instanceof ts;
  } catch {
  }
  return !1;
}, za = { exports: {} }, fI = rt, Wy = Ie, uI = fI("%WeakSet%", !0), Ol = Wy("WeakSet.prototype.has", !0);
if (Ol) {
  var Tl = Wy("WeakMap.prototype.has", !0);
  za.exports = function(e) {
    if (!e || typeof e != "object")
      return !1;
    try {
      if (Ol(e, Ol), Tl)
        try {
          Tl(e, Tl);
        } catch {
          return !0;
        }
      return e instanceof uI;
    } catch {
    }
    return !1;
  };
} else
  za.exports = function(e) {
    return !1;
  };
var hI = za.exports, dI = Ny, pI = Ry, gI = cI, mI = hI, yI = function(e) {
  if (e && typeof e == "object") {
    if (dI(e))
      return "Map";
    if (pI(e))
      return "Set";
    if (gI(e))
      return "WeakMap";
    if (mI(e))
      return "WeakSet";
  }
  return !1;
}, Uy = Function.prototype.toString, $n = typeof Reflect == "object" && Reflect !== null && Reflect.apply, Fa, Ji;
if (typeof $n == "function" && typeof Object.defineProperty == "function")
  try {
    Fa = Object.defineProperty({}, "length", {
      get: function() {
        throw Ji;
      }
    }), Ji = {}, $n(function() {
      throw 42;
    }, null, Fa);
  } catch (n) {
    n !== Ji && ($n = null);
  }
else
  $n = null;
var bI = /^\s*class\b/, ja = function(e) {
  try {
    var t = Uy.call(e);
    return bI.test(t);
  } catch {
    return !1;
  }
}, Ml = function(e) {
  try {
    return ja(e) ? !1 : (Uy.call(e), !0);
  } catch {
    return !1;
  }
}, Gi = Object.prototype.toString, wI = "[object Object]", SI = "[object Function]", vI = "[object GeneratorFunction]", xI = "[object HTMLAllCollection]", CI = "[object HTML document.all class]", kI = "[object HTMLCollection]", EI = typeof Symbol == "function" && !!Symbol.toStringTag, AI = !(0 in [,]), Va = function() {
  return !1;
};
if (typeof document == "object") {
  var OI = document.all;
  Gi.call(OI) === Gi.call(document.all) && (Va = function(e) {
    if ((AI || !e) && (typeof e > "u" || typeof e == "object"))
      try {
        var t = Gi.call(e);
        return (t === xI || t === CI || t === kI || t === wI) && e("") == null;
      } catch {
      }
    return !1;
  });
}
var TI = $n ? function(e) {
  if (Va(e))
    return !0;
  if (!e || typeof e != "function" && typeof e != "object")
    return !1;
  try {
    $n(e, null, Fa);
  } catch (t) {
    if (t !== Ji)
      return !1;
  }
  return !ja(e) && Ml(e);
} : function(e) {
  if (Va(e))
    return !0;
  if (!e || typeof e != "function" && typeof e != "object")
    return !1;
  if (EI)
    return Ml(e);
  if (ja(e))
    return !1;
  var t = Gi.call(e);
  return t !== SI && t !== vI && !/^\[object HTML/.test(t) ? !1 : Ml(e);
}, MI = TI, NI = Object.prototype.toString, Hy = Object.prototype.hasOwnProperty, II = function(e, t, r) {
  for (var i = 0, o = e.length; i < o; i++)
    Hy.call(e, i) && (r == null ? t(e[i], i, e) : t.call(r, e[i], i, e));
}, RI = function(e, t, r) {
  for (var i = 0, o = e.length; i < o; i++)
    r == null ? t(e.charAt(i), i, e) : t.call(r, e.charAt(i), i, e);
}, DI = function(e, t, r) {
  for (var i in e)
    Hy.call(e, i) && (r == null ? t(e[i], i, e) : t.call(r, e[i], i, e));
}, $I = function(e, t, r) {
  if (!MI(t))
    throw new TypeError("iterator must be a function");
  var i;
  arguments.length >= 3 && (i = r), NI.call(e) === "[object Array]" ? II(e, t, i) : typeof e == "string" ? RI(e, t, i) : DI(e, t, i);
}, PI = $I, _I = [
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array"
], Nl = _I, LI = typeof globalThis > "u" ? Ko : globalThis, BI = function() {
  for (var e = [], t = 0; t < Nl.length; t++)
    typeof LI[Nl[t]] == "function" && (e[e.length] = Nl[t]);
  return e;
}, rs = PI, zI = BI, bd = lr, Xc = Ie, Ki = jc, FI = Xc("Object.prototype.toString"), Jy = Cn(), wd = typeof globalThis > "u" ? Ko : globalThis, Wa = zI(), Qc = Xc("String.prototype.slice"), Il = Object.getPrototypeOf, jI = Xc("Array.prototype.indexOf", !0) || function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r] === t)
      return r;
  return -1;
}, is = { __proto__: null };
Jy && Ki && Il ? rs(Wa, function(n) {
  var e = new wd[n]();
  if (Symbol.toStringTag in e) {
    var t = Il(e), r = Ki(t, Symbol.toStringTag);
    if (!r) {
      var i = Il(t);
      r = Ki(i, Symbol.toStringTag);
    }
    is["$" + n] = bd(r.get);
  }
}) : rs(Wa, function(n) {
  var e = new wd[n](), t = e.slice || e.set;
  t && (is["$" + n] = bd(t));
});
var VI = function(e) {
  var t = !1;
  return rs(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    is,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(r, i) {
      if (!t)
        try {
          "$" + r(e) === i && (t = Qc(i, 1));
        } catch {
        }
    }
  ), t;
}, WI = function(e) {
  var t = !1;
  return rs(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    is,
    /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
    function(r, i) {
      if (!t)
        try {
          r(e), t = Qc(i, 1);
        } catch {
        }
    }
  ), t;
}, UI = function(e) {
  if (!e || typeof e != "object")
    return !1;
  if (!Jy) {
    var t = Qc(FI(e), 8, -1);
    return jI(Wa, t) > -1 ? t : t !== "Object" ? !1 : WI(e);
  }
  return Ki ? VI(e) : null;
}, HI = Ie, Sd = HI("ArrayBuffer.prototype.byteLength", !0), JI = By, GI = function(e) {
  return JI(e) ? Sd ? Sd(e) : e.byteLength : NaN;
}, Gy = ET, it = Ie, vd = qT, KI = rt, Zn = cN, qI = Ay, xd = bN, Cd = by, kd = Oy, Ed = By, Ad = ON, Od = IN, Td = DN, Md = Lc, Nd = aI, Id = yI, Rd = UI, Dd = GI, $d = it("SharedArrayBuffer.prototype.byteLength", !0), Pd = it("Date.prototype.getTime"), Rl = Object.getPrototypeOf, _d = it("Object.prototype.toString"), ss = KI("%Set%", !0), Ua = it("Map.prototype.has", !0), ls = it("Map.prototype.get", !0), Ld = it("Map.prototype.size", !0), as = it("Set.prototype.add", !0), Ky = it("Set.prototype.delete", !0), cs = it("Set.prototype.has", !0), qi = it("Set.prototype.size", !0);
function Bd(n, e, t, r) {
  for (var i = Zn(n), o; (o = i.next()) && !o.done; )
    if (_e(e, o.value, t, r))
      return Ky(n, o.value), !0;
  return !1;
}
function qy(n) {
  if (typeof n > "u")
    return null;
  if (typeof n != "object")
    return typeof n == "symbol" ? !1 : typeof n == "string" || typeof n == "number" ? +n == +n : !0;
}
function YI(n, e, t, r, i, o) {
  var s = qy(t);
  if (s != null)
    return s;
  var l = ls(e, s), a = Gy({}, i, { strict: !1 });
  return typeof l > "u" && !Ua(e, s) || !_e(r, l, a, o) ? !1 : !Ua(n, s) && _e(r, l, a, o);
}
function XI(n, e, t) {
  var r = qy(t);
  return r ?? (cs(e, r) && !cs(n, r));
}
function zd(n, e, t, r, i, o) {
  for (var s = Zn(n), l, a; (l = s.next()) && !l.done; )
    if (a = l.value, // eslint-disable-next-line no-use-before-define
    _e(t, a, i, o) && _e(r, ls(e, a), i, o))
      return Ky(n, a), !0;
  return !1;
}
function _e(n, e, t, r) {
  var i = t || {};
  if (i.strict ? xd(n, e) : n === e)
    return !0;
  var o = Nd(n), s = Nd(e);
  if (o !== s)
    return !1;
  if (!n || !e || typeof n != "object" && typeof e != "object")
    return i.strict ? xd(n, e) : n == e;
  var l = r.has(n), a = r.has(e), c;
  if (l && a) {
    if (r.get(n) === r.get(e))
      return !0;
  } else
    c = {};
  return l || r.set(n, c), a || r.set(e, c), eR(n, e, i, r);
}
function Fd(n) {
  return !n || typeof n != "object" || typeof n.length != "number" || typeof n.copy != "function" || typeof n.slice != "function" || n.length > 0 && typeof n[0] != "number" ? !1 : !!(n.constructor && n.constructor.isBuffer && n.constructor.isBuffer(n));
}
function QI(n, e, t, r) {
  if (qi(n) !== qi(e))
    return !1;
  for (var i = Zn(n), o = Zn(e), s, l, a; (s = i.next()) && !s.done; )
    if (s.value && typeof s.value == "object")
      a || (a = new ss()), as(a, s.value);
    else if (!cs(e, s.value)) {
      if (t.strict || !XI(n, e, s.value))
        return !1;
      a || (a = new ss()), as(a, s.value);
    }
  if (a) {
    for (; (l = o.next()) && !l.done; )
      if (l.value && typeof l.value == "object") {
        if (!Bd(a, l.value, t.strict, r))
          return !1;
      } else if (!t.strict && !cs(n, l.value) && !Bd(a, l.value, t.strict, r))
        return !1;
    return qi(a) === 0;
  }
  return !0;
}
function ZI(n, e, t, r) {
  if (Ld(n) !== Ld(e))
    return !1;
  for (var i = Zn(n), o = Zn(e), s, l, a, c, f, u; (s = i.next()) && !s.done; )
    if (c = s.value[0], f = s.value[1], c && typeof c == "object")
      a || (a = new ss()), as(a, c);
    else if (u = ls(e, c), typeof u > "u" && !Ua(e, c) || !_e(f, u, t, r)) {
      if (t.strict || !YI(n, e, c, f, t, r))
        return !1;
      a || (a = new ss()), as(a, c);
    }
  if (a) {
    for (; (l = o.next()) && !l.done; )
      if (c = l.value[0], u = l.value[1], c && typeof c == "object") {
        if (!zd(a, n, c, u, t, r))
          return !1;
      } else if (!t.strict && (!n.has(c) || !_e(ls(n, c), u, t, r)) && !zd(a, n, c, u, Gy({}, t, { strict: !1 }), r))
        return !1;
    return qi(a) === 0;
  }
  return !0;
}
function eR(n, e, t, r) {
  var i, o;
  if (typeof n != typeof e || n == null || e == null || _d(n) !== _d(e) || Cd(n) !== Cd(e))
    return !1;
  var s = kd(n), l = kd(e);
  if (s !== l)
    return !1;
  var a = n instanceof Error, c = e instanceof Error;
  if (a !== c || (a || c) && (n.name !== e.name || n.message !== e.message))
    return !1;
  var f = Od(n), u = Od(e);
  if (f !== u || (f || u) && (n.source !== e.source || vd(n) !== vd(e)))
    return !1;
  var h = Ad(n), d = Ad(e);
  if (h !== d || (h || d) && Pd(n) !== Pd(e) || t.strict && Rl && Rl(n) !== Rl(e))
    return !1;
  var p = Rd(n), g = Rd(e);
  if (p !== g)
    return !1;
  if (p || g) {
    if (n.length !== e.length)
      return !1;
    for (i = 0; i < n.length; i++)
      if (n[i] !== e[i])
        return !1;
    return !0;
  }
  var m = Fd(n), y = Fd(e);
  if (m !== y)
    return !1;
  if (m || y) {
    if (n.length !== e.length)
      return !1;
    for (i = 0; i < n.length; i++)
      if (n[i] !== e[i])
        return !1;
    return !0;
  }
  var v = Ed(n), k = Ed(e);
  if (v !== k)
    return !1;
  if (v || k)
    return Dd(n) !== Dd(e) ? !1 : typeof Uint8Array == "function" && _e(new Uint8Array(n), new Uint8Array(e), t, r);
  var A = Td(n), O = Td(e);
  if (A !== O)
    return !1;
  if (A || O)
    return $d(n) !== $d(e) ? !1 : typeof Uint8Array == "function" && _e(new Uint8Array(n), new Uint8Array(e), t, r);
  if (typeof n != typeof e)
    return !1;
  var x = Md(n), N = Md(e);
  if (x.length !== N.length)
    return !1;
  for (x.sort(), N.sort(), i = x.length - 1; i >= 0; i--)
    if (x[i] != N[i])
      return !1;
  for (i = x.length - 1; i >= 0; i--)
    if (o = x[i], !_e(n[o], e[o], t, r))
      return !1;
  var $ = Id(n), C = Id(e);
  return $ !== C ? !1 : $ === "Set" || C === "Set" ? QI(n, e, t, r) : $ === "Map" ? ZI(n, e, t, r) : !0;
}
var tR = function(e, t, r) {
  return _e(e, t, r, qI());
};
const rD = /* @__PURE__ */ hO(tR);
export {
  VR as $,
  dp as A,
  S as B,
  ER as C,
  OR as D,
  sR as E,
  b as F,
  Sr as G,
  lR as H,
  iR as I,
  np as J,
  re as K,
  er as L,
  BR as M,
  E as N,
  zR as O,
  bn as P,
  lA as Q,
  ee as R,
  T as S,
  vp as T,
  LR as U,
  mA as V,
  yA as W,
  FR as X,
  jR as Y,
  H as Z,
  ue as _,
  et as a,
  WR as a0,
  UR as a1,
  HR as a2,
  JR as a3,
  GR as a4,
  KR as a5,
  eD as a6,
  qR as a7,
  YR as a8,
  _c as a9,
  QR as aa,
  XR as ab,
  ZR as ac,
  zA as ad,
  V as ae,
  tD as af,
  nD as ag,
  IR as ah,
  NR as ai,
  RR as aj,
  DR as ak,
  $R as al,
  Pe as am,
  PR as an,
  VE as ao,
  vC as ap,
  _R as aq,
  Ge as ar,
  rD as as,
  SR as b,
  ri as c,
  R as d,
  aR as e,
  fp as f,
  wR as g,
  mR as h,
  cR as i,
  gR as j,
  dR as k,
  ni as l,
  gp as m,
  fR as n,
  uR as o,
  yR as p,
  vR as q,
  TR as r,
  bR as s,
  hR as t,
  pR as u,
  xR as v,
  kR as w,
  CR as x,
  AR as y,
  MR as z
};
