// src/pages/Settings.js
import { Container, Typography, Paper, Box, Switch, FormControlLabel } from "@mui/material";
import { COLORS } from '../../constants/theme';

const SettingsComponent = () => {
  return (
    <Container maxWidth="xl">
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          mb: 3, 
          backgroundColor: '#f8f9fa',
          borderLeft: `4px solid ${COLORS.primary}`
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: COLORS.primary, fontWeight: 'medium' }}>
          System Settings
        </Typography>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Configure your application settings here.
          </Typography>
          
          <FormControlLabel 
            control={<Switch />} 
            label="Enable notifications" 
          />
          
          <FormControlLabel 
            control={<Switch />} 
            label="Dark mode" 
          />
          
          {/* Add more settings options here */}
        </Box>
      </Paper>
    </Container>
  );
};

export default SettingsComponent;
