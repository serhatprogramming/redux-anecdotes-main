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
  const anectodes = useSelector((state) => state.anectodes);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      {anectodes
        .sort((a, b) => b.votes - a.votes)
        .filter((anectode) =>
          anectode.content.toLowerCase().includes(filter.toLowerCase())
        )
        .map((anecdote) => (
          <Anectode
            key={anecdote.id}
            anectode={anecdote}
            handleVote={() => dispatch(increaseVote(anecdote.id))}
          />
        ))}
    </>
  );
};

export default AnectodeList;
