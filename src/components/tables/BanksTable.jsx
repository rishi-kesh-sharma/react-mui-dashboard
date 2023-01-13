import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const columns = [
  { id: "sn", label: "SN", minWidth: 60 },
  { id: "avatar", label: "Avatar", minWidth: 80 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "address", label: "Address", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "contact", label: "contact", minWidth: 100 },
  { id: "category", label: "Category", minWidth: 100 },
  { id: "category", label: "Website", minWidth: 100 },
  { id: "socials", label: "Socials", minWidth: 100 },
  { id: "edit", label: "edit", minWidth: 50 },
  { id: "remove", label: "remove", minWidth: 50 },
];

function createData(
  sn,
  avatar,
  name,
  address,
  email,
  contact,
  category,
  website,
  socials,
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
    category,
    website,
    socials,
    edit,
    remove,
  };
}
const socials = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
};
const rows = [
  createData(
    1,
    "my avatar",
    "Nepal Red Cross society",
    "kathmandu",
    "redcross@gmail.com",
    "9876543210",
    "national",
    "https://redcross.com",

    [
      {
        name: "facebook",
        link: (
          <a
            key={socials}
            href={socials.facebook}
            style={{ margin: "0 0.4rem", textDecoration: "none" }}
          >
            <FacebookIcon />
          </a>
        ),
      },
      {
        name: "twitter",
        link: (
          <a
            key={socials}
            href={socials.twitter}
            style={{ margin: "0 0.4rem", textDecoration: "none" }}
          >
            <TwitterIcon />
          </a>
        ),
      },
      {
        name: "instagram",
        link: (
          <a
            key={socials}
            href={socials.instagram}
            style={{ margin: "0 0.4rem", textDecoration: "none" }}
          >
            <InstagramIcon />
          </a>
        ),
      },
      {
        name: "linkedin",
        link: (
          <a
            key={socials}
            href={socials.linkedin}
            style={{ margin: "0 0.4rem", textDecoration: "none" }}
          >
            <LinkedInIcon />
          </a>
        ),
      },
    ],

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
  ),
];

export default function BanksTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {typeof value == "object" && Array.isArray(value)
                            ? value.map((item) => item.link)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
