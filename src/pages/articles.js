import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const ArticlesPage = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___publish_date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              excerpt
              fields {
                path
              }
              frontmatter {
                publish_date(formatString: "MMMM DD, YYYY")
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <ul>
          {data.allMarkdownRemark.edges.map(article => (
            <li>
              <Link to={article.node.fields.path}>
                {article.node.frontmatter.title}{' '}
                {article.node.frontmatter.publish_date}
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )}
  />
)

export default ArticlesPage
