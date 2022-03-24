import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { css } from "@emotion/core"

export default function Contact({ location }) {
  return (
    <Layout>
      <SEO
        title="Social information"
        description="Giuseppe Rizzi's social networks details"
        pathname={location.pathname}
      />
      <main
        css={css`
          text-align: center;
        `}
      >
        <p>
          <a
            href="mailto:giuseppe.rizzi10@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </p>
        <p>
          <a href="https://github.com/grizzi" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/giuseppe-rizzi-a999a6133"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </main>
    </Layout>
  )
}
