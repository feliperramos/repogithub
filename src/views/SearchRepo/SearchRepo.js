import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import { ApiRequest } from "../../api";
import { GithubProfile, SkeletonProfile } from "./components";

const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  grid: {
    marginTop: theme.spacing(3),
  },
  search: {
    margin: theme.spacing(2),
  },
  formControl: {
    minwidth: "100%",
    margin: theme.spacing(1),
  },
}));

const SearchRepo = () => {
  const classes = styles();

  const [username, setUsername] = useState("");
  const [repo, setRepo] = useState({
    user: "",
    repositories: "",
  });

  const fetch = async () => {
    const userRepo = await ApiRequest("users", username, "", 2);
    const repos = await ApiRequest("", "", userRepo.data.repos_url, 1);

    setRepo({
      user: userRepo,
      repositories: repos,
    });
  };

  const handleClick = () => {
    fetch();
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const OpenProfile = () => <GithubProfile repos={repo} />;

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.grid}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Typography variant="h3">GitHub Repos</Typography>
        <Grid alignItems="center" className={classes.search} item>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={handleChangeUsername}
          />
          <IconButton onClick={handleClick}>
            <SearchIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid container justify="center" alignItems="center">
          {repo.user ? OpenProfile(repo) : <SkeletonProfile />}
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchRepo;
