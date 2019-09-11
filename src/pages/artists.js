import React from 'react'
import Head from '../components/Head'
import Dashboard from '../components/Dashboard'
import { graphql } from 'gatsby'

export default ({ data }) => (
    <div>
        <Head title="Artists" />
        <Dashboard data={data} />
    </div>
)

export const query = graphql`
    {
        allDataJson(filter: { layout: { eq: "artist" } }) {
            edges {
                node {
                    fields {
                        id
                        url
                        responsiveThumbnail {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                    }
                    title
                    thumbnail
                }
            }
        }
    }
`
