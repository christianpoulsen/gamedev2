import React from 'react';
import { Box, Typography, makeStyles, Theme } from '@material-ui/core';

import Blob from './Blob';

const useStyles = makeStyles<Theme, {width: number}>(theme => ({
  imgBlob: {
    '& img': {
      padding: theme.spacing(2),
      width: ({ width }) =>  theme.spacing(width+2),
    }
  }
}))

interface OptionProps {
    img: string;
    header: string;
    text: string;
    size: number;
    color: string;
    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
}

const Option: React.FC<OptionProps> = ({ header, img, text, size, color, style, className, onClick }) => {  
  const classes = useStyles({width: size / 2});

  return (
    <Box display="flex" flexDirection="row" mb={1} style={style} className={className} onClick={onClick}>
        <Blob size={size} color={color} className={classes.imgBlob}>
            <img src={img} alt={text + "image"} />
        </Blob>
        <Box display="flex" flexDirection="column" justifyContent="center" pl={2}>
            <Typography variant="h6">{header}</Typography>
            <Typography>{text}</Typography>
        </Box>
    </Box>
  )
}

export default Option;
