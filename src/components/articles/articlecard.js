import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import PublishInfo from './publishinfo'

const TitleLink = styled(Link)`
  text-decoration: none;
`

const ArticleCard = ({ article }) => (
  <section>
    <PublishInfo
      publishDate={article.frontmatter.publish_date}
      revisionDate={article.frontmatter.revision_date}
    />
    <TitleLink to={article.fields.path}>
      <h2>{article.frontmatter.title}</h2>
    </TitleLink>
    <p>
      {article.excerpt}{' '}
      <Link to={article.fields.path}>go read the rest of this thing ›</Link>
    </p>
  </section>
)

ArticleCard.propTypes = { article: PropTypes.object.isRequired }

export default ArticleCard
