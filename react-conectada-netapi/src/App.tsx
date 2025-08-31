import './App.css'
import {useEffect, useState} from "react";
import type WeatherForecast from "./Models/weatherforecast.models.ts";
import axios from 'axios';

function App() {

    const [weatherforecast, setWeatherforecast] = useState<WeatherForecast[]>();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/weatherforecast`)
            .then(respuesta => setWeatherforecast(respuesta.data));
    }, []);

  return (
    <>
        {weatherforecast ? <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
            <ul>
            {

                weatherforecast.map(wf => <li key={wf.date}>
                    {`${wf.date} - ${wf.summary} (${wf.temperatureC}C)`}
                </li>)
            }
                </ul>
        </div> :
            <div className="h-screen flex flex-col items-center justify-center">
                <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div
                        className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                    >
                        <div
                            className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                        ></div>
                    </div>
                </div>
            </div>

        }
    </>
  )
}

export default App
