import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Card } from './styles'

function Home() {
    return (
        <React.Fragment>
            <Navbar />
                <Card>
                    Hello
                </Card>
            <Footer />
        </React.Fragment>
    )
}

export default Home