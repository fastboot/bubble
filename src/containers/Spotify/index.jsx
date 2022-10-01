import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NowPlaying from '../../components/Spotify/NowPlaying'
import { 
    StripLogo, 
    Heading,
    H,
    PlaylistName,
    PlaylistDiv,
    AlbumArt,
    PlaylistsWrapper,
    ArrowContainer,
    Arrow
} from './styles'
import contribution from '../../assets/icons/contribution.png'

function Spotify(props) {

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
            fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        await axios.get("https://pranjaltestapinodejs.herokuapp.com/getPlaylists")
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => setIsLoading(false))
    }

    return (
        <React.Fragment>
            <NowPlaying strip = "noshow" theme = {props.currTheme.mode} />
            <Heading> 
                <H> Didn't like that? Checkout some of my other playlists </H> 
                <Arrow />
            </Heading>
            
            { data && (
                <PlaylistsWrapper>
                    {data.map((playlist, index) => {
                        return (
                            <>
                                
                                    <PlaylistDiv key={index}>
                                        <a href = {data[index].external_urls.spotify} ><AlbumArt src = {data[index].images[0].url} alt="albumart" /></a>
                                        <PlaylistName>{data[index].name}</PlaylistName>
                                    </PlaylistDiv>
                                
                            </>
                        )
                    })}
                </PlaylistsWrapper>
            )}
        </React.Fragment>
    )
} 

export default Spotify