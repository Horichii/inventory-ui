import React from 'react';  // Add this import
import { 
    Typography, 
    Container, 
    Grid, 
    Paper, 
    Card, 
    CardContent 
} from "@mui/material";

// Change the arrow function declaration
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
  
      {/* Stats Cards */}
      {/* <Grid container spacing={3}> */}
        {/* Total Items */}
        {/* <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#481474', color: 'white' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Total Items</Typography>
              <Typography variant="h3">247</Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Current inventory count
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}
  
        {/* Pending Requests */}
        {/* <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#5c1b96', color: 'white' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Pending Requests</Typography>
              <Typography variant="h3">12</Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Awaiting approval
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}
  
        {/* Low Stock Items */}
        {/* <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#702eb3', color: 'white' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Low Stock Items</Typography>
              <Typography variant="h3">8</Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Items below threshold
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
  
      {/* Recent Activities */}
      {/* <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#481474' }}>
          Recent Activities
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ py: 1 }}>
              • New inventory items added - Office Supplies (2 hours ago)
            </Typography>
            <Typography variant="body1" sx={{ py: 1 }}>
              • Stock update - Laboratory Equipment (4 hours ago)
            </Typography>
            <Typography variant="body1" sx={{ py: 1 }}>
              • Pending request from Engineering Department (1 day ago)
            </Typography>
          </Grid>
        </Grid>
      </Paper> */}
    </Container>
  );
}

export default HomeContent;
  