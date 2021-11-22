import React, { useEffect, useState } from 'react';
import axios from '../../services/axios'
import { Container } from '../../styles/GlobalStyles';
import { ItemContainer, Show , EditDel} from './styled';
import { Link } from 'react-router-dom';
import { FaEdit, FaWindowClose } from 'react-icons/fa'


export default function Itens() {

  const [itens, setItens] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get('/itens')
        setItens(data)
      } catch (e) {
        console.log('deu erro porra')
      }

    }
    getData()
  }, [])

  return (
    <Container>
      <h1>Itens:</h1>
      <Show>
        <p>NOME:</p>
        <p>PREÇO(REAIS):</p>
        <p>ALTERAR:</p>
      </Show>
      <ItemContainer>
        {itens.map(itens => (
          <div key={itens.id}>
            <p>{itens.name}</p>
            <p>{itens.price}</p>
            <EditDel>
              <Link to={`/item/${itens.id}/edit`}> <FaEdit size={16} /> </Link>
              <Link to={`/item/${itens.id}/edit`}> <FaWindowClose size={16} /> </Link>
            </EditDel>
          </div>
        ))}
      </ItemContainer>
    </Container>
  );
}
