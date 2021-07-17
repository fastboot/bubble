import React from 'react'
import { 
    GradientAnimated, 
    PageHeading, 
    StyledDiv2X, 
    Strip, 
    PageWrapper, 
    CurrentStreamHeader,
    CurrentStreamStripWrapper,
    StripLogo,
    Triangle,
    Heading,
    Title,
    PageRow,
    Card,
    Wrapper,
} from './styles'
import Typer from '../../components/Typer'
import NowPlaying from '../../components/Spotify/NowPlaying';
import spotify from '../../assets/icons/spotify.png'
import flash from '../../assets/icons/flash.png'
import social from '../../assets/icons/social.png'

function HOME(props) {
    const msgs = ["Bonjour", "Hola", "Olá", "Namaste", "Hello"];
    return (
        <PageWrapper>
            <GradientAnimated>
                <PageHeading> <Typer heading={"Things I want to type:"} messages={msgs} /> </PageHeading>
            </GradientAnimated>
            <Wrapper>
                <Heading> 
                        <h1> Wassup? </h1>
                        <StripLogo src = { flash } alt = 'contribution' />
                </Heading>
            </Wrapper>
            <StyledDiv2X>
                <PageRow>
                    <Card>
                        <Title>Latest Post</Title>
                    </Card>
                    <Card>
                        <Title>Last Commit</Title>
                    </Card>
                </PageRow>
            </StyledDiv2X>
            <Wrapper>
                <Strip stripcolor = "#1DB954"> 
                    <CurrentStreamStripWrapper>
                        <StripLogo src = { spotify } alt = 'Logo' />
                        <CurrentStreamHeader>Now Playing</CurrentStreamHeader>
                        <NowPlaying />
                    </CurrentStreamStripWrapper>
                </Strip><Triangle />
            </Wrapper>
            <Wrapper>
                <Heading> 
                    <h1> !AntiSocial </h1>
                    <StripLogo src = { social } alt = 'contribution' />
                </Heading>
            </Wrapper>
            <StyledDiv2X>
                
            </StyledDiv2X>
        </PageWrapper>
    )
}

export default HOME