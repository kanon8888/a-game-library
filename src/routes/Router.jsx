import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayout></HomeLayout>,
        },
        {
            path:"/auth",
            element: <h3>Authentication layout</h3>,
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