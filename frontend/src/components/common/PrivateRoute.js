import React from "react";
import {Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";

const PrivateRoute = ({children}) => {
  const auth = useSelector(state => state.auth)

  if (auth.isLoading){
    return <h2>...Loading</h2>
  }

  if (auth.isAuthenticated){
    return children
  }
  else{
    return <Navigate to="/login"/>
  }
};

export default PrivateRoute;