import React from 'react';
import { purple } from '@material-ui/core/colors'

import BlobListItem from './BlobListItem';

interface TeamMemberProps {
    img: string;
    name: string
    text: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, img, text }) => {  

  return (
    <BlobListItem
        img={img}
        header={name}
        text={text}
        size={16}
        color={purple[400]}
    />
  )
}

export default TeamMember;
