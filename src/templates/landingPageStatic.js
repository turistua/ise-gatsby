import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ data, serverData }) => {
  const {
    sanityLandingPage: pageData,
    allSanityLandingPage: {
      nodes: allLandingPages
    },
    allSanityBrandPage: {
      nodes: allBrandPages
    }
  } = data;
  console.log(allLandingPages);

  return (
    <Layout>
      <h1>
        This page is <b>SSG</b> with name {pageData.name}.
      </h1>
      <ul>
        {allBrandPages.map(b => <li key={b.slug.current}>{b.name}</li>)}
      </ul>
      {serverData?.message && (
      <img
        style={{ width: "320px", borderRadius: "var(--border-radius)" }}
        alt="A random dog"
        src={serverData.message}
      />
      )}
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
          documentation about Server Side Rendering
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Using SSG" />

export default UsingSSR

export const query = graphql`
  query($slug: String!) {
    sanityLandingPage(slug: { current: { eq: $slug } }) {
      name
    }
    allSanityLandingPage {
      nodes {
        name
      }
    }
    allSanityBrandPage {
       nodes {
        name
        slug {
          current
        }
      }
    }
  }
`