import React from 'react'
import { 
    GradientAnimated, 
    PageHeading, 
    StyledDiv, 
    Strip, 
    PageWrapper, 
    CurrentStreamHeader,
    CurrentStreamStripWrapper,
    StripLogo,
    Triangle,
    Wrapper,
} from './styles'
import Typer from '../../components/Typer'
import NowPlaying from '../../components/Spotify/NowPlaying';
import spotify from '../../assets/icons/spotify.png'

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
            <StyledDiv></StyledDiv>
        </PageWrapper>
    )
}

export default HOME