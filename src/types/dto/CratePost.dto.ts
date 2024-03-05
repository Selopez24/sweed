interface Image {
  url: string;
  pathName: string;
}

export interface createPostDTO {
  content: string;
  images: Image[];
}
