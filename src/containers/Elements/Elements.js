import React, { Component } from 'react';
// import { Link } from 'react-router';
import { SimpleButton, Container, Row, Column} from 'elements';
import config from '../../config';

const onButtonClick = () => {
  console.log('Simple Button was clicked!');
};

export default class Home extends Component {
  render() {
    const styles = require('./Elements.scss');
    return (
      <Container>
        <h2>{config.app.title}</h2>
        <h4>{config.app.description}</h4>
        <div className={styles.section}>
          <h5>Buttons</h5>
          <div>
            <SimpleButton onClick={onButtonClick}>Simple button</SimpleButton>&nbsp;
            <SimpleButton onClick={onButtonClick} type="primary">Primary button</SimpleButton>
          </div>
        </div>
        <div className={styles.section}>
          <h5>Grid</h5>
          <Row className={styles.gridRow}>
            <Column size={1}>one</Column><Column size={11}>eleven</Column>
          </Row>
          <Row className={styles.gridRow}>
            <Column size={2}>two</Column><Column size={10}>ten</Column>
          </Row>
          <Row className={styles.gridRow}>
            <Column size={3}>three</Column><Column size={9}>nine</Column>
          </Row>
          <Row className={styles.gridRow}>
            <Column size={4}>four</Column><Column size={8}>eight</Column>
          </Row>
          <Row className={styles.gridRow}>
            <Column size={5}>five</Column><Column size={7}>seven</Column>
          </Row>
          <Row className={styles.gridRow}>
            <Column size={6}>six</Column><Column size={6}>six</Column>
          </Row>
          <Row className={styles.gridRow}>
            <Column size={3}>three</Column><Column size={3}>three</Column><Column size={3}>three</Column><Column size={3}>three</Column>
          </Row>
          <Row className={styles.gridRow}>
            <Column size={12}>twelve</Column>
          </Row>
        </div>
      </Container>
    );
  }
}
