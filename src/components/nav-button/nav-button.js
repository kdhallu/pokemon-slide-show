import React from 'react';
import './nav-button.css';


export default class NavButton extends React.Component {
	render() {
		const {prevButtonDisable, nextButtonDisable} = this.props;
		return (
			<div className="navigation-container">
				<div className={`position-left ${prevButtonDisable && 'disabled'}`}>
					<input type="button" onClick={this.props.onPrevButtonClicked} value="PREV" disabled={prevButtonDisable}/>
				</div>
				<div className={`position-right ${nextButtonDisable && 'disabled'}`}>
					<input type="button" onClick={this.props.onNextButtonClicked} value="NEXT" disabled={nextButtonDisable}/>
				</div>
			</div>);
	}
}