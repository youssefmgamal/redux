import { configureStore } from "@reduxjs/toolkit";
import todoslice from "../slices/todoslice";

const store = configureStore ({

   reducer: {

    todolist: todoslice
   }


})

export default store;