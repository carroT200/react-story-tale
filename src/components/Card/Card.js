import classes from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className={classes.card}>
      <h3>{props.name}</h3>
      <img src={props.image} />
      <p>{props.description}</p>
      <figcaption>{props.author}</figcaption>
      <Link to={`/products/${props.id}`}>Watch full </Link>
    </div>
  );
};

export default Card;
