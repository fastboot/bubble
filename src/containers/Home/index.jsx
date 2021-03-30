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
    CurrentStreamButton
} from './styles'
import Typer from '../../components/Typer'
import NowPlaying from '../../components/Spotify/NowPlaying'

function HOME(props) {
    const msgs = ["Bonjour", "Hola", "Olá", "Asalaam alaikum", "Namaste", "Hello"];
    return (
        <PageWrapper>
            <GradientAnimated> 
                <PageHeading> <Typer heading={"Things I want to type:"} messages={msgs} /> </PageHeading>
            </GradientAnimated>
            <StyledDiv> <h1>StyledDiv</h1> </StyledDiv>
            <Strip stripcolor = "#1DB954" > 
                <CurrentStreamStripWrapper>
                    <CurrentStreamHeader>Now Playing</CurrentStreamHeader>
                    <NowPlaying />
                    <CurrentStreamButton />
                </CurrentStreamStripWrapper>
            </Strip>
            <StyledDiv2X> <h1> Liar </h1> </StyledDiv2X>
            <Strip stripcolor = "#FF0000" > Another one! </Strip> 
        </PageWrapper>
    )
}

export default HOME