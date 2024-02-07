import { createBrowserRouter } from 'react-router-dom';
import Home from './home/Home';
import News from './news/News';
import Contact from './contact/Contact';
import Layout from './Layout';
import Compteur from './compteur/Page';
import ErreurNavigation from './ErreurNavigation';

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
        element: <Contact />,
      },
      {
        path: 'compteur',
        element: <Compteur />,
      },
    ],
  },
]);

export default router;
