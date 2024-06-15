import React, { useState } from "react";
import '../TrackVolunteer/track.css'
function TrackVolunteer(){

    const [VolData,setVolData] = useState([]);
    const mydata = [
        {
            id:"1",
            name : "shubham",
            present: "Active",
            FamilyReached:"4",
            BenificiaryRegistered:"0",
            location:"Mumbai"
        },
        {
            id:"2",
            name : "shubham",
            present: "Active",
            FamilyReached:"4",
            BenificiaryRegistered:"0",
            location:"Mumbai"
        },
        {
            id:"3",
            name : "shubham",
            present: "Not Active",
            FamilyReached:"4",
            BenificiaryRegistered:"0",
            location:"Mumbai"
        },
        {
            id:"4",
            name : "shubham",
            present: "Active",
            FamilyReached:"4",
            BenificiaryRegistered:"0",
            location:"Mumbai"
        },
        {
            id:"5",
            name : "shubham",
            present: "Not Active",
            FamilyReached:"4",
            BenificiaryRegistered:"0",
            location:"Mumbai"
        },
    ]
    const [view,setView] = useState(false);
    function Past(){
        setView((prev)=>!prev)
    }

return (
    <div>
     <div className="flex justify-center my-6  ">
     <h1 className="text-xl w-1/3 text-center font-bold bg-blue-400 text-white  p-4 rounded  ">Volunteer Status</h1>
     </div>
        <div className="w-2/3 text-center text-xl    ">Daily Status</div>
       <div className=" flex justify-center my-8    ">
        <table className="w-1/2  rounded  shadow-lg shadow-blue-200  bg-gray-100 ">
        <thead>
            <tr className="text-center border-b border-gray-300/70   ">
             <td className="p-2 ">Name </td>
             <td>Assinged Location</td>
             <td>Status </td>    
             <td>Families Reached  </td>    
             <td>Benificiary Registered  </td>    
             </tr>
            
        </thead>
        <tbody className=" ">
            {
                mydata.map((item)=>(
                    <tr key={item.id} className="text-center rounded  border-b border-gray-300/70  ">
                        <td className="p-2 ">{item.name}</td>
                        <td>{item.location}</td>
                        <td>{item.present}</td>
                        <td>{item.FamilyReached}</td>
                        <td>{item.BenificiaryRegistered}</td>
                    </tr>
                ))
            }
        </tbody>
        </table>
        
       </div>
        

        <div className="w-2/3 text-center text-xl flex justify-center ">
        <label className="switch my-4 mx-2   " >
        <input type="checkbox" onClick={Past}/>
         <span className="slider"></span>
        </label>

        <div className=" p-2 rounded " >See Past Data</div>
         </div>

       {view &&
       <div className=" flex justify-center my-8    ">
       <table className="w-1/2  rounded shadow-lg shadow-blue-200  bg-gray-100 ">
       <thead>
           <tr className="text-center border-b border-gray-300/70   ">
            <td className="p-2 ">Name </td>
            <td>Assinged Location</td>
            <td>Status </td>    
            <td>Families Reached  </td>    
            <td>Benificiary Registered  </td>    
            </tr>
           
       </thead>
       <tbody className=" ">
           {
               mydata.map((item)=>(
                   <tr key={item.id} className="text-center rounded  border-b border-gray-300/70  ">
                       <td className="p-2 ">{item.name}</td>
                       <td>{item.location}</td>
                       <td>{item.present}</td>
                       <td>{item.FamilyReached}</td>
                       <td>{item.BenificiaryRegistered}</td>
                   </tr>
               ))
           }
       </tbody>
       </table>
       
      </div> }


      {/* <div className="bg-green-300 "> hello </div> */}
    </div>
)
}

export default TrackVolunteer