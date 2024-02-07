import { Container } from 'react-bootstrap';
import Menu from './Menu';

export default function ErreurNavigation() {
  return (
    <Container>
      <Menu />
      <h1>Page Not found (404)</h1>
    </Container>
  );
}
