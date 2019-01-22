import React, { Component ,Suspense} from 'react';
import './cardsBox.css';
var ignoreCase = require('ignore-case');
const LazyImage = React.lazy(() => import ("../lazyImage/lazyImage"))

let lastScrollY = 0;
let lastScrollX = 0;

class CardsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cards: [] ,
      allCards: [] ,
    };
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
	}
	
	handleScroll = () => {
		lastScrollY = window.scrollY;
		lastScrollX = window.scrollX;
		let scrollPosition = {
			x: lastScrollX ,
			y: lastScrollY
    }
		return scrollPosition;
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    fetch("http://www.amiiboapi.com/api/amiibo/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            cards: result.amiibo,
            allCards: result.amiibo,
          });
          this.props.cardsCount(this.state.cards.length);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentWillReceiveProps(newProps) {
    if(newProps.queryCardName!== this.props.queryCardName) {
      if(newProps.queryCardName !== '') {
        let filteredCards = this.state.allCards.filter((card) => ignoreCase.includes(card.name,newProps.queryCardName));
        this.setState({cards:filteredCards},() => {
          this.props.cardsCount(this.state.cards.length);
        });
      } else {
        this.setState({cards:this.state.allCards},() => {
          this.props.cardsCount(this.state.cards.length);
        });
      }
    }
  }

  render() {
    const { error, isLoaded, cards } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return(
          <Suspense fallback={<div>Images..</div>}>
            <LazyImage cards={cards} scrollPosition={this.handleScroll}/>
          </Suspense>
      );
    }
  }
}

export default CardsBox;