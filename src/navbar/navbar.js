import React, { Component } from 'react';
import './navbar.css';
import logo from '../assets/jigsaw.svg';
import SearchCards from '../searchCards/searchCards';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchCards = this.handleSearchCards.bind(this);
  }

  handleSearchCards(cardName) {
    this.props.handlerFromContent(cardName);
  }

  render() {
    return(
      <nav className="navbar navbar-default justify-content-between">
        <a className="navbar-brand" href="#">
				 <img src={logo} alt="logo" className="App-logo"/>
        </a>
      <SearchCards handlerFromNavbar={this.handleSearchCards}/>
      </nav>
    )
  }
}

export default Navbar;