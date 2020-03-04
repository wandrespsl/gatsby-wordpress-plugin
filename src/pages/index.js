import React from "react"
import { Link, graphql } from "gatsby"

import Section from "../components/Section"
import SectionTwo from "../components/SectionTwo"
import SectionNutshell from "../components/SectionNutshell"
import SectionServices from "../components/SectionServices"
import SectionAwardsRankings from "../components/SectionAwardsRankings"
import SEO from "../components/seo"
import { StyledCard, Button } from "../styles/components"
import avatar from "../images/blog-radius.png"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Section bgimage="home-gradient" />
    <SectionTwo bgimage="home-two" />
    <SectionNutshell bgimage="home-nutshell"/>
    <SectionServices bgimage="home-services"/>
    <SectionAwardsRankings bgimage="home-awardsRankings" />
    <div className="columns is-multiline">
      {data.allWordpressPost.edges.map(({ node }) => (
        <StyledCard key={node.id}>
          <div className="header-post">
            <div className="avatar">
              <img src={avatar} alt="PSL" />
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
              <div className="featured-thumbnail">
                <img
                  src={node.featured_media.source_url}
                  alt={node.featured_media.title}
                />
              </div>
            ) : (
              ""
            )}
            <div className="body">
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <Link to={node.slug}>
                <Button type="outline" className="btn btn-primary">
                  Keep Reading →
                </Button>
              </Link>
            </div>
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
