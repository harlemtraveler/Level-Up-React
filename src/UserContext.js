import React, { createContext } from 'react';

export const UserContext = createContext();

/*
  [+] The Context API is a great way to be able to pass data from one component
    to another or from the top of the applicatoion to deeply nested components.
    The Context API has to elements, the Provider and the Consumer.

      [*] Provider - is the element that will provide the data to components.
      [*] Consumer - is the element that will recieve data from the Provider.

  [+] To use the Context API, you have to first import it into the application,
    particularly within it's own seperate file for the export function:

      import React, { createContext } from 'react';

  [+] Next, you have to declare the Context function and export it for use in
    other files:

      export const UserContext = createContext();

  [+] For any files that'll contain the Provider  or Consumer element, import
    the UserContext function:

      import { UserContext } from './UserContext';

  [+] Define the UserProvider class to serve desired data (this's demo data):

      class UserProvider extends Component {
        state = {
          id: '123',
          name: 'Tim',
          email: 'Tim@mail.com'
        }

        render() {
          return (
            <UserContext.Provider
              value={{
                user: this.state
              }}
            >
              {this.props.children}
            </UserContext.Provider>
          );
        }

  [+] Identify a component that'll be the Providing component and wrap it in
    the Provider's tags:

      <UserProvider></UserProvider>

  [+] Any components identified to recieve data from the Providing component
    needs to be wrapped in the Consumer's tag:

      <UserContext.Consumer></UserContext.Consumer>

  [+] Within the wrapped Consumer component, you now have access to the
    Providors data, like so:

      {context.user.id}

      {context.user.name}

      {context.user.email}
*/
