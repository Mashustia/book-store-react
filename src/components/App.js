import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react'
import HeaderMenu from './HeaderMenu';
import BookCards from './BookCards';
import booksList from '../books.json';
import EditBook from './EditBook';
import AddBook from './AddBook';

class App extends Component {
  state = {
    currentPage: 'MainPage',
    currentBook: {}
  };

  goTo = (pageName, book) => {
    this.setState({ currentPage: pageName, currentBook: book });
  };

  render() {const { currentPage } = this.state;
    if (currentPage === 'MainPage') {
      return <MainPage goTo={this.goTo} books={booksList}/>;
    } else if (currentPage === 'EditBook') {
      return <EditBook goTo={this.goTo} {...this.state.currentBook} />;
    } else if (currentPage === 'AddBook') {
      return <AddBook goTo={this.goTo} />;
    } else {
      return <div>Something went wrong</div>
    }
  }
}

const MainPage = ({ goTo, books }) => (
  <div>
    <Container>
      <HeaderMenu goTo={goTo} />
      <Header as='h1'>Библиотека книг для фронтенд разработчика</Header>
      <Card.Group itemsPerRow={4} stackable doubling >
        {books.map(book => <BookCards goTo={goTo} key={book.codeISBN} {...book} />)}
      </Card.Group>
    </Container>
  </div>
);

export default App;
