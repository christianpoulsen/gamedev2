import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { orange } from '@material-ui/core/colors'

type MUIColor = keyof typeof orange;

interface BlobStyleProps {
    size: number;
    color: { [key in MUIColor]: string }
}

const useStyles = makeStyles<Theme, BlobStyleProps>(theme => ({
    blob: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: theme.palette.common.white,
        backgroundColor: ({ color }) => color[400],
        width: ({ size }) => theme.spacing(size),
        height: ({ size }) => theme.spacing(size),
        borderRadius: '50%',
        whiteSpace: 'pre'
    }
}));


const Blob: React.FC<BlobStyleProps> = ({ children, size, color }) => {
  const classes = useStyles({ size, color });


  return (
    <div className={classes.blob}>
        {children}
    </div>
  );
}

export default Blob;
