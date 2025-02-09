import * as React from "react";
import { styled } from "@mui/material/styles";

import { Card, CardHeader, Avatar, IconButton } from "@mui/material";

import { red } from "@mui/material/colors";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function AddForm({ post }) {
  const { avatar, username, createdAt, image, body, _id } = post;

  return (
    <Card sx={{ margin: "5px" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: !avatar ? red[500] : "rgba(0,0,0,0.4px)" }}
            aria-label="recipe"
            src={avatar}
          >
            {username[0]}
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={username}
        subheader={createdAt}
      />

      <IconButton aria-label="share"></IconButton>
    </Card>
  );
}
