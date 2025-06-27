"use client";
import { 
    Button, 
    Card, 
    CardContent, 
    Typography, 
    AppBar,
    Toolbar,
    Switch,
    FormControlLabel,
    TextField,
    Slider,
    Checkbox,
    Radio,
    RadioGroup,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    Container,
    Link
} from "@mui/material";
import { useColorScheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import * as React from "react";

const COLOR_LIST = [
    { name: "Blue", value: "#1976d2" },
    { name: "Red", value: "#dc004e" },
    { name: "Green", value: "#2e7d32" },
    { name: "Purple", value: "#9c27b0" },
    { name: "Orange", value: "#ff9800" },
    { name: "Teal", value: "#00897b" },
    { name: "Pink", value: "#e91e63" },
];

const SOLAR_ICONS = [
    { name: "solar:home-2-bold-duotone", label: "Home" },
    { name: "solar:user-bold-duotone", label: "User" },
    { name: "solar:settings-bold-duotone", label: "Settings" },
    { name: "solar:heart-bold-duotone", label: "Heart" },
    { name: "solar:star-bold-duotone", label: "Star" },
    { name: "solar:bell-bold-duotone", label: "Bell" },
    { name: "solar:mailbox-bold-duotone", label: "Mail" },
    { name: "solar:shield-check-bold-duotone", label: "Shield" },
    { name: "solar:chart-bold-duotone", label: "Chart" },
    { name: "solar:calendar-bold-duotone", label: "Calendar" },
    { name: "solar:folder-bold-duotone", label: "Folder" },
    { name: "solar:camera-bold-duotone", label: "Camera" },
];

export default function Home() {
    const { mode, setMode } = useColorScheme();
    const [color, setColor] = React.useState(COLOR_LIST[0].value);
    const [sliderValue, setSliderValue] = React.useState(30);
    const [checkedValue, setCheckedValue] = React.useState(true);
    const [radioValue, setRadioValue] = React.useState("option1");
    const [selectValue, setSelectValue] = React.useState("option1");

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
        typography: { fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" },
    });

    const handleModeChange = () => {
        setMode(mode === "dark" ? "light" : "dark");
    };

    // Handle initial undefined mode
    if (!mode) {
        return null;
    }

    return (
        <ThemeProvider theme={dynamicTheme}>
            {/* App Bar */}
            <AppBar position="static" elevation={0} className="border-b border-divider">
                <Container maxWidth="xl">
                    <Toolbar className="justify-between px-0">
                        <div className="flex items-center gap-3">
                            <Icon icon="solar:code-2-bold-duotone" className="text-2xl" style={{ color }} />
                            <Typography variant="h6" component="div">
                                MUI × Next.js × Tailwind Template
                            </Typography>
                        </div>
                        <FormControlLabel
                            control={
                                <Switch 
                                    checked={mode === "dark"} 
                                    onChange={handleModeChange}
                                    color="default"
                                />
                            }
                            label={mode === "dark" ? "Dark" : "Light"}
                            className="text-white"
                        />
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Main Content */}
            <div className="min-h-screen bg-background">
                <div className="max-w-7xl mx-auto p-6">
                    {/* Hero Section */}
                    <div className="text-center py-16">
                        <Typography variant="h2" component="h1" className="mb-6 font-bold">
                            Beautiful SaaS Template
                        </Typography>
                        <Typography variant="h5" className="mb-8 text-gray-600 max-w-2xl mx-auto">
                            A modern template combining Material UI components, Solar icons, and Tailwind CSS styling
                        </Typography>
                        
                        {/* Dynamic Theme Colors */}
                        <div className="flex justify-center gap-3 mb-8">
                            {COLOR_LIST.map((c) => (
                                <button
                                    key={c.value}
                                    onClick={() => setColor(c.value)}
                                    className={`w-8 h-8 rounded-full transition-all duration-200 ${
                                        color === c.value ? "ring-4 ring-offset-2 ring-current scale-110" : "hover:scale-105"
                                    }`}
                                    style={{ backgroundColor: c.value }}
                                    aria-label={c.name}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Material UI Components Showcase */}
                        <div>
                            <Card elevation={3} className="h-full">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-3 mb-8">
                                        <Icon icon="solar:widget-2-bold-duotone" className="text-3xl" style={{ color }}/>
                                        <Typography variant="h4" component="h2">
                                            MUI Components
                                        </Typography>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        {/* Buttons */}
                                        <div>
                                            <Typography variant="h6" className="mb-3">Buttons</Typography>
                                            <div className="flex gap-3 flex-wrap">
                                                <Button variant="contained" startIcon={<Icon icon="solar:play-bold-duotone" color="inherit" />}>
                                                    Primary
                                                </Button>
                                                <Button variant="outlined" startIcon={<Icon icon="solar:settings-bold-duotone" color="inherit" />}>
                                                    Outlined
                                                </Button>
                                                <Button variant="text" startIcon={<Icon icon="solar:info-circle-bold-duotone" color="inherit" />}>
                                                    Text
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Form Controls */}
                                        <div>
                                            <Typography variant="h6" className="mb-3">Form Controls</Typography>
                                            <div className="space-y-4">
                                                <TextField 
                                                    fullWidth 
                                                    label="Text Input" 
                                                    variant="outlined"
                                                    placeholder="Enter some text..."
                                                />
                                                
                                                <div>
                                                    <Typography variant="body2" className="mb-2">Slider</Typography>
                                                    <Slider
                                                        value={sliderValue}
                                                        onChange={(_, newValue) => setSliderValue(newValue as number)}
                                                        valueLabelDisplay="auto"
                                                        color="primary"
                                                    />
                                                </div>

                                                <div className="flex items-center gap-4">
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox 
                                                                checked={checkedValue}
                                                                onChange={(e) => setCheckedValue(e.target.checked)}
                                                                color="primary"
                                                            />
                                                        }
                                                        label="Checkbox"
                                                    />
                                                    
                                                    <FormControl>
                                                        <RadioGroup
                                                            row
                                                            value={radioValue}
                                                            onChange={(e) => setRadioValue(e.target.value)}
                                                        >
                                                            <FormControlLabel value="option1" control={<Radio color="primary" />} label="Option 1" />
                                                            <FormControlLabel value="option2" control={<Radio color="primary" />} label="Option 2" />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </div>

                                                <FormControl fullWidth>
                                                    <InputLabel>Select Option</InputLabel>
                                                    <Select
                                                        value={selectValue}
                                                        label="Select Option"
                                                        onChange={(e) => setSelectValue(e.target.value)}
                                                    >
                                                        <MenuItem value="option1">Option 1</MenuItem>
                                                        <MenuItem value="option2">Option 2</MenuItem>
                                                        <MenuItem value="option3">Option 3</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Solar Icons Showcase */}
                        <div>
                            <Card elevation={3} className="h-full">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-3 mb-8">
                                        <Icon icon="solar:star-bold-duotone" className="text-3xl" style={{ color }} />
                                        <Typography variant="h4" component="h2">
                                            Solar Icons
                                        </Typography>
                                    </div>
                                    
                                    <Typography variant="body1" className="mb-6 text-gray-600">
                                        Duotone bold icons from the Solar icon set by 480 Design
                                    </Typography>

                                    <div className="grid grid-cols-3 gap-4">
                                        {SOLAR_ICONS.map((icon) => (
                                            <div key={icon.name} className="flex flex-col items-center p-4 rounded-lg hover:bg-action-hover transition-colors">
                                                <Icon icon={icon.name} className="text-4xl mb-2" style={{ color }} />
                                                <Typography variant="caption" className="text-center">
                                                    {icon.label}
                                                </Typography>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-divider">
                                        <Typography variant="body2" className="text-gray-500 text-center">
                                            480+ icons available in bold, linear, and duotone styles
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Interactive Demo Showcase */}
                    <div className="mt-16">
                        <div className="text-center mb-8">
                            <Typography variant="h4" component="h2" className="mb-4">
                                Interactive Components
                            </Typography>
                            <Typography variant="body1" className="text-gray-600">
                                Real-time theme switching with smooth animations
                            </Typography>
                        </div>
                            
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Animated Card 1 */}
                            <Card elevation={2} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                                <Icon icon="solar:rocket-bold-duotone" className="text-5xl mb-4" style={{ color }} />
                                <Typography variant="h6" className="mb-2">
                                    Lightning Fast
                                </Typography>
                                <Typography variant="body2" className="text-gray-500">
                                    Optimized for performance and speed
                                </Typography>
                            </Card>

                            {/* Animated Card 2 */}
                            <Card elevation={2} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                                <Icon icon="solar:palette-bold-duotone" className="text-5xl mb-4" style={{ color }} />
                                <Typography variant="h6" className="mb-2">
                                    Theme Magic
                                </Typography>
                                <Typography variant="body2" className="text-gray-500">
                                    Dynamic theming with color harmony
                                </Typography>
                            </Card>

                            {/* Animated Card 3 */}
                            <Card elevation={2} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
                                <Icon icon="solar:magic-stick-3-bold-duotone" className="text-5xl mb-4" style={{ color }} />
                                <Typography variant="h6" className="mb-2">
                                    Developer Experience
                                </Typography>
                                <Typography variant="body2" className="text-gray-500">
                                    Built for productivity and joy
                                </Typography>
                            </Card>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="mt-24 py-8 border-t border-divider">
                        <Container maxWidth="xl">
                            <div className="text-center">
                                <Typography variant="body2" className="text-gray-500">
                                    Developed by{" "}
                                    <Link 
                                        href="https://github.com/DollarAkshay" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline font-medium"
                                    >
                                        @DollarAkshay
                                    </Link>
                                </Typography>
                            </div>
                        </Container>
                    </footer>
                </div>
            </div>
        </ThemeProvider>
    );
}
