import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'

export const SideBar = ({ drawerWidth = 240 }) => {
    return (

        <Box
            component={'nav'}
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component={'div'} >
                        Lucas Fiorentino
                    </Typography>
                </Toolbar>
                <Divider/>

                <List>
                    {
                        [ 'Enero', 'Febrero', 'Marzo', 'Abril' ].map( text => (
                            <ListItem  key={text}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container flexDirection={'column'}>
                                        <ListItemText primary={ text } />
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
