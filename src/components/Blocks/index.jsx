import { Fragment } from 'react'
import { 
    BlockDiv, 
    CardButton, 
    CardDiv,
    CardDivHeading,
    CardDivSection,
    CardImage,
    StyledHyperlink
} from './styles'

function Block(props) {
    return (
        <Fragment>
        { props.isCard &&
            <CardDiv {...props} >
                { props.src && <img 
                    src = { props.src }
                    style = {{
                        width: props.imageWidth,
                        height: props.imageHeight,
                        display: 'flex',
                    }}
                    />
                }
                <CardDivHeading>
                    { props.CardTitle }
                </CardDivHeading>
                <CardDivSection>
                    { props.CardSection }
                </CardDivSection>
                { !props.noButton && <CardButton>
                        <StyledHyperlink> Scorecard </StyledHyperlink>
                    </CardButton>
                }
            </CardDiv>
        }
        { !props.isCard &&   
            <BlockDiv {...props} />
        }
        </Fragment>
    )
}

export default Block