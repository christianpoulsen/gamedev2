import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { green } from '@material-ui/core/colors'

import BlobListItem from './BlobListItem';

const useStyles = makeStyles<Theme>(theme => ({
    option: {
        cursor: 'pointer',
    }
}));

interface OptionProps {
    index: number;
    img: string;
    text: string;
}

const Option: React.FC<OptionProps> = ({ index, img, text }) => {  
  const classes = useStyles();

  return (
    <BlobListItem
        img={img}
        header={`Option ${index}`}
        text={text}
        size={14}
        color={green[400]}
        className={classes.option}
    />
  )
}

export default Option;
