import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import { Container } from 'react-bootstrap';

export default function Layout() {
  return (
    <Container>
      <Menu />
      <Outlet />
    </Container>
  );
}
