import React, { useState, useEffect } from "react";


export const PlantList = () => {
    const [plants, setPlant] = useState([]);
    const API = "http://localhost:3000";

    const getPlants = () => {
        fetch(`${API}/species`)
            .then(resp => resp.json())
            .then(data => setPlant(data))
            .catch(err => console.log(err));
    }

    const handleWater = (id) => {
        fetch(`${API}/species/${id}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(data => {
                const filteredPlants = plants.filter( plants => plants.id !== id );
                setPlant(filteredPlants);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getPlants();
    }, []);


    if (plants.length === 0) return <h1 className="plantlist-title">You've no plants!</h1>;
    return (
        <div className="plantlist-container">
        <h1 className="plantlist-title">Your collection:</h1>
        <ul>
            {plants.map(plant =>
                <li key={plant.id}>
                    {plant.species}
                    <button onClick={ e=> handleWater(plant.id)}>Water!</button>
                </li>)}
        </ul>
        </div>
    )
};