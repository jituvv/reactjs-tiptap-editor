import { AnyExtension } from '@tiptap/core';
import { BlockquoteOptions as BlockquoteOptions_2 } from '@tiptap/extension-blockquote';
import { BoldOptions as BoldOptions_2 } from '@tiptap/extension-bold';
import { BulletListOptions as BulletListOptions_2 } from '@tiptap/extension-bullet-list';
import { BundledLanguage } from 'shiki';
import { BundledTheme } from 'shiki';
import { CharacterCountOptions } from '@tiptap/extension-character-count';
import { CodeBlockOptions as CodeBlockOptions_2 } from '@tiptap/extension-code-block';
import { CodeOptions as CodeOptions_2 } from '@tiptap/extension-code';
import { ColorOptions as ColorOptions_2 } from '@tiptap/extension-color';
import { DropcursorOptions } from '@tiptap/extension-dropcursor';
import { Editor } from '@tiptap/react';
import { Editor as Editor_2 } from '@tiptap/core';
import { Extension } from '@tiptap/core';
import { FocusOptions as FocusOptions_2 } from '@tiptap/extension-focus';
import { FontFamilyOptions as FontFamilyOptions_2 } from '@tiptap/extension-font-family';
import { ForwardRefExoticComponent } from 'react';
import { HardBreakOptions } from '@tiptap/extension-hard-break';
import { HeadingOptions as HeadingOptions_2 } from '@tiptap/extension-heading';
import { HighlightOptions as HighlightOptions_2 } from '@tiptap/extension-highlight';
import { HistoryOptions as HistoryOptions_2 } from '@tiptap/extension-history';
import { HorizontalRuleOptions as HorizontalRuleOptions_2 } from '@tiptap/extension-horizontal-rule';
import { ImageOptions } from '@tiptap/extension-image';
import { ItalicOptions as ItalicOptions_2 } from '@tiptap/extension-italic';
import { LinkOptions as LinkOptions_2 } from '@tiptap/extension-link';
import { ListItemOptions } from '@tiptap/extension-list-item';
import { Mark } from '@tiptap/core';
import { MentionNodeAttrs } from '@tiptap/extension-mention';
import { MentionOptions } from '@tiptap/extension-mention';
import { Node as Node_2 } from '@tiptap/core';
import { OrderedListOptions as OrderedListOptions_2 } from '@tiptap/extension-ordered-list';
import { ParagraphOptions } from '@tiptap/extension-paragraph';
import { PlaceholderOptions } from '@tiptap/extension-placeholder';
import { RefAttributes } from 'react';
import { StrikeOptions as StrikeOptions_2 } from '@tiptap/extension-strike';
import { SubscriptExtensionOptions } from '@tiptap/extension-subscript';
import { SuperscriptExtensionOptions } from '@tiptap/extension-superscript';
import { TableCellOptions } from '@tiptap/extension-table-cell';
import { TableHeaderOptions } from '@tiptap/extension-table-header';
import { TableRowOptions } from '@tiptap/extension-table-row';
import { TaskItemOptions } from '@tiptap/extension-task-item';
import { TaskListOptions as TaskListOptions_2 } from '@tiptap/extension-task-list';
import { TextAlignOptions as TextAlignOptions_2 } from '@tiptap/extension-text-align';
import { TextStyleOptions } from '@tiptap/extension-text-style';
import { UnderlineOptions as UnderlineOptions_2 } from '@tiptap/extension-underline';
import { UseEditorOptions } from '@tiptap/react';

declare type Alignments = 'left' | 'center' | 'right' | 'justify';

export declare const Attachment: Node_2<AttachmentOptions, any>;

declare interface AttachmentOptions extends GeneralOptions<AttachmentOptions> {
    /** Function for uploading files */
    upload?: (file: File) => Promise<string>;
}

export declare const BaseKit: Extension<BaseKitOptions, any>;

/**
 * Represents the interface for options in the base toolkit.
 */
export declare interface BaseKitOptions {
    /**
     * Whether to enable the document option
     *
     * @default true
     */
    document: false;
    /**
     * Whether to enable the document option
     *
     * @default false
     */
    multiColumn?: boolean;
    /**
     * Whether to enable the text option
     *
     * @default true
     */
    text: false;
    /**
     * Whether to enable the Gapcursor
     *
     * @default true
     */
    gapcursor: false;
    /**
     * Dropcursor options or false, indicating whether to enable the drop cursor
     *
     * @default true
     */
    dropcursor: Partial<DropcursorOptions> | false;
    /**
     * character count options or false, indicating whether to enable character count
     *
     * @default true
     */
    characterCount: Partial<CharacterCountOptions> | false;
    /**
     * HardBreak options or false, indicating whether to enable hard breaks
     *
     * @default true
     */
    hardBreak: Partial<HardBreakOptions> | false;
    /**
     * Placeholder options or false, indicating whether to enable placeholders
     *
     * @default true
     */
    placeholder: Partial<PlaceholderOptions> | false;
    /**
     * Paragraph options or false, indicating whether to enable paragraph functionality
     *
     * @default true
     */
    paragraph: Partial<ParagraphOptions> | false;
    /**
     * Focus options or false, indicating whether to enable focus functionality
     *
     * @default true
     */
    focus: Partial<FocusOptions_2> | false;
    /**
     * ListItem options or false, indicating whether to enable list item functionality
     *
     * @default true
     */
    listItem: Partial<ListItemOptions> | false;
    /**
     * Text Style options or false, indicating whether to enable text style functionality
     *
     * @default true
     */
    textStyle: Partial<TextStyleOptions> | false;
    /**
     * Bubble options, taking `BubbleOptions<BaseKitOptions>` as parameters, indicating whether to enable the bubble functionality
     */
    bubble: any;
    /**
     * Iframe options or false, indicating whether to enable the iframe
     *
     * @default true
     */
    /**
     * Trailing node options or false, indicating whether to enable the trailing node
     *
     * @default true
     */
    trailingNode: Partial<TrailingNodeOptions> | false;
    /**
     * textBubble options or false, indicating whether to enable the textBubble
     *
     * @default true
     */
    textBubble: Partial<TextBubbleOptions> | false;
    /**
     * selection options or false, indicating whether to enable the selection
     *
     * @default true
     */
    selection: any | false;
}

export declare const Blockquote: Node_2<BlockquoteOptions, any>;

export declare interface BlockquoteOptions extends BlockquoteOptions_2, GeneralOptions<BlockquoteOptions> {
}

export declare const Bold: Mark<BoldOptions, any>;

export declare interface BoldOptions extends BoldOptions_2, GeneralOptions<BoldOptions> {
}

/**
 * Represents the BubbleMenuProps.
 */
declare interface BubbleMenuProps {
    columnConfig?: {
        /**
         * @description Column menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    tableConfig?: {
        /**
         * @description Table menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    floatingMenuConfig?: {
        /**
         * @description Floating menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    linkConfig?: {
        /**
         * @description Link menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    textConfig?: {
        /**
         * @description Text menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    imageConfig?: {
        /**
         * @description Image menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    imageGifConfig?: {
        /**
         * @description Image menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    videoConfig?: {
        /**
         * @description Video menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    katexConfig?: {
        /**
         * @description katex menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    excalidrawConfig?: {
        /**
         * @description excalidraw menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    iframeConfig?: {
        /**
         * @description iframe menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    mermaidConfig?: {
        /**
         * @description mermaid menu hidden
         * @default false
         */
        hidden?: boolean;
    };
    render?: (props: BubbleMenuRenderProps, dom: React.ReactNode) => React.ReactNode;
}

/**
 * Represents the BubbleMenuRenderProps.
 */
declare interface BubbleMenuRenderProps {
    editor: Editor;
    disabled: boolean;
    bubbleMenu: BubbleMenuProps;
}

export declare const BulletList: Node_2<BulletListOptions, any>;

export declare interface BulletListOptions extends BulletListOptions_2, GeneralOptions<BulletListOptions> {
}

/**
 * Represents the ButtonView function.
 */
declare interface ButtonView<T = any> {
    (options: ButtonViewParams<T>): ButtonViewReturn | ButtonViewReturn[];
}

/**
 * Represents the parameters for the ButtonView function.
 */
declare interface ButtonViewParams<T = any> {
    /** Editor object */
    editor: Editor;
    /** Extension object */
    extension: Extension<T>;
    /** Translation function */
    t: (path: string) => string;
}

/**
 * Represents the return value for the ButtonView component.
 */
declare interface ButtonViewReturn {
    /** Component */
    component: unknown;
    /** Component props */
    componentProps: ButtonViewReturnComponentProps;
    /** Component slots */
    componentSlots?: ButtonViewReturnComponentSlots;
}

/**
 * Represents the props for the ButtonView component.
 */
declare interface ButtonViewReturnComponentProps {
    /** Method triggered when action is performed */
    action?: (value?: any) => void;
    /** Whether it is in the active state */
    isActive?: () => boolean;
    /** Button icon */
    icon?: any;
    /** Text displayed on hover */
    tooltip?: string;
    [x: string]: any;
}

/**
 * Represents the slots for the ButtonView component.
 */
declare interface ButtonViewReturnComponentSlots {
    /** Dialog slot */
    dialog: () => any;
    [x: string]: () => any;
}

export declare const Clear: Node_2<ClearOptions, any>;

export declare interface ClearOptions extends GeneralOptions<ClearOptions> {
}

export declare const Code: Mark<CodeOptions, any>;

export declare const CodeBlock: Node_2<CodeBlockOptions, any>;

export declare interface CodeBlockOptions extends GeneralOptions<CodeBlockOptions_2> {
    languages?: BundledLanguage[];
    defaultTheme: BundledTheme;
}

export declare interface CodeOptions extends CodeOptions_2, GeneralOptions<CodeOptions> {
}

export declare const Color: Extension<ColorOptions, any>;

export declare interface ColorOptions extends ColorOptions_2, GeneralOptions<ColorOptions> {
    /**
     * An array of color options to display in the color picker
     */
    colors?: string[];
    /**
     * The default color to use when no color is selected
     */
    defaultColor?: string;
}

export declare const Column: Node_2<any, any>;

export declare const ColumnActionButton: Extension<any, any>;

declare const _default: ForwardRefExoticComponent<RichTextEditorProps & RefAttributes<    {
editor: Editor_2 | null;
}>>;
export default _default;

export declare const Emoji: Node_2<any, any>;

export declare const en: {
    "editor.remove": string;
    "editor.copy": string;
    "editor.words": string;
    "editor.characters": string;
    "editor.default": string;
    "editor.recent": string;
    "editor.nofill": string;
    "editor.format": string;
    "editor.delete": string;
    "editor.edit": string;
    "editor.settings": string;
    "editor.table_of_content": string;
    "editor.draghandle.tooltip": string;
    "editor.copyToClipboard": string;
    "editor.importWord.tooltip": string;
    "editor.slash": string;
    "editor.slash.empty": string;
    "editor.slash.format": string;
    "editor.slash.insert": string;
    "editor.slash.embed": string;
    "editor.content": string;
    "editor.fontFamily.tooltip": string;
    "editor.fontFamily.default.tooltip": string;
    "editor.moremark": string;
    "editor.size.small.tooltip": string;
    "editor.size.medium.tooltip": string;
    "editor.size.large.tooltip": string;
    "editor.bold.tooltip": string;
    "editor.italic.tooltip": string;
    "editor.underline.tooltip": string;
    "editor.strike.tooltip": string;
    "editor.color.tooltip": string;
    "editor.color.more": string;
    "editor.highlight.tooltip": string;
    "editor.lineheight.tooltip": string;
    "editor.heading.tooltip": string;
    "editor.heading.h1.tooltip": string;
    "editor.heading.h2.tooltip": string;
    "editor.heading.h3.tooltip": string;
    "editor.heading.h4.tooltip": string;
    "editor.heading.h5.tooltip": string;
    "editor.heading.h6.tooltip": string;
    "editor.paragraph.tooltip": string;
    "editor.textalign.tooltip": string;
    "editor.textalign.left.tooltip": string;
    "editor.textalign.center.tooltip": string;
    "editor.textalign.right.tooltip": string;
    "editor.textalign.justify.tooltip": string;
    "editor.indent": string;
    "editor.indent.indent": string;
    "editor.indent.outdent": string;
    "editor.fontSize.tooltip": string;
    "editor.fontSize.default.tooltip": string;
    "editor.superscript.tooltip": string;
    "editor.subscript.tooltip": string;
    "editor.bulletlist.tooltip": string;
    "editor.orderedlist.tooltip": string;
    "editor.tasklist.tooltip": string;
    "editor.indent.tooltip": string;
    "editor.outdent.tooltip": string;
    "editor.columns.tooltip": string;
    "editor.link.tooltip": string;
    "editor.link.unlink.tooltip": string;
    "editor.link.open.tooltip": string;
    "editor.link.edit.tooltip": string;
    "editor.link.dialog.title": string;
    "editor.link.dialog.link": string;
    "editor.link.dialog.text": string;
    "editor.link.dialog.openInNewTab": string;
    "editor.link.dialog.link.placeholder": string;
    "editor.link.dialog.text.placeholder": string;
    "editor.link.dialog.button.apply": string;
    "editor.image.tooltip": string;
    "editor.image.dragger.tooltip": string;
    "editor.image.float.left.tooltip": string;
    "editor.image.float.none.tooltip": string;
    "editor.image.float.right.tooltip": string;
    "editor.image.dialog.title": string;
    "editor.image.dialog.tab.url": string;
    "editor.image.dialog.tab.upload": string;
    "editor.image.dialog.tab.uploadCrop": string;
    "editor.image.dialog.uploading": string;
    "editor.link.dialog.inline": string;
    "editor.image.dialog.form.link": string;
    "editor.image.dialog.placeholder": string;
    "editor.image.dialog.form.alt": string;
    "editor.image.dialog.form.aspectRatio": string;
    "editor.image.dialog.form.file": string;
    "editor.image.dialog.button.apply": string;
    "editor.video.tooltip": string;
    "editor.video.dialog.tab.upload": string;
    "editor.video.dialog.uploading": string;
    "editor.video.dialog.title": string;
    "editor.video.dialog.link": string;
    "editor.video.dialog.placeholder": string;
    "editor.video.dialog.button.apply": string;
    "editor.table.tooltip": string;
    "editor.table.menu.insert_table": string;
    "editor.table.menu.insert_table.with_header_row": string;
    "editor.table.menu.add_column_before": string;
    "editor.table.menu.add_column_after": string;
    "editor.table.menu.delete_column": string;
    "editor.table.menu.add_row_before": string;
    "editor.table.menu.add_row_after": string;
    "editor.table.menu.delete_row": string;
    "editor.table.menu.merge_or_split_cells": string;
    "editor.table.menu.delete_table": string;
    "editor.blockquote.tooltip": string;
    "editor.horizontalrule.tooltip": string;
    "editor.code.tooltip": string;
    "editor.codeblock.tooltip": string;
    "editor.clear.tooltip": string;
    "editor.undo.tooltip": string;
    "editor.redo.tooltip": string;
    "editor.fullscreen.tooltip.fullscreen": string;
    "editor.fullscreen.tooltip.exit": string;
    "editor.imageUpload.cancel": string;
    "editor.imageUpload.crop": string;
    "editor.imageUpload.fileTypeNotSupported": string;
    "editor.imageUpload.fileSizeTooBig": string;
    "editor.table.menu.insertColumnBefore": string;
    "editor.table.menu.insertColumnAfter": string;
    "editor.table.menu.deleteColumn": string;
    "editor.table.menu.insertRowAbove": string;
    "editor.table.menu.insertRowBelow": string;
    "editor.table.menu.deleteRow": string;
    "editor.table.menu.mergeCells": string;
    "editor.table.menu.splitCells": string;
    "editor.table.menu.deleteTable": string;
    "editor.table.menu.setCellsBgColor": string;
    "editor.emoji.tooltip": string;
    "editor.iframe.tooltip": string;
    "editor.searchAndReplace.tooltip": string;
    "editor.search.dialog.text": string;
    "editor.replace.dialog.text": string;
    "editor.replaceAll.dialog.text": string;
    "editor.previous.dialog.text": string;
    "editor.next.dialog.text": string;
    no_result_found: string;
    "Smileys & People": string;
    "Animals & Nature": string;
    "Food & Drink": string;
    Activity: string;
    "Travel & Places": string;
    Object: string;
    Symbol: string;
    Flags: string;
    "Frequently used": string;
    "editor.formula.dialog.text": string;
    "editor.katex.tooltip": string;
    "editor.exportPdf.tooltip": string;
    "editor.exportWord.tooltip": string;
    "editor.importWrod.tooltip": string;
    "editor.textDirection.tooltip": string;
    "editor.textDirection.auto.tooltip": string;
    "editor.textDirection.ltr.tooltip": string;
    "editor.textDirection.rtl.tooltip": string;
    "editor.attachment.tooltip": string;
    "editor.attachment.uploading": string;
    "editor.attachment.please_upload": string;
    "editor.imageGif.tooltip": string;
    "editor.replace.caseSensitive": string;
    "editor.mermaid.tooltip": string;
};

export declare const Excalidraw: Node_2<any, any>;

export declare const ExportPdf: Extension<any, any>;

export declare const ExportWord: Extension<ExportWordOptions, any>;

declare interface ExportWordOptions extends GeneralOptions<ExportWordOptions> {
}

export declare const FontFamily: Extension<FontFamilyOptions, any>;

declare interface FontFamilyOptions extends FontFamilyOptions_2, GeneralOptions<FontFamilyOptions> {
    /**
     * Font family list.
     */
    fontFamilyList: (string | NameValueOption)[];
}

export declare const FontSize: Extension<FontSizeOptions, any>;

/**
 * Represents the interface for font size options, extending GeneralOptions.
 */
export declare interface FontSizeOptions extends GeneralOptions<FontSizeOptions> {
    types: string[];
    /**
     * List of available font size values
     *
     * @default DEFAULT_FONT_SIZE_LIST
     */
    fontSizes: (string | NameValueOption)[];
}

/**
 * 格式刷
 */
export declare const FormatPainter: Extension<FormatPainterOptions, any>;

/**
 * Represents the interface for font size options, extending GeneralOptions.
 */
export declare interface FormatPainterOptions extends GeneralOptions<FormatPainterOptions> {
}

/**
 * Represents the general options for Tiptap extensions.
 */
declare interface GeneralOptions<T> {
    /** Enabled divider */
    divider: boolean;
    /** Enabled spacer */
    spacer: boolean;
    /** Button view function */
    button: ButtonView<T>;
    /** Show on Toolbar */
    toolbar?: boolean;
}

export declare const Heading: Node_2<HeadingOptions, any>;

export declare interface HeadingOptions extends HeadingOptions_2, GeneralOptions<HeadingOptions> {
}

export declare const Highlight: Mark<HighlightOptions, any>;

export declare interface HighlightOptions extends HighlightOptions_2, GeneralOptions<HighlightOptions> {
}

declare const History_2: Extension<HistoryOptions, any>;
export { History_2 as History }

export declare interface HistoryOptions extends HistoryOptions_2, GeneralOptions<HistoryOptions> {
}

export declare const HorizontalRule: Node_2<HorizontalRuleOptions, any>;

export declare interface HorizontalRuleOptions extends HorizontalRuleOptions_2, GeneralOptions<HorizontalRuleOptions> {
}

export declare const Iframe: Node_2<any, any>;

declare interface IImageOptions extends GeneralOptions<IImageOptions> {
    /** Function for uploading files */
    upload?: (file: File) => Promise<string>;
    HTMLAttributes?: any;
}

declare interface IKatexOptions {
    HTMLAttributes: Record<string, any>;
}

declare const Image_2: Node_2<IImageOptions, any>;
export { Image_2 as Image }

export declare const ImageGif: Node_2<ImageGifOptions, any>;

declare interface ImageGifOptions extends ImageOptions {
    /**
     * The key for the gif https://giphy.com/
     */
    GIPHY_API_KEY: string;
}

export declare const ImportWord: Extension<ImportWordOptions, any>;

declare interface ImportWordOptions extends GeneralOptions<ImportWordOptions> {
    /**
     * 将word 转换成html的接口
     */
    convert?: (file: File) => Promise<string>;
    /** Function for uploading images */
    upload?: (files: File[]) => Promise<unknown>;
}

export declare const Indent: Extension<IndentOptions, any>;

export declare interface IndentOptions extends GeneralOptions<IndentOptions> {
    types: string[];
    minIndent: number;
    maxIndent: number;
}

export declare const Italic: Mark<ItalicOptions, any>;

export declare interface ItalicOptions extends ItalicOptions_2, GeneralOptions<ItalicOptions> {
}

export declare const Katex: Node_2<IKatexOptions, any>;

declare type LanguageType = 'en' | 'vi' | 'zh_CN' | 'pt_BR' | (string & {});

export declare const LineHeight: Extension<LineHeightOptions, any>;

export declare interface LineHeightOptions extends GeneralOptions<LineHeightOptions> {
    types: string[];
    lineHeights: string[];
    defaultHeight: string;
}

export declare const Link: Mark<LinkOptions, any>;

export declare interface LinkOptions extends LinkOptions_2, GeneralOptions<LinkOptions> {
}

declare class Locale {
    private emitter;
    constructor();
    get lang(): LanguageType;
    set lang(lang: LanguageType);
    get message(): Record<LanguageType, Record<MessageKeysType, string>>;
    set message(message: Record<LanguageType, Record<MessageKeysType, string>>);
    loadLangMessage(lang: LanguageType): Record<MessageKeysType, string>;
    private isLangSupported;
    setLang(lang: LanguageType): void;
    registerWatchLang(hook: (lang: LanguageType) => void): {
        unsubscribe: () => void;
    };
    setMessage(lang: string, message: Record<MessageKeysType, string>): void;
    buildLocalesHandler(lang?: LanguageType): (path: MessageKeysType) => string;
}

export declare const locale: Locale;

export declare const Mention: Node_2<MentionOptions<any, MentionNodeAttrs>, any>;

export declare const Mermaid: Node_2<MermaidOptions, any>;

declare interface MermaidOptions extends GeneralOptions<MermaidOptions> {
    /** Function for uploading files */
    upload?: (file: File) => Promise<string>;
}

declare type MessageKeysType = keyof typeof en;

export declare const MoreMark: Extension<MoreMarkOptions, any>;

export declare interface MoreMarkOptions extends GeneralOptions<MoreMarkOptions> {
    /**
     * // 下标
     *
     * @default true
     */
    subscript: Partial<SubscriptExtensionOptions> | false;
    /**
     * // 上标
     *
     * @default true
     */
    superscript: Partial<SuperscriptExtensionOptions> | false;
}

export declare const MultiColumn: Node_2<any, any>;

declare interface NameValueOption<T = string> {
    name: string;
    value: T;
}

declare interface Options {
    onHasOneBeforeInsert?: () => void;
}

export declare const OrderedList: Node_2<OrderedListOptions, any>;

export declare interface OrderedListOptions extends OrderedListOptions_2, GeneralOptions<OrderedListOptions> {
}

export declare const pt_BR: {
    'editor.remove': string;
    'editor.copy': string;
    'editor.words': string;
    'editor.characters': string;
    'editor.default': string;
    'editor.recent': string;
    'editor.nofill': string;
    'editor.format': string;
    'editor.delete': string;
    'editor.edit': string;
    'editor.settings': string;
    'editor.table_of_content': string;
    'editor.draghandle.tooltip': string;
    'editor.copyToClipboard': string;
    'editor.importWord.tooltip': string;
    'editor.slash': string;
    'editor.slash.empty': string;
    'editor.slash.format': string;
    'editor.slash.insert': string;
    'editor.slash.embed': string;
    'editor.content': string;
    'editor.fontFamily.tooltip': string;
    'editor.fontFamily.default.tooltip': string;
    'editor.moremark': string;
    'editor.size.small.tooltip': string;
    'editor.size.medium.tooltip': string;
    'editor.size.large.tooltip': string;
    'editor.bold.tooltip': string;
    'editor.italic.tooltip': string;
    'editor.underline.tooltip': string;
    'editor.strike.tooltip': string;
    'editor.color.tooltip': string;
    'editor.color.more': string;
    'editor.highlight.tooltip': string;
    'editor.lineheight.tooltip': string;
    'editor.heading.tooltip': string;
    'editor.heading.h1.tooltip': string;
    'editor.heading.h2.tooltip': string;
    'editor.heading.h3.tooltip': string;
    'editor.heading.h4.tooltip': string;
    'editor.heading.h5.tooltip': string;
    'editor.heading.h6.tooltip': string;
    'editor.paragraph.tooltip': string;
    'editor.textalign.tooltip': string;
    'editor.textalign.left.tooltip': string;
    'editor.textalign.center.tooltip': string;
    'editor.textalign.right.tooltip': string;
    'editor.textalign.justify.tooltip': string;
    'editor.indent': string;
    'editor.indent.indent': string;
    'editor.indent.outdent': string;
    'editor.fontSize.tooltip': string;
    'editor.fontSize.default.tooltip': string;
    'editor.superscript.tooltip': string;
    'editor.subscript.tooltip': string;
    'editor.bulletlist.tooltip': string;
    'editor.orderedlist.tooltip': string;
    'editor.tasklist.tooltip': string;
    'editor.indent.tooltip': string;
    'editor.outdent.tooltip': string;
    'editor.columns.tooltip': string;
    'editor.link.tooltip': string;
    'editor.link.unlink.tooltip': string;
    'editor.link.open.tooltip': string;
    'editor.link.edit.tooltip': string;
    'editor.link.dialog.title': string;
    'editor.link.dialog.link': string;
    'editor.link.dialog.text': string;
    'editor.link.dialog.openInNewTab': string;
    'editor.link.dialog.link.placeholder': string;
    'editor.link.dialog.text.placeholder': string;
    'editor.link.dialog.button.apply': string;
    'editor.image.tooltip': string;
    'editor.image.dragger.tooltip': string;
    'editor.image.float.left.tooltip': string;
    'editor.image.float.none.tooltip': string;
    'editor.image.float.right.tooltip': string;
    'editor.image.dialog.title': string;
    'editor.image.dialog.tab.url': string;
    'editor.image.dialog.tab.upload': string;
    'editor.link.dialog.inline': string;
    'editor.image.dialog.tab.uploadCrop': string;
    'editor.image.dialog.uploading': string;
    'editor.image.dialog.form.link': string;
    'editor.image.dialog.placeholder': string;
    'editor.image.dialog.form.alt': string;
    'editor.image.dialog.form.aspectRatio': string;
    'editor.image.dialog.form.file': string;
    'editor.image.dialog.button.apply': string;
    'editor.video.tooltip': string;
    'editor.video.dialog.tab.upload': string;
    'editor.video.dialog.uploading': string;
    'editor.video.dialog.title': string;
    'editor.video.dialog.link': string;
    'editor.video.dialog.placeholder': string;
    'editor.video.dialog.button.apply': string;
    'editor.table.tooltip': string;
    'editor.table.menu.insert_table': string;
    'editor.table.menu.insert_table.with_header_row': string;
    'editor.table.menu.add_column_before': string;
    'editor.table.menu.add_column_after': string;
    'editor.table.menu.delete_column': string;
    'editor.table.menu.add_row_before': string;
    'editor.table.menu.add_row_after': string;
    'editor.table.menu.delete_row': string;
    'editor.table.menu.merge_or_split_cells': string;
    'editor.table.menu.delete_table': string;
    'editor.blockquote.tooltip': string;
    'editor.horizontalrule.tooltip': string;
    'editor.code.tooltip': string;
    'editor.codeblock.tooltip': string;
    'editor.clear.tooltip': string;
    'editor.undo.tooltip': string;
    'editor.redo.tooltip': string;
    'editor.fullscreen.tooltip.fullscreen': string;
    'editor.fullscreen.tooltip.exit': string;
    'editor.imageUpload.cancel': string;
    'editor.imageUpload.crop': string;
    'editor.imageUpload.fileTypeNotSupported': string;
    'editor.imageUpload.fileSizeTooBig': string;
    'editor.table.menu.insertColumnBefore': string;
    'editor.table.menu.insertColumnAfter': string;
    'editor.table.menu.deleteColumn': string;
    'editor.table.menu.insertRowAbove': string;
    'editor.table.menu.insertRowBelow': string;
    'editor.table.menu.deleteRow': string;
    'editor.table.menu.mergeCells': string;
    'editor.table.menu.splitCells': string;
    'editor.table.menu.deleteTable': string;
    'editor.table.menu.setCellsBgColor': string;
    'editor.emoji.tooltip': string;
    'editor.iframe.tooltip': string;
    'editor.searchAndReplace.tooltip': string;
    'editor.search.dialog.text': string;
    'editor.replace.dialog.text': string;
    'editor.replaceAll.dialog.text': string;
    'editor.previous.dialog.text': string;
    'editor.next.dialog.text': string;
    no_result_found: string;
    'Smileys & People': string;
    'Animals & Nature': string;
    'Food & Drink': string;
    Activity: string;
    'Travel & Places': string;
    Object: string;
    Symbol: string;
    Flags: string;
    'Frequently used': string;
    'editor.formula.dialog.text': string;
    'editor.katex.tooltip': string;
    'editor.exportPdf.tooltip': string;
    'editor.exportWord.tooltip': string;
    'editor.importWrod.tooltip': string;
    'editor.textDirection.tooltip': string;
    'editor.textDirection.auto.tooltip': string;
    'editor.textDirection.ltr.tooltip': string;
    'editor.textDirection.rtl.tooltip': string;
    'editor.attachment.tooltip': string;
    'editor.attachment.uploading': string;
    'editor.attachment.please_upload': string;
    'editor.imageGif.tooltip': string;
    'editor.replace.caseSensitive': string;
    'editor.mermaid.tooltip': string;
};

declare interface Result {
    from: number;
    to: number;
}

/**
 * Interface for RichTextEditor component props
 */
declare interface RichTextEditorProps {
    /** Content of the editor */
    content: string;
    /** Extensions for the editor */
    extensions: AnyExtension[];
    /** Output format */
    output: "html" | "json" | "text";
    /** Model value */
    modelValue?: string | object;
    /** Dark mode flag */
    dark?: boolean;
    /** Dense mode flag */
    dense?: boolean;
    /** Disabled flag */
    disabled?: boolean;
    /** Label for the editor */
    label?: string;
    /** Hide toolbar flag */
    hideToolbar?: boolean;
    /** Disable bubble menu flag */
    disableBubble?: boolean;
    /** Hide bubble menu flag */
    hideBubble?: boolean;
    /** Remove default wrapper flag */
    removeDefaultWrapper?: boolean;
    /** Maximum width */
    maxWidth?: string | number;
    /** Minimum height */
    minHeight?: string | number;
    /** Maximum height */
    maxHeight?: string | number;
    /** Content class */
    contentClass?: string | string[] | Record<string, any>;
    /** Content change callback */
    onChangeContent?: (val: any) => void;
    /** Bubble menu props */
    bubbleMenu?: BubbleMenuProps;
    /** Use editor options */
    useEditorOptions?: UseEditorOptions;
    /** Use editor options */
    resetCSS?: boolean;
}

export declare const SearchAndReplace: Extension<SearchOptions, SearchStorage>;

declare interface SearchOptions extends GeneralOptions<SearchOptions> {
    searchTerm: string;
    replaceTerm: string;
    searchResultClass: string;
    searchResultCurrentClass: string;
    caseSensitive: boolean;
    disableRegex: boolean;
    onChange?: () => void;
}

declare interface SearchStorage {
    results: Result[];
    currentIndex: number;
}

export declare interface SetImageAttrsOptions {
    src?: string;
    /** The alternative text for the image. */
    alt?: string;
    /** The caption of the image. */
    caption?: string;
    /** The width of the image. */
    width?: number | string | null;
    /** The alignment of the image. */
    align?: 'left' | 'center' | 'right';
    inline?: boolean;
}

export declare const SlashCommand: Extension<any, any>;

export declare const Strike: Mark<StrikeOptions, any>;

export declare interface StrikeOptions extends StrikeOptions_2, GeneralOptions<StrikeOptions> {
}

export declare const SubAndSuperScript: Extension<SubAndSuperScriptOptions, any>;

/**
 * Represents the interface for subscript and superscript options, extending GeneralOptions.
 */
export declare interface SubAndSuperScriptOptions extends GeneralOptions<SubAndSuperScriptOptions> {
    /**
     * subscript options or false, indicating whether subscript is enabled
     *
     * @default true
     */
    subscript: Partial<SubscriptExtensionOptions> | false;
    /**
     * superscript options or false, indicating whether superscript is enabled
     *
     * @default true
     */
    superscript: Partial<SuperscriptExtensionOptions> | false;
}

export declare const Table: Node_2<TableOptions, any>;

declare interface TableCellBackgroundOptions {
    HTMLAttributes: Record<string, any>;
    types?: any;
}

export declare const TableOfContents: Node_2<Options, any>;

export declare interface TableOptions extends GeneralOptions<TableOptions> {
    HTMLAttributes: Record<string, any>;
    resizable: boolean;
    handleWidth: number;
    cellMinWidth: number;
    lastColumnResizable: boolean;
    allowTableNodeSelection: boolean;
    /** options for table rows */
    tableRow: Partial<TableRowOptions>;
    /** options for table headers */
    tableHeader: Partial<TableHeaderOptions>;
    /** options for table cells */
    tableCell: Partial<TableCellOptions>;
    /** options for table cell background */
    tableCellBackground: Partial<TableCellBackgroundOptions>;
}

export declare const TaskList: Node_2<TaskListOptions, any>;

/**
 * Represents the interface for task list options, extending TiptapTaskListOptions and GeneralOptions.
 */
export declare interface TaskListOptions extends TaskListOptions_2, GeneralOptions<TaskListOptions> {
    /** options for task items */
    taskItem: Partial<TaskItemOptions>;
}

export declare const TextAlign: Extension<TextAlignOptions, any>;

/**
 * Represents the interface for text align options, extending TiptapTextAlignOptions and GeneralOptions.
 */
export declare interface TextAlignOptions extends TextAlignOptions_2, GeneralOptions<TextAlignOptions> {
    /**
     * List of available alignment options
     *
     * @default ['left', 'center', 'right', 'justify']
     */
    alignments: Alignments[];
}

declare interface TextBubbleOptions extends GeneralOptions<TextBubbleOptions> {
}

export declare const TextDirection: Extension<any, any>;

/**
 * Extension based on:
 * - https://github.com/ueberdosis/tiptap/blob/v1/packages/tiptap-extensions/src/extensions/TrailingNode.js
 * - https://github.com/remirror/remirror/blob/e0f1bec4a1e8073ce8f5500d62193e52321155b9/packages/prosemirror-trailing-node/src/trailing-node-plugin.ts
 */
declare interface TrailingNodeOptions {
    node: string;
    notAfter: string[];
}

export declare const Underline: Mark<UnderlineOptions, any>;

export declare interface UnderlineOptions extends UnderlineOptions_2, GeneralOptions<UnderlineOptions> {
}

export declare const vi: {
    'editor.remove': string;
    'editor.copy': string;
    'editor.words': string;
    'editor.characters': string;
    'editor.default': string;
    'editor.recent': string;
    'editor.nofill': string;
    'editor.format': string;
    'editor.delete': string;
    'editor.edit': string;
    'editor.settings': string;
    'editor.table_of_content': string;
    'editor.draghandle.tooltip': string;
    'editor.copyToClipboard': string;
    'editor.importWord.tooltip': string;
    'editor.slash': string;
    'editor.slash.empty': string;
    'editor.slash.format': string;
    'editor.slash.insert': string;
    'editor.slash.embed': string;
    'editor.content': string;
    'editor.moremark': string;
    'editor.size.small.tooltip': string;
    'editor.fontFamily.tooltip': string;
    'editor.fontFamily.default.tooltip': string;
    'editor.size.medium.tooltip': string;
    'editor.size.large.tooltip': string;
    'editor.bold.tooltip': string;
    'editor.italic.tooltip': string;
    'editor.underline.tooltip': string;
    'editor.strike.tooltip': string;
    'editor.color.tooltip': string;
    'editor.color.more': string;
    'editor.highlight.tooltip': string;
    'editor.lineheight.tooltip': string;
    'editor.heading.tooltip': string;
    'editor.heading.h1.tooltip': string;
    'editor.heading.h2.tooltip': string;
    'editor.heading.h3.tooltip': string;
    'editor.heading.h4.tooltip': string;
    'editor.heading.h5.tooltip': string;
    'editor.heading.h6.tooltip': string;
    'editor.paragraph.tooltip': string;
    'editor.textalign.tooltip': string;
    'editor.textalign.left.tooltip': string;
    'editor.textalign.center.tooltip': string;
    'editor.textalign.right.tooltip': string;
    'editor.textalign.justify.tooltip': string;
    'editor.indent': string;
    'editor.indent.indent': string;
    'editor.indent.outdent': string;
    'editor.fontSize.tooltip': string;
    'editor.fontSize.default.tooltip': string;
    'editor.superscript.tooltip': string;
    'editor.subscript.tooltip': string;
    'editor.bulletlist.tooltip': string;
    'editor.orderedlist.tooltip': string;
    'editor.tasklist.tooltip': string;
    'editor.indent.tooltip': string;
    'editor.outdent.tooltip': string;
    'editor.columns.tooltip': string;
    'editor.link.tooltip': string;
    'editor.link.unlink.tooltip': string;
    'editor.link.open.tooltip': string;
    'editor.link.edit.tooltip': string;
    'editor.link.dialog.title': string;
    'editor.link.dialog.link': string;
    'editor.link.dialog.text': string;
    'editor.link.dialog.openInNewTab': string;
    'editor.link.dialog.link.placeholder': string;
    'editor.link.dialog.text.placeholder': string;
    'editor.link.dialog.button.apply': string;
    'editor.image.tooltip': string;
    'editor.image.dragger.tooltip': string;
    'editor.image.float.left.tooltip': string;
    'editor.image.float.none.tooltip': string;
    'editor.image.float.right.tooltip': string;
    'editor.image.dialog.title': string;
    'editor.image.dialog.tab.url': string;
    'editor.image.dialog.tab.upload': string;
    'editor.link.dialog.inline': string;
    'editor.image.dialog.tab.uploadCrop': string;
    'editor.image.dialog.uploading': string;
    'editor.image.dialog.form.link': string;
    'editor.image.dialog.placeholder': string;
    'editor.image.dialog.form.alt': string;
    'editor.image.dialog.form.aspectRatio': string;
    'editor.image.dialog.form.file': string;
    'editor.image.dialog.button.apply': string;
    'editor.video.tooltip': string;
    'editor.video.dialog.tab.upload': string;
    'editor.video.dialog.uploading': string;
    'editor.video.dialog.title': string;
    'editor.video.dialog.link': string;
    'editor.video.dialog.placeholder': string;
    'editor.video.dialog.button.apply': string;
    'editor.table.tooltip': string;
    'editor.table.menu.insert_table': string;
    'editor.table.menu.insert_table.with_header_row': string;
    'editor.table.menu.add_column_before': string;
    'editor.table.menu.add_column_after': string;
    'editor.table.menu.delete_column': string;
    'editor.table.menu.add_row_before': string;
    'editor.table.menu.add_row_after': string;
    'editor.table.menu.delete_row': string;
    'editor.table.menu.merge_or_split_cells': string;
    'editor.table.menu.delete_table': string;
    'editor.blockquote.tooltip': string;
    'editor.horizontalrule.tooltip': string;
    'editor.code.tooltip': string;
    'editor.codeblock.tooltip': string;
    'editor.clear.tooltip': string;
    'editor.undo.tooltip': string;
    'editor.redo.tooltip': string;
    'editor.fullscreen.tooltip.fullscreen': string;
    'editor.fullscreen.tooltip.exit': string;
    'editor.imageUpload.cancel': string;
    'editor.imageUpload.crop': string;
    'editor.imageUpload.fileTypeNotSupported': string;
    'editor.imageUpload.fileSizeTooBig': string;
    'editor.table.menu.insertColumnBefore': string;
    'editor.table.menu.insertColumnAfter': string;
    'editor.table.menu.deleteColumn': string;
    'editor.table.menu.insertRowAbove': string;
    'editor.table.menu.insertRowBelow': string;
    'editor.table.menu.deleteRow': string;
    'editor.table.menu.mergeCells': string;
    'editor.table.menu.splitCells': string;
    'editor.table.menu.deleteTable': string;
    'editor.table.menu.setCellsBgColor': string;
    'editor.emoji.tooltip': string;
    'editor.iframe.tooltip': string;
    'editor.searchAndReplace.tooltip': string;
    'editor.search.dialog.text': string;
    'editor.replace.dialog.text': string;
    'editor.replaceAll.dialog.text': string;
    'editor.previous.dialog.text': string;
    'editor.next.dialog.text': string;
    no_result_found: string;
    'Smileys & People': string;
    'Animals & Nature': string;
    'Food & Drink': string;
    Activity: string;
    'Travel & Places': string;
    Object: string;
    Symbol: string;
    Flags: string;
    'Frequently used': string;
    'editor.formula.dialog.text': string;
    'editor.katex.tooltip': string;
    'editor.exportPdf.tooltip': string;
    'editor.exportWord.tooltip': string;
    'editor.importWrod.tooltip': string;
    'editor.textDirection.tooltip': string;
    'editor.textDirection.auto.tooltip': string;
    'editor.textDirection.ltr.tooltip': string;
    'editor.textDirection.rtl.tooltip': string;
    'editor.attachment.tooltip': string;
    'editor.attachment.uploading': string;
    'editor.attachment.please_upload': string;
    'editor.imageGif.tooltip': string;
    'editor.replace.caseSensitive': string;
    'editor.mermaid.tooltip': string;
};

export declare const Video: Node_2<VideoOptions, any>;

/**
 * Represents the interface for video options, extending GeneralOptions.
 */
export declare interface VideoOptions extends GeneralOptions<VideoOptions> {
    /**
     * Indicates whether fullscreen play is allowed
     *
     * @default true
     */
    allowFullscreen: boolean;
    /**
     * Indicates whether to display the frameborder
     *
     * @default false
     */
    frameborder: boolean;
    /**
     * Width of the video, can be a number or string
     *
     * @default VIDEO_SIZE['size-medium']
     */
    width: number | string;
    /** HTML attributes object for passing additional attributes */
    HTMLAttributes: {
        [key: string]: any;
    };
    /** Function for uploading files */
    upload?: (file: File) => Promise<string>;
}

export declare const zh_CN: {
    'editor.remove': string;
    'editor.copy': string;
    'editor.words': string;
    'editor.characters': string;
    'editor.default': string;
    'editor.recent': string;
    'editor.nofill': string;
    'editor.format': string;
    'editor.delete': string;
    'editor.edit': string;
    'editor.settings': string;
    'editor.table_of_content': string;
    'editor.draghandle.tooltip': string;
    'editor.copyToClipboard': string;
    'editor.importWord.tooltip': string;
    'editor.slash': string;
    'editor.slash.empty': string;
    'editor.slash.format': string;
    'editor.slash.insert': string;
    'editor.slash.embed': string;
    'editor.content': string;
    'editor.fontFamily.tooltip': string;
    'editor.fontFamily.default.tooltip': string;
    'editor.moremark': string;
    'editor.size.small.tooltip': string;
    'editor.size.medium.tooltip': string;
    'editor.size.large.tooltip': string;
    'editor.bold.tooltip': string;
    'editor.italic.tooltip': string;
    'editor.underline.tooltip': string;
    'editor.strike.tooltip': string;
    'editor.color.tooltip': string;
    'editor.color.more': string;
    'editor.highlight.tooltip': string;
    'editor.lineheight.tooltip': string;
    'editor.heading.tooltip': string;
    'editor.heading.h1.tooltip': string;
    'editor.heading.h2.tooltip': string;
    'editor.heading.h3.tooltip': string;
    'editor.heading.h4.tooltip': string;
    'editor.heading.h5.tooltip': string;
    'editor.heading.h6.tooltip': string;
    'editor.paragraph.tooltip': string;
    'editor.textalign.tooltip': string;
    'editor.textalign.left.tooltip': string;
    'editor.textalign.center.tooltip': string;
    'editor.textalign.right.tooltip': string;
    'editor.textalign.justify.tooltip': string;
    'editor.indent': string;
    'editor.indent.indent': string;
    'editor.indent.outdent': string;
    'editor.fontSize.tooltip': string;
    'editor.fontSize.default.tooltip': string;
    'editor.superscript.tooltip': string;
    'editor.subscript.tooltip': string;
    'editor.bulletlist.tooltip': string;
    'editor.orderedlist.tooltip': string;
    'editor.tasklist.tooltip': string;
    'editor.indent.tooltip': string;
    'editor.outdent.tooltip': string;
    'editor.columns.tooltip': string;
    'editor.link.tooltip': string;
    'editor.link.unlink.tooltip': string;
    'editor.link.open.tooltip': string;
    'editor.link.edit.tooltip': string;
    'editor.link.dialog.title': string;
    'editor.link.dialog.link': string;
    'editor.link.dialog.text': string;
    'editor.link.dialog.openInNewTab': string;
    'editor.link.dialog.link.placeholder': string;
    'editor.link.dialog.text.placeholder': string;
    'editor.link.dialog.button.apply': string;
    'editor.image.tooltip': string;
    'editor.image.dragger.tooltip': string;
    'editor.image.float.left.tooltip': string;
    'editor.image.float.none.tooltip': string;
    'editor.image.float.right.tooltip': string;
    'editor.image.dialog.title': string;
    'editor.image.dialog.tab.url': string;
    'editor.image.dialog.tab.upload': string;
    'editor.link.dialog.inline': string;
    'editor.image.dialog.uploading': string;
    'editor.image.dialog.form.link': string;
    'editor.image.dialog.placeholder': string;
    'editor.image.dialog.form.alt': string;
    'editor.image.dialog.form.aspectRatio': string;
    'editor.image.dialog.form.file': string;
    'editor.image.dialog.button.apply': string;
    'editor.video.tooltip': string;
    'editor.video.dialog.tab.upload': string;
    'editor.image.dialog.tab.uploadCrop': string;
    'editor.video.dialog.uploading': string;
    'editor.video.dialog.title': string;
    'editor.video.dialog.link': string;
    'editor.video.dialog.placeholder': string;
    'editor.video.dialog.button.apply': string;
    'editor.table.tooltip': string;
    'editor.table.menu.insert_table': string;
    'editor.table.menu.insert_table.with_header_row': string;
    'editor.table.menu.add_column_before': string;
    'editor.table.menu.add_column_after': string;
    'editor.table.menu.delete_column': string;
    'editor.table.menu.add_row_before': string;
    'editor.table.menu.add_row_after': string;
    'editor.table.menu.delete_row': string;
    'editor.table.menu.merge_or_split_cells': string;
    'editor.table.menu.delete_table': string;
    'editor.blockquote.tooltip': string;
    'editor.horizontalrule.tooltip': string;
    'editor.code.tooltip': string;
    'editor.codeblock.tooltip': string;
    'editor.clear.tooltip': string;
    'editor.undo.tooltip': string;
    'editor.redo.tooltip': string;
    'editor.fullscreen.tooltip.fullscreen': string;
    'editor.fullscreen.tooltip.exit': string;
    'editor.imageUpload.cancel': string;
    'editor.imageUpload.crop': string;
    'editor.imageUpload.fileTypeNotSupported': string;
    'editor.imageUpload.fileSizeTooBig': string;
    'editor.table.menu.insertColumnBefore': string;
    'editor.table.menu.insertColumnAfter': string;
    'editor.table.menu.deleteColumn': string;
    'editor.table.menu.insertRowAbove': string;
    'editor.table.menu.insertRowBelow': string;
    'editor.table.menu.deleteRow': string;
    'editor.table.menu.mergeCells': string;
    'editor.table.menu.splitCells': string;
    'editor.table.menu.deleteTable': string;
    'editor.table.menu.setCellsBgColor': string;
    'editor.emoji.tooltip': string;
    'editor.iframe.tooltip': string;
    'editor.searchAndReplace.tooltip': string;
    'editor.search.dialog.text': string;
    'editor.replace.dialog.text': string;
    'editor.replaceAll.dialog.text': string;
    'editor.previous.dialog.text': string;
    'editor.next.dialog.text': string;
    no_result_found: string;
    'Smileys & People': string;
    'Animals & Nature': string;
    'Food & Drink': string;
    Activity: string;
    'Travel & Places': string;
    Object: string;
    Symbol: string;
    Flags: string;
    'Frequently used': string;
    'editor.formula.dialog.text': string;
    'editor.katex.tooltip': string;
    'editor.exportPdf.tooltip': string;
    'editor.exportWord.tooltip': string;
    'editor.importWrod.tooltip': string;
    'editor.textDirection.tooltip': string;
    'editor.textDirection.auto.tooltip': string;
    'editor.textDirection.ltr.tooltip': string;
    'editor.textDirection.rtl.tooltip': string;
    'editor.attachment.tooltip': string;
    'editor.attachment.uploading': string;
    'editor.attachment.please_upload': string;
    'editor.imageGif.tooltip': string;
    'editor.replace.caseSensitive': string;
    'editor.mermaid.tooltip': string;
};

export { }


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        video: {
            /**
             * Add an video
             */
            setVideo: (options: Partial<SetVideoOptions>) => ReturnType;
            /**
             * Update an video
             */
            updateVideo: (options: Partial<SetVideoOptions>) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the text font size. ex: "12px", "2em", or "small". Must be a valid
             * CSS font-size
             * (https://developer.mozilla.org/en-US/docs/Web/CSS/font-size).
             */
            setFontSize: (fontSize: string) => ReturnType;
            /**
             * Unset the font size
             */
            unsetFontSize: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        lineHeight: {
            setLineHeight: (lineHeight: string) => ReturnType;
            unsetLineHeight: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        tableCellBackground: {
            setTableCellBackground: (color: string) => ReturnType;
            unsetTableCellBackground: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageResize: {
            /**
             * Add an image
             */
            setImageInline: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Update an image
             */
            updateImage: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Set image alignment
             */
            setAlignImage: (align: 'left' | 'center' | 'right') => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        indent: {
            /**
             * Set the indent attribute
             */
            indent: () => ReturnType;
            /**
             * Set the outdent attribute
             */
            outdent: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        painter: {
            setPainter: (marks: Mark[]) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        iframe: {
            /**
             * Add an iframe
             */
            setIframe: (options: {
                src: string;
                service: string;
            }) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emoji: {
            setEmoji: (emoji: {
                name: string;
                emoji: string;
            }) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        columns: {
            insertColumns: (attrs?: {
                cols: number;
            }) => ReturnType;
            addColBefore: () => ReturnType;
            addColAfter: () => ReturnType;
            deleteCol: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        search: {
            setSearchTerm: (searchTerm: string) => ReturnType;
            setReplaceTerm: (replaceTerm: string) => ReturnType;
            replace: () => ReturnType;
            replaceAll: () => ReturnType;
            goToPrevSearchResult: () => void;
            goToNextSearchResult: () => void;
            setCaseSensitive: (caseSensitive: boolean) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        exportWord: {
            exportToWord: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageResize: {
            /**
             * Add an image gif
             */
            setImageGif: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Update an image gif
             */
            updateImageGif: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Set image alignment
             */
            setAlignImageGif: (align: 'left' | 'center' | 'right') => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        attachment: {
            setAttachment: (attrs?: unknown) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        mermaid: {
            setMermaid: (options: any, replace?: any) => ReturnType;
            setAlignImageMermaid: (align: 'left' | 'center' | 'right') => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        katex: {
            setKatex: (arg?: IKatexAttrs) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        tableOfContents: {
            setTableOfContents: () => ReturnType;
            removeTableOfContents: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        excalidraw: {
            setExcalidraw: (attrs?: IExcalidrawAttrs) => ReturnType;
        };
    }
}


declare namespace DialogHeader {
    var displayName: string;
}


declare namespace DialogFooter {
    var displayName: string;
}


declare namespace DropdownMenuShortcut {
    var displayName: string;
}
