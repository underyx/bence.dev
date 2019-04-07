import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Divider from '../components/divider'
import Layout from '../components/layout'
import ArticleCard from '../components/articles/articlecard'

const StyledArticleList = styled.section`
  margin-left: 0;
  list-style: none;
`

const ArticleList = ({ articles }) => (
  <StyledArticleList>
    {articles.map((article, index) => (
      <>
        <ArticleCard article={article} />
        {index !== articles.length - 1 ? <Divider /> : null}
      </>
    ))}
  </StyledArticleList>
)

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
              excerpt(pruneLength: 280)
              fields {
                path
              }
              frontmatter {
                publish_date(formatString: "MMMM D, YYYY")
                revision_date(formatString: "MMMM D, YYYY")
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <ArticleList articles={data.allMarkdownRemark.edges} />
      </Layout>
    )}
  />
)

export default ArticlesPage
