import React, {useState, useEffect} from "react";
import {GetDate} from "./Date";

export const PlantList = () => {
    const [plants, setPlant] = useState([]);
    const [date, setDate] = useState(new Date());

    const API = "http://localhost:3000";

    const getPlants = () => {
        fetch(`${API}/userplants`)
            .then(resp => resp.json())
            .then(data => setPlant(data))
            .catch(err => console.log(err));
    }

    const WaterPlant = (id) => {
        const data = {
            watered: true,
            lastwatered: date
        };
        fetch(`${API}/userplants/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }


    useEffect(() => {
        getPlants();
    }, []);


    if (plants.length === 0) return <h1 className="plantlist-title">You've no plants!</h1>;
    return (
        <div className="plantlist-container">
            <GetDate date={date}/>
            <h1 className="plantlist-title">Your plant collection:</h1>
            <ul>
                {plants.map(plant =>
                    <li key={plant.id}>
                        {plant.name}.
                        <button onClick={e => WaterPlant(plant.id)}>Water!</button>
                    </li>)}
            </ul>
        </div>
    )
};