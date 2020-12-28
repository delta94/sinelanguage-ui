import { Box, Typography } from '@material-ui/core'

import React from 'react'
import { Release } from '~/cms/types'
import ResponsiveLineBreak from '~/components/ResponsiveLineBreak'
import TrackRow from '~/components/TrackRow'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    const { tracks } = release

    if (!release.tracks) {
        return <></>
    }

    return (
        <>
            <br />
            <Typography variant="h3">TRACKLIST</Typography>
            <br />
            {tracks.map((track, index) => (
                <Box key={index}>
                    <TrackRow release={release} track={track} index={index} />                    
                    <ResponsiveLineBreak isDesktop={false} />
                </Box>
            ))}
            <br />
        </>
    )
}
