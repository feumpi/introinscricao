import Image from "next/image";

import { Paper, Container, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const HeroSection = () => {
  const theme = useTheme();
  return (
    <>
      <Paper
        sx={{
          bgcolor: "primary.dark",
          color: "white",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            padding: "0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h2" sx={{ textAlign: "center" }}>
                Curso de programação gratuito para o ensino médio.
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={{ textAlign: "center", marginTop: "40px" }}
              >
                Aprenda a programar com alunos voluntários dos cursos de
                Engenharia e Computação da Universidade Federal do Espírito
                Santo.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <Button variant="contained" color="secondary" size="large">
                  Inscreva-se
                </Button>

                <Button
                  variant="text"
                  size="large"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    marginLeft: "20px",
                  }}
                >
                  Saiba mais
                </Button>
              </Box>
            </Box>
            <Image
              src="/img/studying.svg"
              width={1000}
              height={1000}
              alt="Ilustração de uma aluna em frente ao computador"
            />
          </Box>
        </Container>
      </Paper>

      <Box>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={theme.palette.primary.dark}
            fillOpacity="1"
            d="M0,96L60,90.7C120,85,240,75,360,90.7C480,107,600,149,720,149.3C840,149,960,107,1080,101.3C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </Box>
    </>
  );
};

export default HeroSection;
