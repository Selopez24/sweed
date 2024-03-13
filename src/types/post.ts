import { Post_Image } from './image'

export type Post = {
  id: string;
  content: string;
  createDate: Date;
  updateDate: Date;
  userId: string;
  images: Post_Image[];
  user: PostUser

}


export interface PostUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
};
