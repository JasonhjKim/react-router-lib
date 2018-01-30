import React, { Component } from 'react';
import styled from 'styled-components';

export default class Snippet extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
			width: 95%;
			font-family: 'Source Code Pro', monospace;
			margin: 1em;
			border-radius: 5px;
		`
		const Wrapper = styled.div `
		`
		const Circles = styled.div `
			display: flex;
			flex-directin: row;
			flex: 1;
			align-items: center;

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
		const Pre = styled.pre `
			margin: 0;
			border: 1px solid black;
			border-top: none;
			padding: 1em;
			overflow-x: scroll;
		`
		const Circle = styled.div `
			width: 1em;
			height: 1em;
			border-radius: 50%;
			background-color: gray;
			margin: 1px 2px;
			opacity: 0.5;
		`
		const Code = styled.code `
		`
		const File = styled.div `
			display: flex;
			flex: 1;
			justify-content: center;
		`
		return(
			<Container>
				<HeaderWrapper>
					<Circles>
						<Circle />
						<Circle />
						<Circle />
					</Circles>
					<File>{this.props.title === undefined ? "" : this.props.title}</File>
					<Syntax>{this.props.syntax}</Syntax>
				</HeaderWrapper>
				<Wrapper>
					<Pre className="prettyprint">
						<Code>
							{this.props.code}
						</Code>
					</Pre>
				</Wrapper>
			</Container>
		)
	}
}