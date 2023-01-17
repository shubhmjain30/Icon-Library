import { IconLibrary } from "./IconLibrary";
import React from "react";

export type IconNameType =
	| "file-download"
	| "file-upload"
	| "chevron-left"
	| "arrow-forward"
	| "add"
	| "chevron-right"
	| "mode-edit"
	| "account-balance-wallet"
	| "near-me";

type Props = {
	name: IconNameType;
	color?: string;
	width?: string;
	height?: string;
	style?: React.CSSProperties;
};

export const Icon = ({ name, style, ...rest }: Props) => {
	const transform = IconLibrary[name]?.transform;
	const viewBox = IconLibrary[name]?.viewBox;
	const path = IconLibrary[name]?.path;

	return (
		<svg style={style} viewBox={viewBox} {...rest} className="custom-icon">
			<path d={path} fill="currentColor" transform={transform} />
		</svg>
	);
};
