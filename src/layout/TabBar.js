import React, { Component } from 'react';
import styled from 'styled-components';

const TabBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #ccc;
  display: flex;
  background-color: #f9f9f9;
  justify-content: space-evenly;
  padding: 4px;
  font-size: 13px;
`;

class TabBar extends Component {
  render() {
    return <TabBarWrapper>{this.props.children}</TabBarWrapper>;
  }
}

export default TabBar;
