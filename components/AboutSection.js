import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Lightbulb,
  DeveloperMode,
  Groups,
  Forum,
  Computer,
  Code,
  QuestionAnswer,
  School,
  Wifi,
  Close,
} from "@mui/icons-material";

import AboutCard from "./AboutCard";
import RequirementsCard from "./RequirementsCard";
import ScheduleCard from "./ScheduleCard";

const AboutSection = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "30px",
            marginTop: "30px",
          }}
        >
          <AboutCard title="Aprenda" icon={Lightbulb}>
            Aprenda a teoria em nossas aulas ao vivo, todos os sábados de manhã
            por meio da Twitch.
          </AboutCard>

          <AboutCard title="Pratique" icon={DeveloperMode}>
            Resolva os exercícios propostos para praticar o conteúdo durante a
            semana, todos com correção automática.
          </AboutCard>

          <AboutCard title="Interaja" icon={Forum}>
            Tire dúvidas com nossos monitores e interaja com outros alunos
            usando o nosso canal do Discord.
          </AboutCard>
        </Box>
      </Container>

      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "30px",
          paddingY: "100px",
        }}
      >
        <RequirementsCard />
        <ScheduleCard />
      </Container>
    </>
  );
};

export default AboutSection;
