import React from "react"
import { Link, graphql } from "gatsby"

// import Layout from "../components/layout"
import Section from "../components/Section"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Section bgimage="home-gradient" />
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
  </>
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
