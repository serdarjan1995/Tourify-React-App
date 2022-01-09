import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {deleteTour} from "../actions/tours";
import {useDispatch} from 'react-redux';
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 600,
    padding: 3,
    margin: 10,
  },
});

function TourDescriptionCard({tour}) {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function deleteHandler() {
    dispatch(deleteTour(tour.id));
    navigate('/tours/');
  }

  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
              component="img"
              alt={tour.title}
              height="300"
              image={`https://picsum.photos/id/${Math.floor(Math.random() * 500)}/300/600`}
              title={tour.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {tour.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {tour.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Price : </b>{tour.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Tour Company : </b>{tour.company}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Tour Dates : </b>{
              tour.dates.map((item, index) => {
                return <span key={index}>{item} </span>
              })
            }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary" onClick={deleteHandler}>
            Delete
          </Button>
        </CardActions>
      </Card>
  );
}

export default TourDescriptionCard;