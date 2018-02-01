import React, { Component } from 'react';
import styled from 'styled-components';
import ColorCard from '../views/color_card';

export default class Color extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
		`
		const Title = styled.h3 `
			margin: 0 0 1em 0;
			font-weight: 700;
			font-size: 1.5em;
		`

		const Text = styled.p `
			border-left: 4px solid gray;
			margin: 0 0 1em 0;
			padding-left: 0.5em;
			font-size: 0.9em;
		`
		const CardContainer = styled.div `
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
		`
		return(
			<Container>
			<Title>Color Cheatsheet</Title>
				<CardContainer>
					<ColorCard color="#fd9b6e" />
					<ColorCard color="#d11c16" />
					<ColorCard color="#ee451f" />
					<ColorCard color="#bef7e4" />
					<ColorCard color="#62c8a5" />
					<ColorCard color="#0000A1" />
					<ColorCard color="#1f6ed4" />
					<ColorCard color="#39bae8" />
					<ColorCard color="#b9edf8" />
					<ColorCard color="#A7E8BD" />
					<ColorCard color="#FCBCB8" />
					<ColorCard color="#D5E1DD" />
					<ColorCard color="#747E80" />
				</CardContainer>
			</Container>
		)
	}
}