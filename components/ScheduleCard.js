import { Card, CardContent, Typography, Button } from "@mui/material";

import {
  List as IconList,
  School,
  Quiz,
  Description,
  Computer,
} from "@mui/icons-material";

import CardTitle from "./CardTitle";
import ScheduleList from "./ScheduleLIst";

const ScheduleCard = () => {
  const schedule = [
    {
      icon: IconList,
      date: "17 de agosto a 08 de setembro",
      text: "Período de inscrições",
    },
    {
      icon: School,
      date: "12 de setembro",
      text: "Aula expositiva para apresentar o curso",
    },
    {
      icon: Quiz,
      date: "19 de setembro",
      text: "Prova de lógica para seleção",
    },
    {
      icon: Description,
      date: "23 de setembro",
      text: "Matrícula dos aprovados",
    },
    {
      icon: Computer,
      date: "03 de outubro",
      text: "Início das aulas",
    },
  ];

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <CardTitle>Fique de olho no nosso cronograma</CardTitle>
          <ScheduleList schedule={schedule} />
        </CardContent>

        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "100%",
            padding: "15px 0",
            borderRadius: "0",
          }}
        >
          Quero me inscrever
        </Button>
      </Card>
    </>
  );
};

export default ScheduleCard;
