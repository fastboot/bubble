import React from 'react'
import { 
    Card, 
    ProfilePicture, 
    HomeWrapper, 
    Workplace, 
    WorkplaceNameDiv, 
    WorkplaceLogo, 
    WorkplaceTime, 
    StyledA,
    GradientAnimated,
} from './styles'
import Profile from '../../assets/profile/pranjal.jpeg'
import LogoWhite  from '../../assets/logos/PeakWhite.png'
import LogoBlack from '../../assets/logos/PeakBlack.png'

function Whoami(props) {

    return (
        <React.Fragment>
            <HomeWrapper>
                <GradientAnimated />
                    <Card>
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
                    </Card>
            </HomeWrapper>
        </React.Fragment>
    )
}

export default Whoami