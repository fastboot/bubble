import React from 'react'
import axios from 'axios'

const getData = async (name) => {

    const url = 'https://api.spotify.com/v1/me/player?market=IN&additional_types=episode'
    const response = await axios.get(url, {
        headers: {
            'Authorization': 'Bearer BQAztao7yQDm3Z0DN-fH4rmXeB5oNKWKyzRYLLfZALO7N8bd1ztmxanZr2dANCPBy6z8u7quJQwcpvIXrPvhVYcx1_U7lSwLLLpjyJdat89f_SR4zYg0R54EVYqjVBzzywIzq0AYGTVsWTkmapYzdRhwr8PxXWK5764JHg9c5mvRXwplOz5R9e8',
        }
    })
    console.log(response.data)
    // return (response.data)
    // return {status:400, message: JSON.stringify(response.data)};
}


function NowPlaying() {
    getData();
    // const song = getData().then((res) => res.data);
    return (
        <div>
            <h1> Now Playing </h1>
        </div>
    )
}

export default NowPlaying