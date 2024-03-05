import { ImageDTO } from './image'

export type Post = {
  id: string;
  content: string;
  createDate: Date;
  updateDate: Date;
  userId: string;
  images: ImageDTO[];
  user: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
  };

}
