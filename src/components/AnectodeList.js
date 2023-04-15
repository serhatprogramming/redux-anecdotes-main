import { useSelector, useDispatch } from "react-redux";
import { increaseVote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification,
} from "../reducers/notificationReducer";
import Notification from "./Notification";
import anecdoteService from "../services/anectodes";

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
      {[...anectodes]
        .sort((a, b) => b.votes - a.votes)
        .filter((anectode) =>
          anectode.content.toLowerCase().includes(filter.toLowerCase())
        )
        .map((anectode) => (
          <Anectode
            key={anectode.id}
            anectode={anectode}
            handleVote={() => handleVote(anectode)}
          />
        ))}
    </>
  );
};

export default AnectodeList;
