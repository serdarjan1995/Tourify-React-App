import React, {useEffect} from "react";
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./components/Login";
import {getUser} from './actions/auth';
import store from './store';
import Form from "./components/tours/Form";
import Tours from "./components/tours/Tours";
import TourDetail from "./components/tours/TourDetail";
import './App.css';

function App() {

  useEffect(() => {
    store.dispatch(getUser())
  }, [])

  return (
      <>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/tours" element={<PrivateRoute><Tours/></PrivateRoute>}/>
            <Route exact path="/tours/add" element={<PrivateRoute><Form/></PrivateRoute>}/>
            <Route exact path="/tours/:id" element={<PrivateRoute><TourDetail/></PrivateRoute>}/>
          </Routes>
        </div>
      </>
  );
}

export default App;
