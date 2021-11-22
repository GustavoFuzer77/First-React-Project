import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
  isLoggedIn: false,
  token: '',
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      const newState1 = { ...state }
      newState1.isLoggedIn = true;
      newState1.token = action.payload.token;
      return newState1;

      case types.LOGIN_FAILURE: {
        delete axios.defaults.headers.Authorization;
        const newState = { ...initialState };
        return newState;
      }
    default: {
      return state;
    }
  }
}
