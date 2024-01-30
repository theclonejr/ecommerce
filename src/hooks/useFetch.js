import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = () => {
    
    const [infoApi, setInfoApi] = useState()

    const getApi = (url, config = {}) => {
        axios.get(url, config)
            .then(res => setInfoApi(res.data))
            .catch(err => console.log(err))
    }

    return [infoApi, getApi]
}

export default useFetch