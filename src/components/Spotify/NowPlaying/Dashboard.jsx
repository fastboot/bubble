import React, {useState, useEffect, useRef} from 'react'
import Auth from './Auth'
import axios from 'axios'
import SpotifyWebApi from 'spotify-web-api-node'
import {
    NowPlayingWrapper,
    AlbumArt,
    DetailsWrapper
} from './styles.js'

const spotifyApi = new SpotifyWebApi({
    clientId: "a387b036bc294f72ae868b39e38a2ad0",
})

function Dashboard({code}) {
    const accessToken = Auth(code)
    const [track, setTrack] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [albumart, setAlbumart] = useState('')
    const [device, setDevice] = useState('')

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

          })
         .catch((error) => {
            console.error(error)
          })
    },[])
    
    return (
        <NowPlayingWrapper>
            <AlbumArt src = { albumart } alt = 'albumart' />
            <DetailsWrapper>
                <p> { track } </p>
                <p> { artist } </p>
                <p> { device } </p>
            </DetailsWrapper>
        </NowPlayingWrapper>
    )
}

export default Dashboard