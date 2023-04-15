import { useSelector, useDispatch } from "react-redux";
import { increaseVote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification,
} from "../reducers/notificationReducer";
import Notification from "./Notification";
import anecdoteService from "../services/anecdotes";

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

  const handleVote = async (anecdote) => {
    await anecdoteService.updateAnecdote({
      ...anecdote,
      votes: anecdote.votes + 1,
    });
    dispatch(increaseVote(anecdote.id));

    dispatch(setNotification(`you voted ${anecdote.content}`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, "3000");
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
