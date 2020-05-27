import React, { useContext, useEffect, useState, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

import { IssuesContext } from "../../components/RepoIssues";
import { ApiRequest } from "../../api";
import { Divider } from "@material-ui/core";

const style = makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
    margin: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(1),
  },
  grid: {
    margin: theme.spacing(2),
  },
}));

const IssuesPage = () => {
  const classes = style();
  const issuesContext = useContext(IssuesContext);
  const [issues, setIssues] = useState();

  const issuesList = {
    title: [],
    user: [],
    status: [],
    type: [],
    description: [],
  };
  const fetchIssue = useCallback(async () => {
    const resp = await ApiRequest(
      "repos/",
      issuesContext.name,
      "",
      3,
      issuesContext.repo
    );

    setIssues(resp.data);
  }, [issuesContext.name, issuesContext.repo]);

  issues
    ? issues.forEach((item) => {
        issuesList.title.push(item.issue.title);
        issuesList.user.push(item.actor.login);
        issuesList.status.push(item.issue.state);
        issuesList.type.push(item.issue.labels[0].name);
        issuesList.description.push(item.issue.body);
      })
    : fetchIssue();

  useEffect(() => {
    fetchIssue();
  }, [fetchIssue]);

  return (
    <Grid container justify="center" direction="column">
      <Grid container justify="center">
        <Typography variant="h3">Issues</Typography>
      </Grid>
      <Grid container justify="center" direction="row">
        {issuesList.title.map((title) =>
          issuesList.user.map((user) => (
            <Card className={classes.card}>
              <CardHeader title={title} subheader={user} />
            </Card>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default IssuesPage;
