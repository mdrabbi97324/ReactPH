import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path : "/",
                element: <Home></Home>,
                loader : () => fetch(`/news.json`)
            }
        ]
    }
])

export default router;