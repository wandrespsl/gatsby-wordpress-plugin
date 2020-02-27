import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h4>Posts</h4>
    {data.allWordpressPost.edges.map(({ node }) => (
      <div>
        <Link to={node.slug}>
          <h1>{node.title}</h1>
        </Link>

        {undefined !== node.featured_media && null !== node.featured_media ? (
          <img
            src={node.featured_media.source_url}
            alt={node.featured_media.title}
          />
        ) : (
          ""
        )}
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
    <Link to="/blog/">blog</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          featured_media {
            link
            source_url
            title
          }
        }
      }
    }
  }
`
