import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import NavBar from './navbar';

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  @media print {
    display: none;
  }
`;

const HeaderText = styled.h1`
  display: inline-block;
  margin-bottom: 0;

  :before {
    content: "Hi, it's me,";
    font-weight: 400;
    font-size: 1rem;
    display: block;
  }
`;

const HeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`;

const Header = () => (
  <Wrapper>
    <HeaderText>
      <HeaderLink to="/">underyx</HeaderLink>
    </HeaderText>
    <NavBar />
  </Wrapper>
);

export default Header;
