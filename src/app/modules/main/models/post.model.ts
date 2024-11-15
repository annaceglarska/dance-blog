export type Posts = Post[]

export interface Post {
  id: string,
  author: string,
  authorId: string
  publishedAt: string,
  editedAt: string | null,
  tags: string[],
  title: string,
  /**
   * @description
   * Content is a type of markdown
   */
  content: string,
  status: StatusEnum,

}

export enum StatusEnum {
  ACTIVE = 0,
  INACTIVE = 1,
  DRAW = 2
}
