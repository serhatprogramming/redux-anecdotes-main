import { useSelector, useDispatch } from "react-redux";
import { increaseVote } from "../reducers/anecdoteReducer";

const Anectode = ({ anectode, handleVote }) => {
  return (
    <div key={anectode.id}>
      <div>{anectode.content}</div>
      <div>
        has {anectode.votes}
        <button onClick={handleVote}>vote</button>
      </div>
    </div>
  );
};

const AnectodeList = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anectode
            anectode={anecdote}
            handleVote={() => dispatch(increaseVote(anecdote.id))}
          />
        ))}
    </>
  );
};

export default AnectodeList;
