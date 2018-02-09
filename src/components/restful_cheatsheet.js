import React, { Component } from 'react';
import styled from 'styled-components';

export default class Restful extends Component {
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
		return(
			<Container>
			<Title>Representation State Transfer Routes</Title>
			<table className="table">
				<thead>
					<tr>
						<th>NAME</th>
						<th>URL</th>
						<th>VERB</th>
						<th>DESCRIPTION</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>INDEX</td>
						<td>/sample</td>
						<td>GET</td>
						<td>Display index page</td>
					</tr>
					<tr>
						<td>NEW</td>
						<td>/sample/new</td>
						<td>GET</td>
						<td>Display form for index page</td>
					</tr>

					<tr>
						<td>CREATE</td>
						<td>/sample</td>
						<td>POST</td>
						<td>Create new value; redirect to index</td>
					</tr>

					<tr>
						<td>SHOW</td>
						<td>/sample/:id</td>
						<td>GET</td>
						<td>Show info about sample with :id</td>
					</tr>

					<tr>
						<td>EDIT</td>
						<td>/sample/:id/edit</td>
						<td>GET</td>
						<td>Show edit form for sample with :id</td>
					</tr>

					<tr>
						<td>UPDATE</td>
						<td>/sample/:id</td>
						<td>PATCH/PUT</td>
						<td>Update a sample with :id; redirect to index</td>
					</tr>

					<tr>
						<td>DESTROY</td>
						<td>/sample/:id
							
						</td>
						<td>DELETE</td>
						<td>Delete a sample with :id; redirect to index</td>
					</tr>
				</tbody>
			</table>
			</Container>
			
		)
	}
}