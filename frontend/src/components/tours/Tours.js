import React, {useEffect, Fragment} from "react";
import TourCard from "../TourCard";
import {useDispatch, useSelector} from 'react-redux';
import {getTours} from "../../actions/tours";
import {Button, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useNavigate} from "react-router-dom";
import {logout} from "../../actions/auth";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(345px, 1fr))",
  },
}));

function Tours() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const tours = useSelector(state => state.tours.tours);

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  }

  const handleAddNew = () => {
    navigate('/tours/add');
  }

  return (
      <Fragment>
        <h2>Tours</h2>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Log out
        </Button>
        <Button variant="contained" color="primary" onClick={handleAddNew}>
          Add New
        </Button>
        <div style={{minHeight: '100vh'}}>
          <Container className={classes.root}>
            {
              tours.map((item, index) => <TourCard key={index} tour={item}/>)
            }
          </Container>
        </div>
      </Fragment>
  )
}

export default Tours;