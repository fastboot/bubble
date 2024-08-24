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
    Follow,
    Carousel,
    TopFollowDiv,
    ProfileFollowImg,
    RecentWrapperCard,
    TopWrapper,
    TopWrapperHeading,
    TopWrapperList,
    TopWrapperListItem,
    TopWrapperListItemName,
    TopWrapperListItemImage,
    IndexColor,
    FollowMeText,
    PageHeading,
    PlaylistOutside,
    RecentOutside
} from './styles'
import getColor from 'colorthief'
import FadeIn from './FadeIn'
import { lyrics } from './famous-lines'
import profile from '../../assets/profile/dp.png'
import NewNavigation from '../../components/new-navbar/new-navbar'
import { Footer2, GradientDiv, AcrossDiv, IconsWrapper } from '../Landing/styles'
import Footer from '../../components/Footer';

function Spotify(props) {

    const [data, setData] = useState()
    const [recentData, setRecentData] = useState();
    const [topTrack, setTopTrack] = useState();
    const [topArtist, setTopArtist] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [colors, setColors] = useState([
        '#FF5733', // a vibrant red-orange
        '#33FF57', // a vibrant green
        '#3357FF', // a vibrant blue
        '#FF33A6', // a vibrant pink
        '#FF33F6'  // a vibrant magenta
    ]);

    useEffect(() => {
        fetchData();
        fetchDataAgain();
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
    const fetchDataAgain = async () => {
        setIsLoading(true);
        await axios.get("https://bubble-backend.vercel.app/profile")
            .then((res) => {
                setRecentData(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsLoading(false))
    }

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

    const initialWidth = window.innerWidth * 0.6;
    const initialHeight = 600;
    const minWidth = window.innerWidth * 0.8;
    const minHeight = 800;

    const [size, setSize] = useState({ width: initialWidth, height: initialHeight });

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const startShrink = 300;
            const endShrink = 50;

            if (scrollY > startShrink) {
                const progress = Math.min((scrollY - startShrink) / (endShrink - startShrink), 1);
                const newWidth = initialWidth - (initialWidth - minWidth) * progress;
                const newHeight = initialHeight - (initialHeight - minHeight) * progress;
                setSize({ width: newWidth, height: newHeight });
            } else {
                setSize({ width: initialWidth, height: initialHeight });
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [initialWidth, initialHeight, minWidth, minHeight]);


    const [currentLineIndex, setCurrentLineIndex] = useState(Math.floor(Math.random() * lyrics.length));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLineIndex(Math.floor(Math.random() * lyrics.length));
        }, 4000); // Change line every 3 seconds

        return () => clearInterval(interval);
    }, []);

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

            <PlaylistOutside>
                <PageHeading>
                    More playlists, you will find your vibe.
                </PageHeading>
                {data && (
                    <PlaylistsWrapper>

                        <FadeIn>


                            <ListWrapper>
                                {data.map((playlist, index) => {

                                    if (data[index].owner.id === "spotify" || data[index].name === "ROXANNE") {

                                        return <></>;
                                    }
                                    return (
                                        <>

                                            <ListItem bkcolor={getColor(data[index].images[0].url)}>
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
                                    const artists = currentTrack.artists.map((curr) => { return curr.name })
                                    const artistText = artists.toString()
                                    return (
                                        <>
                                            <TopWrapperListItem>
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
                                        <TopWrapperListItem artist>
                                            <TopWrapperListItemName><IndexColor artist>{index + 1}</IndexColor>&nbsp;&nbsp; {currentArtist.name}</TopWrapperListItemName>
                                            {topTrack && (<TopWrapperListItemImage src={currentArtist.images[0].url} />)}
                                        </TopWrapperListItem>
                                    )
                                })}
                            </TopWrapperList>
                        </TopWrapper>

                    </RecentWrapperCard>



                    <Follow>
                        <Carousel>

                            {lyrics[currentLineIndex]}

                        </Carousel>
                        <TopFollowDiv>
                            <FollowMeText>Follow me </FollowMeText>
                            <ProfileFollowImg src={profile} />
                        </TopFollowDiv>
                    </Follow>
                </RecentWrapper>

            </RecentOutside>
            <Footer2 >
                <AcrossDiv>Across the internet.</AcrossDiv>
                <IconsWrapper><Footer {...props} /></IconsWrapper>
            </Footer2>
        </React.Fragment >
    )
}

export default Spotify