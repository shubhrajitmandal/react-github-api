import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = (props) => {
  const { login, avatar_url } = props.user;

  return (
    <div className="card-sm">
      <img src={avatar_url} alt="" className="round-img" />
      <h3 className="title">{login}</h3>
      <Link to={`/user/${login}`} className="btn">
        More..
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
