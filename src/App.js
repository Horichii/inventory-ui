import { useState } from "react";
import { 
  Person, 
  Settings
} from "@mui/icons-material";
import { 
  Box, 
  CssBaseline, 
  Typography, 
  ThemeProvider,
  createTheme
} from "@mui/material";

import HomeContent from './components/dashboard/HomeContent';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import { COLORS } from './constants/theme';

// Menu items configuration (now only Profile and Settings)
const menuItems = [
  { text: "Profile", icon: <Person />, key: "Profile" },
  { text: "Settings", icon: <Settings />, key: "Settings" },
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
          {activeTab === "Home" ? (
            <HomeContent />   // should show Welcome message
          ) : (
          <>
            <Typography variant="h4" fontWeight="bold" color={COLORS.primary}>
              {activeTab}
            </Typography>
          </>
        )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
