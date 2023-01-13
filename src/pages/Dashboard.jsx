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
const Dashboard = () => {
  const [mode, setMode] = useState("light");
  const toogleThemeMode = () => setMode(mode === "light" ? "dark" : "light");

  const theme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <div>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" justifyContent="space-between" gap="10px">
          <Sidebar toogleThemeMode={toogleThemeMode} themeMode={mode} />
          <Content />
        </Stack>
      </Box>
    </div>
  );
};

export default Dashboard;
