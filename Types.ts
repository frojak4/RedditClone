export type PostType = {
  title: string;
  content: string;
  id: number;
  created_at: string;
  username: string;
  community: string;
  error?: string;
  votes: number;
  comments: number;
};
