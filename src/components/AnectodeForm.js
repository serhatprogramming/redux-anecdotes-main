import React from "react";
import { useDispatch } from "react-redux";
import { createAnectode } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification,
} from "../reducers/notificationReducer";
import Notification from "./Notification";

const AnectodeForm = () => {
  const dispatch = useDispatch();

  const addAnectode = (event) => {
    event.preventDefault();
    const content = event.target.anectode.value;
    console.log("content: ", content);
    event.target.anectode.value = "";
    dispatch(createAnectode(content));
    dispatch(setNotification(`you created a new anectode as "${content}"`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, "3000");
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnectode}>
        <div>
          <input name="anectode" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnectodeForm;
