// src/components/dashboard/ProfileComponent.js
import { Container, Typography, Paper, Box } from "@mui/material";
import { COLORS } from '../../constants/theme';

const ProfileComponent = () => {
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
          User Profile
        </Typography>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1">
            Welcome to your profile page.
          </Typography>
          {/* Add more profile content here */}
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfileComponent;  // Ensure this export is present
