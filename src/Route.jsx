import Home from './home/Home';
import News from './news/News';
import Contact from './contact/Contact';
import Compteur from './compteur/Page';

export default function Route({ page }) {
  switch (page) {
    case '#home':
    case '#':
    case '':
      return <Home />;
    case '#news':
      return <News />;
    case '#contact':
      return <Contact />;
    case '#compteur':
      return <Compteur />;
    default:
      return <div>404 error</div>;
  }
}
