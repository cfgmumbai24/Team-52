import { useRoutes } from "react-router-dom";
import Login from "./components/login";
import AddVolunteer from "./components/AddVolunteer";


const ProjectRoutes = () => {
    let element = useRoutes([
        {
            path: "/login", element: <Login />
        },
        {
            path: "/", element: <Login />
        },
        {
            path: "/addVolunteer", element: <AddVolunteer />
        }

    ]);

    return element;
};

export default ProjectRoutes;
