import React, { Component }  from 'react';
import './lazyImage.css';
import placeholder from '../assets/placeholder.png';
import Masonry from 'react-masonry-css';
import { LazyLoadImage ,trackWindowScroll} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../cardsBox/cardsBox';

class LazyImage extends Component {
	render() {
		return(
			<Masonry
			breakpointCols={{
				default: 5,
 				1100: 3,
 				700: 2,
 				500: 1
			}}
			className="my-masonry-grid"
			columnClassName="my-masonry-grid_column">
				{this.props.cards.map(card => (
					<div key={card.tail} className="grid-item">
						<div className="grid-item__img">
							<LazyLoadImage
								alt={card.name}
								height="100%"
								scrollPosition={this.props.scrollPosition}
								src={card.image}
								width="100%"
								effect="blur"
								placeholderSrc={placeholder}/>
						</div>
						<div className="grid-item__caption-box">
							<span className="grid-item__caption label label-primary">{card.name}</span>
						</div>
					</div>
				 ))}
			</Masonry>
	)}
}
export default trackWindowScroll(LazyImage);
