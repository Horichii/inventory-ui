// src/App.js
import { useState } from "react";
import { 
  Person, 
  Settings as SettingsIcon
} from "@mui/icons-material";
import { 
  Box, 
  CssBaseline, 
  Typography, 
  ThemeProvider,
  createTheme
} from "@mui/material";

// Import pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import { COLORS } from './constants/theme';

// Define menuItems here (or import from constants)
const menuItems = [
  { text: "Profile", icon: <Person />, key: "Profile" },
  { text: "Settings", icon: <SettingsIcon />, key: "Settings" }
];

// Create theme
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  }
});

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to render the correct page based on activeTab
  const renderPage = () => {
    switch(activeTab) {
      case "Home":
        return <Home />;
      case "Profile":
        return <Profile />;
      case "Settings":
        return <Settings />;
      default:
        return (
          <>
            <Typography variant="h4" fontWeight="bold" color={COLORS.primary}>
              {activeTab}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
              Content for {activeTab} section will go here
            </Typography>
          </>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: "flex",
        backgroundColor: COLORS.background,
        minHeight: '100vh'
      }}>
        <CssBaseline />
        
        <Navbar 
          onMenuClick={() => setIsDrawerOpen(!isDrawerOpen)} 
          setActiveTab={setActiveTab}
        />

        <Sidebar 
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          menuItems={menuItems}
        />

        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            p: 3, 
            ml: 0,
            mt: '64px'
          }}
        >
          {renderPage()}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
