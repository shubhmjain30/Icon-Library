import Head from "next/head";
import { Inter } from "@next/font/google";
import { Icon } from "@/components/Icon";
import Icons from "@/components/Icons";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Icons</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Icon name="file-download" color="yellow" width="40px" height="50px" />
			<Icon name="file-upload" style={{ color: "white", width: "30px" }} />
			<Icon name="add" style={{ color: "red", width: "30px" }} />
			<Icon name="chevron-left" style={{ color: "white", width: "30px" }} />
			<Icon name="arrow-forward" style={{ color: "white", width: "30px" }} />
			<Icon name="chevron-right" style={{ color: "white", width: "30px" }} />

			<Icons name="heart" />
			<Icons name="logo" />
			<Icons name="ca-caret-down" />
			<Icons name="show-more" />
		</>
	);
}
