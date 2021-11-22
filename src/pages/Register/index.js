import React, { useState } from 'react';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import { toast } from 'react-toastify';
import history from '../../services/history';

export default function CadastroItens() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState()

  async function handleSubmit(e) {
    e.preventDefault();
    let erro = false;

    if (price < 1 || price == null) {
      erro = true;
      toast.error('Preço inválido!');
    }

    if (name.length < 1) {
      erro = true;
      toast.error('Nome inválido!')
    }

    if (erro) return;

    try {
      await axios.post('item', {
        name,
        price
      })
      history.push('/')
    } catch (err) {
      console.log(err, 'deu erro')
    }


  }

  return (
    <Container>
      <h1>Registrar um novo item:</h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <p>Nome do item:</p>
          <input type='text' placeholder='digite o nome do item' value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <p>Preço do item:</p>
          <input type='number' placeholder='digite o preço do item' value={price} onChange={(e) => setPrice(e.target.value)}></input>
        </div>
        <div>
          <button type='submit'>Enviar item</button>
        </div>
      </Form>

    </Container>
  );
}
