import React from 'react'
import {
    PageWrapper, 
    ProfileCard,
    ProfilePicture,
    Workplace,
    CurrWorkplace,
    WorkplaceLogo,
    WorkplaceNameDiv,
    WorkplaceDiv,
    WorkplaceTitle,
    WorkplaceName,
    WorkplaceTime,
    ProfileImg,
    StyledA
} from './styles'
import Profile from '../../assets/profile/dp.png'
import LogoWhite  from '../../assets/logos/PeakWhite.png'
import LogoBlack from '../../assets/logos/PeakBlack.png'
import atlas from '../../assets/logos/atlas-black.png'
import atlassian from '../../assets/logos/atlas-white.png'

function Home(props) {

    return (
        <React.Fragment>
            <PageWrapper>
                <ProfileCard>
                    <ProfilePicture>
                        <ProfileImg src = {Profile} alt = 'Profile' />
                    </ProfilePicture>
                    <CurrWorkplace>
                            <WorkplaceTitle><i>Software Engineer {' '}</i></WorkplaceTitle> at 
                            <StyledA href={'https://www.atlassian.com/'}><WorkplaceNameDiv><strong><i>Atlassian</i></strong></WorkplaceNameDiv></StyledA>
                    </CurrWorkplace>
                     <Workplace>
                         <WorkplaceDiv>
                            <WorkplaceLogo src = { props.currTheme.mode ==='dark'? atlassian : atlas } alt = 'Logo' /> 
                            <WorkplaceName>Atlassian</WorkplaceName>
                            <WorkplaceTime>2022 - Present</WorkplaceTime>
                        </WorkplaceDiv>
                        <WorkplaceDiv>
                            <WorkplaceLogo src = { props.currTheme.mode ==='dark'? LogoWhite: LogoBlack } alt = 'Logo' /> 
                            <WorkplaceName>Peak</WorkplaceName>
                            <WorkplaceTime>2020 - 2022</WorkplaceTime>
                        </WorkplaceDiv>
                    </Workplace> 
                </ProfileCard>
            </PageWrapper>
        </React.Fragment>
    )
}

export default Home