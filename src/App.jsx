import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/Register/Register";
import LoginPage from "./Pages/Login/LoginPage";
import UserRoute from "./Components/ProfileRoute";
import { Toaster } from "react-hot-toast";
import ProfilePage from "./Pages/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <UserRoute>
              <HomePage />
            </UserRoute>
          }
        />
        <Route
          path="/register"
          element={
            <UserRoute>
              <Register />
            </UserRoute>
          }
        />
        <Route
          path="/login"
          element={
            <UserRoute>
              <LoginPage />
            </UserRoute>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
