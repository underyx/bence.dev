import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledNavBar = styled.nav`
  margin-left: 2rem;
  display: flex;
  flex: auto;
  align-items: flex-end;
  justify-content: space-between;
`

const NavBarLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }

  &.active {
    text-decoration: underline;
  }
`

NavBarLink.defaultProps = {
  activeClassName: 'active',
}

const NavBar = () => (
  <StyledNavBar>
    <NavBarLink to="/">home</NavBarLink>
    <NavBarLink to="/resume">résumé</NavBarLink>
    <NavBarLink to="/links">links</NavBarLink>
    <NavBarLink to="/articles">articles</NavBarLink>
    <NavBarLink to="/talks">talks</NavBarLink>
    <NavBarLink to="/projects">projects</NavBarLink>
    <NavBarLink to="/music">music</NavBarLink>
  </StyledNavBar>
)

export default NavBar
