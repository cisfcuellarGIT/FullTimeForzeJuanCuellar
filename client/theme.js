import { createTheme } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "'Montserrat', sans-serif"
  },
  palette: {
    primary: {
      light: "#adb7e0",
      main: "#3f4771",
      dark: "#2e355b",
      contrastText: "#dedfe3",
    },
    secondary: {
      light: "#9ba1b0",
      main: "#ff4081",
      dark: "#c60055",
      contrastText: "#000",
    },
    openTitle: "#3f4771",
    protectedTitle: pink["400"],
    type: "light",
  }
});

export default theme;
