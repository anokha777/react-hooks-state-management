import React from 'react';

const withCounter = Component => {
  return class extends React.Component {
    state = {
      count: 0,
    };

    handleDecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      const { count } = this.state;

      return (
        <Component {...this.props} count={count} onIncrease={this.handleIncrement} onDecrease={this.handleDecrement} />
      );
    }
  };
};

const App = ({ count, onIncrease, onDecrease }) => {
  return (
    <div>
      <div>Current count: {count}</div>
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default withCounter(App);

