import {User} from './user.ts';

export type Comment = {
  id: string;
  date: string;
  user: Omit<User, 'token' | 'email'>;
  comment: string;
  rating: number;
}

export type Comments = Comment[];

export type NewComment = Pick<Comment, 'comment' | 'rating'>;
