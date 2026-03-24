import {Review} from '../Review/Review.tsx';
import {Comments} from '../../types/comment.ts';

interface ReviewsListProps {
  reviews: Comments;
}

export function ReviewsList({ reviews }: ReviewsListProps) {
  const countReviews = reviews.length | 0;

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{countReviews}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review review={review} key={review.id}/>
        ))}
      </ul>
    </>
  );
}
