import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register";
import NewsDetails from "../Components/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path : "/",
                element: <Home></Home>,
                loader : () => fetch(`/news.json`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
            }
        ]
    }
])

export default router;