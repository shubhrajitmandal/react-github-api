import React, { Fragment } from "react";
import { FaCode } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  const {
    html_url,
    name,
    description,
    language,
    stargazers_count,
    updated_at,
  } = repo;
  return (
    <div className="card-repo">
      <h3>
        <a href={html_url}># {name}</a>
      </h3>
      <p>{description}</p>
      <div className="repo-stats">
        {language && (
          <Fragment>
            <FaCode className="icon-stats" />
            <h5>{language}</h5>
          </Fragment>
        )}
        <MdStar className="icon-stats" />
        <h5>{stargazers_count}</h5>
        <div style={{ marginLeft: "auto", color: "#555" }}>
          Updated {lastUpdated(updated_at)}
        </div>
      </div>
    </div>
  );
};

const lastUpdated = (t) => {
  const tm = Date.parse(t);
  const now = Date.now();
  const s = Math.floor((now - tm) / 1000);
  const min = Math.floor(s / 60);
  if (min < 1) return `${s}s ago`;
  const hr = Math.floor(min / 60);
  if (hr < 1) return `${min}` + (min > 1 ? " minutes" : " minute") + " ago";
  const day = Math.floor(hr / 24);
  if (day < 1) return `${hr}` + (hr > 1 ? " hours" : " our") + " ago";
  const month = Math.floor(day / 30);
  if (month < 1) return `${day}` + (day > 1 ? " days" : " day") + " ago";
  const yr = Math.floor(month / 12);
  if (yr < 1) return `${month}` + (month > 1 ? " months" : " month") + " ago";
  return `${yr}` + (yr > 1 ? " years" : " year") + " ago";
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
