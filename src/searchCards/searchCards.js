import React, { Component } from 'react';
import searchIcon from '../assets/search.svg'
import './searchCards.css';

class SearchCards extends Component {
	constructor() {
    super();
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
    this.setState({name: event.target.value});
	}
	
	handleSubmit(event) {
		this.props.handlerFromNavbar(this.state.name);
    event.preventDefault();
  }

  render() {
    return(
		<form className="search-form" onSubmit={this.handleSubmit}>
			<div className="input-group search-form__input">
				<input type="text" className="form-control" placeholder="Search for photo"
					value={this.state.name} onChange={this.handleChange}/>
				<div className="search-form__box search-form--left--borderless">
					<button className="btn search-form__btn  search-form--left--borderless" type="Submit">
						<img src={searchIcon} className="search-form__btn-img" alt="Search"/>
					</button>
				</div>
			</div>
		</form>
    )
  }
}

export default SearchCards;