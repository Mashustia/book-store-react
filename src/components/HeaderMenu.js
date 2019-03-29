import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class HeaderMenu extends Component {
  state = {
    activeItem: this.props.activePage,
    goTo: this.props.goTo
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.state.goTo(name, {});
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item name='MainPage' active={activeItem === 'MainPage'} onClick={this.handleItemClick}>
          Главная
        </Menu.Item>

        <Menu.Item name='AddBook' active={activeItem === 'AddBook'} onClick={this.handleItemClick} >
          Добавить книгу
        </Menu.Item>
      </Menu>
    )
  }
}
