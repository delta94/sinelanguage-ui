import { Artist, Podcast, Release } from '~/cms/types'

import DashboardItem from '~/components/DashboardItem'
import { Grid } from '@material-ui/core'
import Head from '~/components/Head'
import React from 'react'
import { WindowLocation } from '@reach/router'
import resolveDashboardItems from '~/utils/resolveDashboardItems'

type ViewProps = {
    data: {
        allContentfulArtist: {
            nodes: Artist[]
        }
        allContentfulRelease: {
            nodes: Release[]
        }
        allContentfulPodcast: {
            nodes: Podcast[]
        }
    }
    location: WindowLocation
}

export default ({ data, location }: ViewProps) => {
    const filter = location.pathname.slice(1)
    const title = filter ? filter.charAt(0).toUpperCase() + filter.slice(1) : 'News'
    const dashboardItems = resolveDashboardItems(data)

    return (
        <>
            <Head title={title} />
            <Grid container>
                {dashboardItems.map((dashboardItem, index) => (
                    <Grid item key={index}>
                        <DashboardItem dashboardItem={dashboardItem} filter={filter} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
