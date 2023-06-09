import { useSelector, useDispatch } from "react-redux";
import { castVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import Notification from "./Notification";

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVote}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleVote = (anecdote) => {
    dispatch(setNotification(`you voted`), 3);
    dispatch(castVote(anecdote));
  };

  return (
    <>
      <Notification />
      {[...anecdotes]
        .sort((a, b) => b.votes - a.votes)
        .filter((anecdote) =>
          anecdote.content.toLowerCase().includes(filter.toLowerCase())
        )
        .map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleVote={() => handleVote(anecdote)}
          />
        ))}
    </>
  );
};

export default AnecdoteList;
