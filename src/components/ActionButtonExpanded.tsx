/* eslint-disable react/no-unstable-default-props */
/* eslint-disable unused-imports/no-unused-vars */
import React from "react";

import { Slot } from "@radix-ui/react-slot";
import type { TooltipContentProps } from "@radix-ui/react-tooltip";

import { Toggle, icons } from "@/components";
import { cn } from "@/lib/utils";
import type { ButtonViewReturnComponentProps } from "@/types";

export interface ActionButtonExpandedProps {
	/* Icon name to display */
	icon?: string;
	/* Button title */
	title?: string;
	/* Tooltip text */
	tooltip?: string;
	/* Whether the button is disabled */
	disabled?: boolean;
	/* Keyboard shortcut keys */
	shortcutKeys?: string[];
	/* Custom CSS class */
	customClass?: string;
	/* Loading state */
	loading?: boolean;
	/* Tooltip options */
	tooltipOptions?: TooltipContentProps;
	/* Button color */
	color?: string;
	/* Click action handler */
	action?: ButtonViewReturnComponentProps["action"];
	/* Active state checker */
	isActive?: ButtonViewReturnComponentProps["isActive"];
	/* Child components */
	children?: React.ReactNode;
	/* Whether to render as child */
	asChild?: boolean;
	/* Whether it's an upload button */
	upload?: boolean;
}

const ActionButtonExpanded = React.forwardRef<
	HTMLButtonElement,
	Partial<ActionButtonExpandedProps>
>((props, ref) => {
	const {
		icon = undefined,
		// title = undefined,
		tooltip = undefined,
		disabled = false,
		customClass = "",
		// color = undefined,
		// loading = false,
		shortcutKeys = undefined,
		tooltipOptions = {},
		action = undefined,
		isActive = undefined,
		children,
		asChild = false,
		upload = false,
		...rest
	} = props;

	const Icon = icons[icon as string];
	const Comp = asChild ? Slot : Toggle;

	return (
		<Comp
			ref={ref}
			size="sm"
			className={cn(
				"richtext-w-[32px] richtext-h-[32px]",
				customClass,
				"richtext-w-fit richtext-gap-2",
			)}
			// pressed={isActive?.() || false}
			disabled={disabled}
			onClick={action}
			data-state={isActive?.() ? "on" : "off"}
			{...rest}
		>
			{tooltip && (
				<span className="richtext-text-sm richtext-flex-none richtext-font-medium">
					{tooltip}
				</span>
			)}
			{Icon && <Icon className="richtext-w-4 richtext-h-4" />}
			{children}
		</Comp>
	);
});

export { ActionButtonExpanded };
