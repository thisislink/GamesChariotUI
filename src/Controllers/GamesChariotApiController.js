import axios from "axios";
import {useState, useEffect } from "react";

function GamesChariotApi() {
    const [ getConfigs, setConfigs ] = useState([]);

    useEffect(() => {
        const production  = `${process.env.REACT_APP_URL_PROD}`;
        const development = `${process.env.REACT_APP_URL_DEV}`;
        const url = `${process.env.NODE_ENV ? production : development}/api`;

        const gamesList = () => {
            axios.get(url)
                .then(response => {
                    const updatedConfigs = {
                        apiUrl: response.data.apiUrl,
                        databaseServer: response.data.databaseServer,
                        databaseUsername: response.data.databaseUsername,
                        databasePassword: response.data.databasePassword,
                    };
                    setConfigs([updatedConfigs])
                })
                .catch( error => console.log(`Error: ${error}`))
        }
        gamesList();
    }, []);

    return(
        <>
            <ul>
                {getConfigs.map((configItem) =>
                    (
                        <div key={Math.random()}>
                    <li key={Math.random()}>apiUrl: {configItem.apiUrl}</li>
                    <li key={Math.random()}>databaseServer: {configItem.databaseServer}</li>
                    <li key={Math.random()}>databaseUsername: {configItem.databaseUsername}</li>
                    <li key={Math.random()}>databasePassword: {configItem.databasePassword}</li>
                        </div>
                ))}
            </ul>
        </>
    );
}

export default GamesChariotApi;
