import Image from "next/image";
import Link from "next/link";

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
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gridTemplateAreas: {
              xs: `
                "content"
              `,
              md: `
                "content content art art"
              `,
              lg: `
                "content content content art art"
              `,
            },
          }}
        >
          <Box sx={{ gridArea: "content", marginX: "30px" }}>
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              Curso de programação gratuito para o ensino médio público.
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{ textAlign: "center", marginTop: "40px" }}
            >
              Aprenda a programar em Python remotamente com alunos dos cursos de
              Computação e Engenharias da Universidade Federal do Espírito
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

              <Link href="#about" passHref>
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
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              gridArea: "art",
              display: { xs: "none", md: "inline-block" },
            }}
          >
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
