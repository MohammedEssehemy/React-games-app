import React, { Component } from 'react';
import userImage from '../assets/user.png';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return(
			<div className="sidebar-fixed">
				<img src={userImage} className="sidebar-user__avatar" alt=""/>
				<div className="sidebar-user">
					<div className="sidebar-user__name">
						Drake fenning
					</div>
					<div className="sidebar-user__job">
						Developer
					</div>
				</div>
				<div className="sidebar-count__box">
					<span className="sidebar-count">{this.props.cardsNumber}</span>
					<span className="label">Items</span>
				</div>
			</div>
    )
  }
}

export default Sidebar;