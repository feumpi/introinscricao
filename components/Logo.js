import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <>
      <Typography variant="h5" component="h2">
        <Typography
          variant="inherit"
          display="inline"
          sx={{ fontWeight: "bold" }}
        >
          &#123;
        </Typography>
        <Typography
          variant="inherit"
          display="inline"
          sx={{ fontWeight: "light" }}
        >
          INTRO
        </Typography>
        <Typography
          variant="inherit"
          display="inline"
          sx={{ fontWeight: "bold" }}
        >
          COMP
        </Typography>
        <Typography
          variant="inherit"
          display="inline"
          sx={{ fontWeight: "bold" }}
        >
          &#125;
        </Typography>
      </Typography>
    </>
  );
};

export default Logo;
