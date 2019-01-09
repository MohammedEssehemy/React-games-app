import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Navbar from '../navbar/navbar';
import '../content/content.css';
import CardsBox from '../cardsBox/cardsBox';


class Content extends Component {
	constructor() {
		super();
		this.state = { 
			cardName : '' ,
			cardsCount : 0
		};
		this.handleSearchCards = this.handleSearchCards.bind(this);
		this.getCardsCount = this.getCardsCount.bind(this);
	}
	
  handleSearchCards(nameValue) {
		this.setState({ cardName:nameValue });
	}

	getCardsCount(count) {
		this.setState({ cardsCount: count});
	}

  render() {
    return(
			<div><Navbar handlerFromContent={this.handleSearchCards}/>
				<div
					className="container-fluid">
					<div className="row">
						<Sidebar cardsNumber={this.state.cardsCount}/>
						<div
							className="content-box">
								<CardsBox cardsCount={this.getCardsCount} queryCardName={this.state.cardName}/>
						</div>
					</div>
				</div>
			</div>
    )
  }
}

export default Content;