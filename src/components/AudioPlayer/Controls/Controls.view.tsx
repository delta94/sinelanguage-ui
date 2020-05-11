import { Box, Grid } from '@material-ui/core'
import { Controls, IconButtonContainer } from './Controls.style'
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons'

import IconButton from '~/components/IconButton'
import React from 'react'

type ControlsProps = {
    trackIndex: number
    setTrackIndex(trackIndex: number): void
    isPlaying: boolean
    setIsPlaying(isPlaying: boolean): void
    volume: number
    setVolume(volume: number): void
    trackCount: number
    isMiniPlayer: boolean
}

export default ({
    trackIndex,
    setTrackIndex,
    isPlaying,
    setIsPlaying,
    volume,
    setVolume,
    trackCount,
    isMiniPlayer,
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
        <Controls>
            <Grid container spacing={3}>
                {!isMiniPlayer && (
                    <>
                        <Grid item>
                            <IconButton
                                icon={<SkipPrevious />}
                                onClick={skipPrevious}
                                isDisabled={trackIndex === 0}
                                isLight={true}
                            />
                        </Grid>
                        <Box flexGrow={1} />
                    </>
                )}
                <Grid item>
                    <IconButtonContainer>
                        <IconButton
                            icon={isPlaying ? <Pause /> : <PlayArrow />}
                            onClick={() => setIsPlaying(!isPlaying)}
                            isLight={true}
                        />
                    </IconButtonContainer>
                </Grid>

                {!isMiniPlayer && (
                    <>
                        <Box flexGrow={1} />
                        <Grid item>
                            <IconButton
                                icon={<SkipNext />}
                                onClick={skipNext}
                                isDisabled={trackIndex === trackCount - 1}
                                isLight={true}
                            />
                        </Grid>
                    </>
                )}
            </Grid>
            {/* <SliderContainer>
                <Slider value={volume} onChange={handleVolume} min={0} max={1} step={0.01} />
            </SliderContainer> */}
        </Controls>
    )
}
