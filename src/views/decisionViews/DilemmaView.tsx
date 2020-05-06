import React from 'react';
import { useDispatch } from 'react-redux';
import { Dilemma, Option, pickOption } from '../../store/taskActions';
import { Box, makeStyles } from '@material-ui/core';
import getRandomMUIColor from '../../helpers/getRandomMUIColor';
import fullfillsStateCheck from '../../helpers/fullfillsStateCheck';
import isStateCheck from '../../helpers/isStateCheck';
import { useTypedSelector } from '../../store';
import OptionBox from '../../components/OptionBox';

const useStyles = makeStyles(theme => ({
    item: {
        marginTop: theme.spacing(2),
        backgroundColor: getRandomMUIColor()[300],
        cursor: "pointer",
    },
    question: {
        display: 'flex',
        justifyContent: 'center',
        borderBlockWidth: 2,
        borderStyle: 'solid',
        borderRadius: theme.spacing(1),
        fontSize: 18,
        textAlign: 'center',
        padding: theme.spacing(3, 2),
    }
}))

interface DilemmaViewProps {
    dilemma: Dilemma;
}

export const DilemmaView: React.FC<DilemmaViewProps> = ({ dilemma }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const checks = useTypedSelector(state => state.checks);

    const handlePickOption = (option: Option) => () => {
        if (isStateCheck(option.next)) {
            if (fullfillsStateCheck(checks, option.next.check)) {
                dispatch(pickOption(option, option.next.yes));
            } else {
                dispatch(pickOption(option, option.next.no));
            }
        } else {
            dispatch(pickOption(option, option.next));
        }
    }

    const color = getRandomMUIColor()[300];

    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" flexGrow={1}>
            <Box className={classes.question} style={{ borderColor: color }}>
                {dilemma.text}
            </Box>
            <Box>
                {dilemma.options.map(option => (
                    // <ListItem key={option.id} className={classes.item} onClick={handlePickOption(option)}>
                    //     <Typography>{option.text}</Typography>
                    // </ListItem>
                    <OptionBox key={option.id} text={option.text} onClick={handlePickOption(option)} color={color}  />
                ))}
            </Box>
        </Box>
    );
}

export default DilemmaView;
