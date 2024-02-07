import { createBrowserRouter } from 'react-router-dom';
import Home from './home/Home';
import News from './news/News';
import Layout from './Layout';
import Compteur from './compteur/Page';
import ErreurNavigation from './ErreurNavigation';
import { Suspense, lazy } from 'react';
import { Spinner } from 'react-bootstrap';

const Contact = lazy(() => import('./contact/Contact'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErreurNavigation />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<Spinner />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: 'compteur',
        element: <Compteur />,
      },
    ],
  },
]);

export default router;
