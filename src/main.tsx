import React from "react";
import ReactDOM from "react-dom/client";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalContextProvider } from "./context";
import App from "./App";



// Material UI theme
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Cairo",
  },
  palette: {
    primary: {
      main: "#a65600",
    },
    secondary: {
      main: "#caba9f",
    },
  },
});

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin]
})

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={theme}>
          <GlobalContextProvider>
            <App />
          </GlobalContextProvider>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
