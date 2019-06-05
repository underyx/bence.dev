import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const ArticlesWidget = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          totalCount
        }
        allMediumPost(
          filter: {
            type: { eq: "Post" }
            homeCollectionId: { eq: "7b8476a2a014" }
          }
        ) {
          totalCount
        }
      }
    `}
    render={data => (
      <>
        <h3>Articles</h3>
        <p>
          There's also a bunch of articles I&rsquo;ve written. To be more
          specific, there's{' '}
          {data.allMarkdownRemark.totalCount + data.allMediumPost.totalCount} –{' '}
          {data.allMediumPost.totalCount} of which were published by
          code.kiwi.com as well. Check those out on my{' '}
          <Link to="/articles">Articles</Link> page.
        </p>
      </>
    )}
  />
)
export default ArticlesWidget
