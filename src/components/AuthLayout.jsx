import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.authStatus);
  let authValue = authStatus !== authentication ? true : false;

  useEffect(() => {
    if (authentication && authValue) {
      navigate("/login");
    } else if (!authentication && authValue) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <div>Loading...</div> : <>{children}</>;
}
