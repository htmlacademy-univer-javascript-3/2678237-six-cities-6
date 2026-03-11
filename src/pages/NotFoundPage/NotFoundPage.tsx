import {Link} from 'react-router-dom';
import './notFoundPage.css';

export function NotFoundPage() {
  return (
    <div className="not-found-block">
      <h2>404 Not Found</h2>
      <Link
        to="/"
        className="btn-link"
      >
        Go to homepage
      </Link>
    </div>
  );
}
