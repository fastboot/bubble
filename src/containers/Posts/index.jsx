import React from 'react'
import { 
    GradientAnimated, 
    PageHeading,
    PageRow,
    Card,
    Title
} from './styles'
import Block from '../../components/Blocks'

import ReactMarkdown from 'react-markdown'

import post from '../../blog/testingPost.mdx'

function Posts(props) {
    const markdown = post;
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
                    <ReactMarkdown>{post}</ReactMarkdown> 
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