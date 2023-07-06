import React, { useState, useEffect } from 'react';

//  Api
import axios from 'axios';

// Components
import Coin from './Coin';
import Loader from './Loader';

// Styles
import styles from './Landing.module.css';


const Landing = () => {

    let [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en')
            .then(response => setData(response.data))
    }, [])

    const searchedCoin = (event) => {
       setSearch(event.target.value);  
       console.log(event.target.value);
    }

    const searchedCoins = data.filter(inform=> inform.id.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            {data.length ? 
                <div className={styles.coinContainer}>
                    <input className={styles.input} type='text' placeholder='Search...' value={search} onChange={searchedCoin}></input>
                    {searchedCoins.map(inform => <Coin image={inform.image} name={inform.name} symbol={inform.symbol} price={inform.current_price} priceChange={inform.price_change_percentage_24h} marketCap={inform.market_cap}/>)}
                </div> : 
                <Loader />
            }
        </>
    );
};

export default Landing;