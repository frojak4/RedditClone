type Post = {
  community: string;
  created_at: string;
  header: string;
  content: string;
  user: string;
  upvotes: number;
};

type CommentType = {
  community: string;
  post: string;
  created_at: string;
  user: string;
  content: string;
  upvotes: number;
};
