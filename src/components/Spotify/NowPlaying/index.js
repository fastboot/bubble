import React from 'react'
import axios from 'axios'

const getData = async (name) => {

    const url = 'https://api.spotify.com/v1/me/player?market=IN&additional_types=episode'
    const response = await axios.get(url, {
        headers: {
            'Authorization': 'Bearer BQBoagAnt7GvW7OJ2u8KqScEm2jFMFzBR97Ud8seU0rnxGytPi6BIff2XiTiTMmfvZsDaDDGkDLZaaKrppAwbHUl-ZRz_FIlXxOdZXovTqI8yZtHioaYTj_dsfJKjFb3iJu6ytLBmhp1ZSee-wr37ckxwq5w9x607RN0R3O1acQmqQtYszPEO0A',
        }
    })

    console.log(response)
    return {status:400, message: JSON.stringify(response.data)};
}


function NowPlaying() {

    console.log(typeof(getData().status));

    return (
        <div>
        </div>
    )
}

export default NowPlaying