import {USER_LOADING, USER_LOADED, AUTH_FAILED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from "./types";
import api from "../utils/api";
import axios from "axios";

export const getUser = () => (dispatch, getState) => {
  dispatch({
    type: USER_LOADING,
  })

  api.get('/api/user/', {headers: {'Authorization': ''}})
      .then(res => {
        dispatch({
          type: USER_LOADED,
          payload: res.data
        })
      }).catch(err => {
    console.log(err)
    dispatch({
      type: AUTH_FAILED,
    })
  });

}

export const login = (form) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  axios.post(process.env.REACT_APP_API_URL + '/api-token-auth/', form, config)
      .then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
      }).catch(err => {
    console.log(err)
    if (err.response.data.non_field_errors){
      alert(err.response.data.non_field_errors)
    }
    else{
      alert(err.response.data.detail)
    }

    dispatch({
      type: LOGIN_FAIL,
    })
  });

}

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
}
