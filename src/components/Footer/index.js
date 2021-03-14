import React from 'react'
import { FooterDiv, FooterInfo, FooterIcons } from './FooterElements'
// import Icon from './Icon'
import FooterLogos from './constants/FooterLogos'
import Icon from '../Icons'

function Footer (){
    return (
        <React.Fragment>
            <FooterDiv>
                <FooterInfo>
                    FooterInfo
                </FooterInfo>
                <FooterIcons>
                    <Icon imgsrc = { FooterLogos.Facebook } imgalt = 'Facebook' />
                    <Icon imgsrc = { FooterLogos.Instagram } imgalt = 'Instagram' />
                    <Icon imgsrc = { FooterLogos.Twitter } imgalt = 'Twitter' />
                    <Icon imgsrc = { FooterLogos.Linkedin } imgalt = 'Linkedin' />
                    <Icon imgsrc = { FooterLogos.Github } imgalt = 'Github' />
                </FooterIcons>
            </FooterDiv>
        </React.Fragment>
    )
}

export default Footer