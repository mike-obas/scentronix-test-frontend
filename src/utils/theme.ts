import { responsiveFontSizes, createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#e88030",
      light: "#fcf1e8",
    },
    secondary: {
      dark: "#000000",
      main: "#595959",
      light: "#ffffff",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
