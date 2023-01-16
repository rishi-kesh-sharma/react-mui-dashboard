import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import contactReducer from "./../../reducers/contactReducer";
import { useSelector } from "react-redux";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const columns = [
  { id: "sn", label: "SN", minWidth: 60 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "address", label: "Address", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "contact", label: "Contact", minWidth: 100 },
  { id: "message", label: "Message", minWidth: 100 },
  { id: "edit", label: "Edit", minWidth: 50 },
  { id: "remove", label: "Remove", minWidth: 50 },
];

function createData(sn, name, address, email, contact, message, edit, remove) {
  return {
    sn,
    name,
    address,
    email,
    contact,
    message,
    edit,
    remove,
  };
}

export default function ContactsTable() {
  const contactsInfo = useSelector((state) => state.contactReducer);
  console.log(contactsInfo?.contacts[0]);
  const rows = contactsInfo?.contacts?.map((contact, index) => {
    const { name, address, email, contact: phone, message, _id } = contact;
    return createData(
      index + 1,
      name,
      address,
      email,
      phone,
      message,
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
