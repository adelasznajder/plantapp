import React, {useEffect, useState} from 'react';
import {useLocalStorage} from "./Hooks/UseLocalStorage";

export const AddPlant = () => {
    const API = ' http://localhost:3000';
    const [plants, setPlants] = useState([]);
    const [name, setName] = useState("");
    const [light, setLight] = useState("");
    const [window, setWindow] = useState("");
    const [water, setWater] = useState("");
    const [toxic, setToxic] = useState(false);
    const [newPlant, setNewPlant] = useState("");


    const getPlants = () => {
        fetch(`${API}/species`)
            .then(resp => resp.json())
            .then(data => setPlants(data))
            .catch(err => console.log(err));
    };

    const handleToxicChange = (e) => {
        setToxic(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
            const tmpPlant = {
                id: plants.length + 1,
                species: name,
                water: water,
                toxicity: toxic,
                light: {
                    amount: light,
                    window: window
                }
            }
            console.log(tmpPlant);
            setPlants(prev => [...prev, tmpPlant]);
             setNewPlant("");
            return fetch(`${API}/species`, {
                method: "POST",
                body: JSON.stringify(tmpPlant),
                headers: {
                    "Content-Type": "application/json"
                }




            });

        }

        useEffect(() => {
            getPlants();
        }, []);

        if (plants.length === 0) return null;
        return (
            <form onSubmit={handleSubmit}>
                <h2>Do you want to help us grow our species database? Please fill in the form below!</h2>
                <label>Species:
                    <textarea value={name} placeholder={`What's the plant's species?`}
                              onChange={e => setName(e.target.value)}/>
                </label>
                <label>Light:
                    <label>How much light does it need?</label>
                    <textarea value={light} onChange={e => setLight(e.target.value)}/>
                    <label>Which window serves it best? North, east, west, south?</label>
                    <textarea value={window} onChange={e => setWindow(e.target.value)}/>
                </label>
                <label>Water:
                    <textarea value={water} placeholder={`How often should you water it?`}
                              onChange={e => setWater(e.target.value)}/>
                </label>
                <label>Toxicity:
                    <select value={toxic} onChange={handleToxicChange}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </label>
                <button type="submit" value="Wyślij"> Submit!</button>
            </form>)

    }