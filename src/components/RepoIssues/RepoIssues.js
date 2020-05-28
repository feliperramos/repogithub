import React, { useState, createContext, useContext } from "react";

export const Issues = {
  repoName: {},
};

export const IssuesContext = createContext({
  repo: Issues.repoName,
});

export const IssuesProvider = (props) => {
  const issuesContext = useContext(IssuesContext);
  const [repo, setRepo] = useState(issuesContext.repo);

  const provider = {
    repo,
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
