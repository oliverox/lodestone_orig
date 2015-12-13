import React, { Component } from 'react';
// import { Link } from 'react-router';
import { CounterButton } from 'components';
import config from '../../config';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <h1>{config.app.title}</h1>
        <h2>{config.app.description}</h2>
        <div className="container">
          <div className={styles.counterContainer}>
            <CounterButton multireducerKey="counter1"/>
            <CounterButton multireducerKey="counter2"/>
            <CounterButton multireducerKey="counter3"/>
          </div>
        </div>
      </div>
    );
  }
}
