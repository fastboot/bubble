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
    Triangle
} from './styles'
import Typer from '../../components/Typer'
import NowPlaying from '../../components/Spotify/NowPlaying';
import spotify from '../../assets/icons/spotify.png'
import Grid from '../../components/Grid'

function HOME(props) {
    const msgs = ["Bonjour", "Hola", "Olá", "Namaste", "Hello"];
    return (
        <PageWrapper>
            <GradientAnimated> 
                <PageHeading> <Typer heading={"Things I want to type:"} messages={msgs} /> </PageHeading>
            </GradientAnimated>
            <StyledDiv></StyledDiv>
                <Strip stripcolor = "#1DB954" > 
                    <CurrentStreamStripWrapper>
                        <StripLogo src = { spotify } alt = 'Logo' />
                        <CurrentStreamHeader>Now Playing</CurrentStreamHeader>
                        <NowPlaying />
                        <Triangle />
                    </CurrentStreamStripWrapper>
                </Strip>
            <StyledDiv2X>
                <Grid />
            </StyledDiv2X>
        </PageWrapper>
    )
}

export default HOME