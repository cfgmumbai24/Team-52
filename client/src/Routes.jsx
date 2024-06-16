import { useRoutes } from "react-router-dom";
import Login from "./components/login";
import AddVolunteer from "./components/AddVolunteer";
import AdminDashboard from "./components/AdminDashboard";
import AddBeneficiary from "./components/Addbeneficiary";


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
        }, {
            path: "/addBeneficiary", element: <AddBeneficiary />
        }
    ]);

    return element;
};

export default ProjectRoutes;
