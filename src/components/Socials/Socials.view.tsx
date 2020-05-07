import { Grid, Typography } from '@material-ui/core'

import IconLink from './IconLink'
import React from 'react'
import { Social } from '~/constants/social'

type ViewProps = {
    urls: string[]
}

export default ({ urls }: ViewProps) => {
    const soundCloudIndex = urls.findIndex((x) => x.includes(Social.SOUNDCLOUD))

    if (soundCloudIndex > -1) {
        urls.push(urls.splice(soundCloudIndex, 1)[0])
    }

    return (
        <Grid container spacing={2}>
            {urls.map((url, index) => (
                <Grid item key={index}>
                    <Typography variant="h3">
                        <IconLink url={url} />
                    </Typography>
                </Grid>
            ))}
        </Grid>
    )
}
