import React from 'react';
import { 
    Drawer, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Box, 
    Typography 
} from "@mui/material";

const Sidebar = React.forwardRef(({ isOpen, onClose, activeTab, setActiveTab, menuItems }, ref) => {
  return (
    <Drawer 
      variant="temporary"
      open={isOpen}
      onClose={onClose}
      sx={{ 
        '& .MuiDrawer-paper': { 
          width: 240, 
          boxSizing: "border-box", 
          backgroundColor: "#481474",
          color: "#ffffff" 
        } 
      }}
    >
      {/* Header Section */}
      <Box sx={{ p: 2, mb: 2 }}>
        <Box sx={{ 
          display: "flex", 
          alignItems: "center",
          gap: 2
        }}>
          <img 
            src="/LogoBISU.png" 
            alt="BISU Logo" 
            style={{ 
              width: '45px', 
              height: '45px',
            }} 
          />
          <Typography 
            sx={{ 
              color: "#ffcc04",
              fontSize: '1rem',
              fontWeight: 'bold',
              lineHeight: 1.3,
              letterSpacing: '0.5px'
            }}
          >
            Bohol Island State University
          </Typography>
        </Box>
      </Box>

      {/* Nav Menu */}
      <List>
        {menuItems.map(({ text, icon, key }) => (
          <ListItem 
            button 
            key={key} 
            onClick={() => {
              setActiveTab(text);
              onClose();
            }}
            sx={{ 
              '&:hover': { backgroundColor: "#351058" },
              backgroundColor: activeTab === text ? "#351058" : "transparent"
            }}
          >
            <ListItemIcon sx={{ color: "#ffcc04" }}>{icon}</ListItemIcon>
            <ListItemText primary={text} sx={{ color: "#ffffff" }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
});

// display name for debug
Sidebar.displayName = 'Sidebar';

export default Sidebar;
