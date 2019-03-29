import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import RaitingStars from '../RaitingStars';
import './style.css';

const BookCards = ({goTo, ...book}) => (
  <Card className="book__card" onClick={() => goTo('EditBook', book)}>
    <Image className="book__cover" src={book.cover === '' ? 'https://25golos.ru/wp-content/themes/25golos/images/no_product.png' : book.cover} alt={`Обложка книги ${book.title}`} />
    <Card.Content className="book__data">
      <Card.Header className="book__title">{book.title}</Card.Header>
      <Card.Meta>
        <RaitingStars rating={book.rating} />
      </Card.Meta>
    </Card.Content>
  </Card>
);

export default BookCards;