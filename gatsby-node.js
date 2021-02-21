const path = require(`path`);

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const articleTemplate = path.resolve(`./src/templates/article.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___publish_date], order: DESC }
        limit: 1000
      ) {
        nodes {
          fields {
            path
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allMarkdownRemark.nodes.forEach((article) => {
      createPage({
        path: article.fields.path,
        component: articleTemplate,
      });
    });

    return null;
  });
};
const onCreateNode = ({ node, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    actions.createNodeField({
      name: 'path',
      node,
      value: `/articles/${node.frontmatter.slug}`,
    });
  }
  if (node.internal.type === `TalksYaml`) {
    // eslint-disable-next-line no-param-reassign
    node.date =
      node.events && node.events.sort((event) => event.date).reverse()[0].date;
  }
};

const sourceNodes = ({ actions }) => {
  const typeDefs = `
    type LinksYaml implements Node {
      category: String!
      links: [Link!]!
    }

    type Link {
      name: String!
      url: String!
      note: String!
    }

    type TalksYaml implements Node {
      slug: String!
      title: String!
      subtitle: String
      description: String
      date: Date @dateformat
      is_private: Boolean
      is_wip: Boolean
      events: [Event!]
    }

    type Event {
      name: String!
      date: Date! @dateformat
      city: String
      venue: String
      url: String
    }
  `;
  actions.createTypes(typeDefs);
};

module.exports = { createPages, onCreateNode, sourceNodes };
