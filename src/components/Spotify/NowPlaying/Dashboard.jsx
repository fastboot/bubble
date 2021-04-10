import React, {useState, useEffect, useRef} from 'react'
import Auth from './Auth'
import axios from 'axios'
import SpotifyWebApi from 'spotify-web-api-node'
import {
    NowPlayingWrapper,
    AlbumArt,
    DetailsWrapper,
    StripDetailsWrapper,
    StripAlbumArt,
    StripTrack,
    StripArtist,
    StripTypography,
    StripDeviceIcon 
} from './styles.js'
import computer from '../../../assets/icons/computer.png'
import smartphone from '../../../assets/icons/smartphone.png'

const spotifyApi = new SpotifyWebApi({
    clientId: "a387b036bc294f72ae868b39e38a2ad0",
})

function Dashboard({code, strip}) {
    const accessToken = Auth(code)
    const [track, setTrack] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
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
            setAlbum(res.data.item.album.name)
            setAlbumart(res.data.item.album.images[0].url)
            setDeviceType(res.data.device.type)

          })
         .catch((error) => {
            console.error(error)
          })
    },[])

    const showStrip = strip
    
    return (
        <React.Fragment>
            { showStrip === 'noshow' ? ( 
                    <NowPlayingWrapper>
                        <AlbumArt src = { albumart } alt = 'albumart' />
                        <DetailsWrapper>
                            <p> { track } </p>
                            <p> { artist } </p>
                            <p> { device } </p>
                        </DetailsWrapper>
                    </NowPlayingWrapper>
                ) :
                (
                    <StripDetailsWrapper>
                            <StripAlbumArt src = { albumart } alt = 'albumart' />
                                <StripTypography>
                                    <StripTrack> { track } </StripTrack>
                                    <StripArtist> { artist } </StripArtist>
                                </StripTypography>
                            <StripDeviceIcon src = { deviceType === 'Computer'? computer: smartphone } alt = 'computer' />
                    </StripDetailsWrapper>
                )
            }
        </React.Fragment>
    )
}

export default Dashboard