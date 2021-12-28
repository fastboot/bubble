import React, {useEffect, useState} from 'react'
import { Route, Switch } from 'react-router-dom'
import { 
    Heading,
    PageRow,
    Card,
    Title
} from './styles'
import Block from '../../components/Blocks'
import Markdown from 'markdown-to-jsx';
import post from '../../blog/testingPost.md'

function Posts() {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(post)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, []);
    return (
        <React.Fragment>
            <Heading> 
                <h1> Give them a read </h1>
            </Heading>
            <Block 
                color = 'white'
                width = '100%'
                height = '900px'
                flexDirection = 'column'
            >
            <PageRow>
                <Card>
                <Markdown children = {markdown} /> 
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

            <Switch>
                <Route exact path = '/:postId' />
            </Switch>
        </React.Fragment>
    )
}

export default Posts