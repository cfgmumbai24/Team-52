import React from "react";
import Logo from '../assets/eagl-logo.png'
function Footer(){
 return(
    <div>
    <div className=" bg-black/70 text-white flex justify-center">
        <div className="w-3/4 grid grid-cols-3 gap-32 ">
            <div className="flex flex-col justify-center items-center ">
            <img src={Logo} alt="" />
            </div>

            <div> 
            <h4 className="text-xl font-bold my-2">About us </h4>
            <div className=" my-4 ">Eradication of the poverty and  hunger of the people at the bottom of the pyramid.</div>
            {/* <div className="h-8 my-2  "><a href="#" className=" bg-gray-200 py-2 px-2 text-lg rounded-lg hover:bg-gray-300  "> Read More </a></div> */}
            </div>

            {/* <div>
                <h2>Focus Areas</h2>
                <a href="#"></a>
             </div>
            <div>Future Challenge </div> */}

            <div className="text-center ">
                <h3 className="text-xl font-bold my-2" >Contact Us</h3>
                <div className="my-2 ">Aadi Allure D 1202 Kanjurmarg, East, Mumbai 400042.</div>
                 <div className="my-2 ">Email: drvaishali2.shende@gmail.com</div>

                 <div>CELL PHONE : +91-9869350748</div>
             </div>
        </div>
    </div>
    <div className="flex justify-center bg-black text-white ">
        <h4>Copyright @2024 all rights reserved </h4>
    </div>
    </div>
 )
}

export default Footer