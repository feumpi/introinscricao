import { Box } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          gridTemplateColumns: "100%",
        }}
      >
        <Header />
        <Box>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
