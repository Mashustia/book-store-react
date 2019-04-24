import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react'
import HeaderMenu from './HeaderMenu';
import EditBook from './EditBook';
import AddBook from './AddBook';
import SideNav from './SideNav'
import NotFound from './pages/NotFound';

class App extends Component {
  state = {
    currentBook: {}
  };

  render() {
    return (
      <Container>
        <HeaderMenu />
        <Header as='h1'>Библиотека книг для фронтенд разработчика</Header>
        <Switch>
          <Route exact path='/' component={SideNav} />
          <Route path='/react' component={SideNav} />
          <Route path='/editbook' component={EditBook} />
          <Route path='/addbook' component={AddBook} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    )
  }
}

export default withRouter(App);
