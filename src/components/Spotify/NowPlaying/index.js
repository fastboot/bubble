import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AlbumArt, DetailsWrapper, NowPlayingWrapper } from './styles'

function NowPlaying() {
    const [track, setTrack] = useState('')
    const [artist, setArtist] = useState('')
    const [device, setDevice] = useState('')
    const [albumart, setAlbumart] = useState()
    useEffect(() => {
        const getData = async () => {
        const url = 'https://api.spotify.com/v1/me/player?market=IN&additional_types=episode'
        const response = await axios.get(url, {
            headers: {
                'Authorization': 'Bearer BQAAhb03Iagbz7J0612cR88-kfg5_bBVJWJIj0H2-WXwL3JS2_ce5xJR_UBaCAfrmpGWxBDnPXQ1-LVURgeUJFoz7J6vknD8h5V5rEDmlxNNwDUyTY0aMWmY56CyVr2g8MgKI3Hzjlr--xjJK3KcWmMuVNRpKSDuv3_XySaYQS6mzQlwH1BpTM8Ugw',
            }
        })
        
        setTrack(response.data.item.name)
        setArtist(response.data.item.album.artists[0].name)
        setDevice(response.data.device.name)
        setAlbumart(response.data.item.album.images[0].url)
    };
        getData()
    },[])

    return (
        <NowPlayingWrapper>
            <AlbumArt src = {albumart} alt = 'albumart' />
            <DetailsWrapper>
                <p> {track} </p>
                <p> {artist} </p>
                <p> {device} </p>
            </DetailsWrapper>
        </NowPlayingWrapper>
    )
}

export default NowPlaying