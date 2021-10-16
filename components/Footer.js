import { Paper, Box, Typography } from "@mui/material";
import Image from "next/image";
import { Phone, Mail } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Paper
        sx={{
          bgcolor: "primary.light",
          color: "primary.dark",
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 30px",
        }}
      >
        <Box>
          <Typography>
            &copy; {new Date().getFullYear()} Introcomp. Um projeto de extensão
            sem fins lucrativos da Universidade Federal do Espírito Santo.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "25px",
          }}
        >
          <Box>
            <a href="https://sedu.es.gov.br/" target="_blank" rel="noreferrer">
              <Image
                src="/img/sedu.png"
                alt="Secretaria de Educação do Espírito Santo"
                width={75}
                height={100}
              />
            </a>
          </Box>

          <Box sx={{ marginLeft: "20px" }}>
            <a href="https://pet.inf.ufes.br/" target="_blank" rel="noreferrer">
              <Image
                src="/img/pet-ufes.png"
                alt="PET Engenharia de Computação - Universidade Federal do Espírito Santo"
                width={300}
                height={75}
              />
            </a>
          </Box>

          <Box sx={{ marginLeft: "20px" }}>
            <a
              href="https://www.alura.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/img/alura.png"
                alt="Alura Cursos Online"
                width={150}
                height={75}
              />
            </a>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Phone />
          <a href="tel:+552740092139">
            <Typography ml="10px">(27) 4009-2139</Typography>
          </a>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Mail />
          <a href="mailto:introcomp@inf.ufes.br">
            <Typography ml="10px">introcomp@inf.ufes.br</Typography>
          </a>
        </Box>
      </Paper>
    </>
  );
};

export default Footer;
