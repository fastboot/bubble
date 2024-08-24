import React from 'react'
import { CardWrapper, Card, IntroSide, ImageSide, ImageVector, BlobVector, SubText, Diff, Footer2, AcrossDiv, IconsWrapper } from './styles'
import NewNavigation from '../../components/new-navbar/new-navbar';
import VectorPerson from '../../assets/profile/dp3d.png'
import blob from '../../assets/shapes/blob2.svg'
import GradientText from './gradientText';
import {
    Workplace,
    WorkplaceLogo,
    WorkplaceDiv,
    WorkplaceName,
    WorkplaceTime,
} from './styles'
import LogoWhite from '../../assets/logos/PeakWhite.png'
import LogoBlack from '../../assets/logos/PeakBlack.png'
import atlas from '../../assets/logos/atlas-black.png'
import atlassian from '../../assets/logos/atlas-white.png'
import Footer from '../../components/Footer';
import { GradientDiv } from './styles';

function Landing(props) {

    return (
        <React.Fragment>
            <GradientDiv />
            <NewNavigation currTheme={props.currTheme} changeMode={props.changeMode} />
            <CardWrapper>
                <Card>
                    <IntroSide>
                        <SubText>Hey! I am </SubText>
                        <GradientText text='Pranjal  &nbsp;  Mishra'></GradientText>
                        <SubText>Software Engineer 2 at Atlassian.<br />
                            Glad you are here.</SubText>
                        <Diff />
                        <Workplace>
                            <WorkplaceDiv>
                                <WorkplaceLogo src={props.currTheme.mode === 'dark' ? atlassian : atlas} alt='Logo' />
                                <WorkplaceName>Atlassian</WorkplaceName>
                                <WorkplaceTime>2022 - Present</WorkplaceTime>
                            </WorkplaceDiv>
                            <WorkplaceDiv>
                                <WorkplaceLogo src={props.currTheme.mode === 'dark' ? LogoWhite : LogoBlack} alt='Logo' />
                                <WorkplaceName>Peak</WorkplaceName>
                                <WorkplaceTime>2020 - 2022</WorkplaceTime>
                            </WorkplaceDiv>
                        </Workplace>
                    </IntroSide>
                    <ImageSide>
                        <ImageVector src={VectorPerson} />
                        <BlobVector src={blob} />
                    </ImageSide>
                </Card>
            </CardWrapper>
            <Footer2>
                <AcrossDiv>Across the internet.</AcrossDiv>
                <IconsWrapper><Footer {...props} /></IconsWrapper>
            </Footer2>
        </React.Fragment>
    )
}

export default Landing