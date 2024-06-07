import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/Register/Register";
import LoginPage from "./Pages/Login/LoginPage";
import UserRoute from "./Components/Navigates/ProfileRoute";
import { Toaster } from "react-hot-toast";
import ProfilePage from "./Pages/Profile";
import NotAuth from "./Components/Navigates/NotAuth";

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
        <Route
          path="/profile"
          element={
            <NotAuth>
              <ProfilePage />
            </NotAuth>
          }
        />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
