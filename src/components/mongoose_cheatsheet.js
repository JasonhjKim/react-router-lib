import React, { Component } from 'react';
import styled from 'styled-components';
import Snippet from '../views/snippet';

export default class Mongoose extends Component {
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
				<Title>Mongoose Cheatsheet</Title>
				<Text>Inital setup
					<pre></pre>
				</Text>
				<Snippet syntax="js" code={
`var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/sample")

var Schema = new mongoose.Schema({
	name:String,
	age:Number
})

var Sample = mongoose.model("Schema",sampleSchema);`}/>
				
				<Text>Create()
					<pre></pre>
				</Text>
				<Snippet syntax="js" code={
`Sample.create({
	name: "Sample name",
	age: -1s
}, function(err, sample){
	if (err) {
	console.log(err);
	} else {
	console.log(sample);
	console.log("Message~~");
	}
})`}/>

				<Text>Object reference
					<pre></pre>
				</Text>
				<Snippet syntax="js" code={
`var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/sample");

var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
		]
});

var User = mongoose.model("User", userSchema);

//create new User
var newUser = new User({
	name: "Sample"
	email: "sample@gmail.com"
});

newUser.posts.push({
	title: "Sample Title",
	content: "Sample Content"
});`}/>
			</Container>

		)
	}
}