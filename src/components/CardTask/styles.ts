import styled from "styled-components";
import DoneIcon from '@mui/icons-material/Done';
import BlockIcon from '@mui/icons-material/Block';
import ClearIcon from '@mui/icons-material/Clear';
import { Typography } from "@mui/material";

export const ContainerActions = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: end;
	gap: 10px;
	width: 100%;

	button {
		border-radius: 10px;
	}
`;

export const DoneIconCustom = styled(DoneIcon)`
	width: 25px;
	height: 25px;
`;
export const BlockIconCustom = styled(BlockIcon)`
	width: 25px;
	height: 25px;
`;

export const ClearIconCustom = styled(ClearIcon)`
	width: 25px;
	height: 25px;
`;

export const TextDateTime = styled(Typography)`
	font-size: 13px !important;
	color: grey;
`;
