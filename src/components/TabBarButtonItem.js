import React from 'react';
import styled from 'styled-components';

const TabBarButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  padding: 0;
`;

const Label = styled.p`
  padding: 0;
  margin: 0;
`;

const TabBarButtonItem = ({ name }) => (
  <TabBarButtonWrapper>
    <Icon src="/static/assets/home.png" />
    {name && <Label>{name}</Label>}
  </TabBarButtonWrapper>
);

export default TabBarButtonItem;
