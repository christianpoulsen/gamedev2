import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import Blob from './Blob';

interface BackHeaderProps {
    header: string;
    onBack: () => void;
    className?: string;
}

export const BackHeader: React.FC<BackHeaderProps> = ({ header, onBack, className }) => {

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" className={className}>
            <Blob size={6} color={purple[300]} onClick={onBack}>
                {"<--"}
            </Blob>
            <Typography variant="h5" color="inherit">{header}</Typography>
            <div style={{width: 48}} />
        </Box>
    )
}

export default BackHeader;
