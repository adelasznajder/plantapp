import React, {useEffect, useState} from 'react';
import {useLocalStorage} from "./Hooks/UseLocalStorage";

export const AddPlant = () => {
    const API = ' http://localhost:3000';
    const [plants, setPlants] = useState([]);
    const [name, setName] = useState("");
    const [light, setLight] = useState("");
    const [window, setWindow] = useState( "");
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
        if(newPlant.trim().length > 0){
            const tmpPlant = {
                id: plants.length+1,
                species: newPlant.name.trim(),
                water: newPlant.water.trim(),
                toxicity: toxic,
                light: {
                    amount: newPlant.light.trim(),
                    window: newPlant.window.trim()
                }

            };

            fetch(`${API}/species`, {
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

            setPlants(prev=>[...prev, tmpPlant]);
            setNewPlant("");
        }
    };

    useEffect(() => {
        getPlants();
    }, []);

    if (plants.length === 0) return null;
    return (<form>
        <h2>Do you want to help us grow our species database? Please fill in the form below!</h2>
        <label>Species:
            <textarea value = {name} placeholder={`What's the plant's species?`} onChange={e => setName(e.target.value)}/>
        </label>
        <label>Light:
            <textarea value={light} placeholder={`What amount of light does it need?`} onChange={e => setLight(e.target.value)}/>
            <textarea value={window} placeholder={`Which window serves it best? North, east, west, south?`} onChange={e=>setWindow(e.target.value)}/>
        </label>
        <label>Water:
            <textarea value={water} placeholder={`How often should you water it?`} onChange={e => setWater(e.target.value)}/>
        </label>
        <label>Toxicity:
            <select value={toxic} onChange={handleToxicChange}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
        </label>

        <input type="submit" value="Wyślij" onClick={handleSubmit}/>
    </form>)

}