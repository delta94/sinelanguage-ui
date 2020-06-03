import { Artist, Release, Video } from '~/cms/types'
import { Grid, Hidden } from '@material-ui/core'

import Centered from '~/components/Centered'
import ContentThumbnail from '~/components/ContentThumbnail'
import Head from '~/components/Head'
import Image from 'gatsby-image'
import Overlay from '~/components/Overlay'
import React from 'react'
import ReleaseDetail from '~/components/ReleaseDetail'
import Scrollable from '~/components/Scrollable'
import { graphql } from 'gatsby'
import { sortByDate } from '~/utils/content'

type Props = {
    data: {
        contentfulRelease: Release & { artist: Artist & { release?: Release[]; video?: Video[] } }
    }
    location: Location
}

export default ({ data, location }: Props) => {
    const { __typename, uid, title, description, image, artist } = data.contentfulRelease
    const isCart = location.hash === '#/cart'

    const relatedReleaseThumbnails = sortByDate([
        ...(data.contentfulRelease.artist.release || []),
        ...(data.contentfulRelease.artist.video || []),
    ])
        .filter(
            (relatedContent) =>
                relatedContent.__typename !== __typename || relatedContent.uid !== uid
        )
        .map((relatedContent, index) => <ContentThumbnail content={relatedContent} key={index} />)

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Overlay>
                <Grid container>
                    <Hidden smDown>
                        <Grid item xs={6}>
                            <Centered size={7}>
                                <Image title={title} alt={title} sizes={{ ...image.fluid }} />
                            </Centered>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <Scrollable isWithMargin={true}>
                            <ReleaseDetail
                                release={data.contentfulRelease}
                                relatedReleaseThumbnails={relatedReleaseThumbnails}
                            />
                        </Scrollable>
                    </Grid>
                </Grid>
            </Overlay>
        </>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulRelease(uid: { eq: $uid }) {
            ...releaseFragment
            artist {
                release {
                    ...releaseFragment
                }
                video {
                    ...videoFragment
                }
            }
        }
    }
`
