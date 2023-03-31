import styled from '@emotion/styled';
import React from 'react'
import Menu from "../../components/monitor/Menu";
import Settings from "../../components/monitor/Settings";
import Recording from "../../components/monitor/Recording";
import Buttons from "../../components/monitor/Buttons";

function Monitor() {
  return (
    <MonitorGlobal>
        <Buttons />
				<div className="menus">
					<Menu />
					<Settings />
					<Recording />
				</div>
    </MonitorGlobal>
  )
}

export default Monitor

const MonitorGlobal = styled.div`
position: relative;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgb(49, 50, 52);
		z-index: 10;

		@media (max-width: 900px) {
			height: 150px;
		}

		.menus {
			display: flex;
			width: 100%;
			height: 100%;
		}
`;