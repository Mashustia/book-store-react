import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import RaitingStars from '../RaitingStars';
import './style.css';
import { Link } from "react-router-dom";

const BookCards = ({title, cover, rating}) => (
  <Card
    className="book__card"
    as={ Link }
    to='/editbook'
  >
    <Image
      className="book__cover"
      src={cover ? cover : 'https://25golos.ru/wp-content/themes/25golos/images/no_product.png'}
      alt={`Обложка книги${ title}`}
    />
    <Card.Content className="book__data">
      <Card.Header className="book__title">{title}</Card.Header>
      <Card.Meta>
        <RaitingStars rating={rating} />
      </Card.Meta>
    </Card.Content>
  </Card>
);

export default BookCards;
