import React from 'react'
import { 
    ProfileCard, 
    ProfilePicture, 
    HomeWrapper, 
    Workplace, 
    Wrapper,
    Heading, 
    StripLogo,
    WorkplaceNameDiv, 
    PageHeading,
    WorkplaceLogo, 
    WorkplaceTime, 
    StyledA,
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
    GradientAnimated,
} from './styles'
import Profile from '../../assets/profile/pranjal.jpeg'
import LogoWhite  from '../../assets/logos/PeakWhite.png'
import LogoBlack from '../../assets/logos/PeakBlack.png'
import ipod from '../../assets/devices/ipodShuffle.png'
import macAir from '../../assets/devices/macAir.png'
import macPro from '../../assets/devices/macPro.png'
import samPro from '../../assets/devices/samPro.png'
import pixel from '../../assets/devices/pixel.png'
import ps4 from '../../assets/devices/ps4.png'
import Block from '../../components/Blocks'
import gadgets from '../../assets/icons/gadget.png'

function Whoami(props) {

    return (
        <React.Fragment>
            <HomeWrapper>
                <GradientAnimated />
                <PageHeading> Who? </PageHeading>
                    <ProfileCard>
                        <ProfilePicture>
                            <img src = {Profile} alt = 'Profile' />
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
            </HomeWrapper>
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

export default Whoami