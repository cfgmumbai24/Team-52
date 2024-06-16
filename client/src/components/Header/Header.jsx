import React from "react";
import logo from '../../assets/eagl-logo.png'
import { useNavigate } from "react-router-dom";

const routes = [
    {
        label: "Dashboard",
        access: ["admin"],
        href: "/adminDashboard",
    },
    {
        label: "Dashboard",
        access: ["volunteer"],
        href: "/volunteerDashboard",
    },

    {
        label: "Add Volunteer",
        access: ["admin"],
        href: "/addVolunteer",
    },
    {
        label: "Add Benificiary",
        access: ["volunteer"],
        href: "/addBeneficiary",
    },
    {
        label: "Approve Benificiary",
        access: ["admin"],
        href: "/approveBenificiary",
    },
    {
        label: "Prices",
        access: ["admin", "volunteer"],
        href: "/price",
    }, {
        label: "Update Benificiary",
        access: ["volunteer"],
        href: "/updateBeneficiary",
    }

]

function Header() {

    const navigate = useNavigate();

    return (
        <div className="border py-3 shadow-xl  ">
            <div className="flex justify-between">
                <div className="w-[24%] px-8"><img src={logo} alt="" width={120} /></div>
                <div className="max-w-[76%]  flex justify-around items-center  text-xl gap-6 mr-4 ml-auto ">
                    {
                        routes.map((route) => {
                            if (route.access.includes(localStorage.getItem("role"))) {
                                return <div className="cursor-pointer hover:bg-black/10 px-2 py-1 transition duration-200 ease-in-out rounded-md  " onClick={() => navigate(route.href)}
                                    key={route.label}
                                > {route.label}</div>
                            }
                            return null
                        })
                    }
                    {/* <div> className="cursor-pointer hover:bg-black/10 px-2 py-1 transition duration-200 ease-in-out rounded-md   " onClick={() => navigate("/adminDashboard")}>Dashboard </div>
                    <div className="cursor-pointer hover:bg-black/10 px-2 py-1 transition duration-200 ease-in-out rounded-md  " onClick={() => navigate("/addVolunteer")}> Add Volunteer</div>
                    <div className="cursor-pointer hover:bg-black/10 px-2 py-1 transition duration-200 ease-in-out rounded-md   " onClick={() => navigate("/addBeneficiary")}> Add Benificiary </div>
                    <div className="cursor-pointer hover:bg-black/10 px-2 py-1 transition duration-200 ease-in-out rounded-md   " onClick={() => navigate("/approveBenificiary")}> Approve Benificiary </div>
                    <div className="cursor-pointer hover:bg-black/10 px-2 py-1 transition duration-200 ease-in-out rounded-md   " onClick={() => navigate("/price")}> Prices </div> */}
                    {
                        localStorage.getItem("token") && <div className="cursor-pointer bg-blue-500 text-white px-3 py-1 transition duration-200 ease-in-out rounded-md " > {
                            <button onClick={() => {
                                navigate("/login")
                                localStorage.removeItem("token")
                            }}>Logout</button>
                        } </div>
                    }


                </div>
            </div>
        </div>
    )
}

export default Header