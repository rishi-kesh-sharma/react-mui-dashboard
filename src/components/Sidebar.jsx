import React from "react";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import {
  Home,
  Groups,
  Settings,
  ModeNight,
  LightMode,
  AccountBalance,
} from "@mui/icons-material";
import ContactsIcon from "@mui/icons-material/Contacts";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Sidebar = ({ toogleThemeMode, themeMode }) => {
  let links = [
    { icon: <Home />, title: "Home", path: "/" },
    { icon: <AccountBalance />, title: "Banks", path: "/dashboard/banks" },
    { icon: <Groups />, title: "Users", path: "/dashboard/users" },
    { icon: <ContactsIcon />, title: "Contacts", path: "/dashboard/contacts" },
    { icon: <Settings />, title: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <Box
      flex={1}
      p={1}
      // bgcolor={red[200]} // debuging stuff
      sx={{
        display: { xs: "none", sm: "block" },
        minWidth: "150px",
        height: "100vh",
        width: "200px",
        maxWidth: "20%",
        borderRight: "1px solid #c9c8c7 ",
      }}
    >
      <Box position="fixed">
        <List>
          {links.map(({ title, icon, path }, index) => (
            <ListItem key={index}>
              <Link to={path} style={{ textDecoration: "none", color: "red" }}>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={title} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}

          {/* THEME MODE TOGGLER */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {themeMode === "dark" ? <ModeNight /> : <LightMode />}
              </ListItemIcon>
              <Switch onChange={toogleThemeMode} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
