import React, {useState} from "react";
import {Grid, TextField, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from 'react-redux';
import {addTours} from "../../actions/tours";
import {useNavigate} from "react-router-dom";


const useStyles = makeStyles(theme => ({
  py5: {
    paddingBottom: 5,
    paddingTop: 5,
  },
  form: {
    padding: 20,
    background: 'white',
  }
}));

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dates, setDates] = useState('');
  const [price, setPrice] = useState(0.0);
  const [error, setError] = useState('');

  const classes = useStyles();

  const handleOnSubmit = async e => {
    e.preventDefault();
    const datesArr = dates.split(',')
    const tour = {company, title, description, dates: datesArr, price};
    const res = await dispatch(addTours(tour));
    if (res instanceof Error){
      setError(res.response.data)
    }
    else{
      handleBack();
    }
  }

  const handleBack = () => {
    navigate('/tours/');
  }

  return (
      <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{minHeight: '100vh'}}
      >
        <h1>New Tour Details</h1>
        <form onSubmit={handleOnSubmit} className={classes.form}>
          <div className={classes.py5}>
            <TextField
                label="Company"
                variant="outlined"
                placeholder="Enter your company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            {
              error?.company ? <p style={{color: 'red'}}>{error.company}</p> : undefined
            }
          </div>
          <div className={classes.py5}>
            <TextField
                label="Title"
                variant="outlined"
                placeholder="Enter tour title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {
              error?.title ? <p style={{color: 'red'}}>{error.title}</p> : undefined
            }
          </div>
          <div className={classes.py5}>
            <TextField
                label="Description"
                variant="outlined"
                placeholder="Enter tour description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            {
              error?.description ? <p style={{color: 'red'}}>{error.description}</p> : undefined
            }
          </div>
          <div className={classes.py5}>
            <TextField
                label="Price"
                variant="outlined"
                placeholder="Enter tour price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            {
              error?.price ? <p style={{color: 'red'}}>{error.price}</p> : undefined
            }
          </div>
          <div className={classes.py5}>
            <TextField
                label="Dates"
                variant="outlined"
                placeholder="Enter tour dates"
                name="dates"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
            />
            {
              error?.dates ? <p style={{color: 'red'}}>{error.dates}</p> : undefined
            }
          </div>
          <Button size="small" type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button size="small" onClick={handleBack} variant="contained" color="secondary">
            Cancel
          </Button>
        </form>
      </Grid>
  )
}

export default Form;