import React, { Component }  from 'react';
import './lazyImage.css';
import { LazyLoadImage ,trackWindowScroll} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../cardsBox/cardsBox';

class LazyImage extends Component {
	render() {
		return(
			<div>
				{this.props.cards.map(card => (
					<div key={card.tail} className="grid-item">
						<LazyLoadImage
							alt=""
							height="100%"
							scrollPosition={this.props.scrollPosition}
							src={card.image}
							width="100%"
							effect="blur"/>
						<div className="grid-item__caption-box">
							<span className="grid-item__caption label label-primary">{card.name}</span>
						</div>
						</div>
				 ))}
			</div>
	)}
}
export default trackWindowScroll(LazyImage);
