import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { useNavigate } from "react-router-dom";

export default function FolderList({ name }) {
  const navigate = useNavigate();
  return (
    <List
      sx={{
        width: "80%",
        bgcolor: "#6200ee",
        color: "white",
        textAlign: "center",
        height: "30px",
      }}
    >
      <ListItem
        onClick={() => {
          navigate(`/category/${name}`);
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} />
      </ListItem>
    </List>
  );
}
