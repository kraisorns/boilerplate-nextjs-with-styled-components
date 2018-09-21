import React from 'react';
import styled from 'styled-components';
import Header from '../src/layout/Header';
import TabBar from '../src/layout/TabBar';

import TabBarButtonItem from '../src/components/TabBarButtonItem';
import HighlightItem from '../src/components/HighlightItem';
import DestinationItem from '../src/components/DestinationItem';

const Title = styled.h2`
  color: tomato;
`;

const SearchInput = styled.input`
  padding: 16px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 0px 8px #ddd;
  flex: 1;
`;

const ContentContainer = styled.div`
  padding: 10px 20px;
  font-size: 17px;
`;

const Index = () => (
  <>
    <ContentContainer>
      <Header>
        <SearchInput placeholder="Where do you want to go?"/>
      </Header>
      <Title>Today</Title>
      <p>New experience today</p>
      <HighlightItem />
      <Title>Top Activities</Title>
      <DestinationItem />
    </ContentContainer>
    <TabBar>
      <TabBarButtonItem />
    </TabBar>
  </>
);

export default Index;
