import React, {useState, useEffect} from "react";
import {DataPlantApiService} from "../services/DataPlantService";

const PlantApi = new DataPlantApiService();

export const AllPlantList = () => {
        const [plants, setPlant] = useState([]);
        const getPlants = () => {
            PlantApi.getAll(
                data => setPlant(data),
                err => console.log(err)
            )
        };

        useEffect(() => {
            getPlants();
        }, []);


        if (plants.length === 0) return <h1>You've no plants!</h1>;
        return (
            <div className="container">
                <h1>Our Plant Database:</h1>
                <ul className="list-group">
                    {plants.map(plant =>
                        <li className="list-group-item" key={plant.id}>
                            {plant.name}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
;