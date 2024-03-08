import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, change } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, updatePrice: (todo.updatePrice || todo.price) + change }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = Slice.actions;
export default Slice.reducer;
