



import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import MoreGame from "../pages/MoreGame";

const router = createBrowserRouter(
    [
        {
            path: "/",
            loader: () => fetch("/game.json"),
            element: <HomeLayout></HomeLayout>,
        },
        {
            path: "/auth",
            element: <Home></Home>,


        },
        
        {
            path: "/banner",
            element: <h3>Banner layout</h3>,
        },
        {
            path: "/*",
            element: <h3>Error404</h3>,
        },
    ]
)

export default router;