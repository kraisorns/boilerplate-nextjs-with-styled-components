import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  background: ${ props => props.image ? `url(${props.image})` : 'url(/static/assets/placeholder.jpg)' } no-repeat center;
  background-size: cover;
  color: white;
`;

const TopItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  padding: 0;
  margin: 0;
`;

class HighlightItem extends Component {
  render() {
    return (
      <Wrapper>
        <TopItem>
          <span>City</span>
          <button>❤️</button>
        </TopItem>
        <Title>Activity Name</Title>
      </Wrapper>
    );
  }
}

export default HighlightItem;
