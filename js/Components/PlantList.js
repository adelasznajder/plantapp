import React, {useState, useEffect} from "react";
import {GetDate} from "./Date";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import {CheckIfWatered} from "./Hooks/CheckIfWatered";
import {UserPlantApiService} from "../services/UserPlantService";

const UserPlantApi = new UserPlantApiService();

export const PlantList = () => {
        const [plants, setPlant] = useState([]);
        const [date, setDate] = useState(new Date());


        const API = 'http://localhost:3000';

        const getPlants = () => {
            UserPlantApi.getAll(
                data => setPlant(data),
                err => console.log(err)
            )
        };

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

        const removePlant = (id) => {
            UserPlantApi.removeUserPlant(id,
                data => setPlant(data)),
                err => console.log(err)
        }


        useEffect(() => {
            getPlants();
        }, []);


        if (plants.length === 0) return <h1 className="plantlist-title">You've no plants!</h1>;
        return (


            <div className="container">
                <GetDate date={date}/>
                <h1>Your plant collection:</h1>
                <ul className="list-group">
                    {plants.map(plant =>
                        <li className="list-group-item" key={plant.id}>
                            {plant.name}: it was last watered {plant.lastwatered}.
                            <button type="button" className="btn btn-info" onClick={e => WaterPlants(plant.id)}>Water!
                            </button>
                        </li>
                    )}
                </ul>
                <button type="button" className="btn btn-primary">Add a plant</button>
            </div>
        )
    }
;