import { useState } from 'react';
import { Button } from 'react-bootstrap';

//Hook: Fonctionalité de React, exposé via une fonction
// commencant par use...
//UseState: Hook qui permet à React de stocker des choses
// pour le composant
// use state prend un paramètre d'initialisation
// useState retourne un tableau de deux élément
// le premier élément est la valeur stockée (read-Only)
// le second élément est une fonction setState

// setState: exécuté en différé, APRÈS les événements
//           1. va modifier le stockage du state
//           2. va provoquer un re-render

export default function Compteur() {
  const [compte, setCompte] = useState(0);
  return (
    <div>
      <h3>Le compte est: {compte}</h3>
      <Button
        onClick={() => {
          setCompte((prevCompte) => prevCompte + 1);
          setCompte((prevCompte) => prevCompte + 1);
          setCompte((prevCompte) => prevCompte + 1);
        }}
      >
        Incrémenter
      </Button>
    </div>
  );
}
