import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";

import CardTitle from "./CardTitle";

const Faq = () => {
  const faq = [
    {
      summary: "Qual vai ser a linguagem de programação ensinada?",
      details:
        "Vamos ensinar Python, uma linguagem simples de aprender, muito poderosa e uma das mais usadas do mundo, com aplicações em ciência de dados, web e muito mais.",
    },
    {
      summary: "Preciso saber programar antes de fazer o curso?",
      details:
        "Não! A proposta do curso ensinar programação do zero, então não é preciso ter nenhum conhecimento prévio no assunto.",
    },
    {
      summary: "Quem ministra as aulas?",
      details:
        "As aulas são ministradas por alunos do ensino superior, alguns bolsistas e outros voluntários, que fazem parte dos cursos de Computação ou Engenharias da Universidade Federal do Espírito Santo, sob supervisão de professores do Departamento de Informática da universidade.",
    },
    {
      summary: "Tem certificado?",
      details:
        "Sim! Você receberá um certificado de conclusão com a carga horária correspondente após cada módulo do curso, assinado por por professores da universidade.",
    },
    {
      summary: "Tem alguma forma de avaliação?",
      details:
        "Sim. Você será avaliado e terá uma nota de acordo com a solução dos exercícios propostos toda semana, além de uma prova e um trabalho ao final do curso. É necessário obter uma nota mínima para concluir o curso e obter o certificado.",
    },
  ];
  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ textAlign: "center", paddingY: "30px" }}>
          Perguntas frequentes
        </Typography>

        {faq.map((element, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ paddingY: "10px", paddingX: "30px" }}
            >
              {element.summary}
            </AccordionSummary>
            <AccordionDetails
              sx={{ opacity: "0.7", paddingX: "40px", paddingBottom: "30px" }}
            >
              {element.details}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
};

export default Faq;
