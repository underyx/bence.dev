import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Link = styled(OutboundLink)`
  text-decoration: none;
`;

const LinkNote = styled.div`
  font-size: 0.7rem;
`;

const GridCell = styled.div`
  margin: 0;
  @media (min-width: 600px) {
    grid-column: ${({ index }) => `${index + 1} / ${index + 2}`};
  }
`;

const LinksColumn = ({ column, index }) => (
  <>
    <GridCell index={index} as="h3">
      {column.category}
    </GridCell>
    {column.links.map((link) => (
      <GridCell index={index} as="p">
        <Link href={link.url}>{link.name}</Link>
        <LinkNote>{link.note}</LinkNote>
      </GridCell>
    ))}
  </>
);

export default LinksColumn;
