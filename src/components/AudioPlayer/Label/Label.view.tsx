import { Hidden, Typography } from '@material-ui/core'
import React, { useRef } from 'react'

import { Label } from './Label.style'
import { getTimestamp } from '~/utils/date'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    timeMs: number
}

export default ({ timeMs }: ViewProps) => {
    const { tracks, trackIndex, artistTitle, durationMs } = useAudioContext()

    return (
        <Label>
            <Typography variant="h5">
                {artistTitle.toUpperCase()}, <i>{tracks[trackIndex]?.title}</i>
            </Typography>
            <Typography variant="h5">
                {getTimestamp(timeMs, durationMs)} / {getTimestamp(durationMs, durationMs)}
            </Typography>
        </Label>
    )
}
