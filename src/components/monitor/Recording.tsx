import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useStore } from "../../store/useStore";
import { instruments } from "../../datas/instrumentsData";

function Recording() {
	const {
		activeInstrument,
		setActiveInstrument,
		visibleMenu,
		setVisibleMenu,
		isTempoExist,
		setIsTempoExist,
		tempoLists,
		selectedNotes,
		setSelectedNotes,
		setTempoValue,
		setSelectedIndex,
	} = useStore();

	const [intervals, setIntervals] = useState<{
		[key: string]: NodeJS.Timeout | null;
	}>({
		piano: null,
		timbale: null,
		cymbale: null,
		guitare: null,
		bois: null,
		vent: null,
		divers: null,
		oiseau: null,
		mammifere: null,
	});

	const [blinkingIndex, setBlinkingIndex] = useState(0);

	const handleTempoClick = (instrument: string, index: number) => {
		const tempoEntry = tempoLists[instrument][index];
		setSelectedNotes({ ...selectedNotes, [instrument]: tempoEntry.note });
		setTempoValue(tempoEntry.value);
		setSelectedIndex(index);
	};

	const playSound = (note: string) => {
		const audio = new Audio(
			`${process.env.NEXT_PUBLIC_BASE_URL}/assets/${note}.mp3`,
		);
		audio.play();
	};

	const handleInstrumentSelection = (instrument: string) => {
		setVisibleMenu("settings");
		setActiveInstrument(instrument);
	};

	useEffect(() => {
		let blinkIntervalId: any;

		if (isTempoExist) {
			blinkIntervalId = setInterval(() => {
				setBlinkingIndex((index) => (index + 1) % 15);
			}, 500);
		} else {
			setBlinkingIndex(0);
		}

		return () => {
			if (intervals[activeInstrument]) {
				clearInterval(intervals[activeInstrument] as NodeJS.Timeout);
			}
			clearInterval(blinkIntervalId);
		};
	}, [isTempoExist]);

	useEffect(() => {
		const currentTempos = [
			"piano",
			"cymbale",
			"timbale",
			"guitare",
			"bois",
			"vent",
			"divers",
			"oiseau",
			"mammifere",
		].map((instrument) =>
			tempoLists[instrument].find((tempo) => tempo.position === blinkingIndex),
		);

		currentTempos.forEach((currentTempo) => {
			if (currentTempo) {
				playSound(currentTempo.note);
			}
		});
	}, [blinkingIndex, tempoLists]);

	return (
		<RecordingGlobal
			style={{ display: visibleMenu === "recording" ? "" : "none" }}
		>
			<div className="listen-button">
				{isTempoExist ? (
					<i
						className="fa-solid fa-pause"
						onClick={() => setIsTempoExist(false)}
					/>
				) : (
					<i
						className="fa-solid fa-play"
						onClick={() => setIsTempoExist(true)}
					/>
				)}
			</div>
			<div className="listen-graph">
				<div className="graph-time-container">
					{[...Array(15)].map((_, i) => (
						<div key={i} className="graph-time">
							<span>{i / 2}</span>
						</div>
					))}
				</div>
				<div className="graph-item-container">
					{[...Array(15)].map((_, i) => (
						<div key={i} className="graph-item">
							<span />
							{instruments.map((instrument) => {
								return tempoLists[instrument.name].map((tempo, index) => {
									if (tempo.position === i) {
										return (
											<div
												key={index}
												className="square"
												id={
													i === blinkingIndex
														? instrument.squareBlink
														: instrument.square
												}
												onClick={() => {
													handleTempoClick(instrument.name, index);
													handleInstrumentSelection(instrument.name);
												}}
											>
												{tempo.note[0]}
											</div>
										);
									}
									return null;
								});
							})}
							{i === blinkingIndex && <div className="triangle" />}
							{i === blinkingIndex && <div className="rectangle" />}
						</div>
					))}
				</div>
			</div>
		</RecordingGlobal>
	);
}

export default Recording;

const RecordingGlobal = styled.div`
	background-color: rgb(49, 50, 52);
	width: 100%;
	display: flex;
	align-items: center;

	.listen-button {
		width: 80px;
		height: 90%;
		display: flex;
		justify-content: center;
		align-items: center;

		@media (max-width: 600px) {
			width: 40px;
		}

		i {
			background-color: white;
			border-radius: 40px;
			width: 40px;
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;

			@media (max-width: 600px) {
				width: 20px;
				height: 20px;
				border-radius: 20px;
				font-size: 0.7em;
			}

			&:hover {
				cursor: pointer;
			}
		}
	}

	.listen-graph {
		background-color: rgb(49, 50, 52);
		width: calc(100% - 90px);
		height: 90%;
		display: flex;
		flex-direction: column;

		@media (max-width: 600px) {
			width: calc(100% - 40px);
			font-size: 0.7em;
		}

		.graph-time-container {
			width: calc(100%);
			height: 25px;
			display: flex;
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
			box-shadow: 0 0 2px 0 white;

			@media (max-width: 600px) {
				height: 18px;
				align-items: center;
				width: calc(100% - 15px);
			}

			.graph-time {
				width: 100%;
				display: flex;
				justify-content: center;

				span {
					color: white;
				}
			}
		}

		.graph-item-container {
			background-color: pink;
			display: flex;
			width: calc(100%);
			height: 155px;
			box-shadow: 0 0 2px 0 white;

			@media (max-width: 600px) {
				width: calc(100% - 15px);
			}

			.graph-item {
				background-color: rgb(49, 50, 52);
				width: 100%;
				display: flex;
				justify-content: center;
				position: relative;

				.triangle {
					position: absolute;
					transform: rotate(180deg);
					top: 0;
					width: 0;
					height: 0;
					border-left: 10px solid transparent;
					border-right: 10px solid transparent;
					border-bottom: 10px solid dodgerblue;
				}

				.rectangle {
					position: absolute;
					top: 0;
					width: 2.5px;
					height: 100%;
					background-color: rgba(30, 145, 255, 0.5);
					z-index: 0;
				}

				span {
					background-color: rgba(192, 45, 40, 0.5);
					width: 0.1em;
				}

				.square {
					position: absolute;
					width: 10px;
					height: 10px;
					border-radius: 2px;
					z-index: 1;
					font-size: 0.55rem;
					display: flex;
					justify-content: center;
					align-items: center;
					color: white;

					&:hover {
						cursor: pointer;
					}
				}

				#square1 {
					top: 15px;
					box-shadow: 0 0 2px red, 0 0 1px red, inset 0 0 24px red,
						inset 0 0 24px red;
					color: white;

					@media (max-width: 600px) {
						top: 10px;
					}
				}

				#square1Blink {
					top: 15px;
					box-shadow: 0 0 10px #fff, 0 0 10px red, inset 0 0 24px red,
						inset 0 0 24px #fff;
					color: white;

					@media (max-width: 600px) {
						top: 10px;
					}
				}

				#square2 {
					top: 28px;
					box-shadow: 0 0 2px #fff, 0 0 1px orange, inset 0 0 18px orange,
						inset 0 0 18px orange;
					color: white;

					@media (max-width: 600px) {
						top: 22px;
					}
				}

				#square2Blink {
					top: 28px;
					box-shadow: 0 0 10px #fff, 0 0 10px orange, inset 0 0 24px orange,
						inset 0 0 24px #fff;
					color: white;

					@media (max-width: 600px) {
						top: 22px;
					}
				}

				#square3 {
					top: 41px;
					box-shadow: 0 0 2px #fff, 0 0 1px gold, inset 0 0 18px gold,
						inset 0 0 18px gold;
					color: black;

					@media (max-width: 600px) {
						top: 34px;
					}
				}

				#square3Blink {
					top: 41px;
					box-shadow: 0 0 10px #fff, 0 0 10px gold, inset 0 0 24px gold,
						inset 0 0 24px #fff;
					color: black;

					@media (max-width: 600px) {
						top: 34px;
					}
				}

				#square4 {
					top: 54px;
					box-shadow: 0 0 2px #fff, 0 0 1px yellow, inset 0 0 18px yellow,
						inset 0 0 18px yellow;
					color: black;

					@media (max-width: 600px) {
						top: 46px;
					}
				}

				#square4Blink {
					top: 54px;
					box-shadow: 0 0 10px #fff, 0 0 10px yellow, inset 0 0 24px yellow,
						inset 0 0 24px #fff;
					color: black;

					@media (max-width: 600px) {
						top: 46px;
					}
				}

				#square5 {
					top: 67px;
					box-shadow: 0 0 2px #fff, 0 0 1px green, inset 0 0 24px rgb(0, 250, 0),
						inset 0 0 15px rgb(0, 250, 0);
					color: black;

					@media (max-width: 600px) {
						top: 58px;
					}
				}

				#square5Blink {
					top: 67px;
					box-shadow: 0 0 10px #fff, 0 0 10px rgb(0, 250, 0),
						inset 0 0 24px rgb(0, 250, 0), inset 0 0 24px #fff;
					color: black;

					@media (max-width: 600px) {
						top: 58px;
					}
				}

				#square6 {
					top: 80px;
					box-shadow: 0 0 2px #fff, 0 0 1px cyan, inset 0 0 18px cyan,
						inset 0 0 18px cyan;
					color: black;

					@media (max-width: 600px) {
						top: 70px;
					}
				}

				#square6Blink {
					top: 80px;
					box-shadow: 0 0 10px #fff, 0 0 10px cyan, inset 0 0 24px cyan,
						inset 0 0 24px #fff;
					color: black;

					@media (max-width: 600px) {
						top: 70px;
					}
				}

				#square7 {
					top: 93px;
					box-shadow: 0 0 2px dodgerblue, 0 0 1px dodgerblue,
						inset 0 0 18px dodgerblue, inset 0 0 18px dodgerblue;
					color: black;

					@media (max-width: 600px) {
						top: 82px;
					}
				}

				#square7Blink {
					top: 93px;
					box-shadow: 0 0 10px #fff, 0 0 10px dodgerblue,
						inset 0 0 24px dodgerblue, inset 0 0 24px #fff;
					color: black;

					@media (max-width: 600px) {
						top: 82px;
					}
				}

				#square8 {
					top: 106px;
					box-shadow: 0 0 2px pink, 0 0 1px pink, inset 0 0 18px pink,
						inset 0 0 18px pink;
					color: black;

					@media (max-width: 600px) {
						top: 94px;
					}
				}

				#square8Blink {
					top: 106px;
					box-shadow: 0 0 10px #fff, 0 0 10px pink, inset 0 0 24px pink,
						inset 0 0 24px #fff;
					color: black;

					@media (max-width: 600px) {
						top: 94px;
					}
				}

				#square9 {
					top: 119px;
					box-shadow: 0 0 2px rgb(143, 108, 155), 0 0 1px rgb(143, 108, 155),
						inset 0 0 18px rgb(143, 108, 155), inset 0 0 18px rgb(143, 108, 155);
					color: white;

					@media (max-width: 600px) {
						top: 106px;
					}
				}

				#square9Blink {
					top: 119px;
					box-shadow: 0 0 10px #fff, 0 0 10px rgb(143, 108, 155),
						inset 0 0 24px rgb(143, 108, 155), inset 0 0 24px #fff;
					color: white;

					@media (max-width: 600px) {
						top: 106px;
					}
				}

				#square10 {
					top: 132px;
					box-shadow: 0 0 2px purple, 0 0 1px purple, inset 0 0 18px purple,
						inset 0 0 18px purple;
					color: white;

					@media (max-width: 600px) {
						top: 118px;
					}
				}

				#square10Blink {
					top: 132px;
					box-shadow: 0 0 10px #fff, 0 0 10px purple, inset 0 0 24px purple,
						inset 0 0 24px #fff;
					color: white;

					@media (max-width: 600px) {
						top: 118px;
					}
				}
			}
		}
	}
`;
