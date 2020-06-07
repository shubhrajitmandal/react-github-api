import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) =>
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        type,
      },
    });

  const closeAlert = () => {
    dispatch({
      type: REMOVE_ALERT,
    });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
        closeAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
