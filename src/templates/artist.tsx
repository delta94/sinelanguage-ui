import { Artist, Release, Video } from '~/cms/types'
import { Box, Grid } from '@material-ui/core'

import ArtistDetail from '~/components/ArtistDetail'
import ContentCardMedia from '~/components/ContentCardMedia'
import Head from '~/components/Head'
import Overlay from '~/components/Overlay'
import React from 'react'
import ResponsiveGrid from '~/components/ResponsiveGrid'
import ResponsiveLineBreak from '~/components/ResponsiveLineBreak'
import Scrollable from '~/components/Scrollable'
import { detailImageSize } from '~/styles/sizes'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulArtist: Artist & { release?: Release[]; video?: Video[] }
    }
}

export default ({ data }: Props) => {
    const { title, description, image } = data.contentfulArtist

    return (
        <Overlay>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Grid container>
                <ResponsiveGrid item md={6} isDesktop={true}>
                    <Box
                        display="flex"
                        width="100%"
                        height="100%"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box width={`${detailImageSize}vh`} maxWidth="80%">
                            <ContentCardMedia content={data.contentfulArtist} />
                        </Box>
                    </Box>                    
                </ResponsiveGrid>

                <Grid item xs={12} md={6}>
                    <Scrollable isWithMargin={true}>
                        <ResponsiveLineBreak isDesktop={true} />
                        <ArtistDetail
                            artist={data.contentfulArtist}
                            releases={data.contentfulArtist.release || []}
                            videos={data.contentfulArtist.video || []}
                        />
                    </Scrollable>
                </Grid>
            </Grid>
        </Overlay>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulArtist(uid: { eq: $uid }) {
            ...artistFragment
            release {
                ...releaseFragment
            }
            video {
                ...videoFragment
            }
        }
    }
`
