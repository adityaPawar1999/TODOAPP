
import { useEffect, useState } from 'react';
import './index.css'
import List from './List';
import axios from 'axios';
import { baseURl } from './utils/contrain';

const App = () => {
  const [input, setInput] = useState("")
  const [task, setTask] = useState([]);
  const [updateUi, setUpdateui] = useState(false);
  const [updateId, setUpdateId] = useState(null)
  useEffect(() => {
    axios.get(`${baseURl}/get`)
      .then((res) => {
        console.log("data added")
        setTask(res.data)
      })
      .catch((error) => { console.log(error) })
  }, [updateUi]);

  const addTask = () => {
    axios.post(`${baseURl}/save`, { task: input })
      .then((res) => { 
        console.log(res.data) 
      })
    setInput("")
    setUpdateui((prevState) => !prevState)
  }
  const updateMode = (id, text) => {
    console.log(text)
    setInput(text)
    setUpdateId(id)
  }
  const updateTask = () => {
    axios.put(`${baseURl}/update/${updateId}`, { task: input })
      .then((res) => { 
        console.log(res.data)
      })
    setUpdateui((prevState) => !prevState)
    setUpdateId(null)
    setInput("")
  }
  return (
    <>
      <div className='mainContainer text-white'>
        
      <h1 className='text-center  heading'>DO DAILY : </h1><br/>
      <div>
        <input type='text' className='inputdata' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit' className='button' onClick={updateId ? updateTask : addTask}>{updateId ? "update Task" : "Add Task"}</button>
        <hr/><br/>

        <ul className=''>
          {task.map((task) => (
            <List
              key={task._id}
              id={task._id}
              task={task.task}
              setUpdateUi={setUpdateui}
              updateMode={updateMode} />
          ))}
        </ul>
        <br/>
      </div>
      </div>




    </>
  )
}
export default App;
