import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    margin: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  repo: {
    margin: theme.spacing(3),
  },
  repoTitle: {
    margin: theme.spacing(1),
  },
}));

const GithubProfile = (props) => {
  const classes = useStyles();
  const user = props.repos.user.data;
  const repo = {
    name: [],
    url: [],
    language: [],
  };
  props.repos.repositories.data.forEach((item) => {
    repo.name.push(item.name);
    repo.url.push(item.html_url);
    repo.language.push(item.language);
  });

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            alt={user.name ? user.name : ""}
            src={user.avatar_url}
            className={classes.avatar}
          />
        }
        title={<Typography variant="h6">{user.name}</Typography>}
        subheader={user.login}
      />
      <Divider />
      <Grid container direction="row" className={classes.repo}>
        <Typography className={classes.repoTitle} variant="h5">
          Repositórios
        </Typography>

        <Grid container direction="column">
          {repo.name.map((item) => (
            <div>
              <Typography>{item}</Typography>
            </div>
          ))}
          {repo.name.map((item) => (
            <div>
              <Typography>{item}</Typography>
            </div>
          ))}
          {repo.name.map((item) => (
            <div>
              <Typography>{item}</Typography>
            </div>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default GithubProfile;
