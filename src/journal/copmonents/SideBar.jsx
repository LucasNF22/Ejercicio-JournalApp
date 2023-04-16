import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'

export const SideBar = ({ drawerWidth = 240 }) => {
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
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#0e0e0e0e', },                    
                }}
            >
                <Toolbar >
                    <Typography variant='h6' noWrap component={'div'} >
                        Lucas Fiorentino
                    </Typography>
                </Toolbar>
                <Divider/>

                <List  >
                    {
                        [ 'Enero', 'Febrero', 'Marzo', 'Abril' ].map( text => (
                            <ListItem  key={text} sx={{ padding: 0 }}>
                                <ListItemButton sx={{ padding: 1, ml: 1, mr: 1, mb: 0.5 }} >
                                    <ListItemIcon sx={{ minWidth: 35 }}>
                                        <TurnedInNot sx={{ color: 'primary.main' }}/>
                                    </ListItemIcon>
                                    <Grid container flexDirection={'column'}>
                                        <ListItemText primary={ text } sx={{ mb: 0 }} />
                                        <ListItemText secondary={ 'bla bla bla bla bla' } />
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
