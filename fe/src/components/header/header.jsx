import React, { Component } from 'react';
import './header.scss';

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
      <header className="header">
        <div className="header-container">
          <div className="header-container__greeting">
            {
              isLogged ?
                <span className="header-container__greeting-name">`Hello, ${userName}`</span> :
                'Welcome'
            }
          </div>
          {isLogged ?
            <button onClick={signOut} className="header-container__button">Sign out</button> :
            <button onClick={signIn} className="header-container__button">Sign in</button>
          }
        </div>
      </header>
    );
  }
}
