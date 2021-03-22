import React, { useEffect, useState } from 'react'
import axios from 'axios'

// const getData = async (name) => {

//     const url = 'https://api.spotify.com/v1/me/player?market=IN&additional_types=episode'
//     const response = await axios.get(url, {
//         headers: {
//             'Authorization': 'Bearer BQBFNBEpohZTMErHumstckpZDPVs_731pJPjZeTYO4Kk3MV_7KwoPstQxaHAOq7O3N9rkpzXY7Zx6hgnlOJYSYDdWjeL7LV8LDw9j-97ccD0wFjbtqsjSJTsbhpr12G495m2vOtwMir_CzwNx-Br5S6LwokScGrXFIMhamIJFn-IQ3fTF6EmniY',
//         }
//     })
//     console.log(response.data)
//     return (response.data)
//     // return {status:400, message: JSON.stringify(response.data)};
// }

// useEffect(() => {     
//     const getData = async () => {  
//       await axios.get('your_url')  
//       .then(res => {  
//         console.log(res)  
//       })  
//       .catch(err => {  
//         console.log(err)  
//       });  
//     }  
//     getData()  
//   }, [])

function NowPlaying() {
    
    // getData();
    const [track, setTrack] = useState('');
    useEffect(() => {
        const getData = async () => {
        const url = 'https://api.spotify.com/v1/me/player?market=IN&additional_types=episode'
        const response = await axios.get(url, {
            headers: {
                'Authorization': 'Bearer BQBFNBEpohZTMErHumstckpZDPVs_731pJPjZeTYO4Kk3MV_7KwoPstQxaHAOq7O3N9rkpzXY7Zx6hgnlOJYSYDdWjeL7LV8LDw9j-97ccD0wFjbtqsjSJTsbhpr12G495m2vOtwMir_CzwNx-Br5S6LwokScGrXFIMhamIJFn-IQ3fTF6EmniY',
            }
        })
        console.log(response.data)
        setTrack(response.data.item.name)
    };
        getData();
    },[])
    // const song = getData().then((res) => res.data);

    return (
        <div>
            <h1> {track} </h1>
        </div>
    )
}

export default NowPlaying