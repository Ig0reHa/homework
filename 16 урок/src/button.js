import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.myClick = this.myClick.bind(this);
	}

	myClick() {
		document.getElementsByClassName('wrapper')[0].style.backgroundColor = "#F9F6A6FF";
	}

	render() {
		return (
			<button onClick={this.myClick} className="clicker">Изменить дезайн</button>
			)
	}
}

export default Button;