import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Hero from "../pages/Hero";
import MoreGame from "../pages/MoreGame";
import GameDetails from "../pages/GameDetails";

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
                loader: () => fetch("/game.json").then(res => res.json())
            },
            {
                path: "/games",
                element: <MoreGame />,
                loader: () => fetch("/games.json").then(res => res.json())
            },
            {
                path: "/game/:id",
                element: <GameDetails />,
                loader: ({ params }) => fetch("/games.json")
                    .then(res => res.json())
                    .then(data => data.find(g => g.id === params.id))
            },
            { path: "/banner", element: <h3>Banner layout</h3> },
            { path: "/auth", element: <Home /> }
        ]
    },
    {
        path: "/*",
        element: <h3 className="text-center text-red-600 mt-10">Error 404: Page Not Found</h3>
    }
]);

export default router;








