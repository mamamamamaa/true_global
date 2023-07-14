import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import "./index.css";

const defaultTheme = createTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
