import React from 'react'
import {
    PageWrapper, 
    ProfileCard,
    ProfilePicture,
    Workplace,
    WorkplaceLogo,
    WorkplaceNameDiv,
    WorkplaceTime,
    StyledA
} from './styles'
import Profile from '../../assets/profile/dp.png'
import LogoWhite  from '../../assets/logos/PeakWhite.png'
import LogoBlack from '../../assets/logos/PeakBlack.png'

function Home(props) {

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
            </PageWrapper>
        </React.Fragment>
    )
}

export default Home