import ContentCard from '~/components/ContentCard'
import { Dashboard } from './Dashboard.style'
import { Grid } from '@material-ui/core'
import Head from '~/components/Head'
import { Location } from '@reach/router'
import PlaylistCard from '~/components/PlaylistCard'
import React from 'react'
import useDashboardItems from '~/hooks/useDashboardItems'

export default () => {
    const items = useDashboardItems()

    return (
        <Location>
            {({ location }) => (
                <Dashboard isBlur={location.pathname !== '/'}>
                    <Head title="News" />
                    <Grid container>
                        {items.map((item, index) => (
                            <>
                                {index === 2 && (
                                    <Grid item>
                                        <PlaylistCard />
                                    </Grid>
                                )}
                                <Grid item key={index}>
                                    <ContentCard content={item} />
                                </Grid>
                            </>
                        ))}
                    </Grid>
                </Dashboard>
            )}
        </Location>
    )
}
