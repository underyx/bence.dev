import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 700;
  font-size: 0.85rem;
  gap: 0.5rem;
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
