import {
  School,
  Wifi,
  MoneyOffCsred,
  Code,
  Calculate,
} from "@mui/icons-material";
import { Card, CardContent, Typography, Button } from "@mui/material";

import RequirementsTitle from "./RequirementsTitle";
import RequirementsList from "./RequirementsList";

const RequirementsCard = () => {
  const requirements = [
    { icon: School, text: "Estar matriculado em qualquer ano do ensino médio" },
    { icon: MoneyOffCsred, text: "Estudar em escola pública" },
    { icon: Wifi, text: "Ter um computador com acesso à internet" },
  ];

  const notRequirements = [
    { icon: Code, text: "Ter conhecimentos prévios em programação" },
    { icon: Calculate, text: "Ser um gênio das exatas" },
  ];
  return (
    <>
      <Card>
        <CardContent>
          <RequirementsTitle>Para participar, você precisa</RequirementsTitle>
          <RequirementsList requirements={requirements} />
          <RequirementsTitle>Não é necessário</RequirementsTitle>
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
