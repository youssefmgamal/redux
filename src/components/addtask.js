import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../slices/todoslice";

export default function TaskForm() {
  
  const [id, setid] = useState("");
  const [task, settask] = useState("");
  const [status, setstatus] = useState(true);
  const dispatch = useDispatch();


  const handleid = (e) =>{
    setid(e.target.value);
  }
  const handletask = (e) =>{
    settask(e.target.value);
  }
  const handlestatus = (e) =>{
    setstatus(e.target.value === "true" ? true : false);

  }
  
const handlesubmit = (e) =>{
  e.preventDefault()

  const newTask = {
    id:id,
    description:task,
    isdone: status,
  }
  dispatch(addtask(newTask))

  setid("");
  settask("");
  setstatus("");

}

  return (
    <React.Fragment>
      <form>
        <p>enter ID: </p> <input value={id} onChange={handleid}/>
        <p> enter task : </p> <input value={task} onChange={handletask}/>
        <br/>
        <br/>
        <p>task status</p>
        <select value={status} onChange={handlestatus}>
          <option value={true}>done</option>
          <option value={false}>not done</option>
        </select>
        <br/>
        <button onClick={handlesubmit}>submit</button>
      </form>
    </React.Fragment>
  );
}
