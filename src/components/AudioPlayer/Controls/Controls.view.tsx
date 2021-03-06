import { Box, Grid, Typography } from '@material-ui/core'

import { Controls } from './Controls.style'
import IconButton from '~/components/IconButton'
import React from 'react'
import { Unicode } from '~/constants/unicode'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    isFullSizePlayer: boolean
}

export default ({ isFullSizePlayer }: ViewProps) => {
    const {
        isPlaying,
        isPrevious,
        isNext,
        previous,
        next,
        playMedia,
        pauseMedia,
    } = useAudioContext()

    function onPlayPause() {
        isPlaying ? pauseMedia() : playMedia()
    }

    return (
        <Controls display="flex" justifyContent="space-around" alignItems="center">
            {isFullSizePlayer && (
                <IconButton
                    label={<Typography variant="h5">{Unicode.PREVIOUS}</Typography>}
                    onClick={previous}
                    isDisabled={!isPrevious()}
                    isLight={true}
                />
            )}

            <IconButton
                label={
                    <Typography variant="h5">{isPlaying ? Unicode.PAUSE : Unicode.PLAY}</Typography>
                }
                onClick={onPlayPause}
                isLight={true}
            />

            {isFullSizePlayer && (
                <IconButton
                    label={<Typography variant="h5">{Unicode.NEXT}</Typography>}
                    onClick={next}
                    isDisabled={!isNext()}
                    isLight={true}
                />
            )}
        </Controls>
    )
}
