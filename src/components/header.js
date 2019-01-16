import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const StyledHeader = styled.header`
  text-align: center;
`

const HeaderText = styled.h1`
  font-size: 52px;
  display: inline-block;
  margin-bottom: 1rem;

  :before {
    content: "Hi, it's me,";
    font-size: 18px;
    color: #666;
    display: block;
  }
`

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #333;
`

const Header = () => (
  <StyledHeader>
    <HeaderText>
      <HeaderLink to="/">underyx</HeaderLink>
    </HeaderText>
  </StyledHeader>
)

export default Header
