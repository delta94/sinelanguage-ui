import { Artist, Podcast, Release } from '~/cms/types'
import { Grid, IconButton, Typography } from '@material-ui/core'
import { PlayArrow, Stop } from '@material-ui/icons'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { SVG } from './Waveform.style'
import SquareImage from '~/components/SquareImage'
import { Track } from '~/types'
import moment from 'moment'
import useRecursiveTimeout from '~/hooks/useRecursiveTimeout'
import useWindowSize from '~/hooks/useWindowSize'

type ViewProps = {
    selectedMedia: Podcast | Release | Artist
    tracks: Track[]
}

export default ({ selectedMedia, tracks }: ViewProps) => {
    const [trackIndex, setTrackIndex] = useState(0)
    const windowSize = useWindowSize()
    const [timeStamp, setTimeStamp] = useState<string>('00:00:00')
    const [played, setPlayed] = useState<number>(0)
    const audioRef = useRef<HTMLAudioElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [svgWidth, setSvgWidth] = useState<number>()
    const [samples, setSamples] = useState<number[]>([])
    const lineHeight = 50

    useEffect(() => {
        if (svgRef.current) {
            const pixelWidth = svgRef.current.getBoundingClientRect().width
            setSvgWidth(pixelWidth)

            const noOfSamples = tracks[trackIndex].samples.length
            const pixelsPerChunk = 5
            const numberOfChunks = pixelWidth / pixelsPerChunk
            const chunkSize = noOfSamples / numberOfChunks
            let chunks = []
            for (var i = 0; i < noOfSamples; i += chunkSize) {
                chunks.push(tracks[trackIndex].samples.slice(i, i + chunkSize))
            }
            const chunksAveraged = chunks.map(
                chunk => chunk.reduce((a, b) => a + b, 0) / chunk.length
            )

            setSamples(chunksAveraged)
        }
    }, [windowSize, svgRef.current, tracks[trackIndex].soundcloud_id])

    useEffect(() => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.play() : audioRef.current.pause()
        }
    }, [isPlaying, audioRef.current])

    const handleWaveformClick = useCallback(
        (event: React.MouseEvent) => {
            if (svgRef.current && audioRef.current) {
                const progressBar = svgRef.current.getBoundingClientRect()
                const progress =
                    (event.clientX - progressBar.left) / (progressBar.right - progressBar.left)

                audioRef.current.currentTime = (progress * tracks[trackIndex].duration) / 1000
                // setIsPlaying(true)
            }
        },
        [svgRef.current, audioRef.current]
    )

    const updatePlayStatus = () => {
        if (audioRef.current) {
            setTimeStamp(moment.utc(audioRef.current.currentTime * 1000).format('H:mm:ss'))
            setPlayed((1000 * audioRef.current.currentTime) / tracks[trackIndex].duration)
        }
    }

    useRecursiveTimeout(updatePlayStatus, 1000)

    return (
        <>
            <audio
                ref={audioRef}
                src={`${tracks[trackIndex].stream_url}?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                preload="auto"
            ></audio>
            <Grid container alignItems="flex-end">
                <Grid item xs={1}>
                    <SquareImage title={selectedMedia.title} image={selectedMedia.image} />
                    <IconButton onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <Stop /> : <PlayArrow />}
                    </IconButton>
                </Grid>
                <Grid item xs={11}>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <Typography>
                                {selectedMedia.uid} - {selectedMedia.title}
                            </Typography>
                            <Typography>{timeStamp}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <SVG
                                ref={svgRef}
                                height={lineHeight}
                                onClick={handleWaveformClick}
                                viewBox={`0 0 ${svgWidth} ${lineHeight}`}
                                preserveAspectRatio="none"
                            >
                                {svgWidth &&
                                    samples.map((sample, index) => {
                                        const position = index / samples.length
                                        const lineSpacing = svgWidth / (samples.length + 1)

                                        return (
                                            <line
                                                key={index}
                                                x1={(index + 1) * lineSpacing}
                                                y1={lineHeight}
                                                x2={(index + 1) * lineSpacing}
                                                y2={(1 - sample) * lineHeight}
                                                stroke={position < played ? 'red' : 'black'}
                                                strokeWidth={lineSpacing / 2}
                                            />
                                        )
                                    })}
                            </SVG>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
