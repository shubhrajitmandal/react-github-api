import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { MdWork, MdLocationOn, MdEmail, MdLink } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { FaUser, FaTimesCircle, FaCheckCircle } from "react-icons/fa";

import GithubContext from "../../context/github/githubContext";

const Profile = ({ match }) => {
  const { user, loading, getUser, repos, getRepos } = useContext(GithubContext);

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    email,
    blog,
    bio,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="container-pf">
        <div>
          <div className="card-lg">
            <img src={avatar_url} alt="profile-pic" className="profile-img" />
            <h2 style={{ color: "#ca1225" }}>{name}</h2>
            {/* <h4 style={{ textDecoration: "underline" }}>{login}</h4> */}
            {company && (
              <p>
                <MdWork className="icon-sm" />
                {company}
              </p>
            )}
            {location && (
              <p>
                <MdLocationOn className="icon-sm" />
                {location}
              </p>
            )}
            {email && (
              <p>
                <MdEmail className="icon-sm" />
                {email}
              </p>
            )}
            {blog && (
              <p>
                <MdLink className="icon-sm" />
                {blog}
              </p>
            )}

            <div className="badge-container">
              <div className="badge">
                Followers <span className="badge-val">{followers}</span>
              </div>
              <div className="badge">
                Following <span className="badge-val">{following}</span>
              </div>
              <div className="badge">
                Repositories <span className="badge-val">{public_repos}</span>
              </div>
              <div className="badge">
                Public Gists <span className="badge-val">{public_gists}</span>
              </div>
            </div>

            <a href={html_url} className="btn-lg">
              Visit Github Profile
            </a>
          </div>
        </div>
        <div>
          {bio && (
            <div className="bio">
              <h2>About Me</h2>
              <br />
              <p>{bio}</p>
            </div>
          )}
          <Repos repoList={repos} />
        </div>
      </div>
    );
  }
};

export default Profile;
