import React from "react";
import styled from "@emotion/styled";
import { useStore } from "../../store/useStore";
import { instruments } from "../../datas/instrumentsData";

function Settings() {
	const {
		visibleMenu,
		setVisibleMenu,
		activeInstrument,
		selectedNotes,
		setSelectedNotes,
		tempoValue,
		setTempoValue,
		selectedIndex,
		setSelectedIndex,
		tempoLists,
		setTempoLists,
	} = useStore();

	const handleNoteSelection = (note: string) => {
		setSelectedNotes({ ...selectedNotes, [activeInstrument]: note });
		const audio = new Audio(`/assets/${note}.mp3`);
		audio.play();
	};

	const handleTempoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTempoValue(e.target.value);
	};

	const roundToNearestValidTempo = (value: number) => {
		const roundedValue = Math.round(value * 2) / 2;
		return Math.min(Math.max(roundedValue, 0), 7);
	};

	const formatTempoValue = (value: number) => {
		return Number.isInteger(value) ? value.toString() : value.toFixed(1);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const roundedTempoValue = roundToNearestValidTempo(parseFloat(tempoValue));
		const position = parseFloat(tempoValue) * 2;

		if (selectedIndex !== null) {
			const updatedTempoList = [...tempoLists[activeInstrument]];
			updatedTempoList[selectedIndex] = {
				note: selectedNotes[activeInstrument],
				value: formatTempoValue(roundedTempoValue),
				position: position,
			};
			setTempoLists({ ...tempoLists, [activeInstrument]: updatedTempoList });
		} else {
			setTempoLists({
				...tempoLists,
				[activeInstrument]: [
					...tempoLists[activeInstrument],
					{
						note: selectedNotes[activeInstrument],
						value: formatTempoValue(roundedTempoValue),
						position: position,
					},
				],
			});
		}

		setSelectedNotes({
			piano: "DO",
			cymbale: "CRASH",
			timbale: "BONGO",
			guitare: "GUITARE",
			bois: "HARMONICA",
			vent: "FLUTE",
			divers: "MARACAS1",
			oiseau: "MOINEAU",
			mammifere: "CHAT",
		});
		setTempoValue("");
		setSelectedIndex(null);
	};

	const handleDelete = () => {
		if (selectedIndex !== null) {
			const updatedTempoList = [...tempoLists[activeInstrument]].filter(
				(_, index) => index !== selectedIndex,
			);
			setTempoLists({ ...tempoLists, [activeInstrument]: updatedTempoList });
			setSelectedIndex(null);
		}
		setTempoValue("");
	};

	return (
		<SettingsGlobal
			style={{ display: visibleMenu === "settings" ? "" : "none" }}
		>
			{activeInstrument === "" && (
				<div
					className="settings-empty"
					style={{
						color: "white",
						textAlign: "center",
						display: visibleMenu === "settings" ? "" : "none",
					}}
				>
					Veuillez sélectionner un instrument.
				</div>
			)}
			{instruments.map((instrument) => {
				if (activeInstrument === instrument.name) {
					return (
						<div key={instrument.name} className="instrument-settings">
							<div className="instrument-name">
								{activeInstrument.charAt(0).toUpperCase() +
									activeInstrument.slice(1)}{" "}
								({selectedNotes[instrument.name]})
							</div>
							<form onSubmit={(e) => handleSubmit(e)}>
								<div className="instrument-inputs">
									<div className="instrument-note">
										<i className="fa-solid fa-sliders" />
										{instrument.notes.map((note) => (
											<button
												className="note-button"
												key={note}
												type="button"
												onClick={() => handleNoteSelection(note)}
												style={{
													backgroundColor:
														selectedNotes[instrument.name] === note
															? "rgba(260, 260, 260, 1)"
															: "rgba(260, 260, 260, 0.4)",
												}}
											>
												{note}
											</button>
										))}
									</div>
									<div className="instrument-tempo">
										<i id="tempo" className="fa-solid fa-wave-square" />
										<input
											type="number"
											min={0.5}
											max={7}
											step={0.5}
											placeholder="0"
											value={tempoValue}
											onChange={handleTempoChange}
										/>
										<span>s</span>

										<i
											id="trash"
											className="fa-solid fa-trash note-delete-icon"
											onClick={handleDelete}
											style={{ display: selectedIndex !== null ? "" : "none" }}
										/>
									</div>
								</div>
								<button
									className="submit-button"
									type="submit"
									onClick={() => setVisibleMenu("recording")}
								>
									Ajouter
								</button>
							</form>
						</div>
					);
				}
				return null;
			})}
		</SettingsGlobal>
	);
}

export default Settings;

const SettingsGlobal = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5em;
	position: relative;

	@media (max-width: 900px) {
		font-size: 1.1em;
	}

	@media (max-width: 450px) {
		font-size: 1em;
		justify-content: normal;
	}

	.settings-empty {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;

		@media (max-width: 900px) {
			font-size: 1.1em;
		}

		@media (max-width: 450px) {
			font-size: 1em;
		}
	}

	.instrument-settings {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		.instrument-name {
			background-color: rgba(0, 0, 0, 0.3);
			display: flex;
			align-items: center;
			justify-content: center;
			height: 25%;
			width: calc(100%);
			color: white;
		}

		form {
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			height: 75%;

			i {
				color: white;
				padding-right: 10px;
			}

			.instrument-inputs {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;

				.instrument-note {
					display: flex;
					align-items: center;
				}

				.instrument-tempo {
					display: flex;
					align-items: center;

					span {
						padding-left: 5px;
						color: white;

						@media (max-width: 900px) {
							padding-left: 3px;
						}
					}

					input {
						font-size: 1.2rem;
						width: 40px;
						text-align: center;

						@media (max-width: 900px) {
							font-size: 1rem;
						}

						@media (max-width: 450px) {
							font-size: 0.8rem;
						}
					}

					input[type="number"]::-webkit-inner-spin-button,
					input[type="number"]::-webkit-outer-spin-button {
						-webkit-appearance: none;
						margin: 0;
					}
					input[type="number"] {
						-moz-appearance: textfield;
					}

					#trash {
						padding-left: 10px;
						font-size: 1.2rem;

						@media (max-width: 900px) {
							font-size: 1rem;
						}

						@media (max-width: 450px) {
							font-size: 0.8rem;
						}

						&:hover {
							cursor: pointer;
						}
					}
				}

				.note-button {
					font-size: 0.9rem;
					padding: 5px 9px;

					@media (max-width: 900px) {
						font-size: 0.8rem;
						padding: 5px 8px;
					}

					@media (max-width: 450px) {
						font-size: 0.6rem;
						padding: 2px 3px;
					}

					&:hover {
						cursor: pointer;
						box-shadow: 0 0 5px 1px white;
					}
				}
			}

			.submit-button {
				font-size: 1.1rem;
				padding: 5px 10px;

				@media (max-width: 900px) {
					font-size: 0.9rem;
				}

				@media (max-width: 450px) {
					font-size: 0.8rem;
				}

				&:hover {
					cursor: pointer;
				}
			}
		}

		.instrument-composition {
			background-color: rgb(200, 0, 200);
			width: 100%;
			height: 35%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;

			font-size: 1.1rem;

			@media (max-width: 900px) {
				font-size: 0.8rem;
			}

			@media (max-width: 450px) {
				font-size: 0.7rem;
			}

			span {
				padding: 0px 10px;

				@media (max-width: 900px) {
					padding: 0px 5px;
				}

				@media (max-width: 450px) {
					padding: 0px 2px;
				}
			}
		}
	}
`;
