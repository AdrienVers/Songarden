import React from "react";
import styled from "@emotion/styled";
import { useStore } from "../../store/useStore";

function Menu() {
	const { visibleMenu, setVisibleMenu } = useStore();

	return (
		<MenuGlobal style={{ display: visibleMenu === "menu" ? "" : "none" }}>
			<div
				style={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
				}}
			>
				<div
					className="play-button"
					onClick={() => setVisibleMenu("recording")}
				>
					<i className="fa-solid fa-play" />
					<span>Ecouter</span>
				</div>

				<div className="record-button">
					<i className="fa-solid fa-record-vinyl" />
					<span>Enregistrer</span>
				</div>
			</div>
			<div
				style={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
				}}
			>
				<div className="download-button">
					<i className="fa-solid fa-download" />
					<span>Télécharger</span>
				</div>

				<div className="demo-button">
					<i className="fa-solid fa-drum" />
					<span>Lancer la démo</span>
				</div>
			</div>
		</MenuGlobal>
	);
}

export default Menu;

const MenuGlobal = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	font-size: 1.5em;
	padding: 0 1em;

	@media (max-width: 900px) {
		font-size: 1.1em;
		line-height: 2em;
		padding: 0 0.1em;
		width: 100%;
	}

	@media (max-width: 600px) {
		font-size: 1em;
		line-height: 1.5em;
		padding: 0 0.1em;
		width: 100%;
	}

	.play-button {
		&:hover {
			cursor: pointer;
		}
	}

	.record-button,
	.download-button,
	.demo-button {
		&:hover {
			cursor: default;
		}
	}

	.play-button {
		display: flex;
		align-items: center;

		i {
			color: white;
			padding-left: 14px;

			@media (max-width: 900px) {
				padding-left: 10px;
			}
		}

		span {
			color: white;
			padding: 0px 0px 4px 20px;

			@media (max-width: 900px) {
				padding: 0px 0px 0px 10px;
			}
		}
	}

	.record-button {
		display: flex;
		align-items: center;

		i {
			color: grey;
			padding-left: 10px;

			@media (max-width: 900px) {
				padding-left: 6px;
			}
		}

		span {
			color: grey;
			padding: 0px 0px 4px 18px;

			@media (max-width: 900px) {
				padding: 0px 0px 0px 10px;
			}
		}
	}

	.download-button {
		display: flex;
		align-items: center;

		i {
			color: grey;
			padding-left: 10px;
		}

		span {
			color: grey;
			padding: 0px 0px 0px 18px;

			@media (max-width: 900px) {
				padding: 0px 0px 0px 10px;
			}
		}
	}

	.demo-button {
		display: flex;
		align-items: center;

		i {
			color: grey;
			padding-left: 10px;
		}

		span {
			color: grey;
			padding: 0px 0px 0px 18px;

			@media (max-width: 900px) {
				padding: 0px 0px 0px 10px;
			}
		}
	}
`;
