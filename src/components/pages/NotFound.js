import React from "react";
import { Header, Icon } from 'semantic-ui-react'

function NotFound () {
  return (
    <div>
      <Header as='h2'><Icon name='exclamation circle'/>Страница не найдена</Header>
    </div>
  )
};

export default NotFound;
