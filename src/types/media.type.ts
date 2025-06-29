export type TMedia = {
  id: number;
  slug: string;
  title: string;
  content: string;
  tags: string;
  likeAmount: number;
  isLiked: boolean;
  author: {
    id: string;
    name: string;
  };
  audit_trail: {
    created_at: string;
  };
};
