import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.nav`
  display: flex;
  flex: auto;
  flex-wrap: wrap-reverse;
  align-items: flex-start;
  font-weight: 600;
  font-size: 0.85rem;
`;

const NavBarLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }

  &.active {
    text-decoration: underline;
  }

  :not(&:last-child) {
    margin-right: 1ch;
  }
`;

NavBarLink.defaultProps = {
  activeClassName: 'active',
};

const NavBar = () => (
  <Wrapper>
    <NavBarLink to="/">home</NavBarLink>
    <NavBarLink to="/resume">résumé</NavBarLink>
    <NavBarLink to="/links">links</NavBarLink>
    <NavBarLink to="/articles">articles</NavBarLink>
    <NavBarLink to="/talks">talks</NavBarLink>
    <NavBarLink to="/projects">projects</NavBarLink>
    <NavBarLink to="/music">music</NavBarLink>
  </Wrapper>
);

export default NavBar;
