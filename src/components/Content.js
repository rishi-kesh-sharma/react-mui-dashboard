import React from "react";
import { Route, Routes } from "react-router-dom";
import { Banks, Contacts, Home, Settings, Users } from ".";
// import Banks from "./Banks";
// import Home from "./Home";
// import Contacts from "./Contacts";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/banks" element={<Banks />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/contacts" element={<Contacts />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Content;
