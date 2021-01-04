import React from 'react';

const Counter = ({ count, onIncrease, onDecrease }) => {
  return (
    <div>
      <div> {count} </div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

const withCounter = ( Component ) => {
  return class CounterWithHOC extends React.Component {
    state = {
      count : 0
    }

    onIncreaseCounter = () => {
      this.setState({count: this.state.count+1});
    }

    onDecreaseCounter = () => {
      this.setState({count: this.state.count - 1});
    }

    render (){
      return (
        <Component count={this.state.count} onIncrease={this.onIncreaseCounter} onDecrease={this.onDecreaseCounter} /> 
      )
    }
  }
}

export default withCounter(Counter);
