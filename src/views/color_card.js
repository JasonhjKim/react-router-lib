import React, { Component} from 'react';
import styled from 'styled-components';

export default class ColorCard extends Component {
    render() {
        const Container = styled.div `
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 170px;
            width: 150px;
            margin: 1em;
            justify-content: center;

            &:hover {

            }
        `
        const Color = styled.div `
            height: 150px;
            width: 150px;
            background-color: ${this.props.color};
            border-radius: 8px;
        `
        const Value = styled.div `
            border-bottom: 1px solid ${this.props.color}
        `
        return(
            <Container>
                <Color />
                <Value>
                    {this.props.color}
                </Value>
            </Container>
        )
    }
}