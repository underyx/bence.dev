import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const PublishInfo = styled.div`
  text-align: left;
`

const TitleLink = styled(Link)`
  text-decoration: none;
`

const ArticleCard = ({ article }) => (
  <li>
    <PublishInfo>{article.node.frontmatter.publish_date}</PublishInfo>
    <TitleLink to={article.node.fields.path}>
      <h2>{article.node.frontmatter.title}</h2>
    </TitleLink>
    <p>{article.node.excerpt}</p>
  </li>
)

export default ArticleCard
