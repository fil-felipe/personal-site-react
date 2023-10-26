


function HeaderBig(props) {
    return (
        <div class="header-big">
            <div class="header-left">
            <img src="/logoPerson.png" class="personal-img" alt="logo" />
            </div>
                <div class="header-right">
                    {props.Content.map((element,index) => 
                        <div class="header-detail">
                            <h4 class="header-detail-title">{element.headerTitle}</h4>
                            <p>{element.headerContent}</p>
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