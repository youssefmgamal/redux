import { useDispatch, useSelector } from "react-redux"
import TaskUi from "./taskUi"
import { useEffect } from "react";
import { gettasks } from "../slices/todoslice";
import React from "react";
// going to use useeffect and useselect and usedispatch
export default function TaskList(){


    const {filteredtasks} = useSelector (state => (state.todolist));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(gettasks())
    },[])


    return <React.Fragment>
        {filteredtasks.map((task) => <TaskUi id={task.id} description={task.description} isdone={task.isdone}/>)}
    </React.Fragment>

}

