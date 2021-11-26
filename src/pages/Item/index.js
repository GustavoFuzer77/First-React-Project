import React, { useEffect, useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Form, FormInputs } from './styled';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Item({ match }) {
  const id = get(match, 'params.id', 0)
  const [name, setName] = useState('')
  const [price, setPrice] = useState()

  useEffect(() => {
    if(!id) return
    async function getData(){
      try{
        const { data } = await axios.get(`item/${id}`)
        setName(data.name)
        setPrice(data.price)
      }catch(e){
        toast.error('Item não existe =(')
        history.push('/')
      }
    }
    getData()
  },[id])


  const handleSubmit= async(e) => {
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

    try{
      if(id){
        await axios.put(`/item/${id}`, {
          name,
          price
        })
        toast.success(`Item "${name}" editado com sucesso!`);
        history.push('/')
      }
    }catch(err){

    }
  }

  return (
    <Container>
      <h1>Editar item</h1>
      <Form onSubmit={handleSubmit}>
        <FormInputs>
          <div>
            <p>Item:</p>
            <input type='text' placeholder='novo nome do item' value={name} onChange={e => setName(e.target.value)} ></input>
          </div>
          <div>
            <p>Preço:</p>
            <input type='number' placeholder='novo preço do item'value={price} onChange={e => setPrice(e.target.value)}></input>
          </div>
          <button type='submit'>Editar</button>
        </FormInputs>
      </Form>
    </Container>
  );
}
