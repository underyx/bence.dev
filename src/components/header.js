import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import NavBar from './navbar'

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.8rem;
`

const HeaderText = styled.h1`
  flex: 0 1 auto;
  display: inline-block;
  margin-right: 2rem;
  margin-bottom: 0;

  :before {
    content: "Hi, it's me,";
    font-weight: 400;
    font-size: 1rem;
    display: block;
  }
`

const HeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`

const Header = () => (
  <StyledHeader>
    <HeaderText>
      <HeaderLink to="/">underyx</HeaderLink>
    </HeaderText>
    <NavBar />
  </StyledHeader>
)

export default Header
