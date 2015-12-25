import React, { Component } from 'react';
// import { Link } from 'react-router';
import { CounterButton } from 'components';
import { SimpleButton, Container, Row, Column} from 'elements';
import config from '../../config';

const onButtonClick = () => {
  console.log('button was clicked!');
};

export default class Home extends Component {
  render() {
    // const styles = require('./Home.scss');
    return (
      <Container>
        <h2>{config.app.title}</h2>
        <h4>{config.app.description}</h4>
        <CounterButton multireducerKey="counter1"/>
        <SimpleButton onClick={onButtonClick}>Simple button</SimpleButton>
        {/* <CounterButton multireducerKey="counter2"/> */}
        {/* <CounterButton multireducerKey="counter3"/> */}
        <Row>
          <Column style={{backgroundColor: 'lightgrey'}} size={8}>eight</Column><Column style={{backgroundColor: 'hotpink'}} size={4}>four</Column>
        </Row>
      </Container>
    );
  }
}
