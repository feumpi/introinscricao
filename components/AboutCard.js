import { Card, CardContent, Typography } from "@mui/material";

const AboutCard = ({ title, icon, children }) => {
  const Icon = icon;
  return (
    <>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px",
          }}
        >
          <Icon color="secondary" sx={{ fontSize: 70 }} />

          <Typography variant="h4" mt="20px" sx={{ fontWeight: "400" }}>
            {title}
          </Typography>
          <Typography
            mt="20px"
            sx={{ textAlign: "center", marginBottom: "10px" }}
          >
            {children}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default AboutCard;
