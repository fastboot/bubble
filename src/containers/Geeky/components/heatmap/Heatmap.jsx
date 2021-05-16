import React, {useState, useEffect} from 'react'
import { Heatmap } from 'react-github-heatmap';
import ReactTooltip from 'react-tooltip'
import axios from 'axios'

function HeatmapComponent(props) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const defaultTheme = {
        background: 'transparent',
        text: '#000',
        grade4: '#03001c',
        grade3: '#fe9600',
        grade2: '#ffc501',
        grade1: '#ffee4a',
        grade0: '#ebedf0',
    };

    const darkTheme = {
        background: 'black',
        text: '#fff',
        grade4: '#ff79c6',
        grade3: '#bd93f9',
        grade2: '#6272a4',
        grade1: '#44475a',
        grade0: '#282a36',
    }
    
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
            {data && 
            <Heatmap 
                data={data} 
                blockSize={20} 
                fontSize={16} 
                theme={ props.currTheme.mode === 'dark' ? darkTheme: defaultTheme }
            >   
                <ReactTooltip delayShow={30} html />
            </Heatmap>}
        </div>
    )
}

export default HeatmapComponent

