import styled from "styled-components";
import {colors} from '@styles/colors';

export const ContentHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${colors.black};
    
    :first-child {
        justify-content: left;
    }
    :last-child {
        justify-content: right;
    }
`;