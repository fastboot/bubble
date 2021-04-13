import React, {useState, useEffect} from 'react'
import { Heatmap } from 'react-github-heatmap';
import ReactTooltip from 'react-tooltip'
import axios from 'axios'

function HeatmapComponent() {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const defaultTheme = {
        background: 'transparent',
        text: '#000',
        grade4: '#FF019A',
        grade3: '#9B00E8',
        grade2: '#290CFF',
        grade1: '#0161E8',
        grade0: 'white',
      };
    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        await axios.get("https://github-contributions.vercel.app/api/v1/fastboot")
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => setIsLoading(false))
      }
      
    return (
        <div style = {{ width: '90%', height: '500px', marginLeft: '50px' }}>
            {isLoading && <span>Loading...</span>}
            {data && <Heatmap data={data} blockSize={20} fontSize={16} theme={defaultTheme}><ReactTooltip delayShow={30} html /></Heatmap>}
        </div>
    )
}

export default HeatmapComponent

