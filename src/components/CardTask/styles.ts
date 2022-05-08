import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export const ContainerActions = styled.div`
	display: grid;
	grid-template-columns: 40px 40px;
	justify-content: end;
	gap: 10px;
`;

export const DeleteIconCustom = styled(DeleteIcon)`
	width: 25px;
	height: 25px;
`;

export const EditIcon = styled(ModeEditIcon)`
	width: 25px;
	height: 25px;
`;
