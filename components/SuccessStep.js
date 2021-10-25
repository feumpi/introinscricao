import Image from "next/image";

import { Box, Typography } from "@mui/material";

const SuccessStep = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <Image
          src="/img/step-success.svg"
          alt="Sucesso"
          width={500}
          height={300}
        />
        <Typography mt={2} variant="h2">
          Tudo certo!
        </Typography>
        <Typography mt={3} sx={{ fontSize: "18px" }}>
          Recebemos os seus dados e te enviamos um e-mail de confirmação.
          Obrigado por se inscrever no Introcomp!
        </Typography>
      </Box>
    </>
  );
};

export default SuccessStep;
