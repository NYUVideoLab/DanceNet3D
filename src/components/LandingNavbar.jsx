import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  useTheme, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import videolabLogo from '../assets/videolab_logo.png';

const LandingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:1190px)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldScroll = scrollY > 50;
      setIsScrolled(shouldScroll);
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileOpen(false);
    }
  };

  const navItems = [
    { label: 'Overview', action: () => scrollToSection('summary'), type: 'scroll' },
    { label: 'Press', action: () => scrollToSection('press'), type: 'scroll' },
    { label: 'Research', action: () => scrollToSection('research'), type: 'scroll' },
    { label: 'Participants', action: () => scrollToSection('participants'), type: 'scroll' },
    { label: 'Publications', action: () => scrollToSection('publications'), type: 'scroll' },
    { label: 'Dataset', action: '/dataset', type: 'link' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          color: theme.palette.primary.main,
          fontWeight: 700,
        }}
      >
        DNA-Rendering
      </Typography>
      <List>
        {navItems.map((item, index) => (
          <ListItem 
            key={index} 
            onClick={item.type === 'scroll' ? item.action : undefined}
            component={item.type === 'link' ? RouterLink : 'div'}
            to={item.type === 'link' ? item.action : undefined}
            sx={{
              cursor: 'pointer',
              borderRadius: 1,
              mx: 1,
              '&:hover': {
                backgroundColor: `${theme.palette.primary.main}15`,
              },
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ 
                textAlign: 'center',
                color: theme.palette.primary.main,
                '& .MuiListItemText-primary': {
                  fontSize: '0.95rem',
                  fontWeight: 500,
                },
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{
        backgroundColor: isScrolled 
          ? '#ffffff' 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        borderBottom: isScrolled 
          ? `1px solid ${theme.palette.primary.main}30` 
          : 'none',
        boxShadow: isScrolled 
          ? '0 2px 10px rgba(0, 0, 0, 0.1)' 
          : 'none',
        zIndex: theme.zIndex.appBar,
        borderRadius: '0 0 12px 12px',
      }}
    >
      <Toolbar>
        <Box
          component="img"
          src={videolabLogo}
          alt="Video LAB MY STUDIOS"
          sx={{
            height: '80px',
            width: 'auto',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            opacity: isScrolled ? 1 : 0.8,
            '&:hover': {
              opacity: 1,
              transform: 'scale(1.05)',
            },
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ 
              color: isScrolled ? '#57068C' : '#ffffff',
              transition: 'all 0.3s ease-in-out',
              marginLeft: 'auto',
              '&:hover': {
                backgroundColor: isScrolled 
                  ? 'rgba(87, 6, 140, 0.1)'
                  : 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 0.5, marginLeft: 'auto' }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                onClick={item.type === 'scroll' ? item.action : undefined}
                component={item.type === 'link' ? RouterLink : 'button'}
                to={item.type === 'link' ? item.action : undefined}
                sx={{
                  color: isScrolled ? '#57068C' : '#ffffff',
                  fontWeight: 600,
                  fontSize: '1.25rem',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: isScrolled 
                      ? 'rgba(87, 6, 140, 0.1)'
                      : 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: isMobile ? 'block' : 'none',
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 260,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default LandingNavbar; 