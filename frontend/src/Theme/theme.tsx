import {
  createTheme,
  PaletteColorOptions,
  PaletteColor,
} from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor extends ColorPartial {}
}

declare module "@mui/material/styles" {
  interface Palette {
    greenColor: PaletteColor;
    blueColor: PaletteColor;
    text1: PaletteColor;
    text2: PaletteColor;
    text3: PaletteColor;
    text4: PaletteColor;
    grey1: PaletteColor;
    background1: PaletteColor;
    background2: PaletteColor;
  }

  interface PaletteOptions {
    greenColor: PaletteColorOptions;
    blueColor: PaletteColorOptions;
    text1: PaletteColorOptions;
    text2: PaletteColorOptions;
    text3: PaletteColorOptions;
    text4: PaletteColorOptions;
    grey1: PaletteColorOptions;
    background1: PaletteColorOptions;
    background2: PaletteColorOptions;
  }

  interface CustomTypography {
    heading: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    subtitle3: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body3: React.CSSProperties;
  }

  interface TypographyVariants extends CustomTypography {}
  interface TypographyVariantsOptions extends CustomTypography {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading: true;
    caption1: true;
    caption2: true;
    subtitle1: true;
    subtitle2: true;
    subtitle3: true;
    body1: true;
    body2: true;
    body3: true;
  }
}

const theme = createTheme({
  palette: {
    greenColor: {
      "100": "#E9FAF1",
      "300": "#2CE080",
      "500": "#22C870",
      "700": "#20BA68",
    },

    blueColor: {
      "100": "#DFE8F6",
      "500": "#0365F2",
    },

    text1: {
      main: "#042330",
    },

    text2: {
      main: "#03314B",
    },

    text3: {
      main: "#6D787E",
    },

    text4: {
      main: "#747575",
    },

    grey1: {
      "100": "#BAC9CF",
      "300": "#6C787F",
      "500": "#3A4649",
      "700": "#042330",
    },

    background1: {
      main: "#FFFFFF",
    },

    background2: {
      main: "#F1F6F4",
    },
  },

  typography: {
    fontFamily: "Cera Pro",

    heading: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "45px",
    },

    subtitle1: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "32px",
    },

    subtitle2: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "24px",
    },

    subtitle3: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "24px",
    },

    body1: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "24px",
    },

    body2: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
    },

    body3: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "22px",
      lineHeight: "26px",
    },

    caption1: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "22px",
    },

    caption2: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "22px",
    },
  },
});

export default theme;
