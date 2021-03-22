import React from 'react'
import Follow from '../../components/Spotify/Follow'
import NowPlaying from '../../components/Spotify/NowPlaying'
import { BlockCard, FollowDiv } from './styles'
import { CONSTANTS } from './links'

function WatchPlay(props) {
    const srcUrl = props.currTheme.mode === 'dark' ? CONSTANTS.dark: CONSTANTS.light;
    return (
        <React.Fragment>
            <BlockCard color = 'white' >
                <NowPlaying />
                <FollowDiv>
                    <Follow src = { srcUrl } width = '300px' height = '200px' />
                </FollowDiv>
            </BlockCard>
            <BlockCard color = '#fc274f' style = {{ marginTop: '-25px'}}>
    
            </BlockCard>
        </React.Fragment>
    )
} 

export default WatchPlay