import { Grid, IconButton, Slider } from '@material-ui/core'
import { Pause, PlayArrow, SkipNext, SkipPrevious, VolumeDown, VolumeUp } from '@material-ui/icons'

import React from 'react'

type ControlsProps = {
    trackIndex: number
    setTrackIndex(trackIndex: number): void
    isPlaying: boolean
    setIsPlaying(isPlaying: boolean): void
    volume: number
    setVolume(volume: number): void
    trackCount: number
}

export default ({
    trackIndex,
    setTrackIndex,
    isPlaying,
    setIsPlaying,
    volume,
    setVolume,
    trackCount,
}: ControlsProps) => {
    const skipPrevious = () => {
        setTrackIndex(trackIndex - 1)
    }

    const skipNext = () => {
        setTrackIndex(trackIndex + 1)
    }

    const handleVolume = (event: any, newValue: number | number[]) => {
        setVolume(newValue as number)
    }

    return (
        <>
            <Grid container>
                <Grid item xs={4}>
                    <IconButton onClick={skipPrevious} disabled={trackIndex === 0}>
                        <SkipPrevious />
                    </IconButton>
                </Grid>
                <Grid item xs={4}>
                    <IconButton onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <Pause /> : <PlayArrow />}
                    </IconButton>
                </Grid>
                <Grid item xs={4}>
                    <IconButton onClick={skipNext} disabled={trackIndex === trackCount - 1}>
                        <SkipNext />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Slider value={volume} onChange={handleVolume} />
                </Grid>
            </Grid>
        </>
    )
}
