import React from 'react'
import { NavLink as Link } from 'react-router-dom'
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
    PicCard,
    Card,
    Wrapper,
} from './styles'
import Typer from '../../components/Typer'
import NowPlaying from '../../components/Spotify/NowPlaying';
import spotify from '../../assets/icons/spotify.png'
import flash from '../../assets/icons/flash.png'
import social from '../../assets/icons/social.png'
import p1 from '../../assets/clicks/p1.png'
import p2 from '../../assets/clicks/p11.png'
import p3 from '../../assets/clicks/p2.png'

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
                <PageRow>
                    <PicCard>
                        <img src = {p3} alt = "click1" style = {{ width: '400px', height: '500px'}} />  
                    </PicCard>
                    <PicCard>
                        <img src = {p1} alt = "click1" style = {{ width: '500px', marginLeft: '-100px'}} />
                    </PicCard>
                    <PicCard>
                        <img src = {p2} alt = "click1" style = {{ width: '400px', height: '400px'}} />
                    </PicCard>
                </PageRow>
            </StyledDiv2X>
            <Wrapper>
                <Link to = '/social' style = {{ textDecoration: 'none' }}>
                    <h1 style = {{ marginLeft: '620px' }}> See More </h1>
                </Link>
            </Wrapper>
        </PageWrapper>
    )
}

export default HOME