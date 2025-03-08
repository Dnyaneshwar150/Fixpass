"use client"

import { createTheme } from "@mui/material";

import { CSS_COLORS, FONT_WEIGHTS } from "./constants";

const theme = createTheme({
  typography: {
    // base font size is 16px, so 1 rem = 16px
    fontFamily: `Poppins, sans-serif`,
    fontWeightLight: FONT_WEIGHTS.LIGHT,
    fontWeightRegular: FONT_WEIGHTS.REGULAR,
    fontWeightMedium: FONT_WEIGHTS.MEDIUM,
    fontWeightBold: FONT_WEIGHTS.BOLD,
    h1: {
      fontSize: "2.5rem" /*40px*/,
      fontWeight: FONT_WEIGHTS.MEDIUM,
      color: CSS_COLORS.BLACK,
    },
    h2: {
      fontSize: "1.875rem" /*30px*/,
      fontWeight: FONT_WEIGHTS.MEDIUM,
      color: CSS_COLORS.BLACK,
    },

    h3: {
      fontSize: "1.75rem" /*28px*/,
      fontWeight: FONT_WEIGHTS.MEDIUM,
      color: CSS_COLORS.BLACK,
    },
    h4: {
      fontSize: "1.5rem" /*24px*/,
      fontWeight: FONT_WEIGHTS.MEDIUM,
      color: CSS_COLORS.BLACK,
    },
    h5: {
      fontSize: "1.375rem" /*22px*/,
      fontWeight: FONT_WEIGHTS.MEDIUM,
      color: CSS_COLORS.BLACK,
    },
    h6: {
      fontSize: "1.25rem" /*20px*/,
      fontWeight: FONT_WEIGHTS.MEDIUM,
      color: CSS_COLORS.BLACK,
    },
   
  },
  palette: {
    primary: {
      main: CSS_COLORS.PRIMARY_BLUE,
    },
    text: {
      primary: CSS_COLORS.DARK_GREY,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "0.75rem",
          borderRadius: "0.313rem",
          boxShadow: "none",
          height: "1.875rem",
          padding: "0 1rem",
          fontWeight: "var(--fontweight-regular)",
          transition: "all 0.3s ease-in",
        },
        contained: {
          backgroundColor: "var(--black)",
          color: "var(--primary-white)",
          boxShadow: "none",
          fontWeight: "var(--fontweight-regular)",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "var(--black)",
            color: "var(--primary-white)",
            boxShadow: "none",
            fontWeight: "var(--fontweight-regular)",
            cursor: "pointer",
            transition: "all 0.3s ease-out",
          },
          "&:active": {
            backgroundColor: "var(--black)",
            color: "var(--primary-white)",
            boxShadow: "none",
            fontWeight: "var(--fontweight-regular)",
            cursor: "pointer",
          },
          "&.Mui-disabled": {
            backgroundColor: "var(--light-grey)",
            color: "var(--dark-grey)",
            boxShadow: "none",
            fontWeight: "var(--fontweight-regular)",
            cursor: "default",
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "none",
            border: `0.5px solid var(--black)`,
            borderRadius: ".313rem",
            height: "1.875rem",
            color: "var(--black)",
            width: "fit-content",
            boxShadow: "none",
            fontWeight: "var(--fontweight-regular)",
            cursor: "pointer",

            "&:hover": {
              backgroundColor: "var(--black)",
              color: "var(--primary-white)",
              border: "0.5px solid var(--black)",
              boxShadow: "none",
              fontWeight: "var(--fontweight-regular)",
              cursor: "pointer",
              transition: "all 0.3s ease-out",
            },
            "&:active": {
              backgroundColor: "var(--black)",
              color: "var(--primary-white)",
              border: `0.5px solid var(--black)`,
              boxShadow: "none",
              fontWeight: "var(--fontweight-regular)",
              cursor: "pointer",
            },
            "&.Mui-disabled": {
              color: "var(--dark-grey)",
              border: "0.5px solid var(--dark-grey)",
              boxShadow: "none",
              fontWeight: "var(--fontweight-regular)",
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            textTransform: "none",
            borderRadius: ".313rem",
            height: "1.875rem",
            color: "var(--black)",
            width: "fit-content",
            fontWeight: "var(--fontweight-regular)",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "var(--black)",
              color: "var(--primary-white)",
              fontWeight: "var(--fontweight-regular)",
              cursor: "pointer",
              transition: "all 0.3s ease-out",
            },
            "&:active": {
              backgroundColor: "var(--black)",
              color: "var(--primary-white)",
              fontWeight: "var(--fontweight-regular)",
              cursor: "pointer",
            },
            "&.Mui-disabled": {
              color: "var(--dark-grey)",
              boxShadow: "none",
              fontWeight: "var(--fontweight-regular)",
              cursor: "default",
            },
          },
        },
      ],
    },
    MuiChip: {
      defaultProps: {
        variant: "filled",
      },
      variants: [
        {
          props: { variant: "filled", color: "primary" },
          style: {
            backgroundColor: "#4DA0F7",
            color: "#FFFFFF",
            height: "1.78rem",
            borderRadius: "4px",
            fontSize: "1.5rem",
          },
        },
        {
          props: { variant: "filled", color: "secondary" },
          style: {
            backgroundColor: "#e3e4ea",
            color: "#535252",
            height: "1.78rem",
            borderRadius: "4px",
            fontSize: "1.5rem",
          },
        },
      ],
    },
    MuiAutocomplete: {
      defaultProps: {
        disableClearable: true,
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
            fontSize: "1.125rem",
            fontWeight: FONT_WEIGHTS.REGULAR,
            color: CSS_COLORS.DARK_GREY,
          },
          "& .css-i4bv87-MuiSvgIcon-root": {
            color: CSS_COLORS.DISABLED_GREY,
          },
          "& .MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "0rem 1rem",
          },
          "&.MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input":
            {
              padding: 0,
            },
          "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
            paddingTop: "0.063rem",
            paddingBottom: "0.375rem",
            paddingLeft: "0.375rem",
          },
          "& .MuiAutocomplete-endAdornment": {
            top: "0.35rem",
          },
          "& .MuiOutlinedInput-root": {
            paddingLeft: "1rem",
          },
          width: "25.688rem",
          height: "2.25rem",
        },
      },
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "elevation" },
          style: {
            borderRadius: "0.563rem",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "0px 3px 6px var(--box-shadow)",
            },
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: CSS_COLORS.HEATMAP_FULL_RED,
          height: "3.125rem",
          boxShadow: "none",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        thumb: {
          backgroundColor: "var(--black)",
          width: ".875rem",
          height: ".875rem",
          marginTop: ".07rem",
        },
        track: {
          "&.MuiSwitch-track": { backgroundColor: "var(--light-grey)" },
          width: "1.5rem",
          height: ".75rem",
        },
        switchBase: {
          "&:hover": { backgroundColor: "transparent" },
          "&.Mui-checked": {
            "&:hover": { backgroundColor: "transparent" },
          },
          "&.Mui-checked+.MuiSwitch-track": {
            backgroundColor: "var(--light-grey)",
            width: "1.5rem",
            height: ".75rem",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          color: "var(--dark-grey)",
          fontWeight: "var(--fontweight-light)",
        },
      },
    },
    MuiTooltip: {
      defaultProps: { enterDelay: 1000 },
      styleOverrides: {
        tooltip: {
          fontSize: "0.625rem",
          lineHeight: "0.875rem",
          backgroundColor: "var(--black)",
          fontWeight: "var(--fontweight-light)",
        },
        arrow: { color: "var(--black)" },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
          "&.Mui-checked": {
            color: "var(--black)",
          },
        },
      },
    },
  },
});
export default theme;