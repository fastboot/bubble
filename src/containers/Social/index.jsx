import React from 'react'

import { 
    GradientBlockCard,
    GradientAnimated,
    PageHeading,
    StripLogo,
    Heading,
    StyledDiv2X,
    Wrapper,
} from './styles'
import NowPlaying from '../../components/Spotify/NowPlaying';
import Grid from '../../components/Grid'
import camera from '../../assets/icons/camera.png'

function Social() {
    return (
        <React.Fragment>
            <GradientAnimated />
            <PageHeading> 
                 Social
            </PageHeading>
            <NowPlaying strip = "noshow"/>
            <Wrapper>
                <Heading> 
                    <h1> My Clicks </h1>
                    <StripLogo src = { camera } alt = 'camera' />
                </Heading>
            </Wrapper>
            <StyledDiv2X>
                <Grid />
            </StyledDiv2X>
        </React.Fragment>
    )
} 

export default Social