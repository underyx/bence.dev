import lodash from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { stripHtml } from 'string-strip-html';
import styled from 'styled-components';

import Divider from '../components/divider';
import Layout from '../components/layout';
import ArticleCard from '../components/articles/articlecard';

const StyledArticleList = styled.section`
  margin-left: 0;
  list-style: none;
`;

const ArticleList = ({ articles }) => (
  <StyledArticleList>
    {articles.map((article, index) => (
      <>
        <ArticleCard article={article} />
        {index !== articles.length - 1 ? <Divider /> : null}
      </>
    ))}
  </StyledArticleList>
);

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

const ArticlesPage = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          nodes {
            excerpt(pruneLength: 280)
            fields {
              path
            }
            frontmatter {
              sortDate: publish_date
              publish_date(formatString: "MMMM D, YYYY")
              revision_date(formatString: "MMMM D, YYYY")
              title
            }
          }
        }
        allFeedMedium(filter: { link: { glob: "https://code.kiwi.com/*" } }) {
          nodes {
            sortDate: isoDate
            isoDate(formatString: "MMMM D, YYYY")
            link
            title
            content {
              encoded
            }
          }
        }
      }
    `}
    render={(data) => {
      const externalPosts = data.allFeedMedium.nodes.map((post) => {
        const { result } = stripHtml(post.content.encoded, {
          stripTogetherWithTheirContents: ['figure', 'h3'],
        });

        return {
          excerpt: lodash.truncate(result, {
            length: 280,
            separator: ' ',
            omission: '…',
          }),
          fields: { url: post.link },
          frontmatter: {
            sortDate: post.sortDate,
            title: post.title,
            publish_date: post.isoDate,
            publication: 'code.kiwi.com',
          },
        };
      });
      const mergedArticles = externalPosts.concat(data.allMarkdownRemark.nodes);
      const sortedArticles = lodash
        .sortBy(mergedArticles, (post) => post.frontmatter.sortDate)
        .reverse();
      return (
        <Layout title="articles">
          <ArticleList articles={sortedArticles} />
        </Layout>
      );
    }}
  />
);

export default ArticlesPage;
