import React, {useState} from 'react'
import { CurrentWrapper, NameWrapper, PageWrapper, ProfilePicWrapper, ProfileWrapper, Plate, Checkbox, Label, ToggleContainer, ToggleSwitch, FrostedGlass } from './styles'
import Block from '../../components/Blocks'
import {PageRow, Card, Title} from '../../containers/Posts/styles'
import styled from 'styled-components';
import NewNavigation from '../../components/new-navbar/new-navbar';
import ThemeToggle from '../../components/theme-toggle/theme-toggle';




function Landing(props) {

    return (
        <React.Fragment>
            
            <PageWrapper>
                <NewNavigation />
                <ThemeToggle />
                <ProfileWrapper>
                <Block 
                color = 'white'
                width = '100%'
                height = '900px'
                flexDirection = 'column'
            >
            <PageRow>
                <Card> 
                </Card>
            </PageRow>
            </Block>
                </ProfileWrapper>
            </PageWrapper>
        </React.Fragment>
    )
}

export default Landing