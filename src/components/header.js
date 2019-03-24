import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const StyledHeader = styled.header`
  margin-top: 1rem;
  text-align: center;
`

const HeaderText = styled.h1`
  display: inline-block;

  :before {
    content: "Hi, it's me,";
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
