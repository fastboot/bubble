import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'

function Followers(props) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
        
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        await axios.get("https://api.github.com/users/fastboot/followers")
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => setIsLoading(false))
    }
      
    return (
        <div>
            Follow Button
        </div>
    )
}

export default Followers

