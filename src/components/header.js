import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const StyledHeader = styled.header`
  margin-top: 1.8rem;
`

const HeaderText = styled.h1`
  display: inline-block;
  margin-bottom: 0.8rem;

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
  </StyledHeader>
)

export default Header
