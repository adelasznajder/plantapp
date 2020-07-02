import React, {useState, useEffect} from "react";
import {GetDate} from "./Date";
import {CheckIfWatered} from "./CheckIfWatered";

export const PlantList = () => {
        const [plants, setPlant] = useState([]);
        const [date, setDate] = useState(new Date());
        const [nextUrl, setNextUrl] = useState(null);
        const [prevUrl, setPrevUrl] = useState(null);

        const API = "http://localhost:3000";

        const getPlants = () => {
            fetch(`${API}/userplants`)
                .then(resp => resp.json())
                .then(data => {
                    setPlant(data);
                    setNextUrl(data.next);
                    setPrevUrl(data.previous);
                })
                .catch(err => console.log(err));
        }
        const WaterPlants = (id) => {
            const data = {
                watered: true,
                lastwatered: date
            }
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
        };


        useEffect(() => {
            getPlants();
        }, []);


        if (plants.length === 0) return <h1 className="plantlist-title">You've no plants!</h1>;
        return (
            <div className="plantlist-container">
                <GetDate date={date}/>
                <h1 className="plantlist-title">Your plant collection:</h1>
                <ul className="list-group">
                    {plants.map(plant =>
                        <li className="list-group-item" key={plant.id}>
                            {plant.name}
                            <button type="button" className="btn btn-info" onClick={e => WaterPlants(plant.id)}>Water!</button>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
;