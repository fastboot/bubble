import React from 'react'

import { 
    GradientAnimated,
    PageHeading,
    StripLogo,
    Heading,
    StyledDiv2X,
} from './styles'
import Slideshow from 'react-slidez'
import NowPlaying from '../../components/Spotify/NowPlaying'
import ScrollToTop from '../../components/ScrollTop'
import camera from '../../assets/icons/camera.png'
import p3 from '../../assets/clicks/p3.png'
import p4 from '../../assets/clicks/p4.png'
import p5 from '../../assets/clicks/p5.png'
import p7 from '../../assets/clicks/p7.png'
import p8 from '../../assets/clicks/p8.png'
import p9 from '../../assets/clicks/p9.png'

const images = [p3, p5, p4, p7, p8, p9];

function Spotify() {
    return (
        <React.Fragment>
            <NowPlaying strip = "noshow"/>
        </React.Fragment>
    )
} 

export default Spotify