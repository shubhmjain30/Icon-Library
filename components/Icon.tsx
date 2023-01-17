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
	const transform: any = IconLibrary[name]?.transform;
	const viewBox: any = IconLibrary[name]?.viewBox;
	const renderPaths = IconLibrary[name]?.paths[0];

	return (
		<svg style={style} viewBox={viewBox} {...rest} className="custom-icon">
			<path d={renderPaths} fill="currentColor" transform={transform} />
		</svg>
	);
};
