import { Container, Typography } from '@mui/material';
import React from 'react';
import {HeaderGrid} from './styles';
interface IProps {

}

export const Header: React.FC<IProps> = () => {
    return (<HeaderGrid>
        <div>
            <Typography variant='h3'>Planejador App</Typography>
        </div>
        <div>
            Menu nav
        </div>
    </HeaderGrid>)
}