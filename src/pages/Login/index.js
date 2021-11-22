import React, { useState } from 'react';
import { Form, FormDiv } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import * as action from '../../store/modules/auth/actions';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

export default function Login(props) {

  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


   async function handleSubmit(e) {
    e.preventDefault();
    let errors = false;

    if (!isEmail(email)) {
      errors = true;
      toast.error('E-mail inválido!');
    }
    if(senha.length < 6){
      errors = true;
      toast.error('Senha inválida');
    }

    if(errors) return;

    dispatch(action.loginRequest({ email, senha, prevPath}));

  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>LOGIN <small>na api</small></h1>
        <FormDiv>
          <div>
            <p>Email:</p>
            <input type='text' placeholder='digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <p>Senha:</p>
            <input type='password' placeholder='*****' value={senha} onChange={(e) => setSenha(e.target.value)} />
          </div>
          <button type='submit'>LOGAR</button>
        </FormDiv>
      </Form>
    </Container>
  );
}
