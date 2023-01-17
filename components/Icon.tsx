import { type } from "os";
import React from "react";
import { IconLibrary } from "./IconLibrary";

export type IconNameType =
	| "file-download"
	| "file-upload"
	| "chevron-left"
	| "arrow-forward"
	| "add"
	| "chevron-right";

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
	const paths = IconLibrary[name]?.paths[0];

	return (
		<svg style={style} viewBox={viewBox} {...rest} className="custom-icon">
			<path d={paths} fill="currentColor" transform={transform} />
		</svg>
	);
};
