import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NowPlaying from './NowPlaying'
import {
    PlaylistName,
    PlaylistsWrapper,
    NowPlayingWrapper,
    ListWrapper,
    ListItem,
    ListItemImage,
    RecentWrapper,
    RecentWrapperCard,
    TopWrapper,
    TopWrapperHeading,
    TopWrapperList,
    TopWrapperListItem,
    TopWrapperListItemName,
    TopWrapperListItemImage,
    IndexColor,
    PageHeading,
    PlaylistOutside,
    RecentOutside
} from './styles'
import getColor from 'colorthief'
import FadeIn from './FadeIn'
import NewNavigation from '../../components/new-navbar/new-navbar'
import { Footer2, GradientDiv, AcrossDiv, IconsWrapper } from '../Landing/styles'
import Footer from '../../components/Footer';

function Spotify(props) {

    const [data, setData] = useState()
    // removed unused recentData state
    const [topTrack, setTopTrack] = useState();
    const [topArtist, setTopArtist] = useState();
    const [, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
        fetchTopTrack();
        fetchTopArtist();
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        await axios.get("https://bubble-backend.vercel.app/getPlaylists")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsLoading(false))
    }
    // removed unused profile fetch

    const fetchTopTrack = async () => {
        setIsLoading(true);
        await axios.get("https://bubble-backend.vercel.app/recentTopTrack")
            .then((res) => {
                setTopTrack(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsLoading(false))
    }

    const fetchTopArtist = async () => {
        setIsLoading(true);
        await axios.get("https://bubble-backend.vercel.app/recentTopArtist")
            .then((res) => {
                setTopArtist(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <React.Fragment>
            {/*  */}
            <GradientDiv />
            <NewNavigation currTheme={props.currTheme} changeMode={props.changeMode} />
            <PageHeading>
                Now listening.
            </PageHeading>
            <NowPlayingWrapper>
                <NowPlaying strip="noshow" theme={props.currTheme.mode} />
            </NowPlayingWrapper>

            <RecentOutside>
                <PageHeading>
                    Recent favourites.
                </PageHeading>
                <RecentWrapper>

                    <RecentWrapperCard>
                        <TopWrapper>
                            <TopWrapperHeading>Top tracks</TopWrapperHeading>
                            <TopWrapperList>
                                {topTrack && topTrack.map((currentTrack, index) => {
                                    // const artists = currentTrack.artists.map((curr) => { return curr.name })
                                    return (
                                        <>
                                            <TopWrapperListItem onClick={() => window.open(currentTrack.external_urls.spotify, '_blank')}>
                                                <TopWrapperListItemName><IndexColor>{index + 1}</IndexColor>&nbsp;&nbsp; {currentTrack.name} </TopWrapperListItemName>
                                                <TopWrapperListItemImage src={currentTrack.album.images[0].url} />
                                            </TopWrapperListItem>
                                        </>

                                    )
                                })}
                            </TopWrapperList>
                        </TopWrapper>
                        <TopWrapper>
                            <TopWrapperHeading artist>Top artists</TopWrapperHeading>
                            <TopWrapperList>
                                {topArtist && topArtist.map((currentArtist, index) => {

                                    return (
                                        <TopWrapperListItem onClick={() => window.open(currentArtist.external_urls.spotify, '_blank')} artist>
                                            <TopWrapperListItemName><IndexColor artist>{index + 1}</IndexColor>&nbsp;&nbsp; {currentArtist.name}</TopWrapperListItemName>
                                            {topTrack && (<TopWrapperListItemImage src={currentArtist.images[0].url} />)}
                                        </TopWrapperListItem>
                                    )
                                })}
                            </TopWrapperList>
                        </TopWrapper>

                    </RecentWrapperCard>

                </RecentWrapper>

            </RecentOutside>

            <PlaylistOutside>
                <PageHeading>
                    More playlists, you will find your vibe.
                </PageHeading>
                {data && (
                    <PlaylistsWrapper>

                        <FadeIn>


                            <ListWrapper>
                                {data.map((playlist, index) => {

                                    if (data[index].owner.id === "spotify") {
                                        return <></>;
                                    }
                                    return (
                                        <>
                                            <ListItem onClick={() => window.open(data[index].external_urls.spotify, '_blank')} bkcolor={getColor(data[index].images[0].url)}>
                                                <ListItemImage src={data[index].images[0].url} alt="albumart" />

                                                <PlaylistName>{data[index].name}</PlaylistName>
                                            </ListItem>
                                        </>
                                    )
                                })}
                            </ListWrapper>
                        </FadeIn>

                    </PlaylistsWrapper>
                )}
            </PlaylistOutside>

            
            <Footer2 >
                <AcrossDiv>Across the internet.</AcrossDiv>
                <IconsWrapper><Footer {...props} /></IconsWrapper>
            </Footer2>
        </React.Fragment >
    )
}

export default Spotify