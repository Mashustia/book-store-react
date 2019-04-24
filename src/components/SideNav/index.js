import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Grid, Menu, Segment } from 'semantic-ui-react'
import BookList from '../pages/BookList';
import booksList from "../../books";

export default class SideNav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeItem: 'all',
      filter: this.props.match.path
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState(() => ({
      activeItem: name
    }), () => {
      this.setState(() => ({
        filter: this.props.match.path
      }))}
    )
  };

  render() {
    const { activeItem } = this.state;

    const url = this.state.filter.split('/')
    const filter = url[url.length - 1]

    let books;

    if (filter === '') {
      books = [ ...booksList ]
    } else {
      books = [ ...booksList ].filter(book => book.topic === filter)
    }

    return (
      <Grid>
        <Grid.Column width={3}>
          <Menu fluid vertical tabular>
            <Menu.Item
              as={ Link }
              to='/'
              name='all'
              active={activeItem === 'all'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={ Link }
              to='/react'
              name='react'
              active={activeItem === 'react'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={13}>
          <Segment>

            <BookList books={books}/>

          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
