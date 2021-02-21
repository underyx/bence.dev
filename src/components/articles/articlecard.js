import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import PublishInfo from './publishinfo';

const InternalTitleLink = styled(Link)`
  text-decoration: none;
`;

const ExternalTitleLink = styled(OutboundLink)`
  text-decoration: none;
`;

const ArticleCard = ({ article }) => (
  <section>
    <PublishInfo
      publishDate={article.frontmatter.publish_date}
      revisionDate={article.frontmatter.revision_date}
      publication={article.frontmatter.publication}
    />
    {article.fields.path ? (
      <InternalTitleLink to={article.fields.path}>
        <h2>{article.frontmatter.title}</h2>
      </InternalTitleLink>
    ) : (
      <ExternalTitleLink href={article.fields.url}>
        <h2>{article.frontmatter.title}</h2>
      </ExternalTitleLink>
    )}

    <p>
      {article.frontmatter.publication &&
        article.excerpt &&
        `Description from ${article.frontmatter.publication}: `}
      {article.excerpt}{' '}
      {article.fields.path ? (
        <Link to={article.fields.path}>go read the rest of this thing ›</Link>
      ) : (
        <OutboundLink href={article.fields.url}>
          go read the rest of this thing ›
        </OutboundLink>
      )}
    </p>
  </section>
);

ArticleCard.propTypes = { article: PropTypes.object.isRequired };

export default ArticleCard;
