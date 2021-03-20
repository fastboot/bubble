import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Card, ProfilePicture, HomeWrapper, Workplace, WorkplaceLogo, StyledA } from './styles'
import Profile from '../../assets/profile/pranjal.jpeg'

function Home() {
    return (
        <React.Fragment>
            <HomeWrapper>
                <Navbar />
                    <Card>
                        <ProfilePicture>
                            <img src = {Profile} alt = 'Profile' />
                        </ProfilePicture>
                        <Workplace>
                            <div>
                                <strong>Software Engineer</strong> at 
                            </div>
                            <StyledA target = '_blank' rel = 'noreferrer' href = 'https://peak.ai'>
                                <WorkplaceLogo>
                                    <strong>Peak</strong>
                                </WorkplaceLogo>
                            </StyledA>
                        </Workplace>
                    </Card>
                <Footer />
            </HomeWrapper>
        </React.Fragment>
    )
}

export default Home