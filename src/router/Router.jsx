import React, { lazy } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Loadable from '../components/loadable';
import UserRoute from '../Components/Navigates/ProfileRoute';

const HomePage = Loadable(
    lazy(() => import('../Pages/HomePage/HomePage'))
);
const Login = Loadable(
    lazy(() => import('../Pages/Login/Login'))
);
const Signup = Loadable(
    lazy(() => import('../Pages/Login/Signup'))
);
const ProfilePage = Loadable(
    lazy(() => import('../Pages/Profile'))
);
const Dashboard = Loadable(
    lazy(() => import('../Pages/Admin/dashboard'))
);
const Signin = Loadable(
    lazy(() => import('../Pages/Login/Signin'))
);
const NotAuth = Loadable(
    lazy(() => import('../Components/Navigates/NotAuth'))
);
const Topic = Loadable(
    lazy(() => import('../Pages/Admin/topic'))
);
const RootLayout = Loadable(
    lazy(() => import('../Components/Layouts/RootLayout'))
);


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<RootLayout />}>
                <Route
                    index
                    element={
                        <UserRoute>
                            <HomePage />
                        </UserRoute>
                    }
                />
                <Route
                    path="register"
                    element={
                        <UserRoute>
                            <Login />
                        </UserRoute>
                    }
                >
                    <Route
                        path="register/sign-up"
                        element={
                            <UserRoute>
                                <Signup />
                            </UserRoute>
                        }
                    />
                    <Route
                        path="register/sign-in"
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
                    <Route index element={<Topic />} />
                    {/* <Route path="" element={<Topic/>} /> */}
                </Route>

                <Route path="*" element={<h1>Not Found</h1>} />
            </Route>
        </>
    )
)