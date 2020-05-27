import React, { useState, createContext, useContext } from "react";

export const Issues = {
  repoName: "",
};

export const IssuesContext = createContext({
  repo: Issues.repoName,
  name: Issues.repoName,
});

export const IssuesProvider = (props) => {
  const issuesContext = useContext(IssuesContext);
  const [name, setName] = useState(issuesContext.name);
  const [repo, setRepo] = useState(issuesContext.repo);

  const provider = {
    name,
    repo,
    setName: (name) => {
      setName(name);
    },
    setRepo: (repo) => {
      setRepo(repo);
    },
  };

  return (
    <IssuesContext.Provider value={provider}>
      {props.children}
    </IssuesContext.Provider>
  );
};
