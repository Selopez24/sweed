import { Image } from './image'

export type Post = {
  id: string;
  content: string;
  createDate: Date;
  updateDate: Date;
  userId: string;
  images: Image[];
  user: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
  };

}
