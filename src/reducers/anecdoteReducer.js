import { createSlice } from "@reduxjs/toolkit";

import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload);
    },
    increaseVote(state, action) {
      return state.map((anecdote) =>
        anecdote.id === action.payload
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      );
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { createAnecdote, increaseVote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = (dispatch) => {
  return async () => {
    return 0;
  };
};

export default anecdoteSlice.reducer;
