import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import LinksColumn from '../components/links/linkscolumn'

const StyledLinksPage = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`

const LinksPage = () => (
  <StaticQuery
    query={graphql`
      {
        allLinksYaml {
          edges {
            node {
              category
              links {
                name
                url
                note
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <h2>Links</h2>
        <p>
          I live a rather public and interlinked life online. This wall of links
          should help you learn pretty much anything about me. (But don't ask me
          why you would care to.)
        </p>
        <StyledLinksPage>
          {data.allLinksYaml.edges.map(column => (
            <LinksColumn column={column.node} />
          ))}
        </StyledLinksPage>
      </Layout>
    )}
  />
)

export default LinksPage
