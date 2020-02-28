import Axios from "./http";
import { IPost } from "../interfaces";

function getPosts(): Promise<IPost[]> {
  return Axios.get("/posts");
}

function createPost(payload: IPost): Promise<IPost> {
  return Axios.post("/posts", payload);
}

const postsApi = {
  getPosts,
  createPost
};

export default postsApi;
