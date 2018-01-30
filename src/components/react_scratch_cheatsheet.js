import React, { Component } from 'react';
import styled from 'styled-components';
import Snippet from '../views/snippet';

export default class ReactScratch extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
		`
		const Title = styled.h3 `
			margin: 1em;
			font-weight: 700;
			font-size: 1.5em;
		`

		const Text = styled.p `
			border-left: 4px solid gray;
			margin: 1em 1em;
			padding-left: 0.5em;
			font-size: 0.9em;
		`
		return(
			<Container>
				<Title>React React-DOM Babel Webpack from scratch</Title>
				<Text>This is how to install React, React-DOM, Babel, Webpack from scratch, without using create-react-app. Create new project directory and using node package manager to intitalize and install these packages.</Text>
				<Snippet syntax={"npm"} code={
`1. npm init
2. npm install --save react react-dom
3. npm install --save webpack webpack-dev-server
4. npm install --save-dev babel-cli babel-core babel-loader babel-plugin-transform-object-rest-spread babel-preset-es2015 babel-preset-react babel-preset-stage-0 babel-register
5. configure react app`} />
				<Text>After installation have completed. Open package.json to add</Text>
				<Snippet syntax={"json"} title={"package.json"} code={
`"babel": {
    "presets": [
      "es2015",
      "react",
      "stage-0"
    ],
    "plugins": [
      "transform-object-rest-spread"
    ]
  }`}/>
  				<Text>Time to configure webpack first install style-loader, css-loader, and less-loader</Text>
  				<Snippet syntax={"npm"} code={
`mkdir webpack
cd webpack
touch webpack.dev.config.js
npm install --save-dev style-loader css-loader less-loader
npm install --save-dev less `} />
				<Snippet syntax={"js"} title={"webpack.dev.config.js"} code={
`var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}`} />
				<Snippet code={`<!DOCTYPE html>
<html>
    <head>
        <title> Ideal React Seed </title>
    </head>
    <body>
        <div id="app"></div>
        <script type="text/javascript" src="/bundle.js"></script>
    </body>
</html>`} title={"index.html"} syntax={"html"}/>
				<Snippet code={`import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('app'))

`} title={"index.js"} syntax={"js"}/>
				<Snippet code={`import React, {Component} from 'react';

export default class App extends Component {
    render () {
        return <p>This is my new react app</p>
    }
}`} title={"App.js"} syntax="js"/>
				<Snippet code={`"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "./node_modules/.bin/webpack-dev-server --config ./webpack/webpack.dev.config.js"
}`} syntax={"json"} title={"package.json"}/>
				<Snippet code={`npm run dev => http://localhost:8080`} syntax="npm"/>
			</Container>
		)
	}
}