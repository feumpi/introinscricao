import Image from "next/image";
import { Typography } from "@mui/material";

const StepInstructions = ({ imgSrc, title, description }) => {
  return (
    <>
      <Image
        src={imgSrc}
        width={1000}
        height={1000}
        alt="Homem apontando para uma tela vazia"
      />
      <Typography variant="h5">{title}</Typography>
      <Typography mt="15px">{description}</Typography>
    </>
  );
};

export default StepInstructions;
