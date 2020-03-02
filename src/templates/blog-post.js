import React from "react"

import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  // console.log(post)
  return (
    <section className="section header-plus">
      <div className="container content">
      <div className="column is-10 is-offset-1 img-blog-post">
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p> By: {post.author.name} </p>
        <p> On: {post.date} </p>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "MM-DD-YYYY")
          author {
            name
          }
        }
      }
    }
  }
`
