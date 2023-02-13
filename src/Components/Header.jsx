import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

function Header(props) {
    return (
        <Grid container spacing={2} className="header content-odd">
            <Grid item>
                <Img src="/logoPerson.png" className="personal-img" alt="logo" />
            </Grid>
            <Grid item>
            <List>
                {props.content.map((element,index) => <ListItem disablePadding key={element.headerTitle}>
                    <ListItemIcon> <DoubleArrowIcon fontSize="small" style={{ color: 'white' }} /> </ListItemIcon>
                    <ListItemText primary={element.headerTitle} style={{ textAlign: 'left'}}/>
                    <ListItemIcon> <HorizontalRuleIcon fontSize="small" style={{ color: 'white', margin: 'auto' }} /> </ListItemIcon>
                    <ListItemText primary={element.headerContent} style={{ textAlign: 'right'}}/>
                </ListItem>)}
            </List>
            </Grid>
        </Grid>
    );
}

export default Header;