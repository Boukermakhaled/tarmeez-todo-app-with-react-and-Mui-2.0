import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';
export default function SimpleSnackbar({open, content}) {

  return (
    <div>
      <Snackbar open={open}>
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {content}
        </Alert>
      </Snackbar>
    </div>
  );
}
