import React, { Component } from 'react';
import styled from 'styled-components';
import Sidemenu from './sidemenu.js';

import Body from './body.js'

class App extends Component {
  render() {
  	const Container = styled.div `
  		display: flex;
      flex-direction: row;
      height: 100%;
      margin: 0;
  	`
    return (
        <Container>
          <Sidemenu />
        	<Body />
        </Container>
    );
  }
}

export default App;
