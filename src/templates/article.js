import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Commento from '../components/articles/commento'
import Divider from '../components/divider'
import Layout from '../components/layout'

const StyledPublishInfo = styled.p`
  font-style: italic;
`

const PublishInfo = ({ publishDate, revisionDate }) => (
  <StyledPublishInfo>
    Published on {publishDate}
    {revisionDate ? `, last revised on ${revisionDate}` : ''}
  </StyledPublishInfo>
)

class ArticleTemplate extends React.Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark

    return (
      <Layout>
        <h1>{frontmatter.title}</h1>
        <PublishInfo
          publishDate={frontmatter.publish_date}
          revisionDate={frontmatter.revision_date}
        />
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Divider />
        <h2>Discussion</h2>
        <Commento />
      </Layout>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { path: { eq: $path } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        publish_date(formatString: "MMMM D, YYYY")
        revision_date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
