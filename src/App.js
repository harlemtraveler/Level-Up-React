import React, { Component, Fragment, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Modal } from 'Elements';
import { Portal, Toggle } from 'Utilities';
import User from './User';
import { UserContext } from './UserContext';


/*
  This class will provide the data for the Context API
  Any component that will consume the data must be wrapped
  in the <UserProvider> tag!
*/
class UserProvider extends Component {
  // User Obj with user info:
  state = {
    id: '123',
    name: 'Tim',
    email: 'Tim@mail.com'
  }

  render() {
    return (
      /*
        The <UserContext.Provider> tag accepts a 'value' prop.
        The 'value' prop is where you save data for later use.
        The 'value' props value is an Obj, which is fetched from state.
      */
      <UserContext.Provider
        value={{
          user: this.state
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

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
      </UserProvider>
    );
  }
}

export default App;
