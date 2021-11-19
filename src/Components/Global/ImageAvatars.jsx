import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import avatarimage from '../Assets/Global/Layer 1.png';

export default function ImageAvatars({name, size}) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt={name}
        src={avatarimage}
        sx={size}
      />
    </Stack>
  );
}
