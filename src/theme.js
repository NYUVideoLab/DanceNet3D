import { createTheme, alpha } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#57068C', // NYU Purple
      light: '#7B3BA3',
      dark: '#3D0461',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFB81C', // NYU Gold
      light: '#FFC94D',
      dark: '#CC9400',
      contrastText: '#000000',
    },
    accent: {
      blue: '#0066B1', // Complementary blue
      teal: '#00A3B4', // Complementary teal
      coral: '#FF6B6B', // Warm accent
      mint: '#4ECDC4', // Fresh accent
      lavender: '#9B6B9E', // Soft purple
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
      gradient: 'linear-gradient(135deg, #57068C 0%, #0066B1 100%)',
    },
    text: {
      primary: '#2D3748',
      secondary: '#4A5568',
      disabled: '#A0AEC0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#57068C',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      color: '#57068C',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      color: '#57068C',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      color: '#57068C',
      fontWeight: 600,
    },
    h5: {
      color: '#57068C',
      fontWeight: 600,
    },
    h6: {
      color: '#57068C',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.125rem', // 18px instead of default 16px
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '1rem', // 16px (keep default for smaller text)
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          transition: 'all 0.15s ease-in-out',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 4px 12px rgba(87, 6, 140, 0.2)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease-in-out',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 8px 30px rgba(87, 6, 140, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
        },
      },
    },
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.05)',
    '0px 6px 12px rgba(0, 0, 0, 0.05)',
    '0px 8px 16px rgba(0, 0, 0, 0.05)',
    '0px 10px 20px rgba(0, 0, 0, 0.05)',
    '0px 12px 24px rgba(0, 0, 0, 0.05)',
    '0px 14px 28px rgba(0, 0, 0, 0.05)',
    '0px 16px 32px rgba(0, 0, 0, 0.05)',
    '0px 18px 36px rgba(0, 0, 0, 0.05)',
    '0px 20px 40px rgba(0, 0, 0, 0.05)',
    '0px 22px 44px rgba(0, 0, 0, 0.05)',
    '0px 24px 48px rgba(0, 0, 0, 0.05)',
    '0px 26px 52px rgba(0, 0, 0, 0.05)',
    '0px 28px 56px rgba(0, 0, 0, 0.05)',
    '0px 30px 60px rgba(0, 0, 0, 0.05)',
    '0px 32px 64px rgba(0, 0, 0, 0.05)',
    '0px 34px 68px rgba(0, 0, 0, 0.05)',
    '0px 36px 72px rgba(0, 0, 0, 0.05)',
    '0px 38px 76px rgba(0, 0, 0, 0.05)',
    '0px 40px 80px rgba(0, 0, 0, 0.05)',
    '0px 42px 84px rgba(0, 0, 0, 0.05)',
    '0px 44px 88px rgba(0, 0, 0, 0.05)',
    '0px 46px 92px rgba(0, 0, 0, 0.05)',
    '0px 48px 96px rgba(0, 0, 0, 0.05)',
  ],
});

export default theme; 