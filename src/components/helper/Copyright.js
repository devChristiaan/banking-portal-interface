import React from 'react';
import { Typography } from '@material-ui/core'

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Banking Portal
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}