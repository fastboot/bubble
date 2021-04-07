import React from 'react'
import Follow from '../../components/Spotify/Follow'
import NowPlaying from '../../components/Spotify/NowPlaying'
import { 
    BlockCard, 
    FollowDiv,
    GradientAnimated,
    PageHeading,
} from './styles'
import { CONSTANTS } from './links'

function WatchPlay(props) {
    const srcUrl = props.currTheme.mode === 'light' ? CONSTANTS.dark: CONSTANTS.light;
    return (
        <React.Fragment>
            <GradientAnimated />
            <NowPlaying />
            <PageHeading> 
                Watch & Play
            </PageHeading>
            <BlockCard color = 'white' >
   
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