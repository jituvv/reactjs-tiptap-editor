import fs from "node:fs";
import * as path from "node:path";

import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import postcssReplace from "postcss-replace";
import { visualizer } from "rollup-plugin-visualizer";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const isDev = mode !== "production";

	return {
		plugins: [
			react(),
			dts({
				rollupTypes: true,
				afterBuild: (emittedFiles) => {
					emittedFiles.forEach((content, filePath) => {
						if (filePath.endsWith(".d.ts")) {
							const newFilePath = filePath.replace(".d.ts", ".d.cts");
							fs.writeFileSync(newFilePath, content);
						}
					});
				},
			}),
			visualizer({
				template: "treemap",
				open: true,
				gzipSize: true,
				brotliSize: true,
				filename: "analyze.html",
			}),
		],
		resolve: {
			alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
		},
		css: {
			postcss: {
				plugins: [
					tailwind(),
					autoprefixer(),
					postcssReplace({
						pattern: /(--tw|\*, ::before, ::after)/g,
						data: {
							"--tw": "--richtext", // Prefixing
							"*, ::before, ::after": ":root", // So variables does not pollute every element
						},
					}),
				],
			},
			preprocessorOptions: {
				scss: {
					charset: false,
					api: "modern-compiler", // or 'modern'
				},
			},
		},
		build: {
			cssMinify: "esbuild",
			minify: "esbuild",
			outDir: "lib",
			sourcemap: isDev,
			lib: {
				entry: path.resolve(__dirname, "src/index.ts"),
				formats: ["es", "cjs"],
			},
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes("@tiptap")) {
							return "tiptap";
						}
						if (id.includes("node_modules")) {
							return "vendor";
						}
						if (id.includes("src/utils")) {
							return "utils";
						}
						if (id.includes("src/locales")) {
							return "locales";
						}
					},
				},
				external: [
					"react",
					"react-dom",
					"react/jsx-runtime",
					"katex",
					"docx",
					"@radix-ui/react-dropdown-menu",
					"@radix-ui/react-icons",
					"@radix-ui/react-label",
					"@radix-ui/react-popover",
					"@radix-ui/react-separator",
					"@radix-ui/react-slot",
					"@radix-ui/react-switch",
					"@radix-ui/react-tabs",
					"@radix-ui/react-toast",
					"@radix-ui/react-toggle",
					"@radix-ui/react-tooltip",
					"@radix-ui/react-select",
					"@radix-ui/react-checkbox",
					"react-colorful",
					"scroll-into-view-if-needed",
					"tippy.js",
					"valtio",
					"lucide-react",
					"prosemirror-docx",
					"re-resizable",
					"@excalidraw/excalidraw",
					"@radix-ui/react-dialog",
					"react-image-crop",
					"mermaid",
				],
			},
		},
	};
});
