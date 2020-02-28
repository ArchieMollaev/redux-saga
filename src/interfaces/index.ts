export interface IPost {
  id?: number;
  title: string;
  author: string;
}

export interface IStore {
  posts: IPost[];
  message: string;
}
