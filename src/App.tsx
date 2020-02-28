import React, { useCallback, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsActions,
  createMessageAction,
  createPostActions
} from "./actions";
import { IStore } from "./interfaces";

function usePostsCustomHook() {
  const dispatch = useDispatch();
  const getPosts = useCallback(() => {
    dispatch(getPostsActions.request());
  }, [dispatch]);

  const createPost = useCallback(() => {
    dispatch(createPostActions.request());
  }, [dispatch]);

  const posts = useSelector((state: IStore) => state.posts);

  return { posts, getPosts, createPost };
}

function useMessageCustomHook() {
  const dispatch = useDispatch();
  const createMessage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(createMessageAction(e.target.value));
    },
    [dispatch]
  );

  const message = useSelector((state: IStore) => state.message);

  return { message, createMessage };
}

function App() {
  const { posts, getPosts, createPost } = usePostsCustomHook();
  const { message, createMessage } = useMessageCustomHook();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <input onChange={createMessage} />

        <span>{message}</span>
        <button type="button" onClick={createPost}>
          Create Post
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={getPosts}>
          GET ALL POSTS
        </button>

        <ol>
          {posts.map(post => (
            <li>
              <div>
                <span>Title:</span>&nbsp;
                <b>{post.title}</b>&nbsp;
              </div>

              <div>
                <span>Author:</span>&nbsp;
                <span>{post.author}</span>&nbsp;
              </div>
            </li>
          ))}
        </ol>
      </header>
    </div>
  );
}

export default App;
