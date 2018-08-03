import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Modal, Portal, Toggle } from './Utilities';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {/* The entire Toggle element below can bu used anywhere as is */}
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>What up, this is Tim you mother sucka!</h1>
              </Modal>
          </Fragment>
          )}
        </Toggle>

      </div>
    );
  }
}

export default App;
