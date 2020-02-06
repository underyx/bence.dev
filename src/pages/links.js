import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import LinksColumn from '../components/links/linkscolumn'

const StyledLinksPage = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

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
    render={data => (
      <Layout title='title'>
        <h2>Links</h2>
        <p>
          I live a rather public and interlinked life online. This wall of links
          should help you learn pretty much anything about me. (But don&rsquo;t
          ask me why you would care to.)
        </p>
        <StyledLinksPage>
          {data.allLinksYaml.nodes.map(column => (
            <LinksColumn column={column} />
          ))}
        </StyledLinksPage>
      </Layout>
    )}
  />
)

export default LinksPage
