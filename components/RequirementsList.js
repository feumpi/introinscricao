import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const RequirementsList = ({ requirements, invert }) => {
  return (
    <>
      <List>
        {requirements.map((requirement, index) => {
          const Icon = requirement.icon;
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <Icon color={invert ? "warning" : "primary"} fontSize="large" />
              </ListItemIcon>
              <ListItemText>{requirement.text}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default RequirementsList;
