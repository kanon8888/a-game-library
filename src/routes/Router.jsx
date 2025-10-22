import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayout></HomeLayout>,
        },
        {
            path:"/auth",
            element: <Home></Home>,
            
        },
        {
            path:"/banner",
            element: <h3>Banner layout</h3>,
        },
        {
            path:"/*",
            element: <h3>Error404</h3>,
        },
    ]
)

export default router;