import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ data, serverData }) => {
  return (
    <Layout>
      <h1>
        This page is <b>SSG</b>
      </h1>
      <p>
        This page is rendered server side every time the page is requested.
        Reload it to see a(nother) random photo from{" "}
        <code>dog.ceo/api/breed/shiba/images/random</code>:
      </p>
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

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR

export const query = graphql`
  query {
    allSanityLandingPage {
      nodes {
        name
      }
    }
  }
`