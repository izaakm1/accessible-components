import React, { Component } from 'react'

import accessible from 'accessible-components'

const MyButton = accessible.Button`
  color: rgb(255, 0, 0);
  backgroundColor: rgb(0, 0, 255);
`;

export default class App extends Component {
  render () {
    return (
      <div>
        <MyButton>Some stuff</MyButton>
      </div>
    )
  }
}
