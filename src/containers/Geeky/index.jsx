import React from 'react'
import { 
    GradientAnimated, 
    PageHeading, 
    Wrapper, 
    StripLogo, 
    Heading,
    AchieveCard,
    AchievementWrapper,
    AchievementRow,
    AchievementCol,
    AchieveCardHeading,
    AchieveCardDescription,
    AchieveCardButton,
    ShowcaseDivBorder,
    ShowcaseInfoWrapper,
    ShowCaseInfoHeading,
    ShowcaseInfoDetail,
    BetweenDescription
} from './styles'
import Block from '../../components/Blocks'
import HeatmapComponent from './components/heatmap/Heatmap'
import Languages from './components/stats/Languages'
import Followers from './components/stats/Followers'
import trophy from '../../assets/icons/trophy.png'
import projects from '../../assets/icons/projects.png'
import contribution from '../../assets/icons/contribution.png'
import project2 from '../../assets/projects/project2.png'
import facebook from '../../assets/logos/facebook.png'
import google from '../../assets/logos/google.png'
import hash from '../../assets/logos/hash.png'

function Geeky(props) {
    return (
        <React.Fragment>
            <GradientAnimated />
            <PageHeading>
                Geeky
            </PageHeading>
            <Wrapper>
                <Heading> 
                    <h1> Code Contribution </h1>
                    <StripLogo src = { contribution } alt = 'contribution' />
                </Heading>
            </Wrapper>
            <HeatmapComponent currTheme = {props.currTheme} />
            <Wrapper>
                <Heading> 
                    Most used languages
                </Heading>
            </Wrapper>
            <Languages />
            <Wrapper>
                <Heading> 
                    <h1> Showcase </h1>
                    <StripLogo src = { projects } alt = 'projects' />
                </Heading>
            </Wrapper>
            <Block 
                height = '600px'
                fromcolor = '#52155a'
                tocolor = '#381146'
            >
                <ShowcaseInfoWrapper>
                    <ShowCaseInfoHeading>
                        Personal Site
                    </ShowCaseInfoHeading>
                    <ShowcaseInfoDetail>
                        {'This was made just for fun used a lot of React in it 2021- Personal'}
                    </ShowcaseInfoDetail>
                </ShowcaseInfoWrapper>
                <ShowcaseDivBorder>
                    <img src = { project2 } alt = 'project1' style = {{ width: '760px', height: '400px'}}/>
                </ShowcaseDivBorder>
            </Block>
            <Block 
                height = '600px'
                // fromcolor = '#dcf4fe'
                // tocolor = '#dcf4fe'
                fromcolor = 'white'
                tocolor = 'white'
            >
                <ShowcaseInfoWrapper>
                    <ShowCaseInfoHeading>
                        Personal Site
                    </ShowCaseInfoHeading>
                    <ShowcaseInfoDetail>
                        {'This was made just for fun used a lot of React in it 2021- Personal'}
                    </ShowcaseInfoDetail>
                </ShowcaseInfoWrapper>
                <ShowcaseDivBorder>
                    <img src = { project2 } alt = 'project1' style = {{ width: '760px', height: '400px'}}/>
                </ShowcaseDivBorder>
                
                
            </Block>
            <Wrapper>
                <Heading> 
                    <h1> I Love Competing! </h1>
                    <StripLogo src = { trophy } alt = 'trophy' />
                </Heading>
            </Wrapper>
            <AchievementWrapper>
                <AchievementRow
                    height = '648px'
                >
                    <AchieveCard
                        height = '45%'
                        width = '50%'
                        fromcolor = '#11998e'
                        tocolor = '#38ef7d'
                        marginLeft = '24px'
                        marginRight = '24px'
                        marginTop = '24px'
                        marginBottom = '24px'
                        flexDirection = 'column'
                    >   
                        <img src = {facebook} alt = "facebook" style = {{ height: '60px', width: '60px', marginTop: '50px', marginLeft: '220px' }}/>
                        <AchieveCardHeading>Facebook Hacker Cup</AchieveCardHeading>
                        <AchieveCardDescription>Ranked 934 in round 2 (Quarter Finals)</AchieveCardDescription>
                        {/* <AchieveCardButton
                            marginTop = '100px'
                        >
                            Scoreboard
                        </AchieveCardButton> */}
                    </AchieveCard>
                    <AchievementCol
                        width = '50%'
                    >
                        <AchieveCard
                            height = '50%'
                            width = '90%'
                            fromcolor = '#4776E6'
                            tocolor = '#8E54E9'
                            marginLeft = '24px'
                            marginRight = '24px'
                            marginTop = '24px'
                            marginBottom = '24px'
                            flexDirection = 'column'
                        >
                            <img src = {google} alt = "google" style = {{ height: '40px', width: '40px', marginTop: '25px', marginLeft: '200px' }}/>
                            <AchieveCardHeading>Google Code Jam</AchieveCardHeading>
                            <AchieveCardDescription>Ranked 1961 in round 1B</AchieveCardDescription>
                            {/* <AchieveCardButton
                                marginTop = '10px'
                            >
                                Scoreboard
                            </AchieveCardButton> */}
                        </AchieveCard>
                        <AchieveCard
                            height = '50%'
                            width = '90%'
                            fromcolor = {props.currTheme.mode === 'dark' ? 'black' : 'white'}
                            tocolor = {props.currTheme.mode === 'dark' ? 'black' : 'white'}
                            marginLeft = '24px'
                            marginRight = '24px'
                            marginTop = '24px'
                            marginBottom = '48px'
                            noShadow = 'true'
                        >
                            <BetweenDescription
                                marginTop = '70px'
                            >
                                Over 1500+ problems solved across platforms
                            </BetweenDescription>
                        </AchieveCard>
                    </AchievementCol>
                </AchievementRow>
                <AchievementRow
                    height = '200px'
                >
                    <AchieveCard
                        height = '100%'
                        width = '100%'
                        fromcolor = '#FF512F'
                        tocolor = '#DD2476'
                        marginLeft = '24px'
                        marginRight = '24px'
                        marginTop = '0px'
                        marginBottom = '0px'
                    >
                        <img src = {hash} alt = "google" style = {{ height: '40px', width: '40px', marginTop: '70px', marginLeft: '100px' }}/>
                        <AchieveCardHeading>3 Address Code</AchieveCardHeading>
                        <AchieveCardDescription>Ranked 74 at the finals</AchieveCardDescription>
                    </AchieveCard>
                </AchievementRow>
                <AchievementRow
                    height = '300px'
                >
                    <AchieveCard
                        height = '85%'
                        width = '100%'
                        fromcolor = {props.currTheme.mode === 'dark' ? 'black' : 'white'}
                        tocolor = {props.currTheme.mode === 'dark' ? 'black' : 'white'}
                        marginLeft = '24px'
                        marginRight = '24px'
                        marginTop = '48px'
                        marginBottom = '48px'
                        noShadow = 'true'
                    >
                        <BetweenDescription
                                marginTop = '70px'
                            >
                                Follow me @fastboot
                        </BetweenDescription>
                    </AchieveCard>
                </AchievementRow>
                <AchievementRow
                    height = '270px'
                >
                    <AchieveCard
                        height = '100%'
                        width = '100%'
                        fromcolor = '#e65c00'
                        tocolor = '#F9D423'
                        marginLeft = '24px'
                        marginRight = '24px'
                        marginTop = '48px'
                        marginBottom = '48px'
                    >
                    </AchieveCard>
                    <AchieveCard
                        height = '100%'
                        width = '100%'
                        fromcolor = '#0575E6'
                        tocolor = '#021B79'
                        marginLeft = '24px'
                        marginRight = '24px'
                        marginTop = '48px'
                        marginBottom = '48px'
                    >
                    </AchieveCard>
                </AchievementRow>
            </AchievementWrapper>
            

        </React.Fragment>
    )
}

export default Geeky