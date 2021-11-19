import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';



export default function BadgeOverlap({Text, icon}) {
  return (
    <Stack spacing={3} direction="row">
      {Text}
      <Badge color="error" badgeContent="" overlap="circular" variant="dot" horizontal="left">
        {icon}
      </Badge>
    </Stack>
  );
}
