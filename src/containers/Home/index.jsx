import React from 'react'
import { 
    GradientAnimated, 
    PageHeading, 
    StyledDiv, 
    StyledDiv2X, 
    Strip, 
    PageWrapper, 
    CurrentStreamHeader,
    CurrentStreamStripWrapper,
    StripLogo,
    Triangle,
    TriangleRev,
    Wrapper,
    WrapperRev,
    Heading
} from './styles'
import Typer from '../../components/Typer'
import NowPlaying from '../../components/Spotify/NowPlaying';
import spotify from '../../assets/icons/spotify.png'
import Grid from '../../components/Grid'
import camera from '../../assets/icons/camera.png'

function HOME(props) {
    const msgs = ["Bonjour", "Hola", "Olá", "Namaste", "Hello"];
    return (
        <PageWrapper>
            <GradientAnimated>
                <PageHeading> <Typer heading={"Things I want to type:"} messages={msgs} /> </PageHeading>
            </GradientAnimated>
            <StyledDiv></StyledDiv>
            <Wrapper>
                <Strip stripcolor = "#1DB954" > 
                    <CurrentStreamStripWrapper>
                        <StripLogo src = { spotify } alt = 'Logo' />
                        <CurrentStreamHeader>Now Playing</CurrentStreamHeader>
                        <NowPlaying />
                    </CurrentStreamStripWrapper>
                </Strip><Triangle />
            </Wrapper>
            <Wrapper>
                <Heading> 
                    <h1> My Clicks </h1>
                    <StripLogo src = { camera } alt = 'camera' />
                </Heading>
            </Wrapper>
            <StyledDiv2X>
                <Grid />
            </StyledDiv2X>
        </PageWrapper>
    )
}

export default HOME