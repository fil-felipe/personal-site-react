import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { green, orange, white } from '@mui/material/colors';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
        main: green[500],
      },
  },
});

const innerTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

export default function ThemeNesting() {
  return (
    <ThemeProvider theme={outerTheme}>
      <Checkbox defaultChecked />
      <List>
         <ListItem disablePadding>
                    <ListItemText primary="test 1" style={{ textAlign: 'left'}}>test 1</ListItemText>
                    <ListItemText primary="test 2" style={{ textAlign: 'right'}}/>
                </ListItem>
            </List>
            <Button>Primary test</Button>
    </ThemeProvider>
  );
}