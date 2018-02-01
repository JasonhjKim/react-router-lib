import React, { Component } from 'react';
import styled from 'styled-components';

export default class Logo extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 2em 2em 0 2em;
			position:sticky;
		`
		return(
			<Container>
				<img src={require("../logo.svg")} />
			</Container>
			
		)
	}
}