import React from 'react'

import { 
    BlockCard, 
    GradientAnimated,
    PageHeading,
} from './styles'
import NowPlaying from '../../components/Spotify/NowPlaying';

function WatchPlay() {
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