import React, {useState} from 'react';
import {DataPlantApiService} from "../services/DataPlantService";
import {DataPlantModel} from "../models/DataPlantModel";
import {PlantDetail} from "../models/PlantDetail";

const DataService = new DataPlantApiService();


export const Register = () => {
    const [plant, setPlant] = useState(new DataPlantModel());
  /*  const [errors, setErrors] = useState([]);*/


    const handleChangePlantData = e => {
        const {name, value} = e.target;
        setPlant(prev => ({
                ...prev,
                [name]: value
            })
        );
    };

    const sendForm = () => {
        DataService.addUserPlant(
            plant,
            data => setPlant(data),
            err => console.log(err)
        )

    };

    const handleSubmit = e => {
        sendForm();
        e.preventDefault();
    };

    const formStyle = {
        display: "flex",
        flexDirection: "column"
    };

    if (plant.id) return <PlantDetail plant={plant}/>

    return (
        <section>
            <form style={formStyle} onSubmit={handleSubmit}>
                <h2>Do you want to help us grow our species database? Please fill in the form below!</h2>
                <label>What's the plant species?
                    <input name={"name"} type={"text"} value={plant.name} onChange={handleChangePlantData}/>
                </label>
                <label>Light:
                    <label>How much light does it need?</label>
                    <select name={"light.amount"} value={plant.light.amount} onChange={handleChangePlantData}>
                        <option value={"small"}>It can handle the shadows</option>
                        <option value={"moderate"}>Likes light, but not direct sunlight</option>
                        <option value={"a lot"}>It just LOVES the light!</option>
                    </select>
                    <label>Which windows serve it best? North, east, west, south? </label>
                    <input name={"light.window"} type={"text"} value={plant.light.window} onChange={handleChangePlantData}/>
                </label>
                <label>How often should it be watered?
                    <select name={"water"} value={plant.water} onChange={handleChangePlantData}>
                        <option value={7}>Once a week</option>
                        <option value={14}>Twice a month</option>
                        <option value={28}>Once a month</option>
                    </select>
                </label>
                <label>Toxicity:
                    <select name={"toxicity"}value={plant.toxicity} onChange={handleChangePlantData}>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                </label>
                <button type="submit"> Submit!</button>
            </form>
        </section>)
};

