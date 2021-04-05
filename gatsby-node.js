/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const category = path.resolve(`./src/components/templates/category.jsx`)

  const contentsResult = await graphql(`
    {
        allMicrocmsCategory {
            edges {
              node {
                slug
                name
              }
            }
        }
    }
  `)

  contentsResult.data.allMicrocmsCategory.edges.forEach(({node}) => {
    createPage({
      path: `/${node.slug}`,
      component: category,
      context: {
        slug: node.slug,
      },
    })
  })

}
