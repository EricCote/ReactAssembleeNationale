import { useEffect, useRef, useState } from 'react';
import { Button, ListGroup, Spinner } from 'react-bootstrap';
import DisplayEmploye from './DisplayEmploye';

export default function Bottin() {
  const [employes, setEmployes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [editId, setEditId] = useState(-1);
  const strictModeDetect = useRef(0);

  function obtenirEmployesPromise() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setEmployes(json));
  }

  async function obtenirEmployes() {
    if (strictModeDetect.current > 0) {
      return;
    } else {
      strictModeDetect.current = 1;
    }
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setEmployes(data);
    setLoading(false);
    strictModeDetect.current = 0;
  }

  useEffect(() => {
    obtenirEmployes();
  }, []);

  return (
    <>
      <h1>Bottin des employés</h1>
      <Button onClick={obtenirEmployes}>Refresh employees</Button>
      {isLoading && <Spinner />}
      <ListGroup>
        {employes.map((emp) => (
          <DisplayEmploye
            key={emp.id}
            employe={emp}
            isEdit={emp.id === editId}
            onChangeEdit={setEditId}
          />
        ))}
      </ListGroup>
    </>
  );
}
