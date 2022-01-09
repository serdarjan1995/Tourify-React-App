import React, {useEffect, useState} from "react";
import {Container, Grid} from "@material-ui/core";
import TourDescriptionCard from "../TourDescriptionCard";
import {useMatch} from "react-router-dom";
import {useSelector} from 'react-redux';

function TourDetail() {
  const [tour, setTour] = useState(null)
  const tours = useSelector(state => state.tours.tours);
  const {params = {}} = useMatch('/tours/:id');


  useEffect(() => {
    let tourDetail = tours.find(tour => tour.id === params?.id)

    if (tourDetail) {
      setTour(tourDetail)
    } else {
      setTour(null)
    }
  }, [tours, params])

  return (
      tour && <>
        <h2>Tour Detail</h2>
        <Container>
          <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{minHeight: '100vh'}}
          >
            <TourDescriptionCard tour={tour}/>
          </Grid>
        </Container>
      </>
  )
}


export default TourDetail;