import React from 'react';  
import { 
    Typography, 
    Container, 
    Paper, 

} from "@mui/material";

function HomeContent() {
  return (
    <Container maxWidth="xl">
      {/* Welcome Section */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          mb: 3, 
          backgroundColor: '#f8f9fa',
          borderLeft: '4px solid #481474'
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: '#481474', fontWeight: 'medium' }}>
          Welcome to BISU Inventory Management System
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Supply and Property Management Office
        </Typography>
      </Paper>
  
    </Container>
  );
}

export default HomeContent;
  