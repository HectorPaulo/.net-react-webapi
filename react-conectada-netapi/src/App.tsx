import './App.css'
import {useEffect, useState} from "react";
import type WeatherForecast from "./Models/weatherforecast.models.ts";

function App() {

    const [weatherforecast, setWeatherforecast] = useState<WeatherForecast[]>();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/weatherforecast`).then(respuesta => respuesta.json().then(json => setWeatherforecast(json)))
    }, [])
  return (
    <>
        {weatherforecast ? <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
            <ul>
            {

                weatherforecast.map(wf => <li key={wf.date}>
                    {`${wf.date} - ${wf.summary} (${wf.temperatureC}C)`}
                </li>)
            }
                </ul>
        </div> : 'cargando...'
            }
    </>
  )
}

export default App
