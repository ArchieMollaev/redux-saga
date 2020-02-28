import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { getPostsActions, updateMessageAction } from "../actions";
import { IStore, IPost } from "../interfaces";

const postsReducer = createReducer<IPost[]>([], {
  [getPostsActions.response.type]: (state, action) => action.payload
});

const messageReducer = createReducer<string>("", {
  [updateMessageAction.type]: (state, action) => action.payload
});

const rootReducer = combineReducers<IStore>({
  posts: postsReducer,
  message: messageReducer
});

export default rootReducer;
