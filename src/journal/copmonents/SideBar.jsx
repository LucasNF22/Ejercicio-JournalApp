import { useSelector } from 'react-redux';
import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { SideBarItem } from './SideBarItem';

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
                            <SideBarItem { ...note } key={ note.id }/>
                        )) 
                    }
                </List>
                
            </Drawer>
        </Box>

    )
}
