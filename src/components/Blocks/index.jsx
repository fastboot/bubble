import { Fragment } from 'react'
import { 
    BlockDiv, 
    CardButton, 
    CardDiv,
    CardDivHeading,
    CardDivSection,
    StyledHyperlink
} from './styles'

function Block(props) {
    return (
        <Fragment>
        { props.isCard &&
            <CardDiv {...props} >
                <CardDivHeading>
                    { props.CardTitle }
                </CardDivHeading>
                <CardDivSection>
                    { props.CardSection }
                </CardDivSection>
                <CardButton>
                    <StyledHyperlink> Scorecard </StyledHyperlink>
                </CardButton>
            </CardDiv>
        }
        { !props.isCard &&   
            <BlockDiv {...props} />
        }
        </Fragment>
    )
}

export default Block