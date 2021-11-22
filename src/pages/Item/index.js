import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Form, FormInputs } from './styled'

export default function Item() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
      <h1>Editar item</h1>
      <Form onSubmit={handleSubmit}>
        <FormInputs>
          <div>
            <p>Item:</p>
            <input type='text' placeholder='novo nome do item'></input>
          </div>
          <div>
            <p>Preço:</p>
            <input type='text' placeholder='novo preço do item'></input>
          </div>
          <button type='submit'>Editar</button>
        </FormInputs>
      </Form>
    </Container>
  );
}
