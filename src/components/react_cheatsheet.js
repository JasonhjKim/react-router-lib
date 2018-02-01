import React, { Component } from 'react';
import styled from 'styled-components';
import Snippet from '../views/snippet';

export default class Rct extends Component {
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
				<Title>React Cheatsheet</Title>
				<Text>Default Class
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`import React, { Component } from 'react';
export default class Class extends Component {
	render() {
		return();
	}
}`}/>
				<Text>Default Constructor
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`constructor(props) {
	super(props);
	this.state = {}
}`}/>

				<Text>Stateless function
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`const Sample = (props) => {
	const style = {
		color: "blue",
	}
	return <div style={style}>props.name</div>
}`}/>

				<Text>Destructoring arguments
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`const Sample = ({name}) => {
	const style = {
		color: "blue",
	}
	return <div style={style}>{name}</div>
}

const item = itemList.map((item, index) => (
	<li key={index}> item </li>
))`}/>

				<Text>Event handling
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`this.handleClick = this.handleClick.bind(this);

handleClick(e) {
	this.setState = {}
}
render() {
	return(
		<button onClick={this.handleClick}/>
	)
}`}/>

				<Text>Controlled input
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`constructor() {
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
}`}/>

				<Text>Parent to child communication
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`class Parent extends Component {
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
}`}/>

				<Text>Child to parent communication
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={
`class Parent extends Component {
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
}`}/>

				<Text>
					<pre>
					</pre>
				</Text>
				<Snippet syntax="js" code={``}/>

			</Container>

		)
	}
}