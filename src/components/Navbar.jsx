import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { Home, Search, CategoryTwoTone, AccountBox } from "@mui/icons-material";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

import { Navigate, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavDiv = styled.div`
  color: white;
`;

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  return (
    <NavDiv>
      <BottomNavigation
        sx={{
          width: " 100%",
          justifyItems: "center",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,

          color: "white",
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="Home"
          icon={<Home />}
          onClick={() => {
            navigate("/");
          }}
        />

        <BottomNavigationAction
          label="Category"
          value="Category"
          icon={<AutoAwesomeMotionIcon />}
          onClick={() => {
            navigate("/category");
          }}
        />

        <BottomNavigationAction
          label="Search"
          value="Search"
          icon={<Search />}
          onClick={() => {
            navigate("/search");
          }}
        />
        {/* <BottomNavigationAction
        label="Account"
        value="Account"
        icon={<AccountBox />}
        onClick={() => {
          navigate("/");
        }}
      /> */}
      </BottomNavigation>
    </NavDiv>
  );
}
