import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const LinksList = styled.ul`
  list-style: none;
  margin-left: 0;
`

const Link = styled.a`
  text-decoration: none;
`

const LinkNote = styled.div`
  font-size: 0.7rem;
`

const StyledColumn = styled.section`
  flex: 1 1 0;
  margin-right: 2rem;
  &:last-child {
    margin-right: 0;
  }
`

const LinksColumn = ({ column }) => (
  <StyledColumn>
    <h3>{column.category}</h3>
    <LinksList>
      {column.links.map(link => (
        <li>
          <Link href={link.url}>{link.name}</Link>
          <LinkNote>{link.note}</LinkNote>
        </li>
      ))}
    </LinksList>
  </StyledColumn>
)

LinksColumn.propTypes = {
  column: PropTypes.object.isRequired,
}

export default LinksColumn
