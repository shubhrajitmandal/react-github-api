import React, { useContext } from "react";
import { GoAlert } from "react-icons/go";

import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const { alert, closeAlert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <GoAlert className="alert-icon" />
        {alert.msg}
        <span className="alert-exit" onClick={closeAlert}>
          &#10006;
        </span>
      </div>
    )
  );
};

export default Alert;
