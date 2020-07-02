import React, {useState} from 'react';
import {DataPlantApiService} from "../services/DataPlantService";
import {DataPlantModel} from "../models/DataPlantModel";
import {PlantDetail} from "../models/PlantDetail";

const DataService = new DataPlantApiService();


export const Register = () => {
    const [plant, setPlant] = useState(new DataPlantModel());


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

    /*  const formStyle = {
          display: "flex",
          flexDirection: "column"
      };*/

    if (plant.id) return <PlantDetail plant={plant}/>

    return (
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container push-spaces">
                <h1 className="display-4">Do you want to help us grow our database?</h1>
                <p className="lead">Please fill in the form below. Thank you!</p>
            </div>
        </div>
        <fieldset>
            <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>What's the plant species?</label>
                            <input className="form-control" name={"name"} type={"text"} value={plant.name}
                                   onChange={handleChangePlantData}/>
                    </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>How much light does it need?</label>
                        <select className="custom-select" name={"light.amount"} value={plant.light}
                                onChange={handleChangePlantData}>
                            <option value={"small"}>It can handle the shadows</option>
                            <option value={"moderate"}>Likes light, but not direct sunlight</option>
                            <option value={"a lot"}>It just LOVES the light!</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Which windows serve it best? North, east, west, south? </label>
                        <input className="form-control" name={"light.window"} type={"text"} value={plant.window}
                               onChange={handleChangePlantData}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label>How often should it be watered?
                            <select className="custom-select" name={"water"} value={plant.water}
                                    onChange={handleChangePlantData}>
                                <option value={7}>Once a week</option>
                                <option value={14}>Twice a month</option>
                                <option value={28}>Once a month</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Is it toxic?:
                            <select className="custom-select" name={"toxicity"} value={plant.toxicity}
                                    onChange={handleChangePlantData}>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </label>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit"> Submit!</button>
            </form>
            </fieldset>
            </>)
                };

