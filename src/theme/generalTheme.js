import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors"


export const generalTheme = createTheme({
    palette: {
        primary: {
            main: '#2b7a78'
        },
        secondary: {
            main: '#3aafa9'
        },
        error: {
            main: red.A400
        }
    }
})