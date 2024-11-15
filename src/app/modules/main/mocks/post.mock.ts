import { Posts, StatusEnum } from "../models/post.model";

export const postsMock: Posts = [
  {
    id: "0",
    author: "Grzes",
    authorId: "0",
    publishedAt: "2024-10-15T12:15:24.002Z",
    editedAt: null,
    tags: ["ballroom-dance", "motivation", "dance"],
    title: "How not to lose motivation to dance",
    content: `Feeling the desire to dance when there is no visible progress.

  > **ProTip:** Don't take part in dance competitions.`,
    status: StatusEnum.ACTIVE,
  },
  {
    id: "1",
    author: "Ania",
    authorId: "1",
    publishedAt: "2024-11-15T12:15:24.002Z",
    editedAt: "2023-8-13",
    tags: ["high-heels", "dance"],
    title: "Spins in choreo",
    content: `Protips:
- look at one point for as long as possible
- keep your center vertical.`,
    status: StatusEnum.ACTIVE,
  }
]
