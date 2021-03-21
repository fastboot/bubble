import React from 'react'
import Follow from '../../components/Spotify/Follow'
import { BlockCard, FollowDiv } from './styles'
import { CONSTANTS } from './links'

function WatchPlay(props) {
    const srcUrl = props.currTheme.mode === 'dark' ? CONSTANTS.light: CONSTANTS.dark;
    return (
        <BlockCard color = '#1DB954' >
            <FollowDiv>
                <Follow src = { srcUrl } width = '300px' height = '200px' />
            </FollowDiv>
        </BlockCard>
    )
} 

export default WatchPlay