import { createSlice } from "@reduxjs/toolkit";

const anectodeSlice = createSlice({
  name: "anectodes",
  initialState: [],
  reducers: {
    createAnectode(state, action) {
      //state.push(asObject(action.payload));
    },
    increaseVote(state, action) {
      return state.map((anectode) =>
        anectode.id === action.payload
          ? { ...anectode, votes: anectode.votes + 1 }
          : anectode
      );
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { createAnectode, increaseVote, setAnecdotes } =
  anectodeSlice.actions;
export default anectodeSlice.reducer;
