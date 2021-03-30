import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AlbumArt, DetailsWrapper, NowPlayingWrapper, StripAlbumArt, StripArtist, StripDetailsWrapper, StripDeviceIcon, StripTrack, StripTypography } from './styles'
import computer from '../../../assets/icons/computer.png'
import smartphone from '../../../assets/icons/smartphone.png'

function NowPlaying(props) {
    const [track, setTrack] = useState('')
    const [artist, setArtist] = useState('')
    const [device, setDevice] = useState('')
    const [deviceType, setDeviceType] = useState('')
    const [albumart, setAlbumart] = useState()
    useEffect(() => {
        const getData = async () => {
        const url = 'https://api.spotify.com/v1/me/player?market=IN&additional_types=episode'
        const response = await axios.get(url, {
            headers: {
                'Authorization': 'Bearer BQCCnt6roRBiaJr8MMdii3ODKW2rvrfAppvZ2tui2i0CcbPTaeCgrpKql4U8G5s5PM3CQYcVJ6D7ghTpK67sqNTc3KZa6WbqdesciyG6gZKk6QahDntZLr2IPOlGUP4gMmPD4Rts_1S92eNQeHGxYQR82HyZDwACJ8MQXNHjQMPG-IgrHrowlSdmN8cDwTQ',
            }
        })
        
        setTrack(response.data.item.name)
        setArtist(response.data.item.album.artists[0].name)
        setDevice(response.data.device.name)
        setDeviceType(response.data.device.type)
        setAlbumart(response.data.item.album.images[0].url)
    };
        getData()
    },[])

    const showStrip = props.strip

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

export default NowPlaying