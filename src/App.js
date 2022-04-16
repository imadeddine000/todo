import { useState } from "react";
import React from "react";

function App() {
  const [todo, settodo] = useState('');
  const [list, setlist] = useState([]);
  const handleclick=()=>{
     setlist([...list,todo])
      setTimeout(()=>{
        settodo('')
      },500)
    
  }
  const handleremove=(item)=>{
    console.log(item)
    setlist([...list.filter(todo=>todo !==item)])
  }
  return (
    <div className="bg-[#4E9F3D] h-screen flex  items-center  justify-center flex-col">
     <div className="bg-[#D8E9A8]  rounded-xl">
        <input onChange={(e)=>settodo(e.target.value)} value={todo} type="text" className="px-20 py-2 rounded-xl m-2"/>
        <button onClick={()=>handleclick()} className="bg-[#4E9F3D] px-3 py-1 rounded-sm mx-2 hover:bg-green-900">+</button>
     </div>
     <div className="shadow-lg bg-[#D8E9A8] my-1 py-1 px-1  rounded  flex flex-col">
       {list &&list.map((item,index)=>(
         <div key={index}  className=" px-1 rounded-xl w-[26.5rem] flex flex-row justify-between my-2 ">
         <p className="text-xl ">{item}</p>
         <button className="bg-[#4E9F3D] px-2 rounded hover:bg-green-900 " onClick={()=>handleremove(item)}>X</button>
       </div>

       ))}
        
       
       

      
       
     </div>
    </div>
  );
}

export default App;
