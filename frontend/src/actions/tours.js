import {GET_TOURS, DELETE_TOUR, ADD_TOUR} from "./types";
import api from "../utils/api";

const API_HOST = 'http://localhost:8000'

export const getTours = () => (dispatch, getState) => {
  api.get(API_HOST + '/api/tours/')
      .then(res => {
        dispatch({
          type: GET_TOURS,
          payload: res.data
        })
      }).catch(err => console.log(err));
}

export const deleteTour = (id) => (dispatch, getState) => {
  api.delete(API_HOST + '/api/tours/' + id)
      .then(res => {
        dispatch({
          type: DELETE_TOUR,
          payload: id
        })
      }).catch(err => console.log(err));
}

export const addTours = (tour) => async (dispatch, getState) => {
  try {
    const response = await api.post(API_HOST + '/api/tours/', tour)
    return dispatch({
      type: ADD_TOUR,
      payload: response.data
    })
  } catch (err) {
    console.log(err)
    return err
  }
}