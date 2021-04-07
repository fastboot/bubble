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
                    <CurrentStreamHeader>Now Playing</CurrentStreamHeader>
                    <CurrentStreamButton />
                </CurrentStreamStripWrapper>
            </Strip>
            <StyledDiv2X></StyledDiv2X>
            <Strip stripcolor = "white" ></Strip> 
        </PageWrapper>
    )
}

export default HOME