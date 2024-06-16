import React from "react";
import logo from '../../assets/eagl-logo.png'
function Header(){
return(
    <div className="border py-3 shadow-xl  rounded-2xl ">
        <div className="flex justify-between">
            <div className="w-1/2 px-8"><img src={logo} alt="" width={120}/></div>
            <div className="w-1/2 flex justify-around items-center  text-xl  ">
            <div className=" hover:border-[#0F75BD] hover:border-b-2 hover:text-[#0F75BD] p-2 "><a href="#" className="p-2">Home </a></div>
            <div className=" hover:border-[#0F75BD] hover:border-b-2 hover:text-[#0F75BD] p-2 "><a href="#" className="p-2">About Us </a></div>
            <div className=" hover:border-[#0F75BD] hover:border-b-2 hover:text-[#0F75BD] p-2 "><a href="#" className="p-2">Contact Us </a></div>
            <div className=" hover:border-[#0F75BD] hover:border-b-2 hover:text-[#0F75BD] p-2 "><a href="#" className="p-2">Donations </a></div>
            </div>
        </div>
    </div>
)
}

export default Header