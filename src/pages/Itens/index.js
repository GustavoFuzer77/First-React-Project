import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { ItemContainer, Show , EditDel} from './styled';
import { Link } from 'react-router-dom';
import { FaEdit, FaWindowClose, FaExclamationCircle} from 'react-icons/fa'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

export default function Itens() {

  const [itens, setItens] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get('/itens')
        setItens(data)
      } catch (e) {
        console.log('deu erro')
      }

    }
    getData()
  }, [])

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const handleDeleteAsk = async (id, index) => {
    try{
      if(!isLoggedIn){
        return toast.error('É necessario estar logado!')
      }else{
        toast.success('item apagado com sucesso!')
      }
      await axios.delete(`/item/${id}`);
      const novosItens = [...itens];
      novosItens.splice(index, 1)
      setItens(novosItens)
    }catch(e){
      toast.error('erro ao apagar o item!')
      console.log(e)
    }
  }

  const handleDelete = (e) => {
    e.preventDefault()
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove()

  }

  return (
    <Container>
      <h1>Itens:</h1>
      <Show>
        <p>NOME:</p>
        <p>PREÇO(REAIS):</p>
        <p>ALTERAR:</p>
      </Show>
      <ItemContainer>
        {itens.map((itens, index) => (
          <div key={itens.id}>
            <p>{itens.name}</p>
            <p>{itens.price}</p>
            <EditDel>
              <Link to={`/item/${itens.id}/edit`}> <FaEdit size={16} /> </Link>
              <Link onClick={handleDelete} to={`/item/${itens.id}/delete`}> <FaWindowClose size={16} /> </Link>
              <FaExclamationCircle
                display={'none'}
                onClick={e => handleDeleteAsk(itens.id, index)}
                color={'red'}
                cursor={'pointer'}
              />
            </EditDel>
          </div>
        ))}
      </ItemContainer>
    </Container>
  );
}
