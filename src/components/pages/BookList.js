import React from 'react'
import BookCards from "../BookCards";
import {Card} from "semantic-ui-react";

function BookList ({books}) {
  return (
    <Card.Group itemsPerRow={3} stackable doubling>
      {books.map(book => <BookCards key={book.codeISBN} {...book} />)}
    </Card.Group>
  )
}

export default BookList
