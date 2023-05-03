import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector( state => state.auth ) ;
    const { notes } = useSelector( state => state.journal ) ;

    return (

        <Box
            component={'nav'}
            sx={{ 
                width: { sm: drawerWidth }, 
                flexShrink: { sm: 0 }, 
                               
            }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#0e0e0e0e' },
                    // opacity: {xs: 0, sm: 1} 
                                    
                }}
            >
                <Toolbar >
                    <Typography variant='h6' noWrap component={'div'} >
                        { displayName }
                    </Typography>
                </Toolbar>
                <Divider/>

                <List  >
                    {
                        notes.map( note => (
                            <ListItem  key={ note.id } sx={{ padding: 0 }}>
                                <ListItemButton sx={{ padding: 1, ml: 1, mr: 1, mb: 0.5 }} >
                                    <ListItemIcon sx={{ minWidth: 35 }}>
                                        <TurnedInNot sx={{ color: 'primary.main' }}/>
                                    </ListItemIcon>
                                    <Grid container flexDirection={'column'}>
                                        <ListItemText primary={ note.title } sx={{ mb: 0 }} />
                                        <ListItemText secondary={ note.body } />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ) ) 
                    }
                </List>
                
            </Drawer>

        </Box>

    )
}
