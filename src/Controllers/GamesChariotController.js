import axios from "axios";
import {useState, useEffect } from "react";

function GamesChariot() {
    const [ getGamesList, setGamesList ] = useState([]);

    useEffect(() => {
        const production  = `${process.env.REACT_APP_PROD}`;
        const development = `${process.env.REACT_APP_DEV}`;
        const url = `${process.env.PORT ? production : development}`;

        const gamesList = () => {
            axios.get(url)
                .then( response => {
                    setGamesList(response.data.content);
                    console.log(response.data);
                })
                .catch( error => console.log(`Error: ${error}`))
        }

        gamesList();
    }, []);

    return(
        <>
            <div>{getGamesList}</div>
        </>
    );
}

export default GamesChariot;
