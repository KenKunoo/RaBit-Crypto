import { createContext, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({children}) => {
    const [cryptoData, setCryptoData] = useState();

    //Get Data and convert to json and catch errors
    const getCryptoData = async () => {
        try{
            const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en').then(res => res.json()).then(json => json);

            console.log(data);
        } catch (error) {
            console.log(error);
        }
        
        //Get data on load
        useLayoutEffect(() => {
            getCryptoData();
        }, [])

        //Return Data
        return(
            <CryptoContext.Provider value={{}}>
                {children}
            </CryptoContext.Provider>
        )
    }
}