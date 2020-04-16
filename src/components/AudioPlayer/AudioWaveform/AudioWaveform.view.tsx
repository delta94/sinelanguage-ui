import { Grid, Typography } from '@material-ui/core'
import React, { useRef, useState } from 'react'

import Audio from '../Audio'
import Waveform from '../Waveform'
import moment from 'moment'
import useRecursiveTimeout from '~/hooks/useRecursiveTimeout'

type ViewProps = {
    title: string
    streamUrl: string
    samples: number[]
    durationMs: number
    isPlaying: boolean
    setIsPlaying(isPlaying: boolean): void
}

export default ({ title, streamUrl, samples, durationMs, isPlaying, setIsPlaying }: ViewProps) => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [currentTimeMs, setCurrentTimeMs] = useState(0)

    useRecursiveTimeout(() => {
        if (audioRef.current) {
            setCurrentTimeMs(audioRef.current.currentTime * 1000)
        }
    }, 1000)

    return (
        <Grid container direction="column">
            <Grid item xs={12}>
                <Typography>{title}</Typography>
                <Typography>
                    {moment.utc(currentTimeMs).format('H:mm:ss')} /{' '}
                    {moment.utc(durationMs).format('H:mm:ss')}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Waveform
                    audioRef={audioRef}
                    samples={samples}
                    currentTimeMs={currentTimeMs}
                    setCurrentTimeMs={setCurrentTimeMs}
                    durationMs={durationMs}
                    setIsPlaying={setIsPlaying}
                />
                <Audio audioRef={audioRef} src={streamUrl} isPlaying={isPlaying} />
            </Grid>
        </Grid>
    )
}
