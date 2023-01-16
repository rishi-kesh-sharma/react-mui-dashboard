import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import { getAllUsers, getUser } from "../../apiCalls/user";
import { useSelector } from "react-redux";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const columns = [
  { id: "sn", label: "SN", minWidth: 60 },
  { id: "avatar", label: "Avatar", minWidth: 80 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "address", label: "Address", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "contact", label: "contact", minWidth: 100 },
  { id: "role", label: "Role", minWidth: 100 },
  { id: "edit", label: "Edit", minWidth: 50 },
  { id: "remove", label: "Remove", minWidth: 50 },
];

function createData(
  sn,
  avatar,
  name,
  address,
  email,
  contact,
  role,
  edit,
  remove
) {
  return {
    sn,
    avatar,
    name,
    address,
    email,
    contact,
    role,
    edit,
    remove,
  };
}

export default function UsersTable() {
  const [loading, setLoading] = React.useState(true);

  const usersInfo = useSelector((state) => state.userReducer);
  const rows = usersInfo?.users?.map((user, index) => {
    const { address, contact, email, profilePic, role, username } = user;
    return createData(
      index + 1,
      profilePic,
      username,
      address,
      email,
      contact,
      role,
      <button
        style={{
          background: "blue",
          color: "white",
          border: "none",
          padding: "0.2rem 0.5rem",

          cursor: "pointer",
          borderRadius: "0.4rem",
        }}
      >
        edit
      </button>,
      <button
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "0.2rem 0.5rem",

          cursor: "pointer",
          borderRadius: "0.4rem",
        }}
      >
        remove
      </button>
    );
  });

  const handlePrevClick = () => {};
  const handleNextClick = () => {};

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "5rem" }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {/* {typeof value == "object" && Array.isArray(value)
                            ? value.map((item) => item.link)
                            : value} */}
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          margin: " 0.5rem 0 0.5rem 90% ",
          display: "flex",
          gap: "1.5rem",
        }}
      >
        <ArrowBackIosNewIcon
          sx={{ fontSize: "1.2rem", cursor: "pointer" }}
          onClick={handlePrevClick}
        />
        <ArrowForwardIosIcon
          sx={{ fontSize: "1.2rem", cursor: "pointer" }}
          onClick={handleNextClick}
        />
      </div>
    </Paper>
  );
}
