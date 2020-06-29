import React, {useEffect, useState} from 'react';
import {handleChange} from "./UseInput";

export const AddUserPlant = () => {
    const API = ' http://localhost:3000';
    const [plants, setPlants] = useState([]);
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [newPlant, setNewPlant] = useState("");


    const getPlants = () => {
        fetch(`${API}/species`)
            .then(resp => resp.json())
            .then(data => setPlants(data))
            .catch(err => console.log(err));

    }


    const handleSubmit = e => {
        e.preventDefault();
        if (newPlant.trim().length > 0) {
            const tmpPlant = {
                id: plants.length + 1,
                name: newPlant.name.trim(),
                species: newPlant.species.trim(),
                watered: false

            };

            fetch(`${API}/userplants`, {
                method: "POST",
                body: JSON.stringify(tmpPlant),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
            setPlants(prev => [...prev, tmpPlant]);
            setNewPlant("");
        }
    }


    const handleToxicChange = (e) => {
        setSpecies(e.target.value);
    };

    useEffect(() => {
        getPlants();
    }, []);

    if (plants.length === 0) return null;
    return (<form>
        <h2>Add a plant to your garden!</h2>
        <label>Name:
            <textarea value={name} placeholder={`What's your plant's name?`} onChange={e => setName(e.target.value)}/>
        </label>
        <label>Species:
            <select value={species}>
                {plants.map(plant =>
                    <option value={plant.name}>
                        {plant.name}
                    </option>)}
            </select>
        </label>
        <input type="submit" value="Wyślij" onClick={handleSubmit}/>
    </form>)
}

