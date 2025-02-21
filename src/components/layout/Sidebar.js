import { 
  Drawer, 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText 
} from "@mui/material";
import { COLORS } from '../../constants/theme';

const Sidebar = ({ isOpen, onClose, activeTab, setActiveTab, menuItems }) => {
  return (
    <Drawer 
      variant="temporary"
      anchor="right"  // make it open from right
      open={isOpen}
      onClose={onClose}
      sx={{ 
        zIndex: 1400,
        '& .MuiDrawer-paper': { 
          width: 280, 
          boxSizing: "border-box", 
          backgroundColor: COLORS.primary,
          color: COLORS.white,
          backgroundImage: "url('/purplebg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          right: 0,  // to make sure sidebar is on right side
          left: 'auto',  // override default left position
        } 
      }}
    >
      <Box sx={{ p: 2, mb: 2 }}>
        <Box sx={{ 
          display: "flex", 
          alignItems: "center",
          gap: 2
        }}>
          <img 
            src="/LogoBISU.png" 
            alt="BISU Logo" 
            style={{ width: '45px', height: '45px' }} 
          />
          <Typography 
            sx={{ 
              color: COLORS.accent,
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
              '&:hover': { backgroundColor: COLORS.secondary },
              backgroundColor: activeTab === text ? COLORS.secondary : "transparent"
            }}
          >
            <ListItemIcon sx={{ color: COLORS.accent }}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
