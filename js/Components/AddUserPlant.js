import React, {useEffect, useState} from 'react';


export const AddUser = () => {
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
        <div className="jumbotron jumbotron-fluid">
            <div className="container push-spaces">
                <h1 className="display-4">Add a new plant to your garden!</h1>
                <p className="lead">Please fill in the form below. Thank you!</p>
            </div>
        </div>
        <label>How do you call your plant?: </label>
            <textarea value={name} placeholder={`What's your plant's name?`} onChange={e => setName(e.target.value)}/>
        <label>Species: </label>
            <select value={species}>
                {plants.map(plant =>
                    <option value={plant.name}>
                        {plant.name}
                    </option>)}
            </select>
        <button className="btn btn-primary" type="submit"> Submit!</button>
    </form>)
}

