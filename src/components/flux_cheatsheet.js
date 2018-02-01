import React, { Component } from 'react';
import styled from 'styled-components';

export default class Flux extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
		`
		const Title = styled.h3 `
			margin: 0 1em 1em 1em;
			font-weight: 700;
			font-size: 1.5em;
		`

		const SubTitle = styled.h3 `
			margin: 0 1em 1em 1em;
			font-weight: 500;
			font-size: 1.25em;
		`

		const Text = styled.p `
			border-left: 4px solid gray;
			margin: 0 1em 1em 1em;
			padding-left: 0.5em;
			font-size: 0.9em;
			text-wrap: wrap;
		`
		return(
			<Container>
				<Title>Flux architecture cheatsheet</Title>
				<Text>
					<b>Dispatcher</b> receives actions and dispatches them to stores that have registered with the dispatcher.<br/>
					<b>Store</b> is what holds the data of an application.<br/>
					<b>Action</b> capture the ways in which anything might interact with your application.<br/>
					<b>View</b> displays data from stores.
				</Text>

				<SubTitle>
					How it works
				</SubTitle>
				<Text>
					1. Views send action to the dispatcher.<br/>
					2. The dispatcher sends actions to every store.<br/>
					3. Stores send data to the views
				</Text>
			</Container>
		)
	}
}