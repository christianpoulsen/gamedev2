import React, { ReactNode } from 'react';
import { Box, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import Blob from './Blob';

interface BackHeaderProps {
    header?: ReactNode;
    onBack: () => void;
    className?: string;
}

export const BackHeader: React.FC<BackHeaderProps> = ({ header, onBack, children, className }) => {

    return (
        <Box display="flex" justifyContent="space-between" alignItems="start" className={className}>
            <Blob size={6} color={purple[300]} onClick={onBack}>
                {"<--"}
            </Blob>
            {header && <Typography variant="h5" color="inherit">{header}</Typography>}
            {header && <div style={{width: 48}} />}
            {children}
        </Box>
    )
}

export default BackHeader;
