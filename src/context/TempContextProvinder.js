import React, { createContext, useState } from 'react'
import kelvinToCelcius from "../helpers/kelvinToCelcius";
import kelvinToFahrenheit from "../helpers/kelvinToFahrenheit";

export const TempContext = createContext(null);

function TempContextProvider({ childeren }) {
    const [selectedMetric, toggleSelectedMetric] = useState('celcius');

    function toggleTemp() {
        if (selectedMetric === 'celcius') {
            toggleSelectedMetric('fahrenheit');
        } else {
            toggleSelectedMetric("celcius");
        }
    }
            return (
            <TempContext.Provider
                value={{
            toggleTemp: toggleTemp,
            kelvinToMertic: selectedMetric === 'celcius' ? kelvinToCelcius: kelvinToFahrenheit,
            }}
>
        { childeren }
            // hier komt het component waar we onze eigen provider omheen wikkelen
        </TempContext.Provider>
    )
}

export default TempContextProvider;