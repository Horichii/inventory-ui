const HomeContent = () => {
  return (
    <Container maxWidth="xl">
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          mb: 3, 
          backgroundColor: '#f8f9fa',
          borderLeft: `4px solid ${COLORS.primary}`,
          backgroundImage: "url('/purplebg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: COLORS.white, fontWeight: 'medium' }}>
          Welcome to BISU Inventory Management System
        </Typography>
        <Typography variant="body1" sx={{ color: COLORS.white }}>
          Supply and Property Management Office
        </Typography>
      </Paper>
    </Container>
  );
};
