import React, { Component } from 'react';
import styled from 'styled-components';
import Snippet from '../views/snippet';

export default class Mocha extends Component {
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
                <Title>Mocha & Mongoose Cheatsheet</Title>

                <Text>before & beforeEach
					<pre>
                    </pre>
				</Text>
				<Snippet syntax="js" code={
`const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/users_test");

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connection
    .once('open', () => { done()})
    .on('err', (error) => {
        console.warn('Warning', error);
    });
})

beforeEach((done) => {
});`}/>

                <Text>basic testing
					<pre>describe() & it() & assert()<br/>
                    always assert truthy value
                    </pre>
				</Text>
				<Snippet syntax="js" code={
`describe("General description", () => {
    it ("Specific description", (done) => {
        .then(() => {
            assert(something === something); 
            done();
        });
    })
}) 
`}/>

                <Text>reading
					<pre>find() & findOne()
                    </pre>
				</Text>
				<Snippet syntax="js" code={
`it('find all with value', (done) => {
    Database.find({_id: someID})
        .then((foundData) => {
            done();
        })
})
if('find one with value', (done) => {
    Database.findOne({_id: someID})
        .then((foundData) => {
            done();
        })
})`}/>

                <Text>virtual type
					<pre>Get & Set<br/>Don't use fat arrow function => changes "this" reference
                    </pre>
				</Text>
				<Snippet syntax="js" code={
`userSchema.virtual('fullname').get(function(){
    return this.firstname + " " + this.lastname;
})
userSchema.virtual('fullname').set(function() {
})`}/>

                <Text>simple validation
					<pre>manually run validation using validateSync()
                    </pre>
				</Text>
				<Snippet syntax="js" code={
`name: {
    type: String,
    validate: {
        validator: (name) => name.length > 2,
        message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required']

}
it('requires a user name longer than 2 characters', () => {
    const user = new User({ name: "TA" })
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name

    assert(message === "Name must be longer than 2 characters.")
});`}/>
     </Container>
        )
    }
}