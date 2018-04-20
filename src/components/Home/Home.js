import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import { Wrapper, Heading, Content, Description, SubDescription, Btn } from './HomeStyles.js';
import { linkStyle } from '../../utils/styles';

const Home = ({}) => (
  <div>
    <Nav />
    <Wrapper>
      <Heading>All-in-one workspace</Heading>
      <Content>
        <Description>
          Write, plan, collaborate, and get organized. <br />
          Notes.io is all you need — in one tool.
        </Description>
        <a style={linkStyle} href="/signup">
          <Btn type="submit">Get Started</Btn>
        </a>
        <SubDescription>For teams & individuals - iOS and Mac coming soon.</SubDescription>
      </Content>
    </Wrapper>
  </div>
);

export default Home;
