import { Grid, withWidth } from '@material-ui/core'
import React, { Fragment, memo } from 'react'

import AudioPlayer from '~/components/AudioPlayer'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import ContentCard from '~/components/ContentCard'
import { ContentItem } from '~/types/cms'
import { ContentType } from '~/constants/contentType'
import { Dashboard } from './Dashboard.style'
import Footer from '~/components/Footer'
import Head from '~/components/Head'
import { Location } from '@reach/router'
import NewsletterCard from '~/components/NewsletterCard'
import PlaylistCard from '~/components/PlaylistCard'
import SlideInOnView from '~/components/SlideInOnView'
import { columns } from '~/styles/sizes'
import useAudioContext from '~/hooks/useAudioContext'
import useDashboardItems from '~/hooks/useDashboardItems'

type ViewProps = {
    width: Breakpoint
}

export default memo(
    withWidth()(({ width }: ViewProps) => {
        const { tracks } = useAudioContext()
        const items = useDashboardItems() as (ContentItem | undefined)[]
        const playlistIndex = 8
        const newsletterIndex = 12
        items.splice(playlistIndex, 0, undefined)
        items.splice(newsletterIndex, 0, undefined)
        const baseTimeout = 500
        let count = 0

        return (
            <>
                <Location>
                    {({ location }) => (
                        <Dashboard isBlur={location.pathname !== '/'}>
                            <Head title="News" />
                            <Grid container>
                                {items.map((item, index) => {
                                    const isVideo = item && item.__typename === ContentType.VIDEO
                                    const itemWidth = isVideo || index === newsletterIndex ? 2 : 1

                                    count += itemWidth

                                    const timeout =
                                        count > 2 * columns[width]
                                            ? baseTimeout + (Math.random() * baseTimeout) / 8
                                            : 0

                                    if (index === playlistIndex) {
                                        return (
                                            <Grid item key={index}>
                                                <SlideInOnView timeout={timeout} threshold={0.3}>
                                                    <PlaylistCard />
                                                </SlideInOnView>
                                            </Grid>
                                        )
                                    }

                                    if (index === newsletterIndex) {
                                        return (
                                            <Grid item key={index}>
                                                <SlideInOnView timeout={timeout} threshold={0.3}>
                                                    <NewsletterCard />
                                                </SlideInOnView>
                                            </Grid>
                                        )
                                    }

                                    if (item !== undefined) {
                                        return (
                                            <Grid item key={index}>
                                                <SlideInOnView timeout={timeout} threshold={0.3}>
                                                    <ContentCard content={item} />
                                                </SlideInOnView>
                                            </Grid>
                                        )
                                    }

                                    return <></>
                                })}
                            </Grid>

                            <Footer />
                        </Dashboard>
                    )}
                </Location>
                {tracks.length > 0 && <AudioPlayer />}
            </>
        )
    })
)
