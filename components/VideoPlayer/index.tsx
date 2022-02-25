import { Video } from 'expo-av'
import { Playback } from 'expo-av/build/AV'
import React, { useEffect, useRef, useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { Episode } from '../../types'

interface VideoPlayerProps {
    episode: Episode
}

const VedioPlayer = (props: VideoPlayerProps) => {
    const { episode } = props
    const video = useRef<Playback>(null)
    const [status, setStatus] = useState({})
    useEffect(() => {
        (async () => {
            await video.current?.unloadAsync()
        })
    }, [episode])

    return (
        <Video 
            // ref={video}
            style={styles.video}
            source={{
                uri: episode.video
            }}
            posterSource={{
                uri: episode.poster
            }}
            posterStyle={{
                resizeMode: 'cover'
            }}
            // usePoster={true}
            useNativeControls
            resizeMode='contain'
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    )
}

export default VedioPlayer