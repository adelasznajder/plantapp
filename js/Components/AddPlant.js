import React, {useEffect, useState} from 'react';
import {handleChange} from "./UseInput";

export const AddPlant = () => {
    const API = ' http://localhost:3000';
    const [plants, setPlants] = useState([]);


    const getPlants = () => {
        fetch(`${API}/species`)
            .then(resp => resp.json())
            .then(data => setPlants(data))
            .catch(err => console.log(err));
    }

    if (plants.length === 0) return null;
    return (<form>
        <label>Species:
            <textarea value={} onChange={handleChange}/>
        </label>
        <label>Light:
            <textarea value={} onChange={handleChange}/>
        </label>
        <label>Water:
            <textarea value={} onChange={handleChange}/>
        </label>
        <label>Temperature:
            <textarea value={} onChange={handleChange}/>
        </label>
        <label>Toxicity:
            <textarea value={} onChange={handleChange}/>
        </label>

        <input type="submit" value="Wyślij"/>
    </form>)

}