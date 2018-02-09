import React, { Component } from 'react';
import styled from 'styled-components';

export default class Landing extends Component {
	constructor() {
		super();
		this.state = {
			subheads: []
		}
		this.handleOnLoad = this.handleOnLoad.bind(this);
	}
	handleOnLoad(e) {
		console.log("loaded");
	}

	randomColorGenerator() {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
			align-items: center;
		`
		const Title = styled.h3 `
			margin: 1em;
			font-weight: 700;
			font-size: 1.5em;
		`

		const Text = styled.p `
			border-left: 4px solid gray;
			margin: 1em 1em;
			padding-left: 0.5em;
			font-size: 0.9em;
		`
		const Card = styled.div `
			display: flex;
			justify-content: center;
			align-items: center;
			height: 150px;
			width: 150px;
			border: 1px solid #d0d0d0;
			margin: 1em;
			border-radius: 15px;
			box-shadow: 2px 2px 2px #d0d0d0;
		`
		const CardContainer = styled.div `
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
		`

		const Button = styled.button `
			padding: 0.75em 3em;
			font-size: 1em;
			background: white;
			border: 1px solid #d0d0d0;
			border-radius: 8px;
			color: black;
			box-shadow: 1px 1px 1px #d0d0d0;
			margin: 0 1em;
		`

		const A = styled.a `
			text-decoration: none;
			&:hover {
				border-bottom: 1px solid ${this.randomColorGenerator};
			}
		`
		const ButtonA = styled.a `
			color: #b0b0b0;
		`
		const P = styled.p `
			border-bottom: 1px solid ${this.randomColorGenerator};
		`
		const BGroup = styled.div `
			display: flex;
			flex-direction: row;
		`
		return(
			<Container>
				<Title>My collection of cheatsheets</Title>
				<BGroup>
					<ButtonA href="https://github.com/JasonhjKim/react-router-lib"><Button><i className="fa fa-github"></i> Github</Button></ButtonA>
					<ButtonA href="https://react-router-lib.herokuapp.com"><Button><i className="fa fa-bookmark"></i> Heroku</Button></ButtonA>
				</BGroup>
				<Text>
				This is a simple repository of cheatsheets of some web technology I use every day. I have realized while developing web, there are many proprietary syntaxes that needs to be memorized. I have created this project to reference them anytime.
				</Text>
				<CardContainer style={{marginTop:"2em"}}>
					<A href="/react_scratch"><Card><P>React install</P></Card></A>
					<A href="/react"><Card><P>React</P></Card></A>
					<A href="/redux"><Card><P>Redux</P></Card></A>
					<A href="/mocha"><Card><P>Testing</P></Card></A>
					<A href="es6"><Card><P>ES6</P></Card></A>
					<A href="mongoose"><Card><P>Mongoose</P></Card></A>
					<A href="restful"><Card><P>REST</P></Card></A>
					<A href="color"><Card><P>Colors</P></Card></A>
					
				</CardContainer>
			</Container>
		)
	}
}