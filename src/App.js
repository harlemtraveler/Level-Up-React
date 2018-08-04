import React, { Component, Fragment, createContext } from 'react';
import { Transition } from 'react-spring';

import logo from './logo.svg';
import './App.css';
import { Modal, Card } from 'Elements';
import { Toggle } from 'Utilities';
import User from './User';
import UserProvider from './UserProvider';


/*
  The App component is wrapped in <UserProvider> tag, which, in
  turn, wraps the entire application .This enables the data to
  be used anywhere in the app.
  If chosen, it can be used on specific components for more
  control of data.
*/
class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <User />

          <section>
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <button onClick={toggle}>Show / Hide</button>
                  <Transition
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                  >
                    {on && Header}
                  </Transition>
                </Fragment>
              )}
            </Toggle>
          </section>

          {/* The entire Toggle element below can be used anywhere as is */}
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
      </UserProvider>
    );
  }
}

const Header = styles => (
  <Card style={{...styles}}>
    <h1>Show me</h1>
  </Card>
);

export default App;
