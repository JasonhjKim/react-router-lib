import React,{Component} from 'react';
import styled from 'styled-components';
import Navigation from './navigation';

export default class Sidemenu extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
			width: 250px;
			background-color: #dfdfdf;
			min-height: 100vh;
			align-items: center;
			border-right: 1px solid black;
			top: 0;
			bottom: 0;
			flex: 1;
			position: fixed;
			@media(max-width: 780px) {
				display: none;
			}
			@media screen and (min-width: 1200px) {
				width: 300px;
			}
		`
		const LogoWrapper = styled.div `
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 2em 1em 4em 1em;

		`
		const Wrapper = styled.div `

		`
		return(
			<Container>
				<LogoWrapper>
					<img src={require("../logo.svg")} />
					<h2>My Cheatsheets</h2>
					<h4>created by H.J.K</h4>
				</LogoWrapper>

				<Wrapper>
					<Navigation/>
				</Wrapper>
			</Container>
		)
	}
}