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
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.INSTAGRAM}><Icon imgsrc = {  FooterLogos.Instagramlight  } imgalt = 'Instagram' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.TWITTER}><Icon imgsrc = {  FooterLogos.Twitterlight  } imgalt = 'Twitter' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.LINKEDIN}><Icon imgsrc = {  FooterLogos.Linkedinlight  } imgalt = 'Linkedin' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.GITHUB}><Icon imgsrc = {  FooterLogos.Githublight  } imgalt = 'Github' /></a>
                    </FooterIcons>
                </FooterDiv>
            </FooterWrapper>
        </React.Fragment>
    )
}

export default Footer