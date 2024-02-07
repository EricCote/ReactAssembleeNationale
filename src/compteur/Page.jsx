import Entete from './Entete';
import Compteur from './Compteur';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

export default function Page() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  return (
    <Container>
      <Entete prenom={prenom} nom={nom} />
      <input
        type='text'
        placeholder='Prénom'
        value={prenom}
        onChange={(evt) => {
          setPrenom(evt.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Nom'
        value={nom}
        onChange={(evt) => {
          setNom(evt.target.value);
        }}
      />
      <Compteur />
    </Container>
  );
}
