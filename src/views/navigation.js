import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
			flex: 1;
			font-weight: bold;
		`
		const Wrapper = styled.div `
			display: flex;
			align-items: center;
			min-height: 50px;
			border-top: 0.5px solid white;
			border-bottom: 0.5px solid white;
			padding-left: 2em;

			&:hover {
				background-color: white;
			}

		`
		const style = {
			textDecoration: "none",
			color: "white",
			padding: "1.25em 0",
			borderTop: "0.5px solid white",
			borderBottom: "0.5px solid white",
			textIndent: "2em",
		}

		const activeStyle = {	
			color: "black",
			backgroundColor: "white",
		}
		const StyledLink = styled(Link) `
			text-decoration: none;
			color: white;
			padding: 1.25em 0;
			border-top: 0.5px solid white;
			border-bottom: 0.5px solid white;
			text-indent: 2em;
			&:visited {
				color: white;
			}
			&:hover {
				color: black;
				background-color: white;
				
			}
		`
		return(
			<Container>
				<StyledLink to="/" className="link" >Init</StyledLink>
				<StyledLink to="/react_scratch" className="link">React from scratch</StyledLink>
				<StyledLink to="/react" className="link">React Cheatsheet</StyledLink>
				<StyledLink to="/redux" className="link">Redux Cheatsheet</StyledLink>
				<StyledLink to="/flux" className="link">Flux Cheatsheet</StyledLink>
				<StyledLink to="/es6" className="link">ES6 Cheatsheet</StyledLink>
				<StyledLink to="/mongoose" className="link">Mongoose Cheatsheet</StyledLink>
				<StyledLink to="/restful" className="link">RESTful Routes</StyledLink>
				<StyledLink to="/color" className="link">Favourite Colours</StyledLink>
			</Container>
		)
	}
}