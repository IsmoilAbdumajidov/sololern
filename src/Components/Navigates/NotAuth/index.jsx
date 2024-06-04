import { Navigate } from "react-router-dom";

const NotAuth = ({ children }) => {
  if (JSON.parse(localStorage.getItem("login")) !== true) {
    return <Navigate to={`/login`} />;
  }
  return children;
};

export default NotAuth;
