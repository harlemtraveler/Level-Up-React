import React, { Component } from 'react';
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
  };

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: '',
    })
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
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
