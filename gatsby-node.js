/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allSanityLandingPage {
        nodes {
          name
          slug {
            current
          } 
        }
      }
    }
  `);

  data.allSanityLandingPage.nodes.forEach(node => {
      const slug = node.slug.current;

      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/landingPage.js`),
        context: { slug: slug, isSSG: slug === 'main-page' },
      })
    })

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
