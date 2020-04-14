import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { orange, green } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';

import {changeView, Views} from '../store/viewActions';
import Blob from '../components/Blob';
import InfoBar from '../components/InfoBar';
import ViewContainer from '../components/ViewContainer';

export const PickView: React.FC = () => {

    return (
        <ViewContainer header={<InfoBar />}>
            
        </ViewContainer>
    )    
}

export default PickView;
