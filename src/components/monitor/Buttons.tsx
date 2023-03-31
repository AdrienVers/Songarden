import React from "react";
import styled from "@emotion/styled";
import { useStore } from "../../store/useStore";

function Buttons() {
	const { setVisibleMenu } = useStore();

	return (
		<ButtonsGlobal>
			<button onClick={() => setVisibleMenu("menu")}>
				<i className="fa-solid fa-headset" />
			</button>
			<button onClick={() => setVisibleMenu("settings")}>
				<i className="fa-solid fa-filter" />
			</button>
			<button onClick={() => setVisibleMenu("recording")}>
				<i className="fa-solid fa-ruler-horizontal" />
			</button>
		</ButtonsGlobal>
	);
}

export default Buttons;

const ButtonsGlobal = styled.div`
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
	width: 40px;
	padding: 2px;
	display: flex;
	border-right: 1px solid rgba(0, 0, 0, 0.3);

	button {
		height: 33.33%;
		width: 100%;
		background: rgb(49, 50, 52);
		color: white;

		&:hover {
			cursor: pointer;
		}
	}
`;
