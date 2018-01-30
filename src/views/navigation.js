import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
		`

		const style = {
			textDecoration: "none",
			marginBottom: "0.35em",
			borderBottom: "1px solid black",
		}
		
		return(
			<Container>
				<Link to="/" style={style} className="link">Init</Link>
				<Link to="/react_scratch" style={style} className="link">React from scratch</Link>
				<Link to="/react" style={style} className="link">React Cheatsheet</Link>
				<Link to="/redux" style={style} className="link">Redux Cheatsheet</Link>
				<Link to="/flux" style={style} className="link">Flux Cheatsheet</Link>
				<Link to="/es6" style={style} className="link">ES6 Cheatsheet</Link>
				<Link to="/mongoose" style={style} className="link">Mongoose Cheatsheet</Link>
				<Link to="/restful" style={style} className="link">RESTful Routes</Link>
				<Link to="/color" style={style} className="link">Favourite Colours</Link>
			</Container>
		)
	}
}