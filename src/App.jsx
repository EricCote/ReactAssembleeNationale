import { useEffect, useState } from 'react';
import Menu from './Menu';
import Route from './Route';
import { Container } from 'react-bootstrap';

//todo: fix the error of multiple navigations while using strict mode
export default function App() {
  const [currentPage, setCurrentPage] = useState(window.location.hash);

  function changePage(evt) {
    setCurrentPage(window.location.hash);
  }

  useEffect(() => {
    //Handle the "hashchange" event
    window.addEventListener('hashchange', changePage);
  }, []);

  return (
    <Container>
      <Menu />
      <Route page={currentPage} />
    </Container>
  );
}
