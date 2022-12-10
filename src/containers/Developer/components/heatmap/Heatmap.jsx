import React, {useState, useEffect} from 'react'
import { Heatmap } from 'react-github-heatmap';
import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import Spinner from '../../../../components/Spinner';

function HeatmapComponent(props) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const defaultTheme = {
        background: 'transparent',
        text: '#000',
        grade4: '#1c6424',
        grade3: '#249c3c',
        grade2: '#7ccc6c',
        grade1: '#c4e48c',
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        await axios.get("https://bubble-backend.vercel.app/contributions", {
            headers: {"Access-Control-Allow-Origin": "*"}
        })
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => setIsLoading(false))
      }
      
    return (
        <div style = {{ padding: '24px', textAlign: 'center' }}>
            {isLoading && <Spinner />}
            {data && 
            <Heatmap 
                data={data} 
                blockSize={15} 
                fontSize={15} 
                theme={ props.currTheme.mode === 'dark' ? darkTheme: defaultTheme }
            >   
                <ReactTooltip delayShow={10} html />
            </Heatmap>}
        </div>
    )
}

export default HeatmapComponent

