import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {
  Wrapper,
  Heading,
  Content,
  Description,
  SubDescription,
  Btn
} from './HomeStyles.js';

const Home = ({}) => (
  <Wrapper>
    <Heading>All-in-one workspace</Heading>
    <Content>
      <Description>
        Write, plan, collaborate, and get organized. <br />
        Notes.io is all you need — in one tool.
      </Description>
      <Btn type="submit">Get Started</Btn>
      <SubDescription>
        For teams & individuals - iOS and Mac coming soon.
      </SubDescription>
    </Content>
  </Wrapper>
);

export default Home;
