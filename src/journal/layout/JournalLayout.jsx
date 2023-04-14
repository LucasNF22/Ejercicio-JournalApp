import { Box } from "@mui/system"
import { Navbar, SideBar } from "../copmonents";
import { Toolbar } from "@mui/material";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
        
        <Navbar drawerWidth={ drawerWidth } />
        
        <SideBar drawerWidth={ drawerWidth } />
        
        <Box
            component='main'
            sx={{ flexGrow: 1, p: 2 }}
        >
            <Toolbar/>

            { children }

        </Box>
    </Box>
  )
}

