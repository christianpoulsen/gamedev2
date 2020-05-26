import React from 'react';
import { makeStyles, useTheme, Theme } from '@material-ui/core';

const useStyles = makeStyles<Theme, { size: number, color: string }>(theme => ({
  container: {
    position: 'relative',
  },
  svg: {
    position: 'absolute',
  },
  text: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    whiteSpace: 'normal',
    pointerEvents: 'none',
    wordBreak: "break-word",
    color: ({ color }) => theme.palette.getContrastText(color),
    height: ({ size }) => size,
    width: ({ size }) => size,
  }
}));

interface BlobProps {
    size: number;
    color: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
}

const Blob: React.FC<BlobProps> = ({ children, color, size: propSize, onClick, style, className}) => {
  const theme = useTheme();
  const size = theme.spacing(propSize);
  
  const classes = useStyles({ size, color });

  return (
    <div className={className}>
      <svg height={size} width={size} style={style} className={classes.svg}>
        <circle cx={size/2} cy={size/2} r={size/2} fill={color} cursor={onClick ? 'pointer' : undefined} onClick={onClick}/>
      </svg> 
        <div className={classes.text}>
          {children}
        </div>
    </div>
  )
}

export default Blob;
