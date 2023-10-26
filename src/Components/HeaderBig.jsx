


function HeaderBig(props) {
    return (
        <div class="header-big">
            <img src="/logoPerson.png" class="personal-img" alt="logo" />
            {/* <h4>{props.Content[0].headerTitle}</h4> */}
                <div class="header-right">
                    {props.Content.map((element,index) => 
                        <div class="header-detail">
                            <h4>{element.headerTitle}</h4>
                            <h4>{element.headerContent}</h4>
                        </div>)}
                </div>
                
                {/* <ListItem disablePadding key={element.headerTitle}>
                    <ListItemIcon> <DoubleArrowIcon fontSize="small" style={{ color: 'white' }} /> </ListItemIcon>
                    <ListItemText primary={element.headerTitle} style={{ textAlign: 'left'}}/>
                    <ListItemIcon> <HorizontalRuleIcon fontSize="small" style={{ color: 'white', margin: 'auto' }} /> </ListItemIcon>
                    <ListItemText primary={element.headerContent} style={{ textAlign: 'right'}}/>
                </ListItem>)} */}
        </div>
    );
}

export default HeaderBig;