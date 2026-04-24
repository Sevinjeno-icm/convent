import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#7A3E2B",
      light: "#A75E43",
      dark: "#542819",
    },
    secondary: {
      main: "#D7B98E",
      light: "#E8D6B6",
      dark: "#B18F62",
    },
    background: {
      default: "#FCF8F3",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2B211A",
      secondary: "#5F534A",
    },
    success: {
      main: "#4F7B62",
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
      fontSize: "clamp(3rem, 6vw, 5.6rem)",
      lineHeight: 0.95,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 700,
      fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
      lineHeight: 1,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "clamp(1.35rem, 2vw, 1.75rem)",
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1.05rem",
      lineHeight: 1.75,
    },
    body2: {
      fontSize: "0.98rem",
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
          minHeight: 48,
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          boxShadow: "0 24px 60px rgba(43, 33, 26, 0.08)",
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
