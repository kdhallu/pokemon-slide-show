import React from 'react';
import './nav-button.css';


export default class NavButton extends React.Component {
	render() {
		return (
			<div className="navigation-container">
				<div className="position-left">
					<input type="button" onClick={e => {
						!this.props.isLoading && this.props.onNextButtonClicked()
					}} value="PREV"/>
				</div>
				<div className="position-right">
					<input type="button" onClick={e => {
						!this.props.isLoading && this.props.onNextButtonClicked()
					}} value="NEXT"/>
				</div>
			</div>);
	}
}