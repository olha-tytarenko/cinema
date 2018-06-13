import React, { Component } from 'react';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {

  }

  render() {
    const {
      userName,
      isLogged,
      signOut,
      signIn,
    } = this.props;

    return (
      <header>
        <div>{isLogged ? `Hello, ${userName}` : 'Welcome'}</div>
        {isLogged ?
          <button onClick={signOut}>Sign out</button> :
          <button onClick={signIn}>Sign in</button>
        }
      </header>
    );
  }
}
