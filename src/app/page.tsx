"use client";
import { 
    Button, 
    Card, 
    CardContent, 
    Typography, 
    Alert, 
    Container,
    Chip,
    Switch,
    FormControlLabel
} from "@mui/material";
import { useColorScheme, ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";

const COLOR_LIST = [
    { name: `Blue`, value: `#1976d2` },
    { name: `Red`, value: `#dc004e` },
    { name: `Green`, value: `#2e7d32` },
    { name: `Purple`, value: `#9c27b0` },
    { name: `Orange`, value: `#ff9800` },
    { name: `Teal`, value: `#00897b` },
    { name: `Pink`, value: `#e91e63` },
];

export default function Home() {
    const { mode, setMode } = useColorScheme();
    const [color, setColor] = React.useState(COLOR_LIST[0].value);
    const dynamicTheme = createTheme({
        colorSchemes: {
            light: {
                palette: {
                    primary: { main: color },
                    secondary: { main: color },
                },
            },
            dark: {
                palette: {
                    primary: { main: color },
                    secondary: { main: color },
                },
            },
        },
        typography: { fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif` },
    });

    const handleModeChange = () => {
        setMode(mode === `dark` ? `light` : `dark`);
    };

    // Handle initial undefined mode
    if (!mode) {
        return null;
    }

    return (
        <ThemeProvider theme={dynamicTheme}>
            <div className="min-h-screen py-16">
                <Container maxWidth="lg">
                    <div className="flex justify-end mb-8">
                        <FormControlLabel
                            control={
                                <Switch 
                                    checked={mode === `dark`} 
                                    onChange={handleModeChange}
                                    color="primary"
                                />
                            }
                            label={`${mode === `dark` ? `Dark` : `Light`} Mode`}
                        />
                    </div>

                    <Typography variant="h2" component="h1" className="mb-16 text-center">
                        MUI v7 + Tailwind CSS v4 Integration
                    </Typography>
                    
                    <Alert severity="success" className="mb-12">
                        🎉 MUI v7 is successfully integrated with Tailwind CSS v4!
                    </Alert>

                    <div className="space-y-16">
                        {/* Demo Card 1 */}
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="h5" className="mb-8">
                                    Material UI Components
                                </Typography>
                                <Typography variant="body1" className="mb-8">
                                    This card showcases MUI components with CSS theme variables enabled.
                                </Typography>
                                <div className="flex gap-8">
                                    <Button variant="contained" color="primary">
                                        Primary Button
                                    </Button>
                                    <Button variant="outlined" color="secondary">
                                        Secondary Button
                                    </Button>
                                    <Button variant="text">
                                        Text Button
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Demo Card 2 */}
                        <Card elevation={3} sx={{ bgcolor: `action.hover` }}>
                            <CardContent>
                                <Typography variant="h5" className="mb-8">
                                    MUI Theme Styling
                                </Typography>
                                <Typography variant="body1" className="mb-8">
                                    This card uses MUI&apos;s theming system for styling.
                                </Typography>
                                <div className="flex gap-8 justify-center mb-8">
                                    {COLOR_LIST.map((c) => (
                                        <Button
                                            key={c.value}
                                            variant={color === c.value ? `contained` : `outlined`}
                                            onClick={() => setColor(c.value)}
                                            sx={{
                                                minWidth: 0,
                                                width: 40,
                                                height: 40,
                                                p: 0,
                                                borderRadius: `50%`,
                                                bgcolor: c.value,
                                                color: `#fff`,
                                                border: color === c.value ? 2 : 1,
                                                borderColor: color === c.value ? `primary.main` : `divider`,
                                                boxShadow: color === c.value ? 3 : 0,
                                                transition: `box-shadow 0.2s`,
                                            }}
                                            aria-label={c.name}
                                        >
                                            {color === c.value ? `✓` : ``}
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Demo Card 3 */}
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="h5" className="mb-8" color="success.main">
                                    Mixed Styling Example
                                </Typography>
                                <Typography variant="body1" className="mb-8">
                                    Notice how MUI components work seamlessly.
                                </Typography>
                                <div className="flex gap-4 flex-wrap">
                                    <Chip 
                                        label="Blue Badge" 
                                        color="primary" 
                                        size="small" 
                                    />
                                    <Chip 
                                        label="Green Badge" 
                                        color="success" 
                                        size="small" 
                                    />
                                    <Chip 
                                        label="Gray Badge" 
                                        color="default" 
                                        size="small" 
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Demo Card 4 */}
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="h5" className="mb-8">
                                    Responsive Design
                                </Typography>
                                <Typography variant="body1" className="mb-8">
                                    Using MUI&apos;s responsive system for elegant layouts
                                </Typography>
                                <div className="space-y-8">
                                    <div className="p-8 bg-paper rounded border border-divider">
                                        Default styling
                                    </div>
                                    <div className="p-8 bg-paper rounded border border-divider shadow-md">
                                        Medium shadow
                                    </div>
                                    <div className="p-8 bg-paper rounded border border-divider shadow-lg">
                                        Large shadow
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </div>
        </ThemeProvider>
    );
}
