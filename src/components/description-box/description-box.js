import React from 'react';
import './description-box.css';

export default class DescriptionBox extends React.Component {
	render() {
		return (
			<div className="description-container">
				<div className="header">
					<span className="title"> {this.props.title}</span>
					<span className="id">id: {this.props.id}</span>
				</div>
				<div className="body">
					<img src={this.props.frontImage} alt=""/>
				</div>
			</div>
		);
	}
}
