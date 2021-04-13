/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

const { paginate } = require('gatsby-awesome-pagination');

// Category page
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const category = path.resolve('./src/components/templates/category.jsx');

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
  `);

  contentsResult.data.allMicrocmsCategory.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: category,
      context: {
        slug: node.slug,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Contentfulから記事を公開日時降順で取得する
  const result = await graphql(`
    {
      allMicrocmsBlog{
        edges {
          node {
            category {
              slug
              name
            }
            image {
              url
            }
            blogId
            title
            description
            writer {
              name
            }
          }
        }
      }
    }
  `);

  const posts = result.data.allMicrocmsBlog.edges;

  // 記事リストページ生成
  const template = path.resolve('src/components/templates/index.jsx');
  paginate({
    createPage,
    items: posts,
    itemsPerPage: 6,
    component: template,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/paginated' : '/paginated/pages'),
  });
};

// Category page 2
/* exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const category = path.resolve('./src/components/templates/categorytest.jsx');

  const categories = graphql(`
  {
      allMicrocmsCategory {
          edges {
            node {
              id
              slug
              name
            }
          }
      }
  }
  `);

  const contentsResult = categories.data.allMicrocmsCategory.edges.map(({ node }) => {
    const { id } = node;

    const result = graphql(`
    query ($id: String!) {
      allMicrocmsBlog(filter: {category: {id: {eq: $id}}}) {
        edges {
          node {
            blogId
            title
          }
        }
      }
    }
  `);
    return { id, result };
  });

  console.log(JSON.stringify(categories, null, 4));

  contentsResult.forEach(({ contents }) => {
    paginate({
      createPage,
      items: contents.result.data.allMicrocmsBlog.edges,
      component: category,
      pathPrefix: '/${contents.id}',
    });
  });
};
 */
