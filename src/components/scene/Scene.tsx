import React from "react";
import { useStore } from "../../store/useStore";
import styled from "@emotion/styled";
import Image from "next/image";
import Jardin from "../../assets/Jardin.png";
import Chambre from "../../assets/Chambre.png";
import Etagere from "../../assets/Etagere.png";
import Arbre from "../../assets/Arbre.png";
import Tige from "../../assets/Tige.png";
import {
	wallInstruments,
	shelfInstruments,
	treeInstruments,
	grassInstruments,
} from "../../datas/elementsData";

function Scene() {
	const { setVisibleMenu, setActiveInstrument, setSelectedNotes } = useStore();

	const handlePlayClick = (instrument: string) => {
		const audio = new Audio(`/assets/${instrument}.mp3`);
		audio.play();
	};

	const handleInstrumentSelection = (instrument: string) => {
		setVisibleMenu("settings");
		setActiveInstrument(instrument);
	};

	const handleImageClick = (category: string, note: string) => {
		handleInstrumentSelection(category);
		setSelectedNotes({ [category]: note });
		handlePlayClick(note);
	};

	return (
		<SceneGlobal>
			<div className="chamber">
				<Image
					className="chamber-background"
					style={{ width: "100%", height: "100%" }}
					src={Chambre}
					alt="Chambre"
				/>
				<div className="mur">
					{wallInstruments.map((instrument) => (
						<Image
							key={instrument.id}
							id={instrument.id}
							className="element"
							src={instrument.src}
							alt={instrument.alt}
							onClick={() =>
								handleImageClick(instrument.category, instrument.note)
							}
						/>
					))}
				</div>
				<div className="etagere">
					<Image id="shelf" src={Etagere} alt="Etagere" />
					<Image id="tige3" src={Tige} alt="Tige3" />
					{shelfInstruments.map((instrument) => (
						<Image
							key={instrument.id}
							id={instrument.id}
							className="element"
							src={instrument.src}
							alt={instrument.alt}
							onClick={() =>
								handleImageClick(instrument.category, instrument.note)
							}
						/>
					))}
				</div>
			</div>
			<div className="garden">
				<Image
					className="garden-background"
					style={{ width: "100%", height: "100%" }}
					src={Jardin}
					alt="Jardin"
				/>
				<div className="arbre">
					<Image id="tree" src={Arbre} alt="Arbre" />
					{treeInstruments.map((instrument) => (
						<Image
							key={instrument.id}
							id={instrument.id}
							className="element"
							src={instrument.src}
							alt={instrument.alt}
							onClick={() =>
								handleImageClick(instrument.category, instrument.note)
							}
						/>
					))}
				</div>
				<div className="grass">
					{grassInstruments.map((instrument) => (
						<Image
							key={instrument.id}
							id={instrument.id}
							className="element"
							src={instrument.src}
							alt={instrument.alt}
							onClick={() =>
								handleImageClick(instrument.category, instrument.note)
							}
						/>
					))}
				</div>
			</div>
		</SceneGlobal>
	);
}

export default Scene;

const SceneGlobal = styled.div`
	flex: 1;
	height: calc(100% - 200px);
	display: flex;

	@media (max-width: 900px) {
		height: calc(100% - 150px);
		flex-direction: column;
	}

	.element {
		#image {
			width: 100%;
			height: 100%;
		}
	}

	.chamber {
		display: flex;
		width: 50%;
		align-items: center;
		justify-content: center;
		position: relative;

		@media (max-width: 900px) {
			width: 100%;
			height: 50%;
		}

		.garden-background {
			position: absolute;
			z-index: 0;
		}

		.etagere {
			position: absolute;
			bottom: 0;
			left: 10em;
			width: 30em;
			height: 28em;

			@media (max-width: 1600px) {
				left: 9em;
				width: 30em;
				height: 27em;
			}

			@media (max-width: 1520px) {
				left: 8em;
				width: 29em;
				height: 26em;
			}

			@media (max-width: 1400px) {
				left: 8em;
				width: 26em;
				height: 25em;
			}

			@media (max-width: 1300px) {
				left: 8em;
				width: 23em;
				height: 27em;
			}

			@media (max-width: 1200px) {
				left: 7em;
				width: 20em;
				height: 26em;
			}

			@media (max-width: 1100px) {
				left: 5.5em;
				width: 18em;
				height: 25em;
			}

			@media (max-width: 900px) {
				left: 18em;
				width: 20em;
				height: 15em;
			}

			@media (max-width: 850px) {
				left: 17em;
				width: 19em;
				height: 15em;
			}

			@media (max-width: 800px) {
				left: 16em;
				width: 18em;
				height: 15em;
			}

			@media (max-width: 750px) {
				left: 15em;
				width: 17em;
				height: 15em;
			}

			@media (max-width: 700px) {
				left: 13em;
				width: 16em;
				height: 14em;
			}

			@media (max-width: 650px) {
				left: 12em;
				width: 15em;
				height: 14em;
			}

			@media (max-width: 600px) {
				left: 11em;
				width: 14em;
				height: 14em;
			}

			@media (max-width: 550px) {
				left: 10em;
				width: 13em;
				height: 14em;
			}

			@media (max-width: 500px) {
				left: 9em;
				width: 12em;
				height: 14em;
			}

			@media (max-width: 400px) {
				left: 6em;
				width: 10em;
				height: 11.2em;
			}

			#shelf {
				position: absolute;
				top: 20%;
				left: 3%;
				width: 92%;
				height: auto;
				z-index: 1;
			}

			#piano {
				position: absolute;
				top: 20%;
				left: 9%;
				width: 35%;
				height: auto;
				z-index: 2;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem red);
				}
			}

			#harmonica {
				position: absolute;
				top: 21.8%;
				left: 50%;
				width: 10%;
				height: auto;
				z-index: 2;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem green);
				}
			}

			#accordeon {
				position: absolute;
				top: 9%;
				left: 62%;
				width: 24%;
				height: auto;
				z-index: 2;

				@media (max-width: 1300px) {
					top: 11%;
				}

				@media (max-width: 900px) {
					top: 6%;
				}

				@media (max-width: 700px) {
					top: 9%;
				}

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem green);
				}
			}

			#tige3 {
				position: absolute;
				top: 27%;
				left: 29.5%;
				height: 8%;
				width: auto;
				z-index: 0;
			}

			#maracas1 {
				position: absolute;
				top: 30%;
				left: 6.4%;
				height: 10%;
				width: auto;
				z-index: 2;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem dodgerblue);
				}
			}

			#maracas2 {
				position: absolute;
				top: 30%;
				left: 15%;
				height: 10%;
				width: auto;
				z-index: 2;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem dodgerblue);
				}
			}

			#triangle {
				position: absolute;
				top: 34%;
				left: 29.2%;
				height: 7%;
				width: auto;
				z-index: 2;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem dodgerblue);
				}
			}

			#flute {
				position: absolute;
				top: 35%;
				left: 55%;
				height: 12%;
				width: auto;
				z-index: 2;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem cyan);
				}
			}

			#guitareE {
				position: absolute;
				bottom: 15%;
				left: 35%;
				height: 30%;
				width: auto;
				z-index: 2;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem yellow);
				}
			}

			#miniGuitare {
				position: absolute;
				bottom: 15%;
				left: 47%;
				height: 20%;
				width: auto;
				z-index: 2;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem yellow);
				}
			}

			#trompette {
				position: absolute;
				bottom: 28%;
				right: 0;
				height: 28%;
				width: auto;
				z-index: 2;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem cyan);
				}
			}
		}

		.mur {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 12em;
			height: 30em;

			@media (max-width: 1300px) {
				width: 10em;
				height: 29em;
			}

			@media (max-width: 1200px) {
				width: 9em;
				height: 28em;
			}

			@media (max-width: 1100px) {
				width: 8em;
				height: 27em;
			}

			@media (max-width: 900px) {
				left: 2em;
				width: 10em;
				height: 20em;
			}

			@media (max-width: 800px) {
				left: 1.5em;
				width: 9em;
				height: 19em;
			}

			@media (max-width: 700px) {
				left: 1em;
				width: 8em;
				height: 18em;
			}

			@media (max-width: 600px) {
				left: 0.5em;
				width: 7em;
				height: 17em;
			}

			@media (max-width: 500px) {
				left: 0.3em;
				width: 6em;
				height: 16em;
			}

			@media (max-width: 400px) {
				left: 0.2em;
				width: 5em;
				height: 15em;
			}

			#guitare {
				position: absolute;
				top: 18%;
				left: 1%;
				width: 40%;
				height: auto;
				z-index: 1;
				transform: rotate(-3deg);

				@media (max-width: 900px) {
					top: 28%;
				}

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem yellow);
				}
			}

			#violon {
				position: absolute;
				top: 28%;
				left: 42%;
				width: 20%;
				height: auto;
				z-index: 1;
				transform: rotate(-3deg);

				@media (max-width: 900px) {
					top: 38%;
				}

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem dodgerblue);
				}
			}

			#cymbale {
				position: absolute;
				bottom: 2%;
				right: 30%;
				width: 36%;
				height: auto;
				z-index: 1;

				@media (max-width: 900px) {
					right: 20%;
					width: 30%;
					height: auto;
				}

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem orange);
				}
			}

			#timbale {
				position: absolute;
				bottom: 5%;
				right: 5%;
				width: 30%;
				height: auto;
				z-index: 1;

				@media (max-width: 900px) {
					right: -10%;
					width: 30%;
					height: auto;
				}

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem gold);
				}
			}
		}
	}

	.garden {
		display: flex;
		width: 50%;
		align-items: center;
		justify-content: center;
		position: relative;

		@media (max-width: 900px) {
			width: 100%;
			height: 50%;
		}

		.garden-background {
			position: absolute;
			z-index: 0;
		}

		.arbre {
			position: absolute;
			bottom: 0;
			left: 2em;
			width: 24em;
			height: 32em;

			@media (max-width: 1200px) {
				left: 1em;
				width: 22em;
				height: 28em;
			}

			@media (max-width: 900px) {
				left: 2em;
				width: 12em;
				height: 17em;
			}

			@media (max-width: 700px) {
				left: 2em;
				width: 10em;
				height: 14em;
			}

			@media (max-width: 400px) {
				left: 2em;
				width: 8em;
				height: 11em;
			}

			#tree {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 3;
			}

			#chouette {
				position: absolute;
				top: 57%;
				left: 48%;
				width: 8.8%;
				height: auto;
				z-index: 4;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem pink);
				}
			}

			#roussette {
				position: absolute;
				top: 58%;
				left: 80%;
				width: 8%;
				height: auto;
				z-index: 4;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem purple);
				}
			}

			#pinson {
				position: absolute;
				top: 15%;
				left: 64%;
				width: 14%;
				height: auto;
				z-index: 4;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem pink);
				}
			}

			#moineau {
				position: absolute;
				top: 36%;
				left: 10%;
				width: 16%;
				height: auto;
				z-index: 4;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem pink);
				}
			}
		}

		.grass {
			position: absolute;
			bottom: 0;
			right: 0;
			width: 16em;
			height: 12em;

			@media (max-width: 1200px) {
				width: 15em;
				height: 11em;
			}

			@media (max-width: 900px) {
				right: 4em;
				width: 10em;
				height: 8em;
			}

			@media (max-width: 600px) {
				right: 3em;
				width: 7em;
				height: 5em;
			}

			#vache {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 1;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem purple);
				}
			}

			#chat {
				position: absolute;
				bottom: 0;
				left: 10px;
				width: 30%;
				height: auto;
				z-index: 2;

				&:hover {
					cursor: pointer;
					filter: drop-shadow(0 0 0.2rem purple);
				}
			}
		}
	}
`;
