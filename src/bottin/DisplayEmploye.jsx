import { useRef } from 'react';
import { Button, ListGroup, Form } from 'react-bootstrap';

export default function DisplayEmploye({ employe, isEdit, onChangeEdit }) {
  const refInput = useRef();

  return isEdit ? (
    <ListGroup.Item>
      {' '}
      <Button
        size='sm'
        className='my-1'
        onClick={(evt) => {
          const newEmp = { ...employe, name: refInput.current.value };
          alert(JSON.stringify(newEmp));
        }}
      >
        💾
      </Button>{' '}
      <Button
        size='sm'
        className='my-1'
        onClick={() => {
          onChangeEdit(-1);
        }}
      >
        ❌
      </Button>{' '}
      <Form.Control type='text' ref={refInput} defaultValue={employe.name} />
    </ListGroup.Item>
  ) : (
    <ListGroup.Item>
      {' '}
      <Button
        size='sm'
        className='my-1'
        onClick={() => {
          onChangeEdit(employe.id);
        }}
      >
        📝
      </Button>{' '}
      {employe.name}
    </ListGroup.Item>
  );
}
