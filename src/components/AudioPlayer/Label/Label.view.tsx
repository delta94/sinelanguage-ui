import React, { useRef } from 'react'

import { Label } from './Label.style'
import { Typography } from '@material-ui/core'
import { getTimestamp } from '~/utils/date'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    timeMs: number
}

export default ({ timeMs }: ViewProps) => {
    const { track, artistTitle, durationMs } = useAudioContext()

    return (
        <Label>
            <Typography variant="h5" gutterBottom>
                {artistTitle.toUpperCase()}, <i>{track?.title}</i>
            </Typography>
            <Typography variant="h5">
                {getTimestamp(timeMs, durationMs)}/{getTimestamp(durationMs, durationMs)}
            </Typography>
        </Label>
    )
}
