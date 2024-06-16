import { useRoutes } from "react-router-dom";
import Login from "./components/login";
import AddVolunteer from "./components/AddVolunteer";
import AdminDashboard from "./components/AdminDashboard";
import AddBeneficiary from "./components/Addbeneficiary";
import GoatPrice from "./components/GoatPrice/GoatPrice";
import ApproveBenificiary from "./components/ApproveBenificiary";
import UpdateBeneficiary from "./components/UpdateBeneficiary";


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
        },
        {
            path: "/price", element: <GoatPrice />
        },
        {
            path: "/approveBenificiary", element: <ApproveBenificiary />
        },
        {
            path: "/updateBeneficiary", element: <UpdateBeneficiary />
        }
    ]);

    return element;
};

export default ProjectRoutes;
