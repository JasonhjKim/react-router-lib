import React, { Component } from 'react';
import styled from 'styled-components';

export default class Rdx extends Component {
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
			<h1>Redux cheatsheet</h1>
		)
	}
}