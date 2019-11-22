import { graphql } from 'gatsby'

export const query = graphql`
    fragment dashboardFragment on Query {
        allPrismicArtist {
            edges {
                node {
                    ...artistFragment
                }
            }
        }
        allPrismicRelease {
            edges {
                node {
                    ...releaseFragment
                }
            }
        }
    }
`
