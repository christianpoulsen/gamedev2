import React from 'react';
import { makeStyles, useTheme, Theme } from '@material-ui/core';

const useStyles = makeStyles<Theme, { size: number, color: string }>(theme => ({
  circle: {
    cursor: 'pointer',
  },
  text: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: ({ color }) => theme.palette.getContrastText(color),
    whiteSpace: 'pre',
    pointerEvents: 'none',
    bottom: ({ size }) => size,
    marginBottom: ({ size }) => -size,
    height: ({ size }) => size,
    width: ({ size }) => size,
  }
}));

interface BlobProps {
    size: number;
    color: string;
    clickable?: boolean;
}

const Blob: React.FC<BlobProps> = ({ children, color, ...props}) => {
  const theme = useTheme();
  const size = theme.spacing(props.size);
  
  const classes = useStyles({ size, color });

  return (
    <div>
      <svg height={size} width={size}>
        <circle cx={size/2} cy={size/2} r={size/2} fill={color} cursor={props.clickable ? 'pointer' : undefined}/>
      </svg> 
        <div className={classes.text}>
          {children}
        </div>
    </div>
  )
}

export default Blob;
