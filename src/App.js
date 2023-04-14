import { useEffect } from "react";

import AnectodeForm from "./components/AnectodeForm";
import AnectodeList from "./components/AnectodeList";
import Filter from "./components/Filter";

import anecdoteService from "./services/anectodes";

import { setAnecdotes } from "./reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService.getAll().then((data) => dispatch(setAnecdotes(data)));
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnectodeList />
      <AnectodeForm />
    </div>
  );
};

export default App;
