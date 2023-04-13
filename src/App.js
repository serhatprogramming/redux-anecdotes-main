import { useSelector, useDispatch } from "react-redux";
import { createAnectode, increaseVote } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const addAnectode = (event) => {
    event.preventDefault();
    const content = event.target.anectode.value;
    console.log("content: ", content);
    event.target.anectode.value = "";
    dispatch(createAnectode(content));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(increaseVote(anecdote.id))}>
                vote
              </button>
            </div>
          </div>
        ))}
      <h2>create new</h2>
      <form onSubmit={addAnectode}>
        <div>
          <input name="anectode" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
