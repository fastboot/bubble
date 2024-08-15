import React from 'react'
import { FooterWrapper, FooterDiv, FooterIcons } from './FooterElements'
import FooterLogos from './constants/FooterLogos'
import Icon from '../Icons'
import * as CONSTANTS from '../../constants'

function Footer (props){
    const linkedinImage = (props.currTheme.mode !== 'dark' ? FooterLogos.Instagram : FooterLogos.Instagramlight)
    const twitterImage = (props.currTheme.mode !== 'dark' ? FooterLogos.Twitter : FooterLogos.Twitterlight)
    return (
        <React.Fragment>
            <FooterWrapper>
                    <FooterIcons>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.INSTAGRAM}><Icon imgsrc = {  linkedinImage  } imgalt = 'Instagram' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.TWITTER}><Icon imgsrc = {  twitterImage  } imgalt = 'Twitter' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.LINKEDIN}><Icon imgsrc = { (props.currTheme.mode  !== 'dark' ? FooterLogos.Linkedin : FooterLogos.Linkedinlight ) } imgalt = 'Linkedin' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.GITHUB}><Icon imgsrc = {  (props.currTheme.mode  !== 'dark' ? FooterLogos.Github : FooterLogos.Githublight ) } imgalt = 'Github' /></a>
                    </FooterIcons>
            </FooterWrapper>
        </React.Fragment>
    )
}

export default Footer