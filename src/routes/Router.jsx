


import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Hero from "../pages/Hero";
import MoreGame from "../pages/MoreGame";
import GameDetails from "../pages/GameDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound"; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: (
                    <>
                        <Home />
                        <Hero />
                    </>
                ),
                loader: () => fetch("/game.json").then(res => res.json()),
            },
            {
                path: "/games",
                element: <MoreGame />,
                loader: () => fetch("/games.json").then(res => res.json()),
            },
            {
                path: "/game/:id",
                element: (
                    <PrivateRoute>
                        <GameDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch("/games.json")
                        .then(res => res.json())
                        .then(data => data.find(g => g.id == params.id)),
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "/auth/login", element: <Login /> },
            { path: "/auth/register", element: <Register /> },
        ],
    },
    
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;






