import PropTypes from 'prop-types'
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

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
}

const ArticlesPage = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___publish_date], order: DESC }
          limit: 1000
        ) {
          nodes {
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
        allMediumPost(
          filter: {
            type: { eq: "Post" }
            homeCollectionId: { eq: "7b8476a2a014" }
          }
          sort: { fields: firstPublishedAt, order: DESC }
        ) {
          nodes {
            uniqueSlug
            content {
              metaDescription
            }
            firstPublishedAt(formatString: "MMMM D, YYYY")
            title
          }
        }
      }
    `}
    render={data => {
      const externalPosts = data.allMediumPost.nodes.map(post => ({
        excerpt: post.content.metaDescription,
        fields: { url: `https://code.kiwi.com/${post.uniqueSlug}` },
        frontmatter: {
          title: post.title,
          publish_date: post.firstPublishedAt,
          publication: 'code.kiwi.com',
        },
      }))
      const mergedArticles = externalPosts
        .concat(data.allMarkdownRemark.nodes)
        .sort(post => post.frontmatter.publish_date)
      return (
        <Layout>
          <ArticleList articles={mergedArticles} />
        </Layout>
      )
    }}
  />
)

export default ArticlesPage
