const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve(`./src/templates/article.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___publish_date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(article => {
      createPage({
        path: article.node.fields.path,
        component: articleTemplate,
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    actions.createNodeField({
      name: 'path',
      node,
      value: `/articles/${node.frontmatter.slug}`,
    })
  }
}
