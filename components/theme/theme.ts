import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#2F6F73",
      light: "#5D9698",
      dark: "#17484C",
    },
    secondary: {
      main: "#E6B17E",
      light: "#F3D1AB",
      dark: "#B88255",
    },
    background: {
      default: "#F6FBF8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#233331",
      secondary: "#5C6A66",
    },
    success: {
      main: "#6FA06B",
    },
  },
  shape: {
    borderRadius: 24,
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 700,
      fontSize: "clamp(2.45rem, 6vw, 5.6rem)",
      lineHeight: 0.95,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 700,
      fontSize: "clamp(1.95rem, 4vw, 3.6rem)",
      lineHeight: 1,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "clamp(1.18rem, 2vw, 1.75rem)",
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
    },
    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 24,
          minHeight: 44,
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 22,
          boxShadow: "0 24px 60px rgba(31, 63, 61, 0.08)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;
