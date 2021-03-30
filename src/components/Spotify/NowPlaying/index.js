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
                'Authorization': 'Bearer BQD54uqRDXtdZVlkxzTrvOz-DG8QtdvAn_wiZ2uWOhw8lG_2qZFTHTIG9LsS35qYn2KSmPDB5H6zkhZa3gU_teVc-NIIFXVFKXSNMdcDFuRsCGHPiM2rkyTbAwrexQIGIi1hx8dncoNe6fyaqBqoPPMq8arSXx3N3T2G57nV40Z5sG-tR1mwzPGcXw',
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