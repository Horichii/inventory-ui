import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  InputBase,
  styled,
  Container,
  IconButton
} from '@mui/material';
import { Menu as MenuIcon } from "@mui/icons-material";
import { COLORS } from '../../constants/theme';

const Search = styled('div')({
  position: 'relative',
  borderRadius: 4,
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  marginLeft: 0,
  width: '100%',
  maxWidth: '200px'
});

const StyledInputBase = styled(InputBase)({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '8px 8px 8px 16px',
  },
});

const Navbar = ({ onMenuClick, setActiveTab }) => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: COLORS.primary,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: 'none',
        borderBottom: `3px solid ${COLORS.accent}`,
        backgroundImage: "url('/purplebg.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ minHeight: '64px', px: '0!important' }}>
          {/* Logo and GOVPH section */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            mr: 4
          }}>
            <img 
              src="/LogoBISU.png" 
              alt="BISU Logo" 
              style={{ 
                width: '40px', 
                height: '40px',
                marginTop: '-8px'
              }} 
            />
            <Button 
              color="inherit" 
              sx={{ 
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}
            >
              GOVPH
            </Button>
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', gap: 1, flexGrow: 1 }}>
            <Button 
              component="button"  // Explicitly set as button
              color="inherit"
              onClick={() => setActiveTab("Home")}
              sx={{ 
                cursor: 'pointer',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              Home
            </Button>
            <Button color="inherit">Pre-Register</Button>
            <Button color="inherit">Inventory</Button>
            <Button color="inherit">Inventory Report</Button>
            <Button color="inherit">About Us</Button>
          </Box>

          {/* Search and Menu Icon section */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            position: 'relative',
            zIndex: 1300
          }}>
            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={onMenuClick}
              sx={{
                color: COLORS.accent,
                '&:hover': {
                  backgroundColor: COLORS.secondary,
                },
                display: 'flex',
                visibility: 'visible'
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
