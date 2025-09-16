/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    AlbumArt,
    Bar,
    Dot,
    Filler,
    LoaderDiv,
    NowPlaying,
    NowPlayingArtist,
    NowPlayingCard,
    NowPlayingTrack,
    PlayingDevice,
    SpotifyLogo,
    StripDeviceIcon,
    TopBar
} from './styles.js'
import Spinner from '../../../components/Spinner'
import { useInterval } from './interval'; 
import Vibrant from 'node-vibrant';
import computer from '../../../assets/icons/computer.png'
// import computerWhite from '../../../assets/icons/computerWhite.png'
import smartphone from '../../../assets/icons/smartphone.png'
// import smartphoneWhite from '../../../assets/icons/smartphoneWhite.png'
import spotify from '../../../assets/icons/spotify.png'


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


function Dashboard(props) {
    const [track, setTrack] = useState('')
    const [artist, setArtist] = useState('')
    const [albumart, setAlbumart] = useState("https://picsum.photos/id/237/200/300")
    // removed unused device state
    const [deviceType, setDeviceType] = useState('')
    const [duration, setDuration] = useState(0)
    const [progress, setProgress] = useState(0)
    // removed unused externalUrl state
    const [isLoading, setIsLoading] = useState(true);
    const [colors, setColors] = useState([
        '#FF5733', // a vibrant red-orange
        '#33FF57', // a vibrant green
        '#3357FF', // a vibrant blue
        '#FF33A6', // a vibrant pink
        '#FF33F6'  // a vibrant magenta
      ]);
    /*
        duration = 600
        curr     = (curr / duration) * 600;
    */
    useInterval(() => {
        // put your interval code here.
        axios
        .get("https://bubble-backend.vercel.app/currentTrack", {})
        .then(res => {
            if(res.data.item) {
                setArtist(res.data.item.artists[0].name)
                // setDevice(res.data.device.name)
                setTrack(res.data.item.name)
                setAlbumart(res.data.item.album.images[0].url)
                setDeviceType(res.data.device.type)
                // setExternalUrl(res.data.item.external_urls.spotify)
                setDuration(res.data.item.duration_ms)
                setProgress(res.data.progress_ms)

                Vibrant.from(res.data.item.album.images[0].url).getPalette((err, palette) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    const hexColors = Object.values(palette).map(swatch => swatch ? swatch.getHex() : null);
                    setColors(hexColors);
                  });
                
            }
        })
        .catch((err) => {
            console.log(err)
        },[])
        .finally(() => {
            
            setIsLoading(false);
            
        })
    }, 1000);

  const initialWidth = window.innerWidth * 0.8;
  const initialHeight = 800;
  const minWidth = window.innerWidth * 0.6;
  const minHeight = 600;

  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startShrink = 50;
      const endShrink = 300;

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

    const { dominantColor, darkestColor, detailColor} = getColorsForGradientAndDetail(colors);
    
    return (
        <React.Fragment>
            { isLoading && (
                <LoaderDiv>
                    <Spinner />
                </LoaderDiv>
            )}
            { !isLoading && artist && ( <>
                        <NowPlaying dominantColor={dominantColor} darkerColor={darkestColor} lighterColor={detailColor} width={size.width} height={size.height}>
                        <TopBar>
                        <SpotifyLogo src={spotify} />
                        <PlayingDevice>Playing on <StripDeviceIcon src = { deviceType === 'Computer'? computer : smartphone } alt = 'device' /></PlayingDevice>
                        </TopBar>
                          <NowPlayingCard>
                              
                             <AlbumArt src={albumart} />
                             <NowPlayingTrack>{track}</NowPlayingTrack>
                             <NowPlayingArtist>{artist}</NowPlayingArtist>
                            <Bar>
                                <Filler percent = {(progress / duration) * 100} width = '100'  detailColor={detailColor}/>
                                <Dot detailColor={detailColor}/>
                            </Bar>
                            {/* <Device>
                                <StripDeviceIcon src = { deviceType === 'Computer'? (props.theme === 'dark' ? computerWhite : computer) : (props.theme === 'dark' ? smartphoneWhite : smartphone )} alt = 'computer' />
                                <NowPlayingDevice> { device } </NowPlayingDevice>
                            </Device> */}
                          
                          </NowPlayingCard>
                          
                        </NowPlaying>
                    </>
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