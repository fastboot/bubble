import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import NowPlaying from '../../components/Spotify/NowPlaying'
import {
    Heading,
    H,
    PlaylistName,
    PlaylistDiv,
    AlbumArt,
    PlaylistsWrapper,
    StyledA,
    Arrow,
    NowPlayingWrapper,
    ListWrapper,
    ListItem,
    ListItemImage,
    HorizontalLine,
    RecentWrapper,
    RecentTrack,
    RecentGap,
    FollowButton,
    CollabWrapper,
    CollabCard,
    TopTrack,
    TopArtist,
    TopGenres,
    Follow,
    TopTitle,
    TopLabel,
    ArtistArt,
    TrackArt,
    Carousel,
    TopFollowTitle,
    TopFollowDiv,
    ProfileFollowImg,
    RecentTopWrapper,
    RecentListWrapper,
    RecentWrapperCard,
    RecentImageWrapper,
    RecentImage, 
    NowPlayingTrack,
    NowPlayingArtist
} from './styles'
import getColor from 'colorthief'
import FadeIn from './FadeIn'
import Vibrant from 'node-vibrant';
import { lyrics } from './famous-lines'
import profile from '../../assets/profile/dp.png'
import DarkModeSwitch from '../../components/theme-toggle/theme-toggle'
import DarkMode from '../../components/theme-toggle/theme-toggle'
import NewNavigation from '../../components/new-navbar/new-navbar'

function calculateBrightness(hexColor) {
    const rgb = hexColor.match(/\w\w/g).map(x => parseInt(x, 16));
    return 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
  }
  
  function getColorsForGradientAndDetail(colors) {
    const brightnessValues = colors.map(color => ({
      color,
      brightness: calculateBrightness(color),
    }));
  
    brightnessValues.sort((a, b) => a.brightness - b.brightness);
  
    const darkestColor = brightnessValues[0].color;
    const lightestColor = brightnessValues[brightnessValues.length - 1].color;
    const dominantColor = brightnessValues[Math.floor(brightnessValues.length / 2)].color;
  
    return {
      darkestColor,
      dominantColor,
      detailColor: lightestColor,
    };
  }

  const rgbToHex = (rgbArray) => {
  const [r, g, b] = rgbArray; // Destructure the array

  const toHex = (c) => {
    const hex = c.toString(16); // Convert to hex
    return hex.length === 1 ? "0" + hex : hex; // Add leading zero if necessary
  };

  return "#" + toHex(r) + toHex(g) + toHex(b); // Concatenate and return
};

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
                console.log(res);
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
            <NewNavigation />
            <NowPlayingWrapper>
                <NowPlaying strip="noshow" theme={props.currTheme.mode} />
            </NowPlayingWrapper>

            <RecentWrapper>
                <RecentWrapperCard>
                <RecentTopWrapper>
                    <RecentImageWrapper>
                    {topTrack && (<TrackArt src={topTrack[0].album.images[0].url} />)}
                        {topArtist && (<TopLabel color="#EBC944">{topArtist[0].name}</TopLabel>)}
                        {topArtist && (<TopLabel color="#EBC944">{topArtist[0].name}</TopLabel>)}
                    </RecentImageWrapper>

                </RecentTopWrapper>
                <RecentListWrapper>

                <RecentImageWrapper>
                {topArtist && (<ArtistArt src={topArtist[0].images[0].url} />)}
                        {topArtist && (<TopLabel color="#EBC944">{topArtist[0].name}</TopLabel>)}
                        {topArtist && (<TopLabel color="#EBC944">{topArtist[0].name}</TopLabel>)}
                    </RecentImageWrapper>

                </RecentListWrapper>
                </RecentWrapperCard>
            </RecentWrapper>

            {data && (
                <PlaylistsWrapper>
                    <FadeIn>
                        <Heading>
                            <H>  </H>
                        </Heading>

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
            <FadeIn>
                    <CollabWrapper>
                            <CollabCard width={size.width} height={size.height}>
                            <TopArtist>
                                <TopTitle>Top artist</TopTitle>
                                {topArtist && (<TopLabel color="#EBC944">{topArtist[0].name}</TopLabel>)}
                                {topArtist && (<ArtistArt src={topArtist[0].images[0].url} />)}
                            </TopArtist>
                            <TopTrack>
                                <TopTitle>Top track</TopTitle>
                                {topTrack && (<TopLabel color="#FF4500">{topTrack[0].name}</TopLabel>)}
                                {topTrack && (<TrackArt src={topTrack[0].album.images[0].url} />)}
                            </TopTrack>
                            <TopGenres>
                                <TopTitle>Top genres</TopTitle>
                                <TopLabel color="#43ABC9">{"modern bollywood"}</TopLabel>
                                <TopLabel color="#43ABC9">{"pop"}</TopLabel>
                                <TopLabel color="#43ABC9">{"rap"}</TopLabel>
                            </TopGenres>
                            <Follow>
                               <Carousel>
    
                               {lyrics[currentLineIndex]}

                               </Carousel>
                               <TopFollowDiv><ProfileFollowImg src={profile} />Tune in!</TopFollowDiv>
                            </Follow>
                            </CollabCard>
                    </CollabWrapper>
                    </FadeIn>
            
        </React.Fragment>
    )
}

export default Spotify