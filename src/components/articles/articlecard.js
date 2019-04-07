import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import PublishInfo from './publishinfo'

const TitleLink = styled(Link)`
  text-decoration: none;
`

const ArticleCard = ({ article }) => (
  <section>
    <PublishInfo
      publishDate={article.node.frontmatter.publish_date}
      revisionDate={article.node.frontmatter.revision_date}
    />
    <TitleLink to={article.node.fields.path}>
      <h2>{article.node.frontmatter.title}</h2>
    </TitleLink>
    <p>
      {article.node.excerpt}{' '}
      <Link to={article.node.fields.path}>
        go read the rest of this thing ›
      </Link>
    </p>
  </section>
)

export default ArticleCard
