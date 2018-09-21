import React, { Component } from 'react';
import styled from 'styled-components';

const BackgroundHeader = styled.div`
  background-color: white;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Header extends Component {
  render() {
    return <BackgroundHeader>{this.props.children}</BackgroundHeader>;
  }
}

export default Header;
