import { Artist, Release, Video } from '~/cms/types'
import { Grid, Typography } from '@material-ui/core'
import { getThumbnailComponent, sort } from '~/utils/content'

import ArtistDetail from '~/components/ArtistDetail'
import { ArtistModel } from '~/models'
import Centered from '~/components/Centered'
import Head from '~/components/Head'
import Image from 'gatsby-image'
import Overlay from '~/components/Overlay'
import React from 'react'
import Scrollable from '~/components/Scrollable'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulArtist: Artist & { release: Release[]; video: Video[] }
    }
}

export default ({ data }: Props) => {
    const { title, description, image } = data.contentfulArtist
    const relatedContentComponents = sort([
        ...data.contentfulArtist.release,
        ...data.contentfulArtist.video,
    ]).map(getThumbnailComponent)

    return (
        <Overlay>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Grid container>
                <Grid item xs={6}>
                    <Centered size={7}>
                        {' '}
                        <Image title={title} alt={title} sizes={{ ...image.fluid }} />
                    </Centered>
                </Grid>
                <Grid item xs={6}>
                    <Scrollable>
                        <ArtistDetail artist={data.contentfulArtist} />
                        <Typography variant="h3">RELEASES</Typography>
                        <br />
                        <Grid container>{relatedContentComponents}</Grid>
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
