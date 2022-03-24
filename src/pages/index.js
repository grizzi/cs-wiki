import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

export default function Home({ data, location }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title="About Me"
        description="A free computer science WiKi"
        keywords={[
          `wiki`,
          `computer science`,
          `algorithms`,
          `data structures`,
          `Giuseppe Rizzi`,
        ]}
        pathname={location.pathname}
      />
      <main>
        <article>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/about-me/" } }) {
      html
    }
  }
`
