import React, { ReactNode } from 'react';
import { Box, Typography } from '@material-ui/core';

import { BackButton } from './BackButton';

interface BackHeaderProps {
    color: string;
    header?: ReactNode;
    onBack: () => void;
    className?: string;
}

export const BackHeader: React.FC<BackHeaderProps> = ({ header, onBack, children, className, color }) => {

    return (
        <Box display="flex" justifyContent="space-between" alignItems="start" className={className}>
            <BackButton color={color} onClick={onBack} />
            {header && <Typography variant="h5" color="inherit">{header}</Typography>}
            {header && <div style={{width: 48}} />}
            {children}
        </Box>
    )
}

export default BackHeader;
