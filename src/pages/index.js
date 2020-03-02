import React from "react"
import { Link, graphql } from "gatsby"

import Section from "../components/Section"
import SEO from "../components/seo"
import { StyledCard } from "../styles/components"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Section bgimage="home-gradient" />
    <div className="columns is-multiline">
      {data.allWordpressPost.edges.map(({ node }) => (
        <StyledCard key={node.id}>
          <div className="header-post">
            <div className="avatar">
              <img src="../images/blog-radius.png" alt="PSL" />
            </div>
            <div className="col-cell">
              <div className="eb-post-author">
                <span>
                  <Link to="/">PSL Corp</Link>
                </span>
              </div>
              <div className="eb-post-date text-muted">
                <time className="eb-meta-date">{node.date}</time>
              </div>
            </div>
          </div>
          <div>
            <Link to={node.slug} className="title">
              <h2>{node.title}</h2>
            </Link>

            {undefined !== node.featured_media &&
            null !== node.featured_media ? (
              <di className="featured-thumbnail">
                <img
                  src={node.featured_media.source_url}
                  alt={node.featured_media.title}
                />
              </di>
            ) : (
              ""
            )}
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        </StyledCard>
      ))}
    </div>
  </>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
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
