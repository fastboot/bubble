import React, {useState, useEffect, Fragment} from 'react'
import Auth from './Auth'
import axios from 'axios'
import {
    NowPlayingWrapper,
    AlbumArt,
    Device,
    DetailsWrapper,
    StripDetailsWrapper,
    StripAlbumArt,
    StripTrack,
    StripArtist,
    StripTypography,
    StripDeviceIcon,
    ArrowDiv,
    ArrowSpan,
    StyledLink,
    NowPlayingArtist,
    NowPlayingDevice,
    NowPlayingTrack,
    StripLogo
} from './styles.js'
import computer from '../../../assets/icons/computer.png'
import smartphone from '../../../assets/icons/smartphone.png'
import spotifyoriginal from '../../../assets/icons/spotifyoriginal.png'

function Dashboard({code, strip}) {
    const accessToken = Auth(code)
    const [track, setTrack] = useState('')
    const [artist, setArtist] = useState('')
    const [albumart, setAlbumart] = useState('')
    const [device, setDevice] = useState('')
    const [deviceType, setDeviceType] = useState('')

    useEffect(() => {
        axios.get('https://api.spotify.com/v1/me/player', {
            headers: {
                'Authorization': `Bearer ` + accessToken
            }
        })
         .then((res) => {
            console.log(res.data)
            setArtist(res.data.item.artists[0].name)
            setDevice(res.data.device.name)
            setTrack(res.data.item.name)
            setAlbumart(res.data.item.album.images[0].url)
            setDeviceType(res.data.device.type)

          })
         .catch((error) => {
            console.error(error)
          })
    })

    const showStrip = strip
    
    return (
        <React.Fragment>
            { showStrip === 'noshow' ? ( 
                    <NowPlayingWrapper albumart = {albumart}>
                        <StripLogo src = { spotifyoriginal } alt = 'spotify' />
                        <AlbumArt src = { albumart } alt = 'albumart' />
                        <DetailsWrapper>
                            <NowPlayingTrack> { track } </NowPlayingTrack>
                            <NowPlayingArtist> { artist } </NowPlayingArtist>
                            <Device>
                                <StripDeviceIcon src = { deviceType === 'Computer'? computer: smartphone } alt = 'computer' />
                                <NowPlayingDevice> { device } </NowPlayingDevice>
                            </Device>
                        </DetailsWrapper>
                    </NowPlayingWrapper>
                ) :
                (
                    <Fragment>
                        <StripDetailsWrapper>
                                <StripAlbumArt src = { albumart } alt = 'albumart' />
                                    <StripTypography>
                                        <StripTrack> { track } </StripTrack>
                                        <StripArtist> { artist } </StripArtist>
                                    </StripTypography>
                                <StripDeviceIcon src = { deviceType === 'Computer'? computer: smartphone } alt = 'computer' />
                                <StyledLink to = '/watchplay' >
                                    <ArrowDiv>
                                        <ArrowSpan />
                                        <ArrowSpan />
                                        <ArrowSpan />
                                    </ArrowDiv>
                                </StyledLink>
                            
                        </StripDetailsWrapper>
                    </Fragment>
                )
            }
        </React.Fragment>
    )
}

export default Dashboard