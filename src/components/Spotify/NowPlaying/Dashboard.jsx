import React, { useState } from 'react'
import axios from 'axios'
import {
    NowPlayingWrapper,
    AlbumArt,
    Device,
    DetailsWrapper,
    StripDeviceIcon,
    LoaderDiv,
    NowPlayingArtist,
    NowPlayingDevice,
    NowPlayingTrack,
    StripLogo,
    Filler,
    Dot,
    Bar,
} from './styles.js'
import computer from '../../../assets/icons/computer.png'
import smartphone from '../../../assets/icons/smartphone.png'
import spotifyoriginal from '../../../assets/icons/spotifyoriginal.png'
import Spinner from '../../../components/Spinner'
import { useInterval } from './interval'; 

function Dashboard() {
    const [track, setTrack] = useState('')
    const [artist, setArtist] = useState('')
    const [albumart, setAlbumart] = useState('')
    const [device, setDevice] = useState('')
    const [deviceType, setDeviceType] = useState('')
    const [duration, setDuration] = useState(0)
    const [progress, setProgress] = useState(0)
    const [externalUrl, setExternalUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    /*
        duration = 600
        curr     = (curr / duration) * 600;
    */
    useInterval(() => {
        // put your interval code here.
        axios
        .get("https://pranjaltestapinodejs.herokuapp.com/currentTrack", {})
        .then(res => {
            if(res.data.item) {
                setArtist(res.data.item.artists[0].name)
                setDevice(res.data.device.name)
                setTrack(res.data.item.name)
                setAlbumart(res.data.item.album.images[0].url)
                setDeviceType(res.data.device.type)
                setExternalUrl(res.data.item.external_urls.spotify)
                setDuration(res.data.item.duration_ms)
                setProgress(res.data.progress_ms)
            }
        })
        .catch((err) => {
            console.log(err)
        },[])
        .finally(() => {
            setIsLoading(false);
        })
    }, 1000);
    
    return (
        <React.Fragment>
            { isLoading && (
                <LoaderDiv>
                    <Spinner />
                </LoaderDiv>
            )}
            { !isLoading && artist && ( 
                    <NowPlayingWrapper albumart = {albumart}>
                        <StripLogo src = { spotifyoriginal } alt = 'spotify' />
                        <a href = { externalUrl } target="_blank" rel="noreferrer"><AlbumArt src = { albumart } alt = 'albumart' /></a>
                        <DetailsWrapper>
                            <NowPlayingTrack> { track } </NowPlayingTrack>
                            <NowPlayingArtist> { artist } </NowPlayingArtist>
                            <Device>
                                <StripDeviceIcon src = { deviceType === 'Computer'? computer: smartphone } alt = 'computer' />
                                <NowPlayingDevice> { device } </NowPlayingDevice>
                            </Device>
                            <Bar>
                                <Filler percent = {(progress / duration) * 100} width = '100'/>
                                <Dot />
                            </Bar>
                        </DetailsWrapper>
                        
                    </NowPlayingWrapper>
                )
            }
            { !isLoading && !artist && (
                <LoaderDiv>
                    <h1><i>Away at the moment would be back soon :)</i></h1> 
                </LoaderDiv>
            )}
        </React.Fragment>
    )
}

export default Dashboard