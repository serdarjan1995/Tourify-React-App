import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 345,
    padding: 3,
    margin: 10,
  },
});

function TourCard({tour}) {
  const classes = useStyles();
  const navigate = useNavigate();

  function learnMoreHandler() {
    navigate('/tours/' + tour.id)
  }

  function shortDescription(description) {
    if (description.length < 100)
      return description
    const maxChars = 100
    let trimmedString = description.substr(0, maxChars);
    return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + ' ...'
  }

  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
              component="img"
              alt={tour.title}
              height="140"
              image={`https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200/300`}
              title={tour.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {tour.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {shortDescription(tour.description)}
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
          <Button size="small" color="primary" onClick={learnMoreHandler}>
            Learn More
          </Button>
        </CardActions>
      </Card>
  );
}

export default TourCard;