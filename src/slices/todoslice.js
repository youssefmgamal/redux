import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todolist",
  initialState: {
    tasks: [],
    filteredtasks: [],
    isfiltered: false,
  },

  reducers: {
    addtask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
      if (state.isfiltered === false){
        state.filteredtasks = [...state.tasks];
      }
    },

    gettasks: (state) => {
      state.tasks = [{ id: "1", description: "gym", isdone: true }];
      state.filteredtasks = [{ id: "1", description: "gym", isdone: true }];
    },

    getfilteredTasks: (state, action) => {
      if (action.payload === "all") {
        state.filteredtasks = state.tasks;
        state.isfiltered = false
      } else {
        state.filteredtasks = state.tasks.filter(task => task.isdone === action.payload)
        state.isfiltered = true
      }
    },
  },
});

export const { addtask, gettasks, getfilteredTasks } = todoSlice.actions;

export default todoSlice.reducer;
