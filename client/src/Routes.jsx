import { useRoutes } from "react-router-dom";
import Login from "./components/login";


const ProjectRoutes = () => {
    let element = useRoutes([
        {
            path: "/login", element: <Login />
        },
        {
            path: "/", element: <Login />
        }

    ]);

    return element;
};

export default ProjectRoutes;
