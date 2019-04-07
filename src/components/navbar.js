import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledNavBar = styled.nav`
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  align-items: flex-end;
  font-weight: 600;
  margin-top: 1rem;
  max-width: 400px;
`

const NavBarLink = styled(Link)`
  margin-right: 0.5ch;
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }

  &.active {
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0;
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
