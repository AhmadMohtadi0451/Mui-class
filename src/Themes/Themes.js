import { createTheme } from "@mui/material/styles";

const Themes = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#EEE",
          ".margin": {
            margin: 50,
          },
          a: {},
          "#myId": {},
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "mainButton" },
          style: {
            color: "#fff",
            backgroundColor: "#50C2C9",
            borderRadius: "20px",
            textAlign: "center",
            height: 60,
            "&:hover": {
              backgroundColor: "#50C2C9",
            },
          },
        },
        {
          props: { variant: "secondaryButton" },
          style: {},
        },
      ],
    },
  },
  MuiCheckbox: {
    variants: [
      {
        props: { variant: "mainCheckbox" },
        style: {
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#94F6FC",
          },
        },
      },
    ],
  },
  palette: {
    primary: {
      main: "#50C2C9",
      secondary: "#000000D9",
      light: "#94F6FC",
    },
    background: "#EEE",
  },
  typography: {
    subtitle1: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: 19.5,
    },

    h1: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: "27px",
    },
    h2: {
      fontWeight: 600,
      lineHeight: "21px",
      fontSize: 14,
    },
  },
  link: {
    color: "#50C2C9",
    underline: "none",
  },
  shadows: ["0px 4px 10px rgba(0, 0, 0, 0.25)"],
});

export default Themes;
