import { Fragment } from 'react';
import Card from './Card';

const CardList = (props) => {
  return (
    <Fragment>
      <ul>
        {props.data.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            description={card.description}
            author={card.author}
            image={card.image}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default CardList;
