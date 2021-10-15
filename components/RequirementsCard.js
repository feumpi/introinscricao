import {
  School,
  Wifi,
  MoneyOffCsred,
  Code,
  Calculate,
} from "@mui/icons-material";
import { Card, CardContent, Typography, Button } from "@mui/material";

import CardTitle from "./CardTitle";
import RequirementsList from "./RequirementsList";

const RequirementsCard = () => {
  const requirements = [
    {
      icon: School,
      text: "Estar matriculado em qualquer ano do ensino médio ou técnico integrado",
    },
    {
      icon: MoneyOffCsred,
      text: "Estudar em escola pública (estadual ou federal)",
    },
    {
      icon: Wifi,
      text: "Ter um computador (recomendado) ou celular com acesso à internet",
    },
  ];

  const notRequirements = [
    { icon: Code, text: "Ter conhecimentos prévios em programação" },
    { icon: Calculate, text: "Ser um gênio das exatas" },
  ];
  return (
    <>
      <Card>
        <CardContent>
          <CardTitle>Para participar, você precisa</CardTitle>
          <RequirementsList requirements={requirements} />
          <CardTitle>Não é necessário</CardTitle>
          <RequirementsList requirements={notRequirements} invert />
        </CardContent>

        <Button
          variant="contained"
          color="secondary"
          disableElevation
          sx={{ width: "100%", borderRadius: "0", padding: "15px 0" }}
        >
          Leia o edital completo
        </Button>
      </Card>
    </>
  );
};

export default RequirementsCard;
