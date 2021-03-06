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
import Faq from "./Faq";

const AboutSection = () => {
  return (
    <div id="about">
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(6, 1fr)",
          },
          gridTemplateRows: {
            xs: "auto auto auto 50px auto auto 50px auto",
            md: "auto 100px auto 100px auto",
          },
          gridTemplateAreas: {
            xs: `
            "about1"
            "about2"
            "about3"
            "."
            "requirements"
            "schedule"
            "."
            "faq"
            `,
            md: `
            "about1 about1 about2 about2 about3 about3"
            ". . . . . ."
            "requirements requirements requirements schedule schedule schedule"
            ". . . . . ."
            "faq faq faq faq faq faq"
          `,
          },
          gridGap: "30px",
          alignItems: "stretch",
          paddingBottom: {
            xs: "50px",
            md: "100px",
          },
          paddingTop: "100px",
        }}
      >
        <Box sx={{ gridArea: "about1" }}>
          <AboutCard title="Aprenda" icon={Lightbulb}>
            Aprenda a teoria em nossas aulas ao vivo, todos os sábados de manhã
            por meio da Twitch.
          </AboutCard>
        </Box>

        <Box sx={{ gridArea: "about2" }}>
          <AboutCard title="Pratique" icon={DeveloperMode}>
            Resolva os exercícios propostos para praticar o conteúdo durante a
            semana, todos com correção automática.
          </AboutCard>
        </Box>

        <Box sx={{ gridArea: "about3" }}>
          <AboutCard title="Interaja" icon={Forum}>
            Tire dúvidas com nossos monitores e interaja com outros alunos
            usando o nosso canal do Discord.
          </AboutCard>
        </Box>

        <Box sx={{ gridArea: "requirements" }}>
          <RequirementsCard />
        </Box>

        <Box sx={{ gridArea: "schedule" }}>
          <ScheduleCard />
        </Box>

        <Box sx={{ gridArea: "faq" }}>
          <Faq />
        </Box>
      </Container>
    </div>
  );
};

export default AboutSection;
