import React from "react";
import { AppBar, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import Logo from "./Logo";

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 3 : 0,
  });
};

const Header = () => {
  return (
    <>
      <ElevationScroll>
        <AppBar
          position="sticky"
          sx={{
            bgcolor: "primary.dark",
            display: "flex",
            justfifyContent: "center",
            alignItems: "center",
          }}
        >
          <Toolbar>
            <Logo />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
