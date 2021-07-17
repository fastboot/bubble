import React from 'react'

import { 
    GradientAnimated,
    PageHeading,
    StripLogo,
    Heading,
    StyledDiv2X,
    Wrapper,
} from './styles'
import Slideshow from 'react-slidez'
import NowPlaying from '../../components/Spotify/NowPlaying'
import camera from '../../assets/icons/camera.png'
import p3 from '../../assets/clicks/p3.png'
import p4 from '../../assets/clicks/p4.png'
import p5 from '../../assets/clicks/p5.png'
import p7 from '../../assets/clicks/p7.png'
import p8 from '../../assets/clicks/p8.png'
import p9 from '../../assets/clicks/p9.png'

const images = [p3, p5, p4, p7, p8, p9];

function Social() {
    return (
        <React.Fragment>
            <GradientAnimated />
            <PageHeading> 
                 Social
            </PageHeading>
            <Wrapper>
                <Heading> 
                    <h1> My Clicks </h1>
                    <StripLogo src = { camera } alt = 'camera' />
                </Heading>
            </Wrapper>
            <StyledDiv2X>
                <Slideshow 
                    slides = { images }
                    showIndex
                    showArrows
                    autoplay
                    enableKeyboard
                    useDotIndex
                    slideInterval={5000}
                    defaultIndex={1}
                    effect={'fade'}
                    height={'100%'}
                    width={'100%'} 
                />
            </StyledDiv2X>
            <NowPlaying strip = "noshow"/>
            
        </React.Fragment>
    )
} 

export default Social