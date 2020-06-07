import React, { Fragment } from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

const Repos = ({ repoList }) => {
  return (
    <Fragment>
      <h2 className="repo-heading">Repositories</h2>
      <div className="repoGrid">
        {repoList.map(repo => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </Fragment>
  );
};

Repos.propTypes = {
  repoList: PropTypes.array.isRequired
};

export default Repos;
