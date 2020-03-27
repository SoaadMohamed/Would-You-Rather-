import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react';

export class NoMatch extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Image src="/images/404.jpeg"/>
        <Header as="h3">Oops!</Header>
        <p>Sorry we can’t find the page you are looking for.</p>
        <a href="/">Return to home page</a>
      </Container>
    );
  }
}

export default NoMatch;
