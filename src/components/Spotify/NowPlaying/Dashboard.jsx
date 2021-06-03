import React, {useState, useEffect, Fragment} from 'react'
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
    StripLogo,
    Filler,
    Bar,
} from './styles.js'
import computer from '../../../assets/icons/computer.png'
import smartphone from '../../../assets/icons/smartphone.png'
import spotifyoriginal from '../../../assets/icons/spotifyoriginal.png'

function Dashboard({ strip }) {
    const [track, setTrack] = useState('')
    const [artist, setArtist] = useState('')
    const [albumart, setAlbumart] = useState('')
    const [device, setDevice] = useState('')
    const [deviceType, setDeviceType] = useState('')
    const [timeStamp, setTimeStamp] = useState('')
    /*
        duration = 600
        curr     = (curr / duration) * 600;
    */
    useEffect(() => {
        axios
          .get("https://pranjaltestapinodejs.herokuapp.com/currentTrack", {})
          .then(res => {
            if(res.data.item) {
                setArtist(res.data.item.artists[0].name)
                setDevice(res.data.device.name)
                setTrack(res.data.item.name)
                setAlbumart(res.data.item.album.images[0].url)
                setDeviceType(res.data.device.type)
                const duration = res.data.item.duration_ms;
                const currTime = res.data.progress_ms;
                // console.log(currTime);
                for(let i = currTime; i <= duration; i++) {
                    setTimeStamp((currTime / duration) * 100);
                }
            } 
            console.log("Tick");
          })
          .catch((err) => {
            console.log(err)
          },[])
      });

    const showStrip = strip
    
    return (
        <React.Fragment>
            { showStrip === 'noshow' && artist? ( 
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
                            <Bar>
                                <Filler percent = {timeStamp}/>
                            </Bar>
                        </DetailsWrapper>
                    </NowPlayingWrapper>
                ) :
                (
                    <Fragment>
                        { artist && ( 
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
                        )}
                    </Fragment>
                )
            }
        </React.Fragment>
    )
}

export default Dashboard