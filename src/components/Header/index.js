import React from 'react';
import { FaHome, FaSignInAlt, FaDownload, FaCircle, FaPowerOff} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  function handleLogout(e){
    e.preventDefault()
    dispatch(action.loginFailure())
    history.push('/')
  }
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>

      {isLoggedIn && <Link to="/register">
        <FaDownload size={24} />
      </Link>}

      {isLoggedIn
      ? <Link  onClick={handleLogout} to="/logout">
        <FaPowerOff size={24} />
      </Link>

       : <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>}


      {isLoggedIn && <FaCircle size={12} color={'#66ff33'}/>}
    </Nav>
  );
}
