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

  // index page
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
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/' : '/pages'),
  });
};

// index page

/* exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/' : '/pages'),
  });
}; */

// Category page 2
/* exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const category = path.resolve('src/components/templates/categorytest.jsx');

  const categoriesResult = await graphql(`
  {
      allMicrocmsCategory {
          edges {
            node {
              slug
            }
          }
      }
  }
  `);

  const categories = categoriesResult.data.allMicrocmsCategory.edges.map(({ node }) => node.slug);

  console.log(categories);

  const promiseResult = categories.map((slug) => {
    console.log(slug);
    const result = graphql(`
      query ($categorySlug: String!) {
        allMicrocmsBlog(filter: {category: {slug: {eq: $categorySlug}}}) {
          edges {
            node {
              blogId
              title
            }
          }
        }
      }
    `, { categorySlug: slug });
    return result;
  });

  const contentsResult = await Promise.all(promiseResult);

  /*   console.log('result', JSON.stringify(await contentsResult)); */
/*   console.log('result', contentsResult); */
/*   console.log(finalResult[1].data.allMicrocmsBlog.edges); */

/*  contentsResult.forEach(({ data }, i) => {
    paginate({
      createPage,
      items: data.allMicrocmsBlog.edges,
      component: category,
      pathPrefix: `/${categories[i]}/paginated`,
    });
  });
}; */
