import React from 'react'
import Follow from '../../components/Spotify/Follow'
import NowPlaying from '../../components/Spotify/NowPlaying'
import { BlockCard, FollowDiv } from './styles'
import { CONSTANTS } from './links'

function WatchPlay(props) {
    const srcUrl = props.currTheme.mode === 'dark' ? CONSTANTS.dark: CONSTANTS.light;
    return (
        <BlockCard color = '#1DB954' >
            <NowPlaying />
            <FollowDiv>
                <Follow src = { srcUrl } width = '300px' height = '200px' />
            </FollowDiv>
        </BlockCard>
    )
} 

export default WatchPlay