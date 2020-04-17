import React, { RefObject, memo, useEffect } from 'react'

type ViewProps = {
    audioRef: RefObject<HTMLAudioElement>
    src: string
    isPlaying: boolean
}

export default memo(({ src, audioRef, isPlaying }: ViewProps) => {
    useEffect(() => {
        if (isPlaying && audioRef.current) {
            audioRef.current.pause()
            audioRef.current.load()
            audioRef.current.play()
        }
    }, [src, audioRef.current])

    useEffect(() => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.play() : audioRef.current.pause()
        }
    }, [isPlaying, audioRef.current])

    return <audio ref={audioRef} src={src} preload="auto" crossOrigin="anonymous"></audio>
})
