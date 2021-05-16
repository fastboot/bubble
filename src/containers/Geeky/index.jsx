import React from 'react'
import { 
    GradientAnimated, 
    PageHeading, 
    Wrapper, 
    StripLogo, 
    Heading,
    Backpack,
    EmptyBar,
    Card,
    Gadget,
    Title,
    Bar,
    FilledBarMacPro,
    FilledBarMacAir,
    FilledBarSamPro,
    FilledBarPixel,
    FilledBarIpod,
    FilledBarPS4,
    AchieveCard,
    PageRow,
    AchievementWrapper,
    AchievementRow,
    AchievementCol
} from './styles'
import HeatmapComponent from './components/github/Heatmap'
import Block from '../../components/Blocks'
import gadgets from '../../assets/icons/gadget.png'
import trophy from '../../assets/icons/trophy.png'
import ipod from '../../assets/devices/ipodShuffle.png'
import macAir from '../../assets/devices/macAir.png'
import macPro from '../../assets/devices/macPro.png'
import samPro from '../../assets/devices/samPro.png'
import pixel from '../../assets/devices/pixel.png'
import ps4 from '../../assets/devices/ps4.png'

function Geeky(props) {
    return (
        <React.Fragment>
            <GradientAnimated />
            <PageHeading>
                Geeky
            </PageHeading>
            <HeatmapComponent currTheme = {props.currTheme} />
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
                        height = '89%'
                        width = '50%'
                        fromcolor = '#11998e'
                        tocolor = '#38ef7d'
                        marginLeft = '24px'
                        marginRight = '24px'
                        marginTop = '24px'
                        marginBottom = '24px'
                    >
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
                        >
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
                    </AchieveCard>
                    <AchieveCard
                        height = '85%'
                        width = '100%'
                        fromcolor = '#232526'
                        tocolor = '#414345'
                        marginLeft = '24px'
                        marginRight = '24px'
                        marginTop = '48px'
                        marginBottom = '48px'
                    >
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
            <Wrapper>
                <Heading> 
                    <h1> Gadgets I Use</h1>
                    <StripLogo src = { gadgets } alt = 'gadgets' />
                </Heading>
            </Wrapper>
            <Block 
                color = 'white'
                width = '100%'
                height = '700px'
                flexDirection = 'row'
            >
            <Backpack>
                <Card>
                    <Title>MacBook Pro</Title>
                    <Bar>
                        <EmptyBar />
                        <FilledBarMacPro />
                    </Bar>
                    <Gadget>
                        <img src = { macPro } alt = 'device' style ={{ width: '150px', height: '70px' }}/>
                    </Gadget>
                </Card>
                <Card>
                    <Title>MacBook Air</Title>
                    <Bar>
                        <EmptyBar />
                        <FilledBarMacAir />
                    </Bar>
                    <Gadget>
                        <img src = { macAir } alt = 'device' style ={{ width: '150px', height: '70px' }}/>
                    </Gadget>
                </Card>
                <Card>
                    <Title>Chromebook Pro</Title>
                    <Bar>
                        <EmptyBar />
                        <FilledBarSamPro />
                    </Bar>
                    <Gadget>
                        <img src = { samPro } alt = 'device' style ={{ width: '150px', height: '70px' }}/>
                    </Gadget>
                </Card>
                <Card>
                    <Title>Pixel 4a</Title>
                    <Bar>
                        <EmptyBar />
                        <FilledBarPixel />
                    </Bar>
                    <Gadget>
                        <img src = { pixel } alt = 'device' style ={{ width: '40px', height: '70px' }}/>
                    </Gadget>
                </Card>
                <Card>
                    <Title>Ipod Shuffle</Title>
                    <Bar>
                        <EmptyBar />
                        <FilledBarIpod />
                    </Bar>
                    <Gadget>
                        <img src = { ipod } alt = 'device' style ={{ width: '80px', height: '70px' }}/>
                    </Gadget>
                </Card>
                <Card>
                    <Title>Playstation 4</Title>
                    <Bar>
                        <EmptyBar />
                        <FilledBarPS4 />
                    </Bar>
                    <Gadget>
                        <img src = { ps4 } alt = 'device' style ={{ width: '150px', height: '100px', marginTop: '-10px' }}/>
                    </Gadget>
                </Card>
            </Backpack>
            </Block>
            

        </React.Fragment>
    )
}

export default Geeky