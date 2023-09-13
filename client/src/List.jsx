import axios from "axios";
import { baseURl } from "./utils/contrain";

const List=({id,task,setUpdateUi,updateMode})=>{
    const removeTask=()=>{
        axios.delete(`${baseURl}/delete/${id}`)
        .then((res)=>{console.log(res)
        setUpdateUi((prevState)=>!prevState)
        })
    }
    
    return(
        <>
        <div className="tasks">
        <p><b>{task}</b>
        <span>
        <span className="update" onClick={()=>updateMode(id,task)}><i class="fa-solid fa-pen-to-square"></i></span>
        <span className="delete" onClick={removeTask}> <i class="fa-solid fa-trash-can"></i></span>
        </span></p>
        </div>

        </>
    )
}
export default List;