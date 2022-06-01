import styled from "styled-components";

export const HeaderGrid = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    :first-child {
        justify-content: left;
    }
    :last-child {
        justify-content: right;
    }
`;