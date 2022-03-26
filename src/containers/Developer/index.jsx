import React from 'react'
import { 
    Wrapper, 
    StripLogo, 
    Heading,
    SubHeading,
    WhiteSpace,
    ShowWrapper,
    ShowInfo,
    ShowPromo,
    H,
    Hone,
    Pone,
    Pthree,
    GithubImg,
    ProjectImg,
} from './styles'
import HeatmapComponent from './components/heatmap/Heatmap'
import Languages from './components/stats/Languages'
import contribution from '../../assets/icons/contribution.png'
import github from '../../assets/icons/github.png'
import wapco from '../../assets/projects/wapco.png'
import GitHubButton from 'react-github-btn'

function Developer(props) {
    return (
        <React.Fragment>
            <Heading> 
                <H> Code Contribution </H> 
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

                    <ShowInfo
                        width = '30vw'
                        fromcolor = '#FF512F'
                        tocolor = '#DD2476'
                    >
                        <Hone> <strong>?¿ </strong></Hone>
                    </ShowInfo>
                    <ShowPromo
                        width = '40vw'
                    >
                        <Pthree><i>react express</i></Pthree>
                        <Hone>Personal Site</Hone>
                        <Pone>A full stack personal site.</Pone>
                        <a href='https://github.com/fastboot/bubble'><GithubImg src={github} alt="github" /></a>
                    </ShowPromo>
    
                
            </ShowWrapper>
            <ShowWrapper>
                    <ShowInfo
                        width = '30vw'
                        fromcolor = '#4776E6'
                        tocolor = '#8E54E9'
                        
                    >
                        <ProjectImg src = {wapco} alt = "wapco" />
                    </ShowInfo>
                    <ShowPromo
                        width = '40vw'
                    >
                        <Pthree><i>python electron</i></Pthree>
                        <Hone>Wapco</Hone>
                        <Pone>Desktop application for analysis.</Pone>
                        <a href='https://github.com/fastboot/Wapco-Linux-Beta'><GithubImg src={github} alt="github" /></a>
                    </ShowPromo>
                
            </ShowWrapper>
                <WhiteSpace />
        </React.Fragment>
    )
}

export default Developer