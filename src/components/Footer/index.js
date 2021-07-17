import React from 'react'
import { FooterWrapper, FooterDiv, FooterInfo, FooterIcons, GradientDiv } from './FooterElements'
import FooterLogos from './constants/FooterLogos'
import Icon from '../Icons'
import * as CONSTANTS from '../../constants'

function Footer (){
    return (
        <React.Fragment>
            <FooterWrapper>
                <FooterDiv>
                    <FooterInfo>
                        Get In Touch!
                    </FooterInfo>
                    <FooterIcons>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.FACEBOOK}><Icon imgsrc = { FooterLogos.Facebook } imgalt = 'Facebook' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.INSTAGRAM}><Icon imgsrc = { FooterLogos.Instagram } imgalt = 'Instagram' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.TWITTER}><Icon imgsrc = { FooterLogos.Twitter } imgalt = 'Twitter' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.LINKEDIN}><Icon imgsrc = { FooterLogos.Linkedin } imgalt = 'Linkedin' /></a>
                        <a target = '_blank' rel ='noreferrer' href = {CONSTANTS.GITHUB}><Icon imgsrc = { FooterLogos.Github } imgalt = 'Github' /></a>
                    </FooterIcons>
                </FooterDiv>
            </FooterWrapper>
        </React.Fragment>
    )
}

export default Footer