import { Home,  Movie,  MyFavorites,  NowPlaying,  Popular,  TopRated } from "pages";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const routes: RouteObject[] = [
    {
        // Private routes
        path: "/",
        element: <PrivateRouter />, 
        children: [
            {
                // path: "/",
                index: true, // This is the default route
                element: <Home />,
            },
            {
                path: "/popular",
                element: <Popular />,
            },
            {
                path: "/top-rated",
                element: <TopRated />,
            },
            {
                path: "/now-playing",
                element: <NowPlaying />,
            },
            {
                path: "/my-favorites",
                element: <MyFavorites />,
            },
            {
                path: "/movie/:id",
                element: <Movie />,
            }
        ],
    },
    {
        // Public routes
        path: "/admin",
        element: <PublicRouter />,
        children: [
            {
                path: "/admin",
                element: <Home />,
            },
        ],
    },
];

export const router = createBrowserRouter(routes);