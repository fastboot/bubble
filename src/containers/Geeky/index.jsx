import React from 'react'
import { 
    GradientAnimated, 
    PageHeading, 
    Wrapper, 
    StripLogo, 
    Heading,
    SubHeading,
    WhiteSpace,
    ShowcaseDivBorder,
    BetweenDescription,
    ProWrapper,
    MiddleProWrapper,
    ProCard,
    Card,
    ProRow,
    MiddleCard,
    MiddleProRow,
    ShowWrapper,
    ShowCard,
    ShowInfo,
    ShowPromo,
} from './styles'
import HeatmapComponent from './components/heatmap/Heatmap'
import Languages from './components/stats/Languages'
import trophy from '../../assets/icons/trophy.png'
import projects from '../../assets/icons/projects.png'
import contribution from '../../assets/icons/contribution.png'
import project2 from '../../assets/projects/project2.png'
import project1 from '../../assets/projects/project1.png'
import facebook from '../../assets/logos/facebook.png'
import google from '../../assets/logos/google.png'
import hash from '../../assets/logos/hash.png'
import infy from '../../assets/logos/infy.png'
import codechef from '../../assets/logos/codechef.png'
import spoj from '../../assets/logos/spoj.png'
import battle from '../../assets/logos/battle.png'
import github from '../../assets/icons/github.png'

import GitHubButton from 'react-github-btn'
import { StyledDiv2X } from '../Home/styles';

function Geeky(props) {
    return (
        <React.Fragment>
            <Heading> 
                <h1> Code Contribution </h1>
                <StripLogo src = { contribution } alt = 'contribution' />
            </Heading>
            <HeatmapComponent currTheme = {props.currTheme} />
            <SubHeading> 
                Most used languages
            </SubHeading>
            <Languages />
            <Wrapper>
                <SubHeading> 
                    <GitHubButton 
                        href="https://github.com/fastboot" 
                        data-color-scheme="no-preference: light; light: light; dark: light;" 
                        data-size="large" 
                        data-show-count="true" 
                        aria-label="Follow @fastboot on GitHub"
                        style = {{ marginLeft: '700px', marginBottom: '-100px' }}
                    >
                        Follow @fastboot
                    </GitHubButton>
                </SubHeading>
            </Wrapper>
            
            <Heading> 
                <h1> Projects </h1>
                <StripLogo src = { contribution } alt = 'contribution' />
            </Heading>
            <ShowWrapper>
                <ShowCard
                    shadow = '#9E1502'
                >
                    <ShowInfo
                        width = '30vw'
                        fromcolor = '#4776E6'
                        tocolor = '#8E54E9'
                    >
                        <h1> <strong>?¿ </strong></h1>
                    </ShowInfo>
                    <ShowPromo
                        width = '40vw'
                    >
                        <p3>react express</p3>
                        <h3>Personal Site</h3>
                        <p1>A full stack personal site.</p1>
                        <img src={github} alt="github" style = {{ height: '30px', width: '30px', marginTop: '75px'}}/>
                    </ShowPromo>
                    
                </ShowCard>
                
            </ShowWrapper>
            <ShowWrapper>
                <ShowCard
                    shadow = '#9E1502'
                >
                    <ShowInfo
                        width = '30vw'
                        fromcolor = '#FF512F'
                        tocolor = '#DD2476'
                    >
                        <h1> <strong>?¿ </strong></h1>
                    </ShowInfo>
                    <ShowPromo
                        width = '40vw'
                    >
                        <p3>react express</p3>
                        <h3>Personal Site</h3>
                        <p1>A full stack personal site.</p1>
                        <img src={github} alt="github" style = {{ height: '30px', width: '30px', marginTop: '75px'}}/>
                    </ShowPromo>

                </ShowCard>
                
            </ShowWrapper>
                <WhiteSpace />
        </React.Fragment>
    )
}

export default Geeky