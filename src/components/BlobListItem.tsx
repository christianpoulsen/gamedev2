import React from 'react';
import { Box, Typography } from '@material-ui/core';

import Blob from './Blob';


interface OptionProps {
    img: string;
    header: string;
    text: string;
    size: number;
    color: string;
    style?: React.CSSProperties;
    className?: string;
}

const Option: React.FC<OptionProps> = ({ header, img, text, size, color, style, className }) => {  

  return (
    <Box display="flex" flexDirection="row" mb={1} style={style} className={className}>
        <Blob size={size} color={color}>
            {img}
        </Blob>
        <Box display="flex" flexDirection="column" justifyContent="center" pl={2}>
            <Typography variant="h6">{header}</Typography>
            <Typography>{text}</Typography>
        </Box>
    </Box>
  )
}

export default Option;
