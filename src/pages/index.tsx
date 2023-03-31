import styled from "@emotion/styled";
import Head from "next/head";
import Scene from "../components/scene/Scene";
import Monitor from "../components/monitor/Monitor";

export default function Home() {
	return (
		<HomeGlobal>
			<Head>
				<title>Songarden</title>
				<meta
					name="description"
					content="Compose ta propre mélodie avec Songarden !"
				/> 
				<link rel="icon" href="/logo.png" />
			</Head>
			<Scene />
			<Monitor />
		</HomeGlobal>
	);
}

const HomeGlobal = styled.div`
	display: flex;
	flex-direction: column;
	height: 100svh;
`;
