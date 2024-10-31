import { Extension } from "@tiptap/core";

import { ActionButtonExpanded } from "@/components/ActionButtonExpanded";
import { printEditorContent } from "@/utils/pdf";

export const ExportPdf = Extension.create<any>({
	name: "exportPdf",
	addOptions() {
		return {
			...this.parent?.(),
			button: ({ editor, t }: any) => ({
				component: ActionButtonExpanded,
				componentProps: {
					action: () => {
						printEditorContent(editor);
					},
					icon: "ExportPdf",
					tooltip: t("editor.exportPdf.tooltip"),
					isActive: () => false,
					disabled: false,
				},
			}),
		};
	},
});
