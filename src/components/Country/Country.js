import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, flags, capital, population } = props.country;

    return (
        <div className="country">
            <h1>This is {name}</h1>
            <img src={flags[1]} alt="" />
            <h3>Capital: {capital}</h3>
            <h4>Population: {population}</h4>
        </div>
    );
};

export default Country; <h1>This is One Counrty</h1>