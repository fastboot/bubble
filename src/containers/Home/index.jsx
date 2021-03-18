import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Card, Picture } from './styles'

function Home() {
    return (
        <React.Fragment>
            <Navbar />
                <Card>
                    Hello
                </Card>
                <Picture>
                    <img src = '../../assets/profile/pranjal.jpeg' alt = 'profile'/>
                </Picture>
            <Footer />
        </React.Fragment>
    )
}

export default Home