import React from 'react'
import { 
    GradientAnimated, 
    PageHeading,
    PageWrapper,
    PageRow,
    PostCard,
    Backpack,
    Card,
    Title
} from './styles'
import Block from '../../components/Blocks'

function Posts(props) {
    return (
        <React.Fragment>
            <GradientAnimated />
            <PageHeading>
                Posts
            </PageHeading>
            <Block 
                color = 'white'
                width = '100%'
                height = '900px'
                flexDirection = 'column'
            >
            <PageRow>
                <Card>
                    <Title>Post</Title>
                </Card>
                <Card>
                    <Title>Post</Title>
                </Card>
            </PageRow>
            <PageRow>
                <Card>
                    <Title>Post</Title>
                </Card>
                <Card>
                    <Title>Post</Title>
                </Card>
            </PageRow>
            <PageRow>
                <Card>
                    <Title>Post</Title>
                </Card>
                <Card>
                    <Title>Post</Title>
                </Card>
            </PageRow>
            </Block>
        </React.Fragment>
    )
}

export default Posts