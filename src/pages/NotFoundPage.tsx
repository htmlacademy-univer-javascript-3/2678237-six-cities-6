import {Link} from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div style={{display: 'flex', height: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h2>404 Not Found</h2>
      <Link
        to="/"
        style={{padding: '10px', backgroundColor: '#4481c3', color: 'white', borderRadius: '8px'}}
      >
        Go to homepage
      </Link>
    </div>
  );
}
