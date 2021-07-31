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

function Languages(props) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [stat, setStat] = useState()    
    const [componentMounted, setComponentMounted] = useState(true)
    useEffect(() => {
        if(componentMounted) {
            fetchData();
        }
        return () => {
            setComponentMounted(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {data && stat && 
            <Fragment>
                <Bar>
                    <FirstDiv
                        width = {stat[0].percent.toString()}
                    />
                    <SecondDiv
                        width = {stat[1].percent.toString()}
                    />
                    <ThirdDiv
                        width = {stat[2].percent.toString()}
                    />
                    <FourthDiv
                        width = {stat[3].percent.toString()}
                    />
                    <FifthDiv 
                        width = {stat[4].percent.toString()}
                    />
                </Bar>
                <ListDiv>
                    <Dot color = '#f4e45c'/><Typography>{stat[0].name}</Typography>
                    <Dot color = '#e44c24'/><Typography>{stat[1].name}</Typography>
                    <Dot color = '#543c7c'/><Typography>{stat[2].name}</Typography>
                    <Dot color = '#8ce454'/><Typography>{stat[3].name}</Typography>
                    <Dot color = '#50a7fc'/><Typography>{stat[4].name}</Typography>
                </ListDiv>
            </Fragment>
            }
        </div>
    )
}

export default Languages

