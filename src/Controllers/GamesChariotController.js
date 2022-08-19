import axios from "axios";
import {useState, useEffect } from "react";

function GamesChariot() {
    const [ getMessage, setMessage ] = useState([]);
    
    useEffect(() => {
        const production  = `${process.env.REACT_APP_PROD}`;
        const development = `${process.env.REACT_APP_DEV}`;
        const url = `${process.env.PORT ? production : development}`;
        

        const defaultMessage = () => {
            axios.get(url)
                .then(response => {
                    setMessage(response.data.message);
                    console.log(response.data.message);                   
                })
                .catch( error => console.log(`Error: ${error}`))
        }
        
        defaultMessage();
    }, []);


    return(
        <>
            <div>
                {getMessage}
                <p>Get the games list from <a href="https://gameschariotui.herokuapp.com/games">https://gameschariotui.herokuapp.com/games</a></p>
            </div>
        </>
    );
}

export default GamesChariot;
