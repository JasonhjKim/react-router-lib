import React, { Component} from 'react';
import styled from 'styled-components';
import { Route } from 'react-router'
import Snippet from './snippet';
import Landing from '../components/init_cheatsheet';
import ReactScratch from '../components/react_scratch_cheatsheet';
import Rct from '../components/react_cheatsheet';
import Rdx from '../components/redux_cheatsheet';
import Flux from '../components/flux_cheatsheet';
import Es6 from '../components/es_cheatsheet';
import Mongoose from '../components/mongoose_cheatsheet';
import Restful from '../components/restful_cheatsheet';
import Color from '../components/color_cheatsheet';


export default class Body extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 4;
			max-width: 100%;
			border: 1px solid black;
			overflow-y: auto;
			min-height: 100vh;
			background: white;
			margin-left: 250px;

	      	@media (max-width: 780px) {
	      		margin: 0 auto;
	      	}
		`

		const Wrapper = styled.div `
			max-width: 1024px;
			display: flex;
			flex-direction: column;
			background-color: white;
			border: 1px solid black;
			width: 700px;

			@media (max-width:1024px) {
				width: 100%;
			}

		`
		return(
			<Container>
				<Wrapper>
					<Route path="/" exact component={Landing} />
					<Route path="/react_scratch" component={ReactScratch}/>
					<Route path="/react" component={Rct}/>
					<Route path="/redux" component={Rdx}/>
					<Route path="/flux" component={Flux}/>
					<Route path="/es6" component={Es6}/>
					<Route path="/mongoose" component={Mongoose}/>
					<Route path="/restful" component={Restful}/>
					<Route path="/color" component={Color}/>
				</Wrapper>
			</Container>
		)
	}
}