import { graphql } from 'gatsby'

// todo: reuse identical dashboard item fragments

export const artistFragment = graphql`
    fragment artistFragment on PrismicArtist {
        uid
        data {
            name
            published_date
            image {
                localFile {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`
