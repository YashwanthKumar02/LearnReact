import {useEffect, useState} from 'react'

function useCurrencyInfo(currency){
    const [data,setData] = useState({}) //any reactive data should be stored via useState
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(response => response.json())
        .then(response => setData(response[currency]))
        console.log(data);
    },[currency])

    return data
}

export default useCurrencyInfo