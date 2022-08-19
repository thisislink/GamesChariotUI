import axios from "axios";
import {useState, useEffect } from "react";

function GamesChariot() {
    const [ getGamesList, setGamesList ] = useState([]);

    useEffect(() => {
        const production  = `${process.env.REACT_APP_PROD}`;
        const development = `${process.env.REACT_APP_DEV}`;
        const url = `${process.env.PORT ? production : development}/games`;
    
        const gamesList = () => {
            axios.get(url)
                .then(response => {
                    setGamesList(JSON.stringify(response.data.gamesList));
                    console.log(JSON.stringify(response.data.gamesList));                   
                })
                .catch( error => console.log(`Error: ${error}`))
        }
        
        gamesList();
    }, []);


    return(
        <>
            <div>
                {getGamesList}
            </div>
        </>
    );
}

export default GamesChariot;
