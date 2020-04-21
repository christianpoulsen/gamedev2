import React from 'react';
import { useDispatch } from 'react-redux';
import { Dilemma, Option, pickOption } from '../../store/taskActions';
import { Box, Typography, ListItem, makeStyles } from '@material-ui/core';
import Blob from '../../components/Blob';
import getRandomMUIColor from '../../helpers/getRandomMUIColor';
import isStateCheck from '../../helpers/isStateCheck';

const useStyles = makeStyles(theme => ({
    item: {
        marginTop: theme.spacing(2),
        backgroundColor: getRandomMUIColor()[300],
        cursor: "pointer",
    }
}))

interface DilemmaViewProps {
    dilemma: Dilemma;
}

export const DilemmaView: React.FC<DilemmaViewProps> = ({ dilemma }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handlePickOption = (option: Option) => () => {
        if (isStateCheck(option.next)) {
            console.log("Got a StateCheck:\n", option.next)
        } else {
            dispatch(pickOption(option, option.next));
        }
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" flexGrow={1}>
            <Box display="flex" justifyContent="center">
                <Blob size={32} color={getRandomMUIColor()[300]}>
                    <Typography>{dilemma.text}</Typography>
                </Blob>
            </Box>
            <Box>
                {dilemma.options.map(option => (
                    <ListItem key={option.id} className={classes.item} onClick={handlePickOption(option)}>
                        <Typography>{option.text}</Typography>
                    </ListItem>
                ))}
            </Box>
        </Box>
    );
}

export default DilemmaView;
