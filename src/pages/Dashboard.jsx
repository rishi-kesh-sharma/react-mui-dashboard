import React, { useState } from "react";
import { createTheme, Stack, Box, ThemeProvider } from "@mui/material";

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
} from "../components";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const { isAuthenticated, authenticatedUser } = useSelector(
    (state) => state.authReducer
  );

  const [mode, setMode] = useState("light");
  const toogleThemeMode = () => setMode(mode === "light" ? "dark" : "light");

  const theme = createTheme({
    palette: {
      mode,
    },
  });
  console.log(isAuthenticated);
  if (isAuthenticated) return <Navigate to="/dashboard/" />;
  return (
    <div>
      {/* {isAuthenticated ? ( */}
      <ThemeProvider theme={theme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" justifyContent="space-between" gap="10px">
            <Sidebar toogleThemeMode={toogleThemeMode} themeMode={mode} />
            <Outlet />
          </Stack>
        </Box>
      </ThemeProvider>
      {/* ) : (
        <Navigate to="/" />
      )} */}
      {/* <Content /> */}
    </div>
  );
};

export default Dashboard;
