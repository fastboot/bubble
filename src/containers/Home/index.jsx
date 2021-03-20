import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
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
import Logo from '../../assets/logos/PeakWhite.png'

function Home() {
    return (
        <React.Fragment>
            <HomeWrapper>
                <Navbar />
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
                        <WorkplaceLogo src = { Logo } alt = 'Logo' /> 
                        <WorkplaceTime>
                            2020 - present
                        </WorkplaceTime>
                    </Card>
                <Footer />
            </HomeWrapper>
        </React.Fragment>
    )
}

export default Home