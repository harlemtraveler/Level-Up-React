import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    const { render } = this.props;
    return (
      {render({
        on: this.state.on,
        toggle: this.toggle
      })}
    );
  }

}

export default Toggle;
