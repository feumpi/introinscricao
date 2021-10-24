import { Paper, Container, Card } from "@mui/material";
import { useTheme } from "@emotion/react";

import EnrollCard from "../components/EnrollCard";

const Enroll = () => {
  const theme = useTheme();

  return (
    <>
      <Paper
        sx={{
          height: "100%",
          bgcolor: theme.palette.primary.main,
          borderRadius: 0,
          paddingY: "100px",
        }}
      >
        <Container>
          <EnrollCard />
        </Container>
      </Paper>
    </>
  );
};

export default Enroll;
