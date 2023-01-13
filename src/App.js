import React, { useState } from "react";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import rootReducer from "./reducers/rootReducer";

import {
  AddForm,
  Banks,
  Contacts,
  Home,
  Navbar,
  Settings,
  Sidebar,
  Users,
  Content,
} from "./components";
//mui stuff

import { createTheme, Stack, Box, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const store = createStore(rootReducer);
const App = () => {
  const [mode, setMode] = useState("light");
  const toogleThemeMode = () => setMode(mode === "light" ? "dark" : "light");

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default App;
export { store };
