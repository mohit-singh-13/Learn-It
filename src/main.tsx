import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f0",
    },
    secondary: {
      main: "#f00",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
