import React, { useState } from "react";
import '../TrackVolunteer/track.css'
function TrackVolunteer(){

    const [VolData,setVolData] = useState([]);
    const mydata = [
        {
            id:"1",
            name : "Shubham",
            present: "Active",
            FamilyReached:"2",
            BenificiaryRegistered:"1",
            location:"Mumbai",
            url:'https://eagl.in/images/g5.jpg'
        },
        {
            id:"2",
            name : "Abhinash",
            present: "Active",
            FamilyReached:"1",
            BenificiaryRegistered:"2",
            location:"Goregao",
            url:'https://www.gramvikas.org/wp-content/uploads/2023/01/Narayan-Mallik-Photo-2-scaled.jpg '
        },
        {
            id:"3",
            name : "Brijesh",
            present: "Not Active",
            FamilyReached:"0",
            BenificiaryRegistered:"1",
            location:"MelGhat",
            url:'https://www.pradan.net/wp-content/uploads/2021/04/Assured-Income-Enhancement.jpg'
        },
        {
            id:"4",
            name : "Ram",
            present: "Active",
            FamilyReached:"6",
            BenificiaryRegistered:"3",
            location:"Osmanabad",
            url:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCxirRgGoXKvWDt0Px5dBjaP9d_miTlJzVphbgz0kbGOfLTKx74hNfbwjemvC3aNfvZVe9tKHwd51OM8bLCdEIVMisO4Ve9k_5RUtkHLYDVYaBo7fY9ZT_J3ud3G-n2hdNffW9Cq0BL83N/s707/Screenshot_2020-09-26-01-27-20.png '
        },
        {
            id:"4",
            name : "Abdul",
            present: "Active",
            FamilyReached:"3",
            BenificiaryRegistered:"1",
            location:"Powai",
            url:'https://atari-hyderabad.icar.gov.in/atarihyderabad/img/kvknews/goat3.jpg'
        },
        

        
    ]
    const [view,setView] = useState(false);
    function Past(){
        setView((prev)=>!prev)
    }

return (
    <div>
     <div className="flex justify-center my-6  ">
     <h1 className=" w-1/3 text-center font-bold text-[#0F75BD] text-5xl  p-4 rounded  ">Volunteer Status</h1>
     </div>
       <div className="flex w-screen justify-center"><div className="w-3/4 text-2xl font-bold  ">Daily Status </div></div> 
       <div className=" flex justify-center my-8    ">
       
        <table className="w-3/4  rounded-lg   ">
        <thead className="bg-blue-200 text-white ">
            <tr className="text-center font-bold border-b border-gray-300/70   ">
             <td className="p-2 ">Name </td>
             <td>Assinged Location</td>
             <td>Status </td>    
             {/* <td>Families Reached  </td>     */}
             {/* <td>Benificiary Registered  </td>     */}
             <td>Photo</td>
             </tr>
            
        </thead>
        <tbody className=" ">
            {
                mydata.map((item)=>(
                    <tr key={item.id} className="text-center  h-40 rounded  border-b border-gray-300/70  ">
                        <td className="p-2  ">{item.name}</td>
                        <td>{item.location}</td>
                        {/* <td>{item.present}</td> */}
                        <td>{item.present}</td>
                        {/* <td>{item.FamilyReached}</td>
                        <td>{item.BenificiaryRegistered}</td> */}
                        <td><div className="flex  justify-center"><img src={item.url} alt="" width={200}  className="" /></div></td>
                    </tr>
                ))
            }
        </tbody>
        </table>
        
       </div>
        

       <div className="flex justify-center mb-8  ">
       <div className="w-3/4  text-xl flex ">
        <label className="switch my-4 mx-2   " >
        <input type="checkbox" onClick={Past}/>
         <span className="slider"></span>
        </label>

        <div className=" p-2  rounded font-bold  " >See Past Data</div>
         </div>
       </div>

       {view &&
       <div className=" flex justify-center my-8    ">
       <table className="w-3/4  rounded   bg-gray-100 ">
       <thead>
           <tr className="text-center border-b border-gray-300/70   ">
            <td className="p-2 font-bold">Name </td>
            <td className="font-bold">Assinged Location</td>
            {/* <td>Status </td>     */}
            <td className="font-bold">Families Reached  </td>    
            <td className="font-bold">Benificiary Registered  </td>    
            </tr>
           
       </thead>
       <tbody className=" ">
           {
               mydata.map((item)=>(
                   <tr key={item.id} className="text-center rounded  border-b border-gray-300/70  ">
                       <td className="p-2 ">{item.name}</td>
                       <td>{item.location}</td>
                       {/* <td>{item.present}</td> */}
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