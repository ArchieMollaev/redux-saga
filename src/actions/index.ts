import { createAction } from "@reduxjs/toolkit";
import { IPost } from "../interfaces";

export const getPostsActions = {
  request: createAction("posts/request"),
  response: createAction<IPost[]>("posts/response")
};

export const createPostActions = {
  request: createAction("create-post/request"),
  response: createAction<IPost>("create-post/response")
};

export const createMessageAction = createAction<string>("message/create");
export const updateMessageAction = createAction<string>("message/update");
