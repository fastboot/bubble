import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'

import {
    Bar,
    FirstDiv,
    SecondDiv,
    ThirdDiv,
    FourthDiv,
    FifthDiv,
    ListDiv,
    Dot,
    Typography
} from './styles'

function Commits(props) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [stat, setStat] = useState()     
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        await axios.get("https://codestats.net/api/users/fastboot")
        .then((res) => {
            setData(res.data)
            let lang = [];
            let response = [];
            Object.entries(res.data.languages).forEach(([key, value]) => {
                const curr_value = value.xps
                const curr_lang = key
                lang.push({ curr_value, curr_lang})
            })
            lang.sort(function(a, b) {
                return b.curr_value - a.curr_value
            })
            let total = 0;
            for(let i = 0; i < 5; i++) {
                total += lang[i].curr_value;
            }
            for(let i = 0; i < 5; i++) {
                const percent = (lang[i].curr_value * 100) / total
                const name = lang[i].curr_lang
                response.push({percent, name})
            }

            setStat(response)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => setIsLoading(false))
    }
      
    return (
        <div style = {{ width: '80%', height: '100px', marginLeft: '220px' }}>
            {isLoading && <span>Loading...</span>}
            {data && 
                <div>
                    Here it is!
                </div>
            }
        </div>
    )
}

export default Commits
