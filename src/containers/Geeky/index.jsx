import React from 'react'
import { GradientAnimated, PageHeading } from './styles'
import HeatmapComponent from './components/github/Heatmap'

function Geeky(props) {
    return (
        <React.Fragment>
            <GradientAnimated />
            <PageHeading>
                Geeky
            </PageHeading>
                <HeatmapComponent />

        </React.Fragment>
    )
}

export default Geeky