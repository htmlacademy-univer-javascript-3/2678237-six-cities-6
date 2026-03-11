import {createBrowserRouter} from 'react-router-dom';
import App from '../App.tsx';
import {MainPage} from '../pages/MainPage.tsx';
import {LoginPage} from '../pages/LoginPage.tsx';
import {OfferPage} from '../pages/OfferPage.tsx';
import {NotFoundPage} from '../pages/NotFoundPage.tsx';
import PrivateRoute from './privateRoute.tsx';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {FavoritesPage} from '../pages/FavoritesPage.tsx';

const router = createBrowserRouter([
  {
    path: AppRoute.Root,
    element: <App/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: AppRoute.Offer,
        element: <OfferPage/>
      },
      {
        path: AppRoute.Favorites,
        element:
          <PrivateRoute authStatus={AuthorizationStatus.NoAuth}>
            <FavoritesPage/>
          </PrivateRoute>
      }
    ]
  },
  {
    path: AppRoute.Login,
    element: <LoginPage/>
  },
]);

export default router;
