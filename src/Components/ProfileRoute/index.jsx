import { Navigate } from "react-router-dom";

const UserRoute = ({ children, lang = "uz" }) => {
  if (JSON.parse(localStorage.getItem("login")) === true) {
    return <Navigate to={`/profile`} />;
  }
  return children;
};

export default UserRoute;
