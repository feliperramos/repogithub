import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar/";

import { Divider } from "@material-ui/core";

const style = makeStyles((theme) => ({
  card: {
    width: "40%",
    margin: theme.spacing(2),
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  grid: {
    margin: theme.spacing(2),
  },
  description: {
    margin: theme.spacing(1),
    fontSize: 12,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  user: {
    fontSize: 14,
    marginLeft: theme.spacing(0.5),
  },
  chipOpen: {
    backgroundColor: "#5cad69",
    color: "#ffffff",
    fontWeight: "bold",
  },
}));

const IssuesPage = () => {
  const classes = style();
  const list = JSON.parse(window.localStorage.getItem("repo"));

  return (
    <Grid container justify="center" direction="column">
      {console.log(list.data)}
      <Grid container justify="center">
        <Typography variant="h3">Issues</Typography>
      </Grid>
      <Grid container justify="center" direction="row">
        {list.data.map((i) => (
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar src={i.actor.avatar_url} className={classes.avatar} />
              }
              title={
                <Typography className={classes.title} color="default">
                  {i.issue.title}
                </Typography>
              }
              subheader={
                <Grid container direction="row" alignItems="center">
                  {i.issue.state === "open" ? (
                    <Chip
                      label={i.issue.state}
                      size="small"
                      className={classes.chipOpen}
                    />
                  ) : (
                    <Chip label={i.issue.state} size="small" />
                  )}
                  <Typography className={classes.user} color="textSecondary">
                    {i.actor.login}
                  </Typography>
                </Grid>
              }
            />
            <Divider />
            <Grid>
              <Typography className={classes.description}>
                {i.issue.body}
              </Typography>
            </Grid>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default IssuesPage;
