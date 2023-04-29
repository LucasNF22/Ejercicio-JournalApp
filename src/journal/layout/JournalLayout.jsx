import { Box } from "@mui/system"
import { Navbar, SideBar } from "../copmonents";
import { Toolbar } from "@mui/material";

const drawerWidth = 220;

export const JournalLayout = ({ children }) => {
  return (
    <Box 
      sx={{ display: 'flex' }}
      className="animate__animated animate__fadeIn animate__faster"
    >
        
        <Navbar drawerWidth={ drawerWidth } />
        
        <SideBar drawerWidth={ drawerWidth } />
        
        <Box
          component='main'
          sx={{ flexGrow: 1, p: 1.5 }}
        >
          <Toolbar/>

          { children }

        </Box>
    </Box>
  )
}

