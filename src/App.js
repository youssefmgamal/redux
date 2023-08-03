import { useDispatch } from "react-redux";
import "./App.css";
import TaskForm from "./components/addtask";
import TaskList from "./components/listtasks";
import { getfilteredTasks } from "./slices/todoslice";
import { useState } from "react";


function App() {
  const [filter, setfilter] = useState("all");

  const dispatch = useDispatch();

  const handlefilter = (e) =>{
 
    
  dispatch(getfilteredTasks(filter))

  }

  const handlechange = (e) =>{

    setfilter(e.target.value === "true" ? true : e.target.value === "false" ? false: "all")


  }

  return (
    <div className="App">
      <TaskList/>
      <TaskForm />
      <br />
      <select onChange={handlechange}>
        <option value={"all"}>all</option>
        <option value={true}>done</option>
        <option value={false}>not done</option>
      </select>
      <button onClick={handlefilter}>filter</button>
    </div>
  );
}

export default App;
