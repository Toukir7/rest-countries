import './Countries.css'
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hellow from Countries</h1>
            <h4>No Of Countries: {countries.length}</h4>
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        key={country.name}
                        country={country}

                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries; <h1>Hellow from Countries</h1>