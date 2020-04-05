import React from 'react';
import { Box } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

import Blob from '../components/Blob';
import Option from '../components/Option';
import ViewContainer from '../components/ViewContainer';

const letsGetStartedText = `Well, Hello Sofia.
Let’s get started. You and your
team came up with this brilliant
idea.

A SMARTWATCH FOR KIDS.

But you are not sure exactly
which smartwatch to build.

Chose one:`;

const ValueProposition: React.FC = () => {

  return (
    <ViewContainer>
        <Box display="flex" justifyContent="center">
            <Blob color={orange[400]} size={44}>
                {letsGetStartedText}
            </Blob>
        </Box>
        <Box pt={4}>
            <Option index={1} img={"img"} text="Build a smartwatch to help kids develop healthy habits" />
            <Option index={2} img={"img"} text="Build a smartwatch to help parents keep an eye on their kids" />
            <Option index={3} img={"img"} text="Build a smartwatch to help kids stay motivated and track fitness" />
        </Box>
    </ViewContainer>
  );
}

export default ValueProposition;
