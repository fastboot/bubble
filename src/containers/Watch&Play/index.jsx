import React from 'react'

import { 
    GradientBlockCard,
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
            <NowPlaying strip = "noshow"/>
            <GradientBlockCard />
        </React.Fragment>
    )
} 

export default WatchPlay