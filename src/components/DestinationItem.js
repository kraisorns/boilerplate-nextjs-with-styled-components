import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
  background: ${props =>
      props.image
        ? `url(${props.image})`
        : 'url(/static/assets/placeholder.jpg)'}
    no-repeat center;
  background-size: cover;
  color: white;
`;

const Title = styled.h3`
  padding: 0;
  margin: 0;
`;

const Text = styled.p`
  padding: 0;
  margin: 4px 0 0 0;
`;

class DestinationItem extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Bangkok</Title>
        <Text>42 Cooking Class</Text>
      </Wrapper>
    );
  }
}

export default DestinationItem;
