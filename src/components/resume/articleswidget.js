import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const ArticlesWidget = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          totalCount
        }
        allFeedMedium(filter: { link: { glob: "https://code.kiwi.com/*" } }) {
          totalCount
        }
      }
    `}
    render={data => (
      <>
        <h3>Articles</h3>
        <p>
          There&rsquo;s also a bunch of articles I&rsquo;ve written. To be more
          specific, there&rsquo;s{' '}
          {data.allMarkdownRemark.totalCount + data.allFeedMedium.totalCount} –{' '}
          {data.allFeedMedium.totalCount} of which were published by
          code.kiwi.com as well. Check those out on my{' '}
          <Link to="/articles">Articles</Link> page.
        </p>
      </>
    )}
  />
)
export default ArticlesWidget
