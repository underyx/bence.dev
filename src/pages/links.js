import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import LinksColumn from '../components/links/linkscolumn';

const StyledLinksPage = styled.section`
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    grid-auto-flow: column;
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  }
`;

const LinksPage = () => (
  <StaticQuery
    query={graphql`
      {
        allLinksYaml {
          nodes {
            category
            links {
              name
              url
              note
            }
          }
        }
      }
    `}
    render={(data) => (
      <Layout title="title">
        <h2>Links</h2>
        <p>
          I live a rather public and interlinked life online. This wall of links
          should help you learn pretty much anything about me. (But don&rsquo;t
          ask me why you would care to.)
        </p>
        <StyledLinksPage columns={data.allLinksYaml.nodes.length}>
          {data.allLinksYaml.nodes.map((column, index) => (
            <LinksColumn column={column} index={index} />
          ))}
        </StyledLinksPage>
      </Layout>
    )}
  />
);

export default LinksPage;
