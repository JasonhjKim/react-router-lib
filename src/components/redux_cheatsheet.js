import React, { Component } from 'react';
import styled from 'styled-components';
import Snippet from '../views/snippet';

export default class Rdx extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
		`
		const Title = styled.h3 `
			margin: 0 1em 1em 1em;
			font-weight: 700;
			font-size: 1.5em;
		`

		const Text = styled.p `
			border-left: 4px solid gray;
			margin: 0 1em 1em 1em;
			padding-left: 0.5em;
			font-size: 0.9em;
		`
		return(
			<Container>
				<Title>Redux Cheatsheet</Title>
				<Text>Provider template for index.js
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(/*promise*/)(createStore);
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();`}></Snippet>

				<Text>Combined Reducer
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`import { combineReducers } from 'redux';
const rootReducer = combineReducers({
})
export default rootReducer;`}></Snippet>

				<Text>Action
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`export const EXAMPLE_ACTION = "EXAMPLE_ACTION";
export function someAction(item) {
	return {
		type: EXAMPLE_ACTION,
		payload: item
	}
}`}></Snippet>

				<Text>mapStateToProps
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`function mapStateToProps(state) {
	return {
		someState: state.someState,
	}
}`}></Snippet>

				<Text>mapDispatchToProps
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`export { bindActionCreators } from 'redux'
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setSecondary }, dispatch);
}`}></Snippet>

				<Text>React-redux connect
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
					`export default connect(mapStateToProps, mapDispatchToProps)(Secondary);`}></Snippet>

				<Text>Reducer
					<pre>
					</pre>
				</Text>
					<Snippet syntax="js" code={
`import {SOME_ACTION} from '../actions/index'

export default function setColor(state=[], action) {
	switch(action.type) {
		case SOME_ACTION:
			return [...state, action.payload];
	}
	return state;
}`} />
			</Container>
			
		)
	}
}