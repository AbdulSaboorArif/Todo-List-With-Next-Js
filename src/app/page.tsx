"use client"
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export default function TodoList(){
  
  const [todo, settodo]= useState();
  const [getInput, setgetInput] = useState<string[]>([]); // This is different from getInputany function

  // This is the onChange function
  const getInputany=(event:any)=>{
    console.log(event.target.value)
     settodo(event.target.value)
  }
  const getDataany=()=>{
    console.log(todo);
    setgetInput((prev: any) => [...prev, todo]); // Add new task to the array
    settodo(""); 
    
  }

  const   deleteData =(item:any)=>{
      console.log(item)
      let filterData = getInput.filter((crutElem, id)=>{
            return id != item 
      })
      setgetInput(filterData)
    }
  // console.log(getInput)
  return(
    <>   
     <div className="text-2xl flex justify-center items-center bg-blue-300 w-full h-screen">
          <div>
            <h1>To-Do Lists</h1>
           <input type="text" placeholder="Add a task" value={todo} onChange={getInputany}  />
           <button onClick={getDataany}>Add</button>
           
           {/* {getInput} */}

            {/* Display tasks */}
         {getInput.map((list, item)=>{
          return(
            <div className="listitem">
              <ul>
                <li key={item}>{list}</li>
              </ul>
              <MdDelete onClick={()=>deleteData(item)} />
            </div>
          )
         })}
          </div>
      </div>
      </>

    );
}
