import React from 'react'
import { FooterWrapper, FooterDiv, FooterIcons } from './FooterElements'
import FooterLogos from './constants/FooterLogos'
import Icon from '../Icons'
import * as CONSTANTS from '../../constants'

function Footer (props){
    return (
        <React.Fragment>
            <FooterWrapper>
                <FooterDiv>
                    <FooterIcons>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.INSTAGRAM}><Icon imgsrc = { props.currTheme.mode === 'dark' ? FooterLogos.Instagramlight : FooterLogos.Instagram } imgalt = 'Instagram' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.TWITTER}><Icon imgsrc = { props.currTheme.mode === 'dark' ? FooterLogos.Twitterlight : FooterLogos.Twitter } imgalt = 'Twitter' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.LINKEDIN}><Icon imgsrc = { props.currTheme.mode === 'dark' ? FooterLogos.Linkedinlight : FooterLogos.Linkedin } imgalt = 'Linkedin' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.GITHUB}><Icon imgsrc = { props.currTheme.mode === 'dark' ? FooterLogos.Githublight : FooterLogos.Github } imgalt = 'Github' /></a>
                    </FooterIcons>
                </FooterDiv>
            </FooterWrapper>
        </React.Fragment>
    )
}

export default Footer