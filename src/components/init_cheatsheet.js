import React, { Component } from 'react';
import styled from 'styled-components';
import Snippet from '../views/snippet';

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
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
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
		return(
			<Container>
				<h1>This is the first page</h1>
			</Container>
		)
	}
}