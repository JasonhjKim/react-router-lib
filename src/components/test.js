import React, { Component } from 'react';

export default class Class extends Component {
	render() {
		return();
	}
}

//Props arent used in constructor
constructor(props) {
	super(props);
	this.state = {}
}

//stateless function 
const Sample = (props) => {
	const style = {
		color: "blue",
	}
	return <div style={style}>props.name</div>
}

//destructoring arguments
const Sample = ({name}) => {
	const style = {
		color: "blue",
	}
	return <div style={style}>{name}</div>
}

const item = itemList.map((item, index) => (
	<li key={index}> item </li>
))

//event handling
this.handleClick = this.handleClick.bind(this);

handleClick(e) {
	this.setState = {}
}
render() {
	return(
		<button onClick={this.handleClick}/>
	)
}

//controlled input
constructor() {
	super();
	this.state = {
		input: "value"
	}
	this.handleChange = this.handleChange.bind(this);
}
onChange(e) {
	this.setState = {input: e.target.value}
}
render() {
	return(
		<input value={this.state.input} onChange={this.handleChange} />
	)
}

//Parent to Child commuication
class Parent extends Component {
	render() {
		return (<Child passed="pass"/>);
	}
}
class Child extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return(<li>{this.props.passed}</li>)
	}
}

//Child to Parent Communication
class Parent extends Component {
	constructor() {
		super();
		this.state = {value:""}
	}
	setFromChildValue(valueFromChild) {
		this.setState = {value:valueFromChild}
	}
	render() {
		return(<Child getChildValue={this.setFromChildValue}/>)
	}
}
class Child extends Component {
	constructor(props) {
		super(props)
	}
	handleClick(e) {
		this.props.getChildValue(valueToParent);
	}
	render() {
		return(<button onClick={this.handleClick}>Change</button>)
	}
}

///////////////////////////////
///////////////////////////////
///////////////////////////////
Redux;


import React from 'react';
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
registerServiceWorker();


import { combineReducers } from 'redux';
const rootReducer = combineReducers({
})
export default rootReducer;


export const EXAMPLE_ACTION = "EXAMPLE_ACTION";
/*Action for pushing new layer to the bottom of body container */
export function someAction(item) {
	return {
		type: EXAMPLE_ACTION,
		payload: item
	}
}


function mapStateToProps(state) {
	return {
		colorList: state.colorList,
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setSecondary }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Secondary);


import {SET_COLOR} from '../actions/index'

export default function setColor(state=["#ffffff"], action) {
	switch(action.type) {
		case SET_COLOR:
			return [...state, action.payload];
	}
	return state;
}
