// customaizing our own Hook

import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
 const [data,setData]=useState({})
//  empty data initially this reflect the currency data that is changed on UI

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // json is to retrieve the data to store,send and transport data in format
        .then((res)=> res.json())
        // for that specific currency in provides the value if res.currency =>it 
        // try to find currency key but currencies are in usd,inr format so[currency]give the its value
        .then((res)=> setData(res[currency]))
        console.log(data);
        
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;