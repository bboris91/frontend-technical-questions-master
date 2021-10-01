import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import makeStyles from '@mui/styles/makeStyles';

import Divider from "@mui/material/Divider";
const useStyles = makeStyles(() => ({
  header: {
    fontWeight: "bold",
    display: "inline",
    marginRight: 4,
  },
  label: {
    display: "inline",
  },
}));

const QuestionListItem = ({
  item: { icon, name, species, id, description },
  divider,
}) => {
  const Icon = icon;
  const classes = useStyles();
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          disableTypography={true}
          primary={
            <Typography variant="body1">{`${name}: ${
              species ? species : "Other"
            }`}</Typography>
          }
          secondary={
            <>
              <div>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  className={classes.header}
                >
                  Description:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.label}
                >
                  {description}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  className={classes.header}
                >
                  Guid:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.label}
                >
                  {id ? id : "ERROR "}
                </Typography>
              </div>
            </>
          }
        />
      </ListItem>
      {divider && <Divider variant="middle" />}
    </>
  );
};

export default QuestionListItem;
