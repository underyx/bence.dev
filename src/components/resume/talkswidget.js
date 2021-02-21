import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const TalksWidget = () => (
  <StaticQuery
    query={graphql`
      query {
        allTalksYaml(filter: { is_wip: { ne: true } }) {
          totalCount
          nodes {
            events {
              city
              venue
              url
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <h3>Talks</h3>
        <p>
          I&rsquo;m a fairly prolific speaker: so far, I&rsquo;ve written{' '}
          {data.allTalksYaml.totalCount} presentations that I&rsquo;ve held at{' '}
          {data.allTalksYaml.nodes
            .map((node) => node.events.length)
            .reduce((sum, a) => sum + a, 0)}{' '}
          events in total. Check them out on my <Link to="/talks">Talks</Link>{' '}
          page.
        </p>
      </>
    )}
  />
);
export default TalksWidget;
