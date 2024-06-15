import { useRoutes } from "react-router-dom";
import Login from "./components/login";
import AddVolunteer from "./components/AddVolunteer";
import AdminDashboard from "./components/AdminDashboard";


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
        }, {
            path: "/adminDashboard", element: <AdminDashboard />
        }

    ]);

    return element;
};

export default ProjectRoutes;
