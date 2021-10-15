import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const ScheduleList = ({ schedule }) => {
  return (
    <>
      <List sx={{ paddingX: "30px" }}>
        {schedule.map((item, index) => {
          const Icon = item.icon;
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <Icon fontSize="large" color="primary" />
              </ListItemIcon>
              <ListItemText primary={item.date} secondary={item.text} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ScheduleList;
