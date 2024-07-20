import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/Register/Register";
import UserRoute from "./Components/Navigates/ProfileRoute";
import { Toaster } from "react-hot-toast";
import ProfilePage from "./Pages/Profile";
import NotAuth from "./Components/Navigates/NotAuth";
import Signup from "./Pages/Login/Signup";
import Signin from "./Pages/Login/Signin";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Admin/dashboard";
import Topic from "./Pages/Admin/topic";

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
              <Login />
            </UserRoute>
          }
        >
          <Route
            path="sign-up"
            element={
              <UserRoute>
                <Signup />
              </UserRoute>
            }
          />
          <Route
            path="sign-in"
            element={
              <UserRoute>
                <Signin />
              </UserRoute>
            }
          />
          <Route
            index
            element={
              <UserRoute>
                <Signin />
              </UserRoute>
            }
          />
        </Route>
        <Route
          path="/profile"
          element={
            <NotAuth>
              <ProfilePage />
            </NotAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <Dashboard />
          }
        >
          <Route index element={<Topic/>} />
          {/* <Route path="" element={<Topic/>} /> */}
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
