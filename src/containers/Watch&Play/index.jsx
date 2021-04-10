import React from 'react'

import { 
    BlockCard, 
    FollowDiv,
    GradientAnimated,
    PageHeading,
} from './styles'
import { CONSTANTS } from './links'
import NowPlaying from '../../components/Spotify/NowPlaying';

function WatchPlay(props) {
    const srcUrl = props.currTheme.mode === 'light' ? CONSTANTS.dark: CONSTANTS.light;
    return (
        <React.Fragment>
            <GradientAnimated />
            <PageHeading> 
                Watch & Play
            </PageHeading>
            <BlockCard color = 'white' >
                 <NowPlaying strip = "noshow"/>
            </BlockCard>
            <BlockCard color = '#fc274f' style = {{ marginTop: '-25px'}}>
    
            </BlockCard>
        </React.Fragment>
    )
} 

export default WatchPlay