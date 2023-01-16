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
	style?: React.CSSProperties;
};

export const Icon = ({ name, style = { opacity: 1 } }: Props) => {
	const ext: any = IconLibrary[name]?.transform;
	const viewBox: any = IconLibrary[name]?.viewBox;
	const renderPaths = IconLibrary[name]?.paths.map(
		(path: string, index: number) => (
			<g transform={ext}>
				<path key={index} d={path} />
			</g>
		)
	);

	return (
		<svg style={style} viewBox={viewBox} className="custom-icon">
			{renderPaths}
		</svg>
	);
};
