import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    cssVariables: { colorSchemeSelector: `class` },
    colorSchemes: {
        light: {
            palette: {
                primary: { main: `#1976d2` },
                secondary: { main: `#dc004e` },
            },
        },
        dark: {
            palette: {
                primary: { main: `#1976d2` },
                secondary: { main: `#dc004e` },
            },
        },
    },
    typography: { fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif` },
});

export default theme;
