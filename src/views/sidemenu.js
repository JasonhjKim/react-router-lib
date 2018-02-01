import React,{Component} from 'react';
import styled from 'styled-components';
import Navigation from './navigation';
import Logo from './logo';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Sidemenu extends Component {
	render() {
		const Container = styled.div `
			color: white;
			display: flex;
			flex-direction: column;
			flex: 1;
			background-color: #27292B;
			max-height: 100vh;
			height: 100%;
			width: 250px;
			position: fixed;
			overflow-y: scroll;
			top: 0;
			bottom: 0;
			@media(max-width: 780px) {
				display: none;
			}
			@media screen and (min-width: 1200px) {
				width: 300px;
			};
		`
		const LogoWrapper = styled.div `
			margin: 3em 1em 0em 1em;
			/* display: flex;
            align-items: center;
            justify-content: center;    
                this is what causing sidebar content stacking*/
		`
		const Wrapper = styled.div `

		`
		const Nav = styled.div `
			display: flex;
			flex-direction: column;
			color: white;
		`
		const Title = styled.div `
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 0 4em 0;
		`
		return(
			<Container>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
				<Title>
					<h2>My Cheatsheets</h2>
					<h4 style={{textAlign:"right"}}>by H.J.K</h4>
				</Title>
				<Navigation/>
			</Container>
		)
	}
}