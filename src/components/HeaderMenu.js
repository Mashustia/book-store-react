import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

export default class HeaderMenu extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={ Link }
          name='mainPage'
          active={activeItem === 'mainPage'}
          onClick={this.handleItemClick}
          to='/'
        >
          Главная
        </Menu.Item>

        <Menu.Item
          as={ Link }
          name='AddBook'
          active={activeItem === 'AddBook'}
          onClick={this.handleItemClick}
          to='/addbook'
        >
          Добавить книгу
        </Menu.Item>
      </Menu>
    )
  }
}
