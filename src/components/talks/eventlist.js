import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { OutboundLink } from 'gatsby-plugin-google-analytics';

const StyledEventList = styled.ul`
  margin: 0;
  list-style: none;
  font-size: 0.8rem;
  text-align: left;
`;

const EventItem = styled.li`
  margin-bottom: 0;
`;

const EventLink = styled(OutboundLink)`
  text-decoration: underline;
  color: hsl(240, 30%, 75%);

  &:visited {
    color: hsl(240, 30%, 60%);
  }
`;

const EventList = ({ events }) => (
  <StyledEventList>
    {events.map((event) => (
      <EventItem>
        <EventLink href={event.url}>{event.name}</EventLink>
        {event.venue && ` at ${event.venue}`}
        {event.city && ` in ${event.city}`}
      </EventItem>
    ))}
  </StyledEventList>
);

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventList;
