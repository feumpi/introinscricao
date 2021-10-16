import Head from "next/head";
import Image from "next/image";

import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";


export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Introcomp</title>
        <meta
          name="description"
          content="Curso de programação gratuito para alunos do ensino médio público"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: "white",
        }}
      >
        <HeroSection />

        <AboutSection />
      </Box>
    </>

  );
}
