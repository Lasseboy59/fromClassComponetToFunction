import React from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {

  return (
    <Card>
      <h1>Andrei</h1>
      <button>Set Name to Timo</button>
    </Card>
  );
};

export default class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Yihua',
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={() => this.setState({ name: 'Andrei' })}>
          Set Name to Andrei
        </button>
      </Card>
    );
  }
}
