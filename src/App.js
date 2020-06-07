import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import Profile from "./components/users/Profile";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [isContent, setIsContent] = useState(false);

  const searchUsers = async (text) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUsers(res.data.items);
    setLoading(false);
    setIsContent(true);
    setAlert(null);
  };

  // Get User Profile
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);

    setUser(res.data);
    setLoading(false);
  };

  //Get Repos
  const getRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(res.data);

    setRepos(res.data);
    setLoading(false);
  };

  // Clear Users
  const clearContent = (val) => {
    setUsers([]);
    // setLoading(false);
    setIsContent(val);
  };

  // Set Alert
  const setAlertObj = (msg, type) => {
    setAlert({ msg: msg, type: type });

    // setTimeout(() => setAlert(null), 1500);
  };

  // Close Alert
  const closeAlert = () => {
    setAlert(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar title="LOOKUP GITHUB" />
        <Alert alert={alert} closeAlert={closeAlert} />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    isContent={isContent}
                    clearContent={clearContent}
                    setAlert={setAlertObj}
                  />
                  <Users loading={loading} usersList={users} />
                </Fragment>
              )}
            />

            <Route exact path="/about" component={About} />

            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <Profile
                  {...props}
                  getUser={getUser}
                  getRepos={getRepos}
                  user={user}
                  loading={loading}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
