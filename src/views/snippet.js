import React, { Component } from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/styles/hljs';

export default class Snippet extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
			width: 95%;
			font-family: 'Source Code Pro', monospace;
			margin: 0 1em 2em 1em;
			border-radius: 5px;
		`
		const Wrapper = styled.div `
			border: 1px solid black;
			border-top: none;
		`
		const HeaderWrapper = styled.div `
			display: flex;
			flex-direction: row;
			border: 1px solid black;
			background-color: #E4E6F1;
			font-size: 0.75em;
			opacity: 0.75;
		`
		const Syntax = styled.p `
			display: flex;
			margin: 0;
			flex: 1;
			justify-content: flex-end;
			padding-right: 3px;
		`
		const File = styled.div `
			display: flex;
			flex: 1;
			justify-content: flex-start;
			padding-left: 7px;
		`
		return(
			<Container>
				<HeaderWrapper>
					<File>{this.props.title === undefined ? "" : this.props.title}</File>
					<Syntax>{this.props.syntax}</Syntax>
				</HeaderWrapper>
				<Wrapper>
					<SyntaxHighlighter language="javascript" style={tomorrow}>
						{this.props.code}
					</SyntaxHighlighter>
				</Wrapper>
			</Container>
		)
	}
}