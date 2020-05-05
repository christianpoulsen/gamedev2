import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import ViewHeader from './ViewHeader';

const useStyles = makeStyles(theme => ({
    mobileContainer: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: grey[200],
        alignItems: 'center',
    },
    mobileView: {
        display: 'flex',
        flexDirection: 'column',
        width: 375,
        height: 667,
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down("xs")]: {
            width: '100%',
            height: '100vh',
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
        height: `calc(100% - ${theme.spacing(12)}px)`,
        padding: theme.spacing(2),
    },
}));

interface ViewContainerProps {
    header?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ header, children, style, className: classNameProp }) => {
  const classes = useStyles();

  const className = classNameProp ? clsx([classes.container, classNameProp]) : classes.container;

  return (
      <div className={classes.mobileContainer}>
          <div className={classes.mobileView}>
            <ViewHeader />
            {header}
            <div className={className} style={style}>
                {children}
            </div>
        </div>
    </div>
  );
}

export default ViewContainer;
