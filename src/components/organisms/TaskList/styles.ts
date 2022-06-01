import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin: 30px;

    @media (max-width: 414px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 375px) {
        grid-template-columns: 1fr 1fr;
    }
`;