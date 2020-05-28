import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as LinkRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

import { Icons } from "../../../../components/LanguageIcons";
import { IssuesContext } from "../../../../components/RepoIssues";
import { ApiRequest } from "../../../../api";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "90%",
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
  repoName: {
    padding: theme.spacing(1),
  },
  repoUrl: {
    padding: theme.spacing(1),
  },
  repoLanguage: {
    padding: theme.spacing(1),
  },
  repoTypography: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginLeft: theme.spacing(1),
  },
  icons: {
    width: 17,
    height: 17,
    margin: theme.spacing(1),
  },
  issues: {
    width: 17,
    height: 17,
    margin: 4.75,
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

  //const [repoIssues, setRepoIssues] = useState("");

  const issuesContext = useContext(IssuesContext);

  const fetchRepoIssues = async (repo) => {
    const resp = await ApiRequest("repos/", repo, "", 3, user.login);

    window.localStorage.setItem("repo", JSON.stringify(resp));
  };

  const handleIssues = async (repo) => {
    await fetchRepoIssues(repo);
  };

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

        <Grid container direction="row">
          <Grid className={classes.repoName}>
            {repo.name.map((item) => (
              <Grid
                container
                direction="row"
                alignItems="center"
                className={classes.repoTitle}
              >
                <GradeOutlinedIcon fontSize="small" />
                <Typography className={classes.repoTypography}>
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid className={classes.repoUrl}>
            {repo.url.map((item) => (
              <div>
                <Typography className={classes.repoTitle}>
                  <Link href={item}>{item}</Link>
                </Typography>
              </div>
            ))}
          </Grid>
          <Grid className={classes.repoLanguage}>
            {repo.language.map((item) => (
              <Grid container direction="row" alignItems="center">
                {Icons.map((i) =>
                  i.id === item ? (
                    <img alt={item} src={i.img} className={classes.icons} />
                  ) : (
                    ""
                  )
                )}
                <Typography>{item}</Typography>
              </Grid>
            ))}
          </Grid>
          <Grid className={classes.repoUrl}>
            {repo.name.map((item) => (
              <Grid>
                <Tooltip title="Issues" placement="right">
                  <IconButton
                    component={LinkRouter}
                    to="/issues"
                    size="small"
                    className={classes.issues}
                    onClick={() => handleIssues(item)}
                  >
                    <AssignmentOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default GithubProfile;
