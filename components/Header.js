import { AppBar, Toolbar, Typography } from "@mui/material";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
