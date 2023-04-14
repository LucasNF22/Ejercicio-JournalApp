import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors"


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#a68069' //'#a68069' //#735945'
        },
        secondary: {
            main: '#5f4633'
        },
        error: {
            main: red.A400
        }
    }
})