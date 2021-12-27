import React, {useEffect, useState} from 'react'
import { NavLink as Link } from 'react-router-dom'
import { 
    GradientAnimated, 
    PageHeading, 
    StyledDiv2X, 
    Strip, 
    PageWrapper, 
    ProfileCard,
    ProfilePicture,
    Workplace,
    WorkplaceLogo,
    WorkplaceNameDiv,
    WorkplaceTime,
    StyledA,
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
import Profile from '../../assets/profile/dp.png'
import LogoWhite  from '../../assets/logos/PeakWhite.png'
import LogoBlack from '../../assets/logos/PeakBlack.png'
import Slideshow from 'react-slidez'
import spotify from '../../assets/icons/spotify.png'
import flash from '../../assets/icons/flash.png'
import social from '../../assets/icons/social.png'
import p1 from '../../assets/clicks/p1.png'
import p2 from '../../assets/clicks/p11.png'
import p3 from '../../assets/clicks/p2.png'
import dp from '../../assets/profile/dp.png'
import pic from '../../assets/icons/pic.png'
import Markdown from 'markdown-to-jsx';

import post from '../../blog/testingPost.md'

function GeekHome(props) {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(post)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, []);

    useEffect(() => {
        
    })

    return (
        <React.Fragment>
        <PageWrapper>
            <ProfileCard>
            
                <ProfilePicture>
                    <img src = {Profile} alt = 'Profile' style={{ width: '250px', height: '250px' }}/>
                </ProfilePicture>
                <Workplace>
                    <div>
                        <strong><i>Software Engineer</i></strong> at 
                    </div>
                    <StyledA target = '_blank' rel = 'noreferrer' href = 'https://peak.ai'>
                        <WorkplaceNameDiv>
                            <strong>Peak</strong>
                        </WorkplaceNameDiv>
                    </StyledA>
                </Workplace>
                <WorkplaceLogo src = { props.currTheme.mode ==='dark'? LogoWhite: LogoBlack } alt = 'Logo' /> 
                <WorkplaceTime>
                    2020 - present
                </WorkplaceTime>
            </ProfileCard>
            
            
            {/* <img src = {dp} style = {{ width: '350px', height:'310px', marginLeft: '1000px', mariginTop: '100px'}}/> */}
        </PageWrapper>
        
        {/* // <PageWrapper>
        //     <GradientAnimated>
        //         <PageHeading> <Typer heading={"Things I want to type:"} messages={msgs} /> </PageHeading>
        //     </GradientAnimated>
        //     <Heading> 
        //         <h1> Wassup? </h1>
        //         <StripLogo src = { flash } alt = 'contribution' />
        //     </Heading>
        //     <StyledDiv2X>
        //         <PageRow>
        //             <Card>
        //                 <Markdown children = {markdown} /> 
        //             </Card>
        //             <Card>
        //                 <Title>Last Commit</Title>
        //             </Card>
        //         </PageRow>
        //     </StyledDiv2X> */}
            {/* <Wrapper>
                <Strip stripcolor = "#1DB954"> 
                    <CurrentStreamStripWrapper>
                        <StripLogo src = { spotify } alt = 'Logo' />
                        <CurrentStreamHeader>Now Playing</CurrentStreamHeader>
                        <NowPlaying />
                    </CurrentStreamStripWrapper>
                </Strip><Triangle />
            </Wrapper> */}
            {/* <Heading> 
                <h1> !AntiSocial </h1>
                <StripLogo src = { social } alt = 'contribution' />
            </Heading>
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
            <Heading>
                <Link to = '/social' style = {{ textDecoration: 'none' }}>
                    <h1> See More </h1>
                </Link>
            </Heading>
        </PageWrapper> */}
        </React.Fragment>
    )
}

export default GeekHome