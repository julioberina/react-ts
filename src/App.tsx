import React from 'react';
import './App.css';

type Props = {};
type State = {
  count: number,
  message: string
};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      count: 0,
      message: 'No clicks yet'
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({ 
      count: this.state.count + 1,
      message: this.state.count + 1 + ' clicks'
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
      message: this.state.count - 1 + ' clicks'
    });
  }

  reset() {
    this.setState({
      count: 0,
      message: 'No clicks yet'
    });
  }

  render() {
    return (
      <section>
        <h1>Counter</h1>
        <p>{this.state.message}</p>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement.bind(this)}>-1</button>
        <button onClick={this.reset.bind(this)}>0</button>
      </section>
    );
  }
}
