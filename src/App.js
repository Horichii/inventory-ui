// src/App.js
import { useState } from "react";
import { 
  Home, Person, Settings, Info, ListAlt, 
  Inventory2, Menu as MenuIcon 
} from "@mui/icons-material";
import { 
  Box, 
  CssBaseline, 
  Typography, 
  IconButton 
} from "@mui/material";

// Import components
import HomeContent from './components/HomeContent';
import Sidebar from './components/Sidebar';

// Menu items configuration
const menuItems = [
  { text: "Home", icon: <Home />, key: "Home" },
  { text: "Pre-Register", icon: <Person />, key: "Pre-Register" },
  { text: "Inventory", icon: <Inventory2 />, key: "Inventory" },
  { text: "Inventory Report", icon: <ListAlt />, key: "Inventory Report" },
  { text: "Profile", icon: <Person />, key: "Profile" },
  { text: "Settings", icon: <Settings />, key: "Settings" },
  { text: "About Us", icon: <Info />, key: "About Us" },
];

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      
      {/* Menu Toggle Button */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        sx={{
          position: 'fixed',
          left: 16,
          top: 16,
          zIndex: 1200,
          backgroundColor: '#481474',
          color: '#ffcc04',
          '&:hover': {
            backgroundColor: '#351058',
          }
        }}
      >
        <MenuIcon />
      </IconButton>

      <Sidebar 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        menuItems={menuItems}
      />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 0 }}>
        {activeTab === "Home" ? (
          <HomeContent />
        ) : (
          <>
            <Typography variant="h4" fontWeight="bold" color="#481474">{activeTab}</Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
              Content for {activeTab} section will go here
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
}

export default App;
