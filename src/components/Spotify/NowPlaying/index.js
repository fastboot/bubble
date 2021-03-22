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
                'Authorization': 'Bearer BQDvtbgDT2JMBqG3NBxlocr5uQj6EGYTSw8zSMoS50DwGeDA20l6mbuQbIoVmKm2c68wYCEOpSMM2-nIa7rkX1F5ns_dynYAOvB67U9A9GxMhlc_pF-sK0VLlxjCeXiqJvmZUKbZyuOb3ZB977QcHtjKr0i4N7Uu4cjr-ADpILUzQNLz3WYQEwA',
            }
        })
        console.log(response.data)
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