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
			border: 1px solid black;
			margin: 1em;
		`
		const CardContainer = styled.div `
			display: flex;
			flex-flow: row wrap;
			justify-content: center;

		`
		return(
			<Container>
				<Title>My collection of cheatsheets</Title>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida ipsum dictum nibh imperdiet, nec mollis diam viverra. Quisque a faucibus diam. Donec ut ultrices nulla, id sodales ex. Integer cursus, felis nec fringilla vestibulum, libero nulla porta velit, non scelerisque nisl augue et sem. Vivamus congue id lorem a egestas. Etiam ut libero sed erat efficitur gravida. Aenean quis ipsum ut ipsum semper facilisis nec eget ipsum. Donec laoreet sapien ut accumsan eleifend. Donec cursus vitae ligula ut facilisis. Donec pellentesque arcu sit amet risus laoreet, et faucibus metus mattis. Donec pharetra dolor in dolor suscipit pretium.
				</Text>
				<CardContainer>
					<Card>Mongoose</Card>
					<Card>Mongoose</Card>
					<Card>Mongoose</Card>
					<Card>Mongoose</Card>
					<Card>Mongoose</Card>
					<Card>Mongoose</Card>
					<Card>Mongoose</Card>
					<Card>Mongoose</Card>
					<Card>Mongoose</Card>
				</CardContainer>
			</Container>
		)
	}
}